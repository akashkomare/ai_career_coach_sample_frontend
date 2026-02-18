// ╔══════════════════════════════════════════════════════╗
// ║  TRUSCHOLAR — Premium Stacked Cards · Magnetic Cursor ║
// ╚══════════════════════════════════════════════════════╝

// const API_BASE_URL = 'http://localhost:8080/api';
const API_BASE_URL = 'https://aicareercoach-test-308900003771.asia-southeast1.run.app/api';

// ═══ CANVAS PARTICLES ═══
// Canvas animation removed - using static background image instead
// Uncomment the code below if you want to restore the animated dots background
/*
(function(){
  const c=document.getElementById('bgCanvas');if(!c)return;
  const x=c.getContext('2d');let w,h,pts=[],m={x:-9e3,y:-9e3};
  const N=60,D=140;
  function rs(){w=c.width=innerWidth;h=c.height=innerHeight}
  rs();addEventListener('resize',rs);
  for(let i=0;i<N;i++)pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.4+.4,p:Math.random()*Math.PI*2,hu:Math.random()*55+175});
  const sh=[];for(let i=0;i<4;i++)sh.push({x:Math.random()*w,y:Math.random()*h,s:Math.random()*45+20,rot:Math.random()*Math.PI*2,rs:(Math.random()-.5)*.002,vx:(Math.random()-.5)*.1,vy:(Math.random()-.5)*.1,t:['t','d','h'][i%3],op:Math.random()*.02+.006});
  function ds(s){x.save();x.translate(s.x,s.y);x.rotate(s.rot);x.strokeStyle=`rgba(0,240,255,${s.op})`;x.lineWidth=.8;x.beginPath();
  if(s.t==='t'){x.moveTo(0,-s.s);x.lineTo(-s.s*.866,s.s*.5);x.lineTo(s.s*.866,s.s*.5);x.closePath()}
  else if(s.t==='d'){x.moveTo(0,-s.s);x.lineTo(s.s*.6,0);x.lineTo(0,s.s);x.lineTo(-s.s*.6,0);x.closePath()}
  else{for(let i=0;i<6;i++){const a=Math.PI/3*i-Math.PI/6;i===0?x.moveTo(Math.cos(a)*s.s,Math.sin(a)*s.s):x.lineTo(Math.cos(a)*s.s,Math.sin(a)*s.s)}x.closePath()}
  x.stroke();x.restore()}
  document.addEventListener('mousemove',e=>{m.x=e.clientX;m.y=e.clientY});
  function loop(){x.clearRect(0,0,w,h);
  sh.forEach(s=>{s.x+=s.vx;s.y+=s.vy;s.rot+=s.rs;if(s.x<-80)s.x=w+80;if(s.x>w+80)s.x=-80;if(s.y<-80)s.y=h+80;if(s.y>h+80)s.y=-80;ds(s)});
  pts.forEach((p,i)=>{p.p+=.018;p.x+=p.vx;p.y+=p.vy;const dx=p.x-m.x,dy=p.y-m.y,d=Math.sqrt(dx*dx+dy*dy);if(d<200){const f=(200-d)/200*.012;p.vx+=dx*f;p.vy+=dy*f}p.vx*=.999;p.vy*=.999;if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;const a=.2+Math.sin(p.p)*.1;x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fillStyle=`hsla(${p.hu},75%,65%,${a})`;x.fill();
  for(let j=i+1;j<pts.length;j++){const q=pts[j],ddx=p.x-q.x,ddy=p.y-q.y,dd=Math.sqrt(ddx*ddx+ddy*ddy);if(dd<D){x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.strokeStyle=`rgba(0,240,255,${(1-dd/D)*.05})`;x.lineWidth=.4;x.stroke()}}});
  requestAnimationFrame(loop)}loop()
})();
*/

// ═══ MAGNETIC CURSOR LABEL ═══
(function(){
  const el=document.getElementById('magCursor'),txt=document.getElementById('magCursorText');
  if(!el||innerWidth<=768)return;
  let mx=0,my=0,lx=0,ly=0,vis=false;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  function tick(){const sp=vis?.055:.1;lx+=(mx-lx)*sp;ly+=(my-ly)*sp;el.style.left=lx+'px';el.style.top=ly+'px';requestAnimationFrame(tick)}tick();
  const map=[{s:'.deck-card',t:'Explore'},{s:'.jtile',t:'View\nRecommendation'},{s:'.icard',t:'Select'}];
  document.addEventListener('mouseover',e=>{for(const{s,t}of map){const m=e.target.closest(s);if(m){txt.textContent=m.getAttribute('data-cursor-label')||t;el.classList.add('on');vis=true;return}}});
  document.addEventListener('mouseout',e=>{for(const{s}of map)if(e.target.closest(s)){el.classList.remove('on');vis=false;return}});
})();

