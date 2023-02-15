const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use("/contact", function(request, response) {
    response.render("contact", {
    title: "Мои контакты",
    emalisVisible: true,
    emails: ["kyzyb47@gmail.com","mioaw@mycorp.com"],
    phone: "+7(777)-777-77-77",
    })
})
app.use("/FIO", function(request, response) {
    response.render("FIO", {
    name: "Дед",
    pastname: "Волакас",
    lastname: "47",
    emalisVisible: true,
    })
})

app.use("/info", function(request, response) {
    response.render("info", {
    inform: "Ориджинал контент по вашим любимым играм",
    emalisVisible: true,
    })
})

app.use("/power", function(request, response) {
    response.render("power", {
    power: "Ненавижу геншин",
    skills: "RTX 4090",
    emalisVisible: true,
    })
})

app.use("/lang", function(request, response) {
    response.render("lang", {
    lang: "Русский ,татарский, английски",
    emalisVisible: true,
    })
})

app.use("/", function (request, response) {
    response.send("Главная страница")
})
app.listen(3000)