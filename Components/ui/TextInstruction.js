import { StyleSheet, Text } from "react-native";

function TextInstruction ({children}){
    return(
        <Text style={styles.TextInstruction}>{children}</Text>
    )
}
export default TextInstruction;

const styles = StyleSheet.create({
    TextInstruction: {
        color: 'white',
        fontSize: 15
    }
})