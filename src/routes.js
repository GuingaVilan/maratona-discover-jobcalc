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

const jobs = [
    {
        id:1,
        name:"Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        created_at: Date.now(),
      
    },
    {
        id:2,
        name:"OneTwo Project",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now(),
       
    }
]

//express = biblioteca pra criar o servidor
//Router cria as rotas, caminhos... 
//Ctrl + Shift + L = seleciona tuda palavra igual

routes.get('/', (req, res) => {



  const updatedJobs = jobs.map((job) =>{

    //ajustes no job
    //calculo de tempo restante
    const remainingDays = job["total-hours"] / job["daily-hours"].toFixed() 

    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() + Number(remainingDays) 
    //const dueDate = createdDate.setDate

    return job
  })


  return res.render(views + "index", { jobs })

})









routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    // req.body = {name:'teste1', 'daily-hours': '3', 'total-hours: '3' }
     const lastId =job[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId  + 1,
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
