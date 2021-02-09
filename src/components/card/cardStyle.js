import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  contentPage: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  contentImg: {
    borderRadius: 1000,
    marginTop: 20,
  },
  img: {
    width: 200,
    height: 200,
  },
  contentTitle: {
    width: 350,
    height: 50,
    alignItems: "center",
    marginTop: 40,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  title: {
    fontSize: 35,
  },
  scrollView: {},
  contentDescription: {
    width: 350,
    height: 580,
    alignItems: "center",
    marginTop: 40,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  contentItemDescription: {
    paddingTop: 10,
    width: 300,
    height: 160,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "700",
  },
  itemDescription: {
    height: 40,
    width: 300,
  },
  item: {
    fontSize: 25,
    flexDirection: "row",
    width: 200,
    marginLeft: 10,
  },
});

export default style;
