import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { getAllDepartments, getDepartmentByName } from './controllers/departments'
import { getAllFaculty, getFacultyByName, addNewFaculty, deleteFaculty } from './controllers/faculty'
import { getAllStudents, getStudentByName, addNewStudent, deleteStudent } from './controllers/students'

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/api', (request, response) => response.render('api'))
app.get('/api/departments', getAllDepartments)
app.get('/api/departments/:name', getDepartmentByName)
app.get('/api/faculty', getAllFaculty)
app.get('/api/faculty/:name', getFacultyByName)
app.post('/api/faculty', bodyParser.json(), addNewFaculty)
app.delete('/api/faculty/:name', deleteFaculty)
app.get('/api/students', getAllStudents)
app.get('/api/students/:name', getStudentByName)
app.post('/api/students', bodyParser.json(), addNewStudent)
app.delete('/api/students/:name', deleteStudent)
app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))
app.listen(1337, () => {
  console.log('Listening on 1337...') // eslint-disable-line no-console
})
