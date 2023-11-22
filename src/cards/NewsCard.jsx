import React, { useEffect, useState } from 'react';
import './NewsCard.css';
import './webNewsCard.css';
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";

const NewsCard = ({ id, title, content, onClick }) => {
    const [contentLength, setContentLength] = useState(0);

    const handleClick = (e) => {
        e.stopPropagation();
        onClick();
    };

    useEffect(() => {
        setContentLength(content.length);
    }, [content]);

    let imageSource;

    switch (id) {
        case 1:
            imageSource = img1;
            break;
        case 2:
            imageSource = img2;
            break;
        case 3:
            imageSource = img3;
            break;
        case 4:
            imageSource = img4;
            break;
        case 5:
            imageSource = img5;
            break;
        case 6:
            imageSource = img6;
            break;
        case 7:
            imageSource = img7;
            break;
        case 8:
            imageSource = img8;
            break;
            
        case 9:
            imageSource = img9;
            break;
        case 10:
            imageSource = img10;
            break;
        default:
            // Set a default image if the ID doesn't match any case
            imageSource = img1;
            break;
    }

    const firstThreeWords = content.slice(0, 20);

    return (
        <div className="news-card" onClick={handleClick}>
            <p>{title}</p>
            <img src={imageSource} alt={title} />
        </div>
    );
};

export default NewsCard;
