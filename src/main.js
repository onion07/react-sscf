
import React from 'react'; 
import {render} from 'react-dom'; 
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

import $ from 'expose?$!jquery';
import './js/slick.min';
import FastClick from './js/fastclick';
import './js/dialog';

import './css/main.less';


// 子页面组件
import IndexComponent from './pages/index';
import NotfindComponent from './pages/notfind';
import ConsultantComponent from './pages/consultant';
import UserComponent from './pages/user';
import OrdersComponent from './pages/orders';
import ExperienceComponent from './pages/experience';
import ProductComponent from './pages/product';
import BindphoneComponent from './pages/bind_phone';
import PayComponent from './pages/pay';




class WrapCommponent extends React.Component {

	componentDidMount() {
		
		console.info('FastClick DidMount ..(main.js)')
		FastClick.attach(document.body);


	}


	render () {
		return (
			<div>
				<div className="contenter">
					{this.props.children}
				</div>
				<footer id="footer" className="footer">
					<nav>
						<Link to="index" activeClassName="cur"><span className="iconfont icon-shouye-1 ticon"></span>首页</Link>
						<Link to="consultant" activeClassName="cur"><span className="iconfont icon-zaixianzixun-3 ticon"></span>在线咨询</Link>
						<Link to="user_center" activeClassName="cur"><span className="iconfont icon-gerenzhongxin- ticon"></span>个人中心</Link>
					</nav>
			 	</footer>
			</div>
		)
	}
}
// render(<WrapCommponent/>,document.querySelector('#app'));

render((
    <Router history={hashHistory} >
        <Route path="/" component={WrapCommponent}>
        	<IndexRoute component={IndexComponent}/>
            <Route path="index" component={IndexComponent} />
            <Route path="consultant" component={ConsultantComponent} />
            <Route path="user_center" component={UserComponent} />

            <Route path="orders" component={OrdersComponent} />
            <Route path="experience" component={ExperienceComponent} />
            <Route path="product" component={ProductComponent} />
            <Route path="bindPhone" component={BindphoneComponent} />
            <Route path="pay" component={PayComponent} />

        </Route>
    </Router>
), document.getElementById('app'));

