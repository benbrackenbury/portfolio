import HeaderTitle from './header-title'
import ThemeSwitcher from './theme-switcher-wrapper'

export default function Header() {

  return (
    <header className='bg-background/80 sticky top-0 flex items-center justify-between py-4 px-4 backdrop-blur-xl lg:px-8'>
      <section className='flex items-center gap-4'>
        <HeaderTitle>
          <span className='text-3xl'>Ben Brackenbury</span>
        </HeaderTitle>
      </section>
      <section className='flex items-center gap-4'>
        <ThemeSwitcher />
      </section>
    </header>
  )
}
