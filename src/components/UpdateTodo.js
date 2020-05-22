import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";
import TodoForm from "./TodoForm";

export default function UpdateTodo({
  item,
  todos,
  isVisible,
  setTodos,
  setVisible,
}) {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackdropPress={() => setVisible(false)}
      useNativeDriver={true}
      avoidKeyboard={false}
    >
      {item ? (
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          setVisible={setVisible}
          editState={item.item}
          index={item.index}
        />
      ) : (
        <View />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    marginHorizontal: Platform.OS === "android" ? 5 : 16,
    justifyContent: "center",
  },
});
