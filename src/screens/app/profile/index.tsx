import { Text, View } from 'react-native';
import { Container } from '../../../components/atoms/container';
import { TopHeader } from '../../../components/organisms/topHeader';

const Home = () => {
  return (
    <Container>
      <TopHeader />
      <Text>Home</Text>
    </Container>
  )
}

export default Home;
