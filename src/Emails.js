import Email from './Email';

function Emails(props) {
	return (
		<ul>
			{props.emails.map((email, index) => (
				<Email
					email={email}
					index={index}
					toggleRead={props.toggleRead}
					toggleStar={props.toggleStar}
					setSelectedEmail={props.setSelectedEmail}
				/>
			))}
		</ul>
	);
}

export default Emails;
