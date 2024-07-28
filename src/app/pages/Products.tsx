import { useAppSelector } from "@store/hooks";
import { selectCount } from "@store/slices/counter-slice";
import { Heading, Pane } from "evergreen-ui";

export function Products() {
  const count = useAppSelector(selectCount);

  return (
    <Pane>
      <Heading size={600}>Counter: {count}</Heading>
    </Pane>
  );
}
