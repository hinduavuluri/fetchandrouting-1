// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      author: data.author,
      content: data.content,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }
  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, author, imageUrl, avatarUrl, content} = blogData

    return (
      <div className="bg-container">
        <h1 className="title">{title}</h1>
        <div>
          <img src={avatarUrl} className="avatar-url" alt={author} />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="image-url" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
