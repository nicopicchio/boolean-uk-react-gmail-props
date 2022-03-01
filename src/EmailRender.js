function EmailRender(props) {
  return (
    <div className="email-container">
      <h3>{`From: ${props.email.sender}`}</h3>
      <h3>{`From: ${props.email.title}`}</h3>
      <p>{`${props.email.content}`}</p>
    </div>
  )
}

export default EmailRender;
