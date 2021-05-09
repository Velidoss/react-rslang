import IGameStats from './IGameStats';

export default interface IGameStatsToShow {
  savannahStats: IGameStats;
  sprintStats: IGameStats;
  puzzleStats: IGameStats;
  audioChallengeStats: IGameStats;
}
