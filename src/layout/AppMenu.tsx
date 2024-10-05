import {
    CalendarOutlined,
    ContainerOutlined,
    CrownOutlined,
    DashboardOutlined,
    ProjectOutlined,
    ShopOutlined,
    TeamOutlined,
} from "@ant-design/icons";

export const AppMenu: any[] = [
    {
        label: "Dashboard",
        list: "/",
        icon: <DashboardOutlined />,
    },
    {
        label: "Companies",
        icon: <ShopOutlined />,
        list: "/companies",
        show: "/companies/:id",
        create: "/companies/create",
        edit: "/companies/edit/:id",
    },
    {
        label: "Permissions",
        icon: <CrownOutlined />,
        children: [{
            label: "Routes",
            parent: "scrumboard",
            list: "/scrumboard/kanban",
            create: "/scrumboard/kanban/create",
            edit: "/scrumboard/kanban/edit/:id",
        },
        {
            label: "Permissions",
            create: "/scrumboard/kanban/stages/create",
            edit: "/scrumboard/kanban/stages/edit/:id",
            list: "/scrumboard/kanban",
            meta: {
                hide: true,
            },
        }]
    }
];
