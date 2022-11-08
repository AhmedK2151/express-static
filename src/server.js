const express = require('express');
const app = express();
const port = 5001;

app.use("/test", express.static('public'))

app.listen(port, "localhost", () => {
    console.log('Listening on port ' + port)
} )