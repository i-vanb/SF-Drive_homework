const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/Home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/view/About.html');
});

app.use((req, res) => {
    res.status(404)
    res.sendFile(__dirname + '/view/404.html')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
