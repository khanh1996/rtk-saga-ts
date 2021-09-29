import { login, LoginParam, loginSelector } from 'app/core/features/customer/login/loginSlice';
import { useAppDispatch, useAppSelector } from 'app/core/redux/hooks';
import Loading from 'app/ui/components/common/Loading';
import { useSessionContext } from 'app/ui/hooks/useSessionContext';
import { colors } from 'app/ui/utils/styles';
import styled from 'styled-components';

const CustomerLoginPage = () => {
  const dispatch = useAppDispatch();
  const { isFetching } = useAppSelector(loginSelector);
  function onClickLogin() {
    const paramLogin: LoginParam = {
      email: ' email@gmail.com',
      password: '123',
    };
    dispatch(login(paramLogin));
  }
  return (
    <div>
      <ButtonLogin onClick={onClickLogin}>
        {isFetching ? <Loading width="30px" height="30px" borderWidth="3px" /> : 'Login'}
      </ButtonLogin>
    </div>
  );
};

export default CustomerLoginPage;

const ButtonLogin = styled.button`
  border-radius: 8px;
  border: 1px solid ${colors.pink.base};
  background-color: ${colors.pink.base};
  color: ${colors.silver.base};
  outline: none;
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
