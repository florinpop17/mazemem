let express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.render('index.html');
})

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})