import { create } from "zustand";

type ModalName = "deleteContent";

interface ModalData {
  id: string;
}

interface ModalState {
  modals: { [key in ModalName]: boolean };
  data: ModalData;
  openModal: (name: ModalName, data?: Partial<ModalData>) => void;
  closeModal: (name: ModalName) => void;
}

const useContentModal = create<ModalState>((set) => ({
  modals: {
    deleteContent: false,
  },
  data: {
    id: "",
  },

  openModal: (name: ModalName, data: Partial<ModalData> = {}) =>
    set((state) => ({
      modals: { ...state.modals, [name]: true },
      data: { ...state.data, ...data },
    })),

  closeModal: (name: ModalName) =>
    set((state) => ({
      modals: { ...state.modals, [name]: false },
      data: { id: "" },
    })),
}));

export default useContentModal;
