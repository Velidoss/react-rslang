import IGameStats from './IGameStats';

export default interface IUserWord {
  wordId: string;
  id: string;
  name: string;
  difficulty: string;
  optional?: {
    deleted?: boolean;
    savannah?: IGameStats;
    sprint?: IGameStats;
    puzzle?: IGameStats;
    audioChallenge?: IGameStats;
  }
}