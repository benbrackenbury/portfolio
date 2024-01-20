import {
  faAppStore,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type SocialLinkProps = {
  href: string
  label: string
  children: React.ReactNode
}

export default function SocialLink(props: SocialLinkProps) {
  const { href, label, children } = props

  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="p-1 opacity-50 hover:opacity-100 focus:opacity-100"
    >
      {children}
    </Link>
  )
}

type SocialLinkExtensionProps = {
  username: string
}

SocialLink.X = function (props: SocialLinkExtensionProps) {
  const { username } = props
  const href = `https://x.com/${username}`

  return (
    <SocialLink href={href} label="X">
      𝕏
    </SocialLink>
  )
}

SocialLink.GitHub = function (props: SocialLinkExtensionProps) {
  const { username } = props
  const href = `https://github.com/${username}`

  return (
    <SocialLink href={href} label="GitHub">
      <FontAwesomeIcon icon={faGithub} />
    </SocialLink>
  )
}

SocialLink.LinkedIn = function (props: SocialLinkExtensionProps) {
  const { username } = props
  const href = `https://linkedin.com/in/${username}`

  return (
    <SocialLink href={href} label="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} />
    </SocialLink>
  )
}

SocialLink.AppStore = function (props: SocialLinkExtensionProps) {
  const { username } = props
  const href = `https://apps.apple.com/bt/developer/${username}`

  return (
    <SocialLink href={href} label="App Store">
      <FontAwesomeIcon icon={faAppStore} />
    </SocialLink>
  )
}
