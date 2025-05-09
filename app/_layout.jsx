import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { Stack } from "expo-router";
import NavBar from "../components/Navbar";

export default function RootLayout() {
     return (
        <Provider store={store}>
            <NavBar/>
            <Stack screenOptions={{ headerShown: false }} />
        </Provider>
    );
};