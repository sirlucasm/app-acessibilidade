import { View } from 'react-native';
import { HeaderContainer } from '@styles/containers';
import { TopHeader } from '@components/TopHeader';
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

const Profile = () => {
  const { user } = useUser();
  const { currentUser } = useAuthContext();

  return (
    <>
      <ProfileHeader />
      {
        user ?
        <>
          <VStack alignItems='center' bottom='16' margin={0}>
            <Avatar
              size="2xl"
              bg="blue.500"
              source={{ uri: currentUser?.photoURL || 'https://bit.ly/broken-link' }}
              borderColor={TERTIARY}
              borderWidth={12}
            >
              {getUserNameLetters(currentUser?.displayName || '')}
            </Avatar>
            <Text fontSize='xl'>{currentUser?.displayName}</Text>
            <Text fontSize='sm' underline >{currentUser?.email}</Text>
          </VStack>
          <DeficienciesInfo>
            <ScrollView>
              <DeficienciesContent w={["280", "300"]}>
                <Text fontSize='md'>Deficiência Física</Text>
                <HStack flexWrap='wrap'>
                {
                  user?.deficiency?.physics.map((def: any, index: number) => (
                    <HStack key={index} alignItems='center' mt='2' mx='3'>
                      <Octicons
                        name="dot"
                        size={18}
                        color="#323232"
                        style={{ marginRight: 5 }}
                      />
                      <Text color="#323232">{def}</Text>
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
                    color="#323232"
                    style={{ marginRight: 5 }}
                  />
                  <Text color="#323232">
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
              >
                Editar perfil
              </Button>
            </ScrollView>
          </DeficienciesInfo>
        </>
        :
        <AppLoading />
      }
    </>
  )
}

export default Profile;
