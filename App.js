import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import TabNavigator from "react-native-tab-navigator"

import IconFont from 'react-native-vector-icons/Ionicons'

import TodoList from './app/components/TodoList/TodoList'
import Other from './app/components/Other/Other'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'todolist'
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <TabNavigator>
          {/* 
          <TabNavigator.Item
            selected={this.state.selectedTab === 'todolist'}
            title='todolist'
            renderIcon={() => <IconFont name={'ios-globe'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'ios-globe'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'todolist' })}
          >
            <Todolist />
          </TabNavigator.Item> */}






          <TabNavigator.Item
            selected={this.state.selectedTab === 'todolist'}
            title='todolist'
            renderIcon={() => <IconFont name={'ios-football'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'ios-football'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'todolist' })}
          >
            <TodoList />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'other'}
            title='other'
            renderIcon={() => <IconFont name={'ios-settings'} size={25} color={'gray'} />} // 未选中状态下，展示的图标
            renderSelectedIcon={() => <IconFont name={'ios-settings'} size={25} color={'#0079ff'} />} // 选中状态下展示的图标
            onPress={() => this.setState({ selectedTab: 'other' })}
          >
            <Other />
          </TabNavigator.Item>



        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});