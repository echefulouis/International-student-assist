const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require('path');


const router = express.Router();


router.get("/", (req,res) => {
    res.render('index');
})

router.get("/register", (req,res) => {
    res.render('register');
})

router.get("/login", (req,res) => {
    res.render('login');
})

router.get("/about", (req,res) => {
    res.render('aboutUs');
})

router.get("/contact", (req,res) => {
    res.render('contactUs');
})

module.exports = router;