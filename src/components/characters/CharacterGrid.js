import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = (props) => {
  const { items, isLoading } = props;
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
