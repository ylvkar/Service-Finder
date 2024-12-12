import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../components/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { Profile } from '../components/RootStackParamList'; 
import ProfileButton from '@/components/ProfileButton';

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

const Index = () => {
  const navigation = useNavigation<IndexScreenNavigationProp>();

  const dummyProfile: Profile = {
    id: 123,
    firstName: 'Coola',
    surName: 'Tanten',
    age: 68,
    profilePic: true,
    categories: ['Träna', 'Sticka', 'Baka'],
    prevPosts: ['Post 1', 'Post 2', 'Post 3'],
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile', { profile: dummyProfile });
  };

  return (
    <View style={{ flex: 1 }}>
      {/*
      <Activity />
      <CreateActivityButton />
      <HamburgerMenu />
      <ProfileButton />

    */}
      <ProfileButton onPress={navigateToProfile} />
    </View>
  );
};

export default Index;
