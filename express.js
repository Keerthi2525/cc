const express = require('express');
  const server = express();

  server.get('/', function(req,res){
   res.send('hi keerthi') ;  
 });

     server.get('/about', function(req,res){
        res.send('<h1> this is your friend </h1>');

     });

         server.get('/movies', function(req , res){
       const movies = [' the nun' , 'veronica', ' the conjuri'];
            res.json(movies);
         });

       server.get('/contact', function(req,res){
        res.send('this is my number');
       });


  server.listen(5000,function(){
    console.log('server is running on port 5000');

  });
