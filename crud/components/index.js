import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import LoadingScreen from './LoadingScreen';
import NewQuote from './NewQuote';


const AppStack = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: `Home`,
        }),
    },
    NewQuote:{
        screen: NewQuote,
        navigationOptions: ({ navigation }) => ({
            title: `New Quote`,
        }),
    }
});

const RoutesStack = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: AppStack
    },
    {initialRouteName: 'Loading'}
);

const Router = createAppContainer(RoutesStack);

export default Router;
