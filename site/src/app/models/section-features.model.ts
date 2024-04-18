export interface AppData {
  sectionFeatures: SectionFeatures;
  sectionAbout: SectionData;
  sectionAddress: SectionData;
  sectionContact: SectionContact;
}

export interface SectionFeatures {
  title: string;
  feature1: Feature;
  feature2: Feature;
  feature3: Feature;
  feature4: Feature;
}

export interface Feature {
  title: string;
  image: string;
  text: string;
}

export interface SectionData {
  title: string;
  text: string;
}

export interface SectionContact {
  email: string;
  message: string;
}
