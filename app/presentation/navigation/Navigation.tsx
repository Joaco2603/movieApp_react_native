import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DetailsScreen from "../screens/Details/DetailsScreen";

export type RootStackParams = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
