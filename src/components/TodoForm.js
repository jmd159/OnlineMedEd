/*
 *  TodoForm
 */

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CalendarPicker from "./CalendarPicker";
import { Colors } from "../constants";
import Button from "./Button";

const initialInputState = {
  id: null,
  name: "",
  actualCompletion: "",
  targetCompletion: "",
  completed: false,
  color: "#419fa8",
};

const addTodo = (list, newData, setTodos, setVisible) => {
  const newList = [...list];
  newList.unshift({ ...newData });
  setTodos(newList);
  setVisible(false);
};

const updateTodo = (list, newData, setTodos, setVisible, index) => {
  const newList = [...list];
  newList[index] = {
    ...newData,
  };
  setTodos(newList);
  setVisible(false);
};

const deleteTodo = (list, newData, setTodos, setVisible, index) => {
  const newList = [...list];
  newList.splice(index, 1);
  setTodos(newList);
  setVisible(false);
};

const setCount = (todos) => {
  return todos.length;
};

export default function TodoForm({
  todos,
  setTodos,
  setVisible,
  isVisible,
  editState,
  index,
}) {
  let count = setCount(todos);
  const [eachEntry, setEachEntry] = useState(
    editState ? editState : initialInputState
  );
  const { name, targetCompletion, actualCompletion, completed } = eachEntry;
  const onChangeText = (text, name) => {
    setEachEntry({ ...eachEntry, [name]: text, id: count + 1 });
  };
  const onDateSelect = (day) => {
    setEachEntry({ ...eachEntry, targetCompletion: day.dateString });
  };
  const onColorChange = (color) => {
    setEachEntry({ ...eachEntry, color: color });
  };
  return (
    <View style={styles.formContainer}>
      <Text>
        <Text style={styles.titleText}>TASK: </Text>
        {completed && (
          <Text
            style={styles.completedText}
          >{`Completed on: ${actualCompletion}`}</Text>
        )}
      </Text>
      <TextInput
        name="name"
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text, "name")}
        value={name}
      />
      <Text style={styles.titleText}>COMPLETE BY: </Text>
      <View style={styles.rowContainer}>
        <CalendarPicker
          onDateSelect={onDateSelect}
          targetCompletion={targetCompletion}
        />
        <ColorPicker colors={Colors} onColorChange={onColorChange} />
      </View>
      {editState ? (
        <EditButtons
          onUpdatePress={() =>
            updateTodo(todos, eachEntry, setTodos, setVisible, index)
          }
          onDeletePress={() =>
            deleteTodo(todos, eachEntry, setTodos, setVisible, index)
          }
        />
      ) : (
        <View style={styles.saveButtonContainer}>
          <Button
            onPress={() => addTodo(todos, eachEntry, setTodos, setVisible)}
            title="SAVE"
            containerStyle={[styles.buttons, { minWidth: 150 }]}
            textStyle={styles.buttonText}
          />
        </View>
      )}
    </View>
  );
}

function EditButtons({ onUpdatePress, onDeletePress }) {
  return (
    <View style={styles.editButtonContainer}>
      <Button
        onPress={onDeletePress}
        title="DELETE"
        containerStyle={styles.buttons}
        textStyle={styles.buttonText}
      />

      <Button
        onPress={onUpdatePress}
        title="UPDATE"
        containerStyle={styles.buttons}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

function ColorPicker({ colors, onPress, onColorChange }) {
  const [colorPicker, setColor] = useState("#dbdbdb");
  return (
    <View
      style={[styles.colorPickerContainer, { backgroundColor: colorPicker }]}
    >
      {colors.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setColor(item.color);
            onColorChange(item.color);
          }}
        >
          <View
            style={[
              styles.swatches,
              {
                backgroundColor: item.color,
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexShrink: 0,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  titleText: {
    color: "#0e6872",
    fontSize: 20,
    fontWeight: "700",
  },
  textInput: {
    height: 35,
    width: 250,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#00bcd4",
    marginVertical: 15,
    paddingLeft: 10,
  },
  rowContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButtonContainer: {
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttons: {
    maxWidth: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00bcd4",
    flex: 1,
    borderRadius: 8,
    minHeight: 35,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  completedText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#00bcd4",
    marginBottom: 5,
  },
  editButtonContainer: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorPickerContainer: {
    width: 80,
    height: 300,
    flexWrap: "wrap",
    padding: 5,
    borderColor: "#00bcd4",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "space-around",
    alignContent: "center",
  },
  swatches: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "white",
    padding: 2,
  },
});
