import Image from 'next/image'

import { PrimaryLinkButton } from './ui/shared/primary-link-button'

export default function Page() {
  return (
    <main className="flex h-screen justify-center bg-[#fefefe]">
      <div className="flex flex-col items-center gap-8 px-8 py-20">
        <h1 className="text-center font-serif text-2xl">Welcome to Your Ultimate Expense Tracker!</h1>
        <Image
          src="/splash.webp"
          className="object-contain"
          width={500}
          height={500}
          priority={false}
          alt="man holding a calculator with a wallet in the background"
        />

        <PrimaryLinkButton href="/dashboard">Let&apos;s Get Started</PrimaryLinkButton>
      </div>
    </main>
  )
}