// ═══ PILL NAV ═══
function initPill(){const n=document.getElementById('pillNav'),b=document.getElementById('pillBg');if(!n||!b)return;const a=n.querySelector('.pillnav__btn.active');if(a)movePill(a)}
function movePill(t){const b=document.getElementById('pillBg');if(!b||!t)return;const r=t.getBoundingClientRect(),p=t.parentElement.getBoundingClientRect();b.style.width=r.width+'px';b.style.left=(r.left-p.left)+'px'}
function pillClick(t){document.querySelectorAll('.pillnav__btn').forEach(b=>b.classList.remove('active'));t.classList.add('active');movePill(t)}
function syncPill(id){const m={welcomeScreen:'home',registrationScreen:'home',profileScreen:'profile',interestsScreen:'profile',riasecTestScreen:'test',tieBreakerScreen:'test',recommendationsScreen:'results',educationPathwayScreen:'results',chatbotScreen:'results'};const t=document.querySelector(`.pillnav__btn[data-tab="${m[id]||'home'}"]`);if(t){document.querySelectorAll('.pillnav__btn').forEach(b=>b.classList.remove('active'));t.classList.add('active');setTimeout(()=>movePill(t),50)}}
addEventListener('load',()=>setTimeout(initPill,100));addEventListener('resize',initPill);

// ═══ MODAL ═══
let allJobsData=[];
function openJobModal(i){
  const j=allJobsData[i];if(!j)return;
  const m=document.getElementById('jobModal'),c=document.getElementById('jobModalContent');
  let h=`<div style="margin-bottom:22px"><h2 style="font-family:var(--ff2);font-size:1.4rem;font-weight:700;margin-bottom:10px">${j.job_title}</h2><div style="display:flex;gap:6px;flex-wrap:wrap"><span class="tag tag--match">${j.match_percentage}% Match</span>${j.domain?`<span class="tag tag--domain">${j.domain}</span>`:''}${j.job_level?`<span class="tag tag--level">${j.job_level}</span>`:''}${j.riasec_code?`<span class="tag" style="color:var(--purple)">RIASEC: ${j.riasec_code}</span>`:''}</div></div>`;
  if(j.role_overview)h+=`<div class="msec"><div class="msec__h">📋 Role Overview</div><p>${j.role_overview}</p></div>`;
  if(j.how_this_role_aligns_with_you)h+=`<div class="msec"><div class="msec__h">✨ Why This Suits You</div><p>${j.how_this_role_aligns_with_you}</p></div>`;
  if(j.why_youre_strong_match){h+=`<div class="msec"><div class="msec__h">💪 Strong Match</div><ul class="mlist">`;['point_1','point_2','point_3'].forEach(k=>{if(j.why_youre_strong_match[k])h+=`<li>${j.why_youre_strong_match[k]}</li>`});h+=`</ul></div>`}
  if(j.primary_skills?.length)h+=`<div class="msec"><div class="msec__h">🎯 Primary Skills</div><div class="mpills">${j.primary_skills.map(s=>`<span class="mpill">${s}</span>`).join('')}</div></div>`;
  if(j.salary){h+=`<div class="msec"><div class="msec__h">💰 Salary</div><div class="migrid">`;if(j.salary.entry)h+=`<div class="mibox"><small>Entry</small><strong>${j.salary.entry}</strong></div>`;if(j.salary.mid)h+=`<div class="mibox"><small>Mid</small><strong>${j.salary.mid}</strong></div>`;if(j.salary.senior)h+=`<div class="mibox"><small>Senior</small><strong>${j.salary.senior}</strong></div>`;if(j.salary.average)h+=`<div class="mibox"><small>Average</small><strong style="color:var(--green)">${j.salary.average}</strong></div>`;h+=`</div></div>`}
  if(j.high_demand_locations?.length)h+=`<div class="msec"><div class="msec__h">📍 Locations</div><div class="mpills">${j.high_demand_locations.map(l=>`<span class="mpill--m mpill">${l}</span>`).join('')}</div></div>`;
  if(j.what_your_day_looks_like){h+=`<div class="msec"><div class="msec__h">📅 Typical Day</div><div class="mbox mbox--a"><ul class="mlist">`;['point_1','point_2','point_3','point_4'].forEach(k=>{if(j.what_your_day_looks_like[k])h+=`<li>${j.what_your_day_looks_like[k]}</li>`});h+=`</ul></div></div>`}
  if(j.challenges_you_may_face?.length)h+=`<div class="msec"><div class="msec__h">⚠️ Challenges</div><div class="mbox mbox--r"><ul class="mlist">${j.challenges_you_may_face.map(c=>`<li>${c}</li>`).join('')}</ul></div></div>`;
  if(j.secondary_skills?.length)h+=`<div class="msec"><div class="msec__h">🔧 Secondary Skills</div><div class="mpills">${j.secondary_skills.map(s=>`<span class="mpill--m mpill">${s}</span>`).join('')}</div></div>`;
  if(j.industry_outlook){h+=`<div class="msec"><div class="msec__h">📈 Industry Outlook</div><div class="mbox mbox--g"><p>${j.industry_outlook.description}</p>`;if(j.industry_outlook.growth_rate)h+=`<p style="margin-top:6px"><strong>Growth:</strong> <span style="color:var(--green)">${j.industry_outlook.growth_rate}</span></p>`;if(j.industry_outlook.job_openings)h+=`<p style="margin-top:3px"><strong>Openings:</strong> ${j.industry_outlook.job_openings}</p>`;h+=`</div></div>`}
  if(j.helpful_certifications?.length)h+=`<div class="msec"><div class="msec__h">🏆 Certifications</div><div class="mpills">${j.helpful_certifications.map(c=>`<span class="mpill--a mpill">${c}</span>`).join('')}</div></div>`;
  if(j.recommended_degrees?.length)h+=`<div class="msec"><div class="msec__h">🎓 Degrees</div><div class="mpills">${j.recommended_degrees.map(d=>`<span class="mpill--g mpill">${d}</span>`).join('')}</div></div>`;
  c.innerHTML=h;m.classList.add('open');document.body.style.overflow='hidden';
}
function closeJobModal(){document.getElementById('jobModal').classList.remove('open');document.body.style.overflow=''}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeJobModal()});

