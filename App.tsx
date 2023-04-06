import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import RouteTabs from './src/route';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://192.168.1.101:4040/graphql',
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

function Dummy2(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Login!</Text>
    </View>
  );
}

function App(): JSX.Element {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Main'
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={loggedIn ? RouteTabs : Dummy2} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('MyM2M', () => App);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
})