import {View, Text, StyleSheet} from 'react-native'
import {useLocalSearchParams} from 'expo-router'
import exercises from "../assets/data/exercises.json"

export default function ExerciseDetailsScreen(){
    const params = useLocalSearchParams();

    const exercise = exercises.find(item =>item.name == params.name);

    if(!exercise){
        return <Text>Exercise not found</Text>
    }
    return(
        <View style={styles.container}>
            <Text style= {styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.exerciseSubtitle}>
                {exercise.muscle.charAt(0).toUpperCase()+ exercise.muscle.slice(1)} | {exercise.equipment.charAt(0).toUpperCase()+ exercise.equipment.slice(1)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red'
    },
    exerciseName: {
        fontSize: 20, 
        fontWeight: '600',
        
      },
    
    exerciseSubtitle:{
        color: 'dimgray',
      },
})