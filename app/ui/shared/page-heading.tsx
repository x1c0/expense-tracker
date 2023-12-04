type Props = {
  title: string
}

export const Heading: React.FC<Props> = ({ title }) => {
  return <h1 className="inline-block font-serif text-xl font-bold text-primary md:text-3xl">{title}</h1>
}
