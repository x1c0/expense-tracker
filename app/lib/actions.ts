'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { ExpensePayload } from './definitions'
import { convertTo_UTC_ISO } from './utils/dates'

const recipientSchema = z
  .string()
  .min(2, { message: 'Recipient name must be at least 2 characters.' })
  .max(50, { message: 'Recipient name must be no more than 50 characters.' })
  .or(z.string().length(0))

const formSchema = z
  .object({
    id: z.string(),
    amount: z.coerce.number().gt(0, { message: 'The amount must be more than 0.' }),
    description: z.string().min(3, { message: 'Expense description must be at least 3 characters.' }),
    category: z.string(),
    date: z.string().refine((data) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(data), {
      message: 'The date is required.',
    }),
    currency: z.string().length(3, { message: 'Currency must be a 3-letter code.' }),
    recipient: recipientSchema.optional(),
  })
  .omit({ id: true })

export type State = {
  errors?: {
    amount?: string[]
    date?: string[]
    description?: string[]
  }
  message?: string | null
}

export async function createExpense(prevState: State, formData: FormData): Promise<State> {
  const rawFormData = {
    amount: formData.get('amount'),
    description: formData.get('description'),
    category: formData.get('category'),
    date: formData.get('date'),
    currency: formData.get('currency'),
    recipient: formData.get('recipient'),
  }
  const validatedFields = formSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create expense.',
    }
  }

  const { amount, description, category, currency, recipient } = validatedFields.data
  const date = convertTo_UTC_ISO(validatedFields.data.date)
  const payload: ExpensePayload = { amount, description, category, currency, recipient, date }
  try {
    const response = await fetch('http://localhost:3030/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('Failed to create expense.')
    }
  } catch (error) {
    console.error('Error creating expense:', error)
    return {
      message: 'Failed to create expense.',
    }
  }
  revalidatePath('/dashboard')
  redirect('/dashboard')
}

export async function updateExpense(id: string, prevState: State, formData: FormData): Promise<State> {
  const rawFormData = {
    amount: formData.get('amount'),
    description: formData.get('description'),
    category: formData.get('category'),
    date: formData.get('date'),
    currency: formData.get('currency'),
    recipient: formData.get('recipient'),
  }

  const validatedFields = formSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to update expense.',
    }
  }

  const { amount, description, category, currency, recipient } = validatedFields.data
  const date = convertTo_UTC_ISO(validatedFields.data.date)
  const payload: ExpensePayload = { id, amount, description, category, currency, recipient, date }
  try {
    const response = await fetch(`http://localhost:3030/expenses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error('Failed to update expense.')
    }
  } catch (error) {
    console.error('Error updating expense:', error)
    return {
      message: 'Failed to update expense.',
    }
  }
  revalidatePath('/dashboard/expenses')
  redirect('/dashboard/expenses')
}

export async function deleteExpense(id: string) {
  try {
    const response = await fetch(`http://localhost:3030/expenses/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Failed to delete expense.')
    }
  } catch (error) {
    console.error('Error deleting expense:', error)
    return {
      message: 'Failed to delete expense.',
    }
  }
  revalidatePath('/dashboard/expenses')
  redirect('/dashboard/expenses')
}
