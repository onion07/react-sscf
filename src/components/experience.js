import React from 'react';



export default class experienceComponent extends React.Component {

	componentDidMount () {

		this.fixScroller()
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
				<div className="wrapper exper-wrapper">
					<header className="exper-header">
						<img src="src/assets/img/ty_baner.png" alt="盛世创富免费体验baner图"/>
					</header>
					<main className="exper-main">
						<section>
							<div className="top-box">
								<div className="top-lf">
									<a href="javascript:void(0);"><img src="src/assets/img/mfty.png" alt/></a>
								</div>
								<div className="top-rg">
									<h4>涨股无忧<span>短线机会</span></h4>
									<p>尊重市场，依势而为</p>
								</div>
								<div className="flow-right">
									<div className="join-box">已有<em>118548</em>人参与</div>
									<div className="state-box processing">进行中</div>
								</div>
							</div>
							<div className="list-box">
								<div className="scroller">
									<ul>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="bottom-box">
								<a href="javascript:void(0);">免费体验</a>
							</div>
						</section>
						<section>
							<div className="top-box">
								<div className="top-lf">
									<a href="javascript:void(0);"><img src="src/assets/img/mfty.png" alt/></a>
								</div>
								<div className="top-rg">
									<h4>涨股无忧<span>短线机会</span></h4>
									<p>尊重市场，依势而为</p>
								</div>
								<div className="flow-right">
									<div className="join-box">已有<em>118548</em>人参与</div>
									<div className="state-box ending">结束</div>
								</div>
							</div>
							<div className="list-box">
								<div className="scroller">
									<ul>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
										<li>
											<img src="src/assets/img/md.png" alt="盛世创富产品卖点"/>
											<p>产品卖点</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="bottom-box">
								<a href="javascript:void(0);">免费体验</a>
							</div>
						</section>
					</main>
				</div>
		)
	}
}
