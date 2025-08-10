module.exports = [
  {
    route: "/users",
    method: "GET",
    handler: (req, res) => {
      const users = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
      ];
      res.json({ success: true, data: users });
    },
  },
  {
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
      const newUser = {
        id: Date.now(),
        name,
        email,
        createdAt: new Date().toISOString(),
      };
      res.status(201).json({ success: true, data: newUser });
    },
  },
  {
    route: "/users/:id",
    method: "DELETE",
    handler: (req, res) => {
      const userId = req.params.id;
      if (!userId) {
        return res.status(400).json({
          success: false,
          error: "User ID is required",
        });
      }
      res.json({
        success: true,
        message: `User ${userId} deleted successfully`,
      });
    },
  },
];
