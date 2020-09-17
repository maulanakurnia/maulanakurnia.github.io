import dynamic from "next/dynamic";
import { ComponentType } from "react";

// OpaqueComponentType is basically a generic that will be used for dynamically
// importing components in MDX files.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OpaqueComponentType = ComponentType<any>;

/**
 * Takes a Markdown/MDX string and returns an object of custom/imported
 * components found.
 *
 * When adding new components to a post/MDX page, `componentsMap` needs to be
 * updated.
 */
interface ComponentMap {
  [key: string]: {
    regex: RegExp;
    component: OpaqueComponentType;
  };
}
export default function buildComponentMap(source: string) {
  // Define the components that should be made optionally available in MDX
  const availableComponents: ComponentMap = {
    Codepen: {
      regex: /<Codepen/,
      component: dynamic(() => import("react-codepen-embed")),
    },
  };

  // Search the passed string for component instances and include them if
  // necessary
  const map: { [key: string]: OpaqueComponentType } = {};
  for (const prop in availableComponents) {
    const currentComponent = availableComponents[prop];
    const matches = currentComponent.regex.test(source);
    if (matches) {
      map[prop] = currentComponent.component;
    }
  }

  return map;
}
