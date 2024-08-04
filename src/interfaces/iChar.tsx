export interface IChar {
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
  chars: IChar[]
}

export interface IResponse {
  data: IChar[];
  isLoading?: boolean;
  error?: string;
}

interface itemCount {name: string; count: string}
interface itemDescription {title: string; description: string}

