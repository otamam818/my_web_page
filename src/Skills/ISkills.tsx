export interface IOtherFrameworks {
  name: string,
  link: string
}

export interface IProjects {
  name: string,
  link: string,
  description: string,
  otherFrameworks: Array<IOtherFrameworks>
}

export interface ISubSkills {
    imageFile: string,
    skills: Array<string>,
    projects: Array<IProjects>
}

export interface MainSkills {
    [key: string]: ISubSkills | number | string;
}

export interface SkillType {
    [key: string]: MainSkills;
}
