"use client"

import { Plus } from "lucide-react"
import { useGetEquipesQuery } from "../services/equipes.service"
import EquipeCard from "./equipeCard"

export default function Equipes() {
  const { data } = useGetEquipesQuery()
  return (
    <div className="flex flex-col gap-6 p-6">
      {data?.map((equipe) => {
        return <EquipeCard equipe={equipe} />
      })}
      <div
        onClick={() => {}}
        className="flex items-center w-full h-24 gap-4 p-4 text-gray-500 transition-all border rounded-md cursor-pointer hover:border-green-500 hover:text-green-500"
      >
        <Plus />
        <span>Add New Equipe</span>
      </div>
    </div>
  )
}
