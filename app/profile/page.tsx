export default function ProfilePage() {
  return (
    <div className="flex flex-col p-6 gap-6">
      {[...Array(20)].map(() => {
        return <div className="bg-slate-100 w-full h-20 rounded-md"></div>
      })}
    </div>
  )
}
