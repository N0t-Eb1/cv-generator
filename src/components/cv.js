import { create } from "zustand";

function getNewEducation() {
  return {
    id: crypto.randomUUID(),
    name: "",
    location: "",
    degree: "",
    start: "",
    end: "",
    ongoing: false,
  };
}

function getNewWorkExperience() {
  return {
    id: crypto.randomUUID(),
    name: "",
    location: "",
    jobTitle: "",
    start: "",
    end: "",
    ongoing: false,
    responsibilities: [],
  };
}

function getInitState() {
  const initEducation = getNewEducation();
  const initWorkExp = getNewWorkExperience();

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

export const useCvStore = create(() => getInitState());
