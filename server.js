const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const DB = require("nedb-promises");

// view engine
server.set("view engine", "ejs");
server.set("views", __dirname + "/view");

// middleware（順序很重要）
server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(fileUpload({ limits: { fileSize: 2 * 1024 * 1024 } }));

// DB
const ContactDB = DB.create(__dirname + "/Contact.db");
const TwoDDB = DB.create(__dirname + "/TwoD.db");
const ThreeDDB = DB.create(__dirname + "/ThreeD.db");

// routes
server.get("/", (req, res) => {
    res.send("Hello world!");
});

server.get("/TwoD", (req, res) => {
    TwoDDB.find({}).then(results => {
        res.send(results);
    });
});

server.get("/ThreeD", (req, res) => {
    ThreeDDB.find({}).then(results => {
        res.send(results);
    });
});

server.post("/contact", (req, res) => {
    ContactDB.insert(req.body);

    if (!req.files) {
        return res.send("No file uploaded");
    }

    const upFile = req.files.myFile1;
    upFile.mv(__dirname + "/public/upload/" + upFile.name, err => {
        if (!err) {
            res.render("msg", { message: "I got a file: " + upFile.name });
        } else {
            res.render("msg", { message: err });
        }
    });
});

// ⚠️ Render 必須這樣
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
