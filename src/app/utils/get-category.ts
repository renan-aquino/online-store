import { FilterType } from "@/types/filter-types";

export function getCategory(type: FilterType){
    if (type == FilterType.MUG) return 'mug'
    if (type == FilterType.LAMP) return 'lamp'
    if (type == FilterType.ACCESSORY) return 'accessory'
}