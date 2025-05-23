import RightImg from './img/new-collection.png';
import RightImgTime from './img/62050 1.png';

function NewCollection() {
  return (
    <div className="collection">
        <div className="collection-left">

            <h3 className="coll-title">СЕЗОН 2020/21</h3>
            <hr className='coll-hr'/>

            <div className="collection-Allbox">
                            <div className="coll-box">
                <div className="coll-box-time">
                    <img src={RightImgTime} alt=""  className='coll-box-img'/>
                </div>

                <p className='coll-box-text'>Lorem ipsum dolor 
                    sit,ff.
                </p>
             

            </div>

                <div className="coll-box">
                <div className="coll-box-time">
                    <img src={RightImgTime} alt=""  className='coll-box-img'/>
                </div>

                <p className='coll-box-text'>Lorem ipsum dolor 
                    sit,ff.
                </p>
             

            </div>


                <div className="coll-box">
                <div className="coll-box-time">
                    <img src={RightImgTime} alt=""  className='coll-box-img'/>
                </div>

                <p className='coll-box-text'>Lorem ipsum dolor 
                    sit,ff.
                </p>
             

            </div>
            </div>

        </div>
        <div className="collection-right">
            <img src={RightImg} alt="" className='RightImg'/>
        </div>
    </div>
  );
}

export default  NewCollection;