import React , { Component } from 'react';
import {WriterWrapper,WriterItem,WriterInfoSwith,WriterTitle} from '../style';
import {connect} from 'react-redux';

class Writer extends Component{
    render (){
        return(
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterInfoSwith>
                    <i className='iconfont spin'>&#xe606;</i>
                    换一批
                    </WriterInfoSwith>
                </WriterTitle>
                <WriterItem>
                    西门吹雪
                </WriterItem>
            </WriterWrapper>
        )
    }
}


export default Writer;