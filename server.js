const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Open Legend RPG Character Builder'
    });
})

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);    
});