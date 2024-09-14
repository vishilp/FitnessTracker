import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from '../assets/data/exercises.json';
import ExerciseListItem from '../src/components/exerciselistitem';


export default function App() {

  return (
    <View style={styles.container}>
    <FlatList
      data={exercises}
      contentContainerStyle={{gap:5}}
      renderItem={({item})=> <ExerciseListItem item= {item}/>}
      keyExtractor={(item, index)=> item.name+index} //adding index in case of repetitive names
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:10,
  },
  
});

