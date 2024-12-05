import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./presentation/navigation/Navigation";

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Navigation />
    </NavigationContainer>
  );
}
