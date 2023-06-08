import axios from "axios";
import { ApiType } from "../models";

export const login1 = () => {
  const character1 = axios.get<ApiType>(
    "https://rickandmortyapi.com/api/character/2"
  );
  return character1;
};

//9