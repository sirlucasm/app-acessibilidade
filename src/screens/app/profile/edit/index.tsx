import { ProfileHeader } from "@components/TopHeader/profileHeader";
import { Avatar, Box, ScrollView, View, VStack } from 'native-base';
import { DeficienciesInfo } from '../styles';
import useAuthContext from "src/contexts/auth-context/use-auth-context";
import { useUser } from "src/hooks/use-user";
import { getUserNameLetters } from 'src/utils/user';
import { TERTIARY } from '@styles/colors';
import AppLoading from '@components/AppLoading';
import { EditProfileForm } from "./form";
import { storage } from 'src/configs/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";


const EditProfile = () => {
  const { user, deficiency } = useUser();
  const { currentUser }: any = useAuthContext();

  const handleChooseProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.cancelled) {
      handleUploadProfileImage(result.uri);
    }
  }

  const handleUploadProfileImage = async (imageFile: string) => {
    const image = await fetch(imageFile);
    const imageBlob = await image.blob();
    const storageRef = ref(storage, `images/profpics/${Date.now()}_${user.email}`);
    const snapshot = await uploadBytes(storageRef, imageBlob);
    const downloadURL = await getDownloadURL(snapshot.ref);
    await updateProfile(currentUser, {
      photoURL: downloadURL,
    });
  }

  if (!user || !deficiency) return <AppLoading />;

  return (
    <>
      <ProfileHeader editProfile />
      <VStack alignItems='center' bottom='16' margin={0}>
        <Box position='relative'>
          <Avatar
            size="2xl"
            bg="blue.500"
            source={{ uri: currentUser?.photoURL || 'https://bit.ly/broken-link' }}
            borderColor={TERTIARY}
            borderWidth={12}
          >
            {getUserNameLetters(currentUser?.displayName || '')}
          </Avatar>
          <View
            position='absolute'
            right={4}
            bottom={4}
            backgroundColor={TERTIARY}
            borderRadius={5}
            padding={1}
          >
            <TouchableOpacity onPress={handleChooseProfileImage}>
              <Octicons name='pencil' size={17} />
            </TouchableOpacity>
          </View>
        </Box>
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
