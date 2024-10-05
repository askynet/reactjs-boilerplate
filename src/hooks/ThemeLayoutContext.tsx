import { useContext } from "react";
import { ThemedLayoutContext } from "../providers/ThemeLayoutProvider";

export interface IThemedLayoutContext {
    siderCollapsed: boolean;
    setSiderCollapsed: (visible: boolean) => void;
    mobileSiderOpen: boolean;
    setMobileSiderOpen: (visible: boolean) => void;
    selectedKey: any;
}

export type UseThemedLayoutContextType = IThemedLayoutContext;

export const useThemedLayoutContext = (): UseThemedLayoutContextType => {
    const {
        mobileSiderOpen,
        siderCollapsed,
        setMobileSiderOpen,
        setSiderCollapsed,
        selectedKey
    } = useContext(ThemedLayoutContext);

    return {
        mobileSiderOpen,
        siderCollapsed,
        setMobileSiderOpen,
        setSiderCollapsed,
        selectedKey
    };
};
