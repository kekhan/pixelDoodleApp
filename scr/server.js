const express = require('express');

const app = express();
const port = 3000;

app.get('/', (res, req) => {
    cres.send("Hlel")

});

app.listen(port, () => {
    console.log("listening to portr"+port);
});

