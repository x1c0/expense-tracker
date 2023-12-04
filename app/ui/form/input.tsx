type Props = {
  label: string
  inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  defaultValue?: string
  errors?: string[]
}

export const Input: React.FC<Props> = ({ label, inputProps, defaultValue, errors }) => {
  const errorId = `${label}-error`
  return (
    <div>
      <label htmlFor={label} className="block pb-2 text-sm">
        {label}
      </label>
      <input
        id={label}
        defaultValue={defaultValue}
        aria-describedby={errorId}
        className="block w-full rounded-xl border border-default bg-white px-4 py-4 font-bold focus:outline-primary"
        {...inputProps}
      />
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

Input.displayName = 'Input'
