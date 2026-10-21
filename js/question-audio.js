import {LobbyAudio} from './lobby-audio.js';
// A shuffled bag uses all five tracks before reshuffling and avoids adjacent repeats.
export class QuestionAudio extends LobbyAudio {
 constructor(tracks,onChange=()=>{},random=Math.random){super('',onChange);this.tracks=tracks;this.random=random;this.bag=[];this.last=null;this.key=null;this.cutoffTimer=null;}
 nextTrack(){if(!this.bag.length){this.bag=[...this.tracks];for(let i=this.bag.length-1;i>0;i--){const j=Math.floor(this.random()*(i+1));[this.bag[i],this.bag[j]]=[this.bag[j],this.bag[i]];}if(this.bag.length>1&&this.bag.at(-1)===this.last)[this.bag[0],this.bag[this.bag.length-1]]=[this.bag.at(-1),this.bag[0]];}return this.last=this.bag.pop();}
 setQuestion(key,remaining=0,autoStart=false){clearTimeout(this.cutoffTimer);if(!key){this.key=null;super.setLobby(false);return;}
  if(key!==this.key){super.setLobby(false);this.key=key;this.src=this.nextTrack();this.player=null;this.active=true;this.session++;if(autoStart&&remaining>0)this.play();}
  if(remaining<=0){super.setLobby(false);return;}
  this.cutoffTimer=setTimeout(()=>{super.setLobby(false);},remaining*1000);
 }
 ensure(){const p=super.ensure();p.loop=false;return p;}
}
