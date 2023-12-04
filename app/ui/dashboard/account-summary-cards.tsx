import { fetchAccountSummaryData } from '@/app/lib/data'
import { AccountSummaryCard } from './account-summary-card'

export default async function AccountSummaryCardsWrapper() {
  const { currentMonthtotalSpent, currentMonthAvgDailySpending, currentDaySpent } = await fetchAccountSummaryData()

  return (
    <div className="flex flex-col gap-4">
      <AccountSummaryCard description="Total Spent" amount={currentMonthtotalSpent} currency="CHF" />
      <AccountSummaryCard description="Avg. Daily Spend" amount={currentMonthAvgDailySpending} currency="CHF" />
      <AccountSummaryCard description="Spent Today" amount={currentDaySpent} currency="CHF" />
    </div>
  )
}
