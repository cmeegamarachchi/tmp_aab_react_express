// Example POST handler for creating a user
module.exports = {
  route: "/users",
  method: "POST",
  handler: (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: "Name and email are required",
      });
    }

    // Mock creation - replace with actual database logic
    const newUser = {
      id: Date.now(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    res.status(201).json({
      success: true,
      data: newUser,
    });
  },
};
