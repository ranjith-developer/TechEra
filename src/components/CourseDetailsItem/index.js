import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, imageUrl, description} = courseItemDetails

  return (
    <div className="course-details-item">
      <img src={imageUrl} alt={name} className="image" />
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CourseDetailsItem
