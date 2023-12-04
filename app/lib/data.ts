import { Expense } from './definitions'
import { convertFrom_UTC_ISO } from './utils/dates'

export async function fetchCurrencies(): Promise<string[]> {
  try {
    const response = await fetch('http://localhost:3030/currencies', { cache: 'no-store' })
    const currencies = await response.json()
    return currencies
  } catch (error) {
    console.error('fetchCurrencies', error)
    throw new Error('Failed to fetch currencies.')
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await fetch('http://localhost:3030/categories', { cache: 'no-store' })
    const categories = await response.json()
    return categories
  } catch (error) {
    console.error('fetchCategories', error)
    throw new Error('Failed to fetch categories.')
  }
}

export async function fetchAccountSummaryData() {
  try {
    // json-server does not support aggregation queries like calculating the total amount directly through its API
    const currentMonthtotalSpent = 1250
    const currentMonthAvgDailySpending = 17.4
    const currentDaySpent = 60

    return {
      currentMonthtotalSpent,
      currentMonthAvgDailySpending,
      currentDaySpent,
    }
  } catch (error) {
    console.error('fetchSummaryLabelsData', error)
    throw new Error('Failed to fetch account summary data.')
  }
}

export type ExpenseSearchParams = {
  limit?: string
  page?: string
}

export type FilteredExpensesTable = {
  expenses: Expense[]
  totalPages: number
}

export async function fetchFilteredExpenses(searchParams: ExpenseSearchParams): Promise<FilteredExpensesTable> {
  try {
    const ITEMS_PER_PAGE = 10 //default from json-server
    const limit = searchParams?.limit ? parseInt(searchParams.limit, 10) : undefined
    const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1
    let url = `http://localhost:3030/expenses`
    const params = {
      _sort: 'date', // by default sort by date
      _order: 'desc', // by default order by most recent expense
      _limit: limit && limit > 0 ? limit : null,
      _page: page > 0 ? page : null,
    }
    const query = Object.entries(params)
      .filter(([, value]) => value !== null)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    if (query) {
      url += `?${query}`
    }
    const response = await fetch(url)
    const expenses = await response.json()
    expenses.forEach((expense: Expense) => {
      expense.date = convertFrom_UTC_ISO(expense.date)
    })

    const totalCount = response.headers.get('X-Total-Count')
    const totalNumber = totalCount ? parseInt(totalCount, 10) : 0
    const totalPages = Math.ceil(totalNumber / ITEMS_PER_PAGE)
    return {
      expenses,
      totalPages,
    }
  } catch (error) {
    console.error('Error fetching expenses:', error)
    throw new Error('Failed to fetch expenses.')
  }
}

export async function fetchRecentExpenses(): Promise<FilteredExpensesTable> {
  const searchParams = { limit: '5' }
  return fetchFilteredExpenses(searchParams)
}

export async function fetchExpense(id: string): Promise<Expense | null> {
  try {
    const response = await fetch(`http://localhost:3030/expenses/${id}`)
    const expense = await response.json()
    if (Object.keys(expense).length === 0) {
      return null
    }
    return expense
  } catch (error) {
    console.error('Error fetching expense:', error)
    return null
  }
}
