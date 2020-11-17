import { BoxProps } from "@chakra-ui/react";

export interface ProjectProps extends BoxProps {
  title: string;
  source: string;
  cover?: string;
  description?: string;
  language?: string;
  langColor?: string;
  isDemo: boolean;
  demo?: string;
}
