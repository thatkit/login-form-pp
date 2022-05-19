import React, { useEffect, useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import isStrongPassword from 'validator/es/lib/isStrongPassword';
import { observer } from 'mobx-react-lite';
import { ActionGroup, InputGroup, Span } from './styles';
import { ActionBtn, Input, Link } from '../../../../styles/universalComponents';
import { useFormState } from '../../store';

export const FormComponent = observer((): JSX.Element => {
  const [state] = useState(useFormState());

  const [isDisabled, setIsDisabled] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState<boolean | undefined>(
    undefined
  );
  const [isStrongPass, setIsStrongPass] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    if (isValidEmail && isStrongPass) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [isValidEmail, isStrongPass]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        state.login();
      }}
    >
      <InputGroup>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          autoComplete="email"
          onChange={(e) => {
            setIsValidEmail(isEmail((e.target as HTMLInputElement).value));
            state.email = e.target.value;
          }}
          alt={`${isValidEmail}`}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={(e) => {
            setIsStrongPass(
              isStrongPassword((e.target as HTMLInputElement).value, {
                minSymbols: 0,
              })
            );
            state.pass = e.target.value;
          }}
          alt={`${isStrongPass}`}
        />
      </InputGroup>
      <ActionGroup>
        <Link disabled>
          <Span>Reset password</Span>
        </Link>
        <ActionBtn type="submit" disabled={isDisabled}>
          Log in
        </ActionBtn>
      </ActionGroup>
    </form>
  );
});
