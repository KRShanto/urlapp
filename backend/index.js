const express = require('express');
const bodyParser = require('body-parser');
const readline = require('readline-sync');

const app = express();

app.use(express.static('../build'));
app.use(bodyParser.json());

let passwordState;



function startServer() {
    app.post('/login', (request, response) => {
        console.log("Request received: ", request.body);

        const password = request.body.password;


        if (password === passwordState) {
            response.send({ message: 'Success' });
        } else {
            response.status(404).send({ message: 'Incorrect password' });
        }
    });

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}

const password = readline.question('Please enter the password: ');
passwordState = password;
startServer();
