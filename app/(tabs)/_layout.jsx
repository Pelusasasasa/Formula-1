import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import NavBar from "../../components/Navbar";

export default function TabsLayout(){
        return(
            <View style={{flex: 1}}>
                <NavBar />
                <Tabs screenOptions={{
                    tabBarStyle:{ display: 'none'},
                    headerShown: false
                }}>
                    <Tabs.Screen name="index" options={{
                        title: 'Home'
                    }}/>
                    <Tabs.Screen name="pilots"/>
                    <Tabs.Screen name="teams"/>
                    <Tabs.Screen name="racings"/>
                </Tabs>
            </View>
        )
}
