const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const bodyParser = require('body-parser');
const xmlcode = require('./backend/xmlbuilder')
const app = express();
const router = express.Router();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
//CORS middleware
const enableCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
app.use(enableCrossDomain)
// Fonction Login
router.post('/makexml', xmlcode.generate)
app.use(router)
const port = process.env.PORT || 80;
app.listen(port);
