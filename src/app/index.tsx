import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App(){

  const [product, setProduct] = useState('');
  const [list, setList] = useState([]);

  const handlePress = () => {

    if(product.trim() !== ''){
      setList([...list, product]);
      setProduct('');
    }

  }

  return(
    <View style={styles.container}>

      <TextInput
      style={styles.input}
      onChangeText={(text) => setProduct(text)}
      value={product}
      />

      <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      >

        <Text style={styles.buttonText}>Hozzáadás</Text>

      </TouchableOpacity>

      {list.map((product, index) => <Text key={index}>{product}</Text>)}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
});
