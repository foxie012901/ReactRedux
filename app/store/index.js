import { createStore } from 'redux'  //引用redux 
import reducer from './reducer'    //导入reducer管理员
const store = createStore(reducer)  //把管理员传给仓库
export default store