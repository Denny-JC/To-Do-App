import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addTask } from './actions/task';

const TaskForm = ({ navigation }) => {

  const fillTheTask = () => {
    Alert.alert("WARNING !!!","Please Fill in the Task",[
      {
        text: "OK",
        onPress: () => { console.log("Alert Cancel Pressed") }
      }
    ],
    {
      cancelable: true
    })
  }

  const [task, setTask] = useState('')

  const dispatch = useDispatch();

  const submitTask = (task) => {
    if(task !== '') {
      dispatch(addTask(task))
      return true
    }
    fillTheTask()
    return false
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent:'center', flex:1,flexDirection: 'column',margin: 5,position:'absolute'}}>
      <Text style={styles.buttonText}>
        <Ionicons name="hourglass"
        color='white' 
        size={400}/>
   </Text>
  </View>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.title}>Enter the task</Text>
      <TextInput
        value={task}
        placeholder='Task'
        style={styles.taskInput}
        onChangeText={(task) => setTask(task)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          console.log(submitTask(task))
          setTask('')
        }}>
        <Text style={{ fontSize: 22, color: '#FF2400', fontWeight: "bold", borderWidth: 2,
    borderColor: 'lightsalmon', padding: 5, width: '80%', borderRadius: 10, backgroundColor: 'lightsalmon'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('TaskList')}>
        <Text style={{ fontSize: 22, color: '#FF2400', fontWeight: "bold", borderWidth: 2,
    borderColor: 'lightsalmon', padding: 5, width: '80%', borderRadius: 10, backgroundColor: 'lightsalmon' }}>Task Manager</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 16,
    color: '#FF2400'
  },
  taskInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 2,
    color:'#FF2400',
    borderColor: 'lightsalmon',
    padding: 5,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'lightsalmon'
  },
  image: {
    width: 100,
    height: 100,
    borderColor: 'lightsalmon',
    borderWidth: 5,
    borderRadius: 100,
  }
});

export default TaskForm;