// ═══ STATE ═══
let S={userId:null,userName:null,userEmail:null,careerStage:null,isStudent:false,riasecQuestions:[],currentQuestionIndex:0,answers:{},tieBreakerData:null,selectedInterests:[],recommendations:null,selectedEducation:null,chatSessionId:null,currentTieBreakerAnswer:null};

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded',()=>{
  const id=localStorage.getItem('userId'),nm=localStorage.getItem('userName'),em=localStorage.getItem('userEmail');
  if(id&&nm){S.userId=id;S.userName=nm;S.userEmail=em;showUser();checkProgress()}else showScr('welcomeScreen');
  const cs=document.getElementById('careerStage');
  if(cs)cs.addEventListener('change',e=>{
    const val=e.target.value;
    const isStudent=(val==='k10'||val==='k12');
    document.getElementById('educationGroup').style.display=isStudent?'block':'none';
    document.getElementById('nonStudentFields').style.display=isStudent?'none':'block';
  });
});

// ═══ SCREENS ═══
function showScr(id){document.querySelectorAll('.scr').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');updStep(id);syncPill(id);scrollTo({top:0,behavior:'smooth'})}
function updStep(id){
  const bar=document.getElementById('progressBar');
  if(id==='welcomeScreen'||id==='registrationScreen'){bar.classList.add('hidden');return}
  bar.classList.remove('hidden');
  document.querySelectorAll('.sdot').forEach(s=>s.classList.remove('active','done'));
  const m={profileScreen:1,interestsScreen:2,riasecTestScreen:3,tieBreakerScreen:3,recommendationsScreen:4,educationPathwayScreen:4,chatbotScreen:4};
  const c=m[id]||1;
  for(let i=1;i<=4;i++){const s=document.getElementById(`step${i}`);if(i<c)s.classList.add('done');else if(i===c)s.classList.add('active')}
  document.getElementById('stepperFill').style.width=((c-1)/3*100)+'%';
}
function showUser(){document.getElementById('userName').textContent=S.userName;document.getElementById('userAvatar').textContent=S.userName.charAt(0).toUpperCase();document.getElementById('userInfo').classList.remove('hidden')}
function logout(){localStorage.removeItem('userId');localStorage.removeItem('userName');localStorage.removeItem('userEmail');S={userId:null,userName:null,userEmail:null,careerStage:null,isStudent:false,riasecQuestions:[],currentQuestionIndex:0,answers:{},tieBreakerData:null,selectedInterests:[],recommendations:null,selectedEducation:null,chatSessionId:null,currentTieBreakerAnswer:null};showScr('welcomeScreen');document.getElementById('userInfo').classList.add('hidden')}
function showRegistration(){showScr('registrationScreen')}

// ═══ REGISTRATION ═══
async function handleRegistration(e){e.preventDefault();const nm=document.getElementById('name').value,em=document.getElementById('email').value;showL(1);try{const r=await fetch(`${API_BASE_URL}/user/init`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:nm,email:em})});const d=await r.json();if(d.success){S.userId=d.user_id;S.userName=nm;S.userEmail=em;localStorage.setItem('userId',d.user_id);localStorage.setItem('userName',nm);localStorage.setItem('userEmail',em);showUser();showScr('profileScreen')}else alert('Failed: '+(d.error||''))}catch(err){console.error(err);alert('Registration failed.')}finally{showL(0)}}
async function handleProfileComplete(e){e.preventDefault();showL(1);try{const cs=document.getElementById('careerStage').value;let eduLevel,currField,expYears;if(cs==='k10'){eduLevel='Junior School';currField='Student - Exploring career options';expYears=0}else if(cs==='k12'){eduLevel='High School';currField='Student - Exploring career options';expYears=0}else{eduLevel=document.getElementById('educationLevel').value;currField=document.getElementById('currentField').value;expYears=parseInt(document.getElementById('experienceYears').value)}const r=await fetch(`${API_BASE_URL}/user/complete-profile`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({education_level:eduLevel,current_field:currField,career_stage:cs,experience_years:expYears,education:document.getElementById('education').value||''})});const d=await r.json();if(d.success){S.careerStage=cs;S.isStudent=(S.careerStage==='k10'||S.careerStage==='k12');loadInterests()}else alert('Failed: '+(d.error||''))}catch(err){console.error(err);alert('Failed.')}finally{showL(0)}}

