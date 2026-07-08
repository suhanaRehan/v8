'use client'

import { countries } from '@/lib/countries'

// Stores the phone number as a single string like "+91 9876543210" so it
// drops straight into a formData.phone field. Works for any country —
// pick the dial code, then type the local number.

function splitValue(value: string) {
  const trimmed = value.trim()
  const match = trimmed.match(/^(\+\d{1,4})\s*(.*)$/)
  if (match) return { dialCode: match[1], number: match[2] }
  return { dialCode: '+91', number: trimmed }
}

export default function PhoneInput({
  value,
  onChange,
  required = false,
  selectClassName,
  inputClassName,
  wrapperClassName,
  id,
}: {
  value: string
  onChange: (value: string) => void
  required?: boolean
  selectClassName?: string
  inputClassName?: string
  wrapperClassName?: string
  id?: string
}) {
  const { dialCode, number } = splitValue(value)
  const selected = countries.find((c) => c.dialCode === dialCode) || countries.find((c) => c.iso === 'IN')!

  const handleDialCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countries.find((c) => c.iso === e.target.value)
    if (!country) return
    onChange(number ? `${country.dialCode} ${number}` : country.dialCode)
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/[^\d\s-]/g, '')
    onChange(cleaned ? `${selected.dialCode} ${cleaned}` : selected.dialCode)
  }

  return (
    <div className={`flex flex-wrap gap-2 ${wrapperClassName || ''}`}>
      <select
        aria-label="Country code"
        value={selected.iso}
        onChange={handleDialCodeChange}
        className={`flex-shrink-0 ${selectClassName || ''}`}
      >
        {countries.map((c) => (
          <option key={c.iso} value={c.iso}>
            {c.flag} {c.dialCode}
          </option>
        ))}
      </select>
      <input
        id={id}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        value={number}
        onChange={handleNumberChange}
        required={required}
        minLength={required ? 6 : undefined}
        placeholder="Phone number"
        className={`flex-1 min-w-[160px] ${inputClassName || ''}`}
      />
    </div>
  )
}
