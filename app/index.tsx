import { Text, View } from "react-native";
import Activity from "../components/Activity";
import CreateActivityButton from "../components/CreateActivityButton";
import HamburgerMenu from "../components/HamburgerMenu";
import ProfileButton from "../components/ProfileButton";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/*
      <Activity />
      <CreateActivityButton />
      <HamburgerMenu />
      <ProfileButton />

    */}
          <CreateActivityButton />

    

    </View>
  );
}
