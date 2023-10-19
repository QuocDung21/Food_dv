import {objectToString} from "@/lib/fun";
import {key} from "@/lib/key";

export const saveLocalStorage = (key: string, value: any) => {
    const dataOld: object[] = getLocalStorage(key) || [];
    const existingItem = dataOld.find((item: any) => item.id === value.id);
    if (existingItem) {
        return
    }
    const newDataArray: object[] = [...dataOld, value];
    const newDataArrayString: string = objectToString(newDataArray);
    return localStorage.setItem(key, newDataArrayString);
};

export const getLocalStorage = (key: string): any => {
    const data: string | null = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};


export const deleteLocalStorage = (data: Menu) => {
    const dataLc: any = getLocalStorage(key.Favorites);
    const dataFill = [...dataLc]
    const dataDelete = dataFill.filter((item) => item.id != data.id)
    localStorage.setItem(key.Favorites, JSON.stringify(dataDelete));
}