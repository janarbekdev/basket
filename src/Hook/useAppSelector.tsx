import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStore} from "../Redux/Store";
export const useAppSelector : TypedUseSelectorHook<AppStore>= useSelector