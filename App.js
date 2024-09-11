import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseListItem from './src/components/exerciselistitem';


export default function App() {

  return (
    <View style={styles.container}>
    <FlatList
      data={exercises}
      renderItem={({item})=> <ExerciseListItem item= {item}/>}
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding:10,
  },
  
});
