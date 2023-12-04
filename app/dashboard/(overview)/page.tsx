import { fetchRecentExpenses } from '@/app/lib/data'
import AccountSummaryCardsWrapper from '@/app/ui/dashboard/account-summary-cards'
import { MonthPicker } from '@/app/ui/dashboard/month-picker'
import { IconAddLine } from '@/app/ui/icons'
import { ExpenseTable } from '@/app/ui/shared/expense-table'
import { MaxWidthContainer } from '@/app/ui/shared/max-width-container'
import { NavigationLink } from '@/app/ui/shared/navigation-link'
import { Heading } from '@/app/ui/shared/page-heading'
import { PrimaryLinkButton } from '@/app/ui/shared/primary-link-button'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const filteredExpenses = await fetchRecentExpenses()
  return (
    <div className="flex flex-col gap-8">
      <Heading title="Dashboard" />
      <MaxWidthContainer>
        <MonthPicker />
        <AccountSummaryCardsWrapper />
        <PrimaryLinkButton href="/dashboard/expenses/create">
          <IconAddLine className="mr-4 inline-block h-6 w-6 stroke-[2]" />
          Add expense
        </PrimaryLinkButton>
      </MaxWidthContainer>
      <Heading title="Recent expenses" />
      <ExpenseTable expenses={filteredExpenses.expenses} />
      <div className="text-center">
        <NavigationLink href="/dashboard/expenses?page=1">See all</NavigationLink>
      </div>
    </div>
  )
}
