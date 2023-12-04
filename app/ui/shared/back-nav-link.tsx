import React, { AnchorHTMLAttributes, forwardRef } from 'react'

import { IconArrowLeft } from '@/app/ui/icons'
import { NavigationLink } from './navigation-link'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  text?: string
}

export const BackNavLink = forwardRef<HTMLAnchorElement, Props>(({ href, text = 'Back' }, ref) => {
  return (
    <NavigationLink href={href} ref={ref}>
      <IconArrowLeft className="mr-2 inline-block h-6 w-6 stroke-2 text-primary" />
      {text}
    </NavigationLink>
  )
})

BackNavLink.displayName = 'BackNavLink'
