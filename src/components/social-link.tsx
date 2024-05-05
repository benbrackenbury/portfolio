import Link, { LinkProps } from 'next/link'

type SocialLinkProps = LinkProps & {
  href: string
  ariaLabel: string
  title: string
  children: React.ReactNode
}

export default function SocialLink(props: SocialLinkProps) {
  return (
    <Link
      href={props.href}
      target='_blank'
      aria-label={props.ariaLabel}
      title={props.title}
      className='opacity-50 transition-opacity hover:opacity-100'
    >
      {props.children}
    </Link>
  )
}
