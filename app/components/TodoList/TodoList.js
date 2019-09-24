import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
    YellowBox,
    ActivityIndicator
} from 'react-native';

import TodoListUI from "./TodoListUI";


// import store from "../../store";
import {connect} from 'react-redux'


class TodoList extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: Each child in a list should have a unique'
        ])
        // let {
        //     inputValue,
        //     list
        // } = store.getState()
        this.state = {
            // inputValue,
            // list,
            isShow: true
        };
        // store.subscribe(this._handleStoreChange)
    }
    componentDidMount() {
        this.setState({
            isShow: false
        })
    }
    render() {
        let Loading = (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator animating={this.state.isShow} /></View>
        )
        let PageW = (
            <TodoListUI
                inputValue={this.props.inputValue}
                list={this.props.list}
                _handleInputChange={this.props._handleInputChange}
            // _onChangeData={this._onChangeData}
            // _openId={this._openId}
            />
        )
        return (
            <View style={{ width: '100%', height: '100%' }}>
                {
                    this.state.isShow ? Loading : PageW
                }
            </View >
        )
    }
}

const mapStateToProps = (state) => {
    //这个函数会默认接受一个state,就是store里面的数据,他会return 一个对象出去
    return {
        inputValue:state.inputValue ,
        list:state.list
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        _handleInputChange(value){
            // console.warn(e)
            const action = {
                type:'change_input_value',
                value
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
//我要让我们的组件跟store做一个连接,那么久需要一个规则,规则就在mapStateToProps这个函数里面
// mapStateToProps字面翻译就是把store里面的数据映射到组件的props里面
//我们要修改store里的数据 可以通过mapDispatchToProps 来实现
//mapDispatchToProps ,dispatch 值得就是store.dispatch, props
//在mapDispatchToProps里返回对象,对象里创建action,然后通过dispatch发送给store进行处理