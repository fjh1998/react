import React, { Component } from 'react';
import {TopicWrapper,TopicItem} from '../style';
import img1 from '../../../statics/img/teacher.png'

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img className='topic-pic' src={img1}></img>
                    教育新闻
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic;