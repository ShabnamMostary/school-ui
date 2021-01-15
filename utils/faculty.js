import fetchFacultyList from '../actions/faculty'

export const filterFaculty = (list, term) => list.filter(faculty => (
  faculty.name.toLowerCase().includes(term.toLowerCase())
))
export const retrieveFaculty = async () => {
  const faculty = await fetchFacultyList()

  return faculty
}
