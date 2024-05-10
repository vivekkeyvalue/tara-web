import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AUTH } from '@constants/routes';
import Logo from '@assets/images/logo-black.svg';
import { Avatar, Icon, ProfileSettings } from '@components';

const MainHeader = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [showUserSettings, setShowUserSettings] = useState<boolean>(false);

  const handleDropDownClick = () => {
    setShowUserSettings((prev) => !prev);
  };

  const onClickLogout = () => {
    // TODO: clear token
    navigate(AUTH.LOGIN);
  };

  return (
    <div className="h-auto w-full bg-theme text-content shadow-sm">
      <div className="flex h-16 w-full items-center justify-between border-b border-l px-6 shadow-sm">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <div
            className="relative flex cursor-pointer items-center justify-center gap-2"
            role="presentation"
            onClick={handleDropDownClick}
            ref={ref}
          >
            <Avatar
              name="Test User"
              className="size-8 rounded-full text-sm text-white"
              bgColor="#7C57FF"
            />
            <Icon
              name="down"
              size="medium"
              className={showUserSettings ? 'rotate-180' : 'rotate-0'}
            />
            {showUserSettings && (
              <ProfileSettings onClickLogout={onClickLogout} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
