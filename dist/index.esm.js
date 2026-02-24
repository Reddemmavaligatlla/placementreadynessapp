import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState } from 'react';

const colors = {
    background: '#F7F6F3',
    backgroundHover: '#EFEDE8',
    backgroundActive: '#E8E6E0',
    text: '#111111',
    textSecondary: '#4A4A4A',
    textMuted: '#6B6B6B',
    accent: '#8B0000',
    accentHover: '#6B0000',
    accentActive: '#4A0000',
    success: '#4A7C59',
    successLight: '#E8F5EC',
    warning: '#B8860B',
    warningLight: '#FDF6E3',
    error: '#8B0000',
    errorLight: '#FDF2F2',
    border: '#D4D2CC',
    borderLight: '#E8E6E0',
    white: '#FFFFFF',
};

const typography = {
    fontFamily: {
        serif: '"Playfair Display", Georgia, "Times New Roman", serif',
        sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
    },
    fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    lineHeight: {
        tight: 1.2,
        snug: 1.4,
        normal: 1.6,
        relaxed: 1.8,
    },
    letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
    },
    maxWidth: {
        text: '720px',
        heading: '800px',
    },
};

const spacing = {
    '0': '0',
    '1': '8px',
    '2': '16px',
    '3': '24px',
    '4': '40px',
    '5': '64px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '40px',
    xl: '64px',
    workspace: '70%',
    panel: '30%',
};
const layout = {
    topBarHeight: '64px',
    contextHeaderHeight: 'auto',
    proofFooterHeight: 'auto',
    primaryWorkspace: '70%',
    secondaryPanel: '30%',
    maxContentWidth: '1440px',
};

const Button = ({ variant = 'primary', size = 'md', children, style, ...props }) => {
    const baseStyles = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontWeight: 500,
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 150ms ease-in-out',
        border: 'none',
        outline: 'none',
    };
    const sizeStyles = {
        sm: {
            padding: '8px 16px',
            fontSize: '14px',
            height: '36px',
        },
        md: {
            padding: '12px 24px',
            fontSize: '16px',
            height: '44px',
        },
        lg: {
            padding: '16px 32px',
            fontSize: '18px',
            height: '56px',
        },
    };
    const variantStyles = {
        primary: {
            backgroundColor: colors.accent,
            color: colors.white,
        },
        secondary: {
            backgroundColor: 'transparent',
            color: colors.accent,
            border: `1px solid ${colors.accent}`,
        },
        ghost: {
            backgroundColor: 'transparent',
            color: colors.text,
        },
    };
    const hoverStyles = {
        primary: {
            backgroundColor: colors.accentHover,
        },
        secondary: {
            backgroundColor: colors.accent,
            color: colors.white,
        },
        ghost: {
            backgroundColor: colors.backgroundHover,
        },
    };
    const [isHovered, setIsHovered] = React.useState(false);
    return (jsx("button", { style: {
            ...baseStyles,
            ...sizeStyles[size],
            ...variantStyles[variant],
            ...(isHovered ? hoverStyles[variant] : {}),
            ...style,
        }, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), ...props, children: children }));
};

const Input = ({ label, error, helperText, style, ...props }) => {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
    };
    const labelStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        color: colors.text,
    };
    const inputStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '16px',
        padding: '12px 16px',
        borderRadius: '8px',
        border: `1px solid ${error ? colors.error : colors.border}`,
        backgroundColor: colors.white,
        color: colors.text,
        transition: 'border-color 150ms ease-in-out, box-shadow 150ms ease-in-out',
        outline: 'none',
        width: '100%',
    };
    const helperStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        color: error ? colors.error : colors.textMuted,
    };
    const [isFocused, setIsFocused] = React.useState(false);
    return (jsxs("div", { style: containerStyles, children: [label && jsx("label", { style: labelStyles, children: label }), jsx("input", { style: {
                    ...inputStyles,
                    ...(isFocused && !error
                        ? { borderColor: colors.accent, boxShadow: `0 0 0 2px ${colors.accent}20` }
                        : {}),
                    ...style,
                }, onFocus: (e) => {
                    setIsFocused(true);
                    props.onFocus?.(e);
                }, onBlur: (e) => {
                    setIsFocused(false);
                    props.onBlur?.(e);
                }, ...props }), (helperText || error) && (jsx("span", { style: helperStyles, children: error || helperText }))] }));
};

