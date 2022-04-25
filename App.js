import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Easing } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    justifyContent: 'center'
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 100,
    backgroundColor: 'red'
  },
  button: {
    height: 50, 
    width: 150,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 25,
    marginBottom: 10 
  }
})



const Button = ({ color, onPress, easing}) => {
  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={[styles.button, {backgroundColor: color} ]}
    >
      <Text style={{ color: 'white' }}>{easing}</Text>
    </TouchableOpacity>
  )
}

const App = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  

  const timingAnimation = (easing) => {
    animatedValue.setValue(0); //retornar a 0
    Animated.timing(animatedValue, {
      toValue: 250,
      duration: 600,
      useNativeDriver: true,
      easing
    }).start()
  }

  const animatedStyleTiming = {
    transform: [{ translateX: animatedValue}],
  }
  
  return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.circle,
            animatedStyleTiming,
          ]}
        />
        
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Button easing='Bounce' onPress={() => timingAnimation(Easing.bounce)} color="red"/>
   		<Button easing='Cubic' onPress={() => timingAnimation(Easing.cubic)} color="blue"/>
        <Button easing='Back' onPress={() => timingAnimation(Easing.back(2))} color="yellow"/>
        <Button easing='Elastic' onPress={() => timingAnimation(Easing.elastic(2))} color="green"/>
      	<Button easing='Ease' onPress={() => timingAnimation(Easing.ease)} color="pink"/>
        <Button easing='InOut' onPress={() => timingAnimation(Easing.inOut(Easing.quad))} color="magenta"/> 
        <Button easing='In' onPress={() => timingAnimation(Easing.in(Easing.quad))} color="violet"/> 
        <Button easing='Out' onPress={() => timingAnimation(Easing.out(Easing.quad))} color="lightblue"/> 
        <Button easing='Sin' onPress={() => timingAnimation(Easing.sin)} color="lightgreen"/>
        <Button easing='Linear' onPress={() => timingAnimation(Easing.linear)} color="gray"/>
        <Button easing='Quad' onPress={() => timingAnimation(Easing.quad)} color="purple"/>
  </View>
      </View>
    )
  }



export default App
