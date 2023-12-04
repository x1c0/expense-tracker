export interface Expense {
  id: string
  amount: number
  description: string
  category: string
  date: string
  currency: string
  recipient: string
}

export interface ExpensePayload {
  id?: string
  amount: number
  description: string
  category: string
  currency: string
  recipient?: string
  date: string
}
