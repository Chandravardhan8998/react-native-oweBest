import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../assets/Colors';
import {
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryTheme,
  VictoryScatter,
  Circle,
} from 'victory-native';
import {RFV} from '../Constants';
const TheGraph = () => {
  const data = {
    Science: [
      {x: 'Jan', y: 55},
      {x: 'Fab', y: 65},
      {x: 'Mar', y: 45},
      {x: 'Apr', y: 75},
      {x: 'May', y: 70},
      {x: 'Jun', y: 85},
      {x: 'Jul', y: 90},
    ],
    Maths: [
      {x: 'Jan', y: 40},
      {x: 'Fab', y: 45},
      {x: 'Mar', y: 60},
      {x: 'Apr', y: 55},
      {x: 'May', y: 85},
      {x: 'Jun', y: 85},
      {x: 'Jul', y: 75},
    ],
    English: [
      {x: 'Jan', y: 55},
      {x: 'Fab', y: 75},
      {x: 'Mar', y: 90},
      {x: 'Apr', y: 70},
      {x: 'May', y: 65},
      {x: 'Jun', y: 85},
      {x: 'Jul', y: 65},
    ],
  };
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={{fontFamily: 'Poppins-Regular', color: Colors.darkBlue}}>
          Progress Chart
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <VictoryChart
          startAngle={0}
          endAngle={100}
          height={220}
          width={Dimensions.get('screen').width}>
          <VictoryGroup offset={1}>
            <VictoryLine
              data={data.English}
              style={{
                data: {
                  stroke: Colors.purple,
                },
              }}
            />
            {/* <VictoryScatter size={6} symbol="circle" /> */}
            <VictoryLine
              theme={VictoryTheme.material}
              data={data.Maths}
              style={{
                data: {
                  stroke: Colors.teal,
                },
              }}
            />
            {/* <VictoryScatter size={6} symbol="circle" /> */}
            <VictoryLine
              data={data.Science}
              style={{
                data: {
                  stroke: Colors.orange,
                },
              }}
            />
            {/* <VictoryScatter size={6} symbol="circle" /> */}
          </VictoryGroup>
        </VictoryChart>
      </View>
    </View>
  );
};

export default TheGraph;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    borderRadius: RFV(8),
    padding: RFV(15),
    width: Dimensions.get('screen').width - 20,
    height: RFV(240),
    marginTop: RFV(5),
    // flex: 1,
    justifyContent: 'space-between',
  },
});
