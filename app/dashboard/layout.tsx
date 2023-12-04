import NavMenu from '@/app/ui/dashboard/nav-menu'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <NavMenu />
      <main className="px-5 py-6 md:container md:mx-auto">{children}</main>
    </div>
  )
}
