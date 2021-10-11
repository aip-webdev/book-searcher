import {useAppDispatch, useAppState} from "../context";

export function useAppStore() {
    return [useAppState(), useAppDispatch()]
}