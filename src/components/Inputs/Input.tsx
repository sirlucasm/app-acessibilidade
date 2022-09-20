import { IInputProps, Input as NativeBaseInput } from "native-base";
import { Feather } from "@expo/vector-icons";
import { GRAY_DARK } from "@styles/colors";
import { fontPixel } from "src/utils/normalize";

type InputType = IInputProps & {
  iconName?: any;
}

const Input = ({ iconName = "activity", ...props }: InputType) => {
  return (
    <NativeBaseInput
      InputLeftElement={
        <Feather
          name={iconName}
          size={fontPixel(18)}
          color={GRAY_DARK}
          style={{ marginLeft: 12 }}
        />
      }
      _important={{
        borderRadius: 12,
        borderColor: GRAY_DARK,
      }}
      _focus={{
        backgroundColor: 'transparent',
        borderColor: GRAY_DARK,
        borderRadius: 12,
      }}
      {...props}
    />
  );
}

export default Input;
