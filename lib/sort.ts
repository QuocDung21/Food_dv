
export default function sortArrBy(value: string, data: any): any {
     const matchingCategories: any = data.filter((ct: any) => ct.category === value);
     return matchingCategories;
 }





