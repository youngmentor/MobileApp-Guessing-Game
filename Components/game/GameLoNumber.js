import { View , StyleSheet, Text} from "react-native";


function GameLogNumber ({roundNumber, guess}){
    return(
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}
export default GameLogNumber;

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#ddb52f',
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#ddb52f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
    },
    itemText: {

    }
})