import React from "react";
import { CalendarList } from "react-native-calendars";
import { StyleSheet } from "react-native";

export default function CalendarPicker({ targetCompletion, onDateSelect }) {
  return (
    <CalendarList
      current={targetCompletion}
      markedDates={{ [targetCompletion]: { selected: true } }}
      pastScrollRange={0}
      futureScrollRange={50}
      scrollEnabled={true}
      showScrollIndicator={false}
      horizontal={true}
      calendarWidth={250}
      calendarHeight={300}
      onDayPress={(day) => onDateSelect(day)}
      style={styles.calendar}
      theme={{
        calendarBackground: "transparent",
        textDayFontSize: 14,
        textMonthFontSize: 14,
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#00bcd4",
    width: 250,
    height: 300,
  },
});
