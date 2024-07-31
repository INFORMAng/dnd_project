export interface IChar {
  id: number;
  name: string;
  info: charInfo;
  stats: itemCount[];
  skills: itemDescription[];
  personality: itemDescription[];
  inventory: string[];
  history: string;
}

export interface IResponse {
  data: IChar[];
  isLoading?: boolean;
  error?: string;
}

interface itemCount {name: string; count: string}
interface itemDescription {name: string; description: string}

interface charInfo {
  health: itemCount,
  class: itemCount,
  race: itemCount,
}