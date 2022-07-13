import "./sidebar.css"

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum a
          voluptates praesentium tempora ab! Vero odit expedita deleniti
          recusandae, dignissimos nam, consequatur amet veritatis, laudantium
          repellendus quam autem temporibus odio.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Kategori</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Hadits</li>
          <li className="sidebarListItem">Fiqih</li>
          <li className="sidebarListItem">Hikmah</li>
          <li className="sidebarListItem">Nasihat</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-youtube"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
