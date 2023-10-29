import React, { useEffect, useState } from 'react';
import './NewsCard.css';
import './webNewsCard.css'
import imageMedico from '../assets/img/medico.png'

const NewsCard = ({ title, content, onClick }) => {

    const [contentLength, setContentLength] = useState(0)

    const handleClick = (e) => {
        e.stopPropagation();
        onClick();
    }


    useEffect(() => {
        setContentLength(content.length);
    }, [content]);


    const fristTreeWords = content.slice(0,20);
    return (
        <div className="news-card" onClick={handleClick}>
            <p>{title}</p>
            <img src={imageMedico} alt="title" />
            <p>{fristTreeWords}</p>
        </div>
    )
}

export default NewsCard;
