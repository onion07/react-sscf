import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';



export default class indexComponent extends React.Component {


	componentDidMount() {

		this.fixScroller()
		//焦点图
		if ($('.single-item').length) {
			$('.single-item').slick();
		}

	}


	//横向scroll
	fixScroller () {
		if ($('.scroller').length){
			const $scroller = $('.scroller');
			const len =  $scroller.length;

			for (let i = 0; i < len; i ++ ) {
				const li_width = $scroller.eq(i).find('li').width();
				const li_num = $scroller.eq(i).find('li').length;

				$scroller.eq(i).width( (li_width+10)*li_num+90 ) ;
			}
		}
		
	}

	render () {

		return (
			<div>
				<div id="header">
					<a href="#" className="logo"><img src={require('../assets/img/logo.png')} alt="盛世创富logo0"/></a>
					<Link to="experience" className="goto">免费体验&nbsp;&gt;</Link>
				</div>
				<div className="wrapper" id="wrapper">
					<div id="scroller" className="scrollerY">
							<div className="focus-wrap slider single-item">
								<div><h3><a href="#"><img src={require('../assets/img/baner.png')} alt="盛世创富banner"/></a></h3></div>
								<div><h3><a href="#"><img src={require('../assets/img/baner2.png')} alt="盛世创富banner"/></a></h3></div>
								<div><h3><a href="#"><img src={require('../assets/img/baner.png')} alt="盛世创富banner"/></a></h3></div>
							</div>
							<div className="bar-wrap bar1">
								<i className="circ lf"></i>
								<h3><em>短线机会</em></h3>
								<div className="line"></div>
								<i className="circ rg"></i>
							</div>
							<div id="scroll_wrap1" className="scroll_wrap">
								<div className="scroller">
									<ul>
										<li>
											<div className="flag-box">
												<span className="flag" ></span>
												<span className="flag-txt">人气</span>
												<span className="flag-bg"></span>
											</div>
											<div><Link to="product"><img src={require('../assets/img/sl1.png')} alt/></Link></div>
											<h4><a href="#">日日赢</a></h4>
											<p className="dsp">产品理念：量价叠0000000000000000</p>
											<div className="labels">
												<em className="org">龙虎榜</em>
												<em className="pred">机构监控</em>
												<em className="org">短线机会</em>
											</div>
											<div className="money"><i>¥</i><span>3999.00</span>元/月</div>
										</li>
										<li>
											<div className="flag-box">
												<span className="flag"></span>
												<span className="flag-txt">鲜花</span>
												<span className="flag-bg"></span>
											</div>
											<div><Link to="product"><img src={require('../assets/img/sl1.png')} alt/></Link></div>
											<h4><a href="#">日日赢</a></h4>
											<p className="dsp">产品理念：量价叠加</p>
											<div className="labels">
												<em className="org">龙虎榜</em>
												<em className="pred">机构监控</em>
											</div>
											<div className="money"><i>¥</i><span>3999.00</span>元/月</div>
										</li>
										<li>
											<div><Link to="product"><img src={require('../assets/img/sl1.png')} alt/></Link></div>
											<h4><a href="#">日日赢</a></h4>
											<p className="dsp">产品理念：量价叠加</p>
											<div className="labels">
												<em className="org">龙虎榜</em>
												<em className="pred">机构监控</em>
											</div>
											<div className="money"><i>¥</i><span>3999.00</span>元/月</div>
										</li>
										<li>
											<div><Link to="product"><img src={require('../assets/img/sl1.png')} alt/></Link></div>
											<h4><a href="#">日日赢</a></h4>
											<p className="dsp">产品理念：量价叠加</p>
											<div className="labels">
												<em className="org">龙虎榜</em>
												<em className="pred">机构监控</em>
											</div>
											<div className="money"><i>¥</i><span>3999.00</span>元/月</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="bar-wrap bar2">
								<i className="circ lf"></i>
								<h3><em>短线机会</em></h3>
								<div className="line"></div>
								<i className="circ rg"></i>
							</div>
							<div id="scroll_wrap2" className="scroll_wrap">
								<div className="scroller">
									<ul>
										<li>
											<div className="flag-box">
												<span className="flag" ></span>
												<span className="flag-txt">鲜花</span>
												<span className="flag-bg"></span>
											</div>
											<div><a href="#"><img src={require('../assets/img/sl1.png')} alt/></a></div>
											<h4><a href="#">日日赢</a></h4>
											<p className="dsp">产品理念：量价叠加</p>
											<div className="labels">
												<em className="org">龙虎榜</em>
												<em className="pred">机构监控</em>
											</div>
											<div className="money"><i>¥</i><span>3999.00</span>元/月</div>
										</li>
										<li>Pretty cell 2</li>
										<li>Pretty cell 3</li>
										<li>Pretty cell 4</li>
										<li>Pretty cell 5</li>
										<li>Pretty cell 6</li>
									</ul>
								</div>
							</div>
							<div className="bar-wrap bar3">
								<i className="circ lf"></i>
								<h3><em>短线机会</em></h3>
								<div className="line"></div>
								<i className="circ rg"></i>
							</div>
						</div>
				</div>
			</div>
		)
	}
}


