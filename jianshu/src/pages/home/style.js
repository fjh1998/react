import styled from 'styled-components';

export const HomeWrapper=styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;
export const HomeLeft=styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight=styled.div`
    width:280px;
    float:right;
`;

// Topic
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0px;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc; 
`
export const TopicItem=styled.div`
    float:left;
    height:32px;
    margin-left:18px;
    margin-bottom:18px;
    line-height:32px;
    font-size:14px;
    padding-right:10px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    background:#f7f7f7;
    .topic-pic{
        margin-right:10px;
        display:block;
        float:left;
        width:32px;
        height:32px;
    }
`;
export const ListItem=styled.div`
    padding:20px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    .list-pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`
export const ListInfo=styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        color:#999;
        line-height:24px;
    }
`

export const RecommedWrapper=styled.div`
    width:280px;
    margin:30px 0;
`;
export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background: url(${(props)=>props.imgurl});
    background-size:contain;
`;
export const WriterWrapper=styled.div`
    width:278px;
    margin:30px 0;
    /* border:1px solid #ccc; */
    height:400px;
    overflow:hidden;
`;
export const WriterTitle=styled.div`
    margin-top:5px;
    margin-left:5px;
    font-size:14px;
    line-height:20px;
    color:#969696;
    padding-bottom:6px;
    overflow:hidden;
`
export const WriterInfoSwith=styled.span`
    float:right;
    font-size:13px;
    cursor: pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transform: all .2s ease-in;
        transform:rotate(0deg);
        transform-origin:center center;
    }
`
export const WriterItem=styled.div`
    display:block;
    width:280px;
    height:48px;
    font-size:14px;
    margin-top:10px;
    .writer-img{
        float:left;
        width:48px;
        height:48px;
        border-radius:50%;
        margin-right:10px;
    }
    .writer-name{
        font-size:14px;
        color:#2f2f2f;
        padding-top:5px;
        display:block;
        margin-right:60px;
    }
    .writer-introduction{
        font-size:12px;
        color:#969696;
        margin-top:2px;
    }
`;
export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    cursor:pointer;
    border-radius:20px;
    background:#a5a5a5;
    text-align:center;
    margin:30px 0;
    color:#969696;
`
export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border: 1px solid #ccc;
    cursor:pointer;
`