// ═══ INTERESTS ═══
async function loadInterests(){showL(1);try{const r=await fetch(`${API_BASE_URL}/recommendations/clusters`);const d=await r.json();if(d.success){showScr('interestsScreen');dispInterests(d.clusters)}else alert('Failed')}catch(err){console.error(err);alert('Failed.')}finally{showL(0)}}
function dispInterests(cl){const g=document.getElementById('interestsGrid');S.selectedInterests=[];updCnt();g.innerHTML=cl.map(c=>{const isI=c.icon&&(c.icon.startsWith('http://')||c.icon.startsWith('https://'));const ic=isI?`<img src="${c.icon}" alt="${c.name}" class="icard__img">`:`<span class="icard__icon">${c.icon}</span>`;return`<div class="icard" data-cursor-label="Select" onclick="togInt('${c.name.replace(/'/g,"\\'")}','${c.icon}')">${ic}<div class="icard__name">${c.name}</div></div>`}).join('')}
function togInt(n,i){const idx=S.selectedInterests.findIndex(x=>x.name===n);if(idx>-1){S.selectedInterests.splice(idx,1);event.currentTarget.classList.remove('selected')}else{if(S.selectedInterests.length<3){S.selectedInterests.push({name:n,icon:i});event.currentTarget.classList.add('selected')}else alert('Max 3.')}updCnt()}
function updCnt(){document.getElementById('selectedCount').textContent=S.selectedInterests.length;document.getElementById('submitInterestsBtn').disabled=S.selectedInterests.length!==3}
async function submitInterests(){if(S.selectedInterests.length!==3)return alert('Select exactly 3.');showL(1);try{const r=await fetch(`${API_BASE_URL}/user/update-interests`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({interests:S.selectedInterests})});const d=await r.json();if(d.success)loadRiasec();else alert('Failed')}catch(err){alert('Failed.')}finally{showL(0)}}

