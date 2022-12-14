import { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo.png';
import logoTexto from '../../assets/logo_texto.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';
function SideMenu() {
  const [showMenu, setShowMenu] = useState(true)
  const auth = useContext(AuthContext);

  function handlesignout(){
    auth.signout();
  }

  return (
    <>
      <div className={`sidebar ${showMenu === false ? "" : "close"}`}>
    <div className="logo-details">
      <img src={logo} className="logo_icon"/>
      <img src={logoTexto} className="logo_name"/>
    </div>
    <ul className="nav-links">
      <li>
        <Link to='home'>
          <i className='bx bx-grid-alt' ></i>
          <span className="link_name">Pagina Inicial</span>
          </Link>
        <ul className="sub-menu blank">
          <li><Link to='home'><a className="link_name" >Pagina Inicial</a></Link></li>
        </ul>
      </li>
      {/* <li>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-collection' ></i>
            <span className="link_name">Category</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Category</a></li>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP & MySQL</a></li>
        </ul>
      </li> */}
      {auth.user.role > 2 &&<li>
        <Link to='privada'>
          <i className='bx bx-pie-chart-alt-2' ></i>
          <span className="link_name">Pagina Privada</span>
        </Link>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Pagina Privada</a></li>
        </ul>
      </li>}
      <li>
        <a href="#">
          <i className='bx bx-cog' ></i>
          <span className="link_name">Configurações</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Configurações</a></li>
        </ul>
      </li>
      <li>
    <div className="profile-details">
      <div className="profile-content">

      </div>
      <div className="name-job">
        <div className="profile_name">{auth.user.name}</div>
        <div className="job">{auth.user.role == 6 ? "Adminstrador" : "Usuario"}</div>
      </div>
      <i className='bx bx-log-out' onClick={handlesignout}></i>
    </div>
  </li>
</ul>
  </div>
  <section className="home-section">
    <div className="home-content">
      <i className='bx bx-menu' onClick={()=>setShowMenu(!showMenu)}></i>
      
    </div>
    <Outlet />
  </section>
    </>
  )
}

export default SideMenu
