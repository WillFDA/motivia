import { ReactElement, useState } from "react";
export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  }

  function previous() {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  }

  function goToStep(index: number) {
    setCurrentStepIndex(index);
  }

  return { step: steps[currentStepIndex], next, previous, goToStep };
}
