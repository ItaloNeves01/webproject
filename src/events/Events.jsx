import React from 'react';
import './EventsCard.css';
import eventimg from  '../assets/img/local.png'

const Events = ({ title, content, onClick }) => {

    const handleClick = (e) => {
        e.stopPropagation();
        onClick();
    }
    return (
        <div className="events-card" onClick={handleClick}>
            <p>{title}</p>
            <img src={eventimg} alt="" />
            <p>{content}</p>
        </div>
    )
}

export default Events;
