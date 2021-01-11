import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Faculty from './Faculty'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [facultyList, setFacultyList] = useState([])
  const [filteredFacultyList, setFilteredFacultyList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/faculty')

      setFacultyList(data)
      setFilteredFacultyList(data)
    }
    pullData()
  }, [])
  useEffect(() => {
    const filtered = facultyList.filter(faculty => faculty.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setFilteredFacultyList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Meet the Faculty</div>
      <div className="subtitle">A searchable list of all our faculty!</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredFacultyList.map(faculty => (<Faculty key={faculty.id} id={faculty.id} name={faculty.name} />))
      }

    </div>
  )
}