// ═══ RIASEC ═══
async function loadRiasec(){showL(1);try{const r=await fetch(`${API_BASE_URL}/riasec/questions`,{headers:{'X-User-Id':S.userId}});const d=await r.json();if(d.success){S.riasecQuestions=d.questions;S.currentQuestionIndex=0;S.answers={};showScr('riasecTestScreen');dispQ()}else alert('Failed')}catch(err){alert('Failed.')}finally{showL(0)}}
function dispQ(){const q=S.riasecQuestions[S.currentQuestionIndex],c=document.getElementById('questionContainer');document.getElementById('currentQuestion').textContent=S.currentQuestionIndex+1;document.getElementById('totalQuestions').textContent=S.riasecQuestions.length;document.getElementById('testProgressFill').style.width=((S.currentQuestionIndex+1)/S.riasecQuestions.length*100)+'%';const sv=S.answers[q.number];c.innerHTML=`<div class="qtxt">${q.question}</div><p style="margin-bottom:18px;color:var(--t2)">${q.text}</p><div class="opts"><div class="ocard ${sv==='A'?'selected':''}" onclick="selAns(${q.number},'A')"><label class="olbl"><input type="radio" name="q${q.number}" value="A" ${sv==='A'?'checked':''}>${q.options.A.text}</label></div><div class="ocard ${sv==='B'?'selected':''}" onclick="selAns(${q.number},'B')"><label class="olbl"><input type="radio" name="q${q.number}" value="B" ${sv==='B'?'checked':''}>${q.options.B.text}</label></div></div>`;document.getElementById('prevBtn').disabled=S.currentQuestionIndex===0;document.getElementById('nextBtn').style.display=S.currentQuestionIndex===S.riasecQuestions.length-1?'none':'inline-flex';document.getElementById('submitBtn').style.display=S.currentQuestionIndex===S.riasecQuestions.length-1?'inline-flex':'none'}
function selAns(n,a){S.answers[n]=a;document.querySelectorAll('.ocard').forEach(o=>o.classList.remove('selected'));event.currentTarget.classList.add('selected')}
function previousQuestion(){if(S.currentQuestionIndex>0){S.currentQuestionIndex--;dispQ()}}
function nextQuestion(){const q=S.riasecQuestions[S.currentQuestionIndex];if(!S.answers[q.number])return alert('Please select an answer.');if(S.currentQuestionIndex<S.riasecQuestions.length-1){S.currentQuestionIndex++;dispQ()}}
async function submitTest(){const un=S.riasecQuestions.filter(q=>!S.answers[q.number]);if(un.length>0)return alert(`${un.length} question(s) remaining.`);showL(1);try{const oa=Object.entries(S.answers).map(([n,a])=>({question_number:parseInt(n),answer:a}));const r=await fetch(`${API_BASE_URL}/riasec/submit-test`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({original_answers:oa})});const d=await r.json();if(d.success){if(d.needs_tie_breaker){S.tieBreakerData=d;showTB(d)}else loadRecs()}else alert('Failed')}catch(err){alert('Failed.')}finally{showL(0)}}
function showTB(data){showScr('tieBreakerScreen');document.getElementById('tieRound').textContent=data.tie_breaker_round;const q=data.tie_breaker_question;document.getElementById('tieBreakerQuestion').innerHTML=`<div class="qtxt">${q.question}</div><div class="opts"><div class="ocard" onclick="selTB('A')"><label class="olbl"><input type="radio" name="tb" value="A">${q.options.A.text}</label></div><div class="ocard" onclick="selTB('B')"><label class="olbl"><input type="radio" name="tb" value="B">${q.options.B.text}</label></div></div>`;S.currentTieBreakerAnswer=null}
function selTB(a){S.currentTieBreakerAnswer=a;document.querySelectorAll('.ocard').forEach(o=>o.classList.remove('selected'));event.currentTarget.classList.add('selected')}
async function submitTieBreaker(){if(!S.currentTieBreakerAnswer)return alert('Select an answer.');showL(1);try{const d=S.tieBreakerData;const r=await fetch(`${API_BASE_URL}/riasec/submit-tie-breaker`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({original_answers:d.original_answers,current_answer:{question_number:d.tie_breaker_question.number,answer:S.currentTieBreakerAnswer},current_tie_pair:d.current_tie_pair,current_original_pool_number:d.tie_breaker_question.original_pool_number,answered_tie_breakers:d.answered_tie_breakers||[]})});const res=await r.json();if(res.success){if(res.needs_tie_breaker){S.tieBreakerData=res;showTB(res)}else loadRecs()}else alert('Failed')}catch(err){alert('Failed.')}finally{showL(0)}}

// ═══ RECOMMENDATIONS ═══
async function loadRecs(){showScr('recommendationsScreen');document.getElementById('loadingRecommendations').style.display='block';document.getElementById('recommendationsContent').classList.add('hidden');try{const sr=await fetch(`${API_BASE_URL}/riasec/current-scores`,{headers:{'X-User-Id':S.userId}});const sd=await sr.json();if(sd.success&&sd.riasec_code)document.getElementById('riasecResult').innerHTML=`Your RIASEC Code: <strong>${sd.riasec_code}</strong>`;if(S.isStudent)await loadStudentRecs();else await loadJobRecs()}catch(err){console.error(err);alert('Failed.')}finally{document.getElementById('loadingRecommendations').style.display='none'}}
async function loadJobRecs(){const r=await fetch(`${API_BASE_URL}/recommendations/generate`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({skip_llm:false})});const d=await r.json();if(d.success){S.recommendations=d;dispRecs(d)}else alert('Failed')}
async function loadStudentRecs(){const r=await fetch(`${API_BASE_URL}/student-recommendations/generate`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({})});const d=await r.json();if(d.success){S.recommendations=d;dispStudentRecs(d)}else alert('Failed')}

// ═══ DISPLAY — Stacked Vibrant Cards ═══
function dispRecs(data){
  const el=document.getElementById('recommendationsContent');el.classList.remove('hidden');allJobsData=[];let h='',gi=0;
  if(data.career_summary)h+=`<div class="pwsec"><h3>Career Summary</h3><p style="color:var(--t2)">${data.career_summary}</p></div>`;
  if(data.recommendations?.length){
    data.recommendations.forEach(cl=>{
      h+=`<div class="cluster"><h3 class="cluster__h">${cl.cluster_icon?`<img src="${cl.cluster_icon}" style="width:28px;height:28px;border-radius:8px">`:''} ${cl.cluster}</h3><div class="job-deck">`;
      if(cl.jobs?.length){cl.jobs.forEach((j,ji)=>{allJobsData.push(j);const idx=gi++;
        h+=`<div class="jtile" style="--i:${ji}" data-cursor-label="View\nRecommendation" onclick="openJobModal(${idx})"><div class="jtile__title">${j.job_title}</div><div class="jtile__tags"><span class="tag tag--match">${j.match_percentage}% Match</span>${j.domain?`<span class="tag tag--domain">${j.domain}</span>`:''}${j.job_level?`<span class="tag tag--level">${j.job_level}</span>`:''}</div>${j.role_overview?`<div class="jtile__desc">${j.role_overview}</div>`:''}<div class="jtile__cta">Click to view full details →</div></div>`})}
      else h+='<p style="color:var(--t3);padding:16px">No jobs.</p>';
      h+='</div></div>'});
  }else h+='<p style="color:var(--t2);text-align:center;padding:40px">No recommendations.</p>';
  el.innerHTML=h;
}

