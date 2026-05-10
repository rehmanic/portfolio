import {
    Home,
    FolderOpen,
    Palette,
    Briefcase,
    Github,
    Linkedin,
    Instagram,
    Mail,
} from "lucide-react";

export const SOCIAL_LINKS = [
    {
        icon: Github,
        label: "GitHub",
        url: "https://github.com/rehmanic",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/abdurrehman-swe",
    },
    {
        icon: Instagram,
        label: "Instagram",
        url: "https://www.instagram.com/sveltosoftware/",
    },
    {
        icon: Mail,
        label: "Email",
        url: "https://mail.google.com/mail/?view=cm&to=abdurrehman.swe@gmail.com",
    },
];

export const NAV_ITEMS = [
    {
        icon: Home,
        label: "Home",
        path: "/",
    },
    {
        icon: FolderOpen,
        label: "Projects",
        path: "/projects",
    },
    {
        icon: Palette,
        label: "Skills",
        path: "/skills",
    },
    {
        icon: Briefcase,
        label: "Experience",
        path: "/experience",
    },
];
