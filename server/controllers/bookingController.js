import Booking from "../models/Booking.js";
import Car from "../models/Car.js";

// function to check availability of a car for a given date
const checkAvailability = async (car, pickupDate, returnDate) => {
  const bookings = await Booking.find({
    car: car,
    pickupDate: { $lte: returnDate },
    returnDate: { $gte: pickupDate },
  });

  return bookings.length === 0;
};

// api to check availability of cars for the given date and location
export const checkAvailabilityOfCars = async (req, res) => {
  try {
    const { pickupDate, returnDate, location } = req.body;

    // fetch all available cars of the given location
    const cars = await Car.find({ location, isAvailable: true });

    // check car availability for the given date range using promise
    const availableCarsPromises = cars.map(async (car) => {
      const isAvailable = await checkAvailability(
        car._id,
        pickupDate,
        returnDate
      );
      return { ...car._doc, isAvailable };
    });

    let availableCars = await Promise.all(availableCarsPromises);
    availableCars = availableCars.filter((car) => car.isAvailable === true);

    res.json({ success: true, availableCars });

    res.json({ success: true, availableCars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
