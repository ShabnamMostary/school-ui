import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'
import DepartmentsModel from './departments'
import FacultyModel from './faculty'
import StudentsModel from './students'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})
const Departments = DepartmentsModel(connection, Sequelize)
const Faculty = FacultyModel(connection, Sequelize, Departments)
const Students = StudentsModel(connection, Sequelize, Departments)

Departments.hasMany(Faculty)
Departments.hasMany(Students)
Faculty.belongsTo(Departments)
Students.belongsTo(Departments)

export default {
  Departments,
  Faculty,
  Students,
  Op: Sequelize.Op,
}
