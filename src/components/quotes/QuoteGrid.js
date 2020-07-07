import React from "react";
import Spinner from "../ui/Spinner";
import QuoteItem from "./QuoteItem";
const QuoteGrid = ({ quotes, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {quotes.map((quote) => (
        <QuoteItem key={quote.quote_id} quote={quote}></QuoteItem>
      ))}
    </section>
  );
};

export default QuoteGrid;
