const express = require("express");

const app = express();

const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
    res.send("MyTube is alive");
});

app.get("/manifest.json", (req, res) => {
    res.json({
        id: "com.mytube.search",
        version: "1.0.0",
        name: "MyTube Test",
        description: "Test addon",
        resources: ["catalog"],
        types: ["movie"],
        catalogs: [
            {
                type: "movie",
                id: "test",
                name: "Test"
            }
        ]
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on " + PORT);
});
