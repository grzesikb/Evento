import { useState } from 'react';
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Form from './AuthForm';
import Navbar from '../../common/Navbar/Navbar';

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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Box>
      <Navbar hideMenu />
      <Form
        handleClick={() => onSubmit()}
        text="Sign In"
        navigateText="Don't have an account? Create account now!"
        navigatePath="../auth/signup"
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
        <FormControl sx={{ mt: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Form>
    </Box>
  );
};

export default SignIn;
