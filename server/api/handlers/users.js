// Example GET handler for users
module.exports = {
  route: "/users",
  method: "GET",
  handler: (req, res) => {
    // Mock data - replace with actual database logic
    const users = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];

    res.json({
      success: true,
      data: users,
    });
  },
};
