import {Key, ReactNode, useState} from "react";
import Card from "../../Common/Card";
import Pill from "../../Common/Pill";
import { IProjects, MainSkills } from "../ISkills";
import { ReactElement } from "react";
import { Dictionary } from "../../Common/CommonTypes";

const unparsableData = new Set([
  "proficiency"
])

interface ContentProps {
  data: MainSkills,
  isClosed?: boolean
}
function Content ( { data, isClosed }: ContentProps ) {
  // Used to store CSS variables for any data that has a customized preference
  // TODO: Make the cards work like a carousel for mobile devices
  console.log({ data });
  const [styleVars, setStyleVars] = useState({});
  const contentClass = `content ${isClosed ? 'hidden' : 'shown'}`

  const skillEntries: Array<ReactElement> = [];
  Object.entries(data).forEach((entry, index) => {
    const [key, value] = entry;
    if (key.startsWith('--') ) {
      // A deep copy is not required as it just represents string-based data
      if (!(key in styleVars)) {
        const styleVarsClone: Dictionary = { ...styleVars };
        styleVarsClone[key] = value;
        setStyleVars(styleVarsClone);
      }
      return;
    }

    if (unparsableData.has(key)) {
      return;
    }

    const [name, {skills, imageFile, projects }] = entry;
    const subSkills = skills.map((value: ReactNode, index: Key) => {
      return <Card key={index} innerText={value} define={true} />
    });

    const imageBinary = imageFile ? `/Skills/${imageFile}` : undefined;
    const relatedProjects = projects.map((value: IProjects, index: Key) => {
      return <ProjectContent key={index} data={value} />
    });


    skillEntries.push(
      <div key={index} className="skill-entries">
        <div className="heading-section spread">
          <img src={imageBinary} alt={`Logo of ${name}`} />
          <h1> {name} </h1>
        </div>
        <div className="skill-section">
          <h2> Sub-skills </h2>
          <div className="spread">
            {subSkills}
          </div>
          <h2 style={{marginBlock: '13px -12px'}}> Projects </h2>
          <div className="spread">
            {relatedProjects}
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className={contentClass}>
      {skillEntries}
    </div>
  )
}

interface ProjectContentProps { data: IProjects };
function ProjectContent({ data }: ProjectContentProps) {
  const {description, link, name, otherFrameworks} = data;
  const descriptionComponent = (
    <>
    <h2> {name} </h2>
    <p> {description} </p>
    </>
  )

  const pillColors = ["#d6c0e1", "#e1d9c0", "#c7e1bf"];
  const frameworksUsed = otherFrameworks.map((value, index) => {
    return (
      <a key={index} href={value.link} style={{textDecoration: 'none'}} >
        <Pill key={index}
          innerText={value.name}
          styleVars={{'--color' : pillColors[index]}}
        />
      </a>
  )});

  return (
    <>
    <div className="project-content spread">
      <Card innerText={descriptionComponent} />
      <div className="spread">
        <span className="check-out">
          Check it out on: 
          <a href={link} >
            <GitHubLogo />
            <strong> GitHub </strong>
          </a>
        </span>

        <div className="spread">
          {frameworksUsed}
        </div>
      </div>
    </div>
    </>
  )
}

function GitHubLogo() {
  return (
    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
    </svg>
  );
}


export default Content;
