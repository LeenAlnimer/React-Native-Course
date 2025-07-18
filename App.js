import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/Lists";
import ImageScreen from "./src/ImageScreen";
import StateScreen from "./src/StateScreen";
import ColorScreen from "./src/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import PasswordScreen from "./src/screens/PasswordScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    State: StateScreen,
    Color: ColorScreen,
    Screen: SquareScreen,
    Text: TextScreen,
    Password:PasswordScreen,
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
