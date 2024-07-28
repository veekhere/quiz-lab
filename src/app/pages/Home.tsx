import { useAppDispatch, useAppSelector } from "@store/hooks";
import { decrement, increment, selectCount } from "@store/slices/counter-slice";
import { Button, Heading, Pane } from "evergreen-ui";

export function Home() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Pane>
      <Heading size={800} marginBottom={24}>
        Home page
      </Heading>

      <Button
        marginRight={16}
        appearance="primary"
        intent="success"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button intent="danger" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>

      <Heading size={600}>Counter: {count}</Heading>
    </Pane>
  );
}
