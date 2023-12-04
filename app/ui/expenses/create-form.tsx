'use client'

import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'

import { createExpense } from '@/app/lib/actions'
import { getCurrentLocalDateTimeForInput } from '@/app/lib/utils/dates'
import { Input } from '@/app/ui/form/input'
import { DateTimeInput } from '../form/date-time-input'
import { LargeInput } from '../form/large-input'
import { Select } from '../form/select'
import { PrimaryButton } from '../shared/primary-button'
import { SecondaryButton } from '../shared/secondary-button'
import { CategoryPicker } from './category-picker'

type Props = {
  categories: string[]
  currencies: string[]
}

export const CreateForm: React.FC<Props> = ({ categories, currencies }) => {
  const initialState = { message: null, errors: {} }
  const [state, formAction] = useFormState(createExpense, initialState)
  const currentDateTime = getCurrentLocalDateTimeForInput()
  const currencyOptions = currencies.map((currency: string) => ({ label: currency, value: currency }))
  const router = useRouter()

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <LargeInput label="Amount" inputProps={{ name: 'amount', type: 'number' }} errors={state.errors?.amount} />
      <Input
        label="Expense Description"
        inputProps={{ name: 'description', type: 'text' }}
        errors={state.errors?.description}
      />
      <CategoryPicker categories={categories} label="Categories" name="category" />
      <DateTimeInput
        label="Date"
        inputProps={{ name: 'date', defaultValue: currentDateTime }}
        errors={state.errors?.date}
      />
      <Select label="Currency" selectProps={{ name: 'currency' }} options={currencyOptions} />
      <Input label="Recipient" inputProps={{ name: 'recipient', type: 'text' }} />
      <div className="mt-4 flex w-full flex-col justify-between gap-4 md:flex-row">
        <PrimaryButton type="submit" className="order-1 md:order-2">
          Confirm
        </PrimaryButton>
        <SecondaryButton type="button" className="order-2 md:order-1" onClick={() => router.push('/dashboard')}>
          Cancel
        </SecondaryButton>
      </div>
    </form>
  )
}
