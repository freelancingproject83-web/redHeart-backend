import User from "../models/User.js";

// ================= UPDATE PROFILE =================
export const updateProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const { name, email } = req.body;

    const user = await User.findOne({ userId });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.json({ message: "Profile updated", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ================= GET CURRENT USER =================
export const me = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await User.findOne({ userId });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
