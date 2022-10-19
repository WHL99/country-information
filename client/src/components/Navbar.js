function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark p-2 fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/" style={{ fontFamily: 'Times New Roman', fontSize: '2rem', fontWeight: 'bolder', paddingLeft: '3vw' }}>WikiCountries</a>
            </div>
        </nav>
    )
}
export default Navbar;