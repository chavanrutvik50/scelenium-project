const express = require("express");
const fs = require("fs");
const cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());

const port = 9000;

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}

app.get("/testing/getAllProjects", (req, res) => {
    console.log(getDirectories("D:/REACT"))
    res.send(getDirectories("D:/REACT"));
});


app.get("/test/runBat", (req, res) => {
    skillName = "BSAT_aribha_V1";//req.params.skillName;
    exec(batFilePath, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("output  : " + stdout);
    });
    res.send("done");
})

app.listen(port, () => console.log("listning on port " + port));