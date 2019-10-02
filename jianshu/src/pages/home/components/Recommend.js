import React, { PureComponent } from 'react';
import { RecommedWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommedWrapper>
                {
                    list.map((item) => {
                        return (
                            < RecommendItem key={item.get('id')} imgurl={item.get('imgUrl')} >
                            </RecommendItem>
                        )
                    })
                }
            </RecommedWrapper >
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['homeReducer', 'recommendList'])
});
export default connect(mapStateToProps, null)(Recommend);