import { ReactNode, SyntheticEvent } from "react";

export type TagsProps = {
  id: string;
  name: string;
  type: 'category' | 'creator' | null;
  selected: boolean;
};

export interface ContextProps {
  // tags: TagsProps[];
  handleUpload: (evt: SyntheticEvent) => void;
  setSelected: (evt: any[]) => void;
  setFile: (evt: string) => void;
}

export interface ProviderProps {
  children: ReactNode;
}