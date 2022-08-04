import create from 'zustand'

interface Store {
  bookmarks: []
  loginModalOpen: boolean
  setLoginModalOpen: (open?: boolean) => void
}

const useStore = create<Store>(set => ({
  bookmarks: [],
  loginModalOpen: false,
  setLoginModalOpen: (open = true) => set({ loginModalOpen: open }),
}))

export default useStore