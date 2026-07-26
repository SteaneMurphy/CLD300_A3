import Container from "../Container/Container";
import Link from "../Link/Link";
import Stack from "../Stack/Stack";

export function Header()
{
    return(
        <Container size="full" gradient="right">
            <Stack direction="row" justify="between">
                <Link
                    hoverBackground 
                    icon="github" 
                    iconSize="lg" 
                    destination="/" 
                    linkText="Murphy UI" />
                <Link
                    hoverBackground
                    icon="github"
                    iconSize="lg"
                    iconOnly
                    destination="https://github.com/SteaneMurphy/CLD300_A2"
                    linkText=""
                />
            </Stack>
        </Container>
    )
}