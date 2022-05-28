import { useContext } from "react"
import { Context } from "../context/AppContext"

const useAppContext = () => {
    return useContext(Context);
}

export default useAppContext;