export default function EquipeCard({ equipe }: { equipe: Equipe }) {
  return (
    <div className="w-full border border-slate-300 rounded-md min-h-[96px] flex justify-between gap-2">
      <div>
        {equipe.image ? (
          <img src={equipe.image} alt="" className="w-24 h-24" />
        ) : (
          <div className="w-24 h-24 bg-slate-500"></div> 
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold text-gray-800">{equipe.name}</span>
        <span className="text-base text-gray-700">{equipe.description}</span>
        <span className="text-sm text-gray-600">{equipe.categories.join(", ")}</span>
        <span className="text-sm text-gray-600">age range: {equipe.age.join("-")}</span>
        <span className="text-sm text-gray-600">{equipe.city}</span>
      </div>
    </div>
  )
}
