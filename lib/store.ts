import {create} from "zustand";
import {inflate} from "node:zlib";
import {Event} from "@/lib/key"

interface SideBarDrawerStore {
    isSideBarOpen: boolean;
    onSideBarOpen: () => void;
    onSideBarClose: () => void;
}

interface DataObject {
    name: string;
    value: string;
}



const initialState = {
   name:Event.wait
}


interface DataSelectStore {
    name: string;
    key: string;
    selectedData: (name: string, key: string) => void;
}


interface EventLocalStorage {
    name: string,
    actionEvent: (event: string) => void;
    reset: () => void
}

export const useSideBarDrawer = create<SideBarDrawerStore>((set) => ({
    isSideBarOpen: false,
    onSideBarOpen: () => set({isSideBarOpen: true}),
    onSideBarClose: () => set({isSideBarOpen: false}),
}));


export const useSelectData = create<DataSelectStore>((set) => ({
    name: "",
    key: "",
    selectedData: (name: string, key: string) => set({name, key}),
}));


export const useEventLocalStorage = create<EventLocalStorage>((set) => ({
    name: Event.wait,
    reset: () => {
        set(initialState)
    },
    actionEvent: (event: any) => set({name: event}),
}));

