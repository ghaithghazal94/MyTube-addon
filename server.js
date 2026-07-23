const express = require("express");
const { getRouter } = require("stremio-addon-sdk");
const addon = require("./addon");

const app = express();

const PORT = process.env.PORT || 7000;


// اختبار بسيط
app.get("/", (req, res) => {
    res.status(200).send("MyTube Stremio Addon Running");
});


// تشغيل Stremio addon
app.use(getRouter(addon));


// Railway يحتاج الاستماع على كل الواجهات
app.listen(PORT, "0.0.0.0", () => {
    console.log(`MyTube running on port ${PORT}`);
});
