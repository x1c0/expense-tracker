'use client'

import clsx from 'clsx'
import { useState } from 'react'

import { IconAddLine } from '@/app/ui/icons'
import { CategoryIcon } from '../shared/category-icon'

type Props = {
  label: string
  name: string
  categories: string[]
  defaultValue?: string
}

export const CategoryPicker: React.FC<Props> = ({ label, name, categories, defaultValue }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(defaultValue || null)

  return (
    <div>
      <label className="block pb-2 text-sm">{label}</label>
      <input type="hidden" name={name} value={selectedCategory || ''} />
      <ul className="flex gap-4">
        {categories.map((category) => {
          const isSelected = category === selectedCategory
          return (
            <li key={category} className="flex flex-col items-center gap-1">
              <button
                type="button"
                className={clsx(
                  'flex h-11 w-11 items-center justify-center rounded-full border-2 border-default bg-white',
                  isSelected ? 'border-none !bg-primary text-white' : 'border-default'
                )}
                onClick={() => setSelectedCategory(category)}
              >
                <CategoryIcon category={category} className="h-6 w-6" />
              </button>
              <span className="text-xs text-default-light">{category}</span>
            </li>
          )
        })}
        <li className="flex flex-col items-center gap-1">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-white"
          >
            <IconAddLine className="h-6 w-6 text-primary" />
          </button>
        </li>
      </ul>
    </div>
  )
}

CategoryPicker.displayName = 'CategoryPicker'
