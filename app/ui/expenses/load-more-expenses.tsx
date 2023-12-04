'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { IconArrowLeftSLine, IconArrowRightSLine } from '@/app/ui/icons'
import { LinkButton } from '../shared/link-button'

type Props = {
  totalPages: number
}

export const LoadMoreExpenses = ({ totalPages }: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="inline-flex gap-6">
      {currentPage > 1 && (
        <Link href={createPageURL(currentPage - 1)}>
          <IconArrowLeftSLine className="h-6 w-6" />
        </Link>
      )}
      {currentPage <= 1 && <IconArrowLeftSLine className="h-6 w-6 opacity-50" />}

      <span>
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link href={createPageURL(currentPage + 1)}>
          <IconArrowRightSLine className="h-6 w-6" />
        </Link>
      )}
      {currentPage >= totalPages && <IconArrowRightSLine className="h-6 w-6 opacity-50" />}
    </div>
  )
}

LinkButton.displayName = 'LoadMoreExpenses'
