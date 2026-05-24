export interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface Section {
  id: string;
  title: string;
  projects: Project[];
}

export interface Document {
  id: string;
  title: string;
  type: string;
  date: string;
}