import { createContext } from "react";
import { ClassLike } from "../../Common/Hooks";

export enum SortModes {
    Default = "Default",
    Alphabetical = "Alphabetical",
    Proficiency = "Proficiency"
}

export const SorterContext = createContext<ClassLike<SortModes>|null>(null)
