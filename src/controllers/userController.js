import User from "../models/UserModel";

// Create a new user
export const createUser = async (req, res) => {
  const { user, name, email, number } = req.body;

  try {
    // Create a new user instance
    const newUser = new User({ user, name, email, number });

    // Save the user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // Use 201 for resource creation
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
