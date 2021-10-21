import {Dispatch} from "react";
import {IStateData, MyAction} from "../../types/global";
import {useAppDispatch, useAppState} from "../context";

export type UseAppStore = [IStateData, Dispatch<MyAction>]
export function useAppStore(): UseAppStore{
    return [useAppState(), useAppDispatch()]
}
