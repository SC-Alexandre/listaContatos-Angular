import { Grupo } from "./grupo";

export interface Contato {
  id?: number;
  name: string;
  email: string;
  phone: string;
  grupo?: Grupo[];
  favorito?: boolean;
}
