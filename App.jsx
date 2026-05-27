App.jsx export default function CraftopiasWebsite() { const products = [ { title: 'Vintage Brass Gramophone', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop', }, { title: 'Royal Marble Decor', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop', }, { title: 'Handmade Antique Collection', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop', }, { title: 'Luxury Vintage Pieces', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop', }, ]

return ( <div className="bg-black text-white min-h-screen font-serif"> {/* Hero Section */} <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop')", }} > <div className="absolute inset-0 bg-black/70"></div>

<div className="relative z-10 text-center px-6 max-w-4xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-[8px] text-yellow-400 drop-shadow-lg">
        Craftopias
      </h1>

      <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
        Luxury Vintage Gramophones, Marble Decor & Antique Handmade
        Collectibles
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <a
          href="https://craftopias.etsy.com"
          target="_blank"
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-semibold transition-all shadow-2xl"
        >
          Visit Etsy Store
        </a>

        <a
          href="https://www.instagram.com/craftopiass?igsh=dXp5NXl2dmxveGt5"
          target="_blank"
          className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-2xl text-lg font-semibold transition-all"
        >
          Instagram
        </a>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="py-24 px-6 md:px-20 bg-[#111]">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <img
        src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1400&auto=format&fit=crop"
        className="rounded-3xl shadow-2xl h-[500px] object-cover w-full"
      />

      <div>
        <h2 className="text-5xl font-bold text-yellow-400 mb-8">
          About Craftopias
        </h2>

        <p className="text-gray-300 text-lg leading-9">
          Craftopias brings timeless luxury into your home with handcrafted
          vintage gramophones, elegant marble decor pieces, and rare antique
          collectibles. Every product is selected to reflect royal heritage,
          artistic beauty, and classic craftsmanship.
        </p>

        <div className="mt-10">
          <a
            href="https://craftopias.etsy.com"
            target="_blank"
            className="bg-yellow-500 text-black px-7 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* Featured Products */}
  <section className="py-24 px-6 md:px-20 bg-black">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-yellow-400">
        Featured Collections
      </h2>

      <p className="text-gray-400 mt-6 text-lg">
        Explore our handcrafted antique and vintage products.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-[#111] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <img
            src={product.image}
            className="h-72 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-yellow-300">
              {product.title}
            </h3>

            <a
              href="https://craftopias.etsy.com"
              target="_blank"
              className="inline-block mt-6 bg-yellow-500 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-all"
            >
              View Product
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Luxury Banner */}
  <section
    className="relative py-32 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop')",
    }}
  >
    <div className="absolute inset-0 bg-black/75"></div>

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 leading-tight">
        Antique Luxury Meets Timeless Craftsmanship
      </h2>

      <p className="text-gray-200 text-xl mt-8 leading-9">
        Discover premium handmade decor crafted for collectors and luxury
        interiors.
      </p>
    </div>
  </section>

  {/* Instagram Section */}
  <section className="py-24 px-6 bg-[#111] text-center">
    <h2 className="text-5xl font-bold text-yellow-400 mb-6">
      Follow Craftopias
    </h2>

    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8">
      Stay connected for new vintage arrivals, marble art, handcrafted
      luxury decor, and antique collections.
    </p>

    <div className="mt-10">
      <a
        href="https://www.instagram.com/craftopiass?igsh=dXp5NXl2dmxveGt5"
        target="_blank"
        className="bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-yellow-400 transition-all"
      >
        Open Instagram
      </a>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black border-t border-yellow-500/30 py-12 text-center px-6">
    <h3 className="text-3xl font-bold text-yellow-400 tracking-[5px]">
      Craftopias
    </h3>

    <p className="text-gray-400 mt-6 text-lg">
      Premium Vintage Gramophones • Marble Decor • Handmade Antiques
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-8">
      <a
        href="https://craftopias.etsy.com"
        target="_blank"
        className="text-yellow-400 hover:text-yellow-300 transition-all"
      >
        Etsy Store
      </a>

      <a
        href="https://www.instagram.com/craftopiass?igsh=dXp5NXl2dmxveGt5"
        target="_blank"
        className="text-yellow-400 hover:text-yellow-300 transition-all"
      >
        Instagram
      </a>
    </div>

    <p className="text-gray-500 mt-8 text-sm">
      © 2026 Craftopias. All Rights Reserved.
    </p>
  </footer>
</div>

) }
