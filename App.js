import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
//import ListScreen from "./src/screens/Lists";
import ImageScreen from "./src/screens/ImageScreen";
import StateScreen from "./src/screens/StateScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
import BoxScreen from "./src/screens/BoxScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    //List: ListScreen,
    Image: ImageScreen,
    State: StateScreen,
    Color: ColorScreen,
    Screen: SquareScreen,
    Text: TextScreen,
    Password: PasswordScreen,
    Box: BoxScreen,
    //Screen name="List" component={ListScreen}
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
