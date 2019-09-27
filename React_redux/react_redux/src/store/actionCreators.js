import {ADD_ITEM,ITEM_DELETE,CHANGE_INPUT_VALUE} from './actionTypes'   

export const AddItem=()=>({
    type:ADD_ITEM
});
export const ItemDelete=(index)=>({
    type:ITEM_DELETE,
    index
});
export const ChangeInputValue=(value)=>({
    type :CHANGE_INPUT_VALUE,
    value
});
