import { Expense } from '@/app/lib/definitions'
import { ExpenseTableItem } from './expense-table-item'

type Props = {
  expenses: Expense[]
}

export const ExpenseTable: React.FC<Props> = async ({ expenses }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-line">
          <th className="px-2 py-3 text-left text-xs font-normal"> </th>
          <th className="px-3 py-3 text-left text-xs font-normal">Description</th>
          <th className="hidden px-3 py-3 text-left text-xs font-normal md:table-cell">Recipient</th>
          <th className="px-3 py-3 text-left text-xs font-normal">Date</th>
          <th className="px-4 py-3 text-right text-xs font-normal">Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} className="hover:bg-table-row-hover">
            <ExpenseTableItem expense={expense} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}
