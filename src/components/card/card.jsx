import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import style from "./cardStyle";
import { UpperCase, Type } from "../../stacks/pages/homefunctions";
import { Icon } from "react-native-elements";

const Card = (props) => {
  const [pokemon, setPokemon] = useState(props.pokemon);

  return (
    <View style={style.contentPage}>
      <TouchableOpacity>
        <View style={style.contentImg}>
          {pokemon.sprites && (
            <Image
              style={[
                style.img,
                {
                  backgroundColor: Type(pokemon.types[0].type.name),
                  borderRadius: 1000,
                },
              ]}
              source={{
                uri: pokemon.sprites.front_default,
              }}
            />
          )}
        </View>
      </TouchableOpacity>

      <View style={style.contentTitle}>
        {pokemon.species && (
          <Text style={style.title}>{UpperCase(pokemon.species.name)}</Text>
        )}
      </View>
      <ScrollView>
        <View style={style.contentDescription}>
          <View style={style.contentItemDescription}>
            <Text style={style.label}>Abilities</Text>
            <View style={style.itemDescription}>
              {pokemon.abilities &&
                pokemon.abilities.map((e) => {
                  return (
                    <Text style={style.item}>{UpperCase(e.ability.name)}</Text>
                  );
                })}
            </View>
          </View>
          <View style={style.contentItemDescription}>
            <Text style={style.label}>Type</Text>
            <View style={style.itemDescription}>
              {pokemon.abilities &&
                pokemon.types.map((e) => {
                  return (
                    <Text style={style.item}>
                      <Icon
                        name="record"
                        type="fontisto"
                        color={Type(e.type.name)}
                      />{" "}
                      {UpperCase(e.type.name)}
                    </Text>
                  );
                })}
            </View>
          </View>
          <View style={[style.contentItemDescription, { height: 300 }]}>
            <Text style={style.label}>Stats</Text>
            <View style={style.itemDescription}>
              {pokemon.stats &&
                pokemon.stats.map((e) => {
                  return (
                    <View style={{ flexDirection: "row", width: 50 }}>
                      <Text style={style.item}>{UpperCase(e.stat.name)} </Text>
                      <Icon
                        name="arrow-right-l"
                        type="fontisto"
                        color="black"
                        size={30}
                      />
                      <Text style={style.item}>{e.base_stat}</Text>
                    </View>
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;
