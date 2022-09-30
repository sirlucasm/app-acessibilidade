import { Text, View } from 'react-native';
import { HeaderContainer } from '@styles/containers';
import { TopHeader } from '@components/TopHeader';

const Home = () => {
  return (
    <HeaderContainer>
      <TopHeader />
      <Text>Home</Text>
    </HeaderContainer>
  )
}

export default Home;
