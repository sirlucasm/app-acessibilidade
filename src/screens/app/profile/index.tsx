import { Text, View } from 'react-native';
import { Container } from '../../../styles/container';
import { TopHeader } from '../../../components/TopHeader';

const Home = () => {
  return (
    <Container>
      <TopHeader />
      <Text>Home</Text>
    </Container>
  )
}

export default Home;
