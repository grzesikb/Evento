import { Chip } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IProps {
  onClick: () => any;
}

const Back = ({ onClick }: IProps) => (
  <div className="noSelect">
    <Chip
      label="Back"
      onClick={() => onClick}
      icon={<ChevronLeftIcon fontSize="small" />}
      variant="outlined"
      sx={{ mb: 3 }}
    />
  </div>
);

export default Back;
