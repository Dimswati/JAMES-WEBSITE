import { createContext, useContext, useState } from "react";
import fetchUser from "../api/fetchUser";

export const AuthContext = createContext({
    user: undefined,
    isLoading: false,
    setUser: ()=>{},
})

const AuthProvder = ({children}) => {
    const [ userData, setUserData ] = useState();
    const [ isloading, setIsLoading ] = useState();

    const fetchLoggedInUser = async() =>{
        setIsLoading(true)
        try{
            const response = await fetchUser.get({
                auth: {
                    
                }
            })
            setUserData(response.data)
            
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchLoggedInUser()
    }, [0]);

    const handleUser = (user) => {
        setUserData(user);
    }

    return (
        <AuthContext.Provider value={{user: userData, setUser: handleUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = useContext(AuthContext)

export default AuthProvder;