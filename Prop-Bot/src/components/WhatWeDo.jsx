const items = [
{ title: 'Buy', desc: 'Handpicked homes with transparent pricing.' },
{ title: 'Rent', desc: 'Flexible rentals in prime neighborhoods.' },
{ title: 'Sell', desc: 'List your property with expert guidance.' },
{ title: 'Invest', desc: 'Data-backed insights for better returns.' },
]


export default function WhatWeDo(){
return (
<section className="container-max py-16">
<h2 className="text-2xl sm:text-3xl font-bold">What We Do</h2>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
{items.map((it)=> (
<div key={it.title} className="card p-6">
<h3 className="text-xl font-semibold">{it.title}</h3>
<p className="mt-2 text-gray-600">{it.desc}</p>
</div>
))}
</div>
</section>
)
}