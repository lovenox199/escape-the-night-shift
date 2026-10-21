// Audio stays in one persistent player so polling never restarts the track.
export class LobbyAudio {
 constructor(src,onChange=()=>{}){this.src=src;this.onChange=onChange;this.player=null;this.active=false;this.playing=false;this.volume=.25;this.muted=false;this.session=0;}
 ensure(){if(this.player)return this.player;const p=new Audio(this.src);p.loop=true;p.preload='none';p.volume=this.volume;p.muted=this.muted;p.addEventListener('ended',()=>{this.playing=false;this.onChange();});this.player=p;return p;}
 setLobby(active,autoStart=false){if(!active){this.active=false;this.session++;if(this.player){this.player.pause();this.player.currentTime=0;}this.playing=false;this.onChange();return;}if(this.active)return;this.active=true;this.session++;if(autoStart)this.play();}
 async play(){if(!this.active)return;const token=this.session;try{await this.ensure().play();if(!this.active||token!==this.session){if(!this.active)this.player.pause();return;}this.playing=true;}catch{this.playing=false;}this.onChange();}
 pause(){if(this.player)this.player.pause();this.playing=false;this.onChange();}
 toggle(){if(this.playing)this.pause();else this.play();}
 setVolume(value){this.volume=Math.max(0,Math.min(1,Number(value)));if(this.player)this.player.volume=this.volume;this.onChange();}
 toggleMute(){this.muted=!this.muted;if(this.player)this.player.muted=this.muted;this.onChange();}
}
