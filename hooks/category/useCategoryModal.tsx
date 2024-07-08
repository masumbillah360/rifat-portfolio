import { create } from "zustand";

type ModalName = "addCategory" | "deleteCategory" | "updateCategory";

interface ModalData {
  id: string;
  category: string;
  description: string;
}

interface ModalState {
  modals: { [key in ModalName]: boolean };
  data: ModalData;
  openModal: (name: ModalName, data?: Partial<ModalData>) => void;
  closeModal: (name: ModalName) => void;
  setData: (data: Partial<ModalData>) => void;
  clearData: () => void;
}

const useCategoryModal = create<ModalState>((set) => ({
  modals: {
    addCategory: false,
    deleteCategory: false,
    updateCategory: false,
  },
  data: {
    id: "",
    category: "",
    description: "",
  },

  openModal: (name: ModalName, data: Partial<ModalData> = {}) =>
    set((state) => ({
      modals: { ...state.modals, [name]: true },
      data: { ...state.data, ...data },
    })),

  closeModal: (name: ModalName) =>
    set((state) => ({
      modals: { ...state.modals, [name]: false },
      data: { id: "", category: "", description: "" },
    })),

  setData: (data: Partial<ModalData>) =>
    set((state) => ({
      data: { ...state.data, ...data },
    })),

  clearData: () =>
    set(() => ({
      data: { id: "", category: "", description: "" },
    })),
}));

export default useCategoryModal;
