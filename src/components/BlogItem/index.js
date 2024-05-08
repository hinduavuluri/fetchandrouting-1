// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {bioData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = bioData

  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-container">
        <img src={imageUrl} className="image-url" alt={`item${id}`} />
        <div className="text-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-container">
            <img src={avatarUrl} className="avatar-url" alt={`avatar${id}`} />
            <p className="topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
