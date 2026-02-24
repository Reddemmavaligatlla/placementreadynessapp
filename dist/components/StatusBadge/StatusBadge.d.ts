import React from 'react';
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error';
export interface StatusBadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
}
export declare const StatusBadge: React.FC<StatusBadgeProps>;
export default StatusBadge;
//# sourceMappingURL=StatusBadge.d.ts.map