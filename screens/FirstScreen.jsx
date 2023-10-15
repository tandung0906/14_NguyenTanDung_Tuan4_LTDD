import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./firstscreen.style";

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.productSection}>
        <View>
          <Image
            style={styles.stretch}
            source={require("../assets/vs_silver.png")}
          />
        </View>

        <View style={styles.headerSection}>
          <Text style={styles.headerText}>
            Điện thoại Vsnart Joy 3 - Hàng chính hãng
          </Text>
        </View>

        <View style={styles.ratingSection}>
          <View style={styles.ratingStarContainer}>
            <AntDesign name="star" size={24} color="#E0E41A" />
            <AntDesign name="star" size={24} color="#E0E41A" />
            <AntDesign name="star" size={24} color="#E0E41A" />
            <AntDesign name="star" size={24} color="#E0E41A" />
            <AntDesign name="star" size={24} color="#E0E41A" />
          </View>
          <Text style={styles.ratingNumberText}>(Xen 828 đánh giá)</Text>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.priceTextNew}>1.790.000 đ</Text>
          <Text style={styles.priceTextOld}><del>1.790.000 đ</del></Text>
        </View> 

        <View style={styles.saleSection}>
          <Text style={styles.saleText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
          <View>
            <AntDesign name="questioncircleo" size={24} color="black" />
          </View>
        </View>
      </View>

      <View style={styles.chooseColorSection}>
        <Pressable style={styles.chooseColorButton}>
          <Text> 4 MÀU - CHỌN LOẠI</Text>
          <View style={styles.arrow}>
            <AntDesign name="arrowright" size={20} color="black" />
          </View>
        </Pressable>
      </View>

      <View style={styles.buyButtonSection}>
        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </View>
  );
}
