import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
    persist(
        (set) => ({
            favorites: [],
            toggleFavorite: (favorite) =>
                set((state) => {
                    const isFavorite = state.favorites.includes(favorite);
                    return {
                        favorites: isFavorite
                            ? state.favorites.filter((item) => item !== favorite)
                            : [...state.favorites, favorite],
                    };
                }),
            isFavorite: (favorite) => {
                return useFavoriteStore.getState().favorites.includes(favorite);
            },
        }),
        {
            name: "favorite-storage",
        }
    )
);
