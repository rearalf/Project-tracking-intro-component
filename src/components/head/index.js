import React from 'react';
import './style.css';
import illustration from '../../images/illustration-devices.svg';

const Head = () => {
	return (
		<div>
			<main className="container header">
				<div className="header_column_1">
					<p className="text_first_header">
						<span className="text_header_important">New</span> Monograph Dashboard
					</p>
					<h1 className="title_header">Powerful insights into your team</h1>
					<p className="text_second_header">Project planning and time tracking for agile teams</p>
					<div className="content_bottom">
						<button className="btn">Schedule a demo</button>
						<p className="text_three_header">to see a live preview</p>
					</div>
				</div>
				<div className="header_column_2">
					<img src={illustration} alt="illustration" />
				</div>
			</main>
		</div>
	);
};

export default Head;
