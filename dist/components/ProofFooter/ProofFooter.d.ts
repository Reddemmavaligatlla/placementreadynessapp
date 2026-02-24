import React from 'react';
export interface ChecklistItem {
    id: string;
    label: string;
    checked: boolean;
    proof?: string;
}
export interface ProofFooterProps {
    items: ChecklistItem[];
    onItemToggle: (id: string, checked: boolean) => void;
    onProofSubmit: (id: string, proof: string) => void;
}
export declare const ProofFooter: React.FC<ProofFooterProps>;
export default ProofFooter;
//# sourceMappingURL=ProofFooter.d.ts.map