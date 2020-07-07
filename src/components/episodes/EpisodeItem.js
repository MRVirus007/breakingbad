import React from "react";

const EpisodeItem = ({ episode }) => {
  //  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-inner">
        <div
          className="card-front"
          style={{ backgroundColor: "#333", color: "white", padding: "20px" }}
        >
          <h1>{episode.title}</h1>
          <ul>
            <li>
              <strong>Season:</strong> {episode.season}
            </li>
            <li>
              <strong>Episode:</strong> {episode.episode}
            </li>
            <li>
              <strong>Air Date:</strong> {episode.air_date}
            </li>
          </ul>
        </div>
        <div className="card-back">
          <ul>
            <li>
              <strong>Characters:</strong>
              <ul>
                {episode.characters.map((characters) => (
                  <button
                    className="btn btn-success btn-sm rounded-circle"
                    style={{ margin: "1%" }}
                  >
                    {characters}
                  </button>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
