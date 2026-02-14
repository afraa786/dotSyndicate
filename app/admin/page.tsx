"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogPostEditor from "@/components/admin/blog-post-editor"
import PromoBannerEditor from "@/components/admin/promo-banner-editor"
import DestinationEditor from "@/components/admin/destination-editor"

interface Content {
  blogPosts: any[]
  promoBanners: any[]
  destinations: any[]
}

export default function AdminDashboard() {
  const router = useRouter()
  const [content, setContent] = useState<Content | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    try {
      const response = await fetch("/api/content")
      if (response.ok) {
        const data = await response.json()
        setContent(data)
      }
    } catch (error) {
      console.error("Failed to fetch content:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!content) return

    setSaving(true)
    try {
      const response = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      })

      if (response.ok) {
        alert("Changes saved successfully!")
      } else {
        alert("Failed to save changes")
      }
    } catch (error) {
      alert("Error saving changes")
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/admin/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {content ? (
          <div className="space-y-6">
            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                <TabsTrigger value="promos">Promo Banners</TabsTrigger>
                <TabsTrigger value="destinations">Destinations</TabsTrigger>
              </TabsList>

              <TabsContent value="blog" className="space-y-4">
                <BlogPostEditor
                  posts={content.blogPosts}
                  onChange={(posts) =>
                    setContent({ ...content, blogPosts: posts })
                  }
                />
              </TabsContent>

              <TabsContent value="promos" className="space-y-4">
                <PromoBannerEditor
                  banners={content.promoBanners}
                  onChange={(banners) =>
                    setContent({ ...content, promoBanners: banners })
                  }
                />
              </TabsContent>

              <TabsContent value="destinations" className="space-y-4">
                <DestinationEditor
                  destinations={content.destinations}
                  onChange={(destinations) =>
                    setContent({ ...content, destinations })
                  }
                />
              </TabsContent>
            </Tabs>

            <div className="flex gap-3">
              <Button onClick={handleSave} disabled={saving} size="lg">
                {saving ? "Saving..." : "Save All Changes"}
              </Button>
              <Button
                onClick={fetchContent}
                variant="outline"
                disabled={saving}
                size="lg"
              >
                Discard Changes
              </Button>
            </div>
          </div>
        ) : (
          <Card className="p-8 text-center">
            <p className="text-gray-500">Failed to load content</p>
          </Card>
        )}
      </div>
    </div>
  )
}
