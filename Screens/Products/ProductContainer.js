import { AntDesign, FontAwesome } from "react-native-vector-icons";
import {
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import Banner from "../../Shared/Banner";
import Header from "../../Shared/Header";
import SearchedProduct from "./SearchedProduct";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";

var { height, width } = Dimensions.get("window");

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setFocus(false);
    //product
    axios
      .get(`${baseURL}products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Api call error");
      });
    return () => {
      setProducts([]);
      setFocus();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => {
        i.name.toLowerCase().includes(text.toLowerCase());
      })
    );
  };

  const onBlur = () => {
    setFocus(false);
    Keyboard.dismiss();
  };
  return (
    <View>
      <Header />
      <View style={styles.header}>
        <FontAwesome name="search" color="gray" size={25} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onFocus={() => setFocus(true)}
          onChangeText={(text) => searchProduct(text)}
        />
        {focus == true ? (
          <TouchableWithoutFeedback
            onPress={() => {
              onBlur;
            }}
          >
            <AntDesign name="closecircleo" size={20} color="gray" />
          </TouchableWithoutFeedback>
        ) : null}
      </View>
      {focus == true ? (
        <SearchedProduct
          navigation={props.navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View>
            <Banner />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "red",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginHorizontal: 15,
    paddingHorizontal: 20,
    height: 40,
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // borderColor: "#5F9EA0",
    backgroundColor: "#F0F8FF",
    margin: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
    color: "#556B2F",
    fontWeight: "600",
  },
});

export default ProductContainer;
