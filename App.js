import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {
  const exercise = exercises[0]
  console.log(exercise);
  return (
    <View style={styles.container}>

    <View style={styles.exerciseContainer}>
      <Text style= {styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {exercise.muscle.charAt(0).toUpperCase()+ exercise.muscle.slice(1)} | {exercise.equipment.charAt(0).toUpperCase()+ exercise.equipment.slice(1)}
      </Text>
    </View>

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

  exerciseName: {
    fontSize: 20, 
    fontWeight: '600',
    
  },

  exerciseSubtitle:{
    color: 'dimgray',
  },

  exerciseContainer:{
    backgroundColor:'#fff',
    padding:10,
    borderRadius: 10,
    gap: 5,
  },
});
