export interface RankingDriver{
    position: number;
    driver: Driver
    team: Team;
    points: number | null;
    season: number;
    behind: number;
    wins: number;
};

interface Team{
    id: number;
    name: string;
    logo: string;
}

interface Driver{
    id: number;
    name: string;
    abbr: string;
    number: number;
    image: string;
}