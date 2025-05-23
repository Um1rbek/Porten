import Brends from './img/Rectangle 12.png'

function Footer() {
  return (
    <div className="brends-box">

        <h1 className="brends-title">наши бренды</h1>
        <hr className="brends-hr" />

      <div className="brends-box-img">
        <img src={Brends} alt="" className="Brends-box-img" />
        <img src={Brends} alt="" className="Brends-box-img" />
        <img src={Brends} alt="" className="Brends-box-img" />
        <img src={Brends} alt="" className="Brends-box-img" />
      </div>
    </div>

  );
}

export default Footer;
