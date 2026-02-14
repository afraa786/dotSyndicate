import { promises as fs } from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"

const DATA_FILE = path.join(process.cwd(), "data", "content.json")

async function readContent() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading content:", error)
    throw error
  }
}

async function writeContent(data: any) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error("Error writing content:", error)
    throw error
  }
}

function isAuthenticated(request: NextRequest): boolean {
  const authCookie = request.cookies.get("admin_auth")
  return authCookie?.value === "true"
}

export async function GET() {
  try {
    const content = await readContent()
    return NextResponse.json(content)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read content" },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  // Check authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  try {
    const updates = await request.json()
    const content = await readContent()

    // Update blog posts
    if (updates.blogPosts) {
      content.blogPosts = updates.blogPosts
    }

    // Update promo banners
    if (updates.promoBanners) {
      content.promoBanners = updates.promoBanners
    }

    // Update destinations
    if (updates.destinations) {
      content.destinations = updates.destinations
    }

    await writeContent(content)

    return NextResponse.json({ success: true, data: content })
  } catch (error) {
    console.error("Error updating content:", error)
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    )
  }
}
