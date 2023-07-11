import {createContext} from "react"

const AuthContext = createContext({
    isLogin: Boolean,
    setIsLogin: (login: boolean) => {}
})



export default AuthContext