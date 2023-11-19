import React, { useState } from "react";
import "./home.css";
import NewsCard from "../cards/NewsCard";
import NewsDetails from "../cards/NewsDetails";
import Events from "../events/Events";
import newsData from "../data/newsData.json";
import newsEvents from "../data/newsEvents.json";
import Menu from "../menu/Menu.jsx";
import menuImage from "../assets/img/menu.png";
import "./webHome.css";

function Home() {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleCardClick = (id) => {
    const selectedNewsItem = newsData.find((news) => news.id === id);
    setSelectedNews(selectedNewsItem);
  };

  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleEventClick = (id) => {
    const selectedEventItem = newsEvents.find((events) => events.id === id);
    setSelectedEvent(selectedEventItem);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="body">
      <div className="home-container">
        <div className="head" id="head">
          <div className="buttonMenuHead" id="buttonMenuHead">
            <button className="buttonMenu" id="buttonMenu" onClick={toogleMenu}>
              <img src={menuImage} alt="" />
            </button>
          </div>

          <div className="headMain" id="headMain">
            <p>CAD</p>
          </div>

          <div className="listItems">
            <ul>
              <li>Atlas da diabete</li>
              <li>Dicas</li>
              <li>Nutrição</li>
              <li>Atividades físicas</li>
            </ul>
          </div>
        </div>

        <div className="line"></div>

        <div className="mainBody" id="mainBody">
          <div className="noticias" id="noticias">
            <div className="headMain" id="headMain">
              <p>Informações</p>
            </div>

            <div className="noticiasCard" id="noticiasCard">
              {newsData.map((news) => (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  content={news.content}
                  onClick={() => handleCardClick(news.id)}
                />
              ))}
            </div>
          </div>

          {selectedNews && (
            <NewsDetails
              title={selectedNews.title}
              content={selectedNews.content}
              onClose={() => setSelectedNews(null)}
            />
          )}

          {selectedEvent && (
            <Events
              title={selectedEvent.title}
              content={selectedEvent.content}
              onClick={() => setSelectedEvent(null)}
            />
          )}
        </div>

        <Menu isOpen={isMenuOpen} onClose={toogleMenu} />
      </div>
    </div>
  );
}

export default Home;
