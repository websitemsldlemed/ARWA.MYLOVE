const P="مع ماما أو حد من عيلتي;مع صاحبتي المقرّبة;معاك ❤️;مع حد تاني.;مع الاتنين حسب الموقف.;لسه مش عارفة.;أفضل أحتفظ بالإجابة لنفسي.";
const CN={ش:"🧸 شخصيتي",ح:"🍓 اختياراتي",ر:"🌙 يومي",م:"💗 الناس اللي برتاح معاهم",ت:"💌 التعارف",ض:"😂 هزار",أ:"✨ أحلامي",ق:"🌷 ذوقي الرومانسي"};
const Q=`ش|إنتِ شايفة نفسك إزاي؟|هادية ورايقة 🌷;اجتماعية وبحب الرغي 😂;حساسة شوية 🥹;مجنونة على خفيف 😈;على حسب المود 🎀
ش|بتتعاملي إزاي مع الضغط؟|بنام وأفصل;بتكلم مع حد;بنظم وقتي;بسيب الدنيا تمشي
ش|بتحبي المفاجآت؟|جدًا!;لو بسيطة;أفضل أعرف قبلها;حسب المفاجأة
ش|لما حد يزعلك بتعملي إيه؟|بسامح بسرعة;محتاجة وقت;بتكلم فورًا;بنسى ومبفتكرش 😂
ش|إنتِ أقرب لـ…؟|منظمة;عفوية;نص ونص
ح|لونك المفضل؟|وردي 🎀;بنفسجي 💜;أبيض 🤍;أسود 🖤;لون تاني
ح|أكلة مفضلة؟|كشري;بيتزا;شاورما;مكرونة بالبشاميل;حاجة تانية
ح|مشروبك المفضل؟|قهوة ☕;شاي;عصير;نسكافيه;ميه وبس 😂
ح|حلوى مفضلة؟|كنافة;آيس كريم 🍦;كيك 🍰;شوكولاتة 🍫
ح|فصل مفضل؟|الشتا ❄️;الصيف ☀️;الربيع 🌸;الخريف 🍂
ح|نوع الأفلام اللي بتحبيه؟|رومانسي;كوميدي;أنمي;رعب;دراما
ح|حيوان مفضل؟|قطط 🐱;كلاب 🐶;عصافير;مفيش
ح|هواية بتحبيها؟|رسم;قراءة;سمع موسيقى 🎧;ألعاب;تصوير
ر|أكتر وقت بتحبيه في اليوم؟|الصبح;العصر;بالليل 🌙;مفيش وقت معين
ر|إجازتك المثالية؟|أقعد في البيت;أخرج مع صحابي;سفر;نوم طول اليوم 😴
ر|بتفضلي الرسايل ولا الفويس؟|رسايل;فويس نوت;مكالمة;حسب الموقف
ر|بترتاحي إزاي بعد يوم طويل؟|نوم;موبايل;أكل;خروج;سكوت وهدوء
م|بترتاحي لما تتكلمي مع مين أكتر؟|@P
م|لو يومك كان وحش، تحبي تحكي لمين؟|@P
م|أول شخص تشاركيه فرحتك مين؟|@P
م|مين بتحسي إنه بيسمعك بجد؟|@P
م|مين بتاخدي رأيه لما تحتاري؟|@P
م|مع مين بتكوني على طبيعتك؟|@P
م|مين بيقدر يضحكك أكتر؟|@P
م|بتحبي حد يسأل عن يومك؟|جدًا;ساعات;مش دايمًا;أفضل مساحتي
م|بعد الزعل، بتحبي تتكلمي إمتى؟|فورًا;بعد ما أهدى;مش بحب أتكلم
ت|إيه أول انطباع أخدتيه عني؟|لطيف ❤️;دمي خفيف 😂;هادي شوية 🌷;غامض 👀;لسه بكتشف شخصيتك
ت|بتحبي الكلام معايا؟|أيوه، الكلام لطيف ❤️;آه، ولسه بنتعرف;ساعات حسب الموضوع 😂;لسه مش عارفة
ت|لو بعتلك رسالة فجأة هتعملي إيه؟|هبتسم وأرد ❤️;هرد لما أفضى;ههزر معاك 😂;حسب مودّي
ت|أكتر موضوع تحبي نتكلم فيه؟|هزار وميمز 😂;فضفضة 💌;اهتماماتنا 🎀;أي حاجة;حسب المود
ت|إيه حاجة تحبي تعرفيها عني؟|شخصيتي الحقيقية;الحاجات اللي بحبها;أحلامي;مواقفي المضحكة 😂;كل حاجة واحدة واحدة
ت|لسه بدري تحكمي عليا؟|أيوه لسه بدري;مش متأكدة;بدأت أكوّن فكرة 🙈
ض|لو موبايلك اتكلم، هيفضحك في إيه؟|كتر الصور;سهر الليل;الستوريز;مفيش، أنا ملاك 😇
ض|لو حياتك فيلم، نوعه إيه؟|كوميدي;رومانسي;مغامرات;دراما;كرتون
ض|لو بقيتي غير مرئية يوم؟|أتفرج على الناس;أدخل مطعم 😂;أنام;أخوّف حد 😈
ض|تختاري إيه؟|أنام يوم كامل;أخرج يوم كامل
ض|رحلة مفاجئة؟|بحر 🏖️;ملاهي 🎡;جبل;مدينة جديدة
أ|وجهة أحلامك؟|أوروبا;تركيا;دبي;اليابان;مصر حلوة بردو 😂
أ|النجاح عندك يعني إيه؟|فلوس;سعادة;راحة بال;إنجاز;حب وعيلة
ق|أي مجاملة بتفرحك؟|على شكلي;على شخصيتي;على ضحكتي;مش بحب المجاملات
ق|أي هدية بتفرحك؟|ورد 🌸;حاجة مكتوبة;حاجة بحبها;مفاجأة بسيطة
ق|رسالة صباح الخير بتحبيها؟|قصيرة;طويلة;صورة أو ميم;مش لازم`.split("\n").map(l=>{const[c,q,o]=l.split("|");return{c,q,o:o.replace("@P",P).split(";")}});
const M=["يا أروى، أتمنى يومك يبقى لطيف شبه ضحكتك ❤️🎀","عارفة المشكلة؟ إنك بتخلي الواحد يبتسم للموبايل كأنه كسب مليون جنيه 😂💗","لو يومك مش أحسن حاجة، خدي نفس وافتكري إن مش لازم كل يوم يبقى مثالي عشان يكون فيه حاجة حلوة 🫶🏻","صباح الخير يا قمر، يوم لطيف عليكي ☀️🎀","تصبحي على خير يا أروى، نومة هادية وأحلام حلوة 🌙💗","إنتِ أقوى مما فاكرة، كملي 💪🌷","لو زهقانة: اسمعي أغنية بتحبيها وارقصي ٣ دقايق 😂🎧","مبروك على أي حاجة حلوة حصلت النهارده، تستاهلي ✨","ابتسامتك لطيفة حتى لو مشفتهاش 😂❤️","هي الدنيا فيها كام أروى؟ واحدة بس ولازم نحافظ عليها 🎀","بلاش تشيلي هم، الأمور هتتظبط واحدة واحدة 🌸","حقك ترتاحي، الراحة مش رفاهية 🫶🏻"];
const L=["أروى، إحنا لسه بنتعرف، وكل اللي عايزه إن الكلام بينا يفضل لطيف ومريح. الموقع ده هدية صغيرة، وأتمنى تكوني اتبسطتي بيه من قلبي ❤️🎀"];
const OW=["افتحي لما تكوني زعلانة: الزعل بيعدّي، وإنتِ أحلى من أي يوم وحش 🫶🏻","افتحي لما تكوني زهقانة: قومي اعملي حاجة صغيرة جديدة النهارده 😂","افتحي لما تحتاجي تضحكي: مرة واحد نسي هو واقف ليه… وقف تاني وفتكر 😂"];
const H=["إنتِ مميزة ✨","ضحكتك تنوّر 🎀","هتعدّي اليوم ده بسلام 💗","اختاري حاجة حلوة النهارده 🌷","أنا مبسوط إننا اتعرفنا 😊","نكتة: ليه الكمبيوتر بيبرد؟ عشان سيبوه Windows مفتوحة 😂","تحدّي: ابعتيلي ميم تحبيه 😂","لقب دلع: نونو 🎀","مجاملة: ذوقك حلو 💜","مفاجأة: خدي نفس عميق وابتسمي 🌈","سؤال: أحلى حاجة حصلت الأسبوع ده؟","رسالة: يومك أحلى بوجودك ❤️"];
const NUM="01120162474",INT="20"+NUM.slice(1);
const rnd=a=>a[Math.random()*a.length|0];
let a={},i=0;try{a=JSON.parse(localStorage.getItem("arwa")||"{}")}catch(e){}
const sv=()=>{try{localStorage.setItem("arwa",JSON.stringify(a))}catch(e){}};
const $=document.getElementById("app");
document.getElementById("fl").innerHTML=Array.from({length:10},(_,k)=>`<span style="left:${k*10}%;animation-duration:${9+k%4*3}s;font-size:${18+k%3*8}px">${k%2?"💗":"✨"}</span>`).join("");
function burst(){for(let k=0;k<14;k++){const s=document.createElement("span");s.className="bst";s.textContent=rnd(["❤️","💗","🎀","✨"]);s.style.left=Math.random()*90+"%";s.style.top=70+Math.random()*20+"%";document.body.appendChild(s);setTimeout(()=>s.remove(),1700)}}
const nav=()=>`<div class="top"><button onclick="home()">🏠</button><button onclick="document.documentElement.style.setProperty('--a',rnd(['#e8789f','#9b7be0','#d9a05b']))">🎨</button></div>`;
function home(){$.innerHTML=nav()+`<div class="card c"><h1>أروى ❤️</h1><p>أهلًا يا أروى يا قمر 🎀❤️<br>الموقع ده معمول مخصوص عشانك، فيه شوية أسئلة وألعاب ومفاجآت كيوت، فجهزي نفسك 😂💗</p><button class="p" style="font-size:1.2em" onclick="burst();quiz()">يلا نبدأ يا نونو 🎀</button><br><button onclick="games()">🎮 ألعاب</button><button onclick="msgs()">💌 رسايل</button><button onclick="review()">✨ مراجعة</button><p style="font-size:.7em">إجاباتك بتتحفظ على جهازك بس، ومش بتتبعت لأي حد غير لما تدوسي إرسال على واتساب بنفسك.</p></div>`}
function quiz(){const q=Q[i],n=Object.keys(a).length;$.innerHTML=nav()+`<div class="bar"><i style="width:${n/Q.length*100|0}%"></i></div><div class="card"><small>${CN[q.c]} · ${i+1}/${Q.length} · تمت ${n/Q.length*100|0}%</small><h3>${q.q}</h3>${q.o.map((o,k)=>`<button class="o ${a[i]===o?"s":""}" onclick="pick(${k})">${o}</button>`).join("")}<div class="top"><button onclick="i=Math.max(0,i-1);quiz()">→ السابق</button><button class="p" onclick="nx()">${a[i]?"التالي":"تخطي"} ←</button></div></div>`}
function pick(k){const o=Q[i].o[k];if(a[i]===o)delete a[i];else a[i]=o;sv();quiz()}
function nx(){if(i<Q.length-1){i++;if(i%8==0)burst();quiz()}else{burst();review()}}
function review(){$.innerHTML=nav()+`<div class="card"><h3>مراجعة الإجابات</h3>${Q.map((q,k)=>`<div onclick="i=${k};quiz()" style="cursor:pointer;border-bottom:1px solid var(--b)"><small>${q.q}</small><br><b>${a[k]||"— تخطيتي —"}</b></div>`).join("")}<button class="p" onclick="result()">النتيجة 🏆</button></div>`}
function report(){const g={};Q.forEach((q,k)=>{if(a[k])(g[q.c]=g[q.c]||[]).push(`السؤال: ${q.q}\nإجابتي: ${a[k]}`)});const n=Object.keys(a).length;const L2=["🎀 إجابات أروى 🎀"];for(const c in g)L2.push("",CN[c]+":",...g[c].map(x=>x+"\n"));L2.push("✨ ملخص الاختبار:",`عدد الأسئلة المجاب عليها: ${n} من ${Q.length}`,"","💕 رسالة النهاية:","أتمنى تكوني اتبسطتي، ولسه في حاجات كتير نعرفها عن بعض واحدة واحدة 💗");return L2.join("\n")}
function parts(){const out=[];let cur="";report().split("\n\n").forEach(b=>{if((cur+b).length>1100&&cur){out.push(cur);cur=""}cur+=(cur?"\n\n":"")+b});if(cur)out.push(cur);return out.map((p,k)=>out.length>1?`(${k+1}/${out.length})\n${p}`:p)}
function wa(k){if(!/^201[0125]\d{8}$/.test(INT)){alert("الرقم غير صالح");return}window.open(`https://wa.me/${INT}?text=${encodeURIComponent(parts()[k])}`,"_blank")}
function cp(){const t=report();(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>alert("اتنسخت ✅"),()=>{const e=document.createElement("textarea");e.value=t;document.body.appendChild(e);e.select();try{document.execCommand("copy");alert("اتنسخت ✅")}catch(x){alert("انسخيها يدويًا")}e.remove()})}
function result(){const n=Object.keys(a).length,P2=parts();burst();$.innerHTML=nav()+`<div class="card c"><h1>❤️</h1><h3>خلصنا يا أروى؟ 😂❤️</h3><p>أتمنى تكوني اتبسطتي وإنتِ بتجاوبي، وعرفنا عنك شوية حاجات حلوة 🎀<br>لسه في حاجات كتير ممكن نعرفها عن بعض واحدة واحدة 💗</p><p>جاوبتي على ${n} سؤال (${n/Q.length*100|0}%)</p><b>حاجات عرفناها عن أروى</b><p>${n>Q.length/2?"شخصية مليانة تفاصيل حلوة 🎀":"لسه في أسرار محتفظة بيها 🙈"} (ملخص لطيف مش تشخيص 😂)</p><p style="font-size:.8em">الإرسال على واتساب بيشمل إجاباتك المختارة، وهتراجعيها وتدوسي إرسال بنفسك.</p>${P2.map((_,k)=>`<button class="p" onclick="wa(${k})">ابعتي إجاباتك على واتساب 💚${P2.length>1?" جزء "+(k+1):""}</button>`).join("")}<button onclick="cp()">انسخي كل إجاباتك 📋</button><button onclick="review()">راجعي إجاباتك ✨</button><button onclick="env()">افتحي آخر مفاجأة 🎁</button><button onclick="if(confirm('تمسحي كل الإجابات؟')){a={};sv();i=0;quiz()}">العبّي تاني 😂</button></div>`}
function env(){$.innerHTML=nav()+`<div class="card c"><div id="e" style="font-size:5em;cursor:pointer" onclick="this.textContent='💌';document.getElementById('m').textContent=${JSON.stringify(L[0])};burst()">✉️</div><p id="m">دوسي على الظرف</p></div>`}
function msgs(){$.innerHTML=nav()+`<div class="card c"><h3>💌 رسايل</h3><p id="m">${rnd(M)}</p><button class="p" onclick="m.textContent=rnd(M)">رسالة عشوائية</button><button onclick="m.textContent=L[0]">خطاب أطول</button><button onclick="navigator.clipboard&&navigator.clipboard.writeText(m.textContent)">نسخ 📋</button></div><div class="card"><h3>🌷 افتحي لما…</h3>${OW.map(x=>{const[t,b]=x.split(": ");return`<button class="o" onclick="this.textContent=${JSON.stringify(x)}">${t}</button>`}).join("")}</div>`}
function games(){$.innerHTML=nav()+`<div class="card c"><h3>❤️ اختاري قلب</h3><div class="g">${H.map((h,k)=>`<button onclick="this.textContent='${"💌"}';alert(H[${k}])">❤️</button>`).join("")}</div></div><div class="card c"><h3>🎁 افتحي الهدية</h3><div class="g">${[0,1,2,3,4,5].map(k=>`<button onclick="this.textContent='🎉';alert(rnd(H));burst()">🎁</button>`).join("")}</div></div><div class="card c"><h3>🎡 عجلة الحظ</h3><span id="w">🎡</span><br><button class="p" onclick="w.style.transform='rotate('+(720+Math.random()*360|0)+'deg)';setTimeout(()=>alert(rnd(H)),3100)">لفّي</button></div><div class="card c"><h3>💌 ظرف المفاجأة</h3><button onclick="alert(rnd(M));burst()">افتحي ✉️</button></div>`}
home();