const Card = ({ children, padding = 'md', style, ...props }) => {
    const paddingMap = {
        sm: '16px',
        md: '24px',
        lg: '40px',
    };
    const cardStyles = {
        backgroundColor: colors.white,
        border: `1px solid ${colors.borderLight}`,
        borderRadius: '12px',
        padding: paddingMap[padding],
        transition: 'border-color 150ms ease-in-out',
        ...style,
    };
    return (jsx("div", { style: cardStyles, ...props, children: children }));
};

const statusLabels = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'shipped': 'Shipped',
};
const statusColors = {
    'not-started': colors.textMuted,
    'in-progress': colors.warning,
    'shipped': colors.success,
};
const TopBar = ({ projectName, currentStep, totalSteps, status, }) => {
    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        padding: '0 24px',
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.borderLight}`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
    };
    const projectStyles = {
        fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
        fontSize: '18px',
        fontWeight: 600,
        color: colors.text,
    };
    const progressStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        color: colors.textSecondary,
        letterSpacing: '0.05em',
    };
    const statusStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        padding: '6px 12px',
        borderRadius: '4px',
        backgroundColor: `${statusColors[status]}15`,
        color: statusColors[status],
    };
    return (jsxs("header", { style: containerStyles, children: [jsx("div", { style: projectStyles, children: projectName }), jsxs("div", { style: progressStyles, children: ["Step ", currentStep, " / ", totalSteps] }), jsx("div", { style: statusStyles, children: statusLabels[status] })] }));
};

const ContextHeader = ({ headline, subtext, }) => {
    const containerStyles = {
        padding: '40px 24px',
        maxWidth: '1440px',
        margin: '0 auto',
    };
    const headlineStyles = {
        fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
        fontSize: '40px',
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        color: colors.text,
        marginBottom: '16px',
        maxWidth: '800px',
    };
    const subtextStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '18px',
        lineHeight: 1.6,
        color: colors.textSecondary,
        maxWidth: '720px',
    };
    return (jsxs("div", { style: containerStyles, children: [jsx("h1", { style: headlineStyles, children: headline }), jsx("p", { style: subtextStyles, children: subtext })] }));
};

const PrimaryWorkspace = ({ children }) => {
    const styles = {
        flex: '0 0 70%',
        padding: '24px',
        minHeight: 'calc(100vh - 64px - 200px)',
    };
    return jsx("main", { style: styles, children: children });
};
const SecondaryPanel = ({ children }) => {
    const styles = {
        flex: '0 0 30%',
        padding: '24px',
        backgroundColor: colors.backgroundHover,
        borderLeft: `1px solid ${colors.borderLight}`,
        minHeight: 'calc(100vh - 64px - 200px)',
    };
    return jsx("aside", { style: styles, children: children });
};
const WorkspaceContainer = ({ children }) => {
    const styles = {
        display: 'flex',
        maxWidth: '1440px',
        margin: '0 auto',
    };
    return jsx("div", { style: styles, children: children });
};

const ProofFooter = ({ items, onItemToggle, onProofSubmit, }) => {
    const [proofInputs, setProofInputs] = useState({});
    const containerStyles = {
        backgroundColor: colors.white,
        borderTop: `1px solid ${colors.borderLight}`,
        padding: '24px',
        position: 'sticky',
        bottom: 0,
        zIndex: 100,
    };
    const innerStyles = {
        maxWidth: '1440px',
        margin: '0 auto',
    };
    const titleStyles = {
        fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
        fontSize: '20px',
        fontWeight: 600,
        color: colors.text,
        marginBottom: '16px',
    };
    const listStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    };
    const itemStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: '1 1 200px',
    };
    const checkboxContainerStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    };
    const checkboxStyles = {
        width: '20px',
        height: '20px',
        border: `2px solid ${colors.border}`,
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 150ms ease-in-out',
    };
    const labelStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '16px',
        color: colors.text,
        cursor: 'pointer',
    };
    const inputStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        padding: '8px 12px',
        borderRadius: '4px',
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.background,
        color: colors.text,
        outline: 'none',
        width: '100%',
    };
    const handleCheckboxClick = (item) => {
        onItemToggle(item.id, !item.checked);
    };
    const handleProofChange = (id, value) => {
        setProofInputs((prev) => ({ ...prev, [id]: value }));
    };
    const handleProofBlur = (id) => {
        const proof = proofInputs[id];
        if (proof && proof.trim()) {
            onProofSubmit(id, proof.trim());
        }
    };
    return (jsx("footer", { style: containerStyles, children: jsxs("div", { style: innerStyles, children: [jsx("h3", { style: titleStyles, children: "Proof Checklist" }), jsx("ul", { style: listStyles, children: items.map((item) => (jsxs("li", { style: itemStyles, children: [jsxs("div", { style: checkboxContainerStyles, onClick: () => handleCheckboxClick(item), children: [jsx("span", { style: {
                                            ...checkboxStyles,
                                            backgroundColor: item.checked ? colors.accent : colors.white,
                                            borderColor: item.checked ? colors.accent : colors.border,
                                        }, children: item.checked && (jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: jsx("path", { d: "M2 6L5 9L10 3", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })) }), jsx("span", { style: labelStyles, children: item.label })] }), item.checked && (jsx("input", { type: "text", placeholder: "Add proof (URL, commit, etc.)", value: proofInputs[item.id] || item.proof || '', onChange: (e) => handleProofChange(item.id, e.target.value), onBlur: () => handleProofBlur(item.id), style: inputStyles }))] }, item.id))) })] }) }));
};

const PromptBox = ({ prompt, onCopy, onBuildInLovable, onItWorked, onError, onAddScreenshot, }) => {
    const [copied, setCopied] = useState(false);
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    };
    const titleStyles = {
        fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
        fontSize: '18px',
        fontWeight: 600,
        color: colors.text,
        marginBottom: '4px',
    };
    const subtitleStyles = {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '13px',
        color: colors.textSecondary,
        marginBottom: '8px',
    };
    const boxStyles = {
        backgroundColor: colors.backgroundHover,
        border: `1px solid ${colors.borderLight}`,
        borderRadius: '8px',
        padding: '16px',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '13px',
        lineHeight: 1.7,
        color: colors.text,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
    };
    const buttonGroupStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(prompt);
        setCopied(true);
        onCopy?.();
        setTimeout(() => setCopied(false), 2000);
    };
    return (jsxs("div", { style: containerStyles, children: [jsx("h4", { style: titleStyles, children: "Prompt for builders" }), jsx("p", { style: subtitleStyles, children: "Share this when asking another system to reproduce this layout." }), jsx("div", { style: boxStyles, children: prompt }), jsxs("div", { style: buttonGroupStyles, children: [jsx(Button, { variant: "primary", size: "sm", onClick: handleCopy, children: copied ? 'Copied!' : 'Copy' }), onBuildInLovable && (jsx(Button, { variant: "secondary", size: "sm", onClick: onBuildInLovable, children: "Build in Lovable" })), onItWorked && (jsx(Button, { variant: "secondary", size: "sm", onClick: onItWorked, children: "It Worked" })), onError && (jsx(Button, { variant: "secondary", size: "sm", onClick: onError, children: "Error" })), onAddScreenshot && (jsx(Button, { variant: "secondary", size: "sm", onClick: onAddScreenshot, style: { gridColumn: 'span 2' }, children: "Add Screenshot" }))] })] }));
};

const variantStyles = {
    default: { bg: `${colors.textMuted}15`, color: colors.textMuted },
    success: { bg: colors.successLight, color: colors.success },
    warning: { bg: colors.warningLight, color: colors.warning },
    error: { bg: colors.errorLight, color: colors.error },
};
const StatusBadge = ({ children, variant = 'default', }) => {
    const styles = {
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        padding: '6px 12px',
        borderRadius: '4px',
        backgroundColor: variantStyles[variant].bg,
        color: variantStyles[variant].color,
    };
    return jsx("span", { style: styles, children: children });
};

export { Button, Card, ContextHeader, Input, PrimaryWorkspace, PromptBox, ProofFooter, SecondaryPanel, StatusBadge, TopBar, WorkspaceContainer, colors, layout, spacing, typography };
//# sourceMappingURL=index.esm.js.map
