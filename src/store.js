import create from "zustand";
import { devtools } from "zustand/middleware";
import { getCatalogo } from "./services/catalogo.api";
import { getPlans } from "./services/planos.api";

const useStore = create(
  devtools((set) => ({
    produtos: [],
    planos: [],

    setProductsList: async () => {
      const response = await getCatalogo();
      set({ produtos: await response });
    },

    setPlansList: async () => {
      const response = await getPlans();
      set({ planos: await response });
    },
  }))
);

export default useStore;
