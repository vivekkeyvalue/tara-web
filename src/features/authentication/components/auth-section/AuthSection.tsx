import Head from '@layouts/head/Head';
import { AuthSectionProps } from 'types/auth-section';
import Logo from '@assets/images/logo.svg';

const AuthSection = ({
  children,
  pageTitle,
  title = '',
  description = ''
}: AuthSectionProps) => (
  <>
    <Head title={pageTitle} />
    <div className="flex w-full flex-col items-center justify-center">
      <img src={Logo} alt="logo" />
      {!!title && (
        <div className="mb-2 mt-10 w-full text-center text-5.5 font-bold text-black">
          {title}
        </div>
      )}
      {!!description && (
        <div className="flex w-4/5 items-center gap-2 text-center text-base font-normal text-grey">
          <div>{description}</div>
        </div>
      )}

      {children}
    </div>
  </>
);

export default AuthSection;
