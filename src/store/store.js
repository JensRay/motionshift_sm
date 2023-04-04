import { create } from "zustand";

const useStore = create((set) => ({
  likedImages: [],
  addLikedImage: (image) =>
    set((state) => ({ likedImages: [...state.likedImages, image] })),
  removeLikedImage: (id) =>
    set((state) => ({
      likedImages: state.likedImages.filter((image) => image.id !== id),
    })),
}));

export { useStore };
