import {useState} from "react";

function Content ( { data } ) {
  // Used to store CSS variables for any data that has a customized preference
  const [styleVars, setStyleVars] = useState({});

  const skillEntries = [];
  Object.entries(data).forEach((entry, index) => {
    if (entry[0].startsWith('--') ) {
      // A deep copy is not required as it just represents string-based data
      if (styleVars[entry[0]] === undefined) {
        const styleVarsClone = { ...styleVars };
        styleVarsClone[entry[0]] = entry[1];
        setStyleVars(styleVarsClone);
      }
      return;
    }

    const [name, {skills /*, projects */}] = entry;
    const subSkills = skills.map((value, index) => {
      return <InfoCard key={index} value={value} />
    });
    /* TODO: Make a separate component for this
    const relatedProjects = projects.map((value, index) => {
      return <InfoCard key={index} value={value} />
    });
    */

    // console.log("reached here, data:\n", {name, subSkills, relatedProjects});

    skillEntries.push(
      <div key={index} className="skill-entries">
        <h1> {name} </h1>
        <h2> Skills </h2>
        {subSkills}
      </div>
    )
  });
  // console.log(skillEntries);
  return (
    <div className="content">
      {skillEntries}
    </div>
  )
}

function InfoCard( { value } ) {
  return <div className="showcase-card"> { value } </div>;
}


export default Content;
