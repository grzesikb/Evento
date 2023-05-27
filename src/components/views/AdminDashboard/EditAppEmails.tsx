import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AppContainer from '../../common/AppContainer';
import { IEmailsApp } from '../../../shared/interfaces/admin.interface';

const EditAppEmails = () => {
  const [emails, setEmails] = useState<IEmailsApp>({
    securityEmail: '',
    accountantEmail: '',
  });
  // tymaczsowo żeby dac jakies dane
  React.useEffect(() => {
    setEmails({
      securityEmail: 'security@gmail.com',
      accountantEmail: 'accountant@gmail.com',
    });
  }, []);

  return (
    <AppContainer back="/app/dashboard" label="Edit app emails" navbar>
      <TextField
        margin="dense"
        required
        fullWidth
        id="securityEmail"
        label="Security Email"
        name="securityEmail"
        value={emails.securityEmail}
        onChange={(e) =>
          setEmails({ ...emails, securityEmail: e.target.value })
        }
      />
      <TextField
        margin="dense"
        required
        fullWidth
        id="accountantEmail"
        label="Accountant Email"
        name="accountantEmail"
        value={emails.accountantEmail}
        onChange={(e) =>
          setEmails({ ...emails, accountantEmail: e.target.value })
        }
      />
      <Button variant="contained" sx={{ fontWeight: 600, mt: 3 }}>
        Edit emails
      </Button>
    </AppContainer>
  );
};

export default EditAppEmails;
