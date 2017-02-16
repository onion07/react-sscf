import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';



export default class productComponent extends React.Component {


	componentDidMount () {

		this.getTab()
	}


	//横向scroll
	getTab () {
		
		//产品描述-切换
		if ($('.tab').length){
			const $tab = $('.tab'); 
			const $content = $('.tab-content'); 
			let index = 0;

			$tab.click(function(event) {
				index = $tab.index($(this));
				$tab.removeClass('cur');
				$(this).addClass('cur');
				$content.removeClass('cur').eq(index).addClass('cur');

			});
		}
		
	}

	render () {

		return (
				<div className="wrapper production-wrapper">
						<header className="production-header">
							<img src="src/assets/img/cp_baner.png" alt="产品描述baner图"/>
							<div className="little-bar">
								<marquee behavior="scroll"  direction="left" scrollamount="2.5" scrolldelay="150"><i>19730</i>位投资者已购买</marquee>
								<marquee behavior="scroll"  direction="left" scrollamount="2.5" scrolldelay="150"><i>19730</i>位投资者已购买</marquee>
							</div>
						</header>
						<main className="production-main">
							<section>
								<div className="tble-box">
									<div className="th-box">
										<div className="outer">
											<span>服务周期</span>
											<span>服务价格</span>
										</div>
									</div>
									<div className="td-box">
										<div className="outer">
											<div className="inner">
												<select name="td-month" id="td-month">
													<option value="1">1个月</option>
													<option value="2">3个月</option>
													<option value="3">6个月</option>
													<option value="4">12个月</option>
												</select>
											</div>
											<div className="inner">
												<i>3399.00</i>元
											</div>
										</div>
									</div>
								</div>
								<Link to="pay" className="sure-btn">去支付</Link>
								<div className="flag-box">
									<span className="flag"></span>
									<span className="flag-txt">涨股无忧</span>
									<span className="flag-bg"></span>
								</div>
							</section>
							<section>
								<div className="tab-box">
									<div className="tab-head">
										<ul>
											<li className="tab tab1 cur"><span>产品介绍</span></li>
											<li className="tab tab2"><span>战绩回顾</span></li>
											<li className="tab tab3"><span>投顾团队</span></li>
										</ul>
									</div>
									
								</div>
							</section>
							<div className="tab-content cur">
									<div className="st">
										<p className="tab-body-text txt1 cur">
											    《涨股无忧》是盛世创富研究团队以事件驱动型投资策略打造的一款极具及时性、准确性、简易化的投资平台，网罗时讯经纬，直击政策风向指标，聚焦市场前沿热点，在多空转换中捕捉爆发潜力主题，甄选价值个股。以事件来驱动投资方向，第一时间捕捉市场主线题材龙头。
										</p>
									</div>
									<div className="st">
										<h3 className="sen-title title1">产品标的达标成功计算方式</h3>
										<div className="sen-wrap">
											<img src="src/assets/img/ms_test.png" alt="产品标的达标成功计算方式"/>
										</div>
										<div className="secn-dep">
											<p className="first-p">若5日最大涨幅超过<em>5%</em>则为成功达标</p>
										</div>
										
									</div>
									<div className="st">
										<h3 className="sen-title title2">成功案例回顾&nbsp;—&nbsp;禾盛新材&nbsp;&nbsp;002290</h3>
										<div className="sen-wrap">
											<img src="src/assets/img/ms_test.png" alt="成功案例回顾——禾盛新材002290"/>
										</div>
										<div className="secn-dep">
											<ul>
												<li>推送时间：2016.09.30</li>
												<li>统计时间：2016.09.30—2016.10.17</li>
												<li>交易日：共11个</li>
												<li><em>期间累计涨幅：19%</em></li>
											</ul>
										</div>
									</div>
									<div className="st">
										<h3 className="sen-title title2">成功案例回顾&nbsp;—&nbsp;信达地产&nbsp;600657</h3>
										<div className="sen-wrap">
											<img src="src/assets/img/ms_test.png" alt="成功案例回顾——禾盛新材002290"/>
										</div>
										<div className="secn-dep">
											<ul>
												<li>推送时间：2016.09.30</li>
												<li>统计时间：2016.09.30—2016.10.17</li>
												<li>交易日：共11个</li>
												<li><em>期间累计涨幅：19%</em></li>
											</ul>
										</div>
									</div>
									<div className="st">
										<h3 className="sen-title title4">产品类型</h3>
										<div className="secn-dep">
											<p>短线股票池。（每个交易日于盘中推送，如分析师对后市谨慎，不推送股票。）</p>
										</div>
									</div>
									<div className="st">
										<h3 className="sen-title title5">获取方式</h3>
										<div className="sen-wrap">
											<img src="src/assets/img/ms_test2.png" alt="获取方式"/>
										</div>
										<div className="secn-dep sp5">
											<em>1.微信订阅&nbsp;2.个人中心&nbsp;3.我的订阅&nbsp;4.涨股无忧</em>
											<p className="wx-dp">（微信订阅支付或联系客服线下支付成功后，可通过上述途径查看订阅服务信息）</p>
										</div>
									</div>
									<div className="st">
										<h3 className="sen-title title6">更新提醒</h3>
										<div className="secn-dep">
											<p>订阅并支付成功后，每个交易日盘中发布更新提醒，点击“投资策略更新提醒”可查看最新股票池。</p>
										</div>
									</div>
							</div>	
							<div className="tab-content">
								<div className="inner-review st">
									<div className="vertical-line"></div>
									<ul>
										<li>
											<time>12-28</time>
											<div className="box-stock">
												<h5>五日涨幅 <em>6.00%</em></h5>
												<div className="box-stock-bottom">
													<span>股票：<i>四方精创</i></span>
													<span>代码：<i>300468</i></span>
												</div>
											</div>
										</li>
										<li>
											<time>12-28</time>
											<div className="box-stock">
												<h5>五日涨幅 <em>6.00%</em></h5>
												<div className="box-stock-bottom">
													<span>股票：<i>四方精创</i></span>
													<span>代码：<i>300468</i></span>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="tab-content">
								<div className="team">
									<div className="team-header st">	
										<div className="inner">
											<div className="in">
												<a href="#"><img src="src/assets/img/team_pic.png"/></a>
											</div>
											<div className="in">
												<i>易老师</i>
												<em>金牌投资顾问</em>
												<span>A0520512050001</span>
											</div>
										</div>
									</div>
									<div className="team-body st">
										<div className="inner">
											<h4>背景介绍</h4>
											<p>的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方</p>
											<p>的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方</p>
										</div>
									</div>
								</div>
								<div className="team">
									<div className="team-header st">	
										<div className="inner">
											<div className="in">
												<a href="#"><img src="src/assets/img/team_pic.png"/></a>
											</div>
											<div className="in">
												<i>易老师</i>
												<em>金牌投资顾问</em>
												<span>A0520512050001</span>
											</div>
										</div>
									</div>
									<div className="team-body st">
										<div className="inner">
											<h4>背景介绍</h4>
											<p>的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方</p>
											<p>的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方的开始放假打飞机RTP润体乳第三方</p>
											
										</div>
									</div>
								</div>
							</div>

						</main>
					</div>
		)
	}
}
