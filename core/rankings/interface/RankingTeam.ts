export interface RankingTeamInterface {
    position: number;
    team: Team;
    points: number;
    season: number
};


interface Team {
    id: number;
    name: string;
    logo: string;
}