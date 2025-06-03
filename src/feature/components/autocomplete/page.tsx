import Autocomplete from '@/components/ui/autocomplete'
import AutocompleteMultiSelect from '@/components/ui/autocomplete-multi-select'
import { useState } from 'react'

const addresses = [
  {
    label: '4439 Gale St, Livermore, CA 94550',
    value: '4439 Gale St, Livermore, CA 94550'
  },
  {
    label: '125 Maple Ave, Boston, MA 02108',
    value: '125 Maple Ave, Boston, MA 02108'
  },
  {
    label: '902 Cedar Dr, Austin, TX 78701',
    value: '902 Cedar Dr, Austin, TX 78701'
  },
  {
    label: '331 Oak St, Denver, CO 80203',
    value: '331 Oak St, Denver, CO 80203'
  },
  {
    label: '554 Pine St, Seattle, WA 98101',
    value: '554 Pine St, Seattle, WA 98101'
  },
  {
    label: '77 Birch Rd, Miami, FL 33101',
    value: '77 Birch Rd, Miami, FL 33101'
  },
  {
    label: '621 Spruce Ln, Chicago, IL 60601',
    value: '621 Spruce Ln, Chicago, IL 60601'
  },
  {
    label: '990 Willow Blvd, Dallas, TX 75201',
    value: '990 Willow Blvd, Dallas, TX 75201'
  },
  {
    label: '128 Redwood Ct, Phoenix, AZ 85001',
    value: '128 Redwood Ct, Phoenix, AZ 85001'
  },
  {
    label: '341 Aspen Way, San Diego, CA 92101',
    value: '341 Aspen Way, San Diego, CA 92101'
  },
  {
    label: '222 Chestnut St, Atlanta, GA 30301',
    value: '222 Chestnut St, Atlanta, GA 30301'
  },
  {
    label: '815 Palm Ave, Orlando, FL 32801',
    value: '815 Palm Ave, Orlando, FL 32801'
  },
  {
    label: '457 Magnolia St, Portland, OR 97201',
    value: '457 Magnolia St, Portland, OR 97201'
  },
  {
    label: '731 Sycamore Cir, New York, NY 10001',
    value: '731 Sycamore Cir, New York, NY 10001'
  },
  {
    label: '872 Hickory St, Philadelphia, PA 19101',
    value: '872 Hickory St, Philadelphia, PA 19101'
  },
  {
    label: '643 Dogwood Ln, Las Vegas, NV 89101',
    value: '643 Dogwood Ln, Las Vegas, NV 89101'
  },
  {
    label: '333 Elmwood Dr, San Jose, CA 95101',
    value: '333 Elmwood Dr, San Jose, CA 95101'
  },
  {
    label: '502 Poplar St, Nashville, TN 37201',
    value: '502 Poplar St, Nashville, TN 37201'
  },
  {
    label: '125 Bayberry Ct, Houston, TX 77001',
    value: '125 Bayberry Ct, Houston, TX 77001'
  },
  {
    label: '99 Cypress Ln, Charlotte, NC 28201',
    value: '99 Cypress Ln, Charlotte, NC 28201'
  },
  {
    label: '711 Fern Ave, Columbus, OH 43201',
    value: '711 Fern Ave, Columbus, OH 43201'
  },
  {
    label: '814 Beech St, Detroit, MI 48201',
    value: '814 Beech St, Detroit, MI 48201'
  },
  {
    label: '990 Ivy Dr, Indianapolis, IN 46201',
    value: '990 Ivy Dr, Indianapolis, IN 46201'
  },
  {
    label: '403 Acorn Rd, Minneapolis, MN 55401',
    value: '403 Acorn Rd, Minneapolis, MN 55401'
  },
  {
    label: '622 Olive St, St. Louis, MO 63101',
    value: '622 Olive St, St. Louis, MO 63101'
  },
  {
    label: '781 Walnut Ct, Kansas City, MO 64101',
    value: '781 Walnut Ct, Kansas City, MO 64101'
  },
  {
    label: '332 Marigold Ln, Memphis, TN 38101',
    value: '332 Marigold Ln, Memphis, TN 38101'
  },
  {
    label: '445 Rosewood Dr, Raleigh, NC 27601',
    value: '445 Rosewood Dr, Raleigh, NC 27601'
  },
  {
    label: '277 Juniper Ave, Tampa, FL 33601',
    value: '277 Juniper Ave, Tampa, FL 33601'
  },
  {
    label: '198 Violet St, Oklahoma City, OK 73101',
    value: '198 Violet St, Oklahoma City, OK 73101'
  }
]

const COUNTRIES = [
  {
    value: 'us',
    label: 'United States'
  },
  {
    value: 'uk',
    label: 'United Kingdom'
  },
  {
    value: 'ca',
    label: 'Canada'
  },
  {
    value: 'au',
    label: 'Australia'
  },
  {
    value: 'fr',
    label: 'France'
  },
  {
    value: 'de',
    label: 'Germany'
  },
  {
    value: 'jp',
    label: 'Japan'
  },
  {
    value: 'br',
    label: 'Brazil'
  }
]

export default function AutocompletePage() {
  const [autocompleteValue, setAutocompleteValue] = useState('')
  const [selectedValues, setSelectedValues] = useState(['us'])

  const handleAutocompleteChange = (value: string) => {
    setAutocompleteValue(value)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold text-dark">
        Autocomplete Components
      </h1>

      <div className="flex flex-col w-fit max-w-5xl space-y-8">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Default</h2>
          <div className="flex flex-wrap gap-4">
            <Autocomplete
              name="address"
              value={autocompleteValue}
              onChange={handleAutocompleteChange}
              label="Street Address"
              options={addresses}
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Group Selection</h2>
          <div className="flex flex-wrap gap-4">
            <AutocompleteMultiSelect 
              options={COUNTRIES}
              value={selectedValues}
              onChange={setSelectedValues}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
