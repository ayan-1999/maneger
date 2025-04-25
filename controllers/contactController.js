const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.json(contact);
});

//@desc POST all contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.json(contact);
});

//@desc GET single contact
//@route GET /api/contact/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    console.log("contact is empty");
    res.status(404);
    throw new Error("Contact not found");
  }
  res.json(contact);
});

//@desc Update single contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.json({ msg: `update contact for ${req.params.id}` });
});

//@desc DELETE single contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.json({ msg: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
