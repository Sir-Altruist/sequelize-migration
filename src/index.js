const express = require('express')
const database = require('./models')

const app = express()
const port = 5000

const { user, role } = database

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.post('/', async (req, res) => {
    const newUser = await user.create({ name: 'altruist' })
    return res.json({ details: newUser })
})

app.post('/task', async (req, res) => {
    const newTask = await role.create({ name: 'software engineer', userId: '137f098b-9d86-4268-9ea0-3ffbf48d8e40' })
    return res.json({ details: newTask })
})

app.listen(port, () => console.log(`server running on port: ${port}`))