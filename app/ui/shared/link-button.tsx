'use client'

import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const LinkButton = forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} className="px-6 py-2.5 font-semibold underline" {...props}>
      {children}
    </button>
  )
})

LinkButton.displayName = 'LinkButton'
