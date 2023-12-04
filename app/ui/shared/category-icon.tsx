import React, { FC } from 'react'

import { IconGroceries, IconQuestionMark, IconRestaurant2, IconShopping, IconTransport } from '@/app/ui/icons'

type CategoryIcons = {
  [category: string]: FC<{ className?: string }>
}

const categoryIcons: CategoryIcons = {
  Restaurant: IconRestaurant2,
  Transport: IconTransport,
  Groceries: IconGroceries,
  Shopping: IconShopping,
}

type CategoryIconProps = {
  category: string
  className?: string
}

export const CategoryIcon: FC<CategoryIconProps> = ({ category, className }) => {
  const Icon = categoryIcons[category] || IconQuestionMark
  return <Icon className={className} />
}

CategoryIcon.displayName = 'CategoryIcon'
