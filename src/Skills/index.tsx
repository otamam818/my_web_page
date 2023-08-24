import "./style.scss";
import data from "./data.json";
import ShowcaseCard from "./ShowcaseCard";
import Sorter from "./Sorter";
import { SorterContext, SortFunctions, SortKeys } from "./Sorter/SorterContext";
import { makeState, ClassLike } from "../Common/Hooks";
import { MainSkills } from "./ISkills";

function Skills() {
  const sortMode = makeState<SortKeys>('Default');
  const currentSortFunction = SortFunctions.get(sortMode.get());

  const showcase = Object
    .entries(data)
    // @ts-ignore
    .sort(currentSortFunction)
    .map((entry_val: [string, MainSkills], index) => {
    if (entry_val[0].startsWith("--")) {
      return null;
    }

    return (
      <ShowcaseCard key={index} entry_val={entry_val} />
    );
  });
  return (
    <SorterContext.Provider value={sortMode as ClassLike<SortKeys>} >
    <div className="my-skills">
      <div className="spread navigator">
        <h1> Skills </h1>
        <Sorter />
      </div>
      <div className="data-showcase spread">
        {showcase}
      </div>
    </div>
    </SorterContext.Provider>
  )
}

export default Skills;