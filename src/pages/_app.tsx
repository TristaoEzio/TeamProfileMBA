import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TeamScreen from '../screens/TeamScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

export type RootStackParamList = {
  Team: undefined;
  UserProfile: {userId: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Team">
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
