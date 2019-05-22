const express = require('express')
const app = express()
const port = 5000

app.use(express.static(__dirname + '/assets'))
app.set('view engine', 'ejs')

app.get('/api/getlist', (req, res) => {
  res.json({
      users: [
    {
        name: 'Quyen',
        class: 'PQ-WED-D002'
    },
    {
        name: 'Mai',
        class: 'PQ-WED-D002'
    },
    {
        name: 'Son',
        class: 'PQ-WED-D002'
    },
    {
        name: 'Tuan Anh',
        class: 'PQ-WED-D002'
    },
    {
        name: 'Thuan',
        class: 'PQ-WED-D002'
    },
  ]})
})
app.get('/', (req, res) => {
  res.render('index', {
      user:[
        {   
            name: 'Quyen',
            class: 'PQ-WED-D002'
        },
        {   
            name: 'Mai',
            class: 'PQ-WED-D002'
        },
        {   
            name: 'Son',
            class: 'PQ-WED-D002'
        },
        {   
            name: 'Tuan Anh',
            class: 'PQ-WED-D002'
        },
        {   
            name: 'Thuan',
            class: 'PQ-WED-D002'
        }
    ]
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})