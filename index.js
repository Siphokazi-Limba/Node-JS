const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

app.get('/employees',(req, res) =>{
    res.json({ message: "This is the GET employee path"});
});

app.post('/employees',(req, res) =>{
    res.json({ message: "This is the POST employee path - an employee was added"});
});

app.put('/employees',(req, res) =>{
    res.json({ message: "This is the PUT employee path - an employee record was updated"});
});
 
app.patch('/employees',(req, res) =>{
    res.json({ message: "This is the PATCH employee path - partial update applied "});
});

app.delete('/employees',(req, res) =>{
    res.json({ message: "This is the DELETE employee path - an employee was removed"});
});

app.get('/managers',(req, res) =>{
    res.json({ message: "This is the GET manager path"});
});

app.post('/managers',(req, res) =>{
    res.json({ message: "This is the POST manager path - an manager was added"});
});

app.put('/managers',(req, res) =>{
    res.json({ message: "This is the PUT manager path - an manager record was updated"});
});
 
app.patch('/managers',(req, res) =>{
    res.json({ message: "This is the PATCH manager path - partial update applied "});
});

app.delete('/managers',(req, res) =>{
    res.json({ message: "This is the DELETE manager path - an manager was removed"});
});
app.listen(PORT, () => {
    console.log(`PICK 'n STEAL API running on port ${PORT}`);
});