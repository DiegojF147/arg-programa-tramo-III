const emailRouter = require("express").Router();
const EmailController = require("./../controllers/EmailController.js");
const { enviarEmail } = require("./../controllers/EmailController.js");

emailRouter.post("/enviarEmail", enviarEmail);

module.exports = emailRouter;
