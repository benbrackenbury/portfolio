import { PropsWithChildren } from 'react'

export default function RootLayout(props: PropsWithChildren) {
  return (
    <div className='mt-0 starting:mt-10 opacity-100 transition-all duration-1000 starting:opacity-0'>
      {props.children}
    </div>
  )
}
