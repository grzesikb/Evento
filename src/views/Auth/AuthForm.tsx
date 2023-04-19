import { Box, Button, Grid, Link, Typography } from '@mui/material';
import React, { ReactNode, useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';

interface SignFormProps {
  children: ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  navigateText: string;
}
const Form = ({ children, handleClick, text, navigateText }: SignFormProps) => {
  const { theme } = useContext(SettingsContext);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
      }}
    >
      <Typography component="h1" variant="h5" sx={{ fontWeight: 600 }}>
        {text}
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: '400px',
        }}
      >
        {children}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2, p: 1 }}
          onClick={handleClick}
        >
          {text}
        </Button>

        <Grid container>
          {/* <Grid item xs>
            {options.forgotPassword && (
              <Link href="../auth/forgot" color="#000" variant="body2">
                Zapomniałeś hasła?
              </Link>
            )}
          </Grid> */}
          <Grid item>
            <Link
              href="../auth/signup"
              color={theme === 'dark' ? '#fff' : '#000'}
              variant="body2"
            >
              {navigateText}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
