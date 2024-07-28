import { Heading, Pane } from "evergreen-ui";

export function NotFound() {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Heading size={900}>404</Heading>
      <Heading size={500}>Page not found</Heading>
    </Pane>
  );
}
