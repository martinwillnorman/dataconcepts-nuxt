import express from "express";
import nodemailer from "nodemailer";
import validator from "validator";
import xssFilters from "xss-filters";

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
  res.status(405).json({ error: "sorry!" });
});

app.post("/", function(req, res) {
  const attributes = ["name", "address", "email", "phone"];
  const sanitizedAttributes = attributes.map(n =>
    validateAndSanitize(n, req.body[n])
  );
  const someInvalid = sanitizedAttributes.some(r => !r);

  if (someInvalid) {
    return res.status(422).json({ error: "Ugh.. That looks unprocessable!" });
  }

  sendMail(...sanitizedAttributes);
  res.status(200).json({ message: "OH YEAH" });
});

module.exports = {
  path: "/api/contact",
  handler: app
};

const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    name: v => v.length < 4,
    address: v => v.length > 50,
    email: v => !validator.isEmail(v),
    phone: v => v.length > 11
  };

  // If object has key and function returns false, return sanitized input. Else, return false
  return (
    rejectFunctions.hasOwnProperty(key) &&
    !rejectFunctions[key](value) &&
    xssFilters.inHTMLData(value)
  );
};

const sendMail = (name, address, phone, email) => {
  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: "unix",
    path: "/usr/sbin/sendmail"
  });
  transporter.sendMail({
    from: email,
    to: "will@dataconcepts-inc.com",
    subject: "New contact form message",
    name: name,
    address: address,
    phone: phone
  });
};
