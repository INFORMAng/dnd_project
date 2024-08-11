export interface ICharacter {
  id: number;
  name: string;
  info: itemCount[];
  stats: itemCount[];
  skills: itemDescription[];
  personality: itemDescription[];
  inventory: string[];
  history: string;
}

export interface ICharacterScheme {
  characters: ICharacter[]
}

export interface IResponse {
  data: ICharacter[];
  isLoading?: boolean;
  error?: string;
}

interface itemCount {name: string; count: string}
interface itemDescription {title: string; description: string}

