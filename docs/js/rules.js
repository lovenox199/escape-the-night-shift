export function scoreAnswer(answer,truth){
 if(!Array.isArray(answer)||answer.length!==3||answer.some(v=>typeof v!=='boolean'))return 0;
 return truth.reduce((n,v,i)=>n+(answer[i]===v?1:0),0);
}
export function rankedTeams(teams){return [...teams].sort((a,b)=>b.score-a.score);}
export function winners(teams){const max=Math.max(...teams.map(t=>t.score));return teams.filter(t=>t.score===max);}
export const answerLabels=['A','B','C'];
