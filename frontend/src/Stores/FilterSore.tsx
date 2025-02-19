import { create } from "zustand";
import { FilterState } from "../utils/Types/StoresTypes";
import { persist } from "zustand/middleware";

const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      priceRange: [0, 2500],
      rating: 0,
      discount: 0,
      setPriceRange: (priceRange) => set({ priceRange }),
      setRating: (newRating) => set({ rating: newRating }),
      setDiscount: (newDiscount) => set({ discount: newDiscount }),
    }),
    {
      name: "filter-store",
    }
  )
);

export default useFilterStore;
