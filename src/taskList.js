import React from 'react';
import {
  StyleSheet,
  FlatList, View, Text
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from './actions/task';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TaskList = () => {

  const dispatch = useDispatch();

  const deleteCurrent = (key) => dispatch(deleteTask(key))

  const tasks = useSelector(state => state.taskReducer.taskList)

  return (
    <FlatList style={styles.listContainer}
      data={tasks} 
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={<Icon
              name='delete'
              size={36}
              onPress={() => deleteCurrent(data.item.key)} />
              
            }
          />
      }
    />
    
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});

export default TaskList;