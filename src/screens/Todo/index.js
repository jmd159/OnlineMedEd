import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import TodoItem from "../../components/TodoItem";
import { TodoList, Screen } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import AddTodo from "../../components/AddTodo";
import Modal from "react-native-modal";
import TodoForm from "../../components/TodoForm";
import UpdateTodo from "../../components/UpdateTodo";
import moment from "moment";

const date = moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a");
const iOSshadows = {
  shadowColor: "#024e56",
  shadowOffset: { width: 5, height: -4 },
  shadowOpacity: 0.4,
  shadowRadius: 5,
  elevation: 1,
};

const shadowsAndroid = {
  elevation: 6,
};
const isAndroid = Platform.OS === "android";
const shadows = isAndroid ? shadowsAndroid : iOSshadows;

export default function TodoScreen() {
  const [todos, setTodos] = useState(TodoList);
  const [showNewTodo, setNewTodo] = useState(false);
  const [showUpdateTodo, setUpdateTodo] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const onLongPress = (item, index) => {
    const updateArray = [...todos];
    updateArray[index] = {
      ...item,
      actualCompletion: date,
      completed: !item.completed,
    };
    setTodos(updateArray);
  };

  useEffect(() => {}, [todos]);
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer]}>
            <TodoItem
              shadows={shadows}
              item={item}
              index={index}
              onLongPress={() => {
                onLongPress(item, index);
              }}
              onPress={() => {
                setEditItem({ item: item, index: index });
                setUpdateTodo(!showUpdateTodo);
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ marginTop: 20, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        extraData={todos}
      />
      <AddTodo onPress={() => setNewTodo(!showNewTodo)} />
      <UpdateTodo
        todos={todos}
        setTodos={setTodos}
        isVisible={showUpdateTodo}
        setVisible={setUpdateTodo}
        item={editItem}
      />
      <AddTodoModal
        isVisible={showNewTodo}
        setVisible={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </View>
  );
}

function AddTodoModal({ isVisible, setVisible, todos, setTodos }) {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      useNativeDriver={true}
      onBackdropPress={() => setVisible(false)}
    >
      <TodoForm todos={todos} setTodos={setTodos} setVisible={setVisible} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  itemContainer: {
    margin: 5,
    flexDirection: "column",
    width: Screen.width / 2.2,
    alignContent: "space-between",
    height: Screen.width / 2.2,
    borderRadius: 8,
  },
  modal: {
    flex: 1,
    marginHorizontal: Platform.OS === "android" ? 5 : 16,
    justifyContent: "center",
  },
});
