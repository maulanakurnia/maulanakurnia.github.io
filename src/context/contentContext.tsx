import * as React from 'react';
import { TypeMyGame } from '../lib/@types/TypeMyGame';

interface ContentContextValue {
  myGame: TypeMyGame[];
}

const ContentContext = React.createContext<ContentContextValue>({ myGame: [] });
ContentContext.displayName = 'ContentContext';

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider: React.FC<ContentContextValue> = ({ children, ...rest }) => {
  const values = { ...rest };
  return <ContentContext.Provider value={values}>{children}</ContentContext.Provider>;
};

ContentProvider.displayName = 'ContentProvider';
