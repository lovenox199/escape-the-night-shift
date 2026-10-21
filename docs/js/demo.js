import {TEAMS,LESSONS,DECK_VERSION} from './content.js';
import {ANSWERS} from './demo-answers.js';
import {scoreAnswer} from './rules.js';
export class Demo {
 constructor(){this.state={code:'DEMO',phase:'lobby',current_q:0,lecture_page:0,version:0,paused:false,duration:20,remaining:20,deck:DECK_VERSION,host:true,teams:TEAMS.map(t=>({color:t.id,score:0,claimed:true,online:true,answered:false})),key:null};this.raceDeadline=0;this.deadline=0;this.answers={};this.auto=true;}
 openQuestion(){const s=this.state;s.phase='question';s.key=null;s.lecture_page=0;s.remaining=s.duration;s.paused=false;this.deadline=Date.now()+s.duration*1000;this.answers={};s.teams.forEach(t=>{t.answered=false;t.points=null;});}
 getState(){if(this.state.phase==='question'&&!this.state.paused&&Date.now()>=this.deadline)this.reveal();if(this.state.phase==='race'&&Date.now()>=this.raceDeadline){this.state.phase='teach';this.state.lecture_page=0;this.state.version++;}const s=structuredClone(this.state);s.race_remaining=s.phase==='race'?Math.max(0,(this.raceDeadline-Date.now())/1000):0;if(s.phase==='question'&&!s.paused)s.remaining=Math.max(0,(this.deadline-Date.now())/1000);return s;}
 setAnswer(color,choices){const s=this.getState();if(s.phase!=='question'||s.remaining<=0)throw Error('Answers are closed');this.answers[color]=choices;this.state.teams.find(t=>t.color===color).answered=true;}
 reveal(){const s=this.state;if(s.phase!=='question')return;const key=ANSWERS[LESSONS[s.current_q].id];
  s.teams.forEach(t=>{if(this.auto&&!this.answers[t.color])this.answers[t.color]=key.truth.map(v=>Math.random()<.72?v:!v);t.points=scoreAnswer(this.answers[t.color],key.truth);t.score+=t.points;t.answered=!!this.answers[t.color];});
  s.phase='reveal';s.paused=false;s.key=key;s.version++;
 }
 command(action){const s=this.state;
 if(['pause','resume'].includes(action))throw Error('Questions use a fixed 20-second timer');
 if(action==='previous'&&s.phase==='teach')s.lecture_page=Math.max(0,s.lecture_page-1);
 if(action==='next'){
  if(s.phase==='lobby')this.openQuestion();
  else if(s.phase==='reveal'){s.phase='race';this.raceDeadline=Date.now()+6000;}
  else if(s.phase==='teach'&&s.lecture_page<LESSONS[s.current_q].pages.length-1)s.lecture_page++;
  else if(s.phase==='teach'){
   if(s.current_q===LESSONS.length-1)s.phase='finished';
   else{s.current_q++;this.openQuestion();}
  }
 }
 if(action==='reveal'){if(s.phase!=='question')throw Error('No question to reveal');if(Date.now()<this.deadline)throw Error('The 20-second question timer is still active');this.reveal();return this.getState();}
 s.version++;return this.getState();
 }
}
