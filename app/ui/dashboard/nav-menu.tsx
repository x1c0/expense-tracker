import Link from 'next/link'

import { IconMenuLine } from '../icons'

export default function NavMenu() {
  return (
    <div className="w-full  bg-white ">
      <nav className="flex h-16 items-center px-5 font-bold md:container md:mx-auto">
        <Link href={'/dashboard'}>Expense Tracker</Link>
        <IconMenuLine className="ml-auto h-6 w-6" />
      </nav>
    </div>
  )
}
