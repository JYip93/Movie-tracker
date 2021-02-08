const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.getIndex);

router.get("/add-movie", adminController.getAddMovie);

router.post("/add-movie", adminController.postMovie);

router.get("/:movie-id", adminController.getMovie);

module.exports = router;
