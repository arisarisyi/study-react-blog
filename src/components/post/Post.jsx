import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImage" src="" alt=".." />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Hadits</span>
          <span className="postCat">Fiqih</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, non
        facere officia nihil praesentium assumenda iste, nobis animi
        perspiciatis voluptas sint consequuntur quos beatae ex veniam reiciendis
        culpa molestiae impedit?
      </p>
    </div>
  )
}
