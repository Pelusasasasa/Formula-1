import { getRankigsDrivers } from '@/core/rankings/actions/get-rankings-drivers';
import { useQuery } from '@tanstack/react-query';

export const useRankingsDrivers = (season: number) => {

    const rankingsDriversQuery = useQuery({
        queryKey: ['rankingsDrivers', 'infinit'],
        queryFn: () => getRankigsDrivers(season),
        staleTime: 1000*60*5
    });

    return {
        rankingsDriversQuery
    }
};