function dispStudentRecs(data){
  const el=document.getElementById('recommendationsContent');el.classList.remove('hidden');
  let h='<div class="student-recs">';
  h+=`<div class="pwsec" style="text-align:center"><h2 style="font-family:var(--ff2);font-size:1.4rem">🎓 Your Career Guidance</h2><p style="color:var(--t2);margin-top:6px">Hi ${data.student_name}!</p></div>`;
  if(data.next_steps_summary)h+=`<div class="pwsec" style="background:rgba(0,240,255,.03);border:1px solid rgba(0,240,255,.06)"><h3>🎯 Next Steps</h3><p style="color:var(--t2);line-height:1.7">${data.next_steps_summary}</p></div>`;
  if(data.top_3_riasec_explanations?.length){
    h+=`<div class="pwsec"><h3>🧠 Personality (${data.riasec_code})</h3><div class="job-deck" style="margin-top:14px">${data.top_3_riasec_explanations.map(r=>`<div class="jtile" style="cursor:default" data-cursor-label="Personality"><div style="display:flex;gap:14px;align-items:flex-start"><div style="font-size:2.2rem;flex-shrink:0">${getE(r.code)}</div><div><h4 style="color:var(--cyan);margin-bottom:3px">${r.code} — ${r.name}</h4><p style="color:var(--t3);font-style:italic;font-size:.86rem;margin-bottom:8px">${r.meaning}</p><div class="mpills">${r.traits.map(t=>`<span class="mpill">${t}</span>`).join('')}</div></div></div></div>`).join('')}</div></div>`;
  }
  if(data.subject_stream_recommendations?.length){
    h+=`<div class="pwsec" style="border-left:3px solid var(--amber)"><h3>📚 Subject Streams</h3><div class="job-deck" style="margin-top:12px">${data.subject_stream_recommendations.map(s=>`<div class="jtile" style="cursor:default" data-cursor-label="Stream"><h4 style="color:var(--purple);margin-bottom:6px">${s.stream_name}</h4><div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px">${s.subjects.map(sub=>`<span class="tag tag--match">${sub}</span>`).join('')}</div><p style="color:var(--t2);margin-bottom:6px"><strong>Why:</strong> ${s.why_suitable}</p><div class="mpills">${s.career_opportunities.map(c=>`<span class="mpill">${c}</span>`).join('')}</div></div>`).join('')}</div></div>`;
  }
  if(data.career_clusters?.length){
    h+=`<div class="pwsec"><h3>💼 Career Clusters</h3><div class="job-deck" style="margin-top:12px">${data.career_clusters.map(c=>`<div class="jtile" style="cursor:default" data-cursor-label="Cluster"><div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px"><h4 style="color:var(--cyan);flex:1">${c.cluster_name}</h4><span class="tag tag--match">${c.match_percentage}%</span></div><p style="color:var(--t3);font-style:italic;margin-bottom:5px">${c.description}</p><p style="color:var(--t2);margin-bottom:8px"><strong>Why:</strong> ${c.why_suitable}</p><div class="mpills">${c.example_careers.map(cr=>`<span class="mpill--m mpill">${cr}</span>`).join('')}</div></div>`).join('')}</div></div>`;
  }
  if(data.academic_suggestions?.length){
    h+=`<div class="pwsec"><h3>🎓 Academic Paths</h3><div class="job-deck" style="margin-top:12px">${data.academic_suggestions.map(d2=>`<div class="jtile" data-cursor-label="View Pathway" onclick="loadStudentEduPath('${d2.degree_name.replace(/'/g,"\\'")}')"><h4 style="margin-bottom:5px">${d2.degree_name}</h4><div style="display:flex;gap:5px;margin-bottom:8px"><span class="tag tag--level">${d2.degree_type}</span><span class="tag">${d2.duration}</span></div><p style="color:var(--t2);font-size:.86rem;margin-bottom:6px"><strong>Why:</strong> ${d2.why_recommended}</p><div class="mpills" style="margin-bottom:6px">${d2.entrance_exams.map(ex=>`<span class="mpill--a mpill">${ex}</span>`).join('')}</div><div class="jtile__cta">View pathway →</div></div>`).join('')}</div></div>`;
  }
  if(data.advice_notes?.length){
    h+=`<div class="pwsec"><h3>💡 Advice</h3><div class="job-deck" style="margin-top:12px">${data.advice_notes.map(n=>`<div class="jtile" style="cursor:default;border-left:3px solid var(--purple)" data-cursor-label="Advice"><div style="display:flex;gap:12px;align-items:flex-start"><div style="font-size:1.5rem;flex-shrink:0">${getN(n.icon)}</div><div><h4 style="color:var(--cyan);font-size:.88rem;margin-bottom:4px">${n.title}</h4><p style="color:var(--t2);font-size:.86rem;line-height:1.6">${n.message}</p></div></div></div>`).join('')}</div></div>`;
  }
  if(data.strengths_summary)h+=`<div class="pwsec" style="background:rgba(52,211,153,.02);border:1px solid rgba(52,211,153,.06)"><h3 style="color:var(--green)">💪 Strengths</h3><p style="color:var(--t2);line-height:1.7;margin-top:6px">${data.strengths_summary}</p></div>`;
  h+='</div>';el.innerHTML=h;
}

