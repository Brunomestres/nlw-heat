import React from "react";
import { View } from "react-native";
import { Button } from "../Button";
import { COLORS } from "../../theme";
import { styles } from "./style";
import { useAuth } from '../../hooks/auth'
export const SignInBox = () => {
  const { signIn, isSigninIn } = useAuth()
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigninIn}
      />
    </View>
  );
};
