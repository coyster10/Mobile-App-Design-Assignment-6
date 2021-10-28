const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1111;

let User = {
    username: "Coy",
    password: "MyNameCoy",
    email: "CoyIsMyName14@email.com",
    courses: {
        course1: {
            courseId: "CMSC101",
            courseName: "Basics of Code 1",
            startDate: "1/16/22",
            endDate: "5/12/22"
        },
        course2: {
            courseId: "CMSC102",
            courseName: "Basics of Hardware 1",
            startDate: "8/24/22",
            endDate: "12/14/22"
        },
        course3: {
            courseId: "CMSC201",
            courseName: "Advanced Code 1",
            startDate: "1/16/22",
            endDate: "5/12/22"
        }
    }
}

app.get('/getUser', (request, response) => {
    try{
        return response.status(200).json(User);
    }
    catch{
        return response.status(500);
    }
});

app.post('/addUser', (request, response) => {
    try{
        let addedUser = request.body.user;
        return response.status(200).json(`Added user ${addedUser.userName} successfully`);
    }
    catch{
        return response.status(500);
    }
});

app.listen(PORT, () => {
    console.log('Server started');
});