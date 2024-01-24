
// To start the server:
//
// npm init -y
// npm install express body-parser mysql2
// node start

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// MySQL database connection
const db = mysql.createConnection({
  host: '172.17.0.2', // just for demo, store sensitive data in the environment variables
  user: 'root', // just for demo, never use 'root' and store sensitive data in environment variables
  password: 'root', // just for demo, use strong passwords and store sensitive data in the environment variables
  database: 'contacts', // just for demo, store sensitive data in the environment variables
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received form submission:', { name, email, message });

  const sql = 'INSERT INTO form_submissions (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, results) => {
    if (err) {
      console.error('MySQL insertion error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Form submitted');
      console.log('Inserted ID:', results.insertId); // Log the inserted ID
      res.status(200).send('Form submitted successfully');
      // res.status(200).json({ success: true }); // Send a JSON response indicating success

    }
  });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
