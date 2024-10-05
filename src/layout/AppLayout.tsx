import React from "react";

import { Grid, Layout as AntdLayout } from "antd";
import { ThemedLayoutContextProvider } from "../providers/ThemeLayoutProvider";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";


export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const breakpoint = Grid.useBreakpoint();
    const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;

    return (
        <ThemedLayoutContextProvider>
            <AntdLayout hasSider style={{ minHeight: "100vh" }}>
                <AppSidebar />
                <AntdLayout>
                    <AppHeader />
                    <AntdLayout.Content
                        style={{
                            padding: isSmall ? 32 : 16,
                        }}
                    >
                        {children}
                    </AntdLayout.Content>
                </AntdLayout>
            </AntdLayout>
        </ThemedLayoutContextProvider>
    );
};
