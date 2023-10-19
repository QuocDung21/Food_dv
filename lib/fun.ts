export const objectToString = (data: object) => {
    return JSON.stringify(data)
};

export const stringToObject = (data: string) => {
    return JSON.parse(data)
};

export const existDataById = (id: string, data: any) => {
    const check = data.find((item: any) => item.id === id)
    return check != null;
}