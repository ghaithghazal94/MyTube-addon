const express = require("express");
const { getRouter } = require("stremio-addon-sdk");
const addon = require("./addon");

const app = express();

const PORT = process.env.PORT || 7000;

app.use(getRouter(addon));

app.get("/", (req, res) => {
    res.send("MyTube Stremio Addon Running");
});


app.listen(PORT, "0.0.0.0", () => {
    console.log("MyTube running on port " + PORT);
});
