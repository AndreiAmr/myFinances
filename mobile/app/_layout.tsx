import React, { createRef } from 'react';
import {
  CommonActions,
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import Routes from '../src/routes';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from '../src/store';
import { RoutesEnum } from '../src/routes/types';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export function navigate(name: RoutesEnum, params?: any) {
  if (navigationRef.current?.isReady()) {
    navigationRef?.current?.navigate(name, params);
  }
}

export function navigateReset(name: RoutesEnum, params?: any) {
  if (navigationRef.current?.isReady()) {
    navigationRef?.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      })
    );
  }
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} independent>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
