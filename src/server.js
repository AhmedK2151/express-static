const express = require('express');
const app = express();
const port = 5000;

app.use("/test", express.static('public'))

app.listen(port, () => {
    console.log('Listening on port 5000')
} )