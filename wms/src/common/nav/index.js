import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { actinCreators } from './store';
import {Link} from 'react-router-dom';
import './style.css';

const { Sider } = Layout;
const { SubMenu } = Menu;
class Nav extends PureComponent {
	getNavList(){
		const {navlist}=this.props;
		const nav_list=[];
		navlist.map((item)=>{
			if(item.children){
				nav_list.push(
				  <SubMenu
				  key={item.key}
				  title={
					<span>
					  <Icon type={item.icontype} />
					  <span>{item.title}</span>
					</span>
				  }
				>
				  {
					  item.children.map((itemc)=>{
						  return <Menu.Item key={itemc.key}><Link to={itemc.linkto}>{itemc.title}</Link></Menu.Item>
					  })
				  }
				</SubMenu>
				)
			}else{
				nav_list.push(
				  <Menu.Item key={item.key}>
					  <Link to={item.linkto}></Link>
				  <Icon type={item.icontype} />
				  <span>{item.title}</span>
				</Menu.Item>
				)
			}
		})
		return nav_list;
	}
	componentWillMount(){
		this.props.getNavList();
	};
    render() {
		const {collapsed,toggleCollapsed}=this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
              {/*collapsed控制收缩，onCollapse控制点击事件 */}
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
          <Link to="/">
		  <div className="logo" />
		  </Link>
          <Menu theme="dark"  mode="inline">
			  {
				  this.getNavList()
			  }
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

      </Layout>
        );
    }
};

const mapState = (state) => ({
	collapsed: state.getIn(['navReducer', 'collapsed']),
	navlist: state.getIn(['navReducer', 'navlist']),
});
const mapDispatcher = (dispatch) => ({
    toggleCollapsed() {
        dispatch(actinCreators.chagenav());
	},
	getNavList(){
		dispatch(actinCreators.getNavList());
	}
});
export default connect(mapState, mapDispatcher)(Nav);