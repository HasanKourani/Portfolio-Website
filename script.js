import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/email", async (req, res) => {
  console.log(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hasankoura8@gmail.com",
        pass: "vejm nmgs kmzh hmmy",
      },
    });

    const mailOptions = {
      from: req.body.email,
      to: "hasankoura8@gmail.com",
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        
      }
    });
    res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
