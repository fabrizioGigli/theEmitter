const express = require('express');
const cors = require('cors');
const app = express();

const corsOpt = {
    origin: 'https://fabriziogigli.github.io/theEmitter:3001/'
}

app.get('/events', cors(corsOpt), (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    })

    const data = {message: "qualcosa"}
    res.write("data: "+JSON.stringify(data));
})

app.listen(3000, () => {console.log("Server on")});