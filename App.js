import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreens";
import List from "./src/screens/List";
import ImageScreen from "./src/screens/ImageScreen";
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,
    List: List,
    ImageScreen: ImageScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
