import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View>
          <TextInput />
          <TouchableOpacity
          // onPress={_onChangeData}
          >
            <View style={styles.btnSty}><Text style={styles.btnTxtSty}>Click Me</Text></View>
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          // data={list}
          data={[1, 2, 3]}
          renderItem={this._renderItem}
          style={{ width: "100%" }}
        />
      </View>
    )
  }

  _renderItem = ({ item, index }) => {
    // console.warn(index)
    return (
        <View style={styles.row}>
            <Text >{item}</Text>
            <TouchableOpacity
                // onPress={() => this.props._openId(index)}
                style={styles.rowTouch}
            >
                <Text style={styles.rowTouchTxt}>delete</Text>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({

})