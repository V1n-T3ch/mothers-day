import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-rose-50 to-red-50 overflow-hidden relative">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-linear-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
            💐 Happy Mother's Day
          </h1>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-200 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <div className="mb-6 text-9xl animate-float-rotate inline-block">💖</div>
          <h1 className="text-7xl md:text-8xl font-bold mb-8 pb-8 bg-linear-to-r from-pink-600 via-rose-500 to-red-500 bg-clip-text text-transparent animate-slide-in-left">
            Celebrating Moms
          </h1>
          <p className="text-lg text-semibold text-gray-600 mb-12 max-w-2xl mx-auto animate-bounce-in">
            Every mother is a hero. Every sacrifice, every smile, every hug  it all matters. Let's celebrate them today and every day.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 relative bg-amber-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-white via-pink-50 to-rose-100 p-12 rounded-3xl border-2 border-pink-300 shadow-2xl animate-slide-in-left">
            <div className="text-6xl mb-6 text-center animate-float-rotate">💌</div>

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 pb-8 bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              To My Amazing Mom
            </h2>

            <div className="text-lg md:text-xl leading-relaxed text-gray-800 space-y-6 mb-8">
              <p className="animate-slide-in-right">
                <span className="text-3xl">Dear Mom,</span>
              </p>

              <p className="animate-slide-in-left">
                What do I even say here? I can not express with mere words what you have done for me during all this time. But I am trying and will do my best. First of all, I would like to thank you for being an example, an inspiration, and my role model.
              </p>

              <p className="animate-slide-in-right">
                I recall the sleepless nights, countless tears, and constant concern that were always present. Your devotion and dedication helped me understand what love means. You taught me to be a good person, caring about others, working hard and never giving up no matter how difficult the situation may be.
              </p>

              <p className="animate-slide-in-left">
                Your strength is immense. Seeing how well you coped with all problems helped me understand that nothing is impossible if one wants it badly enough. I am always impressed by how you manage to stay positive and encourage everyone around to be as optimistic as you.
              </p>

              <p className="animate-slide-in-right">
                You are the best example of a loving mother. With your selfless devotion and love, you helped me feel special and important, appreciated and cherished. Your advice, words of encouragement, and hugs will always remain memories I treasure most.
              </p>

              <p className="animate-slide-in-left">
                Thank you for all your sacrifices and the hardships that came along. Thank you for tears that you had for my sake. You are my role model, my greatest hero and I am grateful to have a wonderful mother like you.
              </p>

              <p className="animate-slide-in-right text-2xl font-bold">
                I love you more than words could ever express. ❤️
              </p>

              <p className="animate-slide-in-left text-right text-lg font-semibold">
                Your loving son,
              </p>

              <p className="animate-slide-in-left text-right text-lg font-semibold">
                Vincent
              </p>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-linear-to-r from-pink-500 via-rose-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6 animate-slide-in-left">A Mother's Love</h2>
          <p className="text-2xl mb-8 leading-relaxed animate-slide-in-right">
            "A mother is the one who fills your heart in a way no one else can. She's your first love, your biggest cheerleader, and your forever home."
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
