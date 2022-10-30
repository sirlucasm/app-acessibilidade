import { ProfileHeader } from "@components/TopHeader/profileHeader";
import { Avatar, ScrollView, VStack } from 'native-base';
import { DeficienciesInfo } from '../styles';
import useAuthContext from "src/contexts/auth-context/use-auth-context";
import { useUser } from "src/hooks/use-user";
import { getUserNameLetters } from 'src/utils/user';
import { TERTIARY } from '@styles/colors';
import AppLoading from '@components/AppLoading';
import { EditProfileForm } from "./form";


const EditProfile = () => {
  const { user, deficiency } = useUser();
  const { currentUser } = useAuthContext();

  if (!user || !deficiency) return <AppLoading />;

  return (
    <>
      <ProfileHeader editProfile />
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
      </VStack>
      <DeficienciesInfo>
        <ScrollView bottom='10' w={["280", "300"]}>
          <EditProfileForm
            user={user}
            deficiency={deficiency}
          />
        </ScrollView>
      </DeficienciesInfo>
    </>
  );
}

export default EditProfile;
