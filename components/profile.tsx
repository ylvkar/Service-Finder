import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

type profileProps = {
  firstName: string,  
  surName: string,     
  age: number,        
  profilePic: boolean; 
  categories?: string[],    
  prevPosts?: string[]
};

export default function Profile(props: profileProps) {
  const { firstName, surName, age, profilePic, categories = [], prevPosts } = props;
  
  return (
    <View style={styles.container}>
      {/* Profilbild */}
      {profilePic ? (
        <Image source={pic} style={styles.profileImage} />
      ) : (
        <Image source={noPic} style={styles.profileImage} />
      )}
      
      <Text style={styles.name}>{firstName} {surName}</Text>
      <Text style={styles.text}>{age} år</Text>
      
      {/* Tidigare inlägg */}
      {prevPosts && prevPosts.length > 0 && (
        <View style={styles.postsContainer}>
          <Text style={styles.subHeader}>Tidigare inlägg</Text>
          {prevPosts.map((item, index) => (
            <Text key={index} style={styles.listItem}>{item}</Text>
          ))}
        </View>
      )}
      
      {categories.length > 0 && (
        <View style={styles.postsContainer}>
          <Text style={styles.subHeader}>Kategorier</Text>
          <View style={styles.categoriesContainer}>
            {categories.map((item, index) => {
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

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type profileProps = {
  firstName: string,  
  surName: string,     
  age: number,        
  profilePic: boolean; 
  categories?: string[],    
  prevPosts?: string[]
};


export default function Profile(props: profileProps) {
    const { firstName, surName, age, profilePic, categories, prevPosts } = props;
  
    console.log("Props:", props.categories);
  
    return (
          <View style={styles.container}>
          <Text style={styles.name}>{firstName} {surName}</Text>
          <Text style={styles.text}>Age: {age}</Text>
          <Text style={styles.text}>Has profile picture: {profilePic ? 'Yes' : 'No'}</Text>
    
          {categories && categories.length > 0 && (
            <View>
              <Text style={styles.subHeader}>categories:</Text>
              {categories.map((item, index) => (
                <Text key={index} style={styles.listItem}>{item}</Text>
              ))}
            </View>
          )}


        {prevPosts && prevPosts.length > 0 && (
            <View>
              <Text style={styles.subHeader}>Previous post:</Text>
              {prevPosts.map((item, index) => (
                <Text key={index} style={styles.listItem}>{item}</Text>
              ))}
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
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16, // Normal textstorlek
        color: 'gray',
        marginBottom: 5,
    },
    subHeader: {
        fontSize: 24, // För rubriker som "Previous Posts"
        fontWeight: 'bold',
        marginVertical: 10,
    },
    listItem: {
        fontSize: 16,
        color: 'blue',
    },
  });