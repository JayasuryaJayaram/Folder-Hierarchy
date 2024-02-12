import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IFolderHierarchyProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
}
