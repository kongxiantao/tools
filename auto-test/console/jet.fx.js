Jet().$package(function(h){h.fx=h.fx||{}});
Jet().$package(function(h){var k=h.dom,l=h.event,i={linear:function(a,c,b,d){return b*a/d+c},quadratic:{easeIn:function(a,c,b,d){return b*(a/=d)*a+c},easeOut:function(a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOut:function(a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c}},cubic:{easeIn:function(a,c,b,d){return b*(a/=d)*a*a+c},easeOut:function(a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOut:function(a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c}},quartic:{easeIn:function(a,
c,b,d){return b*(a/=d)*a*a*a+c},easeOut:function(a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOut:function(a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c}},quintic:{easeIn:function(a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOut:function(a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOut:function(a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c}},sinusoidal:{easeIn:function(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOut:function(a,
c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOut:function(a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c}},exponential:{easeIn:function(a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOut:function(a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOut:function(a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c}},circular:{easeIn:function(a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOut:function(a,
c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOut:function(a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c}},elastic:{easeIn:function(a,c,b,d,e,f){if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(!e||e<Math.abs(b)){e=b;b=f/4}else b=f/(2*Math.PI)*Math.asin(b/e);return-(e*Math.pow(2,10*(a-=1))*Math.sin((a*d-b)*2*Math.PI/f))+c},easeOut:function(a,c,b,d,e,f){if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(!e||e<Math.abs(b)){e=b;var g=
f/4}else g=f/(2*Math.PI)*Math.asin(b/e);return e*Math.pow(2,-10*a)*Math.sin((a*d-g)*2*Math.PI/f)+b+c},easeInOut:function(a,c,b,d,e,f){if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(!e||e<Math.abs(b)){e=b;var g=f/4}else g=f/(2*Math.PI)*Math.asin(b/e);if(a<1)return-0.5*e*Math.pow(2,10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)+c;return e*Math.pow(2,-10*(a-=1))*Math.sin((a*d-g)*2*Math.PI/f)*0.5+b+c}},back:{easeIn:function(a,c,b,d,e){if(e==undefined)e=1.70158;return b*(a/=d)*a*((e+1)*a-e)+
c},easeOut:function(a,c,b,d,e){if(e==undefined)e=1.70158;return b*((a=a/d-1)*a*((e+1)*a+e)+1)+c},easeInOut:function(a,c,b,d,e){if(e==undefined)e=1.70158;if((a/=d/2)<1)return b/2*a*a*(((e*=1.525)+1)*a-e)+c;return b/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+c}},bounce:{easeIn:function(a,c,b,d){return b-i.bounce.easeOut(d-a,0,b,d)+c},easeOut:function(a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*
a+0.984375)+c},easeInOut:function(a,c,b,d){return a<d/2?i.bounce.easeIn(a*2,0,b,d)*0.5+c:i.bounce.easeOut(a*2-d,0,b,d)*0.5+b*0.5+c}}},n=new h.Class({init:function(a,c,b,d,e,f){e=e;f=f||20;var g=this,j,m=this._run=function(){if(g.current<f){g.current++;j=b>d?b-Math.ceil(e(g.current,0,b-d,f)):b+Math.ceil(e(g.current,0,d-b,f));k.setStyle(a,c,j+"px");g._timer=setTimeout(m,30)}else l.notifyObservers(g,"finish")}},start:function(){clearTimeout(this._timer);this.current=0;this._run()}});h.fx.Animation=n;
h.fx.tween=i});
