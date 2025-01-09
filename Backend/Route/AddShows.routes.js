const express = require("express")
const router = express.Router()
const {  AddShows, getShows } = require("../Controller/AddShows")

router.route("/AddShows").post(AddShows)
router.route("/getShows").get(getShows)


module.exports = router