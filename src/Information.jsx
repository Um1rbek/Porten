import imeged from './img/Rectangle 9.png'


function Information() {
  return (
    <div className="infa-box">

        <div className="infa-box-left">
            <img src={imeged} alt="" className="infa-left-img" />
        </div>

        
        <div className="infa-box-right">
            <div className="right-title">

                <h2 className="right-title-h2">
                    коллекция 2018
                </h2>
                <hr className="right-hr" />

            </div>

            <p className="right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>

            <button className="right-btn">
                посмотреть коллекцию
            </button>
        </div>
        
    </div>

  );
}

export default Information;
