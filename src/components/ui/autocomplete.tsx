import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useRef, useState, useEffect, useMemo } from 'react'
import { X } from 'lucide-react'

type Option = {
  label: string
  value: string
  element?: React.ReactNode
}

type AutocompleteProps = {
  options: Option[]
  label?: string
  name: string
  value: string
  onChange: (value: string) => void
  error?: string
}

/**
 * Autocomplete component for selecting options from a list.
 *
 * @component
 * @param {Object[]} options - List of options available for selection.
 * @param {string} options[].label - Display label for the option.
 * @param {string} options[].value - Unique value for the option.
 * @param {React.ReactNode} [options[].element] - Optional custom display element for the option.
 * @param {string} name - Name of the input field.
 * @param {string} value - Currently selected value.
 * @param {Function} onChange - Callback function triggered when value changes.
 * @param {string} [label] - Label for the input field.
 * @param {string} [error] - Error message to display.
 *
 * @example
 * const options = [
 *   { label: "Apple", value: "apple" },
 *   { label: "Banana", value: "banana" },
 *   { label: "Cherry", value: "cherry" }
 * ];
 *
 * <Autocomplete
 *   options={options}
 *   name="fruit"
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   label="Select a fruit"
 *   error={errorMessage}
 * />
 */
export default function Autocomplete({
  options,
  label,
  name,
  value,
  onChange,
  error
}: AutocompleteProps) {
  const searchRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const queryRef = useRef(value || '')
  const [query, setQuery] = useState<string>(value || '')
  const [selectedElement, setSelectedElement] =
    useState<React.ReactNode | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  useEffect(() => {
    const selectedOption = options.find((option) => option.value === value)
    if (selectedOption) {
      queryRef.current = selectedOption.label
      setQuery(selectedOption.label)
      setSelectedElement(selectedOption.element || null)
    }
  }, [value, options])

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.label.toLowerCase().includes(queryRef.current.toLowerCase())
      ),
    [options]
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    queryRef.current = newQuery
    onChange(newQuery)
    setQuery(newQuery)
    setIsOpen(true)
    setHighlightedIndex(-1)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    queryRef.current = ''
    setQuery('')
    onChange('')
    setSelectedElement(null)
    setIsOpen(false)
    setHighlightedIndex(-1)
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  const handleOptionClick = (option: Option) => {
    queryRef.current = option.label
    setQuery(queryRef.current)
    onChange(option.value)
    setSelectedElement(option.element || null)
    setHighlightedIndex(-1)
    setTimeout(() => {
      setIsOpen(false)
    }, 100)
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, option?: Option) => {
    if (option) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleOptionClick(option)
      }
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsOpen(true)
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev))
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault()
      handleOptionClick(filteredOptions[highlightedIndex])
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  const handleBlur = (e: React.FocusEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.relatedTarget)
    ) {
      setIsOpen(false)
    }
  }

  const showClearButton = query.length > 0 || selectedElement

  return (
    <div
      className="relative flex w-full flex-col"
      onBlur={handleBlur}
      ref={containerRef}
    >
      {!!label && (
        <label
          className="mb-1 block text-sm font-medium text-gray-600 dark:text-gray-300"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {selectedElement ? (
          <div className="relative">
            <div
              className="w-full cursor-text rounded-md border bg-white p-2 pr-8"
              onClick={() => searchRef.current?.focus()}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  searchRef.current?.focus()
                }
              }}
              role="button"
              tabIndex={0}
            >
              {selectedElement}
            </div>
            {showClearButton && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={handleClear}
                tabIndex={-1}
                aria-label="Clear selection"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ) : (
          <div className="relative">
            <Input
              className="text-primary pr-8"
              aria-autocomplete="list"
              aria-controls="autocomplete-options"
              aria-expanded={isOpen}
              id={name}
              onChange={handleInputChange}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              placeholder="Search"
              ref={searchRef}
              role="combobox"
              type="text"
              value={query}
            />
            {showClearButton && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={handleClear}
                tabIndex={-1}
                aria-label="Clear input"
              >
                <X size={16} />
              </button>
            )}
          </div>
        )}
      </div>
      {!!isOpen && (
        <div
          className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border bg-background shadow-md"
          id="autocomplete-options"
          role="listbox"
        >
          <ScrollArea className="h-40 w-full">
            <div className="p-1">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    aria-selected={highlightedIndex === index}
                    className={`cursor-pointer rounded-sm px-3 py-2 text-sm hover:bg-gray-100/30 ${
                      highlightedIndex === index ? 'bg-gray-100' : ''
                    }`}
                    key={option.value}
                    onClick={() => handleOptionClick(option)}
                    onKeyDown={(e) => handleKeyDown(e, option)}
                    role="option"
                    tabIndex={0}
                  >
                    {option.element || option.label}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-gray-500">
                  No results
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      )}
      {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
