import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import {singlePosData, userData} from "../../lib/dummydata.js";

function SinglePage() {

    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePosData.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePosData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{singlePosData.address}</span>
                                </div>
                                <div className="price">$ {singlePosData.price}</div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt="" />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePosData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper"></div>
            </div>
        </div>
    )
}

export default SinglePage;