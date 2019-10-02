import React, { PureComponent } from 'react';
import { ListItem, ListInfo,LoadMore} from '../style'
import { connect } from 'react-redux';
import {actionCreators} from '../store'
import {Link} from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list,getMoreList,articlePage} = this.props;
        return (
            <div>
                {
                    list.map((item,index) =>(
                        <Link key={index} to='/detail'>
                            <ListItem key={index}>
                                <img alt='' className="list-pic" src={item.get('imgUrl')}></img>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    )
                }
                <LoadMore onClick={()=>getMoreList(articlePage)}>
                    加载更多
                </LoadMore>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
        list: state.getIn(['homeReducer', 'articleList']),
        articlePage: state.getIn(['homeReducer', 'articlePage'])
});
const maoDispatch=(dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
})
export default connect(mapStateToProps, maoDispatch)(List);