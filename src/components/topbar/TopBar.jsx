import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  const user = false
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-youtube"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/pendidikan">
              Pendidikan
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              Kegiatan
            </Link>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://scontent-sin6-4.xx.fbcdn.net/v/t31.18172-8/15626040_945080402291025_5478030936287525088_o.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHyc5iCazclmMpYsjjf7RXQrnMu8wtSpLSucy7zC1KktCC-E1X0zbQwUpVY_9wOJL0&_nc_ohc=KWRFBPxs3WEAX_bxm10&_nc_ht=scontent-sin6-4.xx&oh=00_AT_yXw1T-n21O398WBHREoMXD5towtyF8Rg1a3m1cKJzaQ&oe=62F30082"
            alt=".."
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
