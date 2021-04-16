
// Inspired by https://github.com/DiogoMRSilva/websitesVulnerableToSSTI

// Set up Express and ejs
const ejs = require('ejs');
const express = require('express')
const app = express()

function generateForm(){
    return `<html><body>
        Сколько тебе лет?
        <form action="/" method="get">
            <input type="text" name="age" value="">
            <input type="submit" value="Submit">
        </form>
    </body></html>`
}

function generateConfirmation(age){
    return "ТАААА ДАААМ!"
}

// Respond to GET requests: send form or confirmation
app.get('/', (request, response) => {
    if ('age' in request.query){
        // Deal with form submission: confirm age
        var html = generateConfirmation(request.query.age)
        response.send(html);
    } else {
        // Send form to user
        response.send(generateForm())
    }
})

// Start web server on port 1234
const port = 1234
app.listen(port, (err) => {
    if (err) console.log('something bad happened', err)
    else console.log(`server is listening on port ${port}`)
})
