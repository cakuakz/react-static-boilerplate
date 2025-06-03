import { useState, useCallback, useMemo } from 'react'
import { Command, CommandGroup, CommandItem, CommandList } from './command'
import { Command as CommandPrimitive } from 'cmdk'
import { Badge } from './badge'
import { X } from 'lucide-react'

type BaseOptions = Record<'value' | 'label', string>

export default function AutocompleteMultiSelect({
  options
}: {
  options: BaseOptions[]
}) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<BaseOptions[]>([options[1]])
  const [inputValue, setInputValue] = useState('')

  const handleUnselect = useCallback((data: BaseOptions) => {
    setSelected((prev) => prev.filter((s) => s.value !== data.value))
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && selected.length > 0) {
        setSelected((prev) => prev.slice(0, -1))
      }
    },
    [selected]
  )

  const filteredData = useMemo(
    () => options.filter((data) => !selected.includes(data)),
    [options, selected]
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
                  className="select-none"
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
                          setSelected((prev) => [...prev, data])
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
