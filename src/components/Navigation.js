import React from 'react'
import { Link } from 'gatsby'

// TODO: link color hsla(0,0%,0%,0.9)

export default function Navigation() {
  return (
    <nav className="py-4 px-3.5 bg-yellow-500">
      <ul className="list-none flex m-0">
        <li className="m-0">
          <Link to="/blog" className="text-black">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
