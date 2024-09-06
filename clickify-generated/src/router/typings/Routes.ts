import { Pages } from "./Pages";
import { AuthStatuses } from "./AuthStatuses";
import { NavbarMode } from "./NavbarMode";

export type Routes = {
  [Page in Pages]: {
    name: Page;
    path: string;
    element: JSX.Element;
    navbarMode: NavbarMode;
    sections?: string[];
    authentificationMode?: AuthStatuses;
  };
};
