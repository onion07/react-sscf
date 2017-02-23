import React from 'react';
import classNames from 'classnames'; // 动态类 （官网推荐）



export default class tabComponent extends React.Component {

	 constructor(props) {
	    super(props);

	    this.state = {
	    	currentIndex: 0
	    };
	    // This line is important!
	    this.handleClick = this.handleClick.bind(this);
	  }


	componentDidMount () {

		console.log('DidMont...');
	}


	handleClick (index) {

		this.setState({currentIndex: index});

	}

	render () {
		// const tabs = ['产品介绍','战绩回顾','投顾团队'];
		return (
				<div className="tab-box">
					<div className="tab-head">
						<ul>
							{
								this.props.items.map( (name,index) => { // 使用了块语句的箭头函数不会自动返回值，你需要使用return语句将所需值返回

										const liClass = classNames({
									      'tab': true,
									      'tab1': index === 0,
									      'tab2': index === 1,
									      'tab3': index === 2,
									      'cur': this.props.flag === index
									    });

										return <li className={liClass} key={index} onClick={ (  ) => {this.props.transIndexs(index) } }><span>{name}</span></li>
										// return <li className={liClass} key={index} onClick={this.props.transIndexs.bind(this,index)} ><span>{name}</span></li>
									}
								)
							}
						</ul>
					</div>
				</div>
		)
	}
}
