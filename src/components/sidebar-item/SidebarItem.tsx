import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SidebarItemProps } from './types';

const SidebarItem = (props: SidebarItemProps) => {
  const { isCurrentRoute, item, path } = props;

  const { id, Icon, label, route } = item;

  const itemBorder = isCurrentRoute ? 'border-r-4 border-primary' : '';
  const itemColor = isCurrentRoute ? 'text-primary' : 'text-grey';

  return (
    <Link
      key={id}
      to={path || route}
      className={`flex items-center gap-3 px-4 py-3 ${itemBorder}`}
    >
      <div>
        <Icon className={clsx('size-6', itemColor)} />
      </div>
      <span
        className={`truncate text-sm font-medium ${itemColor}
      `}
      >
        {label}
      </span>
    </Link>
  );
};

export default SidebarItem;
