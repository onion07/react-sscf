import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';



export default class notfindComponent extends React.Component {

	render () {

		return (
				<div className="wrapper pay-wrapper">
					<div className="wrap-box pay-way">支付方式</div>
					<div className="wrap-box pay-way-list">
						<ul>
						    <li className="active">方式一<b></b></li>
						    <li className="mr0">方式二<b></b></li>
						</ul>
					</div>
					<div className="pay-method pay-one">
						<div className="wrap-box copy-href">
							<span className="step-num">1</span>
							<a href="javascript:void(0)">http://gz.5151gp.com/wechat/order/pay/1399959</a>
							<span className="btn-copy-href">复制链接</span>
						</div>
						<div className="wrap-box open-href">
							<span className="step-num">2</span>
							<div className="step-info">
								在浏览器中打开链接，跳转到<b>支付宝</b>
							</div>
							<div className="step-img">
								<img src={require('../assets/img/pay_check.png')}/>
								<p><a href="javascript:void(0)" className="paste">粘贴链接</a></p>
								<p><a href="javascript:void(0)" className="open-href">点击打开</a></p>
							</div>
						</div>
						<div className="wrap-box pay">
							<span className="step-num">2</span>
							<div className="step-info">支付宝出现转账页面，点击转账，完成付款。</div>
							<div className="pay-img">
								<img src={require('../assets/img/pay_second_account.png')}/>
							</div>
						</div>
						<div className="wrap-box tip">
							<span className="title">温馨提示：</span>
							<div className="tip-info">iphone用户可以点击右上角,选择Safari
							<img src={require('../assets/img/pay_safari.png')}/>或复制链接
								<a href="javascript:void(0)">http://gz.5151gp.com/wechat/order/pay/1399959</a><span className="btn-copy-href">点击复制</span>
							</div>
						</div>
					</div>
					<div className="pay-method pay-two dis">
						<div className="wrap-box step-one">
							<h3>银行汇款</h3>
							<div className="step">
								<span className="step-num">1</span>
								<span className="step-title" >第一步：联系客服</span>
							</div>
							<div className="phone"><b><img src={require('../assets/img/pay-second-tel.png')}/></b>400-091-9988</div>
						</div>
						<div className="wrap-box step-two">
							<div className="step">
								<span className="step-num">2</span>
								<span strp-title>第二步：线下支付</span>
							</div>
							<div className="bank">
								<ul>
								    <li><a href="javascript:void(0)"><img src={require('../assets/img/bank_1.png')}/></a><b className="active"><img src={require('../assets/img/pay-arrow-icon.png')}/></b></li>
								    <li><a href="javascript:void(0)"><img src={require('../assets/img/bank_2.png')}/></a><b><img src={require('../assets/img/pay-arrow-icon.png')}/></b></li>
								    <li><a href="javascript:void(0)"><img src={require('../assets/img/bank_3.png')}/></a><b><img src={require('../assets/img/pay-arrow-icon.png')}/></b></li>
								    <li><a href="javascript:void(0)"><img src={require('../assets/img/bank_7.png')}/></a><b><img src={require('../assets/img/pay-arrow-icon.png')}/></b></li>
								</ul>
								<div className="bank-info">
									<div className="bank-mess">
										<p>账户名: 北京盛世创富证券投资顾问有限公司广州分公司</p>
										<p>开户银行: 中国工商银行广州花城支行营业部</p>
										<p className="red">银行账号: 3602 0285 1920 1974 247</p>
									</div>
									<div className="bank-mess dis">
										<p>账  户  名: 北京盛世创富证券投资顾问有限公司广州分公司</p>
			                            <p>开户银行: 招商银行广州分行富力中心支行</p>
			                            <p className="red">银行账号: 1209 1068 3610 901</p>
									</div>
									<div className="bank-mess dis">
										<p>账  户  名: 北京盛世创富证券投资顾问有限公司广州分公司</p>
			                            <p>开户银行: 农业银行广州富力盈信大厦支行</p>
			                            <p className="red">银行账号: 4402 7201 0400 0423 9</p> 
									</div>
									<div className="bank-mess dis">
										<p>账  户  名: 北京盛世创富证券投资顾问有限公司广州分公司</p>
			                            <p>开户银行: 建设银行广州直属支行</p>
			                            <p className="red">银行账号: 4405 0158 0108 0000 0118</p>
									</div>
								</div>
							</div>
						</div>
						<div className="wrap-box step-thred">
							<div className="step">
								<span className="step-num">3</span>
								<span strp-title>第三步：申请会员</span>
							</div>
							<p>支付成功后，联系客服，我们将第一时间帮您快速开通产品，享受顶级投顾产品服务。</p>
						</div>
					</div>
				</div>
		)
	}
}
