import React,{PureComponent} from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
    render() {
        const {list}=this.props;
        return (
            <TopicWrapper>

                { 
                    list.map((item)=>(
                            <TopicItem key={item.get('id')}>
                                <img alt='' className='topic-pic' src={item.get('imgUrl')}></img>
                                {item.get('title')}
                            </TopicItem>
                        ))
                }
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return{
    list: state.getIn(['homeReducer', 'topicList'])
    }
};
export default connect(mapStateToProps, null)(Topic);