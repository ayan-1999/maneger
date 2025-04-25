const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateObjectId = require("../middleware/validateObjectId");

router.route("/").get(getContacts).post(createContact);
router
  .route("/:id")
  .get(validateObjectId, getContact)
  .put(validateObjectId, updateContact)
  .delete(validateObjectId, deleteContact);

module.exports = router;
