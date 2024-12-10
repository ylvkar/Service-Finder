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