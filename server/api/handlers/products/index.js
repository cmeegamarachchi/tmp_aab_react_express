// Example GET handler for products
module.exports = {
  route: "/products",
  method: "GET",
  handler: (req, res) => {
    const products = [
      { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
      { id: 2, name: "Mouse", price: 29.99, category: "Electronics" },
      { id: 3, name: "Book", price: 19.99, category: "Education" },
    ];

    res.json({
      success: true,
      data: products,
    });
  },
};
