import React, { PureComponent } from 'react';
import { WriterWrapper, WriterItem, WriterInfoSwith, WriterTitle } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
    render() {
        const { writerList } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterInfoSwith>
                        <i className='iconfont spin'>&#xe606;</i>
                        换一批
                    </WriterInfoSwith>
                </WriterTitle>
                {
                    writerList.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <img alt='' className="writer-img" src={item.get('writerimg')}></img>
                                <span className="writer-name">{item.get('name')}</span>
                                <p className="writer-introduction">{item.get('introduction')}</p>
                            </WriterItem>
                        )
                    })
                }
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    writerList: state.getIn(['homeReducer', 'writerList'])
});
const mapDispathToProps=(dispatcher)=>{
    return{

    }
}
export default connect(mapStateToProps, mapDispathToProps)(Writer);