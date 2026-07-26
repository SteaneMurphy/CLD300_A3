// Site header. Holds the home link, the dark mode toggle, and the repository link.

import { useEffect, useState } from "react";
import Container from "../Container/Container";
import Link from "../Link/Link";
import Stack from "../Stack/Stack";
import Switch from "../Switch/Switch";

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme
{
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function Header()
{
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return(
        <Container size="full" gradient={theme === 'dark' ? 'left' : 'right'}>
            <Stack direction="row" justify="between" align="center">
                <Link
                    hoverBackground
                    icon="github"
                    iconSize="lg"
                    destination="/"
                    linkText="Murphy UI" />
                <Stack direction="row" align="center" gap="md">
                    <Switch
                        label="Toggle dark mode"
                        checked={theme === 'dark'}
                        onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
                    />
                    <Link
                        hoverBackground
                        icon="github"
                        iconSize="lg"
                        iconOnly
                        destination="https://github.com/SteaneMurphy/CLD300_A2"
                        linkText=""
                    />
                </Stack>
            </Stack>
        </Container>
    )
}
