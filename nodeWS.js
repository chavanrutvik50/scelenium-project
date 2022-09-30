const express = require('express');
var app = express();
app.use(express.json());
var port = 9000;


app.get("/test/runBat", (req, res) => {
    skillName = req.params.skillName;
    exec(batFilePath, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("output  : " + stdout);
    });
    res.send("done");
})

app.listen(port, () => console.log("listining on port" + port))