const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Ride = require('../models/Ride');
const User = require('../models/User');

// Create a new ride
router.post('/create', auth, async (req, res) => {
  try {
    const ride = new Ride({
      ...req.body,
      driver: req.user.id,
      status: 'active'
    });
    await ride.save();
    res.status(201).json(ride);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all active rides
router.get('/available', auth, async (req, res) => {
  try {
    const rides = await Ride.find({ 
      status: 'active',
      date: { $gte: new Date() }
    })
    .populate('driver', 'name')
    .sort({ date: 1 });
    res.json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get rides created by the logged-in user
router.get('/my-rides', auth, async (req, res) => {
  try {
    const rides = await Ride.find({ driver: req.user.id })
      .populate('driver', 'name')
      .populate('requests.passenger', 'name email')
      .populate('acceptedPassengers', 'name email')
      .sort({ date: -1 });
    res.json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Request to join a ride
router.post('/:rideId/request', auth, async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.rideId);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }

    // Check if user already requested
    if (ride.requests.some(request => request.passenger.toString() === req.user.id)) {
      return res.status(400).json({ message: 'You have already requested this ride' });
    }

    // Check if there are available seats
    if (ride.acceptedPassengers.length >= ride.availableSeats) {
      return res.status(400).json({ message: 'No seats available' });
    }

    ride.requests.push({
      passenger: req.user.id,
      status: 'pending'
    });

    await ride.save();
    res.json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Accept or reject a ride request
router.patch('/:rideId/request/:requestId', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const ride = await Ride.findById(req.params.rideId);
    
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }

    // Verify that the current user is the ride creator
    if (ride.driver.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const request = ride.requests.id(req.params.requestId);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    if (status === 'accepted') {
      // Check if there are still seats available
      if (ride.acceptedPassengers.length >= ride.availableSeats) {
        return res.status(400).json({ message: 'No seats available' });
      }
      
      // Add to accepted passengers
      ride.acceptedPassengers.push(request.passenger);
    }

    request.status = status;
    await ride.save();

    // If accepted, fetch passenger details to send in response
    if (status === 'accepted') {
      const driver = await User.findById(ride.driver);
      return res.json({
        message: 'Request accepted',
        driverDetails: {
          name: driver.name,
          phoneNumber: driver.phoneNumber
        }
      });
    }

    res.json({ message: `Request ${status}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 