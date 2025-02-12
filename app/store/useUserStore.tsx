import { create } from "zustand";

const useUserStore = create(() => ({
  user: undefined,
}));

export default useUserStore;
