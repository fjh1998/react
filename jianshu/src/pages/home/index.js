import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import home_page from '../../statics/img/home_img.jpg';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Home extends PureComponent {
 
    handelScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className="banner-img" src={home_page}></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handelScrollTop}>Top</BackTop> : null
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changScrollshow);
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changScrollshow);
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changScrollshow() {
        if(document.documentElement.scrollTop>280)
        {dispatch(actionCreators.toggleTopShoe(true));}
        else{
            dispatch(actionCreators.toggleTopShoe(false));
        }
    }
});
const mapStateToProps = (state) => ({
    showScroll: state.getIn(['homeReducer', 'showScroll'])
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);