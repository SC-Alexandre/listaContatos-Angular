import { Grupo } from "./grupo";

export interface Contato {
  id?: number;
  name: string;
  email: string;
  phone: string;
  groups: Grupo[];
  favorite?: boolean;
}
