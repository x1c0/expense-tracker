import { deleteExpense } from '@/app/lib/actions'
import { IconDeleteBin } from '../icons'

export function DeleteExpenseButton({ id }: { id: string }) {
  const deleteExpenseWithId = deleteExpense.bind(null, id)

  return (
    <form action={deleteExpenseWithId}>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-4 rounded-xl border-2 border-red-200 bg-red-200 px-6 py-2.5 text-lg focus:outline-default md:max-w-xs"
      >
        <IconDeleteBin className="h-6 w-6" />
        Delete
      </button>
    </form>
  )
}
