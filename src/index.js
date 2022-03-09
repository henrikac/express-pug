const path = require('path');

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(morgan('common'));

app.use('/static', express.static(path.join(__dirname, '..', 'assets')));
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Index' });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
