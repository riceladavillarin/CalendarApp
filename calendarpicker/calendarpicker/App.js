import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate
      ? selectedStartDate.toLocaleDateString("en-US")
      : "No date selected";

    return (
      <View style={styles.container}>
        <Text style={styles.title}>CHOOSE A DATE</Text>
        <CalendarPicker
          onDateChange={this.onDateChange}
          selectedDayColor="#6c5ce7"
          selectedDayTextColor="#FFFFFF"
          todayBackgroundColor="#9400D3"
          width={350} 
          textStyle={styles.calendarText}
        />

        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>SELECTED DATE:</Text>
          <Text style={styles.dateText}>{startDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFDECD", 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", 
    marginBottom: 20,
  },
  calendarText: {
    fontSize: 16,
    color: "#2d3436",
  },
  dateContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#dfe6e9",
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  dateLabel: {
    fontSize: 18,
    color: "#636e72",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d3436",
  },
});
