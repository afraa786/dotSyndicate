"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Plus } from "lucide-react"

interface BlogPost {
  categories: string[]
  date: string
  title: string
  description: string
  image: string
}

export default function BlogPostEditor({
  posts,
  onChange,
}: {
  posts: BlogPost[]
  onChange: (posts: BlogPost[]) => void
}) {
  const handlePostChange = (index: number, field: string, value: any) => {
    const updated = [...posts]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated)
  }

  const handleCategoryChange = (
    postIndex: number,
    categoryIndex: number,
    value: string
  ) => {
    const updated = [...posts]
    const categories = [...updated[postIndex].categories]
    categories[categoryIndex] = value
    updated[postIndex].categories = categories
    onChange(updated)
  }

  const addCategory = (postIndex: number) => {
    const updated = [...posts]
    updated[postIndex].categories.push("New Category")
    onChange(updated)
  }

  const removeCategory = (postIndex: number, categoryIndex: number) => {
    const updated = [...posts]
    updated[postIndex].categories.splice(categoryIndex, 1)
    onChange(updated)
  }

  const deletePost = (index: number) => {
    const updated = posts.filter((_, i) => i !== index)
    onChange(updated)
  }

  const addPost = () => {
    onChange([
      ...posts,
      {
        categories: ["New"],
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        title: "New Blog Post",
        description: "Enter description here",
        image: "/images/blog/blog-1.jpg",
      },
    ])
  }

  return (
    <div className="space-y-4">
      {posts.map((post, postIndex) => (
        <Card key={postIndex} className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Post {postIndex + 1}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deletePost(postIndex)}
              className="text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <Input
                value={post.title}
                onChange={(e) =>
                  handlePostChange(postIndex, "title", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <Input
                value={post.date}
                onChange={(e) =>
                  handlePostChange(postIndex, "date", e.target.value)
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              value={post.description}
              onChange={(e) =>
                handlePostChange(postIndex, "description", e.target.value)
              }
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image Path
            </label>
            <Input
              value={post.image}
              onChange={(e) =>
                handlePostChange(postIndex, "image", e.target.value)
              }
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Categories
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addCategory(postIndex)}
              >
                <Plus className="h-3 w-3 mr-1" /> Add
              </Button>
            </div>
            <div className="space-y-2">
              {post.categories.map((category, catIndex) => (
                <div key={catIndex} className="flex gap-2">
                  <Input
                    value={category}
                    onChange={(e) =>
                      handleCategoryChange(
                        postIndex,
                        catIndex,
                        e.target.value
                      )
                    }
                    className="flex-1"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCategory(postIndex, catIndex)}
                    className="text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}

      <Button onClick={addPost} variant="outline" className="w-full">
        <Plus className="h-4 w-4 mr-2" /> Add New Blog Post
      </Button>
    </div>
  )
}
