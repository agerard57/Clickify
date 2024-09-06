import { AccountSubPages } from "@/accountPage";
import { Pages } from "./Pages";
import { AuthStatuses } from "./AuthStatuses";

type SubRoutes = {
  [SubPage in AccountSubPages]: {
    name: SubPage;
    path: string;
    element: JSX.Element;
  };
};

export type Routes = {
  [Page in Pages]: {
    name: Page;
    path: string;
    element: JSX.Element;
    sections?: string[];
    subRoutes?: SubRoutes;
    authentificationMode?: AuthStatuses;
  };
};
