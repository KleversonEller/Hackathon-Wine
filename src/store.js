import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    carrinho: [], // Estado puro

    addProduto: (id) => set((state) => ({ carrinho: [...state.state1, id] })), // Modificador de estado

    limpaCarrinho: () => set({ carrinho: [] }),

    fetchWineAPI: async () => {
      const response = await fetch("xyz.com");
      set({ carrinho: response.data });
    },
  }))
);

export default useStore;
