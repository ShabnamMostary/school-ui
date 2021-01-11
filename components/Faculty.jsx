import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default () => {
  const [faculty, setFaculty] = useState('')
  const [facultyList, setFacultyList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api/faculty')

      setFacultyList(data)
    }
    pullData()
  }, [])

  return (
    <div className="page">
      <div className="title">Meet the Faculty</div>
      <div className="subtitle">A searchable list of all our faculty!</div>
      <input type="text" name="search" onChange={event => setFaculty(event.target.value)} />
    </div>
  )
}
