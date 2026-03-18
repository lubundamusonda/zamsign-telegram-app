import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function BottomBar() {
  return (
    <div className="sticky bottom-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg md:hidden">
      <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 py-8 sm:py-6 text-xl font-bold">
        <div className="order-3 flex w-full flex-wrap justify-center items-center gap-x-4 gap-y-1 pb-1">
		  <Link
            to="/"
			suppressHydrationWarning
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            Home
          </Link>
		  
		 <div className=""> {"|"}</div>
		  
          <Link
            to="/about"
			suppressHydrationWarning
            className="nav-link"
            activeProps={{ className: 'nav-link is-active' }}
          >
            About
          </Link>
		  
        </div>
      </nav>
    </div>
  )
}
