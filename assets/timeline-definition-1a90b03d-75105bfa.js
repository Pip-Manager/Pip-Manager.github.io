import{b3 as bt,aM as vt,H as kt,c as wt,l as I,h as q,t as St,b4 as Et,b5 as Tt,b6 as It}from"./mermaid.core-9c6795e5.js";import{a as nt}from"./arc-0da0c361.js";import"./app-fb83f670.js";import"./commonjsHelpers-de833af9.js";import"./path-53f90ab3.js";var Y=function(){var n=function(x,r,c,h){for(c=c||{},h=x.length;h--;c[x[h]]=r);return c},t=[1,2],e=[1,5],s=[6,9,11,17,18,20,22,23,26,27,28],i=[1,15],o=[1,16],a=[1,17],p=[1,18],y=[1,19],g=[1,23],b=[1,24],m=[1,27],v=[4,6,9,11,17,18,20,22,23,26,27,28],E={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(r,c,h,d,u,l,M){var f=l.length-1;switch(u){case 1:return l[f-1];case 3:this.$=[];break;case 4:l[f-1].push(l[f]),this.$=l[f-1];break;case 5:case 6:this.$=l[f];break;case 7:case 8:this.$=[];break;case 11:d.getCommonDb().setDiagramTitle(l[f].substr(6)),this.$=l[f].substr(6);break;case 12:this.$=l[f].trim(),d.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=l[f].trim(),d.getCommonDb().setAccDescription(this.$);break;case 15:d.addSection(l[f].substr(8)),this.$=l[f].substr(8);break;case 19:d.addTask(l[f],0,""),this.$=l[f];break;case 20:d.addEvent(l[f].substr(2)),this.$=l[f];break;case 21:d.parseDirective("%%{","open_directive");break;case 22:d.parseDirective(l[f],"type_directive");break;case 23:l[f]=l[f].trim().replace(/'/g,'"'),d.parseDirective(l[f],"arg_directive");break;case 24:d.parseDirective("}%%","close_directive","timeline");break}},table:[{3:1,4:t,7:3,12:4,28:e},{1:[3]},n(s,[2,3],{5:6}),{3:7,4:t,7:3,12:4,28:e},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:i,18:o,20:a,22:p,23:y,24:20,25:21,26:g,27:b,28:e},{1:[2,2]},{14:25,15:[1,26],31:m},n([15,31],[2,22]),n(s,[2,8],{1:[2,1]}),n(s,[2,4]),{7:22,10:28,12:4,17:i,18:o,20:a,22:p,23:y,24:20,25:21,26:g,27:b,28:e},n(s,[2,6]),n(s,[2,7]),n(s,[2,11]),{19:[1,29]},{21:[1,30]},n(s,[2,14]),n(s,[2,15]),n(s,[2,16]),n(s,[2,17]),n(s,[2,18]),n(s,[2,19]),n(s,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},n(s,[2,5]),n(s,[2,12]),n(s,[2,13]),n(v,[2,9]),{14:34,31:m},{31:[2,23]},{11:[1,35]},n(v,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(r,c){if(c.recoverable)this.trace(r);else{var h=new Error(r);throw h.hash=c,h}},parse:function(r){var c=this,h=[0],d=[],u=[null],l=[],M=this.table,f="",C=0,J=0,V=2,w=1,L=l.slice.call(arguments,1),_=Object.create(this.lexer),$={yy:{}};for(var A in this.yy)Object.prototype.hasOwnProperty.call(this.yy,A)&&($.yy[A]=this.yy[A]);_.setInput(r,$.yy),$.yy.lexer=_,$.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var O=_.yylloc;l.push(O);var K=_.options&&_.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function _t(){var P;return P=d.pop()||_.lex()||w,typeof P!="number"&&(P instanceof Array&&(d=P,P=d.pop()),P=c.symbols_[P]||P),P}for(var T,z,N,Q,F={},j,H,et,G;;){if(z=h[h.length-1],this.defaultActions[z]?N=this.defaultActions[z]:((T===null||typeof T>"u")&&(T=_t()),N=M[z]&&M[z][T]),typeof N>"u"||!N.length||!N[0]){var X="";G=[];for(j in M[z])this.terminals_[j]&&j>V&&G.push("'"+this.terminals_[j]+"'");_.showPosition?X="Parse error on line "+(C+1)+`:
`+_.showPosition()+`
Expecting `+G.join(", ")+", got '"+(this.terminals_[T]||T)+"'":X="Parse error on line "+(C+1)+": Unexpected "+(T==w?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(X,{text:_.match,token:this.terminals_[T]||T,line:_.yylineno,loc:O,expected:G})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+T);switch(N[0]){case 1:h.push(T),u.push(_.yytext),l.push(_.yylloc),h.push(N[1]),T=null,J=_.yyleng,f=_.yytext,C=_.yylineno,O=_.yylloc;break;case 2:if(H=this.productions_[N[1]][1],F.$=u[u.length-H],F._$={first_line:l[l.length-(H||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(H||1)].first_column,last_column:l[l.length-1].last_column},K&&(F._$.range=[l[l.length-(H||1)].range[0],l[l.length-1].range[1]]),Q=this.performAction.apply(F,[f,J,C,$.yy,N[1],u,l].concat(L)),typeof Q<"u")return Q;H&&(h=h.slice(0,-1*H*2),u=u.slice(0,-1*H),l=l.slice(0,-1*H)),h.push(this.productions_[N[1]][0]),u.push(F.$),l.push(F._$),et=M[h[h.length-2]][h[h.length-1]],h.push(et);break;case 3:return!0}}return!0}},S=function(){var x={EOF:1,parseError:function(c,h){if(this.yy.parser)this.yy.parser.parseError(c,h);else throw new Error(c)},setInput:function(r,c){return this.yy=c||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var c=r.match(/(?:\r\n?|\n).*/g);return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var c=r.length,h=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-c),this.offset-=c;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===d.length?this.yylloc.first_column:0)+d[d.length-h.length].length-h[0].length:this.yylloc.first_column-c},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-c]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),c=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+c+"^"},test_match:function(r,c){var h,d,u;if(this.options.backtrack_lexer&&(u={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(u.yylloc.range=this.yylloc.range.slice(0))),d=r[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],h=this.performAction.call(this,this.yy,this,c,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var l in u)this[l]=u[l];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,c,h,d;this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),l=0;l<u.length;l++)if(h=this._input.match(this.rules[u[l]]),h&&(!c||h[0].length>c[0].length)){if(c=h,d=l,this.options.backtrack_lexer){if(r=this.test_match(h,u[l]),r!==!1)return r;if(this._backtrack){c=!1;continue}else return!1}else if(!this.options.flex)break}return c?(r=this.test_match(c,u[d]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var c=this.next();return c||this.lex()},begin:function(c){this.conditionStack.push(c)},popState:function(){var c=this.conditionStack.length-1;return c>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(c){return c=this.conditionStack.length-1-Math.abs(c||0),c>=0?this.conditionStack[c]:"INITIAL"},pushState:function(c){this.begin(c)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(c,h,d,u){switch(d){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};return x}();E.lexer=S;function k(){this.yy={}}return k.prototype=E,E.Parser=k,new k}();Y.parser=Y;const $t=Y;let W="",at=0;const D=[],U=[],B=[],ct=()=>bt,lt=(n,t,e)=>{vt(globalThis,n,t,e)},ot=function(){D.length=0,U.length=0,W="",B.length=0,kt()},ht=function(n){W=n,D.push(n)},dt=function(){return D},ut=function(){let n=it();const t=100;let e=0;for(;!n&&e<t;)n=it(),e++;return U.push(...B),U},pt=function(n,t,e){const s={id:at++,section:W,type:W,task:n,score:t||0,events:e?[e]:[]};B.push(s)},yt=function(n){B.find(e=>e.id===at-1).events.push(n)},gt=function(n){const t={section:W,type:W,description:n,task:n,classes:[]};U.push(t)},it=function(){const n=function(e){return B[e].processed};let t=!0;for(const[e,s]of B.entries())n(e),t=t&&s.processed;return t},Nt={clear:ot,getCommonDb:ct,addSection:ht,getSections:dt,getTasks:ut,addTask:pt,addTaskOrg:gt,addEvent:yt,parseDirective:lt},Mt=Object.freeze(Object.defineProperty({__proto__:null,addEvent:yt,addSection:ht,addTask:pt,addTaskOrg:gt,clear:ot,default:Nt,getCommonDb:ct,getSections:dt,getTasks:ut,parseDirective:lt},Symbol.toStringTag,{value:"Module"})),Lt=12,Z=function(n,t){const e=n.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},At=function(n,t){const s=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=n.append("g");i.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function o(y){const g=nt().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function a(y){const g=nt().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",g).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function p(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?o(i):t.score<3?a(i):p(i),s},Ht=function(n,t){const e=n.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},ft=function(n,t){const e=t.text.replace(/<br\s*\/?>/gi," "),s=n.append("text");s.attr("x",t.x),s.attr("y",t.y),s.attr("class","legend"),s.style("text-anchor",t.anchor),t.class!==void 0&&s.attr("class",t.class);const i=s.append("tspan");return i.attr("x",t.x+t.textMargin*2),i.text(e),s},Pt=function(n,t){function e(i,o,a,p,y){return i+","+o+" "+(i+a)+","+o+" "+(i+a)+","+(o+p-y)+" "+(i+a-y*1.2)+","+(o+p)+" "+i+","+(o+p)}const s=n.append("polygon");s.attr("points",e(t.x,t.y,50,20,7)),s.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,ft(n,t)},Ct=function(n,t,e){const s=n.append("g"),i=tt();i.x=t.x,i.y=t.y,i.fill=t.fill,i.width=e.width,i.height=e.height,i.class="journey-section section-type-"+t.num,i.rx=3,i.ry=3,Z(s,i),mt(e)(t.text,s,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+t.num},e,t.colour)};let st=-1;const Vt=function(n,t,e){const s=t.x+e.width/2,i=n.append("g");st++;const o=300+5*30;i.append("line").attr("id","task"+st).attr("x1",s).attr("y1",t.y).attr("x2",s).attr("y2",o).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),At(i,{cx:s,cy:300+(5-t.score)*30,score:t.score});const a=tt();a.x=t.x,a.y=t.y,a.fill=t.fill,a.width=e.width,a.height=e.height,a.class="task task-type-"+t.num,a.rx=3,a.ry=3,Z(i,a),t.x+14,mt(e)(t.task,i,a.x,a.y,a.width,a.height,{class:"task"},e,t.colour)},zt=function(n,t){Z(n,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},Rt=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},tt=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},mt=function(){function n(i,o,a,p,y,g,b,m){const v=o.append("text").attr("x",a+y/2).attr("y",p+g/2+5).style("font-color",m).style("text-anchor","middle").text(i);s(v,b)}function t(i,o,a,p,y,g,b,m,v){const{taskFontSize:E,taskFontFamily:S}=m,k=i.split(/<br\s*\/?>/gi);for(let x=0;x<k.length;x++){const r=x*E-E*(k.length-1)/2,c=o.append("text").attr("x",a+y/2).attr("y",p).attr("fill",v).style("text-anchor","middle").style("font-size",E).style("font-family",S);c.append("tspan").attr("x",a+y/2).attr("dy",r).text(k[x]),c.attr("y",p+g/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(c,b)}}function e(i,o,a,p,y,g,b,m){const v=o.append("switch"),S=v.append("foreignObject").attr("x",a).attr("y",p).attr("width",y).attr("height",g).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");S.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),t(i,v,a,p,y,g,b,m),s(S,b)}function s(i,o){for(const a in o)a in o&&i.attr(a,o[a])}return function(i){return i.textPlacement==="fo"?e:i.textPlacement==="old"?n:t}}(),Ft=function(n){n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function xt(n,t){n.each(function(){var e=q(this),s=e.text().split(/(\s+|<br>)/).reverse(),i,o=[],a=1.1,p=e.attr("y"),y=parseFloat(e.attr("dy")),g=e.text(null).append("tspan").attr("x",0).attr("y",p).attr("dy",y+"em");for(let b=0;b<s.length;b++)i=s[s.length-1-b],o.push(i),g.text(o.join(" ").trim()),(g.node().getComputedTextLength()>t||i==="<br>")&&(o.pop(),g.text(o.join(" ").trim()),i==="<br>"?o=[""]:o=[i],g=e.append("tspan").attr("x",0).attr("y",p).attr("dy",a+"em").text(i))})}const Wt=function(n,t,e,s){const i=e%Lt-1,o=n.append("g");t.section=i,o.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+i));const a=o.append("g"),p=o.append("g"),g=p.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(xt,t.width).node().getBBox(),b=s.fontSize&&s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;return t.height=g.height+b*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,p.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Ot(a,t,i),t},Bt=function(n,t,e){const s=n.append("g"),o=s.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(xt,t.width).node().getBBox(),a=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return s.remove(),o.height+a*1.1*.5+t.padding},Ot=function(n,t,e){n.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),n.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},R={drawRect:Z,drawCircle:Ht,drawSection:Ct,drawText:ft,drawLabel:Pt,drawTask:Vt,drawBackgroundRect:zt,getTextObj:Rt,getNoteRect:tt,initGraphics:Ft,drawNode:Wt,getVirtualNodeHeight:Bt},jt=function(n,t,e,s){var i,o;const a=wt(),p=a.leftMargin??50;I.debug("timeline",s.db);const y=a.securityLevel;let g;y==="sandbox"&&(g=q("#i"+t));const m=(y==="sandbox"?q(g.nodes()[0].contentDocument.body):q("body")).select("#"+t);m.append("g");const v=s.db.getTasks(),E=s.db.getCommonDb().getDiagramTitle();I.debug("task",v),R.initGraphics(m);const S=s.db.getSections();I.debug("sections",S);let k=0,x=0,r=0,c=0,h=50+p,d=50;c=50;let u=0,l=!0;S.forEach(function(V){const w={number:u,descr:V,section:u,width:150,padding:20,maxHeight:k},L=R.getVirtualNodeHeight(m,w,a);I.debug("sectionHeight before draw",L),k=Math.max(k,L+20)});let M=0,f=0;I.debug("tasks.length",v.length);for(const[V,w]of v.entries()){const L={number:V,descr:w,section:w.section,width:150,padding:20,maxHeight:x},_=R.getVirtualNodeHeight(m,L,a);I.debug("taskHeight before draw",_),x=Math.max(x,_+20),M=Math.max(M,w.events.length);let $=0;for(let A=0;A<w.events.length;A++){const K={descr:w.events[A],section:w.section,number:w.section,width:150,padding:20,maxHeight:50};$+=R.getVirtualNodeHeight(m,K,a)}f=Math.max(f,$)}I.debug("maxSectionHeight before draw",k),I.debug("maxTaskHeight before draw",x),S&&S.length>0?S.forEach(V=>{const w=v.filter(A=>A.section===V),L={number:u,descr:V,section:u,width:200*Math.max(w.length,1)-50,padding:20,maxHeight:k};I.debug("sectionNode",L);const _=m.append("g"),$=R.drawNode(_,L,u,a);I.debug("sectionNode output",$),_.attr("transform",`translate(${h}, ${c})`),d+=k+50,w.length>0&&rt(m,w,u,h,d,x,a,M,f,k,!1),h+=200*Math.max(w.length,1),d=c,u++}):(l=!1,rt(m,v,u,h,d,x,a,M,f,k,!0));const C=m.node().getBBox();I.debug("bounds",C),E&&m.append("text").text(E).attr("x",C.width/2-p).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),r=l?k+x+150:x+100,m.append("g").attr("class","lineWrapper").append("line").attr("x1",p).attr("y1",r).attr("x2",C.width+3*p).attr("y2",r).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),St(void 0,m,((i=a.timeline)==null?void 0:i.padding)??50,((o=a.timeline)==null?void 0:o.useMaxWidth)??!1)},rt=function(n,t,e,s,i,o,a,p,y,g,b){var m;for(const v of t){const E={descr:v.task,section:e,number:e,width:150,padding:20,maxHeight:o};I.debug("taskNode",E);const S=n.append("g").attr("class","taskWrapper"),x=R.drawNode(S,E,e,a).height;if(I.debug("taskHeight after draw",x),S.attr("transform",`translate(${s}, ${i})`),o=Math.max(o,x),v.events){const r=n.append("g").attr("class","lineWrapper");let c=o;i+=100,c=c+Gt(n,v.events,e,s,i,a),i-=100,r.append("line").attr("x1",s+190/2).attr("y1",i+o).attr("x2",s+190/2).attr("y2",i+o+(b?o:g)+y+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s=s+200,b&&!((m=a.timeline)!=null&&m.disableMulticolor)&&e++}i=i-10},Gt=function(n,t,e,s,i,o){let a=0;const p=i;i=i+100;for(const y of t){const g={descr:y,section:e,number:e,width:150,padding:20,maxHeight:50};I.debug("eventNode",g);const b=n.append("g").attr("class","eventWrapper"),v=R.drawNode(b,g,e,o).height;a=a+v,b.attr("transform",`translate(${s}, ${i})`),i=i+10+v}return i=p,a},qt={setConf:()=>{},draw:jt},Ut=n=>{let t="";for(let e=0;e<n.THEME_COLOR_LIMIT;e++)n["lineColor"+e]=n["lineColor"+e]||n["cScaleInv"+e],Et(n["lineColor"+e])?n["lineColor"+e]=Tt(n["lineColor"+e],20):n["lineColor"+e]=It(n["lineColor"+e],20);for(let e=0;e<n.THEME_COLOR_LIMIT;e++){const s=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${n["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${n["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${n["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${n["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${s};
    }
    .section-${e-1} line {
      stroke: ${n["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Zt=n=>`
  .edge {
    stroke-width: 3;
  }
  ${Ut(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,Jt=Zt,te={db:Mt,renderer:qt,parser:$t,styles:Jt};export{te as diagram};
