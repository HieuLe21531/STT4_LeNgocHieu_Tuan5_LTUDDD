import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator;
const chooseImage = route.params ? route.params.Image : require("../assets/vs_blue.svg");

export default function Page2(navigation, route) {
  const [image, setImage] = useState(chooseImage)

  const NavtoPage1 = () => {
    navigation.navigation.navigate("1", { image });
  }


  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={image} style={{ width: 112, height: 132 ,resizeMode: "contain"}} />
        <Text style={{ fontSize: 15 }}>
          Điện Thoại Vsmart Joy 3{"\n"}
          Hàng chính hãng
        </Text>
      </View>
	  
      <View style={styles.view2}>
        <Text style={{ fontSize: 18 }}>Chọn một màu bên dưới:</Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_silver.svg"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "#C5F1FB" }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_red.png"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "#F30D0D" }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_black.png"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "black" }]} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setImage(require("../assets/vs_blue.png"))}
          >
            <View style={[styles.viewColor, { backgroundColor: "#234896" }]} />
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={NavtoPage1}>
            <View style={styles.buttonView}>
              <Text style={{color: "white"}}>XONG</Text>
            </View>
          </TouchableOpacity>
        </View>
		
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
