import React from 'react';

declare const colors: {
    readonly background: "#F7F6F3";
    readonly backgroundHover: "#EFEDE8";
    readonly backgroundActive: "#E8E6E0";
    readonly text: "#111111";
    readonly textSecondary: "#4A4A4A";
    readonly textMuted: "#6B6B6B";
    readonly accent: "#8B0000";
    readonly accentHover: "#6B0000";
    readonly accentActive: "#4A0000";
    readonly success: "#4A7C59";
    readonly successLight: "#E8F5EC";
    readonly warning: "#B8860B";
    readonly warningLight: "#FDF6E3";
    readonly error: "#8B0000";
    readonly errorLight: "#FDF2F2";
    readonly border: "#D4D2CC";
    readonly borderLight: "#E8E6E0";
    readonly white: "#FFFFFF";
};
type ColorToken = keyof typeof colors;

declare const typography: {
    readonly fontFamily: {
        readonly serif: "\"Playfair Display\", Georgia, \"Times New Roman\", serif";
        readonly sans: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
    };
    readonly fontSize: {
        readonly xs: "12px";
        readonly sm: "14px";
        readonly base: "16px";
        readonly lg: "18px";
        readonly xl: "20px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly '4xl': "40px";
        readonly '5xl': "48px";
    };
    readonly fontWeight: {
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    readonly lineHeight: {
        readonly tight: 1.2;
        readonly snug: 1.4;
        readonly normal: 1.6;
        readonly relaxed: 1.8;
    };
    readonly letterSpacing: {
        readonly tight: "-0.02em";
        readonly normal: "0";
        readonly wide: "0.02em";
        readonly wider: "0.05em";
    };
    readonly maxWidth: {
        readonly text: "720px";
        readonly heading: "800px";
    };
};
type TypographyToken = typeof typography;

declare const spacing: {
    readonly '0': "0";
    readonly '1': "8px";
    readonly '2': "16px";
    readonly '3': "24px";
    readonly '4': "40px";
    readonly '5': "64px";
    readonly xs: "8px";
    readonly sm: "16px";
    readonly md: "24px";
    readonly lg: "40px";
    readonly xl: "64px";
    readonly workspace: "70%";
    readonly panel: "30%";
};
type SpacingToken = keyof typeof spacing;
declare const layout: {
    readonly topBarHeight: "64px";
    readonly contextHeaderHeight: "auto";
    readonly proofFooterHeight: "auto";
    readonly primaryWorkspace: "70%";
    readonly secondaryPanel: "30%";
    readonly maxContentWidth: "1440px";
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}
declare const Input: React.FC<InputProps>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    padding?: 'sm' | 'md' | 'lg';
}
declare const Card: React.FC<CardProps>;

type StatusType = 'not-started' | 'in-progress' | 'shipped';
interface TopBarProps {
    projectName: string;
    currentStep: number;
    totalSteps: number;
    status: StatusType;
}
declare const TopBar: React.FC<TopBarProps>;

interface ContextHeaderProps {
    headline: string;
    subtext: string;
}
declare const ContextHeader: React.FC<ContextHeaderProps>;

interface WorkspaceProps {
    children: React.ReactNode;
}
declare const PrimaryWorkspace: React.FC<WorkspaceProps>;
declare const SecondaryPanel: React.FC<WorkspaceProps>;
declare const WorkspaceContainer: React.FC<WorkspaceProps>;

interface ChecklistItem {
    id: string;
    label: string;
    checked: boolean;
    proof?: string;
}
interface ProofFooterProps {
    items: ChecklistItem[];
    onItemToggle: (id: string, checked: boolean) => void;
    onProofSubmit: (id: string, proof: string) => void;
}
declare const ProofFooter: React.FC<ProofFooterProps>;

interface PromptBoxProps {
    prompt: string;
    onCopy?: () => void;
    onBuildInLovable?: () => void;
    onItWorked?: () => void;
    onError?: () => void;
    onAddScreenshot?: () => void;
}
declare const PromptBox: React.FC<PromptBoxProps>;

type BadgeVariant = 'default' | 'success' | 'warning' | 'error';
interface StatusBadgeProps {
    children: React.ReactNode;
    variant?: BadgeVariant;
}
declare const StatusBadge: React.FC<StatusBadgeProps>;

export { Button, Card, ContextHeader, Input, PrimaryWorkspace, PromptBox, ProofFooter, SecondaryPanel, StatusBadge, TopBar, WorkspaceContainer, colors, layout, spacing, typography };
export type { BadgeVariant, ButtonProps, CardProps, ChecklistItem, ColorToken, ContextHeaderProps, InputProps, PromptBoxProps, ProofFooterProps, SpacingToken, StatusBadgeProps, StatusType, TopBarProps, TypographyToken, WorkspaceProps };
