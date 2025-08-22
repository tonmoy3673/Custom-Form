import { useState, type ReactElement } from 'react';

type StepType = number;
const useCustomForm  = (steps:ReactElement[]) => {
const [currentStepIndex,setCurrentStepIndex] = useState<StepType>(0);

// ======= next =========//
const next =(): void=>{
    setCurrentStepIndex(i=>{
        if(i>=steps.length-1) return i;
        return i + 1
    })
}

// ====== back =========//
const back =() : void=>{
    setCurrentStepIndex(i=>{
        if(i<=0) return i
        return i-1
    })
}

// ======== goTo ========//
const goTo =(index:StepType):void=>{
    setCurrentStepIndex(index)
}
    return (
        {
            currentStepIndex,
            step: steps[currentStepIndex],
            next,
            steps,
            back,
            goTo
        }
    );
};

export default useCustomForm;