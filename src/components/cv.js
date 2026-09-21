import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const sectionConstructs = {
  education: () => ({
    id: crypto.randomUUID(),
    name: "",
    location: "",
    degree: "",
    start: "",
    end: "",
    ongoing: false,
  }),
  workExperience: () => ({
    id: crypto.randomUUID(),
    name: "",
    location: "",
    jobTitle: "",
    start: "",
    end: "",
    ongoing: false,
    responsibilities: [],
  }),
};

function getInitState() {
  const initEducation = sectionConstructs.education();
  const initWorkExp = sectionConstructs.workExperience();

  return {
    personalInfo: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      website: "",
    },
    summary: {
      summary: "",
    },
    education: {
      [initEducation.id]: initEducation,
    },
    workExperience: {
      [initWorkExp.id]: initWorkExp,
    },
  };
}

export const useCvStore = create(persist(immer(() => getInitState())));

export function updateGeneral(section, field, value) {
  useCvStore.setState(s => {
    s[section][field] = value;
  });
}

export function updateSpecificObject(section, id, field, value) {
  useCvStore.setState(s => {
    s[section][id][field] = value;
  });
}

export function addResponsibility(id) {
  useCvStore.setState(s => {
    s.workExperience[id].responsibilities.push("");
  });
}

export function deleteResponsibility(id, i) {
  useCvStore.setState(s => {
    s.workExperience[id].responsibilities.splice(i, 1);
  });
}

export function editResponsibility(id, i, value) {
  useCvStore.setState(s => {
    s.workExperience[id].responsibilities[i] = value;
  });
}

export function addNewSection(section) {
  const newSection = sectionConstructs[section]();

  useCvStore.setState(s => {
    s[section][newSection.id] = newSection;
  });
}

export function deleteSection(section, id) {
  useCvStore.setState(s => {
    delete s[section][id];
  });
}

export function reset() {
  useCvStore.setState(() => getInitState());
}
