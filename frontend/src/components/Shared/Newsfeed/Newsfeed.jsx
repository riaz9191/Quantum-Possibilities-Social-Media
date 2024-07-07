import NewsfeedTop from "./NewsFeedTop"
import Post from "./Post"

const Newsfeed = ({user}) => {
  return (
    <div>
      <NewsfeedTop user={user}/>
      <Post user={user}/>
      
    </div>
  )
}

export default Newsfeed