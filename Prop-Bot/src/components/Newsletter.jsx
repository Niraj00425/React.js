export default function Newsletter(){
function onSubmit(e){
e.preventDefault()
const email = new FormData(e.currentTarget).get('email')
alert(`Subscribed: ${email}`)
e.currentTarget.reset()
}
return (
<section id="newsletter" className="container-max py-16">
<div className="card p-8 bg-gradient-to-br from-white to-gray-50">
<h3 className="text-2xl font-bold">Stay in the loop</h3>
<p className="text-gray-600 mt-1">Get new listings in your inbox.</p>
<form onSubmit={onSubmit} className="mt-6 flex gap-3 flex-col sm:flex-row">
<input name="email" type="email" required placeholder="you@example.com" className="input flex-1"/>
<button className="btn-primary">Subscribe</button>
</form>
</div>
</section>
)
}