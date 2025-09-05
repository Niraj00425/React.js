export default function Footer(){
return (
<footer className="mt-16 border-t bg-white">
<div className="container-max py-10 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
<p>© {new Date().getFullYear()} RealEstate. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:underline" href="#">Privacy</a>
<a className="hover:underline" href="#">Terms</a>
<a className="hover:underline" href="#">Contact</a>
</div>
</div>
</footer>
)
}