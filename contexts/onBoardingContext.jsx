import { createContext, useContext, useState } from "react";

const initialOnboardingData = {
  personalInfo: {
    dob: "",
    height: "",
    weight: "",
    sex: "",
  },
  surfProfile: {
    surfExperience: "",
    surfLevel: "",
    fitnessLevel: "",
  },
  goals: {
    primaryGoal: "",
    trainingDays: "",
    equipment: [],
  },
  account: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
};

const OnboardingContext = createContext(null);

export function OnboardingProvider({ children }) {
  const [onboardingData, setOnboardingData] = useState(initialOnboardingData);

  const updateSelection = (section, values) => {
    setOnboardingData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...values },
    }));
  };

  const resetOnboarding = () => {
    setOnboardingData(initialOnboardingData);
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        setOnboardingData,
        updateSelection,
        resetOnboarding,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("useOnboarding must be within OnboardingProvider");
  }

  return context;
}
