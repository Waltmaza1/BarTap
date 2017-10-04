import React, { Component } from 'react';

//--Need to fetch this from the db --//
var userDetails = {
	name: "Collin M",
	image : "https://avatars3.githubusercontent.com/u/25713169?v=4&s=400"
}

const styles ={ 
	img: {
    	width: '100px',
 		height: '100px',
 		display: 'block',
 		borderRadius: '50%',
	}

};

export default class User extends Component {
	render(){
		return(<div>
			<img src= {userDetails.image} style={styles.img}/>
			<h4>{userDetails.name}</h4>
		</div>);
	}
}