const express = require('express');  //on appelle express
const app = express();
require('./models/db-config');
const postsRoutes = require('./routes/posts-controller');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//on va creer un middlware qui va etre a l'affut des requests et des responses (req,res)


app.use(bodyParser.json());
app.use(cors()); //ça veut juste dire que je donne l'accès a tout le monde à mon api
app.use('/posts', postsRoutes);

app.listen(5500,() => console.log('server started:5500'));