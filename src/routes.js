const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/"

const profile = {
    name: "Guilherme",
    avatar: "https://github.com/GuingaVilan.png",
    "monthly-budget": 3000,
    "days-per-week":5,
    "hours-per-day:": 5,
    "vacation-per-year": 4
}

const jobs = []

//teste

//express = biblioteca pra criar o servidor
//Router cria as rotas, caminhos... 
//Ctrl + Shift + L = seleciona tuda palavra igual
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    // req.body = {name:'teste1', 'daily-hours': '3', 'total-hours: '3' }
     
    jobs.push({
        
        name: req.body,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now()    //atribuindp uma nova data  
    })
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))


module.exports = routes;