'use client'

import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'

import { updateExpense } from '@/app/lib/actions'
import { Expense } from '@/app/lib/definitions'
import { convertFrom_UTC_ISO } from '@/app/lib/utils/dates'
import { Input } from '@/app/ui/form/input'
import { DateTimeInput } from '../form/date-time-input'
import { LargeInput } from '../form/large-input'
import { Select } from '../form/select'
import { PrimaryButton } from '../shared/primary-button'
import { SecondaryButton } from '../shared/secondary-button'
import { DeleteExpenseButton } from './buttons'
import { CategoryPicker } from './category-picker'

type Props = {
  categories: string[]
  currencies: string[]
  expense: Expense
}

export const EditForm: React.FC<Props> = ({ categories, currencies, expense }) => {
  const initialState = { message: null, errors: {} }
  const updateExpenseWithId = updateExpense.bind(null, expense.id)
  const [state, formAction] = useFormState(updateExpenseWithId, initialState)
  const currencyOptions = currencies.map((currency: string) => ({ label: currency, value: currency }))
  const expenseDate = convertFrom_UTC_ISO(expense.date)
  const router = useRouter()

  return (
    <>
      <form action={formAction} className="flex flex-col gap-5">
        <LargeInput
          label="Amount"
          inputProps={{ name: 'amount', type: 'number', defaultValue: expense.amount }}
          errors={state.errors?.amount}
        />
        <Input
          label="Expense Description"
          inputProps={{ name: 'description', type: 'text', defaultValue: expense.description }}
          errors={state.errors?.description}
        />
        <CategoryPicker categories={categories} label="Categories" name="category" defaultValue={expense.category} />
        <DateTimeInput
          label="Date"
          inputProps={{ name: 'date', defaultValue: expenseDate }}
          errors={state.errors?.date}
        />
        <Select
          label="Currency"
          selectProps={{ name: 'currency' }}
          options={currencyOptions}
          defaultValue={expense.currency}
        />
        <Input label="Recipient" inputProps={{ name: 'recipient', type: 'text', defaultValue: expense.recipient }} />
        <div className="mt-4 flex w-full flex-col justify-between gap-4 md:flex-row">
          <PrimaryButton type="submit" className="order-1 md:order-2">
            Update
          </PrimaryButton>
          <SecondaryButton
            type="button"
            className="order-2 md:order-1"
            onClick={() => router.push('/dashboard/expenses')}
          >
            Cancel
          </SecondaryButton>
        </div>
      </form>
      <DeleteExpenseButton id={expense.id} />
    </>
  )
}