function getE(c){return{R:'🔧',I:'🔬',A:'🎨',S:'🤝',E:'💼',C:'📊'}[c]||'✨'}
function getN(n){return{family:'👨‍👩‍👧‍👦',explore:'🔍',skills:'🎯',flexibility:'🌟'}[n]||'💡'}

// ═══ EDUCATION PATHWAY ═══
async function loadStudentEduPath(name){S.selectedEducation=name;showScr('educationPathwayScreen');document.getElementById('loadingPathway').style.display='block';document.getElementById('pathwayContent').classList.add('hidden');try{const ep=S.isStudent?'student-recommendations':'recommendations';const r=await fetch(`${API_BASE_URL}/${ep}/education-pathway`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({education_name:name})});const d=await r.json();if(d.success)dispPW(d);else alert('Failed')}catch(err){alert('Failed.')}finally{document.getElementById('loadingPathway').style.display='none'}}
async function loadEducationPathway(name){await loadStudentEduPath(name)}

function dispPW(d){
  const el=document.getElementById('pathwayContent');el.classList.remove('hidden');
  let h=`<div class="pwhead"><h2>${d.target_education}</h2><p>Pathway for ${d.user_name}</p><p style="opacity:.65;font-size:.86rem">Grade: ${d.current_grade} · RIASEC: ${d.user_riasec_code}</p></div>`;
  if(d.primary_pathway){const p=d.primary_pathway;h+=`<div class="pwsec"><h3>🎯 ${p.pathway_name}</h3><p style="color:var(--t2);margin-bottom:8px"><strong>Type:</strong> ${p.pathway_type} · <strong>Duration:</strong> ${p.estimated_duration}</p><div class="mbox mbox--c"><p style="color:var(--t2)">${p.complete_pathway}</p></div>${p.entrance_exams?.length?`<div style="margin-top:10px"><strong style="font-size:.84rem">Entrance Exams:</strong><ul class="mlist">${p.entrance_exams.map(e=>`<li>${e}</li>`).join('')}</ul></div>`:''}<p style="color:var(--t2);margin-top:8px"><strong>Why:</strong> ${p.why_this_pathway}</p>${p.success_rate?`<p style="margin-top:4px"><strong>Success Rate:</strong> ${p.success_rate}</p>`:''}</div>`}
  if(d.alternative_pathways?.length)h+=`<div class="pwsec"><h3>🔄 Alternatives</h3><div class="pwalt">${d.alternative_pathways.map(p=>`<div class="pwacard"><h4>${p.pathway_name}</h4><p style="font-size:.86rem;color:var(--t2)"><strong>Duration:</strong> ${p.estimated_duration}</p><p style="color:var(--t2);margin:6px 0;font-size:.86rem">${p.complete_pathway}</p><p style="color:var(--t3);font-style:italic;font-size:.86rem">${p.why_this_pathway}</p></div>`).join('')}</div></div>`;
  if(d.prerequisites?.length)h+=`<div class="pwsec"><h3>📋 Prerequisites</h3>${d.prerequisites.map(p=>`<div style="margin-bottom:12px"><h4 style="color:var(--cyan);font-size:.9rem;margin-bottom:4px">${p.category}</h4><ul style="padding-left:16px;list-style:disc">${p.details.map(x=>`<li style="color:var(--t2);font-size:.86rem;margin:3px 0">${x}</li>`).join('')}</ul></div>`).join('')}</div>`;
  if(d.skills_to_prepare?.length)h+=`<div class="pwsec"><h3>💪 Skills</h3>${d.skills_to_prepare.map(s=>`<div style="margin-bottom:12px;padding:12px;background:var(--surf);border-left:2px solid var(--purple);border-radius:0 8px 8px 0"><h4 style="color:var(--purple);font-size:.88rem;margin-bottom:3px">${s.skill_name}</h4><p style="color:var(--t2);font-size:.86rem"><strong>Why:</strong> ${s.description}</p><p style="color:var(--t2);font-size:.86rem;margin-top:3px"><strong>Start:</strong> ${s.how_to_start}</p></div>`).join('')}</div>`;
  if(d.key_focus_areas?.length)h+=`<div class="pwsec"><h3>🎯 Focus Areas</h3>${d.key_focus_areas.map(f=>`<div style="margin-bottom:12px;padding:12px;background:var(--surf);border-left:2px solid var(--amber);border-radius:0 8px 8px 0"><h4 style="font-size:.88rem;margin-bottom:3px">${f.area}</h4><p style="font-size:.84rem;color:var(--t2)"><strong>Current:</strong> ${f.current_status}</p><p style="font-size:.84rem;color:var(--t2)"><strong>Gap:</strong> ${f.gap_identified}</p><p style="font-size:.84rem;color:var(--purple)"><strong>Action:</strong> ${f.recommendation}</p></div>`).join('')}</div>`;
  if(d.riasec_alignment)h+=`<div class="pwsec"><h3>✨ Alignment</h3><p style="color:var(--t2);line-height:1.7">${d.riasec_alignment}</p></div>`;
  if(d.suitable_jobs?.length)h+=`<div class="pwsec"><h3>💼 Careers</h3><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px">${d.suitable_jobs.map(j=>`<div style="padding:14px;background:var(--surf);border-radius:var(--r-sm);border:1px solid var(--brd)"><h4 style="color:var(--cyan);font-size:.9rem;margin-bottom:3px">${j.job_title}</h4><p style="font-size:.8rem;color:var(--t2);margin-bottom:5px">${j.why_suitable}</p><span class="tag tag--match">${j.match_percentage}%</span></div>`).join('')}</div></div>`;
  if(d.simple_roadmap?.length)h+=`<div class="pwsec"><h3>🗺️ Roadmap</h3>${d.simple_roadmap.map((s,i)=>`<div class="pwstep"><div style="display:flex;align-items:center;gap:10px;margin-bottom:6px"><div style="background:linear-gradient(135deg,var(--cyan),var(--purple));color:var(--bg);width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.76rem;flex-shrink:0">${s.step||i+1}</div><div><h4 style="color:var(--cyan);font-size:.9rem;margin:0">${s.title}</h4><span style="font-size:.76rem;color:var(--t3)">${s.stage} · ${s.duration}</span></div></div><p style="color:var(--t2);font-size:.86rem">${s.description}</p>${s.key_actions?.length?`<ul style="padding-left:14px;margin-top:4px;list-style:disc">${s.key_actions.map(a=>`<li style="font-size:.82rem;color:var(--t2);margin:2px 0">${a}</li>`).join('')}</ul>`:''}</div>`).join('')}</div>`;
  el.innerHTML=h;
}

