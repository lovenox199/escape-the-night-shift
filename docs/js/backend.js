const cfg=window.NIGHT_SHIFT_CONFIG||{};
export const configured=!!(cfg.supabaseUrl&&cfg.supabasePublishableKey);
const authKey='nightshift-auth-v1';
let session;try{session=JSON.parse(localStorage.getItem(authKey)||'null');}catch{}
let refreshing;
function save(s){session={...s,expires_at:Date.now()+s.expires_in*1000};localStorage.setItem(authKey,JSON.stringify(session));}
async function request(path,body,token){
 const res=await fetch(cfg.supabaseUrl.replace(/\/$/,'')+path,{method:'POST',headers:{'Content-Type':'application/json',apikey:cfg.supabasePublishableKey,...(token?{Authorization:'Bearer '+token}:{})},body:JSON.stringify(body),signal:AbortSignal.timeout(12000)});
 const data=await res.json();if(!res.ok)throw Error(data.msg||data.message||data.error_description||data.error||'Connection failed');return data;
}
export async function signIn(email,password){if(!configured)throw Error('Add your Supabase settings to config.js first.');save(await request('/auth/v1/token?grant_type=password',{email,password}));}
export async function ensureSession(){
 if(!configured)throw Error('Live rooms are not connected yet. Use Try the demo, or add Supabase settings in config.js.');
 if(!session){save(await request('/auth/v1/signup',{data:{app:'night-shift'}}));}
 if(session.expires_at<Date.now()+30000){
  refreshing??=request('/auth/v1/token?grant_type=refresh_token',{refresh_token:session.refresh_token}).then(save).finally(()=>refreshing=null);await refreshing;
 }
 return session.access_token;
}
export function signOut(){session=null;localStorage.removeItem(authKey);}
export async function rpc(name,args={}){return request('/rest/v1/'+name,args,await ensureSession());}
