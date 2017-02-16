import React from 'react';



export default class notfindComponent extends React.Component {

	render () {

		return (
				<div className="wrapper not-find-wrapper">
					<div className="not-find">
						<div className="block">
							<span className="aoo"></span>
						</div>
						<div className="block">
							<div className="orange-text">很抱歉</div>
						</div>
						<div className="block">
							<p>该页面抓牛股去了</p>
						</div>
						<div className="block">
							<a href="javascript:void(0);" className="check-net">
								<span></span>
								<i>检查网络</i>
							</a>
							<a href="javascript:void(0);" className="refresh-net">
								<span></span>
								<i>刷新页面</i>
							</a>
						</div>
					</div>
				</div>
		)
	}
}
