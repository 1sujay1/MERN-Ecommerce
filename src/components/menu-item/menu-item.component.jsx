import React from "react";
import { withRouter } from "../../utils/router.params";
import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, size, navigate, linkUrl }) => {
    console.log("linkurl", linkUrl);
    return (
        <div className={`menu-item ${size}`} onClick={() => navigate(`${linkUrl}`)}>
            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className="content" >
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}
export default withRouter(MenuItem);