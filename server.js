const express = require('express')

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));


const exerciseRoute = require('./routes/exerciseRoute');

//Use the routers
app.use('/exercise', exerciseRoute);

//Server running at
app.listen(5858, () => {
    console.log(`Server running at http://localhost:${5858}`)
})
