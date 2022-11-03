import React, { useEffect, useState, useRef } from "react";

const Stepper = ({ steps, currentStep }: any) => {
  const [newStep, setNewStep]: any = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber: number, steps: any) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    const stepsState = steps.map((step: any, index: number) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  const displaySteps = newStep.map((step: any, index: any) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex-col flex gap-20 mt-24 mb-8 items-center ">
          <div className="py-2 px-4 border-solid border-2 rounded cursor-pointer">
            1
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
        </div>
      </div>
    );
  });

  return <div>{displaySteps}</div>;
};
export default Stepper;
