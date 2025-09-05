import { useEffect, useState } from 'react'
import { fetchProperties } from '../services/api'
import PropertyCard from './PropertyCard'
import Loader from './Loader'


export default function FeaturedProperties(){
const [list, setList] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')


useEffect(()=>{
(async ()=>{
try {
const data = await fetchProperties()
setList(data.slice(0,6))
} catch (e) {
setError('Could not load featured properties.')
} finally { setLoading(false) }
})()
}, [])


if (loading) return <Loader />
if (error) return <div className="mt-6 text-red-600">{error}</div>


return (
<section className="container-max py-16">
<h2 className="text-2xl sm:text-3xl font-bold">Featured Properties</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
{list.map(p => <PropertyCard key={p.id} prop={p} />)}
</div>
</section>
)
}