
import { StyleSheet, Text, View} from 'react-native';

export default function ExerciseListItem({item}){
    return(
      <View style={styles.exerciseContainer}>
        <Text style= {styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {item.muscle.charAt(0).toUpperCase()+ item.muscle.slice(1)} | {item.equipment.charAt(0).toUpperCase()+ item.equipment.slice(1)}
        </Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
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
      marginHorizontal: 2,

      //shadow from react native shadow generator github
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
  });
  