import axios from 'axios';
import { User, UserDetailed, SearchUsersResponse } from '@/types';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export const searchUsers = async (query: string): Promise<User[]> => {
  if (!query.trim()) {
    return getUsers();
  }

  const response = await api.get<SearchUsersResponse>(`/search/users?q=${query}`);
  return response.data.items;
};

export const getUserDetails = async (username: string): Promise<UserDetailed> => {
  const response = await api.get<UserDetailed>(`/users/${username}`);
  return response.data;
};
