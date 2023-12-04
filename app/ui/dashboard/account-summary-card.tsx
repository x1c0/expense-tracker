import { formatCurrency } from '@/app/lib/utils/currency'

type Props = {
  description: string
  amount: number
  currency: string
}

export const AccountSummaryCard: React.FC<Props> = ({ description, amount, currency }: Props) => {
  const formattedAmount = formatCurrency(amount, currency, true)
  return (
    <div className="flex justify-between rounded-xl bg-white px-6 py-4">
      <span className="text-sm">{description}</span>
      <span className="font-serif text-3xl font-bold">{formattedAmount}</span>
    </div>
  )
}
