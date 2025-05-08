import { useQuery } from '@tanstack/react-query';
import { getUsers, searchUsers, getUserDetails } from '@/lib/api';
import { User, UserDetailed } from '@/types/github-types';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });
};

export const useSearchUsers = (query: string) => {
  return useQuery<User[], Error>({
    queryKey: ['searchUsers', query],
    queryFn: () => searchUsers(query),
    enabled: query !== undefined,
  });
};

export const useUserDetails = (username: string) => {
  return useQuery<UserDetailed, Error>({
    queryKey: ['userDetails', username],
    queryFn: () => getUserDetails(username),
    enabled: !!username,
  });
};
