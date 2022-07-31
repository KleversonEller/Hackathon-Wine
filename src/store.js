import create from "zustand";
import { devtools } from "zustand/middleware";
import { getCatalogo } from "./services/catalogo.api";

const useStore = create(
  devtools((set) => ({
    produtos: [],

    addProduto: (id) => set((state) => ({ carrinho: [...state.state1, id] })), // Modificador de estado

    limpaCarrinho: () => set({ carrinho: [] }),

    setProductsList: async () => {
      const response = await getCatalogo();
      set({ produtos: await response });
    },
  }))
);

export default useStore;
