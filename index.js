const {ServerState} = require("./state.js")
const express = require("express")
const fileUpload = require('express-fileupload')

const app = express()
const port = 3000
const state = new ServerState()

app.use(express.json())
app.use(fileUpload())
app.use("/public", express.static('public'))

app.post("/login", (req, res) => {
    const {email, password} = req.body
    for (let user of state.users) {
        if (user.email === email && user.password === password) {
            res.send({image: "/public/" + user.image})
        }
    }
    res.send({})
})

app.post("/register", (req, res) => {
    const {email, password, firstName, secondName} = req.body

    state.users.push({
        id: state.users.at(-1).id + 1,
        points: 0,
        email: email,
        password: password,
        firstName: firstName,
        secondName: secondName,
        image: "/public/animals/капибара.jpg"
    })
    res.send(200)
})

app.get("/user-top", (req, res) => {
    res.send(state.users.sort((a, b) => {
        if (a.points < b.points) return 1
        else if (a.points > b.points) return -1
        else return 0
    }).map((obj) => {
        return {
            firstName: obj.firstName,
            secondName: obj.secondName,
            points: obj.points
        }
    }))
})

app.post("/add-points", (req, res) => {
    const {email, points} = req.body

    for (let user of state.users) {
        if (user.email === email) {
            state.users[user.id].points += points
        }
    }

    res.sendStatus(200)
})

app.get("/animal/:email", (req, res) => {
    const {email} = req.params

    for (let user of state.users) {
        if (user.email === email) {
            state.users[user.id].gtaProgress += 1
            res.send({image: state.guessTheAnimal.at(user.gtaProgress - 1)})
        }
    }
})

app.get("/word-practice/:email", (req, res) => {
    const {email} = req.params

    for (let user of state.users) {
        if (user.email === email) {
            state.users[user.id].wpProgress += 1
            res.send(state.wordPractice.at(user.wpProgress - 1))
        }
    }
})

app.get("/audition/:email", (req, res) => {
    const {email} = req.params

    for (let user of state.users) {
        if (user.email === email) {
            state.users[user.id].aProgress += 1
            res.send(state.audition.at(user.aProgress - 1))
        }
    }
})

app.get("/ai-answer/:image", (req, res) => {
    const {image} = req.params

    switch (image) {
        case "ежик.jpg":
            res.send({answer: "Hedgehog"})
            break
        case "жираф.jpg":
            res.send({answer: "Giraffe"})
            break
        case "капибара.jpg":
            res.send({answer: "Сapybara"})
            break
        case "леопард.jpg":
            res.send({answer: "Leopard"})
            break
        case "панда.jpg":
            res.send({answer: "Panda"})
            break
        case "попугай.jpg":
            res.send({answer: "Parrot"})
            break
        default:
            res.send({answer: "Нейросеть устала"})
            break
    }
})

app.post('/upload/:email', (req, res) => {
    const {image} = req.files;
    const {email} = req.params
    if (!image) return res.sendStatus(400);
    for (let user of state.users) {
        if (user.email === email) {
            state.users[user.id].image = user.id + ".png"
            image.mv(__dirname + '/public/' + user.id + ".png");
            res.sendStatus(200);
        }
    }

});

app.listen(port, () => {

    console.log("Started!")
})