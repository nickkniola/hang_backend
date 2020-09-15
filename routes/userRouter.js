const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/:userId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will GET user's info: id: ${req.body.id}, name: ${req.body.name}, activity: ${req.body.activity}, location: ${req.body.location}, image: ${req.body.image}, date: ${req.body.date}, time: ${req.body.time}, email: ${req.body.email}, password: ${req.body.password}`);
    })
    .post((req, res) => {
        res.end(`Will POST the user: ${req.body.email} with password: ${req.body.password}`);
    })
    .put((req, res) => {
        res.end(`PUT operation on /user/${req.body.id}, Pairing: Date: ${req.body.date}, Time: ${req.body.time}, Location: ${req.body.location}, Activity: ${req.body.activity}`);
    })
    .delete((req, res) => {
        res.end('Cannot DELETE user data');
    });

module.exports = userRouter;