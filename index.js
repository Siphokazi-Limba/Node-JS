const express = require('express');
const app = express();

app.use(express.json()); 

const PORT = 3000;


app.get('/', (req, res) => {
  res.json({ message: "Welcome to MY API hey Kaze3 wow i tried" });
});

app.get('/products', (req, res) => {
  res.json({ message: "This is the GET product path it gets products" });
});

app.post('/products', (req, res) => {
  res.json({ message: "This is the POST product path and something was added" });
});

app.put('/products', (req, res) => {
  res.json({ message: "This is the PUT product path and something was updated" });
});

app.patch('/products', (req, res) => {
  res.json({ message: "This is the PATCH product path and something was modified" });
});

app.delete('/products', (req, res) => {
  res.json({ message: "This is the DELETE product path and something was removed" });
});


app.get('/users', (req, res) => {
  res.json({ message: "This is the GET user path" });
});

app.post('/users', (req, res) => {
  res.json({ message: "This is the POST user path and a user was added" });
});

app.put('/users', (req, res) => {
  res.json({ message: "This is the PUT user path and a user was updated" });
});

app.patch('/users', (req, res) => {
  res.json({ message: "This is the PATCH user path and some user info was changed" });
});

app.delete('/users', (req, res) => {
  res.json({ message: "This is the DELETE user path and a user was removed" });
});

app.listen(PORT, () => {
  console.log(`SHOPLEFT server running on port ${PORT}`);
});