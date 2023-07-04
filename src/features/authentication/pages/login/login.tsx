import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useTranslate from '@hooks/intl';
import { Button, Input, Icon, ButtonLabel } from '@components';
import { validateWithRegexp } from '@utils/generic';
import testId from '@constants/testId';
import { ValidationError, LoginRequest, Scalars } from '@types';
import { HOME } from '@constants/routes';
import emailRegex from '@constants/regexps';
import AuthSection from '../../components/auth-section/AuthSection';
import { useLoginMutation } from '../../queries/AuthQuery';

const LoginPage = () => {
  const navigate = useNavigate();
  const translate = useTranslate();
  const [credentials, setCredentials] = useState<LoginRequest>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<ValidationError>({});
  const [resError, setResError] = useState<boolean>(false);
  const [resText, setResText] = useState<string>('');
  const [login, { isLoading }] = useLoginMutation();

  const validateForm = ({
    email,
    password
  }: LoginRequest): Scalars['Boolean'] => {
    let isValid: boolean = true;
    const err: ValidationError = {};
    if (!resError && password.trim().length === 0) {
      err.password = translate('authentication.login.password_error');
      isValid = false;
    }
    if (!resError && !validateWithRegexp(emailRegex, email)) {
      err.email = translate('authentication.login.email_error');
      isValid = false;
    }
    setError(err);
    return isValid;
  };

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setResError(false);
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (name === 'email') setError({ ...error, email: '' });
    else setError({ ...error, password: '' });
  };

  const onForgotPasswordClick = () => {
    // TODO: needs to be handled
  };

  const handleSubmit = async () => {
    const { email, password } = credentials;
    if (validateForm({ email, password })) {
      const res = await login(credentials);
      if ('error' in res) {
        setResError(true);
        setResText(res.error?.data?.message);
      } else navigate(HOME.HOME);
    }
  };

  return (
    <AuthSection
      pageTitle={translate('authentication.login.page_tab_title')}
      title={translate('authentication.login.title')}
      description={translate('authentication.login.description')}
    >
      <Input
        label={translate('authentication.login.email')}
        name="email"
        className="mt-9 w-full"
        value={credentials.email}
        onChange={handleChange}
        autoComplete="username"
        type="email"
        error={!!error.email}
        errorMessage={error.email}
        maxLength={50}
        data-testid={testId.authentication.login.emailInput}
      />
      <Input
        label={translate('authentication.login.password')}
        name="password"
        className="mt-5 w-full"
        value={credentials.password}
        onChange={handleChange}
        error={!!error.password}
        errorMessage={error.password}
        type="password"
        autoComplete="current-password"
        maxLength={50}
        data-testid={testId.authentication.login.passwordInput}
      />
      {resError && (
        <p className="text-caption mt-2 mr-auto flex text-error">
          <Icon name="incorrect-circle" className="mr-1" />
          {resText}
        </p>
      )}
      <Button
        label={translate('authentication.login.login_button')}
        className="mt-9"
        size="full"
        handleClick={handleSubmit}
        data-testid={testId.authentication.login.submitButton}
        loading={isLoading}
      />
      <div className="mt-5 flex w-full flex-row justify-center">
        <Button
          variant="transparent"
          size="none"
          handleClick={onForgotPasswordClick}
          data-testid={testId.authentication.login.forgetPasswordButton}
          className="hover:underline"
        >
          <ButtonLabel
            label={translate('authentication.login.forgotPassword')}
            variant="transparent"
            className="font-normal text-background90"
          />
        </Button>
      </div>
    </AuthSection>
  );
};

export default LoginPage;
