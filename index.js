const express = require('express');
const app = express();
const port = 3000;

app.get("/", (_, response) => {
    response.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
    console.log(`node started at the port: ${port}`);
});
