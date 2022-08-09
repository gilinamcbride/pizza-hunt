const router = require("express").Router();
const pizzaRoutes = require("./pizza-routes");
const commentRoutes = require("./comment-routes");

// add prefix of `/name` to routes created in `name-routes.js`
router.use("/pizzas", pizzaRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
