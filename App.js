/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
      <View style={styles.contenedor2}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
      <View style={styles.contenedor3}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View>
        <View style={styles.caja3}></View>
        <View style={styles.caja4}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor : {
    backgroundColor : "cornflowerblue",
    flex : 1,
    flexDirection : "column",
    //justifyContent : "space-between",
    alignItems : "center"
  },
  contenedor2 : {
    backgroundColor : "cornflowerblue",
    flex : 1,
    flexDirection : "row",
    //justifyContent : "space-between",
    alignItems : "center"
  },
  contenedor3 : {
    backgroundColor : "cornflowerblue",
    flex : 1,
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center"
  },
  caja1: {
    padding : 20,
    backgroundColor : "navy",
  
  },
  caja2: {
    padding : 20,
    backgroundColor : "yellow",
    
  },
  caja3: {
    padding : 20,
    backgroundColor : "green",

  },
  caja4: {
    padding : 20,
    backgroundColor : "red",
  }
});

