import axios from 'axios'

export const filterFaculty = (list, term) => list.filter(faculty => (
  faculty.name.toLowerCase().includes(term.toLowerCase())
))
export const retrieveFaculty = async () => {
  const { data } = await axios.get('http://localhost:1337/api/faculty')

  return data
}
