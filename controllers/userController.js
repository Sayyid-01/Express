// const getAllUsers = (req, res) => {
//     res.send("Fetching all users.");
// }

// const getUserById = (req, res) =>{
//     const userId = req.params.id;
//     res.send(`Fetching user with ID: ${userId}`);
// }

// const addUser = (req, res) => {
//     res.send("Adding a new user.");
// }

// export { getAllUsers, getUserById, addUser };

import { sendErrorResponse, sendResponse } from "../utils/response.js";

export const getUsers = (req, res, next) => {
  try {
    const user = req.params.id;

    if (user > 10) {
      let error = new Error("User is required");
      error.statusCode = 404;
      throw error;
    }

    return sendResponse(res, user, 200);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

export const createUsers = (req, res, next) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      let error = new Error("Name and email are required");
      error.statusCode = 400;
      throw error;
    }

    const user = {
      id: 1,
      name,
      email,
    };

    return sendResponse(res, user, 201);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};






