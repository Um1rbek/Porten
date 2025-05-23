import logo from './img/PORTEN (1).png';
import NavBtnOne from './img/bx_bx-cart.png'
import NavBtnTwo from './img/gridicons_search.png'


function Navbar() {
  return (
    <div className="Navbar">
        <img src={logo} alt="logo" />
        <ul className='nav-ul'>
          <li className="nav-li">Понравилось</li>
          <li className='nav-li'>личный кабинет</li>
          <li className="nav-li">настройки</li>
        </ul>

        <div className="nav-btn">
            <img src={NavBtnOne} alt="" />
            <img src={NavBtnTwo} alt="" />
        </div>
    </div>
  );
}

export default Navbar;