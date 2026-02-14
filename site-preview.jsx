import React from 'react';
import { FileText, Link, Cookie, Cat, Heart, Gem, Gamepad2, Mountain, Smile, Leaf, Sprout, Cherry, Croissant, IceCream, Cake } from 'lucide-react';

export default function VrundaPortfolio() {
  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: '#F6F1EB',
      color: '#2D2D2D',
      minHeight: '100vh',
      padding: '40px 24px',
      lineHeight: 1.6
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '2px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            color: '#999',
            flexShrink: 0
          }}>
            avatar.png
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#4A90D9', marginBottom: '4px', margin: 0 }}>
              Hi, I'm Vrunda!
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#5A5A5A', margin: 0 }}>
              Product Designer 🏔️, Cozy gamer 🎮, Cake fiend 🍰
            </p>
          </div>
        </header>

        {/* Intro */}
        <p style={{ fontSize: '1.15rem', marginBottom: '48px', color: '#2D2D2D' }}>
          Currently designing AI-native experiences at{' '}
          <a href="#" style={{ color: '#4A90D9', textDecoration: 'none', fontWeight: 500 }}>Fieldguide</a>.
        </p>

        {/* Main content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          {/* Work section */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 600, color: '#4A90D9', margin: '0 0 20px 0' }}>
              <span>✏️</span> Work
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontWeight: 700 }}>Fieldguide</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#6B6B6B' }}>Product Designer</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#9B9B9B' }}>2025 – now</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontWeight: 700 }}>Willow</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#6B6B6B' }}>Product Designer</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#9B9B9B' }}>2022 – 2025</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontWeight: 700 }}>Fifth Tribe</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#6B6B6B' }}>UI/UX Designer</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#9B9B9B' }}>2021 – 2022</span>
              </div>
            </div>
          </section>

          {/* Fun section */}
          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '1.1rem', fontWeight: 600, color: '#D4A857', margin: '0 0 20px 0' }}>
              <span>🥸</span> Fun
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2D2D2D', textDecoration: 'none', fontFamily: 'monospace', fontSize: '0.95rem' }}>
                Plantorium: A cozy game <span style={{ fontSize: '0.85rem' }}>↗</span>
              </a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#2D2D2D', textDecoration: 'none', fontFamily: 'monospace', fontSize: '0.95rem' }}>
                My illustrations <span style={{ fontSize: '0.85rem' }}>↗</span>
              </a>
            </div>
          </section>
        </div>

        {/* Bottom links */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '56px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#2D2D2D', textDecoration: 'none', fontWeight: 500 }}>
            <FileText size={18} />
            Resume
          </a>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#2D2D2D', textDecoration: 'none', fontWeight: 500 }}>
            <Link size={18} />
            Linkedin
          </a>
        </div>

        {/* Footer icons - using Lucide icons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', paddingTop: '20px', opacity: 0.4 }}>
          <Cookie size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Cat size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Sprout size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Heart size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Gem size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Gamepad2 size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Mountain size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Smile size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Leaf size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Cherry size={28} strokeWidth={1.5} color="#8B8B8B" />
          <Cake size={28} strokeWidth={1.5} color="#8B8B8B" />
        </div>
      </div>
    </div>
  );
}
