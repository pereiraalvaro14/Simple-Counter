import React from "react";

const SimpleCounter = (props) => {
	const digit1 = parseInt((props.seconds / 1) % 10);
	const digit2 = parseInt((props.seconds / 10) % 10);
	const digit3 = parseInt((props.seconds / 100) % 10);
	const digit4 = parseInt((props.seconds / 1000) % 10);
	const digit5 = parseInt((props.seconds / 10000) % 10);
	const digit6 = parseInt((props.seconds / 100000) % 10);
	return (
		<div>
			<div className="container container-alv">
				<div className="row white-alv">
					<div className="col-1 caja">
						<i className="fas fa-clock"></i>
					</div>
					<div className="col-1 caja">{digit6}</div>
					<div className="col-1 caja">{digit5}</div>
					<div className="col-1 caja">{digit4}</div>
					<div className="col-1 caja">{digit3}</div>
					<div className="col-1 caja">{digit2}</div>
					<div className="col-1 caja">{digit1}</div>
				</div>
			</div>
		</div>
	);
};

export default SimpleCounter;
