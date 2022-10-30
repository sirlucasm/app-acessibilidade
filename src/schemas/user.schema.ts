import * as yup from 'yup';

export const CreateUserSchema = yup.object().shape({
  name: yup
    .string()
    .required('O nome não pode ser vazio'),
  email: yup
    .string()
    .required('O email não pode ser vazio')
    .email('Digite um email válido'),
  password: yup
    .string()
    .required('A senha não pode ser vazia')
    .min(6, 'A senha deve conter pelo menos 6 dígitos')
});

export const UpdateUserSchema = yup.object().shape({
  name: yup
    .string()
    .required('O nome não pode ser vazio'),
  email: yup
    .string()
    .required('O email não pode ser vazio')
    .email('Digite um email válido'),
  reducedMobility: yup
    .boolean()
});
