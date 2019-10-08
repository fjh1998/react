import {actinoTypes} from './index';
import axios from 'axios';

const navlist=(list)=>({
    type:actinoTypes.NAV_LIST,
    list
})
export const chagenav=()=>({
    type:actinoTypes.CHANGE_NAV
});
export const focuse=()=>({
    type:actinoTypes.MOUSE_IN
});
export const blur=()=>({
    type:actinoTypes.MOUSE_OUT
});
