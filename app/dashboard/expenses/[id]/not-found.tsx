import { NavigationLink } from '@/app/ui/shared/navigation-link'

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <h2 className="text-xl font-semibold text-primary">Oops! Page Not Found</h2>
      <p>We&apos;re sorry, but the expense you&apos;re looking for could not be found.</p>
      <NavigationLink href="/dashboard/expenses">Return to Expense List</NavigationLink>
    </div>
  )
}
