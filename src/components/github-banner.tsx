export default function GitHubBanner() {
  return (
    <footer className='mt-24 border-t border-foreground/15 pt-6 font-mono text-xs tracking-widest uppercase opacity-50'>
      © {new Date().getFullYear()} Ben Brackenbury
    </footer>
  )
}
