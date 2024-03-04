import {useState} from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles} from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={GlobalStyles.centerContainer}>
      <Text style={GlobalStyles.title}>{count}</Text>
      {/* <Icon name="add-outline" size={35}></Icon> */}
      <FAB
        //label="+1"
        //icon="plus"
        style={GlobalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode="flat"
        variant="tertiary"
        icon="add-outline"
      />
    </View>
  );
};
