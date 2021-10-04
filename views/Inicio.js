import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const Inicio = ({navigation}) => {
  const informacion = {
    nombre: 'Juan',
    clienteId: 20,
    totalPagar: 500,
  };
  const visitarNosotros = () => {
    navigation.navigate('Nosotros', informacion); //Navega a la ruta Nosotros
  };
  return (
    <>
      <View style={styles.contenedor}>
        <Text>Inicio</Text>
        <Button title="Ir a nosotros" onPress={() => visitarNosotros()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Inicio;
