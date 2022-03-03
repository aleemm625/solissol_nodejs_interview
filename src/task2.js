export const minimumPlayTimeWithHighestGoalScored = (players) => {
  let bestPlayer = {};
  for (let player of players) {
    const { playTime, scored } = player;
    const currentPlayerTimePerGoal = playTime / scored;
    if (
      Object.keys(bestPlayer).length < 1 ||
      currentPlayerTimePerGoal < bestPlayer?.['TimePerGoal']
    ) {
      bestPlayer['TimePerGoal'] = currentPlayerTimePerGoal;
      bestPlayer['player'] = player;
    }
  }
  return bestPlayer?.player;
};
