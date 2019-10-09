import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import GameScreen from './src/screens/GameScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import CountReducerScreen from './src/screens/CountReducerScreen';
import NameScreen from './src/screens/NameScreen';
import BoxScreen from './src/screens/BoxScreen';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListScreen,
    Images: ImageScreen,
    Game: GameScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    ReducerScreen: CountReducerScreen,
    Name: NameScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
