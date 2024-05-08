import BlogList from './components/BlogList'
import UserInfo from './components/UserInfo'

import './index.css'


const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
