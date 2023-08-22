export interface IOtherFrameworks {
  name: string,
  link: string
}

export interface IProjects {
  name: string,
  link: string,
  description: string,
  otherFrameworks: IOtherFrameworks
}

export interface ISubSkills {
    imageFile: string,
    skills: Array<string>,
    projects: IProjects
}

export interface MainSkills {
    [key: string]: ISubSkills | any;
}

export interface SkillType {
    [key: string]: MainSkills;
}
