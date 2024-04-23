export interface AppData {
  sectionFeatures: SectionFeatures;
  sectionAbout: SectionData;
  sectionAddress: SectionData;
  sectionContact: SectionContact;
}

export interface SectionFeatures {
  title: string;
  features: Feature[];
}

export interface Feature {
  title: string;
  image: string;
  text: string;
  active: boolean;
}

export interface SectionData {
  title: string;
  text: string;
}

export interface SectionContact {
  email: string;
  message: string;
}
