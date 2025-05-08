import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Stack } from "expo-router";

export default function RootLayout() {
     return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name='(tabs)' options={{headerShown: false}} />
                <Stack.Screen name='+not-found' options={{headerShown: false}} />
            </Stack>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red'
    }
})