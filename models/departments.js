export default (connection, Sequelize) => connection.define('departments', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  building: { type: Sequelize.STRING, allowNull: false },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, { paranoid: true })
