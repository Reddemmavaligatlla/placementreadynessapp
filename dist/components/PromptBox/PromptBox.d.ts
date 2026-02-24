import React from 'react';
export interface PromptBoxProps {
    prompt: string;
    onCopy?: () => void;
    onBuildInLovable?: () => void;
    onItWorked?: () => void;
    onError?: () => void;
    onAddScreenshot?: () => void;
}
export declare const PromptBox: React.FC<PromptBoxProps>;
export default PromptBox;
//# sourceMappingURL=PromptBox.d.ts.map