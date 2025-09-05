const BASE_URL = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing'


export async function fetchProperties() {
const res = await fetch(BASE_URL)
if (!res.ok) throw new Error('Failed to fetch properties')
const list = await res.json()
// Normalize + fallback listingType if API doesn't include it
return list.map((p, idx) => ({
...p,
listingType: p.listingType || (Number(p.id ?? idx) % 2 === 0 ? 'sale' : 'rent'),
price: p.price || (100000 + (Number(p.id ?? idx) % 20) * 5000),
address: p.address || `${p.buildingNumber ?? ''} ${p.cardinalDirection ?? ''} ${p.city ?? ''}`.trim(),
}))
}