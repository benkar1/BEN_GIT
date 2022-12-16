//
// var activePage = window.location.pathname;
//
//
// /*
// highlight the active selection at the navigation bar
//  */
// document.querySelectorAll('nav a').forEach(link => {
//     if (link.href.includes(`${activePage}`)) {
//         link.classList.add("active");
//     }
// })
//
//
// /*
// create port
//  */
// var http = require("http");
// http.createServer().listen(port);
//
// const express = require('express');
// const app = express();
// const bodyparser = require('body-parser');
// const path = require('path');
// const sql = require('./db');
// const connection = require('./db')
// const port = 8200;
//
// app.use(express.static('static'));
// app.use(bodyparser.json());
// app.use(bodyparser.urlencode({extended:true}));
//
//
// app.listen(port,() =>{
//     console.log(`servers is running on port ${port} `)
// })
//
//
// /*
// redirect to pages
//  */
// app.get('/', [login,homePage] );
//
// var main = app.get('/login', (req,res) =>{
//     res.sendFile(path.join( _dirname, 'login.html'))
// })
//
//
// var homePage = app.get('/MainPage', (req,res) =>{
//     res.sendFile(path.join( _dirname, 'views/MainPage.html'))
// })


/*
pages redirection
 */
function HomePage(){
    return window.location.replace("../views/MainPage.html");
}

function QuizPage(){
    return window.location.replace('../views/Practice.html');
}

function UserProfilePage(){
    return window.location.replace('../views/UserProfile.html')
}