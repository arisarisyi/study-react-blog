import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://media.suara.com/pictures/653x366/2020/07/06/71947-gambar-pemandangan.jpg"
        alt=".."
      />
    </div>
  )
}
