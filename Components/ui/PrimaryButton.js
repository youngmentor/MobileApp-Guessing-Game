import { View, Text, Pressable, StyleSheet } from 'react-native'
function PrimaryButton({ children, onClick }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed 
                ? [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer}
                onPress={onClick}
                android_ripple={{ color: '#643999' }}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton


const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        backgroundColor: '#72063c',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    },
})