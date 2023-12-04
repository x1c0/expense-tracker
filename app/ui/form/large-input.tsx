type Props = {
  label: string
  inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  errors?: string[]
}

export const LargeInput: React.FC<Props> = ({ label, inputProps, errors }) => {
  const errorId = `${label}-error`
  return (
    <div className="relative">
      <div className="rounded-xl bg-white py-6">
        <label htmlFor={label} className="flex flex-col">
          <span className="absolute left-4 top-4 text-sm">{label}</span>
          <input
            id={label}
            step={0.01}
            aria-describedby={errorId}
            className="appearance-none pr-6 text-right font-serif text-4xl font-bold focus:outline-none"
            {...inputProps}
          />
        </label>
      </div>
      {errors && errors.length > 0 && (
        <div id={errorId} aria-live="polite" aria-atomic="true">
          {errors.map((error, index) => (
            <p key={index} className="mt-2 text-sm text-red-500">
              {error}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

LargeInput.displayName = 'LargeInput'
