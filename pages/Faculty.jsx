import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import { retrieveFaculty } from '../utils/facultyDetails'

export default ({ location }) => {
  const [facultyName, setFacultyName] = useState('')
  const [faculty, setFaculty] = useState({})
  const [facultyData, setFacultyData] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, faculty } = await retrieveFaculty(location)

      setFacultyName(details.name)
      setFaculty(details)
      setFacultyData(faculty)
    }
    pullData()
  }, [])

  return (
    <Page>
      <Title />
    </Page>
  )
}
