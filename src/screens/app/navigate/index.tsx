import { Button } from 'native-base';
import { View } from 'react-native';
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { TopHeader } from '@components/TopHeader';
import { HeaderContainer } from '@styles/containers';


const Navigate = () => {
  const { logout } = useAuthContext()

  return (
    <HeaderContainer>
      <TopHeader />
      <View style={{ marginTop: 40 }}>
        <Button onPress={logout}>
          Sair
        </Button>
      </View>
    </HeaderContainer>
  )
}

export default Navigate;
