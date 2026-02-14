"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Plus } from "lucide-react"

interface PromoBanner {
  tag: string
  title: string
  subtitle: string
  imagePath: string
}

export default function PromoBannerEditor({
  banners,
  onChange,
}: {
  banners: PromoBanner[]
  onChange: (banners: PromoBanner[]) => void
}) {
  const handleBannerChange = (index: number, field: string, value: string) => {
    const updated = [...banners]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated)
  }

  const deleteBanner = (index: number) => {
    const updated = banners.filter((_, i) => i !== index)
    onChange(updated)
  }

  const addBanner = () => {
    onChange([
      ...banners,
      {
        tag: "NEW",
        title: "New Promotion",
        subtitle: "Add promotion details here",
        imagePath: "/images/promos/hsbc.jpg",
      },
    ])
  }

  return (
    <div className="space-y-4">
      {banners.map((banner, index) => (
        <Card key={index} className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Banner {index + 1}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteBanner(index)}
              className="text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tag
              </label>
              <Input
                value={banner.tag}
                onChange={(e) =>
                  handleBannerChange(index, "tag", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <Input
                value={banner.title}
                onChange={(e) =>
                  handleBannerChange(index, "title", e.target.value)
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtitle
            </label>
            <Textarea
              value={banner.subtitle}
              onChange={(e) =>
                handleBannerChange(index, "subtitle", e.target.value)
              }
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image Path
            </label>
            <Input
              value={banner.imagePath}
              onChange={(e) =>
                handleBannerChange(index, "imagePath", e.target.value)
              }
            />
          </div>
        </Card>
      ))}

      <Button onClick={addBanner} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" /> Add New Banner
      </Button>
    </div>
  )
}
