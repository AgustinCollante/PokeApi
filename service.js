import axios from "axios";

const URL = "https://pokeapi.co/api/v2/";
const limit = "?limit=5&offset=0"

const service = async (props) => {
    if(props.setPokemons){
        let {data} = await axios.get(props.url ||`${URL}/${props.entidad}${limit}` )
        if(data){
            props.setPokemons(data)
        }else{
            return console.log("error")
        }
    }else{
        let {data} = await axios.get(props.url )
        if(data){
            props.setPokemon(data)
        }else{
            return console.log("error")
        }
    }
   
    
}

export default service;