import { ProfileSettingsProps } from '@types';
import { ReactComponent as LogoutIcon } from '@assets/icons/logout.svg';

const ProfileSettings = ({ onClickLogout }: ProfileSettingsProps) => (
  <div className="absolute right-0 top-12 z-20 w-68.5  cursor-default rounded-2xl bg-theme text-sm font-normal shadow-md">
    <div
      role="presentation"
      className="border-t-greyStroke hover:bg-grey20 flex cursor-pointer items-center gap-4 border-t px-6 py-3 text-base font-medium text-content"
      onClick={onClickLogout}
    >
      <LogoutIcon className="size-6" />
      Log Out
    </div>
  </div>
);

export default ProfileSettings;
