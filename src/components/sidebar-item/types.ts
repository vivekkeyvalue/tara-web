export interface SidebarItemProps {
  isCurrentRoute: boolean;
  item: Item;
  path?: string;
  isSidebarOpen: boolean;
}

interface Item {
  id: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  route: string;
}
