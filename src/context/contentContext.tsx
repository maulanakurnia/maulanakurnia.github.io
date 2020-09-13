import * as React from "react";
import { TypeMyGame } from "types/TypeMyGame";
import { TypeProject } from "types/TypeProject";

interface ContentContextValue {
  myGame?: TypeMyGame[];
  myProject?: TypeProject[];
}

const ContentContext = React.createContext<ContentContextValue>({
  myGame: [],
  myProject: []
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
