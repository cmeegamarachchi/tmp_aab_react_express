// Example DELETE handler
module.exports = {
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

    // Mock deletion - replace with actual database logic
    res.json({
      success: true,
      message: `User ${userId} deleted successfully`,
    });
  },
};
