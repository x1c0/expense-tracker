import { Metadata } from 'next'

import { ExpenseSearchParams, fetchFilteredExpenses } from '@/app/lib/data'
import { LoadMoreExpenses } from '@/app/ui/expenses/load-more-expenses'
import { BackNavLink } from '@/app/ui/shared/back-nav-link'
import { ExpenseTable } from '@/app/ui/shared/expense-table'
import { Heading } from '@/app/ui/shared/page-heading'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Expenses',
}

export default async function Page({ searchParams }: { searchParams?: ExpenseSearchParams }) {
  const { expenses, totalPages } = await fetchFilteredExpenses(searchParams || {})

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <BackNavLink href="/dashboard" />
      <Heading title="Expenses" />
      <ExpenseTable expenses={expenses} />
      <div className="flex justify-center">
        <LoadMoreExpenses totalPages={totalPages} />
      </div>
    </div>
  )
}
