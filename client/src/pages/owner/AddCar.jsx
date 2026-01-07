import { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets.js";

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title title="Add New Car" subtitle="Fill the form to add a new car" />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* car image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500">Upload a car image</p>
        </div>

        {/* car brand and model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="brand" className="mb-2">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              value={car.brand}
              required
              placeholder="e.g. BMW, Mercedes ..."
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="model" className="mb-2">
              Model
            </label>
            <input
              type="text"
              id="model"
              value={car.model}
              required
              placeholder="e.g. X3, C-Class ..."
              onChange={(e) => setCar({ ...car, model: e.target.value })}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
        </div>

        {/* car year, price per day and category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="year" className="mb-2">
              Year
            </label>
            <input
              type="number"
              id="year"
              value={car.year}
              required
              placeholder="e.g. 2020, 2021 ..."
              onChange={(e) =>
                setCar({ ...car, year: parseInt(e.target.value) })
              }
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="pricePerDay" className="mb-2">
              Price Per Day ({currency})
            </label>
            <input
              type="number"
              id="pricePerDay"
              value={car.pricePerDay}
              required
              placeholder="e.g. 50, 100 ..."
              onChange={(e) =>
                setCar({ ...car, pricePerDay: parseFloat(e.target.value) })
              }
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="category" className="mb-2">
              Category
            </label>
            <select
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              id="category"
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.category}
            >
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>

        {/* car transmission, Fuel type, seating capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="transmission" className="mb-2">
              Transmission
            </label>
            <select
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              id="transmission"
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.transmission}
            >
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="fuel_type" className="mb-2">
              Fuel Type
            </label>
            <select
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              id="fuel_type"
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.fuel_type}
            >
              <option value="">Select Fuel Type</option>
              <option value="Gas">Gas</option>
              <option value="Petrol">Petrol</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="seating_capacity" className="mb-2">
              Seating Capacity
            </label>
            <input
              type="number"
              id="seating_capacity"
              value={car.seating_capacity}
              required
              placeholder="e.g. 4, 5, 7 ..."
              onChange={(e) =>
                setCar({ ...car, seating_capacity: parseInt(e.target.value) })
              }
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            />
          </div>
        </div>

        {/* car location */}
        <div className="flex flex-col w-full max-w-xs">
          <label htmlFor="location" className="mb-2">
            Location
          </label>
          <select
            onChange={(e) => setCar({ ...car, location: e.target.value })}
            id="location"
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            value={car.location}
          >
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
          </select>
        </div>

        {/* car description */}
        <div className="flex flex-col w-full">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            rows={5}
            id="description"
            value={car.description}
            required
            placeholder="e.g. This car is perfect for family trips..."
            onChange={(e) => setCar({ ...car, description: e.target.value })}
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
          />
        </div>

        <button
          type="submit"
          className="flex items-center bg-primary gap-2 px-4 py-2.5 text-white rounded-md font-medium w-max cursor-pointer"
        >
          <img src={assets.tick_icon} alt="" />
          List You Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
