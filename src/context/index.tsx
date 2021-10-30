import * as React from "react";
import { useBoolean, useMediaQuery } from "@chakra-ui/react";
import { useUsers, IUser } from "../utils/users";

interface ILayoutContext {
  isMobileSidebarStretched: boolean;
  toggleMobileSidebarToStretched: () => void;
  isMobileContentManualClose: boolean;
  toggleMobileContentManualClose: () => void;
}
const LayoutContext = React.createContext({
  isMobileSidebarStretched: false,
  toggleMobileSidebarToStretched: () => {},
  isMobileContentManualClose: false,
  toggleMobileContentManualClose: () => {},
});
export function useLayout() {
  const context = React.useContext<ILayoutContext>(LayoutContext);
  if (!context) {
    throw new Error(`useLayout must be used within a LayoutProvider`);
  }
  return context;
}

interface ILayoutProvider {
  children: React.ReactNode;
}
export function LayoutProvider(props: ILayoutProvider) {
  const [flag, setFlag] = useBoolean();
  const [flagManual, setFlagManual] = useBoolean();
  const [isMobileWidth] = useMediaQuery("(max-width: 30em)");
  const { id } = useActiveUser();
  React.useEffect(() => {
    if (isMobileWidth) {
      setFlag.on();
    } else {
      setFlag.off();
      setFlagManual.off();
    }
  }, [isMobileWidth, setFlag, setFlagManual]);

  React.useEffect(() => {
    if (id) {
      setFlagManual.off();
    } else {
      setFlagManual.on();
    }
  }, [id, setFlagManual]);

  const value = {
    isMobileSidebarStretched: flag,
    toggleMobileSidebarToStretched: setFlag.toggle,
    isMobileContentManualClose: flagManual,
    toggleMobileContentManualClose: setFlagManual.toggle,
  };

  return <LayoutContext.Provider value={value} {...props} />;
}

interface IActiveContext {
  id: string | null;
  setId: (id: string | null) => void;
  meta: IUser | null;
}
const ActiveContext = React.createContext<IActiveContext>({
  id: null,
  setId: (id: string | null) => {},
  meta: null,
});
export function useActiveUser() {
  const context = React.useContext(ActiveContext);
  if (!context) {
    throw new Error(`useActiveUser must be used within an ActiveProvider`);
  }
  return context;
}

interface IActiveProvider {
  children: React.ReactNode;
}
export function ActiveProvider(props: IActiveProvider) {
  const [id, setId] = React.useState<null | string>(null);
  const [meta, setMeta] = React.useState<IUser | null>(null);
  const { data: users } = useUsers();
  React.useEffect(() => {
    if (id) {
      const user = users?.find((user) => user.id === id) || null;
      setMeta(user);
    } else {
      setMeta(null);
    }
  }, [id, setMeta, users]);

  const value = {
    id,
    setId,
    meta,
  };
  return <ActiveContext.Provider value={value} {...props} />;
}
