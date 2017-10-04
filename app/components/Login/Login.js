import React, {components} from 'react';

var 



export default class Login extends Component {

	render(){
		return(<div>
			{Login.map((item) => (
				<div><button className="btn btn-default" key={item} style={styles.button}>{item}</button></div>
				))}
		</div>);
	}
}