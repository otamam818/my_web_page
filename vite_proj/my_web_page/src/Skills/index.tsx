import "./style.scss";
import data from "./data.json";
import ShowcaseCard from "./ShowcaseCard";
import Sorter from "./Sorter";
import { SorterContext, SortModes } from "./Sorter/SorterContext";
import { makeState, ClassLike } from "../Common/Hooks";
import { MainSkills } from "./ISkills";

function Skills() {
  const sortMode = makeState(SortModes.Default);

  const showcase = Object.entries(data).map((entry_val: [string, MainSkills], index) => {
    if (entry_val[0].startsWith("--")) {
      return null;
    }

    return (
      <ShowcaseCard key={index} entry_val={entry_val} define={true} />
    );
  });
  return (
    <SorterContext.Provider value={sortMode as ClassLike<SortModes>} >
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