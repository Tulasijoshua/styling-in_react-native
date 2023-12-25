import { View, Text, StyleSheet } from 'react-native';

export default function StyleNative() {
    return (
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>Style inheritance <Text style={styles.boldText}>in bold</Text> </Text>
            </View>
            <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
                <Text style={{ borderRadius: 5, backgroundColor: "red" }}>Lightblue box</Text>
            </View>
            <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
                <Text>Lightgreen box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "plum", padding: 60 },
    darkMode: {
        backgroundColor: "black",
    },
    darkModeText: {
        color: "white"
    },
    boldText: {
        fontWeight: "bold"
    },
    box: {
        width: 250,
        height: 250,
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        // margin: 10
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "purple",
        // borderStyle: "solid",
        borderRadius: 5
    },
    lightBlueBg: {
        backgroundColor: "lightblue",
    },
    lightgreenBg: {
        backgroundColor: "lightgreen",
    },
    // Works for only iOS 
    boxShadow: {
        shadowColor: "blue",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },
    androidShadow: {
        shadowColor: "blue",
        elevation: 10
    }
})