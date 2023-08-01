import "./style.scss";
import data from "./data.json";
import ShowcaseCard from "./ShowcaseCard";

function Skills() {
  const showcase = Object.entries(data).map((entry_val, index) => {
    if (entry_val[0].startsWith("--")) {
      return null;
    }

    return (
      <ShowcaseCard key={index} entry_val={entry_val} define={true} />
    );
  });
  return (
    <div className="my-skills">
      <div className="navigator">
        <h1> Skills </h1>
        {/*TODO: Add a sorter here*/}
      </div>
      <div className="data-showcase spread">
        {showcase}
      </div>
    </div>
  )
}

export default Skills;

