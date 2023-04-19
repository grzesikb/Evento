import { useState } from 'react';
import { TextField } from '@mui/material';
import Form from './AuthForm';

const SignIn = () => {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  // const errors = useValidate(data as LoginDataInterface, signInSchema);

  // const { mutateAsync, isSuccess } = useMutation(signInService);
  // const { state, dispatch } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   const loginPromise = mutateAsync(data);

  //   await statusNotifier<AxiosResponse>(loginPromise, {
  //     pendingText: 'Logowanie...',
  //     successText: 'Zalogowano!',
  //     toastId,
  //   })
  //     .then((response: AxiosResponse) => {
  //       dispatch({ type: ACTIONS.loadUser, payload: { ...response.data } });
  //     })
  //     .catch((err) => console.log(err));
  // };
  const onSubmit = async () => {};
  // if (state.user) {
  // 	navigate('../../home');
  // }
  return (
    <Form
      handleClick={() => onSubmit()}
      text="Zaloguj się"
      navigateText="Nie masz konta? Zarejestruj się!"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Adres email"
        name="email"
        autoComplete="email"
        autoFocus
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <TextField
        margin="dense"
        required
        fullWidth
        name="password"
        label="Hasło"
        type="password"
        id="password"
        autoComplete="current-password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
    </Form>
  );
};

export default SignIn;
