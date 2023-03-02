export interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export interface NavMenuProps {
  isOpen: boolean;
}

export interface NavigationProps {
  page: string;
  children?: React.ReactNode;
}
