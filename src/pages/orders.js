import React from 'react';
import IScroll from '../js/iscroll';



export default class notfindComponent extends React.Component {


	componentDidMount () {

		// 我的订单
		if ( $('.order-main').length ) {
			new IScroll('.order-main',{ mouseWheel: true });
		}
	}

	render () {

		return (
				<div className="wrapper order-wrapper">
					<header className="order-header">
						<div className="navs">
							<a href="#" className="cur">进行中</a>
						</div>
						<div className="navs">
							<a href="#">已经过期</a>
						</div>
					</header>
					<main className="order-main">
						<div id="scroller">
							
							<ul className="order-lists">
								<li>
									<div className="head">
										<div className="lf"><time>2016-12-26 17:31</time></div>
										<div className="rg">等待支付</div>
									</div>
									<div className="details-box">
										<div className="lf-box">
											<a href="#"><img src={require('../assets/img/order1.png')} alt="订单1"/></a>
										</div>
										<div className="rg-box">
											<h5>涨股无忧</h5>
											<p>尊重市场，依势而为0000依势而为依势而为00000000000</p>
											<span className="orange-box">推荐</span>
										</div>
									</div>
									<div className="details-bottom">
										<div className="price">订单详情：<em>¥3399.00</em>元/1个月</div>
										<div className="form-order">
											<button className="cacel-btn">取消订单</button>
											<button className="sure-btn">去支付</button>
										</div>
									</div>
								</li>
								<li>
									<div className="head">
										<div className="lf"><time>2016-12-26 17:31</time></div>
										<div className="rg">等待支付</div>
									</div>
									<div className="details-box">
										<div className="lf-box">
											<a href="#"><img src={require('../assets/img/order1.png')} alt="订单1"/></a>
										</div>
										<div className="rg-box">
											<h5>涨股无忧</h5>
											<p>尊重市场，依势而为0000依势而为依势而为00000000000</p>
											<span className="orange-box">推荐</span>
										</div>
									</div>
									<div className="details-bottom">
										<div className="price">订单详情：<em>¥3399.00</em>元/1个月</div>
										<div className="form-order">
											<button className="cacel-btn">取消订单</button>
											<button className="sure-btn">去支付</button>
										</div>
									</div>
								</li>
								<li>
									<div className="head">
										<div className="lf"><time>2016-12-26 17:31</time></div>
										<div className="rg">等待支付</div>
									</div>
									<div className="details-box">
										<div className="lf-box">
											<a href="#"><img src={require('../assets/img/order1.png')} alt="订单1"/></a>
										</div>
										<div className="rg-box">
											<h5>涨股无忧</h5>
											<p>尊重市场，依势而为0000依势而为依势而为00000000000</p>
											<span className="orange-box">推荐</span>
										</div>
									</div>
									<div className="details-bottom">
										<div className="price">订单详情：<em>¥3399.00</em>元/1个月</div>
										<div className="form-order">
											<button className="cacel-btn">取消订单</button>
											<button className="sure-btn">去支付</button>
										</div>
									</div>
								</li>
								<li>
									<div className="head">
										<div className="lf"><time>2016-12-26 17:31</time></div>
										<div className="rg">等待支付</div>
									</div>
									<div className="details-box">
										<div className="lf-box">
											<a href="#"><img src={require('../assets/img/order1.png')} alt="订单1"/></a>
										</div>
										<div className="rg-box">
											<h5>涨股无忧</h5>
											<p>尊重市场，依势而为0000依势而为依势而为00000000000</p>
											<span className="orange-box">推荐</span>
										</div>
									</div>
									<div className="details-bottom">
										<div className="price">订单详情：<em>¥3399.00</em>元/1个月</div>
										<div className="form-order">
											<button className="cacel-btn">取消订单</button>
											<button className="sure-btn">去支付</button>
										</div>
									</div>
								</li>
								<li>
									<div className="head">
										<div className="lf"><time>2016-12-26 17:31</time></div>
										<div className="rg">等待支付</div>
									</div>
									<div className="details-box">
										<div className="lf-box">
											<a href="#"><img src={require('../assets/img/order1.png')} alt="订单1"/></a>
										</div>
										<div className="rg-box">
											<h5>涨股无忧</h5>
											<p>尊重市场，依势而为0000依势而为依势而为00000000000</p>
											<span className="orange-box">推荐</span>
										</div>
									</div>
									<div className="details-bottom">
										<div className="price">订单详情：<em>¥3399.00</em>元/1个月</div>
										<div className="form-order">
											<button className="cacel-btn">取消订单</button>
											<button className="sure-btn">去支付</button>
										</div>
									</div>
								</li>
								
							</ul>
						</div>
					</main>
				</div>
		)
	}
}
