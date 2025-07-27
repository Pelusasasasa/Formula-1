import { Ionicons } from "@expo/vector-icons";

interface MenuRoute {
    titulo: string;
    descripcion: string;
    name?: string;
    icon: keyof typeof Ionicons.glyphMap;
}

export const MenuRoutes: MenuRoute[] = [
    // {
    //     titulo: 'Proxima Carrera',
    //     descripcion: 'GP de las VEGAS . 23 Nov 2024',
    //     icon: "flag-outline",
    //     name: 'ranking/piloto/index'
    // },
    {
        titulo: 'Clasificacion de Pilotos',
        descripcion: 'Ver Standings Actules',
        icon: "trophy-outline",
        name: '(ranking)/piloto/index'
    },
    {
        titulo: 'Clasificacions de Constructores',
        descripcion: 'Informacion de la tabla',
        icon: "stats-chart-outline",
        name: '(ranking)/equipo/index'
    },
    {
        titulo: 'Equipos',
        descripcion: 'Informacion de equipos',
        icon: "people-outline",
        name: '/team/index'
    },
    {
        titulo: 'Calendario',
        descripcion: 'Todas las carreras de la temporada',
        icon: "calendar-outline",
        name: 'calendar/index'
    },
    // {
    //     titulo: 'Resultados',
    //     descripcion: 'Ultimas carreras y clasificaciones',
    //     icon: "stopwatch-outline",
    //     name: 'stadistic/index'
    // },
    // {
    //     titulo: 'Noticias',
    //     descripcion: 'Ultimas Notificas de la F1',
    //     icon: "document-text-outline",
    //     name: 'ranking/piloto/index'
    // },
    // {
    //     titulo: 'Circuitos',
    //     descripcion: 'Informacion de todos los circuitos',
    //     icon: "at-circle-outline",
    //     name: 'ranking/piloto/index'
    // },
]