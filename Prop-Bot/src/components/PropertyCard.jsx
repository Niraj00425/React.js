export default function PropertyCard({prop}){
return (
<article className="card overflow-hidden">
<img src={prop.image} alt={prop.name} className="h-44 w-full object-cover"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold">{prop.name}</h3>
<span className="text-sm rounded-full px-2 py-1 bg-gray-100">{prop.listingType}</span>
</div>
<p className="text-sm text-gray-600 mt-1">{prop.address || prop.city}, {prop.country}</p>
<p className="mt-2 font-bold">${Intl.NumberFormat().format(prop.price)}</p>
<p className="text-xs text-gray-500 mt-1">Owner: {prop.ownerName} · {prop.contactNumber}</p>
</div>
</article>
)
}