/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {useState} from "react"
import AuthContext from './src/context/auth.context';

const MyApp = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <AuthContext.Provider value={{isLogin: isLogin, setIsLogin: setIsLogin}}>
            <App/>
        </AuthContext.Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
