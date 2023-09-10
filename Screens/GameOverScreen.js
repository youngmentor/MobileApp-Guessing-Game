import { Image, StyleSheet, View, Text } from "react-native"
import Title from "../Components/ui/Title"
import PrimaryButton from "../Components/ui/PrimaryButton";


function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.GamOverContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.jpg')} />
            </View>
            <Text style={styles.summaryText}>
                Your Phone Needed  <Text style={styles.highlights}>{roundsNumber}</Text> rounds to
                guess the number <Text style={styles.highlights}>{userNumber}</Text>
            </Text>
            <PrimaryButton onClick={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}
export default GameOverScreen;

const styles = StyleSheet.create({
    GamOverContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlights: {
        color: '#4e0329'
    }
})