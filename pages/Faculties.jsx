import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Faculty from '../components/Faculty'
import Title from '../components/Title'
import { filterFaculty, retrieveFaculty } from '../utils/faculty'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [facultyList, setFacultyList] = useState([])
  const [filteredFacultyList, setFilteredFacultyList] = useState([])

  useEffect(() => {
    async function pullData() {
      const faculties = await retrieveFaculty()

      setFacultyList(faculties)
      setFilteredFacultyList(faculties)
    }
    pullData()
  }, [])
  useEffect(() => {
    const filtered = filterFaculty(facultyList, searchTerm)

    setFilteredFacultyList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredFacultyList.map(faculty => (<Faculty key={faculty.id} id={faculty.id} name={faculty.name} />))
      }
    </Page>
  )
}
