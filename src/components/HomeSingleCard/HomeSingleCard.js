import React from 'react';
import './HomeSignleCard.css';

const HomeSingleCard = (props) => {
    const { title, content, img, photo } = props.post;

    return (
        <div className="projcard-container">

            <div className="projcard projcard-blue">
                <div className="projcard-innerbox">
                    <img className="projcard-img" src={img} />
                    <div className="projcard-textbox">
                        <div className="projcard-title">{title}</div>
                        {/* <div className="projcard-subtitle">This explains the card in more detail</div> */}
                        <div className="projcard-bar"></div>
                        <div className="projcard-description">
                            {content.slice(0, 400)}
                        </div>
                        <div className="projcard-tagbox">
                            <span className="projcard-tag">HTML</span>
                            <span className="projcard-tag">CSS</span>
                            <span  > <img style={{ width: '36px', height: '36px', borderRadius: '50%' }} className='img-fluid' src={photo} alt="" /></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSingleCard;