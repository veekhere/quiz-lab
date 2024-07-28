import { rootRoute } from "@router";
import { isThatMe } from "@utils/auth";
import { currentRoute } from "@utils/routing.utils";
import { Heading, Pane, Tab, Tablist } from "evergreen-ui";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<string>(currentRoute());
  const [isMe, setIsMe] = useState<boolean>(false);

  const navigateTo = (key: string, path: string) => {
    setActivePage(key);
    navigate(path);
  };

  useEffect(() => {
    isThatMe().then((isMe) => setIsMe(isMe));
  }, []);

  return (
    <main>
      <Pane>
        <Tablist
          marginBottom={16}
          flexBasis={240}
          marginRight={24}
          display="flex"
          alignItems="center"
        >
          <Heading
            size={700}
            display="inline-block"
            marginLeft={8}
            marginRight={12}
            onClick={() => navigateTo(rootRoute?.key, rootRoute?.path)}
            cursor="pointer"
          >
            {rootRoute?.title}
          </Heading>

          {rootRoute?.children?.map((child) => (
            <Tab
              isSelected={child?.key === activePage}
              key={child?.key}
              onSelect={() => navigateTo(child?.key, child?.path)}
            >
              {child?.title}
            </Tab>
          ))}
        </Tablist>
      </Pane>

      <Heading size={700}>{isMe ? "me" : "not me"}</Heading>

      <Outlet key="content" />
    </main>
  );
}

export default App;
