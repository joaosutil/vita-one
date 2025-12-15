import { create } from "zustand";
import { persist } from "zustand/middleware";

// Definimos o formato padrão de uma "Área da Vida"
export interface AreaData {
  time: number; // Tempo dedicado
  energy: number; // Energia gasta
  satisfaction: number; // Nível de satisfação
}

// O nome das nossas 4 áreas
export type AreaName = "health" | "work" | "finance" | "personal";

interface AppState {
  // As 4 gavetas (cada uma começa com dados zerados ou padrão)
  health: AreaData;
  work: AreaData;
  finance: AreaData;
  personal: AreaData;

  // Uma função única e inteligente para atualizar qualquer dado
  // Ex: updateArea('health', 'time', 80) -> Muda o tempo da saúde para 80
  updateArea: (area: AreaName, field: keyof AreaData, value: number) => void;
}

const defaultData: AreaData = { time: 50, energy: 50, satisfaction: 50 };

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Estado inicial das 4 áreas
      health: { ...defaultData },
      work: { ...defaultData },
      finance: { ...defaultData },
      personal: { ...defaultData },

      // A mágica que atualiza uma gaveta específica sem mexer nas outras
      updateArea: (area, field, value) =>
        set((state) => ({
          [area]: {
            ...state[area], // Mantém os outros dados daquela área
            [field]: value, // Atualiza só o campo que mexemos
          },
        })),
    }),

    {
      name: "vita-one-storage", // <--- O nome do arquivo salvo no navegador
    }
  )
);
