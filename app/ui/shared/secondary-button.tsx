'use client'

import clsx from 'clsx'
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

export const SecondaryButton = forwardRef<HTMLButtonElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'w-full rounded-xl border-2 border-primary bg-white px-6 py-2.5 text-lg focus:outline-default md:max-w-xs',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

SecondaryButton.displayName = 'SecondaryButton'
