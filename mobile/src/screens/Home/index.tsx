import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SignInBox } from "../../components/SignInBox";
import { SendForm } from "../../components/SendForm";
import { useAuth } from "../../hooks/auth";
export const Home = () => {
  const { user } = useAuth();
  return (
    <KeyboardAvoidingView style={{ flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding': undefined}
    >
      <View style={styles.constainer}>
        <Header />
        <MessageList />
        {user ? <SendForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  );
};
