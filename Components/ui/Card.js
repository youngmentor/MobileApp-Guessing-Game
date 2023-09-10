import { View, StyleSheet } from "react-native"

function Card ({children}){
return(
    <View style={styles.Card}>{children}</View>
)
}
export default Card

const styles = StyleSheet.create({
    Card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
    },
})