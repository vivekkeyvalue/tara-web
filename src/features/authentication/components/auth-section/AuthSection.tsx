import { Head } from '@components';
import testId from '@constants/testId';

type AuthSectionProps = {
  children: React.ReactNode;
  pageTitle: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

const AuthSection = ({
  children,
  pageTitle,
  title = '',
  description = '',
  icon = null
}: AuthSectionProps) => (
  <>
    <Head title={pageTitle} />
    {!!icon && (
      <div
        className="mb-10"
        data-testid={testId.authentication.authSection.icon}
      >
        {icon}
      </div>
    )}
    {!!title && (
      <h2
        className="w-full text-h3 mb-2"
        data-testid={testId.authentication.authSection.title}
      >
        {title}
      </h2>
    )}
    {!!description && (
      <p
        className="w-full text-h5 text-background70"
        data-testid={testId.authentication.authSection.description}
      >
        {description}
      </p>
    )}

    {children}
  </>
);

export default AuthSection;
