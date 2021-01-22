import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import FacultyDetails from '../components/FacultyDetails'
import { retrieveFaculty } from '../utils/facultyDetails'
import NotFound from '../components/NotFound'
import GoBack from '../components/GoBack'

export default ({ location }) => {
  const [facultyName, setFacultyName] = useState('')
  const [faculty, setFaculty] = useState({})

  useEffect(() => {
    async function pullData() {
      const { details } = await retrieveFaculty(location)

      setFacultyName(details.name)
      setFaculty(details)
    }
    pullData()
  }, [])
  const getDepartmentFromId = (id) => {
    let name = ''

    // eslint-disable-next-line default-case
    switch (id) {
      case 1:
        name = 'Computer Engineering'
        break
      case 2:
        name = 'Electrical Engineering'
        break
      case 3:
        name = 'Mechanical Engineering'
        break
      case 4:
        name = 'Civil Engineering'
        break
    }

    return name
  }

  return (
    <Page>
      <Title />
      <GoBack />
      {
        facultyName
          ? (
            <>
              <FacultyDetails
                name={faculty.name}
                email={faculty.email}
                departmentId={getDepartmentFromId(faculty.departmentId)}
                research_area={faculty.research_area}
              />
            </>
          )
          : (<NotFound message="Sorry, no matching faculty found." />)
      }
    </Page>

  )
}
