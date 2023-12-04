'use client'

import clsx from 'clsx'
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
}

export const PrimaryButton = forwardRef<HTMLButtonElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'w-full rounded-xl bg-primary px-6 py-2.5 text-lg text-white focus:outline-default md:max-w-xs',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

PrimaryButton.displayName = 'PrimaryButton'
