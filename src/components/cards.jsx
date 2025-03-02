import React from "react";
import animeList from "../anime";

const Cards = () => {
  return (
    <div className="card-container">
      {animeList.map((anime) => (
        <div className="card" key={anime.rank}>
          <img src={anime.image_url} alt={anime.title} />
          <h2>{anime.title}</h2>
          <p>Score: {anime.score}</p>
          <p>Rank: {anime.rank}</p>
          <a href={anime.url} target="blank">Watch!</a>
        </div>
      ))}
    </div>
  );
};

export default Cards;
