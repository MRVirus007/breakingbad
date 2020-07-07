import React from "react";

const DeathItem = ({ death }) => {
  //  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-inner">
        <div
          className="card-front"
          style={{ backgroundColor: "#333", color: "white", padding: "20px" }}
        >
          <h1>{death.death}</h1>
          <ul>
            <li>
              <strong>Cause:</strong> {death.cause}
            </li>
            <li>
              <strong>Responsible:</strong> {death.responsible}
            </li>
            <li>
              <strong>Death Occured in Season :</strong> {death.season}
            </li>
            <li>
              <strong>Episode of Season Death Occured:</strong> {death.episode}
            </li>
          </ul>
        </div>
        <div className="card-back">
          <ul>
            <li>
              <h1>{death.death}</h1>
              <strong>Last Words:</strong> {death.last_words}
            </li>
            <li>
              <strong>No. of Deaths:</strong> {death.number_of_deaths}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeathItem;
