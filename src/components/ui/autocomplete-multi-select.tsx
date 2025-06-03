import { useState, useCallback, useMemo, useEffect } from 'react'
import { Command, CommandGroup, CommandItem, CommandList } from './command'
import { Command as CommandPrimitive } from 'cmdk'
import { Badge } from './badge'
import { X } from 'lucide-react'

type BaseOptions = Record<'value' | 'label', string>

/**
 * AutocompleteMultiSelect - A multi-select dropdown component with search functionality
 * 
 * This component provides a searchable multi-select interface where users can:
 * - Select multiple options from a dropdown list
 * - Search/filter options by typing
 * - Remove selected items individually using X buttons
 * - Remove the last selected item using backspace
 * - View selected items as badges
 * 
 * @component
 * @example
 * ```jsx
 * const options = [
 *   { value: 'us', label: 'United States' },
 *   { value: 'ca', label: 'Canada' },
 *   { value: 'uk', label: 'United Kingdom' }
 * ]
 * 
 * const [selectedCountries, setSelectedCountries] = useState(['us', 'ca'])
 * 
 * <AutocompleteMultiSelect
 *   options={options}
 *   value={selectedCountries}
 *   onChange={setSelectedCountries}
 * />
 * ```
 * 
 * @param {Object} props - The component props
 * @param {BaseOptions[]} props.options - Array of selectable options with value and label properties
 * @param {string[]} [props.value=[]] - Array of currently selected option values (controlled)
 * @param {function} props.onChange - Callback function called when selection changes, receives array of selected values
 * 
 * @typedef {Object} BaseOptions
 * @property {string} value - Unique identifier for the option
 * @property {string} label - Display text for the option
 * 
 * @returns {JSX.Element} The rendered multi-select component
 */

export default function AutocompleteMultiSelect({
  options,
  value = [],
  onChange
}: {
  options: BaseOptions[]
  value?: string[]
  onChange: (values: string[]) => void
}) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<BaseOptions[]>([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (value && value.length > 0) {
      const selectedOptions = options.filter((option) => 
        value.includes(option.value)
      )
      setSelected(selectedOptions)
    } else {
      setSelected([])
    }
  }, [value, options])

  const handleUnselect = useCallback((data: BaseOptions) => {
    setSelected((prev) => {
      const newSelected = prev.filter((s) => s.value !== data.value)
      onChange(newSelected.map(item => item.value))
      return newSelected
    })
  }, [onChange])

  const handleSelect = useCallback((data: BaseOptions) => {
    setSelected((prev) => {
      const newSelected = [...prev, data]
      onChange(newSelected.map(item => item.value))
      return newSelected
    })
  }, [onChange])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && selected.length > 0) {
        setSelected((prev) => {
          const newSelected = prev.slice(0, -1)
          onChange(newSelected.map(item => item.value))
          return newSelected
        })
      }
    },
    [selected, onChange]
  )

  const filteredData = useMemo(
    () => options.filter((data) => 
      !selected.some(selectedItem => selectedItem.value === data.value) &&
      data.label.toLowerCase().includes(inputValue.toLowerCase())
    ),
    [options, selected, inputValue]
  )

  return (
    <div className="w-full">
      <Command className="overflow-visible">
        <div className="rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-1">
            {selected.map((data) => {
              return (
                <Badge
                  key={data.value}
                  variant="secondary"
                  className="select-none flex items-center gap-1"
                >
                  <span>{data.label}</span>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-sm w-4 h-4 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleUnselect(data)
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )
            })}
            <CommandPrimitive.Input
              onKeyDown={handleKeyDown}
              onValueChange={setInputValue}
              value={inputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder="Select countries..."
              className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && !!filteredData.length && (
              <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none">
                <CommandGroup className="h-full overflow-auto">
                  {filteredData.map((data) => {
                    return (
                      <CommandItem
                        key={data.value}
                        onMouseDown={(e) => {
                          e.preventDefault()
                        }}
                        onSelect={() => {
                          setInputValue('')
                          handleSelect(data)
                        }}
                        className={'cursor-pointer'}
                      >
                        {data.label}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </div>
            )}
          </CommandList>
        </div>
      </Command>
    </div>
  )
}