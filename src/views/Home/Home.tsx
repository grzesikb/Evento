import { Container, Grid, Paper, Typography } from '@mui/material';

import Navbar from '../../components/Navbar';
import EventTypeCard from '../../components/EventTypeCard';
import OrderEvents from '../../components/OrderEvents';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container fixed maxWidth="xl">
        <OrderEvents />
      </Container>
    </div>
  );
};

export default Home;
