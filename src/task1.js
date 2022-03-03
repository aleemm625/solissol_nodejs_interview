export const teamResult = (teams) => {
  // sortedTeams = [{teamName:'ABC', victories:4}, {teamName:'BCD', victories:3}]
  const sortedTeams = teams
    ?.map((team) => {
      return {
        teamName: team?.teamName,
        victories: Object.keys(team).filter((key) => {
          return team[key] == 'W';
        }).length,
      };
    })
    .sort((a, b) => b.victories - a.victories);

  let position = 0;
  let result = [];

  // result = [{teamName:'ABC', position:1}, {teamName:'BCD', position:2}]
  for (let team of sortedTeams) {
    position += 1;
    result.push({
      teamName: team?.teamName,
      position: position,
    });
  }

  return result;
};
