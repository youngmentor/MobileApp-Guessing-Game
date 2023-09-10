import { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../Components/ui/PrimaryButton'
import Title from '../Components/ui/Title';
import Card from '../Components/ui/Card';
import TextInstruction from '../Components/ui/TextInstruction';

function StartGameScreen({ onConfirmNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }
    function resetInput() {
        setEnteredNumber('');
    }
    function confirmButton() {
        const chooseNumber = parseInt(enteredNumber);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert('invalid number',
                'Number has to be a number between 1 and 99',
                [{ text: 'okay', style: 'destructive', onPress: resetInput }]
            )
            return;
        }
        onConfirmNumber(chooseNumber)
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <TextInstruction>Enter A Number</TextInstruction>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.bottonsContainer}>
                    <View style={styles.bottonContainer}>
                        <PrimaryButton onClick={resetInput}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.bottonContainer}>
                        <PrimaryButton onClick={confirmButton}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}
export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        height: 40,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bottonsContainer: {
        flexDirection: 'row'
    },
    bottonContainer: {
        flex: 1,
    },
});
