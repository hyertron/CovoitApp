import { mockTrips } from "../data/mockTrips";
import { FlatList, Pressable } from "react-native";
import TripCard from "../components/TripCard";

export default function TripListScreen() {
    return (
        <FlatList
            data={mockTrips}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Pressable onPress={() => console.log("Trajet sélectionné : " + item.departure + " → " + item.arrival)}>
                <TripCard trip={item} /></Pressable>}
            contentContainerStyle={{ padding: 16, gap: 12 }}
        />
    );
}