import { fromJS } from 'immutable';
import * as actiontypes from './actionTypes';

const defaultState = fromJS({
    title: '有哪些你喜欢的文艺句子？',
    content: '<img src="//upload-images.jianshu.io/upload_images/11072822-c5755d7db8a23f27?imageMogr2/auto-orient/strip|imageView2/2/w/658/format/webp"></img><p>我第一次见到导师时，他给了我一个写mini proposal的机会，让我感动的是，他不仅不断的为我考虑mini proposal的选题，还不断的透露他的想法，帮助我找到proposal的方向。当他问我有没有准备proposal（当时可能听差了，以为老师想问我是否现在有准备好proposal给他看）我说没有，然后他以为我从未写过proposal，所以他直接站起来走到白板前，一边给我解释proposal框架应该包含什么内容，每个内容的要点，并一边写下了这几个单词。</p><p>可是写proposal和看文献有什么关系啊？？我想，写故事和看故事的思路是一样的，写的人要写的清楚，那么看的人也要尽量把作者的意图给看出来。首先把框架列出来，然后文献搬出来，按照框架去看文献，不仅可以对整个故事有大概的把握，而且可以治过目即忘的看文献不良反应。</p>'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actiontypes.GET_DETAIL:
            return getDetail(state, action);
        default:
            return state;
    }
};

const getDetail = (state, action) =>
    (state.merge({
        title: action.title,
        content: action.content
    }))
    ;