import { fromJS } from 'immutable';
import img1 from '../../../statics/img/teacher.png';
import img2 from '../../../statics/img/student.png';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: img1
    }, {
        id: 2,
        title: '最新科技',
        imgUrl: img2
    }],
    articleList: [
        {
            id: 1,
            title: '今日最佳',
            desc: '想做一个精致的女孩，一直在往这个方向努力，比如定期扔东西，比如买衣服鞋子饰品只是因为喜欢而不是因为价格 衣服鞋子可以不是新款但是一定要整洁 衣服.',
            imgUrl: '//upload-images.jianshu.io/upload_images/644910-288da7c6572d91fc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '今日最佳',
            desc: '想做一个精致的女孩，一直在往这个方向努力，比如定期扔东西，比如买衣服鞋子饰品只是因为喜欢而不是因为价格 衣服鞋子可以不是新款但是一定要整洁 衣服.',
            imgUrl: '//upload-images.jianshu.io/upload_images/644910-288da7c6572d91fc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '今日最佳',
            desc: '想做一个精致的女孩，一直在往这个方向努力，比如定期扔东西，比如买衣服鞋子饰品只是因为喜欢而不是因为价格 衣服鞋子可以不是新款但是一定要整洁 衣服.',
            imgUrl: '//upload-images.jianshu.io/upload_images/644910-288da7c6572d91fc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    recommendList:[
        {
            id: 1,
            imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        }, {
            id: 2,
            imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        }
    ]
});
export default (state = defaultState, action) => {
    return state;
};