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

      {list.map((product, index) => <Text key={index} style={styles.products}>{product}</Text>)}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  input : {
    borderWidth: 1,
    borderColor: 'black',
    padding: 1,
    marginBottom: 30
  },
  button : {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
    
  },
  buttonText : {
    color: 'white',
    fontFamily: 'Calibri',
  },
  products : {
    fontSize: 25,
    paddingVertical: 3,
    borderBottomWidth: 2
  }
});
