import { Link } from 'react-router-dom'


export default function Hero(){
return (
<section className="bg-gradient-to-r from-primary to-cyan-600 text-white">
<div className="container-max py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Find your next home with confidence.</h1>
<p className="mt-4 text-lg text-white/90">Browse curated properties for sale and rent across the globe.</p>
<div className="mt-6 flex gap-3">
<Link to="/listings" className="btn bg-white text-primary hover:bg-white/90">Explore Listings</Link>
<a href="#newsletter" className="btn-outline text-white border-white/70">Get updates</a>
</div>
</div>
{/* <img className="w-full rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1505692794403-34d4982fc1de?q=80&w=1600&auto=format&fit=crop" alt="hero"/> */}
</div>
</section>
)
}