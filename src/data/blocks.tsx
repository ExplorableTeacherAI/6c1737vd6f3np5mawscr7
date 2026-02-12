import { type ReactElement } from "react";

// Initialize variables from this file's variable definitions
import { useVariableStore } from "@/stores";
import { getDefaultValues } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());

// Section 1: What is a Sine Wave?
import {
    sineWaveIntroTitle,
    sineWaveIntroParagraph,
    sineWaveCircleExplanation,
    sineWaveVisualization,
    sineWaveEquation,
} from "./sections/SineWaveIntroSection";

export const blocks: ReactElement[] = [
    // ========================================
    // Section 1: What is a Sine Wave?
    // ========================================
    sineWaveIntroTitle,
    sineWaveIntroParagraph,
    sineWaveCircleExplanation,
    sineWaveVisualization,
    sineWaveEquation,
];
