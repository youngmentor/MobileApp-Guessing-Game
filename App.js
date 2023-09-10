import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './Screens/ScreenGameScreen';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import GameOverScreen from './Screens/GameOverScreen';
export default function App() {
  const [guessRound, setGeussRound] = useState(0)
  const [userNumber, setUserNumber] = useState()
 const [gameOver, setGameOver]= useState(true)
  function startGameHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  function gameOverHandler (numberOfRounds){
    setGameOver(true)
    setGeussRound(numberOfRounds)
  }

  function startNewGameHandler (){
  setUserNumber(null);
  setGeussRound(0)
  }
  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if (gameOver && userNumber ){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRound} onStartNewGame={startNewGameHandler} />
  }

  
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
