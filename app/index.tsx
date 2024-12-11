import { Text, View, StyleSheet } from "react-native";
import Activity from "../components/Activity";
import CreateActivityButton from "../components/CreateActivityButton";
import HamburgerMenu from "../components/HamburgerMenu";
import ProfileButton from "../components/ProfileButton";
import Profile from "../components/profile"; 


export default function Index() {
  const dummyProfile = {
    firstName: "Coola",
    surName: "Tanten",
    age: 68,
    profilePic: true, 
    categories: ["Träna", "Sticka", "Baka"],
    prevPosts: ["Post 1", "Post 2", "Post 3"], 
  };

  return (
    <View style={styles.container}>
      {/*
      <Activity />
      <CreateActivityButton />
      <HamburgerMenu />
      <ProfileButton />

    */}
      { /*   <CreateActivityButton />

    

      <ProfileButton />
      <CreateActivityButton />
    */}
      <Text style={styles.text}>Profil</Text>
      <Profile {...dummyProfile} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',  },
});