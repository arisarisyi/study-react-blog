import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/03/05/aurora-borealis-2647474_960_720-20220305073333.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <b>Author: Bontang</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          dolorem tempora! Sapiente itaque recusandae sint labore laborum nihil
          soluta eum tempore natus. Minus iste alias architecto harum neque
          excepturi nulla! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Numquam debitis ut nobis corporis eligendi optio omnis quo
          distinctio corrupti est nisi libero fugit id, totam rem sequi. Vero,
          deleniti eum? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Beatae quis dolores vel blanditiis earum ab tempora minima natus
          rem. Doloremque cupiditate culpa velit provident quae, commodi atque
          fugit voluptas maxime.
        </p>
      </div>
    </div>
  )
}
