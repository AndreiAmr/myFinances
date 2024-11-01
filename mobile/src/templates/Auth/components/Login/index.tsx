import { Box } from 'native-base';
import React from 'react';
import { Input } from '../../../../atomic/atoms/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import { useLogin } from './useLogin';
import { EnvelopeIcon } from '../../../../assets/icons/envelope';
import { SecurityIcon } from '../../../../assets/icons/security';
import { LinearGradientButton } from '@/src/atomic/atoms/LinearGradientButton';

export const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useLogin();

  return (
    <Box marginTop={`${RFValue(10)}px`}>
      <Input
        label="Email"
        value={values.email}
        handleChange={handleChange('email')}
        placeholder="email@example.com"
        icon={<EnvelopeIcon />}
        error={errors.email}
      />
      <Box h="10px" />
      <Input
        label="Senha"
        value={values.password}
        handleChange={handleChange('password')}
        placeholder="******"
        hideContent
        icon={<SecurityIcon />}
        error={errors.password}
      />
      <Box h="15px" />

      <LinearGradientButton label="Acessar o app" onPress={handleSubmit} />
    </Box>
  );
};
