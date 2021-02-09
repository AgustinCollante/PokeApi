import { StyleSheet } from "react-native";


const style = StyleSheet.create({
  contentPage: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  contentLabel: {
    width: 350,
    height: 50,
    alignItems: "center",
    marginTop: 40,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 35,
  },
  contentCircleBtn:{
      marginTop:40,
      flex:1,
      flexDirection:"row",
      width:210,
      justifyContent:"space-between"
      
  },
  circleBtn:{
    width:85,
    height:85,
    borderRadius:1000,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#22C95A",
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
  },
  textCircleBtn:{
      color: "#FFFFFF"
  },
  counter:{
    fontSize:20,
    height:80,
    textAlignVertical:"center"
  }
});

export default style;
