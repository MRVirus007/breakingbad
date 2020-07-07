import React from "react";
import Spinner from "../ui/Spinner";
import DeathItem from "./DeathItem";
const DeathGrid = ({ deaths, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {deaths.map((death) => (
        <DeathItem key={death.death_id} death={death}></DeathItem>
      ))}
    </section>
  );
};

export default DeathGrid;
