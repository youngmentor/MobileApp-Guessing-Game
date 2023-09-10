import { View, StyleSheet, Alert, Text, FlatList } from 'react-native'
import Title from '../Components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../Components/game/NumberContainer';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Card from '../Components/ui/Card';
import TextInstruction from '../Components/ui/TextInstruction';
import { Ionicons } from '@expo/vector-icons'
import GameLogNumber from '../Components/game/GameLoNumber';
function gerateRandomNumber(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return gerateRandomNumber(min, max, exclude)
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = gerateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100
    }, [])
    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "Don't Lie",
                "You know that this is wrong...",
                [{ text: "Sorry", style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandom = gerateRandomNumber(minBoundary, maxBoundary, currentGuess)

        setCurrentGuess(newRandom)
        setGuessRounds(prevGuessRound => [newRandom, ...prevGuessRound])
    }

    const guessRoundLenght = guessRounds.length;
    return (
        <View style={styles.screen}>
            <Title>Opponents Guesss</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <TextInstruction>Higher or Lower?</TextInstruction>
                <View style={styles.bottonsContainer}>
                    <View style={styles.bottonContainer}>
                        <PrimaryButton onClick={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.bottonContainer}>
                        <PrimaryButton onClick={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) =>
                        <GameLogNumber roundNumber={guessRoundLenght-itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
    },
    bottonsContainer: {
        flexDirection: 'row'
    },
    bottonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
})