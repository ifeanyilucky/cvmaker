export interface experienceProps {
  jobTitle: string;
  companyName: string;
  start: string;
  end: string;
  location: string;
  overview: string;
  id: number;
}

export interface educationProps {
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
  id: string;
}
export interface ResumeProps {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  biography: string;
  bioTitle: string;
  skills: Array<string>;
  experience: Array<experienceProps>;
  education: Array<educationProps>;
  id: string;
}
