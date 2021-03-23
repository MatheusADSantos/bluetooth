
import React from 'react';
import { useEffect } from 'react';
import OneSignal from 'react-native-onesignal';
import { Constantes } from './src/constants/Constantes'

function configOnesignal() {
  useEffect(() => {
    OneSignal.requestPermissions();
    Platform.OS === 'ios' ? OneSignal.init(Constantes.APP_ID_ONE_SIGNAL, { kOSSettingsKeyAutoPrompt: true }) : OneSignal.init(Constantes.APP_ID_ONE_SIGNAL)
    OneSignal.configure();
  }, [])
}

export default class App extends Component {

  this.configOnesignal()

};

export default App;
