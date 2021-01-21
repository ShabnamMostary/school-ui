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
                departmentId={faculty.departmentId}
                research_area={faculty.research_area}
              />
            </>
          )
          : (<NotFound message="Sorry, no matching faculty found." />)
      }
    </Page>

  )
}
