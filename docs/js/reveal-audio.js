import {LobbyAudio} from './lobby-audio.js';
// One cue per reveal, even when state polls or the screen renders again.
export class RevealAudio extends LobbyAudio {
 constructor(src){super(src);this.key=null;}
 ensure(){const p=super.ensure();p.loop=false;return p;}
 setReveal(key,autoStart=false,volume=.25,muted=false){
  this.setVolume(volume);this.muted=muted;if(this.player)this.player.muted=muted;
  if(key===this.key)return;
  super.setLobby(false);this.key=key;
  if(key)super.setLobby(true,autoStart);
 }
}
