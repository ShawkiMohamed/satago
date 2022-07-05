export type NavigationItem = NavigationLink | NavigationDropdown | NavigationSubheading;

export interface NavigationLink {
  type: 'link';
  path: string | any;
  fragment?: string;
  title: string;
  icon?: string;
  extralink?: { exact: boolean };
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
}

export interface NavigationDropdown {
  type: 'dropdown';
  title: string;
  icon?: string;
  path: string | any;
  submenu: Array<NavigationLink | NavigationDropdown>;
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
}

export interface NavigationSubheading {
  type: 'subheading';
  title: string;
  path: string | any;
  submenu: Array<NavigationLink | NavigationDropdown>;
  icon?: string;
}
