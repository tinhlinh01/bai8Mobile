import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PhoneInput = () => {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();  // Get navigation object from react-navigation

  const handleInputChange = (text) => {
    const value = text.replace(/\D/g, ""); // Only allow digits
    setPhone(value);
  };

  const handleSubmit = () => {
    if (phone.length === 10) {
      Alert.alert("Login successful", `Phone: ${phone}`);
      navigation.replace("Main");  // Navigate to the TabNavigator after successful login
    } else {
      Alert.alert("Phone number must be 10 digits.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <TextInput
        style={styles.phoneInput}
        value={phone}
        onChangeText={handleInputChange}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        maxLength={10}
      />
      <View style={styles.keypad}>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  phoneInput: {
    width: "100%",
    maxWidth: 300,
    padding: 10,
    fontSize: 18,
    textAlign: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  keypad: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  submitButton: {
    width: "90%",
    marginTop: 10,
    padding: 15,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
