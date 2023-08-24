import { createContext } from "react";
import { ClassLike } from "../../Common/Hooks";
import { MainSkills } from "../ISkills";

export type SortKeys = "Default" | "Alphabetical" | "Proficiency";
export const SortKeysList: Array<SortKeys> = ["Default", "Alphabetical", "Proficiency"]

type sortFuncKey = [string, MainSkills]
export const SortFunctions: Map<SortKeys, (val1: sortFuncKey, val2: sortFuncKey) => Number> = new Map([
    ["Default", (_val1: sortFuncKey, _val2: sortFuncKey) => {
      return 0;
    }],
    ["Alphabetical", (val1: sortFuncKey, val2: sortFuncKey) => {
      return Number(val1[0] < val2[0]);
    }],
    ["Proficiency", (val1: sortFuncKey, val2: sortFuncKey) => {
        return Number(val1[1].proficiency < val2[1].proficiency);
    }]
]);

export const SorterContext = createContext<ClassLike<SortKeys>|null>(null)
