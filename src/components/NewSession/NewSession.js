import { Link } from "react-router-dom";

export default function NewSession() {
	return (
		<div className="newsession">
			<div className="get-started-container">
				<h2 className="get-started">Getting Started:</h2>
				<p>
					To get started, click the "New Session" button and there will be a
					space to designate how many questions you'd like to see in your
					session. Give your session a name and hit start!
				</p>
				<Link to={`/sessions/sessionsetup`}>
					<button className="get-started-button">New Session</button>
				</Link>
			</div>
		</div>
	);
}
