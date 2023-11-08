import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-4 px-4 pb-4 pt-2 sm:grid-cols-3 sm:px-8">
      <p className="text-center opacity-70 sm:col-start-2">
        &copy; Ben Brackenbury {new Date().getFullYear()}
      </p>
      <section className="text-center">
        <Link
          href="https://github.com/benbrackenbury/portfolio"
          target="_blankl"
          className="text-sm opacity-60 transition-opacity hover:opacity-100"
        >
          <FontAwesomeIcon icon={faExternalLink} /> See how this site was made
        </Link>
      </section>
    </footer>
  )
}
