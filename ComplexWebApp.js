/*
   FileName: ComplexWebApp.js
   Description: This code is a complex web application that performs a variety of tasks using JavaScript.
*/

// Importing necessary modules
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Initialize the Express app
const app = express();

// Configure body-parser to handle JSON data
app.use(bodyParser.json());

// Create a sample database
const users = [
   {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      password: '$2b$10$L5eacAuscuInE/d23hEEe.cihPtH/1qmz1Tf5ugUZj77j9EAqXCei', // hashed password: 'password'
   },
   // More users...
];

// Define routes
app.post('/login', (req, res) => {
   const { email, password } = req.body;

   const user = users.find((u) => u.email === email);

   if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
   }

   bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
         res.status(500).json({ message: 'Server error' });
         return;
      }

      if (!result) {
         res.status(401).json({ message: 'Invalid password' });
         return;
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '2h' });

      res.json({ token });
   });
});

app.get('/data', (req, res) => {
   // Verify the JWT token
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];

   if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
   }

   jwt.verify(token, 'secretKey', (err, decoded) => {
      if (err) {
         res.status(403).json({ message: 'Invalid token' });
         return;
      }

      // Fetch data from an API
      axios.get('https://api.example.com/data')
         .then((response) => {
            res.json(response.data);
         })
         .catch((error) => {
            res.status(500).json({ message: 'Server error' });
         });
   });
});

// Start the server
app.listen(3000, () => {
   console.log('Server started on port 3000');
});