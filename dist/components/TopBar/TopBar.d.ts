import React from 'react';
export type StatusType = 'not-started' | 'in-progress' | 'shipped';
export interface TopBarProps {
    projectName: string;
    currentStep: number;
    totalSteps: number;
    status: StatusType;
}
export declare const TopBar: React.FC<TopBarProps>;
export default TopBar;
//# sourceMappingURL=TopBar.d.ts.map