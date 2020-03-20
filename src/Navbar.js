import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar{" "}<span className="badge badge-pill badge-secondary">{props.totalCounter}</span></a>
            </nav>

        </div>
    )
}

export default Navbar
