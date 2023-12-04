import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { fetchCategories, fetchCurrencies, fetchExpense } from '@/app/lib/data'
import { EditForm } from '@/app/ui/expenses/edit-form'
import { BackNavLink } from '@/app/ui/shared/back-nav-link'
import { MaxWidthContainer } from '@/app/ui/shared/max-width-container'
import { Heading } from '@/app/ui/shared/page-heading'

export const dynamic = 'force-dynamic'

type ExpenseDetailPageParams = {
  id: string
}

type ExpenseDetailPageProps = {
  params: ExpenseDetailPageParams
}

export const metadata: Metadata = {
  title: 'Expense detail',
}

export default async function Page({ params }: ExpenseDetailPageProps) {
  const expense = await fetchExpense(params.id)
  if (!expense) {
    notFound()
  }
  const categories = await fetchCategories()
  const currencies = await fetchCurrencies()
  return (
    <MaxWidthContainer>
      <BackNavLink href="/dashboard/expenses" />
      <Heading title="Expense Detail" />
      <EditForm categories={categories} currencies={currencies} expense={expense} />
    </MaxWidthContainer>
  )
}
