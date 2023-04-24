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
  overview?: string;
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

// default values

export const resumeDefault: ResumeProps = {
  firstName: 'Ifeanyi',
  lastName: 'Lucky',
  email: 'ifeanyilucky360@gmail.com',
  position: 'Software Engineer',
  biography: `Highly-motivated communication sciences graduate, eager to leverage my passion for digital marketing. Experienced in developing in developing and implementing end-to-end digital marketing campaigns in multinational companies with strong time management, communication, and interpersonal skills.`,
  bioTitle: 'Profile',
  id: '6789oij',
  education: [
    {
      degree: 'BSc. Accounting',
      end: 'Nov 2023',
      start: 'Nov 2019',
      id: '343',
      location: 'Lagos, Nigeria',
      school: 'Lagos State University',
      overview:
        'Optional summary here. describe the achievements or voluntary work.',
    },
    {
      degree: 'SSCE',
      end: 'Nov 2013',
      start: 'Nov 2019',
      id: '343',
      location: 'Lagos, Nigeria',
      school: 'Apex Comprehensive High School',
    },
  ],
  skills: ['React', 'Next JS', 'Typescript', 'Node js', 'Redux', 'VueJS'],
  experience: [
    {
      companyName: 'Thebrik',
      end: 'Present',
      id: 3334,
      jobTitle: 'Software Engineer',
      location: 'Remote',
      overview: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium, earum possimus suscipit corporis, sapiente in sit
    vero dolor autem facere est impedit nesciunt eum temporibus
    consequatur animi, recusandae quisquam repudiandae.`,
      start: 'Nov 2022',
    },
    {
      companyName: 'HNG Internship',
      end: 'Dec 2022',
      id: 3334,
      jobTitle: 'Frontend Developer',
      location: 'Remote',
      start: 'July 2022',
      overview: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium, earum possimus suscipit corporis, sapiente in sit
    vero dolor autem facere est impedit nesciunt eum temporibus
    consequatur animi, recusandae quisquam repudiandae.`,
    },
    {
      companyName: 'Jentomed',
      end: 'Dec 2022',
      id: 3334,
      jobTitle: 'Software Engineer',
      location: 'Remote',
      start: 'July 2022',
      overview: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium, earum possimus suscipit corporis, sapiente in sit
    vero dolor autem facere est impedit nesciunt eum temporibus
    consequatur animi, recusandae quisquam repudiandae.`,
    },
  ],
};
