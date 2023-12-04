'use client'

import Link from 'next/link'
import React, { AnchorHTMLAttributes, forwardRef } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: React.ReactNode
}

export const PrimaryLinkButton = forwardRef<HTMLAnchorElement, Props>(({ href, children, ...props }, ref) => {
  return (
    <Link
      href={href}
      ref={ref}
      passHref
      className="block rounded-xl bg-primary px-6 py-2.5 text-center text-lg text-white md:max-w-xs"
      {...props}
    >
      {children}
    </Link>
  )
})

PrimaryLinkButton.displayName = 'PrimaryLinkButton'
