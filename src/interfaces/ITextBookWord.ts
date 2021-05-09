import IGameStats from './IGameStats';

export default interface ITextBookWord {
  audio: string;
  audioExample: string;
  audioMeaning: string;
  group: number;
  image: string;
  page: number;
  textExample: string;
  textExampleTranslate: string;
  textMeaning: string;
  textMeaningTranslate: string;
  transcription: string;
  word: string;
  wordTranslate: string;
  _id: string;
  id?: string;
  question?: any;
  optional?: {
    savannah?: IGameStats;
    sprint?: IGameStats;
    puzzle?: IGameStats;
    audioChallenge?: IGameStats;
  };
}
