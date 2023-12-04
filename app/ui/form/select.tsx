type SelectOption = {
  value: string
  label: string
}

type Props = {
  label: string
  options: SelectOption[]
  selectProps: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
  defaultValue?: string
}

export const Select: React.FC<Props> = ({ label, options, selectProps, defaultValue }) => {
  return (
    <div>
      <label htmlFor={label} className="block pb-2 text-sm">
        {label}
      </label>
      <select
        id={label}
        defaultValue={defaultValue}
        className="block w-full rounded-xl border border-default bg-white px-4 py-4 font-bold focus:outline-primary"
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.displayName = 'Select'
