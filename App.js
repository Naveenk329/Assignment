import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import * as  Sentry from 'sentry-expo'
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn:'https://fb6d595606014f1993299f08cc040662@o4504575825608704.ingest.sentry.io/4504575830917120'
  enableInExpoDevelopment:true,
  debug:true
})





export default function App() {
  return (
    <View style={styles.container}>
      <Text>Jest unit Testing</Text>
      <Text style={{fontSize:30,color:'blue'}}>welcome to deployed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/**Doc :- https://jest-bot.github.io/jest/docs/tutorial-react-native.html


https://expo.dev/artifacts/eas/6sMTdmzz81g2rtd6hBhmaU.aab  app link 
doc https://docs.expo.dev/build/setup/#distribute-your-app-to-an-app-store


SANTRY-EXPO
https://docs.sentry.io/platforms/react-native/

Google Drive link of React native material:

https://drive.google.com/file/d/1gl-WBemOTVLDr4nB0k50bjoGHI-sgaT9/view?usp=sharing
https://drive.google.com/drive/folders/1qKSuYnVDHT_8hKCllsJetwvdumAOgd-t?usp=sharing

Email: dsrmurthy786@yahoo.com
Ph: 98480 11641 
*/}