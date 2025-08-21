export type Project = {
  title: string;
  description: string;
  images: string[];
  images_alt: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  longDescription: string;
  data_ai_hint?: string[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
  grade: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  grade: string;
  skills: string[];
};
