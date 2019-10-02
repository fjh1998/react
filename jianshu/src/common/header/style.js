import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
    height:58px;
    border-bottom:1px solid #f0f0f0;
    z-index:1;
`;
export const Logo = styled.div`
    margin-left:20px;
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:58px;
    background:url(${logo});
    background-size:contain;
`
export const Nav = styled.div `
    width:960px;
    height:100%;
    box-sizing:border-box;
    margin:0 auto;
`
export const NavItem = styled.div `
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.active{
        color:#ea6f5a;
    }
    &.left{
        float:left;
    }
    &.right{
        color:#969696;
        float:right;
    }
    &.logout{
        cursor:pointer;
    }
`
export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
    width:160px;
    height:38px;
    padding:0 35px 0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    background:#eee;
    font-size:14px;
    margin-left:20px;
    color:#666;
    &.slide-enter{
        width:160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
`
export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button=styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:19px;
    font-size:14px;
    border:1px solid #ec6149;
    margin-right:30px;
    padding:0 20px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#f0f0f0;
        background:#ec6149;
    }
`
export const SeachWrapper=styled.div`
    position:relative;
    float:left;
    z-index:1;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:white;
        }
    }
`
export const SeacherInfo=styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding: 0 20px;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
    background:white;
`
export const SeacherInfoTitle=styled.div`
    margin-top:20px;
    margin-left:15px;
    font-size:14px;
    line-height:20px;
    color:#969696;
    padding-bottom:6px;
`
export const SeacherInfoSwith=styled.span`
    float:right;
    font-size:13px;
    cursor: pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform:rotate(0deg);
        transform-origin:center center;
    }
`

export const SeacherInfoItem=styled.a`
    line-height:15px;
    border:1px solid #999;
    padding:0 5px;
    display:block;
    float:left;
    border-radius:3px;
    font-size:12px;
    margin-right:10px;
    margin-bottom:10px;
    color:#787878;
    cursor:pointer;
`;
export const SeacherInfoList=styled.span`
    overflow:hidden;
`




// export const Link = ({ className, children }) => (
//     <a className={className}>
//       {children}
//     </a>
//   );
//  export const StyledLink = styled(Link)`
//     color: palevioletred;
//     font-weight: bold;
//   `;

//  export const Propinput = styled.input`
//     color: ${props=>props.inputColor||'palevioletred'
//     };
//   `;
//   export const Buttona = styled.button`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `;

// export const TomatoButton = styled(Buttona)`
//   color: tomato;
//   border-color: tomato;
// `;