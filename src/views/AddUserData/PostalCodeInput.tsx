import * as React from 'react';
import { IMaskInput } from 'react-imask';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import { OutlinedInput, TextField } from '@mui/material';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref: any) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00-000"
        // definitions={{
        //   '#': () => /[1-9]/,
        // }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

interface State {
  textmask: string;
  numberformat: string;
}

// eslint-disable-next-line react/function-component-definition
export default function PostalCodeInput() {
  const [values, setValues] = React.useState<State>({
    textmask: 'XX-XXX',
    numberformat: '1320',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="component-outlined">Postal Code</InputLabel>
      <OutlinedInput
        label="Postal Code"
        value={values.textmask}
        onChange={handleChange}
        name="component-outlined"
        id="component-outlined"
        inputComponent={TextMaskCustom as any}
        sx={{ width: 450 }}
      />
      {/* <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={values.textmask}
          onChange={handleChange}
          defaultValue="xx-xxx"
          label="Name"
          inputComponent={TextMaskCustom as any}
          sx={{ width: 450 }}
        />
      </FormControl> */}
      {/* <TextField
        margin="dense"
        required
        fullWidth
        id="postalCode"
        label="Postal Code"
        name="postalCode"
        autoComplete="postal-code"
        autoFocus
        onChange={handleChange}
        value={values.textmask}
        inputProps={{ component: TextMaskCustom as any }}
      /> */}
    </FormControl>
  );
}
