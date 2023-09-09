import React from 'react';

export interface ClassName extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export interface Styles extends React.HTMLAttributes<HTMLDivElement> {
    style?: React.CSSProperties;
}
