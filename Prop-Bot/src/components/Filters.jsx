export default function Filters({value, onChange}){
return (
<div className="flex flex-wrap items-center gap-3">
<select className="input max-w-xs" value={value} onChange={(e)=>onChange(e.target.value)}>
<option value="all">All</option>
<option value="sale">For Sale</option>
<option value="rent">For Rent</option>
</select>
</div>
)
}