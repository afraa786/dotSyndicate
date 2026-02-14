"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2, Plus } from "lucide-react"

interface Destination {
  name: string
  imagePath: string
}

export default function DestinationEditor({
  destinations,
  onChange,
}: {
  destinations: Destination[]
  onChange: (destinations: Destination[]) => void
}) {
  const handleDestinationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...destinations]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated)
  }

  const deleteDestination = (index: number) => {
    const updated = destinations.filter((_, i) => i !== index)
    onChange(updated)
  }

  const addDestination = () => {
    onChange([
      ...destinations,
      {
        name: "New Destination",
        imagePath: "/images/dubai.jpg",
      },
    ])
  }

  return (
    <div className="space-y-4">
      {destinations.map((destination, index) => (
        <Card key={index} className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">
              Destination {index + 1}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteDestination(index)}
              className="text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                value={destination.name}
                onChange={(e) =>
                  handleDestinationChange(index, "name", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image Path
              </label>
              <Input
                value={destination.imagePath}
                onChange={(e) =>
                  handleDestinationChange(index, "imagePath", e.target.value)
                }
              />
            </div>
          </div>
        </Card>
      ))}

      <Button onClick={addDestination} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" /> Add New Destination
      </Button>
    </div>
  )
}
