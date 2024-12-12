export type Profile = {
  id: number;
  firstName: string;
  surName: string;
  age: number;
  profilePic: boolean;
  categories?: string[];
  prevPosts?: string[];
};

export type RootStackParamList = {
  Index: undefined;
  Profile: { profile: Profile };
};
