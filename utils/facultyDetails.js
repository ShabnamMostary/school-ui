import fetchFacultyDetails from '../actions/facultyDetails'

export const getFacultyNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/faculty/').pop()
  : ''
)

export const retrieveFaculty = async (location) => {
  const facultyName = getFacultyNameFromUrl(location)

  if (!facultyName) return { details: {} }
  const {
    id, name, departmentId, email, research_area,
  } = await fetchFacultyDetails(facultyName)

  if (!id || !name || !departmentId || !email || !research_area) return { details: {} }

  return {
    details: {
      id, name, departmentId, email, research_area,
    },
  }
}
