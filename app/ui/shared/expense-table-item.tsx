import Link from 'next/link'

import { Expense } from '@/app/lib/definitions'
import { formatCurrency } from '@/app/lib/utils/currency'
import { formatDate, formatTime } from '@/app/lib/utils/dates'
import { CategoryIcon } from './category-icon'

type Props = {
  expense: Expense
}

export const ExpenseTableItem: React.FC<Props> = ({ expense }) => {
  return (
    <>
      <td className="w-6">
        <Link href={`/dashboard/expenses/${expense.id}`} className="flex flex-col py-2 pl-2 md:px-3 md:py-4">
          <CategoryIcon category={expense.category} className="h-6 w-6" />
        </Link>
      </td>
      <td className="">
        <Link href={`/dashboard/expenses/${expense.id}`} className="flex flex-col px-3 py-2 md:py-4">
          <span className="max-w-[90px] truncate font-bold sm:max-w-none">{expense.description}</span>
          <span className="max-w-[90px] truncate text-sm sm:hidden md:max-w-none">{expense.recipient}</span>
        </Link>
      </td>
      <td className="hidden sm:table-cell">
        <Link href={`/dashboard/expenses/${expense.id}`} className="px-3 py-2 md:py-4">
          <span className="">{expense.recipient}</span>
        </Link>
      </td>
      <td>
        <Link
          href={`/dashboard/expenses/${expense.id}`}
          className="flex flex-col px-3 py-2 text-sm text-default-light md:flex-row md:gap-8 md:py-4 md:text-base"
        >
          <span> {formatDate(expense.date)} </span>
          <span> {formatTime(expense.date)}</span>
        </Link>
      </td>
      <td>
        <Link
          href={`/dashboard/expenses/${expense.id}`}
          className="flex items-center justify-end gap-2 px-3 py-2 md:py-4"
        >
          <span className="text-xs">{expense.currency}</span>
          <span className="font-semibold">{formatCurrency(expense.amount, expense.currency)}</span>
        </Link>
      </td>
    </>
  )
}
