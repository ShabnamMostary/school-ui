import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import FacultyDetails from '../components/FacultyDetails'
import { retrieveFaculty } from '../utils/facultyDetails'

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
          : (<div>Sorry, I do not know that team</div>)
      }
    </Page>

  )
}
