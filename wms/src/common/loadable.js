import React from 'react';
import Loadabel from 'react-loadable';
const loadingComponent=()=>{
    return(
        <div>
            loading
        </div>
    )
};
export default (loader,loading=loadingComponent)=>{
    return Loadabel({
        loader,
        loading
    })
};