import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import RegisterForm from './Components/Forms/RegisterFrom'
import HomeScreen from './Container/HomeScreen'
import TweetEditorHooks from './Container/TweetEditorHooks'


//import TweetEditor from './containers/TweetEditor'


const AppNavigator = createStackNavigator({
  home: {
    screen: RegisterForm,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  
}
) 

export default createAppContainer(AppNavigator)




{/**const AppNavigator = createStackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  tweetEditor: {
    screen: TweetEditorHooks,
    navigationOptions: {
      headerTitle: 'New Tweet'
    }
  }
}
) 

export default createAppContainer(AppNavigator)



*/}