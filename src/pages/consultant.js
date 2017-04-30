import React from 'react';



export default class consultComponent extends React.Component {

	render () {

		return (

			<div>
				<div className="wrapper zx-online" id="wrapper">
					<main className="msg-main">
						<section className="qa-section">
							<div className="a-section">
								<a href="javascript:void(0);" className="a_user">
									<img src={require('../assets/img/user_zx.png')} alt />
								</a>
								<p>你好，领投客服在线为您服务，请问有什么可以帮您的？</p>
								<span className="white-wp"></span>
							</div>
						</section>
						
					</main>
				</div>
				<div className="send-wrap">
					<div className="send-inner">
						<input type="text" id="send-text"/>
						<button id="send-btn">发送</button>
					</div>
				</div>
			</div>
		)
	}
}
