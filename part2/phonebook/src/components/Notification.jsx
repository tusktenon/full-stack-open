function Notification({ message, type }) {
  if (!message) {
    return null
  }

  const style = {
    color: type === 'error' ? '#b71c1c' : '#1b5e20',
    background: type === 'error' ? '#ffcdd2' : '#c8e6c9',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  return <div style={style}>{message}</div>
}

export default Notification
