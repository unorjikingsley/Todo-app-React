const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    color: '#333',
  }

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  }

  return (
    <nav style={navStyle}>
      <h1>TODO</h1>
      <ul style={ulStyle}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  )
}

export default NavBar
