import { useMemo, useState } from 'react';
import { Button, Checkbox, HStack, Text, View, VStack } from 'native-base';
import { DeficienciesContent } from '../styles';
import RNPickerSelect from "react-native-picker-select";
import { Input } from "@components/Inputs";
import { heightPixel, widthPixel } from 'src/utils/normalize';
import { User } from 'src/@types/user.type';
import { Octicons } from '@expo/vector-icons';
import { deficiencies as deficienciesList } from 'src/utils/constants';
import { Toast } from 'toastify-react-native';
import { firestore } from 'src/configs/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { TouchableOpacity } from 'react-native';
import { GRAY_DARK } from '@styles/colors';
import { useNavigation } from '@react-navigation/native';
import AppLoading from '@components/AppLoading';

type EditProfileFormProps = {
  user: User;
  deficiency: any;
}

export const EditProfileForm = ({ user, deficiency }: EditProfileFormProps) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>(useMemo(() => user.email, []));
  const [name, setName] = useState<string>(useMemo(() => user.name, []));
  const [reducedMobility, setReducedMobility] = useState(useMemo(() => {
    return deficiency.reducedMobility || false
  }, [deficiency.reducedMobility]));
  const [deficiencies, setDeficiencies] = useState<any[]>(useMemo(() => {
    return deficiency.data || []
  }, [deficiency.data]));

  const handleEditProfile = async () => {
    const usersParams = { email, name };
    const deficienciesParams = {
      reducedMobility,
      data: deficiencies,
    };
    if (
      email === user.email &&
      name === user.name &&
      reducedMobility === deficiency.reducedMobility &&
      !deficiencies.length
    ) return;

    const userRef = doc(firestore, 'users', user.uid);
    const deficienciesRef = doc(firestore, 'deficiencies', user.uid);

    await updateDoc(userRef, usersParams);
    await updateDoc(deficienciesRef, deficienciesParams);

    Toast.success('Perfil atualizado.');

    setTimeout(() => {
      navigation.goBack();
    }, 400)
  }

  const handleRemoveDeficiencyFromList = (def: any) => {
    const clone = [...deficiencies];
    clone.splice(deficiencies.indexOf(def), 1);
    setDeficiencies(clone);
  }

  if (!user) return <AppLoading />;

  return (
    <>
      <Input
        placeholder='Email *'
        iconName='mail'
        isRequired
        onChangeText={(text) => setEmail(text)}
        value={email}
        defaultValue={user.email}
      />
      <Input
        placeholder='Nome *'
        marginY={4}
        iconName='user'
        isRequired
        onChangeText={(text) => setName(text)}
        value={name}
        defaultValue={user.name}
      />
      <VStack mt='1'>
        <Text fontSize='md'>Deficiência</Text>
        <RNPickerSelect
          onValueChange={(value) => setDeficiencies((prev) => [...prev, value])}
          items={deficienciesList}
          placeholder={{ label: 'Selecionar deficiência', value: null }}
          style={{
            viewContainer: { borderRadius: 12, borderColor: GRAY_DARK, borderWidth: 1 },
            placeholder: { color: GRAY_DARK }
          }}
        />
        <VStack mt={4}>
          {
            deficiencies.map((def, key) => (
              <HStack
                justifyContent='space-around'
                alignItems='center'
                key={key}
              >
                <View>
                  <Text>{def}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleRemoveDeficiencyFromList(def)}
                  activeOpacity={.7}
                >
                  <Octicons name='x' size={19} />
                </TouchableOpacity>
              </HStack>
            ))
          }
        </VStack>
      </VStack>
      <VStack mt='2'>
        <Text fontSize='md'>Mobilidade Reduzida</Text>
        <DeficienciesContent>
          <HStack>
            <Checkbox
              accessibilityLabel="choose value"
              value={String(reducedMobility)}
              defaultIsChecked={reducedMobility}
              onChange={(isSelected) => setReducedMobility(isSelected)}
            >
              <Text color="#424242">Sim</Text>
            </Checkbox>
          </HStack>
        </DeficienciesContent>
      </VStack>
      <Button
        style={{
          backgroundColor: '#1283C6',
          height: heightPixel(42),
          width: widthPixel(186),
          borderRadius: 12,
          alignSelf: 'center'
        }}
        marginTop={4}
        marginBottom={6}
        onPress={handleEditProfile}
      >
        Salvar
      </Button>
    </>
  )
}
