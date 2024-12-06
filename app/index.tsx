import React from 'react';
import { View, Text } from 'react-native';
import Profile from '../components/Profile';

export default function Index() {
  const person = {
    firstName: 'John',
    surName: 'Doe',
    age: 30,
    profilePic: false,
    categories: ['categories, jag har bakat bullar', 'Kom och köp! :)'],
    prevPosts: ['categories, jag har bakat bullar', 'Kom och köp! :)'],
  };

  console.log("Person:", person);


  return (
    <View>
      <Profile
        firstName={person.firstName}
        surName={person.surName}
        age={person.age}
        profilePic={person.profilePic}
        categories={person.categories}
        prevPosts={person.prevPosts}
      />
    </View>
  );
}
