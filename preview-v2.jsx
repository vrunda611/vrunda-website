import React from 'react';
import { FileText, Link2, Cookie, Cat, Heart, Gem, Gamepad2, Mountain, Smile, Leaf, Sprout, Cherry, Cake } from 'lucide-react';

export default function VrundaPortfolio() {
  return (
    <div className="min-h-screen p-10" style={{ backgroundColor: '#F6F1EB', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <header className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs text-gray-400 flex-shrink-0">
            avatar.png
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1" style={{ color: '#4A90D9' }}>
              Hi, I'm Vrunda!
            </h1>
            <p className="text-gray-600 text-lg">
              Product Designer 🏔️, Cozy gamer 🎮, Cake fiend 🍰
            </p>
          </div>
        </header>

        {/* Intro */}
        <p className="text-lg mb-12 text-gray-800">
          Currently designing AI-native experiences at{' '}
          <a href="#" className="font-medium" style={{ color: '#4A90D9' }}>Fieldguide</a>.
        </p>

        {/* Main content grid */}
        <div className="grid grid-cols-2 gap-12 mb-12">

          {/* Work section */}
          <section>
            <h2 className="flex items-center gap-2 mb-5 text-lg font-semibold" style={{ color: '#4A90D9' }}>
              ✏️ Work
            </h2>
            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-bold text-gray-800">Fieldguide</span>
                <span className="font-mono text-sm text-gray-500">Product Designer</span>
                <span className="font-mono text-sm text-gray-400">2025 – now</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-bold text-gray-800">Willow</span>
                <span className="font-mono text-sm text-gray-500">Product Designer</span>
                <span className="font-mono text-sm text-gray-400">2022 – 2025</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-bold text-gray-800">Fifth Tribe</span>
                <span className="font-mono text-sm text-gray-500">UI/UX Designer</span>
                <span className="font-mono text-sm text-gray-400">2021 – 2022</span>
              </div>
            </div>
          </section>

          {/* Fun section */}
          <section>
            <h2 className="flex items-center gap-2 mb-5 text-lg font-semibold" style={{ color: '#D4A857' }}>
              🥸 Fun
            </h2>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-1.5 text-gray-800 font-mono text-sm hover:text-blue-500">
                Plantorium: A cozy game <span className="text-xs">↗</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 text-gray-800 font-mono text-sm hover:text-blue-500">
                My illustrations <span className="text-xs">↗</span>
              </a>
            </div>
          </section>
        </div>

        {/* Bottom links */}
        <div className="flex gap-6 mb-14">
          <a href="#" className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-500">
            <FileText size={18} />
            Resume
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-800 font-medium hover:text-blue-500">
            <Link2 size={18} />
            Linkedin
          </a>
        </div>

        {/* Footer icons with Lucide */}
        <div className="flex justify-center flex-wrap gap-6 pt-5 opacity-40">
          <Cookie size={28} strokeWidth={1.5} className="text-gray-500" />
          <Cat size={28} strokeWidth={1.5} className="text-gray-500" />
          <Sprout size={28} strokeWidth={1.5} className="text-gray-500" />
          <Heart size={28} strokeWidth={1.5} className="text-gray-500" />
          <Gem size={28} strokeWidth={1.5} className="text-gray-500" />
          <Gamepad2 size={28} strokeWidth={1.5} className="text-gray-500" />
          <Mountain size={28} strokeWidth={1.5} className="text-gray-500" />
          <Smile size={28} strokeWidth={1.5} className="text-gray-500" />
          <Leaf size={28} strokeWidth={1.5} className="text-gray-500" />
          <Cherry size={28} strokeWidth={1.5} className="text-gray-500" />
          <Cake size={28} strokeWidth={1.5} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
