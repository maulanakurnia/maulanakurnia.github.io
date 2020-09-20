import * as React from "react";
import { GameProps } from "types/gameProps";
import { ProjectProps } from "types/projecPropst";

interface ContentContextValue {
  myGame?: GameProps[];
  myProject?: ProjectProps[];
}

const ContentContext = React.createContext<ContentContextValue>({
  myGame: [],
  myProject: [],
});
ContentContext.displayName = "ContentContext";

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider: React.FC<ContentContextValue> = ({
  children,
  ...rest
}) => {
  const values = { ...rest };
  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
};

ContentProvider.displayName = "ContentProvider";
