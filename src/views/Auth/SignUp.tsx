import { useState } from 'react';
import { TextField } from '@mui/material';
import Form from './AuthForm';

const SignUp = () => {
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
      text="Sign Up"
      navigateText="Do you have an account? Login now!"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email address"
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
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <TextField
        margin="dense"
        required
        fullWidth
        name="password"
        label="Repeat your password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
    </Form>
  );
};

export default SignUp;
