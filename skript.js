const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

app.post('/save-page', function(req, res) {
    const { fileName, content } = req.body;
    fs.writeFileSync(`./pages/${fileName}`, content);
    res.send('Page saved');
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});