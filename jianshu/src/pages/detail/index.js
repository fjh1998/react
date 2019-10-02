import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom';

class Detail extends PureComponent {

    render() {
        const { title, content, getDetail } = this.props;
        return (
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detailReducer', 'title']),
    content: state.getIn(['detailReducer', 'content'])
});

const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapStateToProps, mapDispatch)(withRouter(Detail));
