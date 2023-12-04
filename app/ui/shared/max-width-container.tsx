type Props = {
  children: React.ReactNode
}

export const MaxWidthContainer: React.FC<Props> = ({ children }) => {
  return <div className="flex max-w-2xl flex-col gap-4 md:gap-8">{children}</div>
}
