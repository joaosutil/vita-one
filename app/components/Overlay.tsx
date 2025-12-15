'use client'

import { useState } from 'react'
import { useStore, AreaName, AreaData } from '../store/useStore'

export function Overlay() {
  const [activeTab, setActiveTab] = useState<AreaName>('health')
  const { health, work, finance, personal, updateArea } = useStore()
  const currentData = { health, work, finance, personal }[activeTab]

  const tabs: { id: AreaName; label: string; color: string }[] = [
    { id: 'health', label: 'Saúde', color: 'bg-blue-500' },
    { id: 'work', label: 'Trabalho', color: 'bg-purple-500' },
    { id: 'finance', label: 'Finanças', color: 'bg-green-500' },
    { id: 'personal', label: 'Pessoal', color: 'bg-orange-500' },
  ]

  // Nossa IA de Diagnóstico Simples 🤖
  const getDiagnosis = (data: AreaData) => {
    if (data.satisfaction > 80 && data.energy > 60) return "Estado de Fluxo! Continue assim."
    if (data.satisfaction < 30 && data.energy < 30) return "Alerta: Risco de Depressão/Apatia."
    if (data.time > 80 && data.satisfaction < 40) return "Aviso: Esforço alto com pouco retorno."
    if (data.energy > 90 && data.time > 90) return "Perigo: Risco iminente de Burnout!"
    if (data.satisfaction < 50) return "Atenção: Esta área precisa de carinho."
    return "Status: Estável / Em manutenção."
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none flex flex-col justify-end pb-10 px-4 md:px-10">
      <div className="pointer-events-auto max-w-md w-full bg-black/60 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl">
        
        {/* Abas */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all
                ${activeTab === tab.id ? `${tab.color} text-white shadow-lg scale-105` : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sliders */}
        <div className="space-y-6 mb-8">
          <div className="space-y-2">
            <div className="flex justify-between text-xs uppercase text-gray-300 font-mono">
              <label>Tempo Dedicado</label><span>{currentData.time}%</span>
            </div>
            <input type="range" min="0" max="100" value={currentData.time} 
              onChange={(e) => updateArea(activeTab, 'time', Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white"/>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs uppercase text-gray-300 font-mono">
              <label>Energia Gasta</label><span>{currentData.energy}%</span>
            </div>
            <input type="range" min="0" max="100" value={currentData.energy} 
              onChange={(e) => updateArea(activeTab, 'energy', Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"/>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs uppercase text-gray-300 font-mono">
              <label>Satisfação</label><span>{currentData.satisfaction}%</span>
            </div>
            <input type="range" min="0" max="100" value={currentData.satisfaction} 
              onChange={(e) => updateArea(activeTab, 'satisfaction', Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-400"/>
          </div>
        </div>

        {/* Área de Diagnóstico (Novo!) */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <h3 className="text-gray-400 text-xs font-bold uppercase mb-1">Diagnóstico da IA</h3>
          <p className="text-white text-sm font-medium animate-pulse">
            {getDiagnosis(currentData)}
          </p>
        </div>

      </div>
    </div>
  )
}