let app = require('express')();

const PORT = process.env.PORT || 3000;

app.user(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})