const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) =>{
    res.send('Beyond Basics Server is Running')
});

app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('looking for courses', id);

    const course = courses.find(rm => rm.id === id) || {};
    res.send(course)
})

app.listen(port, () =>{
    console.log(`Beyond Basics Running On Port, ${port}`);
})