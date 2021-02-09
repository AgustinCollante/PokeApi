import React, { useEffect, useState } from "react";
import {ActivityIndicator, View } from "react-native";
import service from "../../../../service";
import Card from "../../../components/card/card";
import style from "./detailsStyle";


 
const Details = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    service({ setPokemon: setPokemon, url: props.route.params.pokemon.url });
  }, []);

  return (
      <>
      {
         pokemon.species ? (<Card pokemon={pokemon}/> ) : (
              <View style={style.loading}>
                   <ActivityIndicator size="large" color="#00ff00" />
              </View>
          )}
    </>
  );
};

export default Details;
