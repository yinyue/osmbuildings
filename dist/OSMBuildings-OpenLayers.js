var OSMBuildings=function(){function Ja(a,c){var b=a[0]-c[0],e=a[1]-c[1];return b*b+e*e}function mb(a){for(var c=0,b=0,e=0,d=a.length-3;e<d;e+=2)c+=a[e],b+=a[e+1];a=(a.length-2)/2;return[c/a<<0,b/a<<0]}function qa(a,c){var b,e,d,f,h=0,g,k;g=0;for(k=a.length-3;g<k;g+=2)b=a[g],e=a[g+1],d=a[g+2],f=a[g+3],h+=b*f-d*e;if((0<h/2?"CW":"CCW")===c)return a;b=[];for(e=a.length-2;0<=e;e-=2)b.push(a[e],a[e+1]);return b}function ra(a,c){var b={};a/=S;c/=S;b[nb]=0>=c?90:1<=c?-90:ob*(2*pb(qb(T*(1-2*c)))-Ka);b[rb]=
360*(1===a?1:(a%1+1)%1)-180;return b}function sb(a,c,b){function e(a){if("XDomainRequest"in window&&a!==d.readyState&&(d.readyState=a,d.onreadystatechange))d.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return c[b]||a});var d="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;d.onerror=function(){d.status=500;d.statusText="Error";e(4)};d.ontimeout=function(){d.status=408;d.statusText="Timeout";e(4)};d.onprogress=function(){e(3)};d.onload=function(){d.status=200;
d.statusText="Ok";e(4)};d.onreadystatechange=function(){4===d.readyState&&d.status&&!(200>d.status||299<d.status)&&b&&d.responseText&&b(JSON.parse(d.responseText))};e(0);d.open("GET",a);e(1);d.send(null);e(2);return d}function U(){V.render();aa.render();La()}function La(){q.clearRect(0,0,x,u);if(!(G<ba||ca)){var a,c,b,e,d,f,h,g=aa.MAX_HEIGHT,k=[M+y,N+z],n=y,j=y+x,l=z,r=z+u,p,I,t,v;s.renderItems.sort(function(a,b){return Ja(b.center,k)/b.height-Ja(a.center,k)/a.height});a=0;for(c=s.renderItems.length;a<
c;a++)if(d=s.renderItems[a],!(d.height<=g)){f=!1;p=d.footprint;b=0;for(e=p.length-1;b<e;b+=2)f||(f=p[b]>n&&p[b]<j&&p[b+1]>l&&p[b+1]<r);if(f){b=1>d.scale?d.height*d.scale:d.height;f=O/(O-b);h=0;d.minHeight&&(b=1>d.scale?d.minHeight*d.scale:d.minHeight,h=O/(O-b));t=d.wallColor||sa;v=d.altColor||da;p=Ma(p,f,h,t,v);I=[];if(d.holes){b=0;for(e=d.holes.length;b<e;b++)I[b]=Ma(d.holes[b],f,h,t,v)}q.fillStyle=d.roofColor||W;q.strokeStyle=v;Na(p,!0,I)}}}}function Ma(a,c,b,e,d){for(var f={x:0,y:0},h={x:0,y:0},
g,k,n=[],j=0,l=a.length-3;j<l;j+=2)f.x=a[j]-y,f.y=a[j+1]-z,h.x=a[j+2]-y,h.y=a[j+3]-z,g=ea(f.x,f.y,c),k=ea(h.x,h.y,c),b&&(f=ea(f.x,f.y,b),h=ea(h.x,h.y,b)),(h.x-f.x)*(g.y-f.y)>(g.x-f.x)*(h.y-f.y)&&(q.fillStyle=f.x<h.x&&f.y<h.y||f.x>h.x&&f.y>h.y?d:e,Na([h.x,h.y,f.x,f.y,g.x,g.y,k.x,k.y])),n[j]=g.x,n[j+1]=g.y;return n}function Na(a,c,b){if(a.length){var e,d,f,h;q.beginPath();q.moveTo(a[0],a[1]);e=2;for(d=a.length;e<d;e+=2)q.lineTo(a[e],a[e+1]);if(b){e=0;for(d=b.length;e<d;e++){a=b[e];q.moveTo(a[0],a[1]);
f=2;for(h=a.length;f<h;f+=2)q.lineTo(a[f],a[f+1])}}q.closePath();c&&q.stroke();q.fill()}}function ea(a,c,b){return{x:(a-M)*b+M<<0,y:(c-N)*b+N<<0}}function Oa(a,c){x=a;u=c;X=x/2<<0;Pa=u/2<<0;M=X;N=u;O=x/(1.5/(window.devicePixelRatio||1))/ta(45)<<0;ua.setSize(x,u);va=O-50}function Qa(a){G=a;S=tb<<G;a=G;var c=ba,b=Ra;a=fa(wa(a,c),b);A=1-fa(wa(0+0.3*((a-c)/(b-c)),0),0.3);sa=H.setAlpha(A)+"";da=ga.setAlpha(A)+"";W=P.setAlpha(A)+""}var Sa=Sa||Array,Ta=Ta||Array,B=Math,qb=B.exp,ub=B.log,vb=B.sin,wb=B.cos,
ta=B.tan,pb=B.atan,fa=B.min,wa=B.max,Ua=B.ceil,Va=B.floor,Wa=document,J,Xa=function(a){var c,b,e;if(0===a.s)c=b=e=a.l;else{e=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var d=2*a.l-e;a.h/=360;c=xa(d,e,a.h+1/3);b=xa(d,e,a.h);e=xa(d,e,a.h-1/3)}return new E(255*c<<0,255*b<<0,255*e<<0,a.a)},xa=function(a,c,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(c-a)*b:0.5>b?c:b<2/3?a+6*(c-a)*(2/3-b):a},E=function(a,c,b,e){this.r=a;this.g=c;this.b=b;this.a=4>arguments.length?1:e},ya=E.prototype;ya.toString=function(){return"rgba("+
[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};ya.setLightness=function(a){var c=E.toHSLA(this);c.l*=a;c.l=Math.min(1,Math.max(0,c.l));return Xa(c)};ya.setAlpha=function(a){return new E(this.r,this.g,this.b,this.a*a)};E.parse=function(a){var c;a+="";if(~a.indexOf("#")&&(c=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/)))return new E(parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),c[4]?parseInt(c[4],16)/255:1);if(c=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new E(parseInt(c[1],
10),parseInt(c[2],10),parseInt(c[3],10),c[4]?parseFloat(c[5]):1);if(c=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return Xa({h:parseInt(c[1],10),s:parseFloat(c[2]),l:parseFloat(c[3]),a:c[4]?parseFloat(c[5]):1})};E.toHSLA=function(a){var c=a.r/255,b=a.g/255,e=a.b/255,d=Math.max(c,b,e),f=Math.min(c,b,e),h,g=(d+f)/2,k;if(d===f)h=f=0;else{k=d-f;f=0.5<g?k/(2-d-f):k/(d+f);switch(d){case c:h=(b-e)/k+(b<e?6:0);break;case b:h=(e-c)/k+2;break;case e:h=(c-b)/k+4}h/=6}return{h:360*h,s:f,
l:g,a:a.a}};J=E;var Ya,Q=Math,za=Q.PI,w=Q.sin,F=Q.cos,Za=Q.tan,$a=Q.asin,ab=Q.atan2,K=za/180,ha=23.4397*K;Ya=function(a,c,b){b=K*-b;c*=K;a=a.valueOf()/864E5-0.5+2440588-2451545;var e=K*(357.5291+0.98560028*a),d=K*(1.9148*w(e)+0.02*w(2*e)+3E-4*w(3*e)),d=e+d+102.9372*K+za,e=$a(w(0)*F(ha)+F(0)*w(ha)*w(d)),d=ab(w(d)*F(ha)-Za(0)*w(ha),F(d));b=K*(280.16+360.9856235*a)-b-d;return{altitude:$a(w(c)*w(e)+F(c)*F(e)*F(b)),azimuth:ab(w(b),F(b)*w(c)-Za(e)*F(c))-za/2}};var bb,ia=function(a){var c=parseFloat(a);
return~a.indexOf("m")?c<<0:~a.indexOf("yd")?c*xb<<0:~a.indexOf("ft")?c*cb<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*cb+a[1]*yb<<0):c<<0},Y=function(a){a=a.toLowerCase();return"#"===a[0]?a:zb[Ab[a]||a]||null},db=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},Ba=function(a){if(a){for(var c=[],b,e=0,d=a.length;e<d;e++)b=Aa[a[e]],c.push(b[0],b[1]);c[c.length-2]!==c[0]&&c[c.length-1]!==c[1]&&c.push(c[0],c[1]);if(!(8>c.length))return c}},Ca=function(a){var c=
0,b=0;a.height&&(c=ia(a.height));!c&&a["building:height"]&&(c=ia(a["building:height"]));!c&&a.levels&&(c=a.levels*ja<<0);!c&&a["building:levels"]&&(c=a["building:levels"]*ja<<0);a.min_height&&(b=ia(a.min_height));!b&&a["building:min_height"]&&(b=ia(a["building:min_height"]));!b&&a.min_level&&(b=a.min_level*ja<<0);!b&&a["building:min_level"]&&(b=a["building:min_level"]*ja<<0);var e,d;a["building:material"]&&(e=Y(a["building:material"]));a["building:facade:material"]&&(e=Y(a["building:facade:material"]));
a["building:cladding"]&&(e=Y(a["building:cladding"]));a["building:color"]&&(e=a["building:color"]);a["building:colour"]&&(e=a["building:colour"]);a["roof:material"]&&(d=Y(a["roof:material"]));a["building:roof:material"]&&(d=Y(a["building:roof:material"]));a["roof:color"]&&(d=a["roof:color"]);a["roof:colour"]&&(d=a["roof:colour"]);a["building:roof:color"]&&(d=a["building:roof:color"]);a["building:roof:colour"]&&(d=a["building:roof:colour"]);return{height:c,minHeight:b,wallColor:e,roofColor:d}},eb=
function(a,c,b,e){a={id:a,footprint:qa(b,"CW"),holes:e};c.height&&(a.height=c.height);c.minHeight&&(a.minHeight=c.minHeight);c.wallColor&&(a.wallColor=c.wallColor);c.roofColor&&(a.roofColor=c.roofColor);e&&(a.holes=e);Da.push(a)},xb=0.9144,cb=0.3048,yb=0.0254,ja=3,Ab={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",
sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},zb={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},Aa,Z,
Da;bb=function(a){Aa={};Z={};Da=[];for(var c,b=0,e=a.length;b<e;b++)switch(c=a[b],c.type){case "node":Aa[c.id]=[c.lat,c.lon];break;case "way":var d=void 0,f=void 0;if(db(c))d=Ca(c.tags),(f=Ba(c.nodes))&&eb(c.id,d,f);else if(d=c.tags,!d||!d.highway&&!d.railway&&!d.landuse)Z[c.id]=c;break;case "relation":var f=c,h=void 0,g=void 0;c=[];var k=void 0,n=void 0,d=void 0;if(db(f)&&("multipolygon"===f.tags.type||"building"===f.tags.type)){for(var h=f.members,n=g=void 0,k=[],j=0,l=h.length;j<l;j++)g=h[j],"way"===
g.type&&Z[g.ref]&&(!g.role||"outer"===g.role?n=Z[g.ref]:("inner"===g.role||"enclave"===g.role)&&k.push(Z[g.ref]));h=n&&n.tags?{outer:n,inner:k}:void 0;if(h&&(j=Ca(f.tags),g=h.outer))if(k=Ca(g.tags),n=Ba(g.nodes)){f=k;k=j;j=void 0;for(j in k)f[j]||(f[j]=k[j]);k=f;f=0;for(j=h.inner.length;f<j;f++)(d=Ba(h.inner[f].nodes))&&c.push(qa(d,"CCW"));eb(g.id,k,n,c.length?c:null)}}}return Da};var T=Math.PI,Ka=T/2,Bb=T/4,ob=180/T,tb=256,nb="latitude",rb="longitude",x=0,u=0,X=0,Pa=0,y=0,z=0,G,S,q,H=new J(200,190,
180),ga=H.setLightness(0.8),P=H.setLightness(1.2),sa=H+"",da=ga+"",W=P+"",ka,A=1,ba=15,Ra=20,va,M,N,O,ca,Ea=new Date,R={},Fa={add:function(a,c){R[a]={data:c,time:Date.now()}},get:function(a){return R[a]&&R[a].data},purge:function(){Ea.setMinutes(Ea.getMinutes()-5);for(var a in R)R[a].time<Ea&&delete R[a]}},s,Cb=function(a){return function(c){fb(c,a)}},fb=function(a,c){if(a){var b;if("FeatureCollection"===a.type){b=a.features;var e,d,f,h,g,k,n=[],j,l,r,p,I,t,v,m;e=0;for(d=b.length;e<d;e++)if(j=b[e],
"Feature"===j.type&&(l=j.geometry,j=j.properties,"LineString"===l.type&&(t=r.length-1,r[0][0]===r[t][0]&&r[0][1]===r[t][1]&&(r=l.coordinates)),"Polygon"===l.type&&(r=l.coordinates),"MultiPolygon"===l.type&&(r=l.coordinates[0]),r)){if(j.color||j.wallColor)p=j.color||j.wallColor;j.roofColor&&(I=j.roofColor);l=r[0];m=[];v=j.height;f=t=0;for(h=l.length;f<h;f++)m.push(l[f][1],l[f][0]),t+=v||l[f][2]||0;v=[];f=1;for(h=r.length;f<h;f++){l=r[e];v[f-1]=[];g=0;for(k=l.length;g<k;g++)v[f-1].push(l[g][1],l[g][0])}f=
{id:j.id||m[0]+","+m[1],footprint:qa(m,"CW")};t&&(f.height=t/l.length<<0);j.minHeight&&(f.minHeight=j.minHeight);p&&(f.wallColor=p);I&&(f.roofColor=I);v.length&&(f.holes=v);n.push(f)}b=n}else a.osm3s&&(b=bb(a.elements));c&&Fa.add(c,b);gb(b,!0)}},hb=function(a){for(var c,b,e=new Sa(a.length),d=0,f=a.length-1;d<f;d+=2)c=a[d+1],b=fa(1,wa(0,0.5-ub(ta(Bb+Ka*a[d]/180))/T/2)),c=(c/360+0.5)*S<<0,b=b*S<<0,e[d]=c,e[d+1]=b;a=e;e=a.length/2;d=new Ta(e);f=0;c=e-1;var h,g,k,n=[],j=[],l=[];for(d[f]=d[c]=1;c;){h=
0;for(b=f+1;b<c;b++){g=a[2*b];var r=a[2*b+1],p=a[2*f],m=a[2*f+1],t=a[2*c],v=a[2*c+1],s=t-p,q=v-m,u=void 0;if(0!==s||0!==q)u=((g-p)*s+(r-m)*q)/(s*s+q*q),1<u?(p=t,m=v):0<u&&(p+=s*u,m+=q*u);s=g-p;q=r-m;g=s*s+q*q;g>h&&(k=b,h=g)}2<h&&(d[k]=1,n.push(f),j.push(k),n.push(k),j.push(c));f=n.pop();c=j.pop()}for(b=0;b<e;b++)d[b]&&l.push(a[2*b],a[2*b+1]);e=l;if(!(8>e.length))return e},gb=function(a,c){var b,e,d,f,h=[],g,k,n,j,l,m,p,q,t=Ra-G;b=0;for(e=a.length;b<e;b++)if(g=a[b],k=3*(g.height||15)>>t)if(n=3*g.minHeight>>
t,!(n>va)&&(j=hb(g.footprint))){p=[];if(g.holes){d=0;for(f=g.holes.length;d<f;d++)(q=hb(g.holes[d]))&&p.push(q)}f=d=null;if(g.wallColor&&(l=J.parse(g.wallColor)))d=l.setAlpha(A),f=""+d.setLightness(0.8),d=""+d;m=null;if(g.roofColor&&(l=J.parse(g.roofColor)))m=""+l.setAlpha(A);h.push({id:g.id,footprint:j,height:fa(k,va),minHeight:n,wallColor:d,altColor:f,roofColor:m,center:mb(j),holes:p.length?p:null})}e=0;for(g=h.length;e<g;e++)b=h[e],la[b.id]||(b.scale=c?0:1,$.renderItems.push(h[e]),la[b.id]=1);
ka||(ka=setInterval(function(){for(var a,b=!1,c=0,d=s.renderItems.length;c<d;c++)a=s.renderItems[c],1>a.scale&&(a.scale+=0.1,1<a.scale&&(a.scale=1),b=!0);U();b||(clearInterval(ka),ka=null)},33))},Ga,la={},$={renderItems:[],load:function(a){Ga=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";$.update()},update:function(){if(Ga&&
!(15>G)){var a=ra(y,z),c=ra(y+x,z+u),b=0.0075*Ua(a.latitude/0.0075),e=0.015*Ua(c.longitude/0.015),c=0.0075*Va(c.latitude/0.0075),a=0.015*Va(a.longitude/0.015);Fa.purge();$.renderItems=[];la={};for(var d,f,h;c<=b;c+=0.0075)for(d=a;d<=e;d+=0.015)h=c+","+d,(f=Fa.get(h))?gb(f):sb(Ga,{n:(1E4*(c+0.0075)<<0)/1E4,e:(1E4*(d+0.015)<<0)/1E4,s:(1E4*c<<0)/1E4,w:(1E4*d<<0)/1E4},Cb(h))}},set:function(a){$.renderItems=[];la={};fb(a)}};s=$;var V,na=function(a,c,b){return{x:a+ma.x*b,y:c+ma.y*b}},m,ib=!0,jb=new J(0,
0,0),kb=null,ma={x:0,y:0},Ha={setContext:function(a){m=a;Ha.setDate((new Date).setHours(10))},enable:function(a){ib=!!a},render:function(){var a,c,b,e;m.clearRect(0,0,x,u);if(ib&&!(G<ba||ca))if(a=ra(y+X,z+Pa),a=Ya(kb,a.latitude,a.longitude),!(0>=a.altitude)){c=1/ta(a.altitude);b=0.4/c;ma.x=wb(a.azimuth)*c;ma.y=vb(a.azimuth)*c;jb.a=b;e=jb+"";var d,f,h,g,k,n,j,l,r,p,q,t,v=[];m.beginPath();a=0;for(c=s.renderItems.length;a<c;a++){f=s.renderItems[a];l=!1;h=f.footprint;j=[];b=0;for(d=h.length-1;b<d;b+=
2)j[b]=k=h[b]-y,j[b+1]=n=h[b+1]-z,l||(l=0<k&&k<x&&0<n&&n<u);if(l){h=1>f.scale?f.height*f.scale:f.height;f.minHeight&&(g=1>f.scale?f.minHeight*f.scale:f.minHeight);k=null;b=0;for(d=j.length-3;b<d;b+=2)n=j[b],r=j[b+1],l=j[b+2],p=j[b+3],q=na(n,r,h),t=na(l,p,h),f.minHeight&&(r=na(n,r,g),p=na(l,p,g),n=r.x,r=r.y,l=p.x,p=p.y),(l-n)*(q.y-r)>(q.x-n)*(p-r)?(1===k&&m.lineTo(n,r),k=0,b||m.moveTo(n,r),m.lineTo(l,p)):(0===k&&m.lineTo(q.x,q.y),k=1,b||m.moveTo(q.x,q.y),m.lineTo(t.x,t.y));m.closePath();v.push(j)}}m.fillStyle=
e;m.fill();m.globalCompositeOperation="destination-out";m.beginPath();a=0;for(c=v.length;a<c;a++){g=v[a];m.moveTo(g[0],g[1]);b=2;for(d=g.length;b<d;b+=2)m.lineTo(g[b],g[b+1]);m.lineTo(g[0],g[1]);m.closePath()}m.fillStyle="#00ff00";m.fill();m.globalCompositeOperation="source-over"}},setDate:function(a){kb=a;Ha.render()}};V=Ha;var aa,C,lb={MAX_HEIGHT:8,setContext:function(a){C=a},render:function(){C.clearRect(0,0,x,u);if(!(G<ba||ca)){var a,c,b,e,d,f,h,g,k;C.beginPath();a=0;for(c=s.renderItems.length;a<
c;a++)if(b=s.renderItems[a],!(b.height>lb.MAX_HEIGHT)){k=!1;d=b.footprint;g=[];b=0;for(e=d.length-1;b<e;b+=2)g[b]=f=d[b]-y,g[b+1]=h=d[b+1]-z,k||(k=0<f&&f<x&&0<h&&h<u);if(k){b=0;for(e=g.length-3;b<e;b+=2)k=g[b],d=g[b+1],b?C.lineTo(k,d):C.moveTo(k,d);C.closePath()}}C.fillStyle=W;C.strokeStyle=da;C.stroke();C.fill()}}};aa=lb;var ua,Ia=function(){var a=Wa.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=
0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;oa.push(a);L.appendChild(a);return c},L=Wa.createElement("DIV");L.style.pointerEvents="none";L.style.position="absolute";L.style.left=0;L.style.top=0;var oa=[];V.setContext(Ia());aa.setContext(Ia());q=Ia();ua={appendTo:function(a){a.appendChild(L);return L},setSize:function(a,c){for(var b=0,e=oa.length;b<e;b++)oa[b].width=a,oa[b].height=c}};var Db=
OpenLayers.Layer.prototype,pa=function(a){this.name="OSM Buildings";this.attribution='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';this.isBaseLayer=!1;this.alwaysInRange=!0;this.dySum=this.dxSum=0;Db.initialize.call(this,this.name,{projection:"EPSG:900913"});a.addLayer(this)},D=pa.prototype=new OpenLayers.Layer;D.setOrigin=function(){var a=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),c=this.map.resolution,b=this.maxExtent,e=Math.round((a.lon-b.left)/c),a=Math.round((b.top-
a.lat)/c);y=e;z=a};D.setMap=function(a){this.map||OpenLayers.Layer.prototype.setMap.call(this,a);this.container=ua.appendTo(this.div);Oa(this.map.size.w,this.map.size.h);Qa(this.map.zoom);this.setOrigin()};D.removeMap=function(a){this.container.parentNode.removeChild(this.container);OpenLayers.Layer.prototype.removeMap.call(this,a)};D.onMapResize=function(){OpenLayers.Layer.prototype.onMapResize.call(this);Oa(this.map.size.w,this.map.size.h);U();s.update()};D.moveTo=function(a,c,b){a=OpenLayers.Layer.prototype.moveTo.call(this,
a,c,b);if(!b){b=parseInt(this.map.layerContainerDiv.style.left,10);var e=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-b+"px";this.div.style.top=-e+"px"}this.setOrigin();b=this.dySum=this.dxSum=0;M=X+this.dxSum;N=u+b;c?(c=this.map.zoom,ca=!1,Qa(c),s.update(),U()):(U(),s.update());return a};D.moveByPx=function(a,c){this.dxSum+=a;this.dySum+=c;var b=OpenLayers.Layer.prototype.moveByPx.call(this,a,c),e=this.dySum;M=X+this.dxSum;N=u+e;La();return b};D.setStyle=function(a){a=a||
{};if(a.color||a.wallColor)H=J.parse(a.color||a.wallColor),sa=H.setAlpha(A)+"",ga=H.setLightness(0.8),da=ga.setAlpha(A)+"",P=H.setLightness(1.2),W=P.setAlpha(A)+"";a.roofColor&&(P=J.parse(a.roofColor),W=P.setAlpha(A)+"");void 0!==a.shadows&&V.enable(a.shadows);U();return this};D.setDate=function(a){V.setDate(a);return this};D.loadData=function(a){s.load(a);return this};D.geoJSON=function(a){s.set(a);return this};pa.VERSION="0.1.8a";pa.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';
return pa}();