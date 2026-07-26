import type { ReactNode } from "react";

export interface ExampleFormat
{
    code: string,
    language?: 'jsx' | 'tsx',
    children: ReactNode,
}
