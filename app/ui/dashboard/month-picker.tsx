import { IconArrowLeftSLine, IconArrowRightSLine } from '@/app/ui/icons'

export const MonthPicker: React.FC = () => {
  const currentMonth = new Date().toLocaleString(undefined, {
    month: 'short',
    year: 'numeric',
  })
  return (
    <div className="mx-auto flex w-full max-w-[14rem] items-center justify-between">
      <IconArrowLeftSLine className="h-8 w-8 stroke-[3] opacity-50" />
      <div className="text-xl font-bold">{currentMonth}</div>
      <IconArrowRightSLine className="h-8 w-8 stroke-[3] opacity-50" />
    </div>
  )
}
