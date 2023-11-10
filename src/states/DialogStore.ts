import { create } from 'zustand'

interface DialogState{
    open: boolean,
    setOpen: (isOpen : boolean) => void
}

export const useDialogStore = create<DialogState>((set)=>({
    open: false,
    setOpen: (isOpen:boolean) => set({open : isOpen}),
}))