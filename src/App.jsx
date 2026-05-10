import { useState } from 'react'
import './App.css'

function App() {
  const [showFireworks, setShowFireworks] = useState(false)
  const [particles, setParticles] = useState([])

  const triggerFireworks = () => {
    const newParticles = [...Array(50)].map((_, i) => {
      const angle = (i * 360) / 50 * (Math.PI / 180)
      const distance = 150 + Math.random() * 150
      return {
        id: i,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        duration: 1.5 + Math.random() * 0.5,
      }
    })
    setParticles(newParticles)
    setShowFireworks(true)
    setTimeout(() => {
      setShowFireworks(false)
      setParticles([])
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 overflow-hidden relative">
      {showFireworks &&
        particles.map((particle) => (
          <div
            key={particle.id}
            className="firework-particle"
            style={{
              '--tx': `${particle.tx}px`,
              '--ty': `${particle.ty}px`,
              '--duration': `${particle.duration}s`,
              transform: `translate(calc(var(--tx)), calc(var(--ty)))`,
            }}
          />
        ))}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
            💐 Mother's Day
          </h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-200 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <div className="mb-6 text-9xl animate-float-rotate inline-block">💖</div>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 bg-clip-text text-transparent animate-slide-in-left">
            Celebrate Mom
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light animate-slide-in-right">
            A day to honor the most amazing women in our lives
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-bounce-in">
            Every mother is a hero. Every sacrifice, every smile, every hug - it all matters. Let's celebrate them today and every day.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-rose-700 animate-pulse-glow">
              Share Your Tribute
            </button>
            <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold text-lg border-2 border-pink-300 hover:bg-pink-50 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-tilt-rotate">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-800 animate-slide-in-left">Why Moms Are Amazing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💝', title: 'Unconditional Love', desc: 'A love that knows no bounds, no conditions, just pure devotion.' },
              { icon: '✨', title: 'Endless Strength', desc: 'The power to overcome anything with grace and determination.' },
              { icon: '🌟', title: 'Inspiring Wisdom', desc: 'Guidance that shapes us into the best versions of ourselves.' },
              { icon: '🤝', title: 'Always There', desc: 'A steady presence through every triumph and challenge.' },
              { icon: '🎁', title: 'Generous Heart', desc: 'Always giving, never asking for anything in return.' },
              { icon: '👑', title: 'True Hero', desc: 'The real superhero in our lives and our world.' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-bounce-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4 inline-block animate-flip" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 animate-slide-in-right">{feature.title}</h3>
                <p className="text-gray-700 animate-wave">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heartfelt Message Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white via-pink-50 to-rose-100 p-12 rounded-3xl border-2 border-pink-300 shadow-2xl animate-slide-in-left">
            <div className="text-6xl mb-6 text-center animate-float-rotate">💌</div>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              To My Amazing Mom
            </h2>

            <div className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-6 mb-8">
              <p className="animate-slide-in-right">
                <span className="text-3xl">Dear Mom,</span>
              </p>

              <p className="animate-slide-in-left">
                Where do I even begin? Words feel too small to capture what you mean to me, but I'm going to try anyway. You've been my rock, my inspiration, and my greatest teacher. Every good thing in me is because of you.
              </p>

              <p className="animate-slide-in-right">
                I remember the sacrifices you made—the late nights, the endless worries, the way you always put everyone else before yourself. You showed me what unconditional love truly means. You didn't just raise me; you taught me how to be a good person, to care deeply, and to never give up on my dreams.
              </p>

              <p className="animate-slide-in-left">
                Your strength is incredible. The way you've overcome every challenge with grace and determination shows me that I can do anything I set my mind to. You've been my biggest cheerleader, celebrating every little win and standing by me through every struggle.
              </p>

              <p className="animate-slide-in-right">
                Your love has been a constant in my life—steady, pure, and unconditional. You've made me feel safe, valued, and worthy of greatness. The warmth of your hugs, the wisdom in your words, the gentle way you guide me... these are treasures I'll cherish forever.
              </p>

              <p className="animate-slide-in-left">
                Thank you for believing in me even when I didn't believe in myself. Thank you for every sacrifice, every tear you shed for my happiness, and every moment you chose to be strong for me. You are my hero, and I'm so proud to be your son.
              </p>

              <p className="animate-slide-in-right text-2xl font-bold">
                I love you more than words could ever express. ❤️
              </p>

              <p className="animate-slide-in-left text-right text-lg font-semibold">
                Your loving son
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={triggerFireworks}
                className="px-12 py-6 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow relative overflow-hidden group"
              >
                <span className="relative z-10">💝 Celebrate With Fireworks 💝</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-slide-in-left">A Mother's Love</h2>
          <p className="text-2xl mb-8 leading-relaxed animate-slide-in-right">
            "A mother is the one who fills your heart in a way no one else can. She's your first love, your biggest cheerleader, and your forever home."
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {['Strength', 'Love', 'Grace', 'Sacrifice'].map((tag, idx) => (
              <span
                key={idx}
                className="px-6 py-2 bg-white/20 rounded-full animate-bounce-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4 animate-flip">💐 Mother's Day</h3>
              <p className="text-gray-400">Celebrating the incredible mothers around the world.</p>
            </div>
            <div className="animate-bounce-in">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition hover:scale-110 inline-block">Tributes</a></li>
                <li><a href="#" className="hover:text-white transition hover:scale-110 inline-block">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition hover:scale-110 inline-block">Messages</a></li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <div className="flex gap-4 text-2xl">
                <span className="hover:text-pink-400 cursor-pointer transition hover:scale-125 inline-block animate-spin-slow">📘</span>
                <span className="hover:text-pink-400 cursor-pointer transition hover:scale-125 inline-block" style={{ animationDelay: '0.1s' }}>🐦</span>
                <span className="hover:text-pink-400 cursor-pointer transition hover:scale-125 inline-block" style={{ animationDelay: '0.2s' }}>📷</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 animate-slide-in-left">
            <p>© 2024 Mother's Day Celebration. Made with 💖 for all the amazing moms.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
