const express = require('express');

const app = express();

app.get('about', (req, res) =>{
    res.send('Welxome to Express')
 })

 app.get('greet/name', (req, res) =>{
    res.send('Hello John')
 })

 let users = [
    {id:1, title: 'user1' },
    {id:2, title: 'user2' },

 ]

 app.get('/api/users',(req,res) => {

 })



app.listen(5000, () => console.log(`server is successfully running`));