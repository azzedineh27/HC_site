
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const sanitizeHtml = require("sanitize-html");

const app = express();
app.use(cors());
app.use(express.json());


const clean = (input) =>
  sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {}
  });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});


app.post("/api/contact", async (req, res) => {
  const { fullname, email, tel, message } = req.body;

  const sanitizedData = {
    fullname: clean(fullname),
    email: clean(email),
    tel: clean(tel),
    message: clean(message)
  };

  try {
    await transporter.sendMail({
      from: `"${sanitizedData.fullname}" <azzedinehatem@gmail.com>`,
      to: "azzedinehatem@gmail.com",
      subject: `📩 Nouveau message de ${sanitizedData.fullname}`,
      text: `Email: ${sanitizedData.email}\nTéléphone: ${sanitizedData.tel}\n\nMessage:\n${sanitizedData.message}`
    });

    res.status(200).json({ success: true, message: "Message envoyé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Erreur lors de l'envoi" });
  }
});

app.post("/api/quote", async (req, res) => {
  const { name, email, formula, details } = req.body;

  const sanitizedQuote = {
    name: clean(name),
    email: clean(email),
    formula: clean(formula),
    details: clean(details)
  };

  try {
    await transporter.sendMail({
      from: `"${sanitizedQuote.name}" <azzedinehatem@gmail.com>`,
      to: "azzedinehatem@gmail.com",
      subject: `📄 Demande de devis de ${sanitizedQuote.name}`,
      text: `Email: ${sanitizedQuote.email}\nFormule : ${sanitizedQuote.formula}\n\nDétails :\n${sanitizedQuote.details}`
    });

    res.status(200).json({ success: true, message: "Devis envoyé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Erreur lors de l'envoi du devis" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
