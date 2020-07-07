import React from "react";

const QuoteItem = ({ quote }) => {
  //  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-inner">
        <div
          className="card-front"
          style={{ backgroundColor: "#333", color: "white", padding: "20px" }}
        >
          <h1>{quote.author}</h1>
          <ul>
            <li>
              <strong>Quote:</strong> {quote.quote}
            </li>
          </ul>
        </div>
        <div className="card-back">
          <ul>
            <li>
              <h1>{quote.author}</h1>
              <strong>Quote:</strong> {quote.quote}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
