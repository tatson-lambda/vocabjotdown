import React from 'react';
import {  StyleSheet, SafeAreaView, Text, StatusBar, View, ScrollView } from 'react-native';
import { Card, ListItem, Avatar} from 'react-native-elements'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
  }
})

export default class App extends React.Component {
    render() {

      const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
      ];

      const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

      const windowWidth = Dimensions.get('window').width;
      const windowHeight = Dimensions.get('window').height;

      return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={{margin: 10, fontSize: 40}}> Hi Tom</Text>
          
          <Card >
            <Card.Title style={{textAlign: "left"}}> Progress </Card.Title>
            <View>
              <ListItem key={1} >
                <ListItem.Content>
                  <ListItem.Title>English current level: C2</ListItem.Title>
                </ListItem.Content>

              </ListItem>
              <ListItem key={2} >
                <ListItem.Content>
                  <ListItem.Title>100 word(s) in vocabulary list</ListItem.Title>
                </ListItem.Content>

              </ListItem>
              <ListItem key={3} >
                <ListItem.Content>
                  <ListItem.Title>10 article(s)</ListItem.Title>
                </ListItem.Content>

              </ListItem>
            </View>
          </Card>
          <Card >
            <Card.Title> Activity </Card.Title>
            <Text>Add 30 words, Learnt 20 words last week</Text>
            <ContributionGraph
              values={commitsData}
              endDate={new Date("2017-04-01")}
              numDays={105}
              width={windowWidth * 0.85}
              height={180}
              chartConfig={chartConfig}
              squareSize={15}
            />
          </Card>
          <Card >
            <Card.Title>Switch language</Card.Title>
            <View style={{flexDirection:"row"}}>
              <View style={{height: 30, flex: 0.5, backgroundColor: 'powderblue', flexDirection:"row"}} >
                <Avatar rounded title="A" style={{flex: 0.3}}　 />
                <Text style={{textAlignVertical: "center",flex: 0.7}}>English</Text>
              </View>
              <View style={{height: 30, flex: 0.5, backgroundColor: 'skyblue', flexDirection:"row"}} >
                <Avatar rounded title="あ"　style={{flex: 0.3}}　 />
                <Text style={{textAlignVertical: "center", flex: 0.7}} >Japanese</Text>
              </View>
            </View>
          </Card>
        </ScrollView> 
        

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}