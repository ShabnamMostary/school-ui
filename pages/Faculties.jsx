import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Faculty from '../components/Faculty'
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
    <div className="page">
      <div className="title">Meet the Faculty</div>
      <div className="subtitle">A searchable list of all our faculty.</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredFacultyList.map(faculty => (<Faculty key={faculty.id} id={faculty.id} name={faculty.name} />))
      }

    </div>
  )
}