function backToRecommendations(){showScr('recommendationsScreen')}

// ═══ CHATBOT ═══
async function openChatbot(){if(!S.selectedEducation)return alert('Select a pathway first.');showScr('chatbotScreen');if(!S.chatSessionId)await startChat()}
async function startChat(){try{const r=await fetch(`${API_BASE_URL}/chatbot/start`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId}});const d=await r.json();if(d.success){S.chatSessionId=d.session_id;addMsg('assistant',d.message)}}catch(err){alert('Chat failed.')}}
async function sendChatMessage(e){e.preventDefault();const inp=document.getElementById('chatInput'),msg=inp.value.trim();if(!msg)return;addMsg('user',msg);inp.value='';try{const r=await fetch(`${API_BASE_URL}/chatbot/message`,{method:'POST',headers:{'Content-Type':'application/json','X-User-Id':S.userId},body:JSON.stringify({session_id:S.chatSessionId,message:msg})});const d=await r.json();addMsg('assistant',d.success?d.ai_response:'Error occurred.')}catch(err){addMsg('assistant','Error occurred.')}}
function addMsg(role,txt){const d=document.getElementById('chatMessages'),el=document.createElement('div');el.className=`cmsg ${role}`;el.innerHTML=`<div>${txt}</div><div class="cmsg__t">${new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div>`;d.appendChild(el);d.scrollTop=d.scrollHeight}
function closeChatbot(){showScr('educationPathwayScreen')}

// ═══ UTIL ═══
function showL(on){document.getElementById('loadingOverlay').classList.toggle('hidden',!on)}
async function checkProgress(){try{const r=await fetch(`${API_BASE_URL}/user/${S.userId}`,{headers:{'X-User-Id':S.userId}});const d=await r.json();if(d.success){const u=d.user;if(u.career_stage){S.careerStage=u.career_stage;S.isStudent=(u.career_stage==='k10'||u.career_stage==='k12')}if(!u.profile_completed)showScr('profileScreen');else if(!u.interests||u.interests.length!==3)loadInterests();else if(!u.riasec_code)loadRiasec();else loadRecs()}else showScr('profileScreen')}catch(err){showScr('profileScreen')}}