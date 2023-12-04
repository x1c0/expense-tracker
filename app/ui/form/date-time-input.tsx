type Props = {
  label: string
  inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  errors?: string[]
}

export const DateTimeInput: React.FC<Props> = ({ label, inputProps, errors }) => {
  const errorId = `${label}-error`
  return (
    <div>
      <label htmlFor={label} className="flex flex-col">
        <span className="block pb-2 text-sm">{label}</span>
        <input
          type="datetime-local"
          id={label}
          aria-describedby={errorId}
          className="appearance-none rounded-xl border border-default px-4 py-4 text-right font-bold focus:outline-primary"
          {...inputProps}
        />
      </label>
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

DateTimeInput.displayName = 'DateTimeInput'
