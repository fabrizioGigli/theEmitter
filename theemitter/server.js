const express = require('express');
const app = express();


app.get('/message', (req, res) => {
    res.json({"message": "qualcosa"});
})

app.listen(3000, () => {console.log("Server on")});