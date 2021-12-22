const express = require('express');
const app = express();
//Database 
const db = require('./config/db');
db();

//Cors
const cors = require('cors');
app.use(cors());
app.use(express.json());

//Admin
const admin = require('./admin/Service');
app.use('/PlanetConectUs',admin);
//Partenaire
const Partenaire = require('./Partenaires/Service');
app.use('/PlanetConectUs',Partenaire);
//Contact
const contact = require('./Contact/Service');
app.use('/PlanetConectUs',contact);
//Service
const service = require('./Services/Service');
app.use('/PlanetConectUs',service);
// Authentification 
const Authentification = require('./authentification/Service');
app.use('/PlanetConectUs',Authentification);
//Product
const Product = require('./Product/Service');
app.use('/PlanetConectUs',Product);
//Carrier
const Carrier = require('./Carriers/Service');
app.use('/PlanetConectUs',Carrier);

//PORT
app.listen(8000,()=>{
    console.log('Server is Running')
})