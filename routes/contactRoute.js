const express = require("express");
const router = express.Router();
const validateObjectId = require("../middleware/validateObjectId");
const {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router
  .route("/:id")
  .get(validateObjectId, getContact)
  .put(validateObjectId, updateContact)
  .delete(validateObjectId, deleteContact);

module.exports = router;
