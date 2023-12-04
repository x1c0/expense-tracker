import Link from 'next/link'
import React, { AnchorHTMLAttributes, forwardRef } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: React.ReactNode
}

export const NavigationLink = forwardRef<HTMLAnchorElement, Props>(({ href, children }, ref) => {
  return (
    <Link href={href} ref={ref} passHref className="font-semibold underline">
      {children}
    </Link>
  )
})

NavigationLink.displayName = 'NavigationLink'
