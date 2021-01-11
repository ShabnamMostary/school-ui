import models from '../models'

export const getAllDepartments = async (request, response) => {
  try {
    const departments = await models.Departments.findAll()

    return departments
      ? response.send(departments)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve departments, please try again')
  }
}
export const getDepartmentByName = async (request, response) => {
  try {
    const { name } = request.params

    const result = await models.Departments.findOne({
      where: {
        name: { [models.Op.like]: `%${name}%` },
      },
    })

    return result
      ? response.send(result)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve department, please try again')
  }
}
