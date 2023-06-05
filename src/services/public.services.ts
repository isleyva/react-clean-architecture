import axios from "axios";
import { ApiType } from "../models";

export const login = () => {
  const morty = axios.get<ApiType>(
    "https://rickandmortyapi.com/api/character/2"
  );
  return morty;
};
