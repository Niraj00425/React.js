import { useEffect, useMemo, useState } from 'react'
import { fetchProperties } from '../services/api'
import PropertyCard from '../components/PropertyCard'
import Filters from '../components/Filters'
import Loader from '../components/Loader'


export default function Listings(){
const [list, setList] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')
const [filter, setFilter] = useState('all')


useEffect(()=>{
(async ()=>{
try {
const data = await fetchProperties()
setList(data)
} catch (e) {
setError('Could not load listings.')
} finally { setLoading(false) }
})()
}, [])


const filtered = useMemo(()=>{
if (filter==='all') return list
return list.filter(p => p.listingType === filter)
}, [list, filter])


if (loading) return <Loader />
if (error) return <div className="container-max py-16 text-red-600">{error}</div>


return (
<section className="container-max py-10">
<div className="flex items-center justify-between gap-4">
<h1 className="text-2xl sm:text-3xl font-bold">Property Listings</h1>
<Filters value={filter} onChange={setFilter} />
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
{filtered.map(p => <PropertyCard key={p.id} prop={p} />)}
</div>
</section>
)
}