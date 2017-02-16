import React from 'react';
import {render} from 'react-dom'; 
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

import OrdersComponent from './orders';



export default class userComponent extends React.Component {

	componentDidMount () {

		console.log('user..')

	}

	render () {

		return (
				<div className="wrapper user-wrapper">
					<header className="user-header">
						<div className="inner">
							<div className="in">
								<a href="#"><img src="src/assets/img/user_center.png"/></a>
							</div>
							<div className="in">
								<i>用户ID</i>
								<span>138****123</span>
							</div>
							<div className="flow-r"><Link to="bindPhone">已经绑定手机</Link></div>
						</div>
					</header>
					<main className="user-main">
						<div className="inner-wrap">
							<div className="inner-head bg-style">
								<a href="javascript:void(0);" className="cur"><span><i className="work_cont wk1"></i></span>我的订阅</a>
								<Link to="orders" className=""><span><i className="work_cont wk2"></i></span>我的订单</Link>
								<Link to="consultant" className=""><span><i className="work_cont wk3"></i></span>在线咨询</Link>
							</div>
							<div className="inner-content bg-style">
								
								<div className="content-wrap t1">
									<div className="list-title">
										<span className="t-cont">现时订阅</span>
									</div>
									<ul>
										<li>
											<a href="javascript:void(0);" className="list-href">
												<i>龙湖英雄</i>
												<em>剩余365天</em>
												<time>2017-12-20</time>
											</a>
										</li>
										<li>
											<a href="javascript:void(0);" className="list-href">
												<i>龙湖英雄</i>
												<em>剩余365天</em>
												<time>2017-12-20</time>
											</a>
										</li>
									</ul>
								</div>
								<div className="content-wrap t2">
									<div className="list-title">
										<span className="t-cont">往期订阅</span>
									</div>
									<ul>
										<li>
											<a href="javascript:void(0);" className="list-href">
												<i>百事先击</i>
												<em>已过期</em>
												<time>2017-12-20</time>
											</a>
										</li>
									</ul>
								</div>

							</div>
							<div className="inner-bottom bg-style protocol">
								<div className="list-title">
									<a href="javascript:void(0);">
										<span className="t-cont">注册协议书-</span>
									</a>
								</div>
							</div>
						</div>
						<div className="img-wrap">
							<div>
								<img src="src/assets/img/ng_start.png" alt="盛世创富"/>
							</div>
							<p>监督电话：400-091-9988</p>
						</div>
					</main>
				</div>
		)
	}
}


