import { Metadata } from 'next'

import { fetchCategories, fetchCurrencies } from '@/app/lib/data'
import { CreateForm } from '@/app/ui/expenses/create-form'
import { BackNavLink } from '@/app/ui/shared/back-nav-link'
import { MaxWidthContainer } from '@/app/ui/shared/max-width-container'
import { Heading } from '@/app/ui/shared/page-heading'

export const metadata: Metadata = {
  title: 'Create expense',
}

export default async function Page() {
  const categories = await fetchCategories()
  const currencies = await fetchCurrencies()
  return (
    <MaxWidthContainer>
      <BackNavLink href="/dashboard" />
      <Heading title="Add expense" />
      <CreateForm categories={categories} currencies={currencies} />
    </MaxWidthContainer>
  )
}
