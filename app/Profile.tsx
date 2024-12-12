import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native'; 
import { RootStackParamList } from '../components/RootStackParamList'; 
import { RouteProp } from '@react-navigation/native';

const pic = require("../assets/images/pic.jpg");
const noPic = require("../assets/images/noPic.png");
const catWeights = require("../assets/images/weight.png");
const catKnit = require("../assets/images/knitting.png");
const catBake = require("../assets/images/bakery.png");

type Category = "Träna" | "Sticka" | "Baka";

const categoryImages: Record<Category, any> = {
  "Träna": catWeights,
  "Sticka": catKnit,
  "Baka": catBake,
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

export default function Profile() {
  const route = useRoute<ProfileScreenRouteProp>(); 
  const user = route?.params?.profile;

  if (!user) {
    console.log("Ingen profil hittades ://");
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ingen profil hittades ://</Text>
      </View>
    );
  }

  const { profile } = route.params;

  return (
    <View style={styles.container}>
      {profile.profilePic ? (
        <Image source={pic} style={styles.profileImage} />
      ) : (
        <Image source={noPic} style={styles.profileImage} />
      )}
      
      <Text style={styles.name}>{profile.firstName} {profile.surName}</Text>
      <Text style={styles.text}>{profile.age} år</Text>
      
      {profile.prevPosts && profile.prevPosts.length > 0 && (
        <View style={styles.postsContainer}>
          <Text style={styles.subHeader}>Tidigare inlägg</Text>
          {profile.prevPosts.map((item, index) => (
            <Text key={index} style={styles.listItem}>{item}</Text>
          ))}
        </View>
      )}
      
      {profile.categories && profile.categories.length > 0 && (
        <View style={styles.postsContainer}>
          <Text style={styles.subHeader}>Kategorier</Text>
          <View style={styles.categoriesContainer}>
            {profile.categories.map((item, index) => {
              const categoryImage = categoryImages[item as Category]
              return (
                <View key={index} style={styles.categoryBox}>
                  <Image source={categoryImage} style={styles.categoryImage} />
                  <Text style={styles.text}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    marginBottom: 10,
  },
  text: {
    fontSize: 16, 
    color: 'gray',
    marginBottom: 5,
  },
  postsContainer: {
    backgroundColor: '#f8f8f8',  
    width: '80%', 
    alignSelf: 'center',      
    padding: 20,                
    marginTop: 10,  
    marginBottom: 5,             
    borderRadius: 10,           
    borderWidth: 1,           
    borderColor: '#ddd',        
    shadowColor: '#000',   
    shadowOpacity: 0.1,     
    shadowRadius: 5,          
    elevation: 3,        
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,         
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,        
    color: '#333',        
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 125, 
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',        
    flexWrap: 'wrap',            
    justifyContent: 'space-evenly', 
  },
  categoryBox: {
    backgroundColor: '#f8f8f8', 
    borderRadius: 10,            
    padding: 12,                 
    width: '30%',                
    alignItems: 'center',       
    justifyContent: 'center',    
    borderWidth: 2,             
    borderColor: '#ddd',         
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
});
