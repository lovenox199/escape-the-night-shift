export function scoreAnswer(answer,correct){return Number.isInteger(answer)&&answer>=0&&answer<=3&&answer===correct?3:0;}
export function rankedTeams(teams){return [...teams].sort((a,b)=>b.score-a.score);}
export function winners(teams){const max=Math.max(...teams.map(t=>t.score));return teams.filter(t=>t.score===max);}
export const answerLabels=['A','B','C','D'];
