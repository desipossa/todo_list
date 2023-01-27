import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/list'>LIST</Link>
                </li>
                <li>
                    <Link to='/write'>WRITE</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav