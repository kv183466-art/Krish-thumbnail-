"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        {/* Top Banner */}
        <div className="bg-blue-600 text-center py-2 text-sm">
          Welcome to KrishThumbnail.com - Professional YouTube Thumbnail Creator! AI tools coming soon!
          <Button
            variant="outline"
            size="sm"
            className="ml-2 text-xs bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
          >
            GET EARLY ACCESS
          </Button>
        </div>

        {/* Navigation */}
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">KRISH THUMBNAIL</div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="/gallery" className="hover:text-blue-400 transition-colors">
              Gallery
            </a>
            <a href="/creator" className="hover:text-blue-400 transition-colors">
              Creator
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-blue-400" asChild>
              <a href="/admin">Admin</a>
            </Button>
            <Button variant="ghost" className="text-white hover:text-blue-400">
              Log in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Signup</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Boost your <br />
              Social Media with <br />
              <span className="text-blue-400">Top Creator's</span> <br />
              Template
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              Join millions of creators who use KrishThumbnail.com templates to create stunning YouTube thumbnails,
              social media posts, and more. Start creating professional content today with our advanced thumbnail
              editor.
            </p>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                💼 Business
              </Badge>
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                💰 Finance
              </Badge>
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                🎮 Gaming
              </Badge>
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                💪 Motivation
              </Badge>
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                🏋️ Fitness
              </Badge>
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                🍳 Cooking
              </Badge>
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                🎵 Music
              </Badge>
              <Badge className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-3 py-1 text-sm border border-gray-700">
                Browse Other Categories
              </Badge>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/creator">Create YouTube Thumbnail</a>
            </Button>
          </div>

          {/* Featured Thumbnail Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-lg p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="text-white text-4xl font-bold mb-2">मेरे जैसा</div>
                <div className="text-white text-6xl font-black mb-2">PUBLIC SPEAKER</div>
                <div className="text-white text-2xl mb-2">कैसे बने</div>
                <div className="text-yellow-300 text-3xl font-bold mb-2">11 STRATEGIES</div>
                <div className="text-white text-lg">2 Million+ Views</div>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-2">
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube URL Editor Section */}
      <section className="bg-gray-900 py-16 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Edit Any YouTube Video Thumbnail</h2>
            <p className="text-gray-400 mb-8">
              Paste any YouTube video URL and edit its thumbnail with KrishThumbnail.com's professional editor
            </p>

            <Card className="bg-gray-800 border-gray-700 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="Paste YouTube video URL here (e.g., https://youtube.com/watch?v=...)"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 h-12"
                    id="youtube-url"
                  />
                </div>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 h-12"
                  onClick={() => {
                    const urlInput = document.getElementById("youtube-url") as HTMLInputElement
                    const url = urlInput?.value
                    if (url && (url.includes("youtube.com") || url.includes("youtu.be"))) {
                      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
                      if (videoId) {
                        window.location.href = `/creator?video=${videoId}`
                      }
                    } else {
                      alert("Please enter a valid YouTube URL")
                    }
                  }}
                >
                  Edit Thumbnail
                </Button>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                <p>✓ Extract existing thumbnail • ✓ Professional editing tools • ✓ Download high-quality result</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* YouTube Thumbnails Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative h-48 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold mb-1">PUBLIC SPEAKER</div>
                <div className="text-lg">11 STRATEGIES</div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-black mb-1">STOP</div>
                <div className="text-lg font-bold">st-tuttering</div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-xl font-black">MAXING</div>
                <div className="text-sm">SERENE SCALA GALAC</div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-lg font-bold mb-1">START BUYING</div>
                <div className="text-2xl font-black text-yellow-300">FREEDOM</div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-lg font-bold mb-1">YEARLY H</div>
                <div className="text-4xl font-black text-yellow-400">20</div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative h-48 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-lg font-bold">STEP</div>
                <div className="text-2xl font-black">1K</div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-black">JOB</div>
                <div className="text-lg font-bold">करेंगे या</div>
                <div className="text-2xl font-black">BUSINESS</div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-blue-500 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="h-48 flex flex-col items-center justify-center text-white p-6">
              <div className="text-4xl mb-4">🎬</div>
              <div className="text-lg font-bold text-center mb-2">Create Your Own</div>
              <div className="text-sm text-center opacity-90">Start with a blank canvas</div>
              <Button className="mt-4 bg-white text-blue-600 hover:bg-gray-100" size="sm" asChild>
                <a href="/creator">Create Now</a>
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 bg-transparent"
            asChild
          >
            <a href="/gallery">View All Templates</a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Amazing YouTube Thumbnails?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of creators who trust KrishThumbnail.com for their thumbnail needs. Start creating
            professional YouTube thumbnails in minutes with our easy-to-use editor and professional templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
              <a href="/creator">Start Creating YouTube Thumbnails</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
              asChild
            >
              <a href="/gallery">Browse Templates</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
