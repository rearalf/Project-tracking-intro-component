import React from 'react';
import './style.css';
import Logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';

const Navbar = () => {
	function collapse(){
		const btnHamburger = document.querySelector('#hamburger');
		const btnClose = document.querySelector('#close');
		const nav_collapse = document.querySelector('.nav_collapse');
		nav_collapse.classList.toggle('show_collapse');
		btnHamburger.classList.toggle('toggle_show');
		btnClose.classList.toggle('toggle_show');
	}

	return (
		<div>
			<nav className="navbar">
				<div className="content_brand">
					<a href="./" className="brand">
						<img src={Logo} className="logo_brand" alt="logo" />
					</a>
					<button className="btn_toggler" onClick={collapse}>
						<img src={hamburger} id="hamburger" alt="icon-hamburger" />
						<img src={close} id="close" className="toggle_show" alt="icon-close" />
					</button>
				</div>
				<div className="nav_collapse">
					<ul className="navbar_nav">
						<li className="nav_item">
							<a href="./" className="nav_link">
								Product
							</a>
						</li>
						<li className="nav_item">
							<a href="./" className="nav_link">
								Features
							</a>
						</li>
						<li className="nav_item">
							<a href="./" className="nav_link">
								Pricing
							</a>
						</li>
						<li className="nav_item">
							<div className="nav_item_circule" />
						</li>
						<li className="nav_item">
							<a href="./" className="nav_link">
								Login
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
