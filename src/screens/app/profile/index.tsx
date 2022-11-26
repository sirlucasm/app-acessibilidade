import { useUser } from 'src/hooks/use-user';
import { ProfileHeader } from '@components/TopHeader/profileHeader';
import { DeficienciesContent, DeficienciesInfo } from './styles';
import { Avatar, Box, Button, HStack, ScrollView, Text, VStack } from 'native-base';
import { TERTIARY } from '@styles/colors';
import useAuthContext from 'src/contexts/auth-context/use-auth-context';
import { getUserNameLetters } from 'src/utils/user';
import { Spinner } from '@components/AppLoading/Spinner';
import { Octicons } from '@expo/vector-icons';
import AppLoading from '@components/AppLoading';
import { NavigationProp } from '@react-navigation/native';

interface ProfileProps {
  navigation: NavigationProp<any, 'Profile'>;
}

const Profile = ({ navigation }: ProfileProps) => {
  const { user } = useUser();
  const { currentUser } = useAuthContext();

  if (!user) return <AppLoading />;

  return (
    <>
      <ProfileHeader />
      <VStack alignItems='center' bottom='12' margin={-5}>
        <Avatar
          size="2xl"
          bg="blue.500"
          source={{ uri: currentUser?.photoURL || 'https://bit.ly/broken-link' }}
          borderColor={TERTIARY}
          borderWidth={12}
        >
          {getUserNameLetters(user?.name || '')}
        </Avatar>
        <Text fontSize='xl'>{user?.name}</Text>
        <Text fontSize='sm' underline >{user?.email}</Text>
      </VStack>
      <DeficienciesInfo>
        <ScrollView>
          <DeficienciesContent w={["280", "300"]}>
            <Text fontSize='md'>Deficiência(s)</Text>
            <HStack flexWrap='wrap'>
            {
              !user?.deficiency?.data.length ?
              <Text color="#424242" marginTop={2}>Nenhuma deficiência</Text>
              :
              user.deficiency.data.map((def: any, index: number) => (
                <HStack key={index} alignItems='center' mt='2' mx='3'>
                  <Octicons
                    name="dot"
                    size={18}
                    color="#424242"
                    style={{ marginRight: 5 }}
                  />
                  <Text color="#424242">{def}</Text>
                </HStack>
              ))
            }
            </HStack>
          </DeficienciesContent>
          <DeficienciesContent mt='4'>
            <Text fontSize='md'>Mobilidade Reduzida</Text>
            <HStack alignSelf='flex-start' mt='2' mx='3'>
              <Octicons
                name="dot"
                size={18}
                color="#424242"
                style={{ marginRight: 5 }}
              />
              <Text color="#424242">
                { user?.deficiency?.reducedMobility ? 'Sim' : 'Não' }
              </Text>
            </HStack>
          </DeficienciesContent>
          <Button
            variant='outline'
            _text={{ color: '#323232' }}
            width={100}
            mt='6'
            alignSelf='center'
            borderColor='#828282'
            onPress={() => navigation.navigate('EditProfile')}
          >
            Editar perfil
          </Button>
        </ScrollView>
      </DeficienciesInfo>
    </>
  )
}

export default Profile;
