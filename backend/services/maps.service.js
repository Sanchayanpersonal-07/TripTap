const axios = require("axios");
const captainModel = require("../models/captain.model");

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org";
const OSRM_BASE_URL = "https://router.project-osrm.org";
const USER_AGENT = "TripTap/1.0 (resume-demo)";

const geocodePlace = async (placeName, limit = 1) => {
  if (!placeName) {
    throw new Error("Place name is required");
  }

  const response = await axios.get(`${NOMINATIM_BASE_URL}/search`, {
    params: {
      q: placeName,
      format: "jsonv2",
      limit,
      addressdetails: 0,
    },
    headers: {
      "User-Agent": USER_AGENT,
    },
  });

  if (!Array.isArray(response.data) || response.data.length === 0) {
    throw new Error(`No location found for "${placeName}"`);
  }

  return response.data.map((item) => ({
    latitude: Number(item.lat),
    longitude: Number(item.lon),
    displayName: item.display_name,
  }));
};

module.exports.getAddressCoordinate = async (placeName) => {
  const [place] = await geocodePlace(placeName, 1);
  return {
    latitude: place.latitude,
    longitude: place.longitude,
  };
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const [pickup] = await geocodePlace(origin, 1);
  const [drop] = await geocodePlace(destination, 1);

  const routeUrl = `${OSRM_BASE_URL}/route/v1/driving/${pickup.longitude},${pickup.latitude};${drop.longitude},${drop.latitude}`;
  const response = await axios.get(routeUrl, {
    params: {
      overview: "false",
      alternatives: "false",
      steps: "false",
    },
    headers: {
      "User-Agent": USER_AGENT,
    },
  });

  const route = response.data?.routes?.[0];

  if (!route) {
    throw new Error("No route found");
  }

  return {
    distanceMeters: route.distance,
    duration: `${Math.round(route.duration)}s`,
    pickup: {
      latitude: pickup.latitude,
      longitude: pickup.longitude,
    },
    destination: {
      latitude: drop.latitude,
      longitude: drop.longitude,
    },
  };
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const places = await geocodePlace(input, 5);
  return places.map((place) => place.displayName);
};

module.exports.getCaptainsInTheRadius = async (
  lng,
  ltd,
  radius,
  vehicleType
) => {
  console.log("Vehicle Type:", vehicleType);
  vehicleType = vehicleType === "moto" ? "motorcycle" : vehicleType;

  const newCaptains = await captainModel.find({
    "vehicle.vehicleType": vehicleType,
  });

  console.log(newCaptains);

  return newCaptains;
};
