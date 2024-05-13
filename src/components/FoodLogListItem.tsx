import {View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';


const FoodLogListItem =({item}) => {
    return(
      <View style={{
        backgroundColor: 'gainsboro', 
        padding: 10, 
        borderRadius:5, 
        flexDirection: 'row', 
        justifyContent:'space-between', 
        alignItems:'center'}}>
      <View style={{flex: 1, gap:3}}>
        <Text style={{fontWeight: 'bold', fontSize: 16 }}>{item.label}</Text>
        <Text style={{color: 'dimgray'}}>
            {item.kcal} cal</Text>
      </View>
     </View>
  
    );
  };

  export default FoodLogListItem