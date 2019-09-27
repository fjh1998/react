import React from 'react';
import store from './store/index'
import {connect} from 'react-redux';
import {AddItem,ItemDelete,ChangeInputValue} from './store/actionCreators'

const TodoList=(props)=>{
    const {inputValue,handelDelete,handelclick,InputCahange}=props;
    return (
        <div>
            <div>
                <input onChange={InputCahange} value={inputValue} type="text" />
                <button onClick={handelclick}>提交 </button>
            </div>
            <ul>
               {
                  props.list.map((item,index)=>{
                       return <li onClick={()=>{handelDelete(index)}} key={index}>{item}</li>
                   })
               }
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
//store.dispatch,props
const mapDispatchToProps=(dispach)=>{
    return{
        InputCahange(e){
            const action=ChangeInputValue(e.target.value);
            dispach(action);
        },
        handelclick(){
           const action=AddItem();
           dispach(action);
        },
        handelDelete(index){
            const action=ItemDelete(index);
            dispach(action);
        }
    }
}
//connect做链接，store和TodoList连接，连接规则在mapStateToProps中
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);