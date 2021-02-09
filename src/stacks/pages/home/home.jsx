import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import service from "../../../../service";
import style from "./homeStyle";
import { Icon } from "react-native-elements";
import { UpperCase } from "../homefunctions";

const Home = ({ navigation }) => {
  const [pokemons, setPokemons] = useState();
  const [counter, setCounter] = useState(0);

  const handleNext = () => { 
    service({
      entidad: "pokemon",
      setPokemons: setPokemons,
      url: pokemons.next,
    });
    setCounter(counter+1)
  };

  const handleBack = () => {
    service({
      entidad: "pokemon",
      setPokemons: setPokemons,
      url: pokemons.previous,
    });
    if(counter>=1){
      setCounter(counter-1)  
    }
  };

  useEffect(() => {
    service({ entidad: "pokemon", setPokemons: setPokemons });
  }, []);

  return (
    <View style={style.contentPage}>
      {pokemons &&
        pokemons.results.map((e, i) => {
          return (
            <TouchableOpacity key={i} onPress={()=> navigation.navigate("Details", {pokemon:e})}>
              <View style={style.contentLabel}>
                <Text style={style.label}>{UpperCase(e.name)}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      <View style={style.contentCircleBtn}>
        <TouchableOpacity onPress={handleBack}>
          <View style={style.circleBtn}>
            <Icon name="angle-left" type="fontisto" color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <Text style={style.counter}>{counter}</Text>
        <TouchableOpacity onPress={handleNext}>
          <View style={style.circleBtn}>
            <Icon name="angle-right" type="fontisto" color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;


