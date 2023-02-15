import React from 'react';
import './styles.css';

function HeaderContainer(){
	return(
		<>
			<nav>
				<div className="nav-center">
					<div className="nav-header">
						<img src="https://cdn-icons-png.flaticon.com/512/7205/7205615.png" className="logo" alt="logo" />
						<h1 className='title'>Game World</h1>
						<button className="nav-toggle">
							<img src='https://cdn-icons-png.flaticon.com/512/8367/8367536.png' className="menu-icon-bar"></img>
						</button>

					</div>

					{/* <!-- links --> */}
					<ul className="links">
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<a href="about.html">About</a>
						</li>
						<li>
							<a href="Categories.html">Categories</a>
						</li>
						<li>
							<a href="contact.html">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export {HeaderContainer};