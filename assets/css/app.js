(function(e,t){
    var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){
        return new x.fn.init(e,t,r)
        },w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){
        return t.toUpperCase()
        },q=function(e){
        (a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
        },_=function(){
        a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
        };
        
    x.fn=x.prototype={
        jquery:f,
        constructor:x,
        init:function(e,n,r){
            var i,o;
            if(!e)return this;
            if("string"==typeof e){
                if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);
                if(i[1]){
                    if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this
                    }
                    if(o=a.getElementById(i[2]),o&&o.parentNode){
                    if(o.id!==i[2])return r.find(e);
                    this.length=1,this[0]=o
                    }
                    return this.context=a,this.selector=e,this
                }
                return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
            },
        selector:"",
        length:0,
        toArray:function(){
            return g.call(this)
            },
        get:function(e){
            return null==e?this.toArray():0>e?this[this.length+e]:this[e]
            },
        pushStack:function(e){
            var t=x.merge(this.constructor(),e);
            return t.prevObject=this,t.context=this.context,t
            },
        each:function(e,t){
            return x.each(this,e,t)
            },
        ready:function(e){
            return x.ready.promise().done(e),this
            },
        slice:function(){
            return this.pushStack(g.apply(this,arguments))
            },
        first:function(){
            return this.eq(0)
            },
        last:function(){
            return this.eq(-1)
            },
        eq:function(e){
            var t=this.length,n=+e+(0>e?t:0);
            return this.pushStack(n>=0&&t>n?[this[n]]:[])
            },
        map:function(e){
            return this.pushStack(x.map(this,function(t,n){
                return e.call(t,n,t)
                }))
            },
        end:function(){
            return this.prevObject||this.constructor(null)
            },
        push:h,
        sort:[].sort,
        splice:[].splice
        },x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){
        var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
        for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s
        },x.extend({
        expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),
        noConflict:function(t){
            return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
            },
        isReady:!1,
        readyWait:1,
        holdReady:function(e){
            e?x.readyWait++:x.ready(!0)
            },
        ready:function(e){
            if(e===!0?!--x.readyWait:!x.isReady){
                if(!a.body)return setTimeout(x.ready);
                x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
                }
            },
    isFunction:function(e){
        return"function"===x.type(e)
        },
    isArray:Array.isArray||function(e){
        return"array"===x.type(e)
        },
    isWindow:function(e){
        return null!=e&&e==e.window
        },
    isNumeric:function(e){
        return!isNaN(parseFloat(e))&&isFinite(e)
        },
    type:function(e){
        return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
        },
    isPlainObject:function(e){
        var n;
        if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;
        try{
            if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1
                }catch(r){
            return!1
            }
            if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)
        },
    isEmptyObject:function(e){
        var t;
        for(t in e)return!1;return!0
        },
    error:function(e){
        throw Error(e)
        },
    parseHTML:function(e,t,n){
        if(!e||"string"!=typeof e)return null;
        "boolean"==typeof t&&(n=t,t=!1),t=t||a;
        var r=k.exec(e),i=!n&&[];
        return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
        },
    parseJSON:function(n){
        return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
        },
    parseXML:function(n){
        var r,i;
        if(!n||"string"!=typeof n)return null;
        try{
            e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
            }catch(o){
            r=t
            }
            return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
        },
    noop:function(){},
        globalEval:function(t){
        t&&x.trim(t)&&(e.execScript||function(t){
            e.eval.call(e,t)
            })(t)
        },
    camelCase:function(e){
        return e.replace(D,"ms-").replace(L,H)
        },
    nodeName:function(e,t){
        return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
        },
    each:function(e,t,n){
        var r,i=0,o=e.length,a=M(e);
        if(n){
            if(a){
                for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break
                }else for(i in e)if(r=t.apply(e[i],n),r===!1)break
                }else if(a){
            for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break
            }else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e
        },
    trim:b&&!b.call("\ufeff\u00a0")?function(e){
        return null==e?"":b.call(e)
        }:function(e){
        return null==e?"":(e+"").replace(C,"")
        },
    makeArray:function(e,t){
        var n=t||[];
        return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
        },
    inArray:function(e,t,n){
        var r;
        if(t){
            if(m)return m.call(t,e,n);
            for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n
                }
                return-1
        },
    merge:function(e,n){
        var r=n.length,i=e.length,o=0;
        if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];
        return e.length=i,e
        },
    grep:function(e,t,n){
        var r,i=[],o=0,a=e.length;
        for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);
        return i
        },
    map:function(e,t,n){
        var r,i=0,o=e.length,a=M(e),s=[];
        if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)
        },
    guid:1,
    proxy:function(e,n){
        var r,i,o;
        return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){
            return e.apply(n||this,r.concat(g.call(arguments)))
            },i.guid=e.guid=e.guid||x.guid++,i):t
        },
    access:function(e,n,r,i,o,a,s){
        var l=0,u=e.length,c=null==r;
        if("object"===x.type(r)){
            o=!0;
            for(l in r)x.access(e,n,l,r[l],!0,a,s)
                }else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){
            return c.call(x(e),n)
            })),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));
        return o?e:c?n.call(e):u?n(e[0],r):a
        },
    now:function(){
        return(new Date).getTime()
        },
    swap:function(e,t,n,r){
        var i,o,a={};
        
        for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
        for(o in t)e.style[o]=a[o];return i
        }
    }),x.ready.promise=function(t){
    if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);
        else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);
        else{
        a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
        var r=!1;
        try{
            r=null==e.frameElement&&a.documentElement
            }catch(i){}
        r&&r.doScroll&&function o(){
            if(!x.isReady){
                try{
                    r.doScroll("left")
                    }catch(e){
                    return setTimeout(o,50)
                    }
                    _(),x.ready()
                }
            }()
        }
        return n.promise(t)
    },x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){
    c["[object "+t+"]"]=t.toLowerCase()
    });
function M(e){
    var t=e.length,n=x.type(e);
    return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
    }
    r=x(a),function(e,t){
    var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){
        return e===t?(S=!0,0):0
        },j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){
        var t=0,n=this.length;
        for(;n>t;t++)if(this[t]===e)return t;return-1
        },B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={
        ID:RegExp("^#("+R+")"),
        CLASS:RegExp("^\\.("+R+")"),
        TAG:RegExp("^("+R.replace("w","w*")+")"),
        ATTR:RegExp("^"+$),
        PSEUDO:RegExp("^"+I),
        CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),
        bool:RegExp("^(?:"+B+")$","i"),
        needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")
        },K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){
        var r="0x"+t-65536;
        return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
        };
        
    try{
        M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
        }catch(ot){
        M={
            apply:H.length?function(e,t){
                _.apply(e,O.call(t))
                }:function(e,t){
                var n=e.length,r=0;
                while(e[n++]=t[r++]);
                e.length=n-1
                }
            }
    }
function at(e,t,n,i){
    var o,a,s,l,u,c,d,m,y,x;
    if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;
    if(1!==(l=t.nodeType)&&9!==l)return[];
    if(h&&!i){
        if(o=Z.exec(e))if(s=o[1]){
            if(9===l){
                if(a=t.getElementById(s),!a||!a.parentNode)return n;
                if(a.id===s)return n.push(a),n
                    }else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n
                }else{
            if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;
            if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n
                }
                if(r.qsa&&(!g||!g.test(e))){
            if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){
                c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
                while(u--)c[u]=m+yt(c[u]);
                y=V.test(e)&&t.parentNode||t,x=c.join(",")
                }
                if(x)try{
                return M.apply(n,y.querySelectorAll(x)),n
                }catch(T){}finally{
                d||t.removeAttribute("id")
                }
            }
        }
return kt(e.replace(z,"$1"),t,n,i)
}
function st(){
    var e=[];
    function t(n,r){
        return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
        }
        return t
    }
    function lt(e){
    return e[b]=!0,e
    }
    function ut(e){
    var t=f.createElement("div");
    try{
        return!!e(t)
        }catch(n){
        return!1
        }finally{
        t.parentNode&&t.parentNode.removeChild(t),t=null
        }
    }
function ct(e,t){
    var n=e.split("|"),r=e.length;
    while(r--)o.attrHandle[n[r]]=t
        }
        function pt(e,t){
    var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
    if(r)return r;
    if(n)while(n=n.nextSibling)if(n===t)return-1;
    return e?1:-1
    }
    function ft(e){
    return function(t){
        var n=t.nodeName.toLowerCase();
        return"input"===n&&t.type===e
        }
    }
function dt(e){
    return function(t){
        var n=t.nodeName.toLowerCase();
        return("input"===n||"button"===n)&&t.type===e
        }
    }
function ht(e){
    return lt(function(t){
        return t=+t,lt(function(n,r){
            var i,o=e([],n.length,t),a=o.length;
            while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
                })
        })
    }
    s=at.isXML=function(e){
    var t=e&&(e.ownerDocument||e).documentElement;
    return t?"HTML"!==t.nodeName:!1
    },r=at.support={},p=at.setDocument=function(e){
    var n=e?e.ownerDocument||e:w,i=n.defaultView;
    return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){
        p()
        }),r.attributes=ut(function(e){
        return e.className="i",!e.getAttribute("className")
        }),r.getElementsByTagName=ut(function(e){
        return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
        }),r.getElementsByClassName=ut(function(e){
        return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
        }),r.getById=ut(function(e){
        return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
        }),r.getById?(o.find.ID=function(e,t){
        if(typeof t.getElementById!==j&&h){
            var n=t.getElementById(e);
            return n&&n.parentNode?[n]:[]
            }
        },o.filter.ID=function(e){
        var t=e.replace(rt,it);
        return function(e){
            return e.getAttribute("id")===t
            }
        }):(delete o.find.ID,o.filter.ID=function(e){
    var t=e.replace(rt,it);
    return function(e){
        var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
        return n&&n.value===t
        }
    }),o.find.TAG=r.getElementsByTagName?function(e,n){
    return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
    }:function(e,t){
    var n,r=[],i=0,o=t.getElementsByTagName(e);
    if("*"===e){
        while(n=o[i++])1===n.nodeType&&r.push(n);
        return r
        }
        return o
    },o.find.CLASS=r.getElementsByClassName&&function(e,n){
    return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
    },m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){
    e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
    }),ut(function(e){
    var t=n.createElement("input");
    t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
    })),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){
    r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
    }),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){
    var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
    return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
    }:function(e,t){
    if(t)while(t=t.parentNode)if(t===e)return!0;
    return!1
    },A=d.compareDocumentPosition?function(e,t){
    if(e===t)return S=!0,0;
    var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
    return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
    }:function(e,t){
    var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
    if(e===t)return S=!0,0;
    if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;
    if(o===a)return pt(e,t);
    r=e;
    while(r=r.parentNode)s.unshift(r);
    r=t;
    while(r=r.parentNode)l.unshift(r);
    while(s[i]===l[i])i++;
    return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
    },n):f
},at.matches=function(e,t){
    return at(e,null,null,t)
    },at.matchesSelector=function(e,t){
    if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{
        var n=y.call(e,t);
        if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n
            }catch(i){}
        return at(t,f,null,[e]).length>0
    },at.contains=function(e,t){
    return(e.ownerDocument||e)!==f&&p(e),v(e,t)
    },at.attr=function(e,n){
    (e.ownerDocument||e)!==f&&p(e);
    var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
    return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
    },at.error=function(e){
    throw Error("Syntax error, unrecognized expression: "+e)
    },at.uniqueSort=function(e){
    var t,n=[],i=0,o=0;
    if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){
        while(t=e[o++])t===e[o]&&(i=n.push(o));
        while(i--)e.splice(n[i],1)
            }
            return e
    },a=at.getText=function(e){
    var t,n="",r=0,i=e.nodeType;
    if(i){
        if(1===i||9===i||11===i){
            if("string"==typeof e.textContent)return e.textContent;
            for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)
                }else if(3===i||4===i)return e.nodeValue
            }else for(;t=e[r];r++)n+=a(t);
    return n
    },o=at.selectors={
    cacheLength:50,
    createPseudo:lt,
    match:Q,
    attrHandle:{},
    find:{},
    relative:{
        ">":{
            dir:"parentNode",
            first:!0
            },
        " ":{
            dir:"parentNode"
        },
        "+":{
            dir:"previousSibling",
            first:!0
            },
        "~":{
            dir:"previousSibling"
        }
    },
preFilter:{
    ATTR:function(e){
        return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
        },
    CHILD:function(e){
        return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
        },
    PSEUDO:function(e){
        var n,r=!e[5]&&e[2];
        return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
        }
    },
filter:{
    TAG:function(e){
        var t=e.replace(rt,it).toLowerCase();
        return"*"===e?function(){
            return!0
            }:function(e){
            return e.nodeName&&e.nodeName.toLowerCase()===t
            }
        },
CLASS:function(e){
    var t=N[e+" "];
    return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){
        return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
        })
    },
ATTR:function(e,t,n){
    return function(r){
        var i=at.attr(r,e);
        return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
        }
    },
CHILD:function(e,t,n,r,i){
    var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
    return 1===r&&0===i?function(e){
        return!!e.parentNode
        }:function(t,n,l){
        var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
        if(m){
            if(o){
                while(g){
                    p=t;
                    while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;
                    h=g="only"===e&&!h&&"nextSibling"
                    }
                    return!0
                }
                if(h=[a?m.firstChild:m.lastChild],a&&v){
                c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
                while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){
                    c[e]=[T,d,f];
                    break
                }
                }else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;
        return f-=i,f===r||0===f%r&&f/r>=0
        }
    }
},
PSEUDO:function(e,t){
    var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
    return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){
        var i,o=r(e,t),a=o.length;
        while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
            }):function(e){
        return r(e,0,n)
        }):r
    }
},
pseudos:{
    not:lt(function(e){
        var t=[],n=[],r=l(e.replace(z,"$1"));
        return r[b]?lt(function(e,t,n,i){
            var o,a=r(e,null,i,[]),s=e.length;
            while(s--)(o=a[s])&&(e[s]=!(t[s]=o))
                }):function(e,i,o){
            return t[0]=e,r(t,null,o,n),!n.pop()
            }
        }),
has:lt(function(e){
    return function(t){
        return at(e,t).length>0
        }
    }),
contains:lt(function(e){
    return function(t){
        return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
        }
    }),
lang:lt(function(e){
    return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){
        var n;
        do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);
        return!1
        }
    }),
target:function(t){
    var n=e.location&&e.location.hash;
    return n&&n.slice(1)===t.id
    },
root:function(e){
    return e===d
    },
focus:function(e){
    return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
    },
enabled:function(e){
    return e.disabled===!1
    },
disabled:function(e){
    return e.disabled===!0
    },
checked:function(e){
    var t=e.nodeName.toLowerCase();
    return"input"===t&&!!e.checked||"option"===t&&!!e.selected
    },
selected:function(e){
    return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
    },
empty:function(e){
    for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0
    },
parent:function(e){
    return!o.pseudos.empty(e)
    },
header:function(e){
    return tt.test(e.nodeName)
    },
input:function(e){
    return et.test(e.nodeName)
    },
button:function(e){
    var t=e.nodeName.toLowerCase();
    return"input"===t&&"button"===e.type||"button"===t
    },
text:function(e){
    var t;
    return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
    },
first:ht(function(){
    return[0]
    }),
last:ht(function(e,t){
    return[t-1]
    }),
eq:ht(function(e,t,n){
    return[0>n?n+t:n]
    }),
even:ht(function(e,t){
    var n=0;
    for(;t>n;n+=2)e.push(n);
    return e
    }),
odd:ht(function(e,t){
    var n=1;
    for(;t>n;n+=2)e.push(n);
    return e
    }),
lt:ht(function(e,t,n){
    var r=0>n?n+t:n;
    for(;--r>=0;)e.push(r);
    return e
    }),
gt:ht(function(e,t,n){
    var r=0>n?n+t:n;
    for(;t>++r;)e.push(r);
    return e
    })
}
},o.pseudos.nth=o.pseudos.eq;
for(n in{
    radio:!0,
    checkbox:!0,
    file:!0,
    password:!0,
    image:!0
    })o.pseudos[n]=ft(n);for(n in{
    submit:!0,
    reset:!0
    })o.pseudos[n]=dt(n);function gt(){}
gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;
function mt(e,t){
    var n,r,i,a,s,l,u,c=k[e+" "];
    if(c)return t?0:c.slice(0);
    s=e,l=[],u=o.preFilter;
    while(s){
        (!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({
            value:n,
            type:r[0].replace(z," ")
            }),s=s.slice(n.length));
        for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({
            value:n,
            type:a,
            matches:r
        }),s=s.slice(n.length));if(!n)break
    }
    return t?s.length:s?at.error(e):k(e,l).slice(0)
    }
    function yt(e){
    var t=0,n=e.length,r="";
    for(;n>t;t++)r+=e[t].value;
    return r
    }
    function vt(e,t,n){
    var r=t.dir,o=n&&"parentNode"===r,a=C++;
    return t.first?function(t,n,i){
        while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)
            }:function(t,n,s){
        var l,u,c,p=T+" "+a;
        if(s){
            while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0
                }else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){
            if((l=u[1])===!0||l===i)return l===!0
                }else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0
            }
        }
function bt(e){
    return e.length>1?function(t,n,r){
        var i=e.length;
        while(i--)if(!e[i](t,n,r))return!1;
        return!0
        }:e[0]
    }
    function xt(e,t,n,r,i){
    var o,a=[],s=0,l=e.length,u=null!=t;
    for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));
    return a
    }
    function wt(e,t,n,r,i,o){
    return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){
        var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
        if(n&&n(m,y,s,l),r){
            u=xt(y,d),r(u,[],s,l),c=u.length;
            while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
                }
                if(o){
            if(i||e){
                if(i){
                    u=[],c=y.length;
                    while(c--)(p=y[c])&&u.push(m[c]=p);
                    i(null,y=[],u,l)
                    }
                    c=y.length;
                while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
                    }
                }else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
        })
}
function Tt(e){
    var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){
        return e===t
        },s,!0),p=vt(function(e){
        return F.call(t,e)>-1
        },s,!0),f=[function(e,n,r){
        return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
        }];
    for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];
        else{
        if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){
            for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({
                value:" "===e[l-2].type?"*":""
                })).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))
            }
            f.push(n)
        }
        return bt(f)
    }
    function Ct(e,t){
    var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){
        var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;
        for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){
            if(a&&h){
                g=0;
                while(m=e[g++])if(m(h,l,c)){
                    p.push(h);
                    break
                }
                w&&(T=k,i=++n)
                }
                r&&((h=!m&&h)&&v--,s&&x.push(h))
            }
            if(v+=b,r&&b!==v){
            g=0;
            while(m=t[g++])m(x,y,l,c);
            if(s){
                if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));
                y=xt(y)
                }
                M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
            }
            return w&&(T=k,u=C),x
        };
        
    return r?lt(s):s
    }
    l=at.compile=function(e,t){
    var n,r=[],i=[],o=E[e+" "];
    if(!o){
        t||(t=mt(e)),n=t.length;
        while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);
        o=E(e,Ct(i,r))
        }
        return o
    };
    
function Nt(e,t,n){
    var r=0,i=t.length;
    for(;i>r;r++)at(e,t[r],n);
    return n
    }
    function kt(e,t,n,i){
    var a,s,u,c,p,f=mt(e);
    if(!i&&1===f.length){
        if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){
            if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;
            e=e.slice(s.shift().value.length)
            }
            a=Q.needsContext.test(e)?0:s.length;
        while(a--){
            if(u=s[a],o.relative[c=u.type])break;
            if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){
                if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;
                break
            }
        }
    }
return l(e,f)(i,t,!h,n,V.test(e)),n
}
r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){
    return 1&e.compareDocumentPosition(f.createElement("div"))
    }),ut(function(e){
    return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
    })||ct("type|href|height|width",function(e,n,r){
    return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)
    }),r.attributes&&ut(function(e){
    return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
    })||ct("value",function(e,n,r){
    return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue
    }),ut(function(e){
    return null==e.getAttribute("disabled")
    })||ct(B,function(e,n,r){
    var i;
    return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null
    }),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);
var O={};

function F(e){
    var t=O[e]={};
    
    return x.each(e.match(T)||[],function(e,n){
        t[n]=!0
        }),t
    }
    x.Callbacks=function(e){
    e="string"==typeof e?O[e]||F(e):x.extend({},e);
    var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){
        for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){
            r=!1;
            break
        }
        n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
        },p={
        add:function(){
            if(l){
                var t=l.length;
                (function i(t){
                    x.each(t,function(t,n){
                        var r=x.type(n);
                        "function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
                        })
                    })(arguments),n?o=l.length:r&&(s=t,c(r))
                }
                return this
            },
        remove:function(){
            return l&&x.each(arguments,function(e,t){
                var r;
                while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
                    }),this
            },
        has:function(e){
            return e?x.inArray(e,l)>-1:!(!l||!l.length)
            },
        empty:function(){
            return l=[],o=0,this
            },
        disable:function(){
            return l=u=r=t,this
            },
        disabled:function(){
            return!l
            },
        lock:function(){
            return u=t,r||p.disable(),this
            },
        locked:function(){
            return!u
            },
        fireWith:function(e,t){
            return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this
            },
        fire:function(){
            return p.fireWith(this,arguments),this
            },
        fired:function(){
            return!!i
            }
        };
    
return p
},x.extend({
    Deferred:function(e){
        var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={
            state:function(){
                return n
                },
            always:function(){
                return i.done(arguments).fail(arguments),this
                },
            then:function(){
                var e=arguments;
                return x.Deferred(function(n){
                    x.each(t,function(t,o){
                        var a=o[0],s=x.isFunction(e[t])&&e[t];
                        i[o[1]](function(){
                            var e=s&&s.apply(this,arguments);
                            e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
                            })
                        }),e=null
                    }).promise()
                },
            promise:function(e){
                return null!=e?x.extend(e,r):r
                }
            },i={};
    
    return r.pipe=r.then,x.each(t,function(e,o){
        var a=o[2],s=o[3];
        r[o[1]]=a.add,s&&a.add(function(){
            n=s
            },t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){
            return i[o[0]+"With"](this===i?r:this,arguments),this
            },i[o[0]+"With"]=a.fireWith
        }),r.promise(i),e&&e.call(i,i),i
    },
when:function(e){
    var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){
        return function(r){
            t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
            }
        },s,l,u;
if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;
    return i||o.resolveWith(u,n),o.promise()
    }
}),x.support=function(t){
    var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
    if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;
    s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
    try{
        delete d.test
        }catch(h){
        t.deleteExpando=!1
        }
        o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){
        t.noCloneEvent=!1
        }),d.cloneNode(!0).click());
    for(f in{
        submit:!0,
        change:!0,
        focusin:!0
        })d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
    for(f in x(t))break;return t.ownLast="0"!==f,x(function(){
        var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
        l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{
            zoom:1
        }:{},function(){
            t.boxSizing=4===d.offsetWidth
            }),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{
            width:"4px"
        }).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
        }),n=s=l=u=r=o=null,t
    }({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){
    if(x.acceptData(e)){
        var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
        if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{
            toJSON:x.noop
            }),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
            }
        }
function W(e,t,n){
    if(x.acceptData(e)){
        var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
        if(a[s]){
            if(t&&(r=n?a[s]:a[s].data)){
                x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
                while(i--)delete r[t[i]];
                if(n?!I(r):!x.isEmptyObject(r))return
            }(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
            }
        }
}
x.extend({
    cache:{},
    noData:{
        applet:!0,
        embed:!0,
        object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData:function(e){
        return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
        },
    data:function(e,t,n){
        return R(e,t,n)
        },
    removeData:function(e,t){
        return W(e,t)
        },
    _data:function(e,t,n){
        return R(e,t,n,!0)
        },
    _removeData:function(e,t){
        return W(e,t,!0)
        },
    acceptData:function(e){
        if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;
        var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
        return!t||t!==!0&&e.getAttribute("classid")===t
        }
    }),x.fn.extend({
    data:function(e,n){
        var r,i,o=null,a=0,s=this[0];
        if(e===t){
            if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){
                for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));
                x._data(s,"parsedAttrs",!0)
                }
                return o
            }
            return"object"==typeof e?this.each(function(){
            x.data(this,e)
            }):arguments.length>1?this.each(function(){
            x.data(this,e,n)
            }):s?$(s,e,x.data(s,e)):null
        },
    removeData:function(e){
        return this.each(function(){
            x.removeData(this,e)
            })
        }
    });
function $(e,n,r){
    if(r===t&&1===e.nodeType){
        var i="data-"+n.replace(P,"-$1").toLowerCase();
        if(r=e.getAttribute(i),"string"==typeof r){
            try{
                r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
                }catch(o){}
            x.data(e,n,r)
            }else r=t
            }
            return r
    }
    function I(e){
    var t;
    for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0
    }
    x.extend({
    queue:function(e,n,r){
        var i;
        return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
        },
    dequeue:function(e,t){
        t=t||"fx";
        var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){
            x.dequeue(e,t)
            };
            
        "inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
        },
    _queueHooks:function(e,t){
        var n=t+"queueHooks";
        return x._data(e,n)||x._data(e,n,{
            empty:x.Callbacks("once memory").add(function(){
                x._removeData(e,t+"queue"),x._removeData(e,n)
                })
            })
        }
    }),x.fn.extend({
    queue:function(e,n){
        var r=2;
        return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){
            var t=x.queue(this,e,n);
            x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
            })
        },
    dequeue:function(e){
        return this.each(function(){
            x.dequeue(this,e)
            })
        },
    delay:function(e,t){
        return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){
            var r=setTimeout(t,e);
            n.stop=function(){
                clearTimeout(r)
                }
            })
    },
clearQueue:function(e){
    return this.queue(e||"fx",[])
    },
promise:function(e,n){
    var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){
        --i||o.resolveWith(a,[a])
        };
        
    "string"!=typeof e&&(n=e,e=t),e=e||"fx";
    while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));
    return l(),o.promise(n)
    }
});
var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({
    attr:function(e,t){
        return x.access(this,x.attr,e,t,arguments.length>1)
        },
    removeAttr:function(e){
        return this.each(function(){
            x.removeAttr(this,e)
            })
        },
    prop:function(e,t){
        return x.access(this,x.prop,e,t,arguments.length>1)
        },
    removeProp:function(e){
        return e=x.propFix[e]||e,this.each(function(){
            try{
                this[e]=t,delete this[e]
            }catch(n){}
        })
    },
addClass:function(e){
    var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
    if(x.isFunction(e))return this.each(function(t){
        x(this).addClass(e.call(this,t,this.className))
        });
    if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){
        o=0;
        while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");
        n.className=x.trim(r)
        }
        return this
    },
removeClass:function(e){
    var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
    if(x.isFunction(e))return this.each(function(t){
        x(this).removeClass(e.call(this,t,this.className))
        });
    if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){
        o=0;
        while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");
        n.className=e?x.trim(r):""
        }
        return this
    },
toggleClass:function(e,t){
    var n=typeof e;
    return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){
        x(this).toggleClass(e.call(this,n,this.className,t),t)
        }):this.each(function(){
        if("string"===n){
            var t,r=0,o=x(this),a=e.match(T)||[];
            while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)
                }else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
            })
    },
hasClass:function(e){
    var t=" "+e+" ",n=0,r=this.length;
    for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1
    },
val:function(e){
    var n,r,i,o=this[0];
    {
        if(arguments.length)return i=x.isFunction(e),this.each(function(n){
            var o;
            1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){
                return null==e?"":e+""
                })),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))
            });
        if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
            }
        }
}),x.extend({
    valHooks:{
        option:{
            get:function(e){
                var t=x.find.attr(e,"value");
                return null!=t?t:e.text
                }
            },
    select:{
        get:function(e){
            var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
            for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){
                if(t=x(n).val(),o)return t;
                a.push(t)
                }
                return a
            },
        set:function(e,t){
            var n,r,i=e.options,o=x.makeArray(t),a=i.length;
            while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);
            return n||(e.selectedIndex=-1),o
            }
        }
},
attr:function(e,n,r){
    var o,a,s=e.nodeType;
    if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
        },
removeAttr:function(e,t){
    var n,r,i=0,o=t&&t.match(T);
    if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
        },
attrHooks:{
    type:{
        set:function(e,t){
            if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){
                var n=e.value;
                return e.setAttribute("type",t),n&&(e.value=n),t
                }
            }
    }
},
propFix:{
    "for":"htmlFor",
    "class":"className"
},
prop:function(e,n,r){
    var i,o,a,s=e.nodeType;
    if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]
        },
propHooks:{
    tabIndex:{
        get:function(e){
            var t=x.find.attr(e,"tabindex");
            return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
            }
        }
}
}),X={
    set:function(e,t,n){
        return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
        }
    },x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){
    var r=x.expr.attrHandle[n]||x.find.attr;
    x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){
        var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
        return x.expr.attrHandle[n]=o,a
        }:function(e,n,r){
        return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
        }
    }),K&&Q||(x.attrHooks.value={
    set:function(e,n,r){
        return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
        }
    }),Q||(z={
    set:function(e,n,r){
        var i=e.getAttributeNode(r);
        return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
        }
    },x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){
    var i;
    return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
    },x.valHooks.button={
    get:function(e,n){
        var r=e.getAttributeNode(n);
        return r&&r.specified?r.value:t
        },
    set:z.set
    },x.attrHooks.contenteditable={
    set:function(e,t,n){
        z.set(e,""===t?!1:t,n)
        }
    },x.each(["width","height"],function(e,n){
    x.attrHooks[n]={
        set:function(e,r){
            return""===r?(e.setAttribute(n,"auto"),r):t
            }
        }
})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){
    x.propHooks[t]={
        get:function(e){
            return e.getAttribute(t,4)
            }
        }
}),x.support.style||(x.attrHooks.style={
    get:function(e){
        return e.style.cssText||t
        },
    set:function(e,t){
        return e.style.cssText=t+""
        }
    }),x.support.optSelected||(x.propHooks.selected={
    get:function(e){
        var t=e.parentNode;
        return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
        }
    }),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
    x.propFix[this.toLowerCase()]=this
    }),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){
    x.valHooks[this]={
        set:function(e,n){
            return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
            }
        },x.support.checkOn||(x.valHooks[this].get=function(e){
    return null===e.getAttribute("value")?"on":e.value
    })
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){
    return!0
    }
    function ot(){
    return!1
    }
    function at(){
    try{
        return a.activeElement
        }catch(e){}
}
x.event={
    global:{},
    add:function(e,n,r,o,a){
        var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
        if(v){
            r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){
                return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
                },f.elem=e),n=(n||"").match(T)||[""],u=n.length;
            while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({
                type:g,
                origType:y,
                data:o,
                handler:r,
                guid:r.guid,
                selector:a,
                needsContext:a&&x.expr.match.needsContext.test(a),
                namespace:m.join(".")
                },c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);
            e=null
            }
        },
remove:function(e,t,n,r,i){
    var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
    if(m&&(c=m.events)){
        t=(t||"").match(T)||[""],u=t.length;
        while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){
            p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
            while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));
            l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
            }else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
        }
    },
trigger:function(n,r,i,o){
    var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
    if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){
        if(!o&&!p.noBubble&&!x.isWindow(i)){
            for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;
            f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
            }
            d=0;
        while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();
        if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){
            f=i[l],f&&(i[l]=null),x.event.triggered=g;
            try{
                i[g]()
                }catch(y){}
            x.event.triggered=t,f&&(i[l]=f)
            }
            return n.result
        }
    },
dispatch:function(e){
    e=x.event.fix(e);
    var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
    
    if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){
        s=x.event.handlers.call(this,e,u),n=0;
        while((o=s[n++])&&!e.isPropagationStopped()){
            e.currentTarget=o.elem,a=0;
            while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
                }
                return c.postDispatch&&c.postDispatch.call(this,e),e.result
        }
    },
handlers:function(e,n){
    var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
    if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){
        for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);
        o.length&&s.push({
            elem:u,
            handlers:o
        })
        }
        return n.length>l&&s.push({
        elem:this,
        handlers:n.slice(l)
        }),s
    },
fix:function(e){
    if(e[x.expando])return e;
    var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
    s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
    while(t--)n=r[t],e[n]=o[n];
    return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
    },
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},
keyHooks:{
    props:"char charCode key keyCode".split(" "),
    filter:function(e,t){
        return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
        }
    },
mouseHooks:{
    props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter:function(e,n){
        var r,i,o,s=n.button,l=n.fromElement;
        return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
        }
    },
special:{
    load:{
        noBubble:!0
        },
    focus:{
        trigger:function(){
            if(this!==at()&&this.focus)try{
                return this.focus(),!1
                }catch(e){}
            },
    delegateType:"focusin"
},
blur:{
    trigger:function(){
        return this===at()&&this.blur?(this.blur(),!1):t
        },
    delegateType:"focusout"
},
click:{
    trigger:function(){
        return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
        },
    _default:function(e){
        return x.nodeName(e.target,"a")
        }
    },
beforeunload:{
    postDispatch:function(e){
        e.result!==t&&(e.originalEvent.returnValue=e.result)
        }
    }
},
simulate:function(e,t,n,r){
    var i=x.extend(new x.Event,n,{
        type:e,
        isSimulated:!0,
        originalEvent:{}
    });
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}
},x.removeEvent=a.removeEventListener?function(e,t,n){
    e.removeEventListener&&e.removeEventListener(t,n,!1)
    }:function(e,t,n){
    var r="on"+t;
    e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
    },x.Event=function(e,n){
    return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
    },x.Event.prototype={
    isDefaultPrevented:ot,
    isPropagationStopped:ot,
    isImmediatePropagationStopped:ot,
    preventDefault:function(){
        var e=this.originalEvent;
        this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
        },
    stopPropagation:function(){
        var e=this.originalEvent;
        this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
        },
    stopImmediatePropagation:function(){
        this.isImmediatePropagationStopped=it,this.stopPropagation()
        }
    },x.each({
    mouseenter:"mouseover",
    mouseleave:"mouseout"
},function(e,t){
    x.event.special[e]={
        delegateType:t,
        bindType:t,
        handle:function(e){
            var n,r=this,i=e.relatedTarget,o=e.handleObj;
            return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
            }
        }
}),x.support.submitBubbles||(x.event.special.submit={
    setup:function(){
        return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){
            var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
            r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){
                e._submit_bubble=!0
                }),x._data(r,"submitBubbles",!0))
            }),t)
        },
    postDispatch:function(e){
        e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
        },
    teardown:function(){
        return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
        }
    }),x.support.changeBubbles||(x.event.special.change={
    setup:function(){
        return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){
            "checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
            }),x.event.add(this,"click._change",function(e){
            this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
            })),!1):(x.event.add(this,"beforeactivate._change",function(e){
            var t=e.target;
            Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){
                !this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
                }),x._data(t,"changeBubbles",!0))
            }),t)
        },
    handle:function(e){
        var n=e.target;
        return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
        },
    teardown:function(){
        return x.event.remove(this,"._change"),!Z.test(this.nodeName)
        }
    }),x.support.focusinBubbles||x.each({
    focus:"focusin",
    blur:"focusout"
},function(e,t){
    var n=0,r=function(e){
        x.event.simulate(t,e.target,x.event.fix(e),!0)
        };
        
    x.event.special[t]={
        setup:function(){
            0===n++&&a.addEventListener(e,r,!0)
            },
        teardown:function(){
            0===--n&&a.removeEventListener(e,r,!0)
            }
        }
}),x.fn.extend({
    on:function(e,n,r,i,o){
        var a,s;
        if("object"==typeof e){
            "string"!=typeof n&&(r=r||n,n=t);
            for(a in e)this.on(a,n,r,e[a],o);return this
            }
            if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;
        else if(!i)return this;
        return 1===o&&(s=i,i=function(e){
            return x().off(e),s.apply(this,arguments)
            },i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){
            x.event.add(this,e,i,r,n)
            })
        },
    one:function(e,t,n,r){
        return this.on(e,t,n,r,1)
        },
    off:function(e,n,r){
        var i,o;
        if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
        if("object"==typeof e){
            for(o in e)this.off(o,n,e[o]);return this
            }
            return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){
            x.event.remove(this,e,r,n)
            })
        },
    trigger:function(e,t){
        return this.each(function(){
            x.event.trigger(e,t,this)
            })
        },
    triggerHandler:function(e,n){
        var r=this[0];
        return r?x.event.trigger(e,n,r,!0):t
        }
    });
var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={
    children:!0,
    contents:!0,
    next:!0,
    prev:!0
    };
    
x.fn.extend({
    find:function(e){
        var t,n=[],r=this,i=r.length;
        if("string"!=typeof e)return this.pushStack(x(e).filter(function(){
            for(t=0;i>t;t++)if(x.contains(r[t],this))return!0
                }));
        for(t=0;i>t;t++)x.find(e,r[t],n);
        return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
        },
    has:function(e){
        var t,n=x(e,this),r=n.length;
        return this.filter(function(){
            for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0
                })
        },
    not:function(e){
        return this.pushStack(ft(this,e||[],!0))
        },
    filter:function(e){
        return this.pushStack(ft(this,e||[],!1))
        },
    is:function(e){
        return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
        },
    closest:function(e,t){
        var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
        for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){
            n=o.push(n);
            break
        }
        return this.pushStack(o.length>1?x.unique(o):o)
        },
    index:function(e){
        return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
        },
    add:function(e,t){
        var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
        return this.pushStack(x.unique(r))
        },
    addBack:function(e){
        return this.add(null==e?this.prevObject:this.prevObject.filter(e))
        }
    });
function pt(e,t){
    do e=e[t];while(e&&1!==e.nodeType);
    return e
    }
    x.each({
    parent:function(e){
        var t=e.parentNode;
        return t&&11!==t.nodeType?t:null
        },
    parents:function(e){
        return x.dir(e,"parentNode")
        },
    parentsUntil:function(e,t,n){
        return x.dir(e,"parentNode",n)
        },
    next:function(e){
        return pt(e,"nextSibling")
        },
    prev:function(e){
        return pt(e,"previousSibling")
        },
    nextAll:function(e){
        return x.dir(e,"nextSibling")
        },
    prevAll:function(e){
        return x.dir(e,"previousSibling")
        },
    nextUntil:function(e,t,n){
        return x.dir(e,"nextSibling",n)
        },
    prevUntil:function(e,t,n){
        return x.dir(e,"previousSibling",n)
        },
    siblings:function(e){
        return x.sibling((e.parentNode||{}).firstChild,e)
        },
    children:function(e){
        return x.sibling(e.firstChild)
        },
    contents:function(e){
        return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
        }
    },function(e,t){
    x.fn[e]=function(n,r){
        var i=x.map(this,t,n);
        return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
        }
    }),x.extend({
    filter:function(e,t,n){
        var r=t[0];
        return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){
            return 1===e.nodeType
            }))
        },
    dir:function(e,n,r){
        var i=[],o=e[n];
        while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];
        return i
        },
    sibling:function(e,t){
        var n=[];
        for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);
        return n
        }
    });
function ft(e,t,n){
    if(x.isFunction(t))return x.grep(e,function(e,r){
        return!!t.call(e,r,e)!==n
        });
    if(t.nodeType)return x.grep(e,function(e){
        return e===t!==n
        });
    if("string"==typeof t){
        if(st.test(t))return x.filter(t,e,n);
        t=x.filter(t,e)
        }
        return x.grep(e,function(e){
        return x.inArray(e,t)>=0!==n
        })
    }
    function dt(e){
    var t=ht.split("|"),n=e.createDocumentFragment();
    if(n.createElement)while(t.length)n.createElement(t.pop());
    return n
    }
    var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={
    option:[1,"<select multiple='multiple'>","</select>"],
    legend:[1,"<fieldset>","</fieldset>"],
    area:[1,"<map>","</map>"],
    param:[1,"<object>","</object>"],
    thead:[1,"<table>","</table>"],
    tr:[2,"<table><tbody>","</tbody></table>"],
    col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
    td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
    _default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]
    },jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({
    text:function(e){
        return x.access(this,function(e){
            return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
            },null,e,arguments.length)
        },
    append:function(){
        return this.domManip(arguments,function(e){
            if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
                var t=Lt(this,e);
                t.appendChild(e)
                }
            })
    },
prepend:function(){
    return this.domManip(arguments,function(e){
        if(1===this.nodeType||11===this.nodeType||9===this.nodeType){
            var t=Lt(this,e);
            t.insertBefore(e,t.firstChild)
            }
        })
},
before:function(){
    return this.domManip(arguments,function(e){
        this.parentNode&&this.parentNode.insertBefore(e,this)
        })
    },
after:function(){
    return this.domManip(arguments,function(e){
        this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
        })
    },
remove:function(e,t){
    var n,r=e?x.filter(e,this):this,i=0;
    for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));
    return this
    },
empty:function(){
    var e,t=0;
    for(;null!=(e=this[t]);t++){
        1===e.nodeType&&x.cleanData(Ft(e,!1));
        while(e.firstChild)e.removeChild(e.firstChild);
        e.options&&x.nodeName(e,"select")&&(e.options.length=0)
        }
        return this
    },
clone:function(e,t){
    return e=null==e?!1:e,t=null==t?e:t,this.map(function(){
        return x.clone(this,e,t)
        })
    },
html:function(e){
    return x.access(this,function(e){
        var n=this[0]||{},r=0,i=this.length;
        if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;
        if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){
            e=e.replace(vt,"<$1></$2>");
            try{
                for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);
                n=0
                }catch(o){}
        }
        n&&this.empty().append(e)
        },null,e,arguments.length)
},
replaceWith:function(){
    var e=x.map(this,function(e){
        return[e.nextSibling,e.parentNode]
        }),t=0;
    return this.domManip(arguments,function(n){
        var r=e[t++],i=e[t++];
        i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
        },!0),t?this:this.remove()
    },
detach:function(e){
    return this.remove(e,!0)
    },
domManip:function(e,t,n){
    e=d.apply([],e);
    var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
    if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){
        var i=p.eq(r);
        g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
        });
    if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){
        for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);
        if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));
        l=r=null
        }
        return this
    }
});
function Lt(e,t){
    return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
    }
    function Ht(e){
    return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
    }
    function qt(e){
    var t=Et.exec(e.type);
    return t?e.type=t[1]:e.removeAttribute("type"),e
    }
    function _t(e,t){
    var n,r=0;
    for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
        }
        function Mt(e,t){
    if(1===t.nodeType&&x.hasData(e)){
        var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
        if(s){
            delete a.handle,a.events={};
            
            for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])
                }
                a.data&&(a.data=x.extend({},a.data))
        }
    }
function Ot(e,t){
    var n,r,i;
    if(1===t.nodeType){
        if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){
            i=x._data(t);
            for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)
            }
            "script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
        }
    }
x.each({
    appendTo:"append",
    prependTo:"prepend",
    insertBefore:"before",
    insertAfter:"after",
    replaceAll:"replaceWith"
},function(e,t){
    x.fn[e]=function(e){
        var n,r=0,i=[],o=x(e),a=o.length-1;
        for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());
        return this.pushStack(i)
        }
    });
function Ft(e,n){
    var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
    if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));
    return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
    }
    function Bt(e){
    Ct.test(e.type)&&(e.defaultChecked=e.checked)
    }
    x.extend({
    clone:function(e,t,n){
        var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
        if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);
        if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);
        return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
        },
    buildFragment:function(e,t,n,r){
        var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
        for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);
            else if(wt.test(o)){
            s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
            while(i--)s=s.lastChild;
            if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){
                o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
                while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
                    }
                    x.merge(d,s.childNodes),s.textContent="";
            while(s.firstChild)s.removeChild(s.firstChild);
            s=f.lastChild
            }else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
        while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){
            i=0;
            while(o=s[i++])kt.test(o.type||"")&&n.push(o)
                }
                return s=null,f
        },
    cleanData:function(e,t){
        var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
        for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){
            if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
            }
        },
_evalUrl:function(e){
    return x.ajax({
        url:e,
        type:"GET",
        dataType:"script",
        async:!1,
        global:!1,
        "throws":!0
        })
    }
}),x.fn.extend({
    wrapAll:function(e){
        if(x.isFunction(e))return this.each(function(t){
            x(this).wrapAll(e.call(this,t))
            });
        if(this[0]){
            var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){
                var e=this;
                while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;
                return e
                }).append(this)
            }
            return this
        },
    wrapInner:function(e){
        return x.isFunction(e)?this.each(function(t){
            x(this).wrapInner(e.call(this,t))
            }):this.each(function(){
            var t=x(this),n=t.contents();
            n.length?n.wrapAll(e):t.append(e)
            })
        },
    wrap:function(e){
        var t=x.isFunction(e);
        return this.each(function(n){
            x(this).wrapAll(t?e.call(this,n):e)
            })
        },
    unwrap:function(){
        return this.parent().each(function(){
            x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={
    BODY:"block"
},Qt={
    position:"absolute",
    visibility:"hidden",
    display:"block"
},Kt={
    letterSpacing:0,
    fontWeight:400
},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){
    if(t in e)return t;
    var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
    while(i--)if(t=en[i]+n,t in e)return t;
    return r
    }
    function nn(e,t){
    return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
    }
    function rn(e,t){
    var n,r,i,o=[],a=0,s=e.length;
    for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));
    for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));
    return e
    }
    x.fn.extend({
    css:function(e,n){
        return x.access(this,function(e,n,r){
            var i,o,a={},s=0;
            if(x.isArray(n)){
                for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);
                return a
                }
                return r!==t?x.style(e,n,r):x.css(e,n)
            },e,n,arguments.length>1)
        },
    show:function(){
        return rn(this,!0)
        },
    hide:function(){
        return rn(this)
        },
    toggle:function(e){
        return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){
            nn(this)?x(this).show():x(this).hide()
            })
        }
    }),x.extend({
    cssHooks:{
        opacity:{
            get:function(e,t){
                if(t){
                    var n=Wt(e,"opacity");
                    return""===n?"1":n
                    }
                }
        }
},
cssNumber:{
    columnCount:!0,
    fillOpacity:!0,
    fontWeight:!0,
    lineHeight:!0,
    opacity:!0,
    order:!0,
    orphans:!0,
    widows:!0,
    zIndex:!0,
    zoom:!0
    },
cssProps:{
    "float":x.support.cssFloat?"cssFloat":"styleFloat"
    },
style:function(e,n,r,i){
    if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
        var o,a,s,l=x.camelCase(n),u=e.style;
        if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];
        if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{
            u[n]=r
            }catch(c){}
        }
    },
css:function(e,n,r,i){
    var o,a,s,l=x.camelCase(n);
    return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
    }
}),e.getComputedStyle?(Rt=function(t){
    return e.getComputedStyle(t,null)
    },Wt=function(e,n,r){
    var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
    return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
    }):a.documentElement.currentStyle&&(Rt=function(e){
    return e.currentStyle
    },Wt=function(e,n,r){
    var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
    return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
    });
function on(e,t,n){
    var r=Vt.exec(t);
    return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
    }
    function an(e,t,n,r,i){
    var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
    for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));
    return a
    }
    function sn(e,t,n){
    var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
    if(0>=i||null==i){
        if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;
        r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
        }
        return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
    }
    function ln(e){
    var t=a,n=Gt[e];
    return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
    }
    function un(e,t){
    var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
    return n.remove(),r
    }
    x.each(["height","width"],function(e,n){
    x.cssHooks[n]={
        get:function(e,r,i){
            return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){
                return sn(e,n,i)
                }):sn(e,n,i):t
            },
        set:function(e,t,r){
            var i=r&&Rt(e);
            return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
            }
        }
}),x.support.opacity||(x.cssHooks.opacity={
    get:function(e,t){
        return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
        },
    set:function(e,t){
        var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
        n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
        }
    }),x(function(){
    x.support.reliableMarginRight||(x.cssHooks.marginRight={
        get:function(e,n){
            return n?x.swap(e,{
                display:"inline-block"
            },Wt,[e,"marginRight"]):t
            }
        }),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){
    x.cssHooks[n]={
        get:function(e,r){
            return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
            }
        }
})
}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){
    return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
    },x.expr.filters.visible=function(e){
    return!x.expr.filters.hidden(e)
    }),x.each({
    margin:"",
    padding:"",
    border:"Width"
},function(e,t){
    x.cssHooks[e+t]={
        expand:function(n){
            var r=0,i={},o="string"==typeof n?n.split(" "):[n];
            for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];
            return i
            }
        },Ut.test(e)||(x.cssHooks[e+t].set=on)
    });
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({
    serialize:function(){
        return x.param(this.serializeArray())
        },
    serializeArray:function(){
        return this.map(function(){
            var e=x.prop(this,"elements");
            return e?x.makeArray(e):this
            }).filter(function(){
            var e=this.type;
            return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
            }).map(function(e,t){
            var n=x(this).val();
            return null==n?null:x.isArray(n)?x.map(n,function(e){
                return{
                    name:t.name,
                    value:e.replace(fn,"\r\n")
                    }
                }):{
            name:t.name,
            value:n.replace(fn,"\r\n")
            }
        }).get()
    }
}),x.param=function(e,n){
    var r,i=[],o=function(e,t){
        t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
        };
        
    if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){
        o(this.name,this.value)
        });else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")
    };
    
function gn(e,t,n,r){
    var i;
    if(x.isArray(t))x.each(t,function(t,i){
        n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
        });
    else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)
        }
        x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
    x.fn[t]=function(e,n){
        return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
        }
    }),x.fn.extend({
    hover:function(e,t){
        return this.mouseenter(e).mouseleave(t||e)
        },
    bind:function(e,t,n){
        return this.on(e,null,t,n)
        },
    unbind:function(e,t){
        return this.off(e,null,t)
        },
    delegate:function(e,t,n,r){
        return this.on(t,e,n,r)
        },
    undelegate:function(e,t,n){
        return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
        }
    });
var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{
    yn=o.href
    }catch(Ln){
    yn=a.createElement("a"),yn.href="",yn=yn.href
    }
    mn=En.exec(yn.toLowerCase())||[];
function Hn(e){
    return function(t,n){
        "string"!=typeof t&&(n=t,t="*");
        var r,i=0,o=t.toLowerCase().match(T)||[];
        if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
            }
        }
function qn(e,n,r,i){
    var o={},a=e===jn;
    function s(l){
        var u;
        return o[l]=!0,x.each(e[l]||[],function(e,l){
            var c=l(n,r,i);
            return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
            }),u
        }
        return s(n.dataTypes[0])||!o["*"]&&s("*")
    }
    function _n(e,n){
    var r,i,o=x.ajaxSettings.flatOptions||{};
    
    for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e
    }
    x.fn.load=function(e,n,r){
    if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);
    var i,o,a,s=this,l=e.indexOf(" ");
    return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({
        url:e,
        type:a,
        dataType:"html",
        data:n
    }).done(function(e){
        o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
        }).complete(r&&function(e,t){
        s.each(r,o||[e.responseText,t,e])
        }),this
    },x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){
    x.fn[t]=function(e){
        return this.on(t,e)
        }
    }),x.extend({
    active:0,
    lastModified:{},
    etag:{},
    ajaxSettings:{
        url:yn,
        type:"GET",
        isLocal:Cn.test(mn[1]),
        global:!0,
        processData:!0,
        async:!0,
        contentType:"application/x-www-form-urlencoded; charset=UTF-8",
        accepts:{
            "*":Dn,
            text:"text/plain",
            html:"text/html",
            xml:"application/xml, text/xml",
            json:"application/json, text/javascript"
        },
        contents:{
            xml:/xml/,
            html:/html/,
            json:/json/
        },
        responseFields:{
            xml:"responseXML",
            text:"responseText",
            json:"responseJSON"
        },
        converters:{
            "* text":String,
            "text html":!0,
            "text json":x.parseJSON,
            "text xml":x.parseXML
            },
        flatOptions:{
            url:!0,
            context:!0
            }
        },
ajaxSetup:function(e,t){
    return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
    },
ajaxPrefilter:Hn(An),
    ajaxTransport:Hn(jn),
    ajax:function(e,n){
    "object"==typeof e&&(n=e,e=t),n=n||{};
    
    var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={
        readyState:0,
        getResponseHeader:function(e){
            var t;
            if(2===b){
                if(!c){
                    c={};
                    while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]
                        }
                        t=c[e.toLowerCase()]
                }
                return null==t?null:t
            },
        getAllResponseHeaders:function(){
            return 2===b?a:null
            },
        setRequestHeader:function(e,t){
            var n=e.toLowerCase();
            return b||(e=v[n]=v[n]||e,y[e]=t),this
            },
        overrideMimeType:function(e){
            return b||(p.mimeType=e),this
            },
        statusCode:function(e){
            var t;
            if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);
            return this
            },
        abort:function(e){
            var t=e||w;
            return u&&u.abort(t),k(0,t),this
            }
        };
    
if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;
    l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
    for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();
    w="abort";
    for(i in{
    success:1,
    error:1,
    complete:1
})C[i](p[i]);if(u=qn(jn,p,n,C)){
    C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){
        C.abort("timeout")
        },p.timeout));
    try{
        b=1,u.send(y,k)
        }catch(N){
        if(!(2>b))throw N;
        k(-1,N)
        }
    }else k(-1,"No Transport");
function k(e,n,r,i){
    var c,y,v,w,T,N=n;
    2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
    }
    return C
},
getJSON:function(e,t,n){
    return x.get(e,t,n,"json")
    },
getScript:function(e,n){
    return x.get(e,t,n,"script")
    }
}),x.each(["get","post"],function(e,n){
    x[n]=function(e,r,i,o){
        return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({
            url:e,
            type:n,
            dataType:o,
            data:r,
            success:i
        })
        }
    });
function Mn(e,n,r){
    var i,o,a,s,l=e.contents,u=e.dataTypes;
    while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));
    if(o)for(s in l)if(l[s]&&l[s].test(o)){
        u.unshift(s);
        break
    }
    if(u[0]in r)a=u[0];
    else{
        for(s in r){
            if(!u[0]||e.converters[s+" "+u[0]]){
                a=s;
                break
            }
            i||(i=s)
            }
            a=a||i
        }
        return a?(a!==u[0]&&u.unshift(a),r[a]):t
    }
    function On(e,t,n,r){
    var i,o,a,s,l,u={},c=e.dataTypes.slice();
    if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();
    while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;
        else if("*"!==l&&l!==o){
        if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){
            a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
            break
        }
        if(a!==!0)if(a&&e["throws"])t=a(t);else try{
            t=a(t)
            }catch(p){
            return{
                state:"parsererror",
                error:a?p:"No conversion from "+l+" to "+o
                }
            }
        }
        return{
    state:"success",
    data:t
}
}
x.ajaxSetup({
    accepts:{
        script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents:{
        script:/(?:java|ecma)script/
    },
    converters:{
        "text script":function(e){
            return x.globalEval(e),e
            }
        }
}),x.ajaxPrefilter("script",function(e){
    e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
    }),x.ajaxTransport("script",function(e){
    if(e.crossDomain){
        var n,r=a.head||x("head")[0]||a.documentElement;
        return{
            send:function(t,i){
                n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){
                    (t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
                    },r.insertBefore(n,r.firstChild)
                },
            abort:function(){
                n&&n.onload(t,!0)
                }
            }
    }
});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({
    jsonp:"callback",
    jsonpCallback:function(){
        var e=Fn.pop()||x.expando+"_"+vn++;
        return this[e]=!0,e
        }
    }),x.ajaxPrefilter("json jsonp",function(n,r,i){
    var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
    return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){
        return s||x.error(o+" was not called"),s[0]
        },n.dataTypes[0]="json",a=e[o],e[o]=function(){
        s=arguments
        },i.always(function(){
        e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
        }),"script"):t
    });
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){
    var e;
    for(e in Pn)Pn[e](t,!0)
        };
        
function In(){
    try{
        return new e.XMLHttpRequest
        }catch(t){}
}
function zn(){
    try{
        return new e.ActiveXObject("Microsoft.XMLHTTP")
        }catch(t){}
}
x.ajaxSettings.xhr=e.ActiveXObject?function(){
    return!this.isLocal&&In()||zn()
    }:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){
    if(!n.crossDomain||x.support.cors){
        var r;
        return{
            send:function(i,o){
                var a,s,l=n.xhr();
                if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
                try{
                    for(s in i)l.setRequestHeader(s,i[s])
                        }catch(u){}
                l.send(n.hasContent&&n.data||null),r=function(e,i){
                    var s,u,c,p;
                    try{
                        if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();
                            else{
                            p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
                            try{
                                c=l.statusText
                                }catch(f){
                                c=""
                                }
                                s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
                            }
                        }catch(d){
                    i||o(-1,d)
                    }
                    p&&o(s,c,p,u)
                },n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
            },
        abort:function(){
            r&&r(t,!0)
            }
        }
}
});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={
    "*":[function(e,t){
        var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
        if(a&&a[3]!==o){
            o=o||a[3],i=i||[],a=+r||1;
            do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)
        }
        return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
        }]
    };
    
function Kn(){
    return setTimeout(function(){
        Xn=t
        }),Xn=x.now()
    }
    function Zn(e,t,n){
    var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
    for(;a>o;o++)if(r=i[o].call(n,t,e))return r
        }
        function er(e,t,n){
    var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){
        delete l.elem
        }),l=function(){
        if(i)return!1;
        var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
        for(;l>a;a++)u.tweens[a].run(o);
        return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
        },u=s.promise({
        elem:e,
        props:x.extend({},t),
        opts:x.extend(!0,{
            specialEasing:{}
        },n),
    originalProperties:t,
    originalOptions:n,
    startTime:Xn||Kn(),
        duration:n.duration,
        tweens:[],
        createTween:function(t,n){
        var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
        return u.tweens.push(r),r
        },
    stop:function(t){
        var n=0,r=t?u.tweens.length:0;
        if(i)return this;
        for(i=!0;r>n;n++)u.tweens[n].run(1);
        return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
        }
    }),c=u.props;
for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{
    elem:e,
    anim:u,
    queue:u.opts.queue
    })),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}
function tr(e,t){
    var n,r,i,o,a;
    for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){
        o=a.expand(o),delete e[r];
        for(n in o)n in e||(e[n]=o[n],t[n]=i)
            }else t[r]=i
        }
        x.Animation=x.extend(er,{
    tweener:function(e,t){
        x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
        var n,r=0,i=e.length;
        for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
            },
    prefilter:function(e,t){
        t?Gn.unshift(e):Gn.push(e)
        }
    });
function nr(e,t,n){
    var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
    n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){
        s.unqueued||l()
        }),s.unqueued++,u.always(function(){
        u.always(function(){
            s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
            })
        })),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){
        p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
        }));
    for(r in t)if(i=t[r],Vn.exec(i)){
        if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;
        c[r]=d&&d[r]||x.style(e,r)
        }
        if(!x.isEmptyObject(c)){
        d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){
            x(e).hide()
            }),u.done(function(){
            var t;
            x._removeData(e,"fxshow");
            for(t in c)x.style(e,t,c[t])
                });
        for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
            }
        }
function rr(e,t,n,r,i){
    return new rr.prototype.init(e,t,n,r,i)
    }
    x.Tween=rr,rr.prototype={
    constructor:rr,
    init:function(e,t,n,r,i,o){
        this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
        },
    cur:function(){
        var e=rr.propHooks[this.prop];
        return e&&e.get?e.get(this):rr.propHooks._default.get(this)
        },
    run:function(e){
        var t,n=rr.propHooks[this.prop];
        return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
        }
    },rr.prototype.init.prototype=rr.prototype,rr.propHooks={
    _default:{
        get:function(e){
            var t;
            return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
            },
        set:function(e){
            x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
            }
        }
},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={
    set:function(e){
        e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
        }
    },x.each(["toggle","show","hide"],function(e,t){
    var n=x.fn[t];
    x.fn[t]=function(e,r,i){
        return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
        }
    }),x.fn.extend({
    fadeTo:function(e,t,n,r){
        return this.filter(nn).css("opacity",0).show().end().animate({
            opacity:t
        },e,n,r)
        },
    animate:function(e,t,n,r){
        var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){
            var t=er(this,x.extend({},e),o);
            (i||x._data(this,"finish"))&&t.stop(!0)
            };
            
        return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
        },
    stop:function(e,n,r){
        var i=function(e){
            var t=e.stop;
            delete e.stop,t(r)
            };
            
        return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){
            var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
            if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));
            (t||!r)&&x.dequeue(this,e)
            })
        },
    finish:function(e){
        return e!==!1&&(e=e||"fx"),this.each(function(){
            var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
            for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
            for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
            delete n.finish
            })
        }
    });
function ir(e,t){
    var n,r={
        height:e
    },i=0;
    for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;
    return t&&(r.opacity=r.width=e),r
    }
    x.each({
    slideDown:ir("show"),
    slideUp:ir("hide"),
    slideToggle:ir("toggle"),
    fadeIn:{
        opacity:"show"
    },
    fadeOut:{
        opacity:"hide"
    },
    fadeToggle:{
        opacity:"toggle"
    }
},function(e,t){
    x.fn[e]=function(e,n,r){
        return this.animate(t,e,n,r)
        }
    }),x.speed=function(e,t,n){
    var r=e&&"object"==typeof e?x.extend({},e):{
        complete:n||!n&&t||x.isFunction(e)&&e,
        duration:e,
        easing:n&&t||t&&!x.isFunction(t)&&t
        };
        
    return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){
        x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
        },r
    },x.easing={
    linear:function(e){
        return e
        },
    swing:function(e){
        return.5-Math.cos(e*Math.PI)/2
        }
    },x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){
    var e,n=x.timers,r=0;
    for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);
    n.length||x.fx.stop(),Xn=t
    },x.fx.timer=function(e){
    e()&&x.timers.push(e)&&x.fx.start()
    },x.fx.interval=13,x.fx.start=function(){
    Un||(Un=setInterval(x.fx.tick,x.fx.interval))
    },x.fx.stop=function(){
    clearInterval(Un),Un=null
    },x.fx.speeds={
    slow:600,
    fast:200,
    _default:400
},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){
    return x.grep(x.timers,function(t){
        return e===t.elem
        }).length
    }),x.fn.offset=function(e){
    if(arguments.length)return e===t?this:this.each(function(t){
        x.offset.setOffset(this,e,t)
        });
    var n,r,o={
        top:0,
        left:0
    },a=this[0],s=a&&a.ownerDocument;
    if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{
        top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),
        left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)
        }):o
    },x.offset={
    setOffset:function(e,t,n){
        var r=x.css(e,"position");
        "static"===r&&(e.style.position="relative");
        var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
        l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)
        }
    },x.fn.extend({
    position:function(){
        if(this[0]){
            var e,t,n={
                top:0,
                left:0
            },r=this[0];
            return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{
                top:t.top-n.top-x.css(r,"marginTop",!0),
                left:t.left-n.left-x.css(r,"marginLeft",!0)
                }
            }
    },
offsetParent:function(){
    return this.map(function(){
        var e=this.offsetParent||s;
        while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;
        return e||s
        })
    }
}),x.each({
    scrollLeft:"pageXOffset",
    scrollTop:"pageYOffset"
},function(e,n){
    var r=/Y/.test(n);
    x.fn[e]=function(i){
        return x.access(this,function(e,i,o){
            var a=or(e);
            return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
            },e,i,arguments.length,null)
        }
    });
function or(e){
    return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
    }
    x.each({
    Height:"height",
    Width:"width"
},function(e,n){
    x.each({
        padding:"inner"+e,
        content:n,
        "":"outer"+e
        },function(r,i){
        x.fn[i]=function(i,o){
            var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
            return x.access(this,function(n,r,i){
                var o;
                return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
                },n,a?i:t,a,null)
            }
        })
}),x.fn.size=function(){
    return this.length
    },x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){
    return x
    }))
})(window);
+function($){
    "use strict";
    var dismiss='[data-dismiss="alert"]'
    var Alert=function(el){
        $(el).on('click',dismiss,this.close)
        }
    Alert.prototype.close=function(e){
        var $this=$(this)
        var selector=$this.attr('data-target')
        if(!selector){
            selector=$this.attr('href')
            selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')
            }
        var $parent=$(selector)
        if(e)e.preventDefault()
        if(!$parent.length){
            $parent=$this.hasClass('alert')?$this:$this.parent()
            }
        $parent.trigger(e=$.Event('close.bs.alert'))
        if(e.isDefaultPrevented())return
        $parent.removeClass('in')
        function removeElement(){
            $parent.trigger('closed.bs.alert').remove()
            }
        $.support.transition&&$parent.hasClass('fade')?$parent
        .one($.support.transition.end,removeElement)
        .emulateTransitionEnd(150):removeElement()
        }
    var old=$.fn.alert
    $.fn.alert=function(option){
        return this.each(function(){
            var $this=$(this)
            var data=$this.data('bs.alert')
            if(!data)$this.data('bs.alert',(data=new Alert(this)))
            if(typeof option=='string')data[option].call($this)
                })
        }
    $.fn.alert.Constructor=Alert
    $.fn.alert.noConflict=function(){
        $.fn.alert=old
        return this
        }
    $(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)
    }(window.jQuery);
+function($){
    "use strict";
    var Button=function(element,options){
        this.$element=$(element)
        this.options=$.extend({},Button.DEFAULTS,options)
        }
    Button.DEFAULTS={
        loadingText:'loading...'
    }
    Button.prototype.setState=function(state){
        var d='disabled'
        var $el=this.$element
        var val=$el.is('input')?'val':'html'
        var data=$el.data()
        state=state+'Text'
        if(!data.resetText)$el.data('resetText',$el[val]())
        $el[val](data[state]||this.options[state])
        setTimeout(function(){
            state=='loadingText'?$el.addClass(d).attr(d,d):$el.removeClass(d).removeAttr(d);
        },0)
        }
    Button.prototype.toggle=function(){
        var $parent=this.$element.closest('[data-toggle="buttons"]')
        if($parent.length){
            var $input=this.$element.find('input')
            .prop('checked',!this.$element.hasClass('active'))
            .trigger('change')
            if($input.prop('type')==='radio')$parent.find('.active').removeClass('active')
                }
        this.$element.toggleClass('active')
        }
    var old=$.fn.button
    $.fn.button=function(option){
        return this.each(function(){
            var $this=$(this)
            var data=$this.data('bs.button')
            var options=typeof option=='object'&&option
            if(!data)$this.data('bs.button',(data=new Button(this,options)))
            if(option=='toggle')data.toggle()
            else if(option)data.setState(option)
                })
        }
    $.fn.button.Constructor=Button
    $.fn.button.noConflict=function(){
        $.fn.button=old
        return this
        }
    $(document).on('click.bs.button.data-api','[data-toggle^=button]',function(e){
        var $btn=$(e.target)
        if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
        $btn.button('toggle')
        e.preventDefault()
        })
    }(window.jQuery);
+function($){
    "use strict";
    var Carousel=function(element,options){
        this.$element=$(element)
        this.$indicators=this.$element.find('.carousel-indicators')
        this.options=options
        this.paused=this.sliding=this.interval=this.$active=this.$items=null
        this.options.pause=='hover'&&this.$element
        .on('mouseenter',$.proxy(this.pause,this))
        .on('mouseleave',$.proxy(this.cycle,this))
        }
    Carousel.DEFAULTS={
        interval:5000,
        pause:'hover',
        wrap:true
    }
    Carousel.prototype.cycle=function(e){
        e||(this.paused=false)
        this.interval&&clearInterval(this.interval)
        this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
        return this
        }
    Carousel.prototype.getActiveIndex=function(){
        this.$active=this.$element.find('.item.active')
        this.$items=this.$active.parent().children()
        return this.$items.index(this.$active)
        }
    Carousel.prototype.to=function(pos){
        var that=this
        var activeIndex=this.getActiveIndex()
        if(pos>(this.$items.length-1)||pos<0)return
        if(this.sliding)return this.$element.one('slid',function(){
            that.to(pos)
            })
        if(activeIndex==pos)return this.pause().cycle()
        return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]))
        }
    Carousel.prototype.pause=function(e){
        e||(this.paused=true)
        if(this.$element.find('.next, .prev').length&&$.support.transition.end){
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
            }
        this.interval=clearInterval(this.interval)
        return this
        }
    Carousel.prototype.next=function(){
        if(this.sliding)return
        return this.slide('next')
        }
    Carousel.prototype.prev=function(){
        if(this.sliding)return
        return this.slide('prev')
        }
    Carousel.prototype.slide=function(type,next){
        var $active=this.$element.find('.item.active')
        var $next=next||$active[type]()
        var isCycling=this.interval
        var direction=type=='next'?'left':'right'
        var fallback=type=='next'?'first':'last'
        var that=this
        if(!$next.length){
            if(!this.options.wrap)return
            $next=this.$element.find('.item')[fallback]()
            }
        this.sliding=true
        isCycling&&this.pause()
        var e=$.Event('slide.bs.carousel',{
            relatedTarget:$next[0],
            direction:direction
        })
        if($next.hasClass('active'))return
        if(this.$indicators.length){
            this.$indicators.find('.active').removeClass('active')
            this.$element.one('slid',function(){
                var $nextIndicator=$(that.$indicators.children()[that.getActiveIndex()])
                $nextIndicator&&$nextIndicator.addClass('active')
                })
            }
        if($.support.transition&&this.$element.hasClass('slide')){
            this.$element.trigger(e)
            if(e.isDefaultPrevented())return
            $next.addClass(type)
            $next[0].offsetWidth
            $active.addClass(direction)
            $next.addClass(direction)
            $active
            .one($.support.transition.end,function(){
                $next.removeClass([type,direction].join(' ')).addClass('active')
                $active.removeClass(['active',direction].join(' '))
                that.sliding=false
                setTimeout(function(){
                    that.$element.trigger('slid')
                    },0)
                })
            .emulateTransitionEnd(600)
            }else{
            this.$element.trigger(e)
            if(e.isDefaultPrevented())return
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding=false
            this.$element.trigger('slid')
            }
        isCycling&&this.cycle()
        return this
        }
    var old=$.fn.carousel
    $.fn.carousel=function(option){
        return this.each(function(){
            var $this=$(this)
            var data=$this.data('bs.carousel')
            var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
            var action=typeof option=='string'?option:options.slide
            if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
            if(typeof option=='number')data.to(option)
            else if(action)data[action]()
            else if(options.interval)data.pause().cycle()
                })
        }
    $.fn.carousel.Constructor=Carousel
    $.fn.carousel.noConflict=function(){
        $.fn.carousel=old
        return this
        }
    $(document).on('click.bs.carousel.data-api','[data-slide], [data-slide-to]',function(e){
        var $this=$(this),href
        var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
        var options=$.extend({},$target.data(),$this.data())
        var slideIndex=$this.attr('data-slide-to')
        if(slideIndex)options.interval=false
        $target.carousel(options)
        if(slideIndex=$this.attr('data-slide-to')){
            $target.data('bs.carousel').to(slideIndex)
            }
        e.preventDefault()
        })
    $(window).on('load',function(){
        $('[data-ride="carousel"]').each(function(){
            var $carousel=$(this)
            $carousel.carousel($carousel.data())
            })
        })
    }(window.jQuery);
+function($){
    "use strict";
    var backdrop='.dropdown-backdrop'
    var toggle='[data-toggle=dropdown]'
    var Dropdown=function(element){
        var $el=$(element).on('click.bs.dropdown',this.toggle)
        }
    Dropdown.prototype.toggle=function(e){
        var $this=$(this)
        if($this.is('.disabled, :disabled'))return
        var $parent=getParent($this)
        var isActive=$parent.hasClass('open')
        clearMenus()
        if(!isActive){
            if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)
                }
            $parent.trigger(e=$.Event('show.bs.dropdown'))
            if(e.isDefaultPrevented())return
            $parent
            .toggleClass('open')
            .trigger('shown.bs.dropdown')
            $this.focus()
            }
        return false
        }
    Dropdown.prototype.keydown=function(e){
        if(!/(38|40|27)/.test(e.keyCode))return
        var $this=$(this)
        e.preventDefault()
        e.stopPropagation()
        if($this.is('.disabled, :disabled'))return
        var $parent=getParent($this)
        var isActive=$parent.hasClass('open')
        if(!isActive||(isActive&&e.keyCode==27)){
            if(e.which==27)$parent.find(toggle).focus()
            return $this.click()
            }
        var $items=$('[role=menu] li:not(.divider):visible a',$parent)
        if(!$items.length)return
        var index=$items.index($items.filter(':focus'))
        if(e.keyCode==38&&index>0)index--
        if(e.keyCode==40&&index<$items.length-1)index++
        if(!~index)index=0
        $items.eq(index).focus()
        }
    function clearMenus(){
        $(backdrop).remove()
        $(toggle).each(function(e){
            var $parent=getParent($(this))
            if(!$parent.hasClass('open'))return
            $parent.trigger(e=$.Event('hide.bs.dropdown'))
            if(e.isDefaultPrevented())return
            $parent.removeClass('open').trigger('hidden.bs.dropdown')
            })
        }
    function getParent($this){
        var selector=$this.attr('data-target')
        if(!selector){
            selector=$this.attr('href')
            selector=selector&&/#/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')
            }
        var $parent=selector&&$(selector)
        return $parent&&$parent.length?$parent:$this.parent()
        }
    var old=$.fn.dropdown
    $.fn.dropdown=function(option){
        return this.each(function(){
            var $this=$(this)
            var data=$this.data('dropdown')
            if(!data)$this.data('dropdown',(data=new Dropdown(this)))
            if(typeof option=='string')data[option].call($this)
                })
        }
    $.fn.dropdown.Constructor=Dropdown
    $.fn.dropdown.noConflict=function(){
        $.fn.dropdown=old
        return this
        }
    $(document)
    .on('click.bs.dropdown.data-api',clearMenus)
    .on('click.bs.dropdown.data-api','.dropdown form',function(e){
        e.stopPropagation()
        })
    .on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api',toggle+', [role=menu]',Dropdown.prototype.keydown)
    }(window.jQuery);
+function($){
    "use strict";
    var Modal=function(element,options){
        this.options=options
        this.$element=$(element)
        this.$backdrop=this.isShown=null
        if(this.options.remote)this.$element.load(this.options.remote)
            }
    Modal.DEFAULTS={
        backdrop:true,
        keyboard:true,
        show:true
    }
    Modal.prototype.toggle=function(_relatedTarget){
        return this[!this.isShown?'show':'hide'](_relatedTarget)
        }
    Modal.prototype.show=function(_relatedTarget){
        var that=this
        var e=$.Event('show.bs.modal',{
            relatedTarget:_relatedTarget
        })
        this.$element.trigger(e)
        if(this.isShown||e.isDefaultPrevented())return
        this.isShown=true
        this.escape()
        this.$element.on('click.dismiss.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
        this.backdrop(function(){
            var transition=$.support.transition&&that.$element.hasClass('fade')
            if(!that.$element.parent().length){
                that.$element.appendTo(document.body)
                }
            that.$element.show()
            if(transition){
                that.$element[0].offsetWidth
                }
            that.$element
            .addClass('in')
            .attr('aria-hidden',false)
            that.enforceFocus()
            var e=$.Event('shown.bs.modal',{
                relatedTarget:_relatedTarget
            })
            transition?that.$element.find('.modal-dialog')
            .one($.support.transition.end,function(){
                that.$element.focus().trigger(e)
                })
            .emulateTransitionEnd(300):that.$element.focus().trigger(e)
            })
        }
    Modal.prototype.hide=function(e){
        if(e)e.preventDefault()
        e=$.Event('hide.bs.modal')
        this.$element.trigger(e)
        if(!this.isShown||e.isDefaultPrevented())return
        this.isShown=false
        this.escape()
        $(document).off('focusin.bs.modal')
        this.$element
        .removeClass('in')
        .attr('aria-hidden',true)
        .off('click.dismiss.modal')
        $.support.transition&&this.$element.hasClass('fade')?this.$element
        .one($.support.transition.end,$.proxy(this.hideModal,this))
        .emulateTransitionEnd(300):this.hideModal()
        }
    Modal.prototype.enforceFocus=function(){
        $(document)
        .off('focusin.bs.modal')
        .on('focusin.bs.modal',$.proxy(function(e){
            if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){
                this.$element.focus()
                }
            },this))
    }
Modal.prototype.escape=function(){
    if(this.isShown&&this.options.keyboard){
        this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){
            e.which==27&&this.hide()
            },this))
        }else if(!this.isShown){
        this.$element.off('keyup.dismiss.bs.modal')
        }
    }
Modal.prototype.hideModal=function(){
    var that=this
    this.$element.hide()
    this.backdrop(function(){
        that.removeBackdrop()
        that.$element.trigger('hidden.bs.modal')
        })
    }
Modal.prototype.removeBackdrop=function(){
    this.$backdrop&&this.$backdrop.remove()
    this.$backdrop=null
    }
Modal.prototype.backdrop=function(callback){
    var that=this
    var animate=this.$element.hasClass('fade')?'fade':''
    if(this.isShown&&this.options.backdrop){
        var doAnimate=$.support.transition&&animate
        this.$backdrop=$('<div class="modal-backdrop '+animate+'" />')
        .appendTo(document.body)
        this.$element.on('click.dismiss.modal',$.proxy(function(e){
            if(e.target!==e.currentTarget)return
            this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
            },this))
        if(doAnimate)this.$backdrop[0].offsetWidth
        this.$backdrop.addClass('in')
        if(!callback)return
        doAnimate?this.$backdrop
        .one($.support.transition.end,callback)
        .emulateTransitionEnd(150):callback()
        }else if(!this.isShown&&this.$backdrop){
        this.$backdrop.removeClass('in')
        $.support.transition&&this.$element.hasClass('fade')?this.$backdrop
        .one($.support.transition.end,callback)
        .emulateTransitionEnd(150):callback()
        }else if(callback){
        callback()
        }
    }
var old=$.fn.modal
$.fn.modal=function(option,_relatedTarget){
    return this.each(function(){
        var $this=$(this)
        var data=$this.data('bs.modal')
        var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
        if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
        if(typeof option=='string')data[option](_relatedTarget)
        else if(options.show)data.show(_relatedTarget)
            })
    }
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){
    $.fn.modal=old
    return this
    }
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){
    var $this=$(this)
    var href=$this.attr('href')
    var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
    var option=$target.data('modal')?'toggle':$.extend({
        remote:!/#/.test(href)&&href
        },$target.data(),$this.data())
    e.preventDefault()
    $target
    .modal(option,this)
    .one('hide',function(){
        $this.is(':visible')&&$this.focus()
        })
    })
$(document)
.on('show.bs.modal','.modal',function(){
    $(document.body).addClass('modal-open')
    })
.on('hidden.bs.modal','.modal',function(){
    $(document.body).removeClass('modal-open')
    })
}(window.jQuery);
+function($){
    "use strict";
    var Tooltip=function(element,options){
        this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
        this.init('tooltip',element,options)
        }
    Tooltip.DEFAULTS={
        animation:true,
        placement:'top',
        selector:false,
        template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger:'hover focus',
        title:'',
        delay:0,
        html:false,
        container:false
    }
    Tooltip.prototype.init=function(type,element,options){
        this.enabled=true
        this.type=type
        this.$element=$(element)
        this.options=this.getOptions(options)
        var triggers=this.options.trigger.split(' ')
        for(var i=triggers.length;i--;){
            var trigger=triggers[i]
            if(trigger=='click'){
                this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))
                }else if(trigger!='manual'){
                var eventIn=trigger=='hover'?'mouseenter':'focus'
                var eventOut=trigger=='hover'?'mouseleave':'blur'
                this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
                this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))
                }
            }
    this.options.selector?(this._options=$.extend({},this.options,{
        trigger:'manual',
        selector:''
    })):this.fixTitle()
    }
Tooltip.prototype.getDefaults=function(){
    return Tooltip.DEFAULTS
    }
Tooltip.prototype.getOptions=function(options){
    options=$.extend({},this.getDefaults(),this.$element.data(),options)
    if(options.delay&&typeof options.delay=='number'){
        options.delay={
            show:options.delay,
            hide:options.delay
            }
        }
return options
}
Tooltip.prototype.getDelegateOptions=function(){
    var options={}
    var defaults=this.getDefaults()
    this._options&&$.each(this._options,function(key,value){
        if(defaults[key]!=value)options[key]=value
            })
    return options
    }
Tooltip.prototype.enter=function(obj){
    var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type)
    clearTimeout(self.timeout)
    self.hoverState='in'
    if(!self.options.delay||!self.options.delay.show)return self.show()
    self.timeout=setTimeout(function(){
        if(self.hoverState=='in')self.show()
            },self.options.delay.show)
    }
Tooltip.prototype.leave=function(obj){
    var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type)
    clearTimeout(self.timeout)
    self.hoverState='out'
    if(!self.options.delay||!self.options.delay.hide)return self.hide()
    self.timeout=setTimeout(function(){
        if(self.hoverState=='out')self.hide()
            },self.options.delay.hide)
    }
Tooltip.prototype.show=function(){
    var e=$.Event('show.bs.'+this.type)
    if(this.hasContent()&&this.enabled){
        this.$element.trigger(e)
        if(e.isDefaultPrevented())return
        var $tip=this.tip()
        this.setContent()
        if(this.options.animation)$tip.addClass('fade')
        var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
        var autoToken=/\s?auto?\s?/i
        var autoPlace=autoToken.test(placement)
        if(autoPlace)placement=placement.replace(autoToken,'')||'top'
        $tip
        .detach()
        .css({
            top:0,
            left:0,
            display:'block'
        })
        .addClass(placement)
        this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
        var pos=this.getPosition()
        var actualWidth=$tip[0].offsetWidth
        var actualHeight=$tip[0].offsetHeight
        if(autoPlace){
            var $parent=this.$element.parent()
            var orgPlacement=placement
            var docScroll=document.documentElement.scrollTop||document.body.scrollTop
            var parentWidth=this.options.container=='body'?window.innerWidth:$parent.outerWidth()
            var parentHeight=this.options.container=='body'?window.innerHeight:$parent.outerHeight()
            var parentLeft=this.options.container=='body'?0:$parent.offset().left
            placement=placement=='bottom'&&pos.top+pos.height+actualHeight-docScroll>parentHeight?'top':placement=='top'&&pos.top-docScroll-actualHeight<0?'bottom':placement=='right'&&pos.right+actualWidth>parentWidth?'left':placement=='left'&&pos.left-actualWidth<parentLeft?'right':placement
            $tip
            .removeClass(orgPlacement)
            .addClass(placement)
            }
        var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
        this.applyPlacement(calculatedOffset,placement)
        this.$element.trigger('shown.bs.'+this.type)
        }
    }
Tooltip.prototype.applyPlacement=function(offset,placement){
    var replace
    var $tip=this.tip()
    var width=$tip[0].offsetWidth
    var height=$tip[0].offsetHeight
    var marginTop=parseInt($tip.css('margin-top'),10)
    var marginLeft=parseInt($tip.css('margin-left'),10)
    if(isNaN(marginTop))marginTop=0
    if(isNaN(marginLeft))marginLeft=0
    offset.top=offset.top+marginTop
    offset.left=offset.left+marginLeft
    $tip
    .offset(offset)
    .addClass('in')
    var actualWidth=$tip[0].offsetWidth
    var actualHeight=$tip[0].offsetHeight
    if(placement=='top'&&actualHeight!=height){
        replace=true
        offset.top=offset.top+height-actualHeight
        }
    if(/bottom|top/.test(placement)){
        var delta=0
        if(offset.left<0){
            delta=offset.left*-2
            offset.left=0
            $tip.offset(offset)
            actualWidth=$tip[0].offsetWidth
            actualHeight=$tip[0].offsetHeight
            }
        this.replaceArrow(delta-width+actualWidth,actualWidth,'left')
        }else{
        this.replaceArrow(actualHeight-height,actualHeight,'top')
        }
    if(replace)$tip.offset(offset)
        }
Tooltip.prototype.replaceArrow=function(delta,dimension,position){
    this.arrow().css(position,delta?(50*(1-delta/dimension)+"%"):'')
    }
Tooltip.prototype.setContent=function(){
    var $tip=this.tip()
    var title=this.getTitle()
    $tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
    $tip.removeClass('fade in top bottom left right')
    }
Tooltip.prototype.hide=function(){
    var that=this
    var $tip=this.tip()
    var e=$.Event('hide.bs.'+this.type)
    function complete(){
        if(that.hoverState!='in')$tip.detach()
            }
    this.$element.trigger(e)
    if(e.isDefaultPrevented())return
    $tip.removeClass('in')
    $.support.transition&&this.$tip.hasClass('fade')?$tip
    .one($.support.transition.end,complete)
    .emulateTransitionEnd(150):complete()
    this.$element.trigger('hidden.bs.'+this.type)
    return this
    }
Tooltip.prototype.fixTitle=function(){
    var $e=this.$element
    if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){
        $e.attr('data-original-title',$e.attr('title')||'').attr('title','')
        }
    }
Tooltip.prototype.hasContent=function(){
    return this.getTitle()
    }
Tooltip.prototype.getPosition=function(){
    var el=this.$element[0]
    return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():{
        width:el.offsetWidth,
        height:el.offsetHeight
        },this.$element.offset())
    }
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){
    return placement=='bottom'?{
        top:pos.top+pos.height,
        left:pos.left+pos.width/2-actualWidth/2
        }:placement=='top'?{
        top:pos.top-actualHeight,
        left:pos.left+pos.width/2-actualWidth/2
        }:placement=='left'?{
        top:pos.top+pos.height/2-actualHeight/2,
        left:pos.left-actualWidth
        }:{
        top:pos.top+pos.height/2-actualHeight/2,
        left:pos.left+pos.width
        }
    }
Tooltip.prototype.getTitle=function(){
    var title
    var $e=this.$element
    var o=this.options
    title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
    return title
    }
Tooltip.prototype.tip=function(){
    return this.$tip=this.$tip||$(this.options.template)
    }
Tooltip.prototype.arrow=function(){
    return this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow')
    }
Tooltip.prototype.validate=function(){
    if(!this.$element[0].parentNode){
        this.hide()
        this.$element=null
        this.options=null
        }
    }
Tooltip.prototype.enable=function(){
    this.enabled=true
    }
Tooltip.prototype.disable=function(){
    this.enabled=false
    }
Tooltip.prototype.toggleEnabled=function(){
    this.enabled=!this.enabled
    }
Tooltip.prototype.toggle=function(e){
    var self=e?$(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type):this
    self.tip().hasClass('in')?self.leave(self):self.enter(self)
    }
Tooltip.prototype.destroy=function(){
    this.hide().$element.off('.'+this.type).removeData('bs.'+this.type)
    }
var old=$.fn.tooltip
$.fn.tooltip=function(option){
    return this.each(function(){
        var $this=$(this)
        var data=$this.data('bs.tooltip')
        var options=typeof option=='object'&&option
        if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
        if(typeof option=='string')data[option]()
            })
    }
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){
    $.fn.tooltip=old
    return this
    }
}(window.jQuery);
+function($){
    "use strict";
    var Popover=function(element,options){
        this.init('popover',element,options)
        }
    if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
    Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{
        placement:'right',
        trigger:'click',
        content:'',
        template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })
    Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
    Popover.prototype.constructor=Popover
    Popover.prototype.getDefaults=function(){
        return Popover.DEFAULTS
        }
    Popover.prototype.setContent=function(){
        var $tip=this.tip()
        var title=this.getTitle()
        var content=this.getContent()
        $tip.find('.popover-title')[this.options.html?'html':'text'](title)
        $tip.find('.popover-content')[this.options.html?'html':'text'](content)
        $tip.removeClass('fade top bottom left right in')
        if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()
            }
    Popover.prototype.hasContent=function(){
        return this.getTitle()||this.getContent()
        }
    Popover.prototype.getContent=function(){
        var $e=this.$element
        var o=this.options
        return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)
        }
    Popover.prototype.arrow=function(){
        return this.$arrow=this.$arrow||this.tip().find('.arrow')
        }
    Popover.prototype.tip=function(){
        if(!this.$tip)this.$tip=$(this.options.template)
        return this.$tip
        }
    var old=$.fn.popover
    $.fn.popover=function(option){
        return this.each(function(){
            var $this=$(this)
            var data=$this.data('bs.popover')
            var options=typeof option=='object'&&option
            if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
            if(typeof option=='string')data[option]()
                })
        }
    $.fn.popover.Constructor=Popover
    $.fn.popover.noConflict=function(){
        $.fn.popover=old
        return this
        }
    }(window.jQuery);
+function($){
    "use strict";
    var Tab=function(element){
        this.element=$(element)
        }
    Tab.prototype.show=function(){
        var $this=this.element
        var $ul=$this.closest('ul:not(.dropdown-menu)')
        var selector=$this.attr('data-target')
        if(!selector){
            selector=$this.attr('href')
            selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')
            }
        if($this.parent('li').hasClass('active'))return
        var previous=$ul.find('.active:last a')[0]
        var e=$.Event('show.bs.tab',{
            relatedTarget:previous
        })
        $this.trigger(e)
        if(e.isDefaultPrevented())return
        var $target=$(selector)
        this.activate($this.parent('li'),$ul)
        this.activate($target,$target.parent(),function(){
            $this.trigger({
                type:'shown.bs.tab',
                relatedTarget:previous
            })
            })
        }
    Tab.prototype.activate=function(element,container,callback){
        var $active=container.find('> .active')
        var transition=callback&&$.support.transition&&$active.hasClass('fade')
        function next(){
            $active
            .removeClass('active')
            .find('> .dropdown-menu > .active')
            .removeClass('active')
            element.addClass('active')
            if(transition){
                element[0].offsetWidth
                element.addClass('in')
                }else{
                element.removeClass('fade')
                }
            if(element.parent('.dropdown-menu')){
                element.closest('li.dropdown').addClass('active')
                }
            callback&&callback()
            }
        transition?$active
        .one($.support.transition.end,next)
        .emulateTransitionEnd(150):next()
        $active.removeClass('in')
        }
    var old=$.fn.tab
    $.fn.tab=function(option){
        return this.each(function(){
            var $this=$(this)
            var data=$this.data('bs.tab')
            if(!data)$this.data('bs.tab',(data=new Tab(this)))
            if(typeof option=='string')data[option]()
                })
        }
    $.fn.tab.Constructor=Tab
    $.fn.tab.noConflict=function(){
        $.fn.tab=old
        return this
        }
    $(document).on('click.bs.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){
        e.preventDefault()
        $(this).tab('show')
        })
    }(window.jQuery);
+function($){
    "use strict";
    var Affix=function(element,options){
        this.options=$.extend({},Affix.DEFAULTS,options)
        this.$window=$(window)
        .on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this))
        .on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
        this.$element=$(element)
        this.affixed=this.unpin=null
        this.checkPosition()
        }
    Affix.RESET='affix affix-top affix-bottom'
    Affix.DEFAULTS={
        offset:0
    }
    Affix.prototype.checkPositionWithEventLoop=function(){
        setTimeout($.proxy(this.checkPosition,this),1)
        }
    Affix.prototype.checkPosition=function(){
        if(!this.$element.is(':visible'))return
        var scrollHeight=$(document).height()
        var scrollTop=this.$window.scrollTop()
        var position=this.$element.offset()
        var offset=this.options.offset
        var offsetTop=offset.top
        var offsetBottom=offset.bottom
        if(typeof offset!='object')offsetBottom=offsetTop=offset
        if(typeof offsetTop=='function')offsetTop=offset.top()
        if(typeof offsetBottom=='function')offsetBottom=offset.bottom()
        var affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&(scrollTop<=offsetTop)?'top':false
        if(this.affixed===affix)return
        if(this.unpin)this.$element.css('top','')
        this.affixed=affix
        this.unpin=affix=='bottom'?position.top-scrollTop:null
        this.$element.removeClass(Affix.RESET).addClass('affix'+(affix?'-'+affix:''))
        if(affix=='bottom'){
            this.$element.offset({
                top:document.body.offsetHeight-offsetBottom-this.$element.height()
                })
            }
        }
var old=$.fn.affix
$.fn.affix=function(option){
    return this.each(function(){
        var $this=$(this)
        var data=$this.data('bs.affix')
        var options=typeof option=='object'&&option
        if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
        if(typeof option=='string')data[option]()
            })
    }
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){
    $.fn.affix=old
    return this
    }
$(window).on('load',function(){
    $('[data-spy="affix"]').each(function(){
        var $spy=$(this)
        var data=$spy.data()
        data.offset=data.offset||{}
        if(data.offsetBottom)data.offset.bottom=data.offsetBottom
        if(data.offsetTop)data.offset.top=data.offsetTop
        $spy.affix(data)
        })
    })
}(window.jQuery);
+function($){
    "use strict";
    var Collapse=function(element,options){
        this.$element=$(element)
        this.options=$.extend({},Collapse.DEFAULTS,options)
        this.transitioning=null
        if(this.options.parent)this.$parent=$(this.options.parent)
        if(this.options.toggle)this.toggle()
            }
    Collapse.DEFAULTS={
        toggle:true
    }
    Collapse.prototype.dimension=function(){
        var hasWidth=this.$element.hasClass('width')
        return hasWidth?'width':'height'
        }
    Collapse.prototype.show=function(){
        if(this.transitioning||this.$element.hasClass('in'))return
        var startEvent=$.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if(startEvent.isDefaultPrevented())return
        var actives=this.$parent&&this.$parent.find('> .panel > .in')
        if(actives&&actives.length){
            var hasData=actives.data('bs.collapse')
            if(hasData&&hasData.transitioning)return
            actives.collapse('hide')
            hasData||actives.data('bs.collapse',null)
            }
        var dimension=this.dimension()
        this.$element
        .removeClass('collapse')
        .addClass('collapsing')
        [dimension](0)
        this.transitioning=1
        var complete=function(){
            this.$element
            .removeClass('collapsing')
            .addClass('in')
            [dimension]('auto')
            this.transitioning=0
            this.$element.trigger('shown.bs.collapse')
            }
        if(!$.support.transition)return complete.call(this)
        var scrollSize=$.camelCase(['scroll',dimension].join('-'))
        this.$element
        .one($.support.transition.end,$.proxy(complete,this))
        .emulateTransitionEnd(350)
        [dimension](this.$element[0][scrollSize])
        }
    Collapse.prototype.hide=function(){
        if(this.transitioning||!this.$element.hasClass('in'))return
        var startEvent=$.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if(startEvent.isDefaultPrevented())return
        var dimension=this.dimension()
        this.$element
        [dimension](this.$element[dimension]())
        [0].offsetHeight
        this.$element
        .addClass('collapsing')
        .removeClass('collapse')
        .removeClass('in')
        this.transitioning=1
        var complete=function(){
            this.transitioning=0
            this.$element
            .trigger('hidden.bs.collapse')
            .removeClass('collapsing')
            .addClass('collapse')
            }
        if(!$.support.transition)return complete.call(this)
        this.$element
        [dimension](0)
        .one($.support.transition.end,$.proxy(complete,this))
        .emulateTransitionEnd(350)
        }
    Collapse.prototype.toggle=function(){
        this[this.$element.hasClass('in')?'hide':'show']()
        }
    var old=$.fn.collapse
    $.fn.collapse=function(option){
        return this.each(function(){
            var $this=$(this)
            var data=$this.data('bs.collapse')
            var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
            if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
            if(typeof option=='string')data[option]()
                })
        }
    $.fn.collapse.Constructor=Collapse
    $.fn.collapse.noConflict=function(){
        $.fn.collapse=old
        return this
        }
    $(document).on('click.bs.collapse.data-api','[data-toggle=collapse]',function(e){
        var $this=$(this),href
        var target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
        var $target=$(target)
        var data=$target.data('bs.collapse')
        var option=data?'toggle':$this.data()
        var parent=$this.attr('data-parent')
        var $parent=parent&&$(parent)
        if(!data||!data.transitioning){
            if($parent)$parent.find('[data-toggle=collapse][data-parent="'+parent+'"]').not($this).addClass('collapsed')
            $this[$target.hasClass('in')?'addClass':'removeClass']('collapsed')
            }
        $target.collapse(option)
        })
    }(window.jQuery);
+function($){
    "use strict";
    function ScrollSpy(element,options){
        var href
        var process=$.proxy(this.process,this)
        this.$element=$(element).is('body')?$(window):$(element)
        this.$body=$('body')
        this.$scrollElement=this.$element.on('scroll.bs.scroll-spy.data-api',process)
        this.options=$.extend({},ScrollSpy.DEFAULTS,options)
        this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a'
        this.offsets=$([])
        this.targets=$([])
        this.activeTarget=null
        this.refresh()
        this.process()
        }
    ScrollSpy.DEFAULTS={
        offset:10
    }
    ScrollSpy.prototype.refresh=function(){
        var offsetMethod=this.$element[0]==window?'offset':'position'
        this.offsets=$([])
        this.targets=$([])
        var self=this
        var $targets=this.$body
        .find(this.selector)
        .map(function(){
            var $el=$(this)
            var href=$el.data('target')||$el.attr('href')
            var $href=/^#\w/.test(href)&&$(href)
            return($href&&$href.length&&[[$href[offsetMethod]().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]])||null
            })
        .sort(function(a,b){
            return a[0]-b[0]
            })
        .each(function(){
            self.offsets.push(this[0])
            self.targets.push(this[1])
            })
        }
    ScrollSpy.prototype.process=function(){
        var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
        var scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight
        var maxScroll=scrollHeight-this.$scrollElement.height()
        var offsets=this.offsets
        var targets=this.targets
        var activeTarget=this.activeTarget
        var i
        if(scrollTop>=maxScroll){
            return activeTarget!=(i=targets.last()[0])&&this.activate(i)
            }
        for(i=offsets.length;i--;){
            activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])
            }
        }
ScrollSpy.prototype.activate=function(target){
    this.activeTarget=target
    $(this.selector)
    .parents('.active')
    .removeClass('active')
    var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]'
    var active=$(selector)
    .parents('li')
    .addClass('active')
    if(active.parent('.dropdown-menu').length){
        active=active
        .closest('li.dropdown')
        .addClass('active')
        }
    active.trigger('activate')
    }
var old=$.fn.scrollspy
$.fn.scrollspy=function(option){
    return this.each(function(){
        var $this=$(this)
        var data=$this.data('bs.scrollspy')
        var options=typeof option=='object'&&option
        if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
        if(typeof option=='string')data[option]()
            })
    }
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){
    $.fn.scrollspy=old
    return this
    }
$(window).on('load',function(){
    $('[data-spy="scroll"]').each(function(){
        var $spy=$(this)
        $spy.scrollspy($spy.data())
        })
    })
}(window.jQuery);
+function($){
    "use strict";
    function transitionEnd(){
        var el=document.createElement('bootstrap')
        var transEndEventNames={
            'WebkitTransition':'webkitTransitionEnd',
            'MozTransition':'transitionend',
            'OTransition':'oTransitionEnd otransitionend',
            'transition':'transitionend'
        }
        for(var name in transEndEventNames){
            if(el.style[name]!==undefined){
                return{
                    end:transEndEventNames[name]
                    }
                }
        }
        }
$.fn.emulateTransitionEnd=function(duration){
    var called=false,$el=this
    $(this).one($.support.transition.end,function(){
        called=true
        })
    var callback=function(){
        if(!called)$($el).trigger($.support.transition.end)
            }
    setTimeout(callback,duration)
    return this
    }
$(function(){
    $.support.transition=transitionEnd()
    })
}(window.jQuery);
(function($){
    $.easyPieChart=function(el,options){
        var addScaleLine,animateLine,drawLine,easeInOutQuad,rAF,renderBackground,renderScale,renderTrack,_this=this;
        this.el=el;
        this.$el=$(el);
        this.$el.data("easyPieChart",this);
        this.init=function(){
            var percent,scaleBy;
            _this.options=$.extend({},$.easyPieChart.defaultOptions,options);
            percent=parseInt(_this.$el.data('percent'),10);
            _this.percentage=0;
            _this.canvas=$("<canvas width='"+_this.options.size+"' height='"+_this.options.size+"'></canvas>").get(0);
            _this.$el.append(_this.canvas);
            if(typeof G_vmlCanvasManager!=="undefined"&&G_vmlCanvasManager!==null){
                G_vmlCanvasManager.initElement(_this.canvas);
            }
            _this.ctx=_this.canvas.getContext('2d');
            if(window.devicePixelRatio>1){
                scaleBy=window.devicePixelRatio;
                $(_this.canvas).css({
                    width:_this.options.size,
                    height:_this.options.size
                    });
                _this.canvas.width*=scaleBy;
                _this.canvas.height*=scaleBy;
                _this.ctx.scale(scaleBy,scaleBy);
            }
            _this.ctx.translate(_this.options.size/2,_this.options.size/2);
            _this.ctx.rotate(_this.options.rotate*Math.PI/180);
            _this.$el.addClass('easyPieChart');
            _this.$el.css({
                width:_this.options.size,
                height:_this.options.size,
                lineHeight:""+_this.options.size+"px"
                });
            _this.update(percent);
            return _this;
        };
        
        this.update=function(percent){
            percent=parseFloat(percent)||0;
            if(_this.options.animate===false){
                drawLine(percent);
            }else{
                if(_this.options.delay){
                    animateLine(_this.percentage,0);
                    setTimeout(function(){
                        return animateLine(_this.percentage,percent);
                    },_this.options.delay);
                }else{
                    animateLine(_this.percentage,percent);
                }
            }
        return _this;
    };
    
    renderScale=function(){
        var i,_i,_results;
        _this.ctx.fillStyle=_this.options.scaleColor;
        _this.ctx.lineWidth=1;
        _results=[];
        for(i=_i=0;_i<=24;i=++_i){
            _results.push(addScaleLine(i));
        }
        return _results;
    };
    
    addScaleLine=function(i){
        var offset;
        offset=i%6===0?0:_this.options.size*0.017;
        _this.ctx.save();
        _this.ctx.rotate(i*Math.PI/12);
        _this.ctx.fillRect(_this.options.size/2-offset,0,-_this.options.size*0.05+offset,1);
        _this.ctx.restore();
    };
    
    renderTrack=function(){
        var offset;
        offset=_this.options.size/2-_this.options.lineWidth/2;
        if(_this.options.scaleColor!==false){
            offset-=_this.options.size*0.08;
        }
        _this.ctx.beginPath();
        _this.ctx.arc(0,0,offset,0,Math.PI*2,true);
        _this.ctx.closePath();
        _this.ctx.strokeStyle=_this.options.trackColor;
        _this.ctx.lineWidth=_this.options.lineWidth;
        _this.ctx.stroke();
    };
    
    renderBackground=function(){
        if(_this.options.scaleColor!==false){
            renderScale();
        }
        if(_this.options.trackColor!==false){
            renderTrack();
        }
    };
    
drawLine=function(percent){
    var offset;
    renderBackground();
    _this.ctx.strokeStyle=$.isFunction(_this.options.barColor)?_this.options.barColor(percent):_this.options.barColor;
    _this.ctx.lineCap=_this.options.lineCap;
    _this.ctx.lineWidth=_this.options.lineWidth;
    offset=_this.options.size/2-_this.options.lineWidth/2;
    if(_this.options.scaleColor!==false){
        offset-=_this.options.size*0.08;
    }
    _this.ctx.save();
    _this.ctx.rotate(-Math.PI/2);
    _this.ctx.beginPath();
    _this.ctx.arc(0,0,offset,0,Math.PI*2*percent/100,false);
    _this.ctx.stroke();
    _this.ctx.restore();
};

rAF=(function(){
    return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){
        return window.setTimeout(callback,1000/60);
    };

})();
    animateLine=function(from,to){
    var anim,startTime;
    _this.options.onStart.call(_this);
    _this.percentage=to;
    Date.now||(Date.now=function(){
        return+(new Date);
    });
    startTime=Date.now();
    anim=function(){
        var currentValue,process;
        process=Math.min(Date.now()-startTime,_this.options.animate);
        _this.ctx.clearRect(-_this.options.size/2,-_this.options.size/2,_this.options.size,_this.options.size);
        renderBackground.call(_this);
        currentValue=[easeInOutQuad(process,from,to-from,_this.options.animate)];
        _this.options.onStep.call(_this,currentValue);
        drawLine.call(_this,currentValue);
        if(process>=_this.options.animate){
            return _this.options.onStop.call(_this,currentValue,to);
        }else{
            return rAF(anim);
        }
    };
    
rAF(anim);
};

easeInOutQuad=function(t,b,c,d){
    var easeIn,easing;
    easeIn=function(t){
        return Math.pow(t,2);
    };
    
    easing=function(t){
        if(t<1){
            return easeIn(t);
        }else{
            return 2-easeIn((t/2)*-2+2);
        }
    };
    
t/=d/2;
return c/2*easing(t)+b;
};

return this.init();
};

$.easyPieChart.defaultOptions={
    barColor:'#ef1e25',
    trackColor:'#f2f2f2',
    scaleColor:'#dfe0e0',
    lineCap:'round',
    rotate:0,
    size:110,
    lineWidth:3,
    animate:false,
    delay:false,
    onStart:$.noop,
    onStop:$.noop,
    onStep:$.noop
    };
    
$.fn.easyPieChart=function(options){
    return $.each(this,function(i,el){
        var $el,instanceOptions;
        $el=$(el);
        if(!$el.data('easyPieChart')){
            instanceOptions=$.extend({},options,$el.data());
            return $el.data('easyPieChart',new $.easyPieChart(el,instanceOptions));
        }
    });
};

return void 0;
})(jQuery);
(function(a,b,c){
    (function(a){
        typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)
        })(function(d){
        "use strict";
        var e={},f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=0;
        f=function(){
            return{
                common:{
                    type:"line",
                    lineColor:"#00f",
                    fillColor:"#cdf",
                    defaultPixelsPerValue:3,
                    width:"auto",
                    height:"auto",
                    composite:!1,
                    tagValuesAttribute:"values",
                    tagOptionsPrefix:"spark",
                    enableTagOptions:!1,
                    enableHighlight:!0,
                    highlightLighten:1.4,
                    tooltipSkipNull:!0,
                    tooltipPrefix:"",
                    tooltipSuffix:"",
                    disableHiddenCheck:!1,
                    numberFormatter:!1,
                    numberDigitGroupCount:3,
                    numberDigitGroupSep:",",
                    numberDecimalMark:".",
                    disableTooltips:!1,
                    disableInteraction:!1
                    },
                line:{
                    spotColor:"#f80",
                    highlightSpotColor:"#5f5",
                    highlightLineColor:"#f22",
                    spotRadius:1.5,
                    minSpotColor:"#f80",
                    maxSpotColor:"#f80",
                    lineWidth:1,
                    normalRangeMin:c,
                    normalRangeMax:c,
                    normalRangeColor:"#ccc",
                    drawNormalOnTop:!1,
                    chartRangeMin:c,
                    chartRangeMax:c,
                    chartRangeMinX:c,
                    chartRangeMaxX:c,
                    tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                    },
                bar:{
                    barColor:"#3366cc",
                    negBarColor:"#f44",
                    stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],
                    zeroColor:c,
                    nullColor:c,
                    zeroAxis:!0,
                    barWidth:4,
                    barSpacing:1,
                    chartRangeMax:c,
                    chartRangeMin:c,
                    chartRangeClip:!1,
                    colorMap:c,
                    tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                    },
                tristate:{
                    barWidth:4,
                    barSpacing:1,
                    posBarColor:"#6f6",
                    negBarColor:"#f44",
                    zeroBarColor:"#999",
                    colorMap:{},
                    tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups:{
                        map:{
                            "-1":"Loss",
                            0:"Draw",
                            1:"Win"
                        }
                    }
                },
        discrete:{
            lineHeight:"auto",
            thresholdColor:c,
            thresholdValue:0,
            chartRangeMax:c,
            chartRangeMin:c,
            chartRangeClip:!1,
            tooltipFormat:new h("{{prefix}}{{value}}{{suffix}}")
            },
        bullet:{
            targetColor:"#f33",
            targetWidth:3,
            performanceColor:"#33f",
            rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],
            base:c,
            tooltipFormat:new h("{{fieldkey:fields}} - {{value}}"),
            tooltipValueLookups:{
                fields:{
                    r:"Range",
                    p:"Performance",
                    t:"Target"
                }
            }
        },
    pie:{
        offset:0,
        sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],
        borderWidth:0,
        borderColor:"#000",
        tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
    box:{
        raw:!1,
        boxLineColor:"#000",
        boxFillColor:"#cdf",
        whiskerColor:"#000",
        outlierLineColor:"#333",
        outlierFillColor:"#fff",
        medianColor:"#f00",
        showOutliers:!0,
        outlierIQR:1.5,
        spotRadius:1.5,
        target:c,
        targetColor:"#4a2",
        chartRangeMax:c,
        chartRangeMin:c,
        tooltipFormat:new h("{{field:fields}}: {{value}}"),
        tooltipFormatFieldlistKey:"field",
        tooltipValueLookups:{
            fields:{
                lq:"Lower Quartile",
                med:"Median",
                uq:"Upper Quartile",
                lo:"Left Outlier",
                ro:"Right Outlier",
                lw:"Left Whisker",
                rw:"Right Whisker"
            }
        }
    }
}
},E='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',g=function(){
    var a,b;
    return a=function(){
        this.init.apply(this,arguments)
        },arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a
    },d.SPFormatClass=h=g({
    fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,
    precre:/(\w+)\.(\d+)/,
    init:function(a,b){
        this.format=a,this.fclass=b
        },
    render:function(a,b,d){
        var e=this,f=a,g,h,i,j,k;
        return this.format.replace(this.fre,function(){
            var a;
            return h=arguments[1],i=arguments[3],g=e.precre.exec(h),g?(k=g[2],h=g[1]):k=!1,j=f[h],j===c?"":i&&b&&b[i]?(a=b[i],a.get?b[i].get(j)||j:b[i][j]||j):(n(j)&&(d.get("numberFormatter")?j=d.get("numberFormatter")(j):j=s(j,k,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),j)
            })
        }
    }),d.spformat=function(a,b){
    return new h(a,b)
    },i=function(a,b,c){
    return a<b?b:a>c?c:a
    },j=function(a,c){
    var d;
    return c===2?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])
    },k=function(a){
    var b;
    switch(a){
        case"undefined":
            a=c;
            break;
        case"null":
            a=null;
            break;
        case"true":
            a=!0;
            break;
        case"false":
            a=!1;
            break;
        default:
            b=parseFloat(a),a==b&&(a=b)
            }
            return a
    },l=function(a){
    var b,c=[];
    for(b=a.length;b--;)c[b]=k(a[b]);
    return c
    },m=function(a,b){
    var c,d,e=[];
    for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);
    return e
    },n=function(a){
    return!isNaN(parseFloat(a))&&isFinite(a)
    },s=function(a,b,c,e,f){
    var g,h;
    a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f);
    for(h=g-c;h>0;h-=c)a.splice(h,0,e);
    return a.join("")
    },o=function(a,b,c){
    var d;
    for(d=b.length;d--;){
        if(c&&b[d]===null)continue;
        if(b[d]!==a)return!1
            }
            return!0
    },p=function(a){
    var b=0,c;
    for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;
    return b
    },r=function(a){
    return d.isArray(a)?a:[a]
    },q=function(b){
    var c;
    a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c[typeof a.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=b)
    },d.fn.simpledraw=function(b,e,f,g){
    var h,i;
    if(f&&(h=this.data("_jqs_vcanvas")))return h;
    if(d.fn.sparkline.canvas===!1)return!1;
    if(d.fn.sparkline.canvas===c){
        var j=a.createElement("canvas");
        if(!j.getContext||!j.getContext("2d")){
            if(!a.namespaces||!!a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;
            a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){
                return new J(a,b,c)
                }
            }else d.fn.sparkline.canvas=function(a,b,c,d){
        return new I(a,b,c,d)
        }
    }
    return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h
},d.fn.cleardraw=function(){
    var a=this.data("_jqs_vcanvas");
    a&&a.reset()
    },d.RangeMapClass=t=g({
    init:function(a){
        var b,c,d=[];
        for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1
        },
    get:function(a){
        var b=this.rangelist,d,e,f;
        if((f=this.map[a])!==c)return f;
        if(b)for(d=b.length;d--;){
            e=b[d];
            if(e[0]<=a&&e[1]>=a)return e[2]
                }
                return c
        }
    }),d.range_map=function(a){
    return new t(a)
    },u=g({
    init:function(a,b){
        var c=d(a);
        this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")
        },
    registerSparkline:function(a){
        this.splist.push(a),this.over&&this.updateDisplay()
        },
    registerCanvas:function(a){
        var b=d(a.canvas);
        this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))
        },
    reset:function(a){
        this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)
        },
    mouseclick:function(a){
        var b=d.Event("sparklineClick");
        b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)
        },
    mouseenter:function(b){
        d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new v(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()
        },
    mouseleave:function(){
        d(a.body).unbind("mousemove.jqs");
        var b=this.splist,c=b.length,e=!1,f,g;
        this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);
        for(g=0;g<c;g++)f=b[g],f.clearRegionHighlight()&&(e=!0);
        e&&this.canvas.render()
        },
    mousemove:function(a){
        this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()
        },
    updateDisplay:function(){
        var a=this.splist,b=a.length,c=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;
        if(!this.over)return;
        for(j=0;j<b;j++)i=a[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(c=!0);
        if(c){
            l=d.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);
            if(this.tooltip){
                h="";
                for(j=0;j<b;j++)i=a[j],h+=i.getCurrentRegionTooltip();
                this.tooltip.setContent(h)
                }
                this.disableHighlight||this.canvas.render()
            }
            k===null&&this.mouseleave()
        }
    }),v=g({
    sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
    init:function(b){
        var c=b.get("tooltipClassname","jqstooltip"),e=this.sizeStyle,f;
        this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{
            id:"jqssizetip",
            style:e,
            "class":c
        }),this.tooltip=d("<div/>",{
            id:"jqstooltip",
            "class":c
        }).appendTo(this.container),f=this.tooltip.offset(),this.offsetLeft=f.left,this.offsetTop=f.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()
        },
    updateWindowDims:function(){
        this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()
        },
    getSize:function(a){
        this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()
        },
    setContent:function(a){
        if(!a){
            this.tooltip.css("visibility","hidden"),this.hidden=!0;
            return
        }
        this.getSize(a),this.tooltip.html(a).css({
            width:this.width,
            height:this.height,
            visibility:"visible"
        }),this.hidden&&(this.hidden=!1,this.updatePosition())
        },
    updatePosition:function(a,b){
        if(a===c){
            if(this.mousex===c)return;
            a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop
            }else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;
        if(!this.height||!this.width||this.hidden)return;
        b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({
            left:a,
            top:b
        })
        },
    remove:function(){
        this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")
        }
    }),F=function(){
    q(E)
    },d(F),K=[],d.fn.sparkline=function(b,e){
    return this.each(function(){
        var f=new d.fn.sparkline.options(this,e),g=d(this),h,i;
        h=function(){
            var e,h,i,j,k,l,m;
            if(b==="html"||b===c){
                m=this.getAttribute(f.get("tagValuesAttribute"));
                if(m===c||m===null)m=g.html();
                e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")
                }else e=b;
            h=f.get("width")==="auto"?e.length*f.get("defaultPixelsPerValue"):f.get("width");
            if(f.get("height")==="auto"){
                if(!f.get("composite")||!d.data(this,"_jqs_vcanvas"))j=a.createElement("span"),j.innerHTML="a",g.html(j),i=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null
                    }else i=f.get("height");
            f.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?f.get("composite")||k.reset():(k=new u(this,f),d.data(this,"_jqs_mhandler",k)));
            if(f.get("composite")&&!d.data(this,"_jqs_vcanvas")){
                d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0));
                return
            }
            l=new(d.fn.sparkline[f.get("type")])(this,e,f,h,i),l.render(),k&&k.registerSparkline(l)
            };
            
        if(d(this).html()&&!f.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){
            if(!f.get("composite")&&d.data(this,"_jqs_pending"))for(i=K.length;i;i--)K[i-1][0]==this&&K.splice(i-1,1);
            K.push([this,h]),d.data(this,"_jqs_pending",!0)
            }else h.call(this)
            })
    },d.fn.sparkline.defaults=f(),d.sparkline_display_visible=function(){
    var a,b,c,e=[];
    for(b=0,c=K.length;b<c;b++)a=K[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(K[b][1].call(a),d.data(K[b][0],"_jqs_pending",!1),e.push(b)):!d(a).closest("html").length&&!d.data(a,"_jqs_pending")&&(d.data(K[b][0],"_jqs_pending",!1),e.push(b));
    for(b=e.length;b;b--)K.splice(e[b-1],1)
        },d.fn.sparkline.options=g({
    init:function(a,b){
        var c,f,g,h;
        this.userOptions=b=b||{},this.tag=a,this.tagValCache={},f=d.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===e?c=f[b.type||g.type]:c=f[h],this.mergedOptions=d.extend({},g,c,b)
        },
    getTagSetting:function(a){
        var b=this.tagOptionsPrefix,d,f,g,h;
        if(b===!1||b===c)return e;
        if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;
        else{
            d=this.tag.getAttribute(b+a);
            if(d===c||d===null)d=e;
            else if(d.substr(0,1)==="["){
                d=d.substr(1,d.length-2).split(",");
                for(f=d.length;f--;)d[f]=k(d[f].replace(/(^\s*)|(\s*$)/g,""))
                    }else if(d.substr(0,1)==="{"){
                g=d.substr(1,d.length-2).split(","),d={};
                
                for(f=g.length;f--;)h=g[f].split(":",2),d[h[0].replace(/(^\s*)|(\s*$)/g,"")]=k(h[1].replace(/(^\s*)|(\s*$)/g,""))
                    }else d=k(d);
            this.tagValCache.key=d
            }
            return d
        },
    get:function(a,b){
        var d=this.getTagSetting(a),f;
        return d!==e?d:(f=this.mergedOptions[a])===c?b:f
        }
    }),d.fn.sparkline._base=g({
    disabled:!1,
    init:function(a,b,e,f,g){
        this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c
        },
    initTarget:function(){
        var a=!this.options.get("disableInteraction");
        (this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0
        },
    render:function(){
        return this.disabled?(this.el.innerHTML="",!1):!0
        },
    getRegion:function(a,b){},
    setRegionHighlight:function(a,b,d){
        var e=this.currentRegion,f=!this.options.get("disableHighlight"),g;
        return b>this.canvasWidth||d>this.canvasHeight||b<0||d<0?null:(g=this.getRegion(a,b,d),e!==g?(e!==c&&f&&this.removeHighlight(),this.currentRegion=g,g!==c&&f&&this.renderHighlight(),!0):!1)
        },
    clearRegionHighlight:function(){
        return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1
        },
    renderHighlight:function(){
        this.changeHighlight(!0)
        },
    removeHighlight:function(){
        this.changeHighlight(!1)
        },
    changeHighlight:function(a){},
    getCurrentRegionTooltip:function(){
        var a=this.options,b="",e=[],f,g,i,j,k,l,m,n,o,p,q,r,s,t;
        if(this.currentRegion===c)return"";
        f=this.getCurrentRegionFields(),q=a.get("tooltipFormatter");
        if(q)return q(this,a,f);
        a.get("tooltipChartTitle")&&(b+='<div class="jqs jqstitle">'+a.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");
        if(!g)return"";
        d.isArray(g)||(g=[g]),d.isArray(f)||(f=[f]),m=this.options.get("tooltipFormatFieldlist"),n=this.options.get("tooltipFormatFieldlistKey");
        if(m&&n){
            o=[];
            for(l=f.length;l--;)p=f[l][n],(t=d.inArray(p,m))!=-1&&(o[t]=f[l]);
            f=o
            }
            i=g.length,s=f.length;
        for(l=0;l<i;l++){
            r=g[l],typeof r=="string"&&(r=new h(r)),j=r.fclass||"jqsfield";
            for(t=0;t<s;t++)if(!f[t].isNull||!a.get("tooltipSkipNull"))d.extend(f[t],{
                prefix:a.get("tooltipPrefix"),
                suffix:a.get("tooltipSuffix")
                }),k=r.render(f[t],a.get("tooltipValueLookups"),a),e.push('<div class="'+j+'">'+k+"</div>")
                }
                return e.length?b+e.join("\n"):""
        },
    getCurrentRegionFields:function(){},
    calcHighlightColor:function(a,c){
        var d=c.get("highlightColor"),e=c.get("highlightLighten"),f,g,h,j;
        if(d)return d;
        if(e){
            f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);
            if(f){
                h=[],g=a.length===4?16:1;
                for(j=0;j<3;j++)h[j]=i(b.round(parseInt(f[j+1],16)*g*e),0,255);
                return"rgb("+h.join(",")+")"
                }
            }
        return a
    }
}),w={
    changeHighlight:function(a){
        var b=this.currentRegion,c=this.target,e=this.regionShapes[b],f;
        e&&(f=this.renderRegion(b,a),d.isArray(f)||d.isArray(e)?(c.replaceWithShapes(e,f),this.regionShapes[b]=d.map(f,function(a){
            return a.id
            })):(c.replaceWithShape(e,f),this.regionShapes[b]=f.id))
        },
    render:function(){
        var a=this.values,b=this.target,c=this.regionShapes,e,f,g,h;
        if(!this.cls._super.render.call(this))return;
        for(g=a.length;g--;){
            e=this.renderRegion(g);
            if(e)if(d.isArray(e)){
                f=[];
                for(h=e.length;h--;)e[h].append(),f.push(e[h].id);
                c[g]=f
                }else e.append(),c[g]=e.id;else c[g]=null
                }
                b.render()
        }
    },d.fn.sparkline.line=x=g(d.fn.sparkline._base,{
    type:"line",
    init:function(a,b,c,d,e){
        x._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()
        },
    getRegion:function(a,b,d){
        var e,f=this.regionMap;
        for(e=f.length;e--;)if(f[e]!==null&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c
        },
    getCurrentRegionFields:function(){
        var a=this.currentRegion;
        return{
            isNull:this.yvalues[a]===null,
            x:this.xvalues[a],
            y:this.yvalues[a],
            color:this.options.get("lineColor"),
            fillColor:this.options.get("fillColor"),
            offset:a
        }
    },
renderHighlight:function(){
    var a=this.currentRegion,b=this.target,d=this.vertices[a],e=this.options,f=e.get("spotRadius"),g=e.get("highlightSpotColor"),h=e.get("highlightLineColor"),i,j;
    if(!d)return;
    f&&g&&(i=b.drawCircle(d[0],d[1],f,c,g),this.highlightSpotId=i.id,b.insertAfterShape(this.lastShapeId,i)),h&&(j=b.drawLine(d[0],this.canvasTop,d[0],this.canvasTop+this.canvasHeight,h),this.highlightLineId=j.id,b.insertAfterShape(this.lastShapeId,j))
    },
removeHighlight:function(){
    var a=this.target;
    this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)
    },
scanValues:function(){
    var a=this.values,c=a.length,d=this.xvalues,e=this.yvalues,f=this.yminmax,g,h,i,j,k;
    for(g=0;g<c;g++)h=a[g],i=typeof a[g]=="string",j=typeof a[g]=="object"&&a[g]instanceof Array,k=i&&a[g].split(":"),i&&k.length===2?(d.push(Number(k[0])),e.push(Number(k[1])),f.push(Number(k[1]))):j?(d.push(h[0]),e.push(h[1]),f.push(h[1])):(d.push(g),a[g]===null||a[g]==="null"?e.push(null):(e.push(Number(h)),f.push(Number(h))));
    this.options.get("xvalues")&&(d=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,f),this.miny=this.minyorg=b.min.apply(b,f),this.maxx=b.max.apply(b,d),this.minx=b.min.apply(b,d),this.xvalues=d,this.yvalues=e,this.yminmax=f
    },
processRangeOptions:function(){
    var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");
    b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))
    },
drawNormalRange:function(a,d,e,f,g){
    var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);
    this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()
    },
render:function(){
    var a=this.options,e=this.target,f=this.canvasWidth,g=this.canvasHeight,h=this.vertices,i=a.get("spotRadius"),j=this.regionMap,k,l,m,n,o,p,q,r,s,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K;
    if(!x._super.render.call(this))return;
    this.scanValues(),this.processRangeOptions(),I=this.xvalues,J=this.yvalues;
    if(!this.yminmax.length||this.yvalues.length<2)return;
    n=o=0,k=this.maxx-this.minx===0?1:this.maxx-this.minx,l=this.maxy-this.miny===0?1:this.maxy-this.miny,m=this.yvalues.length-1,i&&(f<i*4||g<i*4)&&(i=0);
    if(i){
        G=a.get("highlightSpotColor")&&!a.get("disableInteraction");
        if(G||a.get("minSpotColor")||a.get("spotColor")&&J[m]===this.miny)g-=b.ceil(i);
        if(G||a.get("maxSpotColor")||a.get("spotColor")&&J[m]===this.maxy)g-=b.ceil(i),n+=b.ceil(i);
        if(G||(a.get("minSpotColor")||a.get("maxSpotColor"))&&(J[0]===this.miny||J[0]===this.maxy))o+=b.ceil(i),f-=b.ceil(i);
        if(G||a.get("spotColor")||a.get("minSpotColor")||a.get("maxSpotColor")&&(J[m]===this.miny||J[m]===this.maxy))f-=b.ceil(i)
            }
            g--,a.get("normalRangeMin")!==c&&!a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),q=[],r=[q],z=A=null,B=J.length;
    for(K=0;K<B;K++)s=I[K],v=I[K+1],u=J[K],w=o+b.round((s-this.minx)*(f/k)),y=K<B-1?o+b.round((v-this.minx)*(f/k)):f,A=w+(y-w)/2,j[K]=[z||0,A,K],z=A,u===null?K&&(J[K-1]!==null&&(q=[],r.push(q)),h.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),q.length||q.push([w,n+g]),p=[w,n+b.round(g-g*((u-this.miny)/l))],q.push(p),h.push(p));
    C=[],D=[],E=r.length;
    for(K=0;K<E;K++)q=r[K],q.length&&(a.get("fillColor")&&(q.push([q[q.length-1][0],n+g]),D.push(q.slice(0)),q.pop()),q.length>2&&(q[0]=[q[0][0],q[1][1]]),C.push(q));
    E=D.length;
    for(K=0;K<E;K++)e.drawShape(D[K],a.get("fillColor"),a.get("fillColor")).append();
    a.get("normalRangeMin")!==c&&a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),E=C.length;
    for(K=0;K<E;K++)e.drawShape(C[K],a.get("lineColor"),c,a.get("lineWidth")).append();
    if(i&&a.get("valueSpots")){
        F=a.get("valueSpots"),F.get===c&&(F=new t(F));
        for(K=0;K<B;K++)H=F.get(J[K]),H&&e.drawCircle(o+b.round((I[K]-this.minx)*(f/k)),n+b.round(g-g*((J[K]-this.miny)/l)),i,c,H).append()
            }
            i&&a.get("spotColor")&&J[m]!==null&&e.drawCircle(o+b.round((I[I.length-1]-this.minx)*(f/k)),n+b.round(g-g*((J[m]-this.miny)/l)),i,c,a.get("spotColor")).append(),this.maxy!==this.minyorg&&(i&&a.get("minSpotColor")&&(s=I[d.inArray(this.minyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.minyorg-this.miny)/l)),i,c,a.get("minSpotColor")).append()),i&&a.get("maxSpotColor")&&(s=I[d.inArray(this.maxyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.maxyorg-this.miny)/l)),i,c,a.get("maxSpotColor")).append())),this.lastShapeId=e.getLastShapeId(),this.canvasTop=n,e.render()
    }
}),d.fn.sparkline.bar=y=g(d.fn.sparkline._base,w,{
    type:"bar",
    init:function(a,e,f,g,h){
        var j=parseInt(f.get("barWidth"),10),n=parseInt(f.get("barSpacing"),10),o=f.get("chartRangeMin"),p=f.get("chartRangeMax"),q=f.get("chartRangeClip"),r=Infinity,s=-Infinity,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;
        y._super.init.call(this,a,e,f,g,h);
        for(A=0,B=e.length;A<B;A++){
            O=e[A],u=typeof O=="string"&&O.indexOf(":")>-1;
            if(u||d.isArray(O))J=!0,u&&(O=e[A]=l(O.split(":"))),O=m(O,null),v=b.min.apply(b,O),w=b.max.apply(b,O),v<r&&(r=v),w>s&&(s=w)
                }
                this.stacked=J,this.regionShapes={},this.barWidth=j,this.barSpacing=n,this.totalBarWidth=j+n,this.width=g=e.length*j+(e.length-1)*n,this.initTarget(),q&&(H=o===c?-Infinity:o,I=p===c?Infinity:p),z=[],x=J?[]:z;
        var S=[],T=[];
        for(A=0,B=e.length;A<B;A++)if(J){
            K=e[A],e[A]=N=[],S[A]=0,x[A]=T[A]=0;
            for(L=0,M=K.length;L<M;L++)O=N[L]=q?i(K[L],H,I):K[L],O!==null&&(O>0&&(S[A]+=O),r<0&&s>0?O<0?T[A]+=b.abs(O):x[A]+=O:x[A]+=b.abs(O-(O<0?s:r)),z.push(O))
                }else O=q?i(e[A],H,I):e[A],O=e[A]=k(O),O!==null&&z.push(O);this.max=G=b.max.apply(b,z),this.min=F=b.min.apply(b,z),this.stackMax=s=J?b.max.apply(b,S):G,this.stackMin=r=J?b.min.apply(b,z):F,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<F)&&(F=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>G)&&(G=f.get("chartRangeMax")),this.zeroAxis=D=f.get("zeroAxis",!0),F<=0&&G>=0&&D?E=0:D==0?E=F:F>0?E=F:E=G,this.xaxisOffset=E,C=J?b.max.apply(b,x)+b.max.apply(b,T):G-F,this.canvasHeightEf=D&&F<0?this.canvasHeight-2:this.canvasHeight-1,F<E?(Q=J&&G>=0?s:G,P=(Q-E)/C*this.canvasHeight,P!==b.ceil(P)&&(this.canvasHeightEf-=2,P=b.ceil(P))):P=this.canvasHeight,this.yoffset=P,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.range=C
        },
    getRegion:function(a,d,e){
        var f=b.floor(d/this.totalBarWidth);
        return f<0||f>=this.values.length?c:f
        },
    getCurrentRegionFields:function(){
        var a=this.currentRegion,b=r(this.values[a]),c=[],d,e;
        for(e=b.length;e--;)d=b[e],c.push({
            isNull:d===null,
            value:d,
            color:this.calcColor(e,d,a),
            offset:a
        });
        return c
        },
    calcColor:function(a,b,e){
        var f=this.colorMapByIndex,g=this.colorMapByValue,h=this.options,i,j;
        return this.stacked?i=h.get("stackedBarColor"):i=b<0?h.get("negBarColor"):h.get("barColor"),b===0&&h.get("zeroColor")!==c&&(i=h.get("zeroColor")),g&&(j=g.get(b))?i=j:f&&f.length>e&&(i=f[e]),d.isArray(i)?i[a%i.length]:i
        },
    renderRegion:function(a,e){
        var f=this.values[a],g=this.options,h=this.xaxisOffset,i=[],j=this.range,k=this.stacked,l=this.target,m=a*this.totalBarWidth,n=this.canvasHeightEf,p=this.yoffset,q,r,s,t,u,v,w,x,y,z;
        f=d.isArray(f)?f:[f],w=f.length,x=f[0],t=o(null,f),z=o(h,f,!0);
        if(t)return g.get("nullColor")?(s=e?g.get("nullColor"):this.calcHighlightColor(g.get("nullColor"),g),q=p>0?p-1:p,l.drawRect(m,q,this.barWidth-1,0,s,s)):c;
        u=p;
        for(v=0;v<w;v++){
            x=f[v];
            if(k&&x===h){
                if(!z||y)continue;
                y=!0
                }
                j>0?r=b.floor(n*(b.abs(x-h)/j))+1:r=1,x<h||x===h&&p===0?(q=u,u+=r):(q=p-r,p-=r),s=this.calcColor(v,x,a),e&&(s=this.calcHighlightColor(s,g)),i.push(l.drawRect(m,q,this.barWidth-1,r-1,s,s))
            }
            return i.length===1?i[0]:i
        }
    }),d.fn.sparkline.tristate=z=g(d.fn.sparkline._base,w,{
    type:"tristate",
    init:function(a,b,e,f,g){
        var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);
        z._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.initTarget()
        },
    getRegion:function(a,c,d){
        return b.floor(c/this.totalBarWidth)
        },
    getCurrentRegionFields:function(){
        var a=this.currentRegion;
        return{
            isNull:this.values[a]===c,
            value:this.values[a],
            color:this.calcColor(this.values[a],a),
            offset:a
        }
    },
calcColor:function(a,b){
    var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;
    return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g
    },
renderRegion:function(a,c){
    var d=this.values,e=this.options,f=this.target,g,h,i,j,k,l;
    g=f.pixelHeight,i=b.round(g/2),j=a*this.totalBarWidth,d[a]<0?(k=i,h=i-1):d[a]>0?(k=0,h=i-1):(k=i-1,h=2),l=this.calcColor(d[a],a);
    if(l===null)return;
    return c&&(l=this.calcHighlightColor(l,e)),f.drawRect(j,k,this.barWidth-1,h-1,l,l)
    }
}),d.fn.sparkline.discrete=A=g(d.fn.sparkline._base,w,{
    type:"discrete",
    init:function(a,e,f,g,h){
        A._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=f.get("width")==="auto"?e.length*2:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=f.get("lineHeight")==="auto"?b.round(this.canvasHeight*.3):f.get("lineHeight"))
        },
    getRegion:function(a,c,d){
        return b.floor(c/this.itemWidth)
        },
    getCurrentRegionFields:function(){
        var a=this.currentRegion;
        return{
            isNull:this.values[a]===c,
            value:this.values[a],
            offset:a
        }
    },
renderRegion:function(a,c){
    var d=this.values,e=this.options,f=this.min,g=this.max,h=this.range,j=this.interval,k=this.target,l=this.canvasHeight,m=this.lineHeight,n=l-m,o,p,q,r;
    return p=i(d[a],f,g),r=a*j,o=b.round(n-n*((p-f)/h)),q=e.get("thresholdColor")&&p<e.get("thresholdValue")?e.get("thresholdColor"):e.get("lineColor"),c&&(q=this.calcHighlightColor(q,e)),k.drawLine(r,o,r,o+m,q)
    }
}),d.fn.sparkline.bullet=B=g(d.fn.sparkline._base,{
    type:"bullet",
    init:function(a,d,e,f,g){
        var h,i,j;
        B._super.init.call(this,a,d,e,f,g),this.values=d=l(d),j=d.slice(),j[0]=j[0]===null?j[2]:j[0],j[1]=d[1]===null?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),e.get("base")===c?h=h<0?h:0:h=e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=e.get("width")==="auto"?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()
        },
    getRegion:function(a,b,d){
        var e=this.target.getShapeAt(a,b,d);
        return e!==c&&this.shapes[e]!==c?this.shapes[e]:c
        },
    getCurrentRegionFields:function(){
        var a=this.currentRegion;
        return{
            fieldkey:a.substr(0,1),
            value:this.values[a.substr(1)],
            region:a
        }
    },
changeHighlight:function(a){
    var b=this.currentRegion,c=this.valueShapes[b],d;
    delete this.shapes[c];
    switch(b.substr(0,1)){
        case"r":
            d=this.renderRange(b.substr(1),a);
            break;
        case"p":
            d=this.renderPerformance(a);
            break;
        case"t":
            d=this.renderTarget(a)
            }
            this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)
    },
renderRange:function(a,c){
    var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];
    return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)
    },
renderPerformance:function(a){
    var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");
    return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(this.canvasHeight*.3),d-1,b.round(this.canvasHeight*.4)-1,e,e)
    },
renderTarget:function(a){
    var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(this.canvasHeight*.1),f=this.canvasHeight-e*2,g=this.options.get("targetColor");
    return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)
    },
render:function(){
    var a=this.values.length,b=this.target,c,d;
    if(!B._super.render.call(this))return;
    for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;
    this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()
    }
}),d.fn.sparkline.pie=C=g(d.fn.sparkline._base,{
    type:"pie",
    init:function(a,c,e,f,g){
        var h=0,i;
        C._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),e.get("width")==="auto"&&(this.width=this.height);
        if(c.length>0)for(i=c.length;i--;)h+=c[i];
        this.total=h,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)
        },
    getRegion:function(a,b,d){
        var e=this.target.getShapeAt(a,b,d);
        return e!==c&&this.shapes[e]!==c?this.shapes[e]:c
        },
    getCurrentRegionFields:function(){
        var a=this.currentRegion;
        return{
            isNull:this.values[a]===c,
            value:this.values[a],
            percent:this.values[a]/this.total*100,
            color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],
            offset:a
        }
    },
changeHighlight:function(a){
    var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];
    delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b
    },
renderSlice:function(a,d){
    var e=this.target,f=this.options,g=this.radius,h=f.get("borderWidth"),i=f.get("offset"),j=2*b.PI,k=this.values,l=this.total,m=i?2*b.PI*(i/360):0,n,o,p,q,r;
    q=k.length;
    for(p=0;p<q;p++){
        n=m,o=m,l>0&&(o=m+j*(k[p]/l));
        if(a===p)return r=f.get("sliceColors")[p%f.get("sliceColors").length],d&&(r=this.calcHighlightColor(r,f)),e.drawPieSlice(g,g,g-h,n,o,c,r);
        m=o
        }
    },
render:function(){
    var a=this.target,d=this.values,e=this.options,f=this.radius,g=e.get("borderWidth"),h,i;
    if(!C._super.render.call(this))return;
    g&&a.drawCircle(f,f,b.floor(f-g/2),e.get("borderColor"),c,g).append();
    for(i=d.length;i--;)d[i]&&(h=this.renderSlice(i).append(),this.valueShapes[i]=h.id,this.shapes[h.id]=i);
    a.render()
    }
}),d.fn.sparkline.box=D=g(d.fn.sparkline._base,{
    type:"box",
    init:function(a,b,c,e,f){
        D._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=c.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)
        },
    getRegion:function(){
        return 1
        },
    getCurrentRegionFields:function(){
        var a=[{
            field:"lq",
            value:this.quartiles[0]
            },{
            field:"med",
            value:this.quartiles
            [1]
            },{
            field:"uq",
            value:this.quartiles[2]
            }];
        return this.loutlier!==c&&a.push({
            field:"lo",
            value:this.loutlier
            }),this.routlier!==c&&a.push({
            field:"ro",
            value:this.routlier
            }),this.lwhisker!==c&&a.push({
            field:"lw",
            value:this.lwhisker
            }),this.rwhisker!==c&&a.push({
            field:"rw",
            value:this.rwhisker
            }),a
        },
    render:function(){
        var a=this.target,d=this.values,e=d.length,f=this.options,g=this.canvasWidth,h=this.canvasHeight,i=f.get("chartRangeMin")===c?b.min.apply(b,d):f.get("chartRangeMin"),k=f.get("chartRangeMax")===c?b.max.apply(b,d):f.get("chartRangeMax"),l=0,m,n,o,p,q,r,s,t,u,v,w;
        if(!D._super.render.call(this))return;
        if(f.get("raw"))f.get("showOutliers")&&d.length>5?(n=d[0],m=d[1],p=d[2],q=d[3],r=d[4],s=d[5],t=d[6]):(m=d[0],p=d[1],q=d[2],r=d[3],s=d[4]);
        else{
            d.sort(function(a,b){
                return a-b
                }),p=j(d,1),q=j(d,2),r=j(d,3),o=r-p;
            if(f.get("showOutliers")){
                m=s=c;
                for(u=0;u<e;u++)m===c&&d[u]>p-o*f.get("outlierIQR")&&(m=d[u]),d[u]<r+o*f.get("outlierIQR")&&(s=d[u]);
                n=d[0],t=d[e-1]
                }else m=d[0],s=d[e-1]
                }
                this.quartiles=[p,q,r],this.lwhisker=m,this.rwhisker=s,this.loutlier=n,this.routlier=t,w=g/(k-i+1),f.get("showOutliers")&&(l=b.ceil(f.get("spotRadius")),g-=2*b.ceil(f.get("spotRadius")),w=g/(k-i+1),n<m&&a.drawCircle((n-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append(),t>s&&a.drawCircle((t-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append()),a.drawRect(b.round((p-i)*w+l),b.round(h*.1),b.round((r-p)*w),b.round(h*.8),f.get("boxLineColor"),f.get("boxFillColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/2),b.round((p-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/4),b.round((m-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/2),b.round((r-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/4),b.round((s-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((q-i)*w+l),b.round(h*.1),b.round((q-i)*w+l),b.round(h*.9),f.get("medianColor")).append(),f.get("target")&&(v=b.ceil(f.get("spotRadius")),a.drawLine(b.round((f.get("target")-i)*w+l),b.round(h/2-v),b.round((f.get("target")-i)*w+l),b.round(h/2+v),f.get("targetColor")).append(),a.drawLine(b.round((f.get("target")-i)*w+l-v),b.round(h/2),b.round((f.get("target")-i)*w+l+v),b.round(h/2),f.get("targetColor")).append()),a.render()
        }
    }),G=g({
    init:function(a,b,c,d){
        this.target=a,this.id=b,this.type=c,this.args=d
        },
    append:function(){
        return this.target.appendShape(this),this
        }
    }),H=g({
    _pxregex:/(\d+)(px)?\s*$/i,
    init:function(a,b,c){
        if(!a)return;
        this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this)
        },
    drawLine:function(a,b,c,d,e,f){
        return this.drawShape([[a,b],[c,d]],e,f)
        },
    drawShape:function(a,b,c,d){
        return this._genShape("Shape",[a,b,c,d])
        },
    drawCircle:function(a,b,c,d,e,f){
        return this._genShape("Circle",[a,b,c,d,e,f])
        },
    drawPieSlice:function(a,b,c,d,e,f,g){
        return this._genShape("PieSlice",[a,b,c,d,e,f,g])
        },
    drawRect:function(a,b,c,d,e,f){
        return this._genShape("Rect",[a,b,c,d,e,f])
        },
    getElement:function(){
        return this.canvas
        },
    getLastShapeId:function(){
        return this.lastShapeId
        },
    reset:function(){
        alert("reset not implemented")
        },
    _insert:function(a,b){
        d(b).html(a)
        },
    _calculatePixelDims:function(a,b,c){
        var e;
        e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()
        },
    _genShape:function(a,b){
        var c=L++;
        return b.unshift(c),new G(this,c,a,b)
        },
    appendShape:function(a){
        alert("appendShape not implemented")
        },
    replaceWithShape:function(a,b){
        alert("replaceWithShape not implemented")
        },
    insertAfterShape:function(a,b){
        alert("insertAfterShape not implemented")
        },
    removeShapeId:function(a){
        alert("removeShapeId not implemented")
        },
    getShapeAt:function(a,b,c){
        alert("getShapeAt not implemented")
        },
    render:function(){
        alert("render not implemented")
        }
    }),I=g(H,{
    init:function(b,e,f,g){
        I._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({
            display:"inline-block",
            width:b,
            height:e,
            verticalAlign:"top"
        }),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({
            width:this.pixelWidth,
            height:this.pixelHeight
            })
        },
    _getContext:function(a,b,d){
        var e=this.canvas.getContext("2d");
        return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e
        },
    reset:function(){
        var a=this._getContext();
        a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c
        },
    _drawShape:function(a,b,d,e,f){
        var g=this._getContext(d,e,f),h,i;
        g.beginPath(),g.moveTo(b[0][0]+.5,b[0][1]+.5);
        for(h=1,i=b.length;h<i;h++)g.lineTo(b[h][0]+.5,b[h][1]+.5);
        d!==c&&g.stroke(),e!==c&&g.fill(),this.targetX!==c&&this.targetY!==c&&g.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)
        },
    _drawCircle:function(a,d,e,f,g,h,i){
        var j=this._getContext(g,h,i);
        j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()
        },
    _drawPieSlice:function(a,b,d,e,f,g,h,i){
        var j=this._getContext(h,i);
        j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)
        },
    _drawRect:function(a,b,c,d,e,f,g){
        return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)
        },
    appendShape:function(a){
        return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id
        },
    replaceWithShape:function(a,b){
        var c=this.shapeseq,d;
        this.shapes[b.id]=b;
        for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);
        delete this.shapes[a]
    },
    replaceWithShapes:function(a,b){
        var c=this.shapeseq,d={},e,f,g;
        for(f=a.length;f--;)d[a[f]]=!0;
        for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);
        for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]
            },
    insertAfterShape:function(a,b){
        var c=this.shapeseq,d;
        for(d=c.length;d--;)if(c[d]===a){
            c.splice(d+1,0,b.id),this.shapes[b.id]=b;
            return
        }
        },
removeShapeId:function(a){
    var b=this.shapeseq,c;
    for(c=b.length;c--;)if(b[c]===a){
        b.splice(c,1);
        break
    }
    delete this.shapes[a]
},
getShapeAt:function(a,b,c){
    return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId
    },
render:function(){
    var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;
    d.clearRect(0,0,this.pixelWidth,this.pixelHeight);
    for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);
    this.interact||(this.shapes={},this.shapeseq=[])
    }
}),J=g(H,{
    init:function(b,c,e){
        var f;
        J._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({
            display:"inline-block",
            position:"relative",
            overflow:"hidden",
            width:b,
            height:c,
            margin:"0px",
            padding:"0px",
            verticalAlign:"top"
        }),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""
        },
    _drawShape:function(a,b,d,e,f){
        var g=[],h,i,j,k,l,m,n;
        for(n=0,m=b.length;n<m;n++)g[n]=""+b[n][0]+","+b[n][1];
        return h=g.splice(0,1),f=f===c?1:f,i=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',j=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',k=g[0]===g[g.length-1]?"x ":"",l='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+i+j+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+h+" l "+g.join(", ")+" "+k+'e">'+" </v:shape>",l
        },
    _drawCircle:function(a,b,d,e,f,g,h){
        var i,j,k;
        return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+e*2+"px; height:"+e*2+'px"></v:oval>',k
        },
    _drawPieSlice:function(a,d,e,f,g,h,i,j){
        var k,l,m,n,o,p,q,r;
        if(g===h)return"";
        h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f);
        if(l===n&&m===o){
            if(h-g<b.PI)return"";
            l=n=d+f,m=o=e
            }
            return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+d+","+e+" wa "+k.join(", ")+' x e">'+" </v:shape>",r)
        },
    _drawRect:function(a,b,c,d,e,f,g){
        return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)
        },
    reset:function(){
        this.group.innerHTML=""
        },
    appendShape:function(a){
        var b=this["_draw"+a.type].apply(this,a.args);
        return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id
        },
    replaceWithShape:function(a,b){
        var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);
        c[0].outerHTML=e
        },
    replaceWithShapes:function(a,b){
        var c=d("#jqsshape"+a[0]),e="",f=b.length,g;
        for(g=0;g<f;g++)e+=this["_draw"+b[g].type].apply(this,b[g].args);
        c[0].outerHTML=e;
        for(g=1;g<a.length;g++)d("#jqsshape"+a[g]).remove()
            },
    insertAfterShape:function(a,b){
        var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);
        c[0].insertAdjacentHTML("afterEnd",e)
        },
    removeShapeId:function(a){
        var b=d("#jqsshape"+a);
        this.group.removeChild(b[0])
        },
    getShapeAt:function(a,b,c){
        var d=a.id.substr(8);
        return d
        },
    render:function(){
        this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)
        }
    })
})
})(document,Math);
(function($){
    var Combodate=function(element,options){
        this.$element=$(element);
        if(!this.$element.is('input')){
            $.error('Combodate should be applied to INPUT element');
            return;
        }
        this.options=$.extend({},$.fn.combodate.defaults,options,this.$element.data());
        this.init();
    };
    
    Combodate.prototype={
        constructor:Combodate,
        init:function(){
            this.map={
                day:['D','date'],
                month:['M','month'],
                year:['Y','year'],
                hour:['[Hh]','hours'],
                minute:['m','minutes'],
                second:['s','seconds'],
                ampm:['[Aa]','']
                };
                
            this.$widget=$('<span class="combodate"></span>').html(this.getTemplate());
            this.initCombos();
            this.$widget.on('change','select',$.proxy(function(){
                this.$element.val(this.getValue());
            },this));
            this.$widget.find('select').css('width','auto');
            this.$element.hide().after(this.$widget);
            this.setValue(this.$element.val()||this.options.value);
        },
        getTemplate:function(){
            var tpl=this.options.template;
            $.each(this.map,function(k,v){
                v=v[0];
                var r=new RegExp(v+'+'),token=v.length>1?v.substring(1,2):v;
                tpl=tpl.replace(r,'{'+token+'}');
            });
            tpl=tpl.replace(/ /g,'&nbsp;');
            $.each(this.map,function(k,v){
                v=v[0];
                var token=v.length>1?v.substring(1,2):v;
                tpl=tpl.replace('{'+token+'}','<select class="'+k+'"></select>');
            });
            return tpl;
        },
        initCombos:function(){
            var that=this;
            $.each(this.map,function(k,v){
                var $c=that.$widget.find('.'+k),f,items;
                if($c.length){
                    that['$'+k]=$c;
                    f='fill'+k.charAt(0).toUpperCase()+k.slice(1);
                    items=that[f]();
                    that['$'+k].html(that.renderItems(items));
                }
            });
    },
    initItems:function(key){
        var values=[],relTime;
        if(this.options.firstItem==='name'){
            relTime=moment.relativeTime||moment.langData()._relativeTime;
            var header=typeof relTime[key]==='function'?relTime[key](1,true,key,false):relTime[key];
            header=header.split(' ').reverse()[0];
            values.push(['',header]);
        }else if(this.options.firstItem==='empty'){
            values.push(['','']);
        }
        return values;
    },
    renderItems:function(items){
        var str=[];
        for(var i=0;i<items.length;i++){
            str.push('<option value="'+items[i][0]+'">'+items[i][1]+'</option>');
        }
        return str.join("\n");
    },
    fillDay:function(){
        var items=this.initItems('d'),name,i,twoDigit=this.options.template.indexOf('DD')!==-1;
        for(i=1;i<=31;i++){
            name=twoDigit?this.leadZero(i):i;
            items.push([i,name]);
        }
        return items;
    },
    fillMonth:function(){
        var items=this.initItems('M'),name,i,longNames=this.options.template.indexOf('MMMM')!==-1,shortNames=this.options.template.indexOf('MMM')!==-1,twoDigit=this.options.template.indexOf('MM')!==-1;
        for(i=0;i<=11;i++){
            if(longNames){
                name=moment().date(1).month(i).format('MMMM');
            }else if(shortNames){
                name=moment().date(1).month(i).format('MMM');
            }else if(twoDigit){
                name=this.leadZero(i+1);
            }else{
                name=i+1;
            }
            items.push([i,name]);
        }
        return items;
    },
    fillYear:function(){
        var items=[],name,i,longNames=this.options.template.indexOf('YYYY')!==-1;
        for(i=this.options.maxYear;i>=this.options.minYear;i--){
            name=longNames?i:(i+'').substring(2);
            items[this.options.yearDescending?'push':'unshift']([i,name]);
        }
        items=this.initItems('y').concat(items);
        return items;
    },
    fillHour:function(){
        var items=this.initItems('h'),name,i,h12=this.options.template.indexOf('h')!==-1,h24=this.options.template.indexOf('H')!==-1,twoDigit=this.options.template.toLowerCase().indexOf('hh')!==-1,min=h12?1:0,max=h12?12:23;
        for(i=min;i<=max;i++){
            name=twoDigit?this.leadZero(i):i;
            items.push([i,name]);
        }
        return items;
    },
    fillMinute:function(){
        var items=this.initItems('m'),name,i,twoDigit=this.options.template.indexOf('mm')!==-1;
        for(i=0;i<=59;i+=this.options.minuteStep){
            name=twoDigit?this.leadZero(i):i;
            items.push([i,name]);
        }
        return items;
    },
    fillSecond:function(){
        var items=this.initItems('s'),name,i,twoDigit=this.options.template.indexOf('ss')!==-1;
        for(i=0;i<=59;i+=this.options.secondStep){
            name=twoDigit?this.leadZero(i):i;
            items.push([i,name]);
        }
        return items;
    },
    fillAmpm:function(){
        var ampmL=this.options.template.indexOf('a')!==-1,ampmU=this.options.template.indexOf('A')!==-1,items=[['am',ampmL?'am':'AM'],['pm',ampmL?'pm':'PM']];
        return items;
    },
    getValue:function(format){
        var dt,values={},that=this,notSelected=false;
        $.each(this.map,function(k,v){
            if(k==='ampm'){
                return;
            }
            var def=k==='day'?1:0;
            values[k]=that['$'+k]?parseInt(that['$'+k].val(),10):def;
            if(isNaN(values[k])){
                notSelected=true;
                return false;
            }
        });
    if(notSelected){
        return'';
    }
    if(this.$ampm){
        if(values.hour===12){
            values.hour=this.$ampm.val()==='am'?0:12;
        }else{
            values.hour=this.$ampm.val()==='am'?values.hour:values.hour+12;
        }
    }
dt=moment([values.year,values.month,values.day,values.hour,values.minute,values.second]);
    this.highlight(dt);
    format=format===undefined?this.options.format:format;
    if(format===null){
    return dt.isValid()?dt:null;
}else{
    return dt.isValid()?dt.format(format):'';
}
},
setValue:function(value){
    if(!value){
        return;
    }
    var dt=typeof value==='string'?moment(value,this.options.format):moment(value),that=this,values={};
    
    function getNearest($select,value){
        var delta={};
        
        $select.children('option').each(function(i,opt){
            var optValue=$(opt).attr('value'),distance;
            if(optValue==='')return;
            distance=Math.abs(optValue-value);
            if(typeof delta.distance==='undefined'||distance<delta.distance){
                delta={
                    value:optValue,
                    distance:distance
                };
            
        }
        });
return delta.value;
}
if(dt.isValid()){
    $.each(this.map,function(k,v){
        if(k==='ampm'){
            return;
        }
        values[k]=dt[v[1]]();
    });
    if(this.$ampm){
        if(values.hour>=12){
            values.ampm='pm';
            if(values.hour>12){
                values.hour-=12;
            }
        }else{
        values.ampm='am';
        if(values.hour===0){
            values.hour=12;
        }
    }
}
$.each(values,function(k,v){
    if(that['$'+k]){
        if(k==='minute'&&that.options.minuteStep>1&&that.options.roundTime){
            v=getNearest(that['$'+k],v);
        }
        if(k==='second'&&that.options.secondStep>1&&that.options.roundTime){
            v=getNearest(that['$'+k],v);
        }
        that['$'+k].val(v);
    }
});
this.$element.val(dt.format(this.options.format));
}
},
highlight:function(dt){
    if(!dt.isValid()){
        if(this.options.errorClass){
            this.$widget.addClass(this.options.errorClass);
        }else{
            if(!this.borderColor){
                this.borderColor=this.$widget.find('select').css('border-color');
            }
            this.$widget.find('select').css('border-color','red');
        }
    }else{
    if(this.options.errorClass){
        this.$widget.removeClass(this.options.errorClass);
    }else{
        this.$widget.find('select').css('border-color',this.borderColor);
    }
}
},
leadZero:function(v){
    return v<=9?'0'+v:v;
},
destroy:function(){
    this.$widget.remove();
    this.$element.removeData('combodate').show();
}
};

$.fn.combodate=function(option){
    var d,args=Array.apply(null,arguments);
    args.shift();
    if(option==='getValue'&&this.length&&(d=this.eq(0).data('combodate'))){
        return d.getValue.apply(d,args);
    }
    return this.each(function(){
        var $this=$(this),data=$this.data('combodate'),options=typeof option=='object'&&option;
        if(!data){
            $this.data('combodate',(data=new Combodate(this,options)));
        }
        if(typeof option=='string'&&typeof data[option]=='function'){
            data[option].apply(data,args);
        }
    });
};

$.fn.combodate.defaults={
    format:'DD-MM-YYYY HH:mm',
    template:'D / MMM / YYYY   H : mm',
    value:null,
    minYear:1970,
    maxYear:2015,
    yearDescending:true,
    minuteStep:5,
    secondStep:1,
    firstItem:'empty',
    errorClass:null,
    roundTime:true
};

}(window.jQuery));
(function(X,l,n){
    var L=function(h){
        var j=function(e){
            function o(a,b){
                var c=j.defaults.columns,d=a.aoColumns.length,c=h.extend({},j.models.oColumn,c,{
                    sSortingClass:a.oClasses.sSortable,
                    sSortingClassJUI:a.oClasses.sSortJUI,
                    nTh:b?b:l.createElement("th"),
                    sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",
                    aDataSort:c.aDataSort?c.aDataSort:[d],
                    mData:c.mData?c.oDefaults:d
                    });
                a.aoColumns.push(c);
                if(a.aoPreSearchCols[d]===n||null===a.aoPreSearchCols[d])a.aoPreSearchCols[d]=h.extend({},j.models.oSearch);
                else if(c=a.aoPreSearchCols[d],c.bRegex===n&&(c.bRegex=!0),c.bSmart===n&&(c.bSmart=!0),c.bCaseInsensitive===n)c.bCaseInsensitive=!0;
                m(a,d,null)
                }
                function m(a,b,c){
                var d=a.aoColumns[b];
                c!==n&&null!==c&&(c.mDataProp&&!c.mData&&(c.mData=c.mDataProp),c.sType!==n&&(d.sType=c.sType,d._bAutoType=!1),h.extend(d,c),p(d,c,"sWidth","sWidthOrig"),c.iDataSort!==n&&(d.aDataSort=[c.iDataSort]),p(d,c,"aDataSort"));
                var i=d.mRender?Q(d.mRender):null,f=Q(d.mData);
                d.fnGetData=function(a,b){
                    var c=f(a,b);
                    return d.mRender&&b&&""!==b?i(c,b,a):c
                    };
                    
                d.fnSetData=L(d.mData);
                a.oFeatures.bSort||(d.bSortable=!1);
                !d.bSortable||-1==h.inArray("asc",d.asSorting)&&-1==h.inArray("desc",d.asSorting)?(d.sSortingClass=a.oClasses.sSortableNone,d.sSortingClassJUI=""):-1==h.inArray("asc",d.asSorting)&&-1==h.inArray("desc",d.asSorting)?(d.sSortingClass=a.oClasses.sSortable,d.sSortingClassJUI=a.oClasses.sSortJUI):-1!=h.inArray("asc",d.asSorting)&&-1==h.inArray("desc",d.asSorting)?(d.sSortingClass=a.oClasses.sSortableAsc,d.sSortingClassJUI=a.oClasses.sSortJUIAscAllowed):-1==h.inArray("asc",d.asSorting)&&-1!=h.inArray("desc",d.asSorting)&&(d.sSortingClass=a.oClasses.sSortableDesc,d.sSortingClassJUI=a.oClasses.sSortJUIDescAllowed)
                }
                function k(a){
                if(!1===a.oFeatures.bAutoWidth)return!1;
                da(a);
                for(var b=0,c=a.aoColumns.length;b<c;b++)a.aoColumns[b].nTh.style.width=a.aoColumns[b].sWidth
                    }
                    function G(a,b){
                var c=r(a,"bVisible");
                return"number"===typeof c[b]?c[b]:null
                }
                function R(a,b){
                var c=r(a,"bVisible"),c=h.inArray(b,c);
                return-1!==c?c:null
                }
                function t(a){
                return r(a,"bVisible").length
                }
            function r(a,b){
                var c=[];
                h.map(a.aoColumns,function(a,i){
                    a[b]&&c.push(i)
                    });
                return c
                }
                function B(a){
                for(var b=j.ext.aTypes,c=b.length,d=0;d<c;d++){
                    var i=b[d](a);
                    if(null!==i)return i
                        }
                        return"string"
                }
                function u(a,b){
                for(var c=b.split(","),d=[],i=0,f=a.aoColumns.length;i<f;i++)for(var g=0;g<f;g++)if(a.aoColumns[i].sName==c[g]){
                    d.push(g);
                    break
                }
                return d
                }
                function M(a){
                for(var b="",c=0,d=a.aoColumns.length;c<d;c++)b+=a.aoColumns[c].sName+",";
                return b.length==d?"":b.slice(0,-1)
                }
                function ta(a,b,c,d){
                var i,f,g,e,w;
                if(b)for(i=b.length-1;0<=i;i--){
                    var j=b[i].aTargets;
                    h.isArray(j)||D(a,1,"aTargets must be an array of targets, not a "+typeof j);
                    f=0;
                    for(g=j.length;f<g;f++)if("number"===typeof j[f]&&0<=j[f]){
                        for(;a.aoColumns.length<=j[f];)o(a);
                        d(j[f],b[i])
                        }else if("number"===typeof j[f]&&0>j[f])d(a.aoColumns.length+j[f],b[i]);
                        else if("string"===typeof j[f]){
                        e=0;
                        for(w=a.aoColumns.length;e<w;e++)("_all"==j[f]||h(a.aoColumns[e].nTh).hasClass(j[f]))&&d(e,b[i])
                            }
                        }
                    if(c){
                i=0;
                for(a=c.length;i<a;i++)d(i,c[i])
                    }
                }
        function H(a,b){
        var c;
        c=h.isArray(b)?b.slice():h.extend(!0,{},b);
        var d=a.aoData.length,i=h.extend(!0,{},j.models.oRow);
        i._aData=c;
        a.aoData.push(i);
        for(var f,i=0,g=a.aoColumns.length;i<g;i++)c=a.aoColumns[i],"function"===typeof c.fnRender&&c.bUseRendered&&null!==c.mData?F(a,d,i,S(a,d,i)):F(a,d,i,v(a,d,i)),c._bAutoType&&"string"!=c.sType&&(f=v(a,d,i,"type"),null!==f&&""!==f&&(f=B(f),null===c.sType?c.sType=f:c.sType!=f&&"html"!=c.sType&&(c.sType="string")));
        a.aiDisplayMaster.push(d);
        a.oFeatures.bDeferRender||ea(a,d);
        return d
        }
        function ua(a){
        var b,c,d,i,f,g,e;
        if(a.bDeferLoading||null===a.sAjaxSource)for(b=a.nTBody.firstChild;b;){
            if("TR"==b.nodeName.toUpperCase()){
                c=a.aoData.length;
                b._DT_RowIndex=c;
                a.aoData.push(h.extend(!0,{},j.models.oRow,{
                    nTr:b
                }));
                a.aiDisplayMaster.push(c);
                f=b.firstChild;
                for(d=0;f;){
                    g=f.nodeName.toUpperCase();
                    if("TD"==g||"TH"==g)F(a,c,d,h.trim(f.innerHTML)),d++;
                    f=f.nextSibling
                    }
                }
                b=b.nextSibling
        }
        i=T(a);
    d=[];
    b=0;
    for(c=i.length;b<c;b++)for(f=i[b].firstChild;f;)g=f.nodeName.toUpperCase(),("TD"==g||"TH"==g)&&d.push(f),f=f.nextSibling;
    c=0;
    for(i=a.aoColumns.length;c<i;c++){
        e=a.aoColumns[c];
        null===e.sTitle&&(e.sTitle=e.nTh.innerHTML);
        var w=e._bAutoType,o="function"===typeof e.fnRender,k=null!==e.sClass,n=e.bVisible,m,p;
        if(w||o||k||!n){
            g=0;
            for(b=a.aoData.length;g<b;g++)f=a.aoData[g],m=d[g*i+c],w&&"string"!=e.sType&&(p=v(a,g,c,"type"),""!==p&&(p=B(p),null===e.sType?e.sType=p:e.sType!=p&&"html"!=e.sType&&(e.sType="string"))),e.mRender?m.innerHTML=v(a,g,c,"display"):e.mData!==c&&(m.innerHTML=v(a,g,c,"display")),o&&(p=S(a,g,c),m.innerHTML=p,e.bUseRendered&&F(a,g,c,p)),k&&(m.className+=" "+e.sClass),n?f._anHidden[c]=null:(f._anHidden[c]=m,m.parentNode.removeChild(m)),e.fnCreatedCell&&e.fnCreatedCell.call(a.oInstance,m,v(a,g,c,"display"),f._aData,g,c)
                }
            }
    if(0!==a.aoRowCreatedCallback.length){
    b=0;
    for(c=a.aoData.length;b<c;b++)f=a.aoData[b],A(a,"aoRowCreatedCallback",null,[f.nTr,f._aData,b])
        }
    }
function I(a,b){
    return b._DT_RowIndex!==n?b._DT_RowIndex:null
    }
    function fa(a,b,c){
    for(var b=J(a,b),d=0,a=a.aoColumns.length;d<a;d++)if(b[d]===c)return d;return-1
    }
    function Y(a,b,c,d){
    for(var i=[],f=0,g=d.length;f<g;f++)i.push(v(a,b,d[f],c));
    return i
    }
    function v(a,b,c,d){
    var i=a.aoColumns[c];
    if((c=i.fnGetData(a.aoData[b]._aData,d))===n)return a.iDrawError!=a.iDraw&&null===i.sDefaultContent&&(D(a,0,"Requested unknown parameter "+("function"==typeof i.mData?"{mData function}":"'"+i.mData+"'")+" from the data source for row "+b),a.iDrawError=a.iDraw),i.sDefaultContent;
    if(null===c&&null!==i.sDefaultContent)c=i.sDefaultContent;
    else if("function"===typeof c)return c();
    return"display"==d&&null===c?"":c
    }
    function F(a,b,c,d){
    a.aoColumns[c].fnSetData(a.aoData[b]._aData,d)
    }
    function Q(a){
    if(null===a)return function(){
        return null
        };
        
    if("function"===typeof a)return function(b,d,i){
        return a(b,d,i)
        };
        
    if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("["))){
        var b=function(a,d,i){
            var f=i.split("."),g;
            if(""!==i){
                var e=0;
                for(g=f.length;e<g;e++){
                    if(i=f[e].match(U)){
                        f[e]=f[e].replace(U,"");
                        ""!==f[e]&&(a=a[f[e]]);
                        g=[];
                        f.splice(0,e+1);
                        for(var f=f.join("."),e=0,h=a.length;e<h;e++)g.push(b(a[e],d,f));
                        a=i[0].substring(1,i[0].length-1);
                        a=""===a?g:g.join(a);
                        break
                    }
                    if(null===a||a[f[e]]===n)return n;
                    a=a[f[e]]
                    }
                }
                return a
        };
        
    return function(c,d){
        return b(c,d,a)
        }
    }
return function(b){
    return b[a]
    }
}
function L(a){
    if(null===a)return function(){};
        
    if("function"===typeof a)return function(b,d){
        a(b,"set",d)
        };
        
    if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("["))){
        var b=function(a,d,i){
            var i=i.split("."),f,g,e=0;
            for(g=i.length-1;e<g;e++){
                if(f=i[e].match(U)){
                    i[e]=i[e].replace(U,"");
                    a[i[e]]=[];
                    f=i.slice();
                    f.splice(0,e+1);
                    g=f.join(".");
                    for(var h=0,j=d.length;h<j;h++)f={},b(f,d[h],g),a[i[e]].push(f);
                    return
                }
                if(null===a[i[e]]||a[i[e]]===n)a[i[e]]={};
                    
                a=a[i[e]]
                }
                a[i[i.length-1].replace(U,"")]=d
            };
            
        return function(c,d){
            return b(c,d,a)
            }
        }
    return function(b,d){
    b[a]=d
    }
}
function Z(a){
    for(var b=[],c=a.aoData.length,d=0;d<c;d++)b.push(a.aoData[d]._aData);
    return b
    }
    function ga(a){
    a.aoData.splice(0,a.aoData.length);
    a.aiDisplayMaster.splice(0,a.aiDisplayMaster.length);
    a.aiDisplay.splice(0,a.aiDisplay.length);
    y(a)
    }
    function ha(a,b){
    for(var c=-1,d=0,i=a.length;d<i;d++)a[d]==b?c=d:a[d]>b&&a[d]--;
    -1!=c&&a.splice(c,1)
    }
    function S(a,b,c){
    var d=a.aoColumns[c];
    return d.fnRender({
        iDataRow:b,
        iDataColumn:c,
        oSettings:a,
        aData:a.aoData[b]._aData,
        mDataProp:d.mData
        },v(a,b,c,"display"))
    }
    function ea(a,b){
    var c=a.aoData[b],d;
    if(null===c.nTr){
        c.nTr=l.createElement("tr");
        c.nTr._DT_RowIndex=b;
        c._aData.DT_RowId&&(c.nTr.id=c._aData.DT_RowId);
        c._aData.DT_RowClass&&(c.nTr.className=c._aData.DT_RowClass);
        for(var i=0,f=a.aoColumns.length;i<f;i++){
            var g=a.aoColumns[i];
            d=l.createElement(g.sCellType);
            d.innerHTML="function"===typeof g.fnRender&&(!g.bUseRendered||null===g.mData)?S(a,b,i):v(a,b,i,"display");
            null!==g.sClass&&(d.className=g.sClass);
            g.bVisible?(c.nTr.appendChild(d),c._anHidden[i]=null):c._anHidden[i]=d;
            g.fnCreatedCell&&g.fnCreatedCell.call(a.oInstance,d,v(a,b,i,"display"),c._aData,b,i)
            }
            A(a,"aoRowCreatedCallback",null,[c.nTr,c._aData,b])
        }
    }
function va(a){
    var b,c,d;
    if(0!==h("th, td",a.nTHead).length){
        b=0;
        for(d=a.aoColumns.length;b<d;b++)if(c=a.aoColumns[b].nTh,c.setAttribute("role","columnheader"),a.aoColumns[b].bSortable&&(c.setAttribute("tabindex",a.iTabIndex),c.setAttribute("aria-controls",a.sTableId)),null!==a.aoColumns[b].sClass&&h(c).addClass(a.aoColumns[b].sClass),a.aoColumns[b].sTitle!=c.innerHTML)c.innerHTML=a.aoColumns[b].sTitle
            }else{
        var i=l.createElement("tr");
        b=0;
        for(d=a.aoColumns.length;b<d;b++)c=a.aoColumns[b].nTh,c.innerHTML=a.aoColumns[b].sTitle,c.setAttribute("tabindex","0"),null!==a.aoColumns[b].sClass&&h(c).addClass(a.aoColumns[b].sClass),i.appendChild(c);
        h(a.nTHead).html("")[0].appendChild(i);
        V(a.aoHeader,a.nTHead)
        }
        h(a.nTHead).children("tr").attr("role","row");
    if(a.bJUI){
        b=0;
        for(d=a.aoColumns.length;b<d;b++){
            c=a.aoColumns[b].nTh;
            i=l.createElement("div");
            i.className=a.oClasses.sSortJUIWrapper;
            h(c).contents().appendTo(i);
            var f=l.createElement("span");
            f.className=a.oClasses.sSortIcon;
            i.appendChild(f);
            c.appendChild(i)
            }
        }
        if(a.oFeatures.bSort)for(b=0;b<a.aoColumns.length;b++)!1!==a.aoColumns[b].bSortable?ia(a,a.aoColumns[b].nTh,b):h(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);
""!==a.oClasses.sFooterTH&&h(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH);
if(null!==a.nTFoot){
    c=N(a,null,a.aoFooter);
    b=0;
    for(d=a.aoColumns.length;b<d;b++)c[b]&&(a.aoColumns[b].nTf=c[b],a.aoColumns[b].sClass&&h(c[b]).addClass(a.aoColumns[b].sClass))
        }
    }
function W(a,b,c){
    var d,i,f,g=[],e=[],h=a.aoColumns.length,j;
    c===n&&(c=!1);
    d=0;
    for(i=b.length;d<i;d++){
        g[d]=b[d].slice();
        g[d].nTr=b[d].nTr;
        for(f=h-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);
        e.push([])
        }
        d=0;
    for(i=g.length;d<i;d++){
        if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);
        f=0;
        for(b=g[d].length;f<b;f++)if(j=h=1,e[d][f]===n){
            a.appendChild(g[d][f].cell);
            for(e[d][f]=1;g[d+h]!==n&&g[d][f].cell==g[d+h][f].cell;)e[d+h][f]=1,h++;
            for(;g[d][f+j]!==n&&g[d][f].cell==g[d][f+j].cell;){
                for(c=0;c<h;c++)e[d+c][f+j]=1;
                j++
            }
            g[d][f].cell.rowSpan=h;
            g[d][f].cell.colSpan=j
            }
        }
    }
function x(a){
    var b=A(a,"aoPreDrawCallback","preDraw",[a]);
    if(-1!==h.inArray(!1,b))E(a,!1);
    else{
        var c,d,b=[],i=0,f=a.asStripeClasses.length;
        c=a.aoOpenRows.length;
        a.bDrawing=!0;
        a.iInitDisplayStart!==n&&-1!=a.iInitDisplayStart&&(a._iDisplayStart=a.oFeatures.bServerSide?a.iInitDisplayStart:a.iInitDisplayStart>=a.fnRecordsDisplay()?0:a.iInitDisplayStart,a.iInitDisplayStart=-1,y(a));
        if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++;
        else if(a.oFeatures.bServerSide){
            if(!a.bDestroying&&!wa(a))return
        }else a.iDraw++;
        if(0!==a.aiDisplay.length){
            var g=a._iDisplayStart;
            d=a._iDisplayEnd;
            a.oFeatures.bServerSide&&(g=0,d=a.aoData.length);
            for(;g<d;g++){
                var e=a.aoData[a.aiDisplay[g]];
                null===e.nTr&&ea(a,a.aiDisplay[g]);
                var j=e.nTr;
                if(0!==f){
                    var o=a.asStripeClasses[i%f];
                    e._sRowStripe!=o&&(h(j).removeClass(e._sRowStripe).addClass(o),e._sRowStripe=o)
                    }
                    A(a,"aoRowCallback",null,[j,a.aoData[a.aiDisplay[g]]._aData,i,g]);
                b.push(j);
                i++;
                if(0!==c)for(e=0;e<c;e++)if(j==a.aoOpenRows[e].nParent){
                    b.push(a.aoOpenRows[e].nTr);
                    break
                }
                }
                }else b[0]=l.createElement("tr"),a.asStripeClasses[0]&&(b[0].className=a.asStripeClasses[0]),c=a.oLanguage,f=c.sZeroRecords,1==a.iDraw&&null!==a.sAjaxSource&&!a.oFeatures.bServerSide?f=c.sLoadingRecords:c.sEmptyTable&&0===a.fnRecordsTotal()&&(f=c.sEmptyTable),c=l.createElement("td"),c.setAttribute("valign","top"),c.colSpan=t(a),c.className=a.oClasses.sRowEmpty,c.innerHTML=ja(a,f),b[i].appendChild(c);
A(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Z(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay]);
A(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Z(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay]);
i=l.createDocumentFragment();
c=l.createDocumentFragment();
if(a.nTBody){
    f=a.nTBody.parentNode;
    c.appendChild(a.nTBody);
    if(!a.oScroll.bInfinite||!a._bInitComplete||a.bSorted||a.bFiltered)for(;c=a.nTBody.firstChild;)a.nTBody.removeChild(c);
    c=0;
    for(d=b.length;c<d;c++)i.appendChild(b[c]);
    a.nTBody.appendChild(i);
    null!==f&&f.appendChild(a.nTBody)
    }
    A(a,"aoDrawCallback","draw",[a]);
a.bSorted=!1;
a.bFiltered=!1;
a.bDrawing=!1;
a.oFeatures.bServerSide&&(E(a,!1),a._bInitComplete||$(a))
}
}
function aa(a){
    a.oFeatures.bSort?O(a,a.oPreviousSearch):a.oFeatures.bFilter?K(a,a.oPreviousSearch):(y(a),x(a))
    }
    function xa(a){
    var b=h("<div></div>")[0];
    a.nTable.parentNode.insertBefore(b,a.nTable);
    a.nTableWrapper=h('<div id="'+a.sTableId+'_wrapper" class="'+a.oClasses.sWrapper+'" role="grid"></div>')[0];
    a.nTableReinsertBefore=a.nTable.nextSibling;
    for(var c=a.nTableWrapper,d=a.sDom.split(""),i,f,g,e,w,o,k,m=0;m<d.length;m++){
        f=0;
        g=d[m];
        if("<"==g){
            e=h("<div></div>")[0];
            w=d[m+1];
            if("'"==w||'"'==w){
                o="";
                for(k=2;d[m+k]!=w;)o+=d[m+k],k++;
                "H"==o?o=a.oClasses.sJUIHeader:"F"==o&&(o=a.oClasses.sJUIFooter);
                -1!=o.indexOf(".")?(w=o.split("."),e.id=w[0].substr(1,w[0].length-1),e.className=w[1]):"#"==o.charAt(0)?e.id=o.substr(1,o.length-1):e.className=o;
                m+=k
                }
                c.appendChild(e);
            c=e
            }else if(">"==g)c=c.parentNode;
        else if("l"==g&&a.oFeatures.bPaginate&&a.oFeatures.bLengthChange)i=ya(a),f=1;
        else if("f"==g&&a.oFeatures.bFilter)i=za(a),f=1;
        else if("r"==g&&a.oFeatures.bProcessing)i=Aa(a),f=1;
        else if("t"==g)i=Ba(a),f=1;
        else if("i"==g&&a.oFeatures.bInfo)i=Ca(a),f=1;
        else if("p"==g&&a.oFeatures.bPaginate)i=Da(a),f=1;
        else if(0!==j.ext.aoFeatures.length){
            e=j.ext.aoFeatures;
            k=0;
            for(w=e.length;k<w;k++)if(g==e[k].cFeature){
                (i=e[k].fnInit(a))&&(f=1);
                break
            }
            }
            1==f&&null!==i&&("object"!==typeof a.aanFeatures[g]&&(a.aanFeatures[g]=[]),a.aanFeatures[g].push(i),c.appendChild(i))
        }
        b.parentNode.replaceChild(a.nTableWrapper,b)
}
function V(a,b){
    var c=h(b).children("tr"),d,i,f,g,e,j,o,k,m,p;
    a.splice(0,a.length);
    f=0;
    for(j=c.length;f<j;f++)a.push([]);
    f=0;
    for(j=c.length;f<j;f++){
        d=c[f];
        for(i=d.firstChild;i;){
            if("TD"==i.nodeName.toUpperCase()||"TH"==i.nodeName.toUpperCase()){
                k=1*i.getAttribute("colspan");
                m=1*i.getAttribute("rowspan");
                k=!k||0===k||1===k?1:k;
                m=!m||0===m||1===m?1:m;
                g=0;
                for(e=a[f];e[g];)g++;
                o=g;
                p=1===k?!0:!1;
                for(e=0;e<k;e++)for(g=0;g<m;g++)a[f+g][o+e]={
                    cell:i,
                    unique:p
                },a[f+g].nTr=d
                }
                i=i.nextSibling
            }
        }
    }
function N(a,b,c){
    var d=[];
    c||(c=a.aoHeader,b&&(c=[],V(c,b)));
    for(var b=0,i=c.length;b<i;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d
    }
    function wa(a){
    if(a.bAjaxDataGet){
        a.iDraw++;
        E(a,!0);
        var b=Ea(a);
        ka(a,b);
        a.fnServerData.call(a.oInstance,a.sAjaxSource,b,function(b){
            Fa(a,b)
            },a);
        return!1
        }
        return!0
    }
    function Ea(a){
    var b=a.aoColumns.length,c=[],d,i,f,g;
    c.push({
        name:"sEcho",
        value:a.iDraw
        });
    c.push({
        name:"iColumns",
        value:b
    });
    c.push({
        name:"sColumns",
        value:M(a)
        });
    c.push({
        name:"iDisplayStart",
        value:a._iDisplayStart
        });
    c.push({
        name:"iDisplayLength",
        value:!1!==a.oFeatures.bPaginate?a._iDisplayLength:-1
        });
    for(f=0;f<b;f++)d=a.aoColumns[f].mData,c.push({
        name:"mDataProp_"+f,
        value:"function"===typeof d?"function":d
        });
    if(!1!==a.oFeatures.bFilter){
        c.push({
            name:"sSearch",
            value:a.oPreviousSearch.sSearch
            });
        c.push({
            name:"bRegex",
            value:a.oPreviousSearch.bRegex
            });
        for(f=0;f<b;f++)c.push({
            name:"sSearch_"+f,
            value:a.aoPreSearchCols[f].sSearch
            }),c.push({
            name:"bRegex_"+f,
            value:a.aoPreSearchCols[f].bRegex
            }),c.push({
            name:"bSearchable_"+f,
            value:a.aoColumns[f].bSearchable
            })
        }
        if(!1!==a.oFeatures.bSort){
        var e=0;
        d=null!==a.aaSortingFixed?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();
        for(f=0;f<d.length;f++){
            i=a.aoColumns[d[f][0]].aDataSort;
            for(g=0;g<i.length;g++)c.push({
                name:"iSortCol_"+e,
                value:i[g]
                }),c.push({
                name:"sSortDir_"+e,
                value:d[f][1]
                }),e++
        }
        c.push({
            name:"iSortingCols",
            value:e
        });
        for(f=0;f<b;f++)c.push({
            name:"bSortable_"+f,
            value:a.aoColumns[f].bSortable
            })
        }
        return c
    }
    function ka(a,b){
    A(a,"aoServerParams","serverParams",[b])
    }
    function Fa(a,b){
    if(b.sEcho!==n){
        if(1*b.sEcho<a.iDraw)return;
        a.iDraw=1*b.sEcho
        }(!a.oScroll.bInfinite||a.oScroll.bInfinite&&(a.bSorted||a.bFiltered))&&ga(a);
    a._iRecordsTotal=parseInt(b.iTotalRecords,10);
    a._iRecordsDisplay=parseInt(b.iTotalDisplayRecords,10);
    var c=M(a),c=b.sColumns!==n&&""!==c&&b.sColumns!=c,d;
    c&&(d=u(a,b.sColumns));
    for(var i=Q(a.sAjaxDataProp)(b),f=0,g=i.length;f<g;f++)if(c){
        for(var e=[],h=0,j=a.aoColumns.length;h<j;h++)e.push(i[f][d[h]]);
        H(a,e)
        }else H(a,i[f]);a.aiDisplay=a.aiDisplayMaster.slice();
    a.bAjaxDataGet=!1;
    x(a);
    a.bAjaxDataGet=!0;
    E(a,!1)
    }
    function za(a){
    var b=a.oPreviousSearch,c=a.oLanguage.sSearch,c=-1!==c.indexOf("_INPUT_")?c.replace("_INPUT_",'<input type="text" />'):""===c?'<input type="text" />':c+' <input type="text" />',d=l.createElement("div");
    d.className=a.oClasses.sFilter;
    d.innerHTML="<label>"+c+"</label>";
    a.aanFeatures.f||(d.id=a.sTableId+"_filter");
    c=h('input[type="text"]',d);
    d._DT_Input=c[0];
    c.val(b.sSearch.replace('"',"&quot;"));
    c.bind("keyup.DT",function(){
        for(var c=a.aanFeatures.f,d=this.value===""?"":this.value,g=0,e=c.length;g<e;g++)c[g]!=h(this).parents("div.dataTables_filter")[0]&&h(c[g]._DT_Input).val(d);
        d!=b.sSearch&&K(a,{
            sSearch:d,
            bRegex:b.bRegex,
            bSmart:b.bSmart,
            bCaseInsensitive:b.bCaseInsensitive
            })
        });
    c.attr("aria-controls",a.sTableId).bind("keypress.DT",function(a){
        if(a.keyCode==13)return false
            });
    return d
    }
    function K(a,b,c){
    var d=a.oPreviousSearch,i=a.aoPreSearchCols,f=function(a){
        d.sSearch=a.sSearch;
        d.bRegex=a.bRegex;
        d.bSmart=a.bSmart;
        d.bCaseInsensitive=a.bCaseInsensitive
        };
        
    if(a.oFeatures.bServerSide)f(b);
    else{
        Ga(a,b.sSearch,c,b.bRegex,b.bSmart,b.bCaseInsensitive);
        f(b);
        for(b=0;b<a.aoPreSearchCols.length;b++)Ha(a,i[b].sSearch,b,i[b].bRegex,i[b].bSmart,i[b].bCaseInsensitive);
        Ia(a)
        }
        a.bFiltered=!0;
    h(a.oInstance).trigger("filter",a);
    a._iDisplayStart=0;
    y(a);
    x(a);
    la(a,0)
    }
    function Ia(a){
    for(var b=j.ext.afnFiltering,c=r(a,"bSearchable"),d=0,i=b.length;d<i;d++)for(var f=0,g=0,e=a.aiDisplay.length;g<e;g++){
        var h=a.aiDisplay[g-f];
        b[d](a,Y(a,h,"filter",c),h)||(a.aiDisplay.splice(g-f,1),f++)
        }
    }
    function Ha(a,b,c,d,i,f){
    if(""!==b)for(var g=0,b=ma(b,d,i,f),d=a.aiDisplay.length-1;0<=d;d--)i=Ja(v(a,a.aiDisplay[d],c,"filter"),a.aoColumns[c].sType),b.test(i)||(a.aiDisplay.splice(d,1),g++)
        }
        function Ga(a,b,c,d,i,f){
    d=ma(b,d,i,f);
    i=a.oPreviousSearch;
    c||(c=0);
    0!==j.ext.afnFiltering.length&&(c=1);
    if(0>=b.length)a.aiDisplay.splice(0,a.aiDisplay.length),a.aiDisplay=a.aiDisplayMaster.slice();
    else if(a.aiDisplay.length==a.aiDisplayMaster.length||i.sSearch.length>b.length||1==c||0!==b.indexOf(i.sSearch)){
        a.aiDisplay.splice(0,a.aiDisplay.length);
        la(a,1);
        for(b=0;b<a.aiDisplayMaster.length;b++)d.test(a.asDataSearch[b])&&a.aiDisplay.push(a.aiDisplayMaster[b])
            }else for(b=c=0;b<a.asDataSearch.length;b++)d.test(a.asDataSearch[b])||(a.aiDisplay.splice(b-c,1),c++)
        }
        function la(a,b){
    if(!a.oFeatures.bServerSide){
        a.asDataSearch=[];
        for(var c=r(a,"bSearchable"),d=1===b?a.aiDisplayMaster:a.aiDisplay,i=0,f=d.length;i<f;i++)a.asDataSearch[i]=na(a,Y(a,d[i],"filter",c))
            }
        }
function na(a,b){
    var c=b.join("  ");
    -1!==c.indexOf("&")&&(c=h("<div>").html(c).text());
    return c.replace(/[\n\r]/g," ")
    }
    function ma(a,b,c,d){
    if(c)return a=b?a.split(" "):oa(a).split(" "),a="^(?=.*?"+a.join(")(?=.*?")+").*$",RegExp(a,d?"i":"");
    a=b?a:oa(a);
    return RegExp(a,d?"i":"")
    }
    function Ja(a,b){
    return"function"===typeof j.ext.ofnSearch[b]?j.ext.ofnSearch[b](a):null===a?"":"html"==b?a.replace(/[\r\n]/g," ").replace(/<.*?>/g,""):"string"===typeof a?a.replace(/[\r\n]/g," "):a
    }
    function oa(a){
    return a.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),"\\$1")
    }
    function Ca(a){
    var b=l.createElement("div");
    b.className=a.oClasses.sInfo;
    a.aanFeatures.i||(a.aoDrawCallback.push({
        fn:Ka,
        sName:"information"
    }),b.id=a.sTableId+"_info");
    a.nTable.setAttribute("aria-describedby",a.sTableId+"_info");
    return b
    }
    function Ka(a){
    if(a.oFeatures.bInfo&&0!==a.aanFeatures.i.length){
        var b=a.oLanguage,c=a._iDisplayStart+1,d=a.fnDisplayEnd(),i=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),g;
        g=0===f?b.sInfoEmpty:b.sInfo;
        f!=i&&(g+=" "+b.sInfoFiltered);
        g+=b.sInfoPostFix;
        g=ja(a,g);
        null!==b.fnInfoCallback&&(g=b.fnInfoCallback.call(a.oInstance,a,c,d,i,f,g));
        a=a.aanFeatures.i;
        b=0;
        for(c=a.length;b<c;b++)h(a[b]).html(g)
            }
        }
function ja(a,b){
    var c=a.fnFormatNumber(a._iDisplayStart+1),d=a.fnDisplayEnd(),d=a.fnFormatNumber(d),i=a.fnRecordsDisplay(),i=a.fnFormatNumber(i),f=a.fnRecordsTotal(),f=a.fnFormatNumber(f);
    a.oScroll.bInfinite&&(c=a.fnFormatNumber(1));
    return b.replace(/_START_/g,c).replace(/_END_/g,d).replace(/_TOTAL_/g,i).replace(/_MAX_/g,f)
    }
    function ba(a){
    var b,c,d=a.iInitDisplayStart;
    if(!1===a.bInitialised)setTimeout(function(){
        ba(a)
        },200);
    else{
        xa(a);
        va(a);
        W(a,a.aoHeader);
        a.nTFoot&&W(a,a.aoFooter);
        E(a,!0);
        a.oFeatures.bAutoWidth&&da(a);
        b=0;
        for(c=a.aoColumns.length;b<c;b++)null!==a.aoColumns[b].sWidth&&(a.aoColumns[b].nTh.style.width=q(a.aoColumns[b].sWidth));
        a.oFeatures.bSort?O(a):a.oFeatures.bFilter?K(a,a.oPreviousSearch):(a.aiDisplay=a.aiDisplayMaster.slice(),y(a),x(a));
        null!==a.sAjaxSource&&!a.oFeatures.bServerSide?(c=[],ka(a,c),a.fnServerData.call(a.oInstance,a.sAjaxSource,c,function(c){
            var f=a.sAjaxDataProp!==""?Q(a.sAjaxDataProp)(c):c;
            for(b=0;b<f.length;b++)H(a,f[b]);
            a.iInitDisplayStart=d;
            if(a.oFeatures.bSort)O(a);
            else{
                a.aiDisplay=a.aiDisplayMaster.slice();
                y(a);
                x(a)
                }
                E(a,false);
            $(a,c)
            },a)):a.oFeatures.bServerSide||(E(a,!1),$(a))
        }
    }
function $(a,b){
    a._bInitComplete=!0;
    A(a,"aoInitComplete","init",[a,b])
    }
    function pa(a){
    var b=j.defaults.oLanguage;
    !a.sEmptyTable&&(a.sZeroRecords&&"No data available in table"===b.sEmptyTable)&&p(a,a,"sZeroRecords","sEmptyTable");
    !a.sLoadingRecords&&(a.sZeroRecords&&"Loading..."===b.sLoadingRecords)&&p(a,a,"sZeroRecords","sLoadingRecords")
    }
    function ya(a){
    if(a.oScroll.bInfinite)return null;
    var b='<select size="1" '+('name="'+a.sTableId+'_length"')+">",c,d,i=a.aLengthMenu;
    if(2==i.length&&"object"===typeof i[0]&&"object"===typeof i[1]){
        c=0;
        for(d=i[0].length;c<d;c++)b+='<option value="'+i[0][c]+'">'+i[1][c]+"</option>"
            }else{
        c=0;
        for(d=i.length;c<d;c++)b+='<option value="'+i[c]+'">'+i[c]+"</option>"
            }
            b+="</select>";
    i=l.createElement("div");
    a.aanFeatures.l||(i.id=a.sTableId+"_length");
    i.className=a.oClasses.sLength;
    i.innerHTML="<label>"+a.oLanguage.sLengthMenu.replace("_MENU_",b)+"</label>";
    h('select option[value="'+a._iDisplayLength+'"]',i).attr("selected",!0);
    h("select",i).bind("change.DT",function(){
        var b=h(this).val(),i=a.aanFeatures.l;
        c=0;
        for(d=i.length;c<d;c++)i[c]!=this.parentNode&&h("select",i[c]).val(b);
        a._iDisplayLength=parseInt(b,10);
        y(a);
        if(a.fnDisplayEnd()==a.fnRecordsDisplay()){
            a._iDisplayStart=a.fnDisplayEnd()-a._iDisplayLength;
            if(a._iDisplayStart<0)a._iDisplayStart=0
                }
                if(a._iDisplayLength==-1)a._iDisplayStart=0;
        x(a)
        });
    h("select",i).attr("aria-controls",a.sTableId);
    return i
    }
    function y(a){
    a._iDisplayEnd=!1===a.oFeatures.bPaginate?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength>a.aiDisplay.length||-1==a._iDisplayLength?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength
    }
    function Da(a){
    if(a.oScroll.bInfinite)return null;
    var b=l.createElement("div");
    b.className=a.oClasses.sPaging+a.sPaginationType;
    j.ext.oPagination[a.sPaginationType].fnInit(a,b,function(a){
        y(a);
        x(a)
        });
    a.aanFeatures.p||a.aoDrawCallback.push({
        fn:function(a){
            j.ext.oPagination[a.sPaginationType].fnUpdate(a,function(a){
                y(a);
                x(a)
                })
            },
        sName:"pagination"
    });
    return b
    }
    function qa(a,b){
    var c=a._iDisplayStart;
    if("number"===typeof b)a._iDisplayStart=b*a._iDisplayLength,a._iDisplayStart>a.fnRecordsDisplay()&&(a._iDisplayStart=0);
    else if("first"==b)a._iDisplayStart=0;
    else if("previous"==b)a._iDisplayStart=0<=a._iDisplayLength?a._iDisplayStart-a._iDisplayLength:0,0>a._iDisplayStart&&(a._iDisplayStart=0);
    else if("next"==b)0<=a._iDisplayLength?a._iDisplayStart+a._iDisplayLength<a.fnRecordsDisplay()&&(a._iDisplayStart+=a._iDisplayLength):a._iDisplayStart=0;
    else if("last"==b)if(0<=a._iDisplayLength){
        var d=parseInt((a.fnRecordsDisplay()-1)/a._iDisplayLength,10)+1;
        a._iDisplayStart=(d-1)*a._iDisplayLength
        }else a._iDisplayStart=0;else D(a,0,"Unknown paging action: "+b);
    h(a.oInstance).trigger("page",a);
    return c!=a._iDisplayStart
    }
    function Aa(a){
    var b=l.createElement("div");
    a.aanFeatures.r||(b.id=a.sTableId+"_processing");
    b.innerHTML=a.oLanguage.sProcessing;
    b.className=a.oClasses.sProcessing;
    a.nTable.parentNode.insertBefore(b,a.nTable);
    return b
    }
    function E(a,b){
    if(a.oFeatures.bProcessing)for(var c=a.aanFeatures.r,d=0,i=c.length;d<i;d++)c[d].style.visibility=b?"visible":"hidden";
    h(a.oInstance).trigger("processing",[a,b])
    }
    function Ba(a){
    if(""===a.oScroll.sX&&""===a.oScroll.sY)return a.nTable;
    var b=l.createElement("div"),c=l.createElement("div"),d=l.createElement("div"),i=l.createElement("div"),f=l.createElement("div"),g=l.createElement("div"),e=a.nTable.cloneNode(!1),j=a.nTable.cloneNode(!1),o=a.nTable.getElementsByTagName("thead")[0],k=0===a.nTable.getElementsByTagName("tfoot").length?null:a.nTable.getElementsByTagName("tfoot")[0],m=a.oClasses;
    c.appendChild(d);
    f.appendChild(g);
    i.appendChild(a.nTable);
    b.appendChild(c);
    b.appendChild(i);
    d.appendChild(e);
    e.appendChild(o);
    null!==k&&(b.appendChild(f),g.appendChild(j),j.appendChild(k));
    b.className=m.sScrollWrapper;
    c.className=m.sScrollHead;
    d.className=m.sScrollHeadInner;
    i.className=m.sScrollBody;
    f.className=m.sScrollFoot;
    g.className=m.sScrollFootInner;
    a.oScroll.bAutoCss&&(c.style.overflow="hidden",c.style.position="relative",f.style.overflow="hidden",i.style.overflow="auto");
    c.style.border="0";
    c.style.width="100%";
    f.style.border="0";
    d.style.width=""!==a.oScroll.sXInner?a.oScroll.sXInner:"100%";
    e.removeAttribute("id");
    e.style.marginLeft="0";
    a.nTable.style.marginLeft="0";
    null!==k&&(j.removeAttribute("id"),j.style.marginLeft="0");
    d=h(a.nTable).children("caption");
    0<d.length&&(d=d[0],"top"===d._captionSide?e.appendChild(d):"bottom"===d._captionSide&&k&&j.appendChild(d));
    ""!==a.oScroll.sX&&(c.style.width=q(a.oScroll.sX),i.style.width=q(a.oScroll.sX),null!==k&&(f.style.width=q(a.oScroll.sX)),h(i).scroll(function(){
        c.scrollLeft=this.scrollLeft;
        if(k!==null)f.scrollLeft=this.scrollLeft
            }));
    ""!==a.oScroll.sY&&(i.style.height=q(a.oScroll.sY));
    a.aoDrawCallback.push({
        fn:La,
        sName:"scrolling"
    });
    a.oScroll.bInfinite&&h(i).scroll(function(){
        if(!a.bDrawing&&h(this).scrollTop()!==0&&h(this).scrollTop()+h(this).height()>h(a.nTable).height()-a.oScroll.iLoadGap&&a.fnDisplayEnd()<a.fnRecordsDisplay()){
            qa(a,"next");
            y(a);
            x(a)
            }
        });
a.nScrollHead=c;
a.nScrollFoot=f;
return b
}
function La(a){
    var b=a.nScrollHead.getElementsByTagName("div")[0],c=b.getElementsByTagName("table")[0],d=a.nTable.parentNode,i,f,g,e,j,o,k,m,p=[],n=[],l=null!==a.nTFoot?a.nScrollFoot.getElementsByTagName("div")[0]:null,R=null!==a.nTFoot?l.getElementsByTagName("table")[0]:null,r=a.oBrowser.bScrollOversize,s=function(a){
        k=a.style;
        k.paddingTop="0";
        k.paddingBottom="0";
        k.borderTopWidth="0";
        k.borderBottomWidth="0";
        k.height=0
        };
        
    h(a.nTable).children("thead, tfoot").remove();
    i=h(a.nTHead).clone()[0];
    a.nTable.insertBefore(i,a.nTable.childNodes[0]);
    g=a.nTHead.getElementsByTagName("tr");
    e=i.getElementsByTagName("tr");
    null!==a.nTFoot&&(j=h(a.nTFoot).clone()[0],a.nTable.insertBefore(j,a.nTable.childNodes[1]),o=a.nTFoot.getElementsByTagName("tr"),j=j.getElementsByTagName("tr"));
    ""===a.oScroll.sX&&(d.style.width="100%",b.parentNode.style.width="100%");
    var t=N(a,i);
    i=0;
    for(f=t.length;i<f;i++)m=G(a,i),t[i].style.width=a.aoColumns[m].sWidth;
    null!==a.nTFoot&&C(function(a){
        a.style.width=""
        },j);
    a.oScroll.bCollapse&&""!==a.oScroll.sY&&(d.style.height=d.offsetHeight+a.nTHead.offsetHeight+"px");
    i=h(a.nTable).outerWidth();
    if(""===a.oScroll.sX){
        if(a.nTable.style.width="100%",r&&(h("tbody",d).height()>d.offsetHeight||"scroll"==h(d).css("overflow-y")))a.nTable.style.width=q(h(a.nTable).outerWidth()-a.oScroll.iBarWidth)
            }else""!==a.oScroll.sXInner?a.nTable.style.width=q(a.oScroll.sXInner):i==h(d).width()&&h(d).height()<h(a.nTable).height()?(a.nTable.style.width=q(i-a.oScroll.iBarWidth),h(a.nTable).outerWidth()>i-a.oScroll.iBarWidth&&(a.nTable.style.width=q(i))):a.nTable.style.width=q(i);
    i=h(a.nTable).outerWidth();
    C(s,e);
    C(function(a){
        p.push(q(h(a).width()))
        },e);
    C(function(a,b){
        a.style.width=p[b]
        },g);
    h(e).height(0);
    null!==a.nTFoot&&(C(s,j),C(function(a){
        n.push(q(h(a).width()))
        },j),C(function(a,b){
        a.style.width=n[b]
        },o),h(j).height(0));
    C(function(a,b){
        a.innerHTML="";
        a.style.width=p[b]
        },e);
    null!==a.nTFoot&&C(function(a,b){
        a.innerHTML="";
        a.style.width=n[b]
        },j);
    if(h(a.nTable).outerWidth()<i){
        g=d.scrollHeight>d.offsetHeight||"scroll"==h(d).css("overflow-y")?i+a.oScroll.iBarWidth:i;
        if(r&&(d.scrollHeight>d.offsetHeight||"scroll"==h(d).css("overflow-y")))a.nTable.style.width=q(g-a.oScroll.iBarWidth);
        d.style.width=q(g);
        a.nScrollHead.style.width=q(g);
        null!==a.nTFoot&&(a.nScrollFoot.style.width=q(g));
        ""===a.oScroll.sX?D(a,1,"The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width."):""!==a.oScroll.sXInner&&D(a,1,"The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")
        }else d.style.width=q("100%"),a.nScrollHead.style.width=q("100%"),null!==a.nTFoot&&(a.nScrollFoot.style.width=q("100%"));
    ""===a.oScroll.sY&&r&&(d.style.height=q(a.nTable.offsetHeight+a.oScroll.iBarWidth));
    ""!==a.oScroll.sY&&a.oScroll.bCollapse&&(d.style.height=q(a.oScroll.sY),r=""!==a.oScroll.sX&&a.nTable.offsetWidth>d.offsetWidth?a.oScroll.iBarWidth:0,a.nTable.offsetHeight<d.offsetHeight&&(d.style.height=q(a.nTable.offsetHeight+r)));
    r=h(a.nTable).outerWidth();
    c.style.width=q(r);
    b.style.width=q(r);
    c=h(a.nTable).height()>d.clientHeight||"scroll"==h(d).css("overflow-y");
    b.style.paddingRight=c?a.oScroll.iBarWidth+"px":"0px";
    null!==a.nTFoot&&(R.style.width=q(r),l.style.width=q(r),l.style.paddingRight=c?a.oScroll.iBarWidth+"px":"0px");
    h(d).scroll();
    if(a.bSorted||a.bFiltered)d.scrollTop=0
        }
        function C(a,b,c){
    for(var d=0,i=0,f=b.length,g,e;i<f;){
        g=b[i].firstChild;
        for(e=c?c[i].firstChild:null;g;)1===g.nodeType&&(c?a(g,e,d):a(g,d),d++),g=g.nextSibling,e=c?e.nextSibling:null;
        i++
    }
    }
    function Ma(a,b){
    if(!a||null===a||""===a)return 0;
    b||(b=l.body);
    var c,d=l.createElement("div");
    d.style.width=q(a);
    b.appendChild(d);
    c=d.offsetWidth;
    b.removeChild(d);
    return c
    }
    function da(a){
    var b=0,c,d=0,i=a.aoColumns.length,f,e,j=h("th",a.nTHead),o=a.nTable.getAttribute("width");
    e=a.nTable.parentNode;
    for(f=0;f<i;f++)a.aoColumns[f].bVisible&&(d++,null!==a.aoColumns[f].sWidth&&(c=Ma(a.aoColumns[f].sWidthOrig,e),null!==c&&(a.aoColumns[f].sWidth=q(c)),b++));
    if(i==j.length&&0===b&&d==i&&""===a.oScroll.sX&&""===a.oScroll.sY)for(f=0;f<a.aoColumns.length;f++)c=h(j[f]).width(),null!==c&&(a.aoColumns[f].sWidth=q(c));
    else{
        b=a.nTable.cloneNode(!1);
        f=a.nTHead.cloneNode(!0);
        d=l.createElement("tbody");
        c=l.createElement("tr");
        b.removeAttribute("id");
        b.appendChild(f);
        null!==a.nTFoot&&(b.appendChild(a.nTFoot.cloneNode(!0)),C(function(a){
            a.style.width=""
            },b.getElementsByTagName("tr")));
        b.appendChild(d);
        d.appendChild(c);
        d=h("thead th",b);
        0===d.length&&(d=h("tbody tr:eq(0)>td",b));
        j=N(a,f);
        for(f=d=0;f<i;f++){
            var k=a.aoColumns[f];
            k.bVisible&&null!==k.sWidthOrig&&""!==k.sWidthOrig?j[f-d].style.width=q(k.sWidthOrig):k.bVisible?j[f-d].style.width="":d++
        }
        for(f=0;f<i;f++)a.aoColumns[f].bVisible&&(d=Na(a,f),null!==d&&(d=d.cloneNode(!0),""!==a.aoColumns[f].sContentPadding&&(d.innerHTML+=a.aoColumns[f].sContentPadding),c.appendChild(d)));
        e.appendChild(b);
        ""!==a.oScroll.sX&&""!==a.oScroll.sXInner?b.style.width=q(a.oScroll.sXInner):""!==a.oScroll.sX?(b.style.width="",h(b).width()<e.offsetWidth&&(b.style.width=q(e.offsetWidth))):""!==a.oScroll.sY?b.style.width=q(e.offsetWidth):o&&(b.style.width=q(o));
        b.style.visibility="hidden";
        Oa(a,b);
        i=h("tbody tr:eq(0)",b).children();
        0===i.length&&(i=N(a,h("thead",b)[0]));
        if(""!==a.oScroll.sX){
            for(f=d=e=0;f<a.aoColumns.length;f++)a.aoColumns[f].bVisible&&(e=null===a.aoColumns[f].sWidthOrig?e+h(i[d]).outerWidth():e+(parseInt(a.aoColumns[f].sWidth.replace("px",""),10)+(h(i[d]).outerWidth()-h(i[d]).width())),d++);
            b.style.width=q(e);
            a.nTable.style.width=q(e)
            }
            for(f=d=0;f<a.aoColumns.length;f++)a.aoColumns[f].bVisible&&(e=h(i[d]).width(),null!==e&&0<e&&(a.aoColumns[f].sWidth=q(e)),d++);
        i=h(b).css("width");
        a.nTable.style.width=-1!==i.indexOf("%")?i:q(h(b).outerWidth());
        b.parentNode.removeChild(b)
        }
        o&&(a.nTable.style.width=q(o))
    }
    function Oa(a,b){
    ""===a.oScroll.sX&&""!==a.oScroll.sY?(h(b).width(),b.style.width=q(h(b).outerWidth()-a.oScroll.iBarWidth)):""!==a.oScroll.sX&&(b.style.width=q(h(b).outerWidth()))
    }
    function Na(a,b){
    var c=Pa(a,b);
    if(0>c)return null;
    if(null===a.aoData[c].nTr){
        var d=l.createElement("td");
        d.innerHTML=v(a,c,b,"");
        return d
        }
        return J(a,c)[b]
    }
    function Pa(a,b){
    for(var c=-1,d=-1,i=0;i<a.aoData.length;i++){
        var e=v(a,i,b,"display")+"",e=e.replace(/<.*?>/g,"");
        e.length>c&&(c=e.length,d=i)
        }
        return d
    }
    function q(a){
    if(null===a)return"0px";
    if("number"==typeof a)return 0>a?"0px":a+"px";
    var b=a.charCodeAt(a.length-1);
    return 48>b||57<b?a:a+"px"
    }
    function Qa(){
    var a=l.createElement("p"),b=a.style;
    b.width="100%";
    b.height="200px";
    b.padding="0px";
    var c=l.createElement("div"),b=c.style;
    b.position="absolute";
    b.top="0px";
    b.left="0px";
    b.visibility="hidden";
    b.width="200px";
    b.height="150px";
    b.padding="0px";
    b.overflow="hidden";
    c.appendChild(a);
    l.body.appendChild(c);
    b=a.offsetWidth;
    c.style.overflow="scroll";
    a=a.offsetWidth;
    b==a&&(a=c.clientWidth);
    l.body.removeChild(c);
    return b-a
    }
    function O(a,b){
    var c,d,i,e,g,k,o=[],m=[],p=j.ext.oSort,l=a.aoData,q=a.aoColumns,G=a.oLanguage.oAria;
    if(!a.oFeatures.bServerSide&&(0!==a.aaSorting.length||null!==a.aaSortingFixed)){
        o=null!==a.aaSortingFixed?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();
        for(c=0;c<o.length;c++)if(d=o[c][0],i=R(a,d),e=a.aoColumns[d].sSortDataType,j.ext.afnSortData[e])if(g=j.ext.afnSortData[e].call(a.oInstance,a,d,i),g.length===l.length){
            i=0;
            for(e=l.length;i<e;i++)F(a,i,d,g[i])
                }else D(a,0,"Returned data sort array (col "+d+") is the wrong length");c=0;
        for(d=a.aiDisplayMaster.length;c<d;c++)m[a.aiDisplayMaster[c]]=c;
        var r=o.length,s;
        c=0;
        for(d=l.length;c<d;c++)for(i=0;i<r;i++){
            s=q[o[i][0]].aDataSort;
            g=0;
            for(k=s.length;g<k;g++)e=q[s[g]].sType,e=p[(e?e:"string")+"-pre"],l[c]._aSortData[s[g]]=e?e(v(a,c,s[g],"sort")):v(a,c,s[g],"sort")
                }
                a.aiDisplayMaster.sort(function(a,b){
            var c,d,e,i,f;
            for(c=0;c<r;c++){
                f=q[o[c][0]].aDataSort;
                d=0;
                for(e=f.length;d<e;d++)if(i=q[f[d]].sType,i=p[(i?i:"string")+"-"+o[c][1]](l[a]._aSortData[f[d]],l[b]._aSortData[f[d]]),0!==i)return i
                    }
                    return p["numeric-asc"](m[a],m[b])
            })
        }(b===n||b)&&!a.oFeatures.bDeferRender&&P(a);
    c=0;
    for(d=a.aoColumns.length;c<d;c++)e=q[c].sTitle.replace(/<.*?>/g,""),i=q[c].nTh,i.removeAttribute("aria-sort"),i.removeAttribute("aria-label"),q[c].bSortable?0<o.length&&o[0][0]==c?(i.setAttribute("aria-sort","asc"==o[0][1]?"ascending":"descending"),i.setAttribute("aria-label",e+("asc"==(q[c].asSorting[o[0][2]+1]?q[c].asSorting[o[0][2]+1]:q[c].asSorting[0])?G.sSortAscending:G.sSortDescending))):i.setAttribute("aria-label",e+("asc"==q[c].asSorting[0]?G.sSortAscending:G.sSortDescending)):i.setAttribute("aria-label",e);
    a.bSorted=!0;
    h(a.oInstance).trigger("sort",a);
    a.oFeatures.bFilter?K(a,a.oPreviousSearch,1):(a.aiDisplay=a.aiDisplayMaster.slice(),a._iDisplayStart=0,y(a),x(a))
    }
    function ia(a,b,c,d){
    Ra(b,{},function(b){
        if(!1!==a.aoColumns[c].bSortable){
            var e=function(){
                var d,e;
                if(b.shiftKey){
                    for(var f=!1,h=0;h<a.aaSorting.length;h++)if(a.aaSorting[h][0]==c){
                        f=!0;
                        d=a.aaSorting[h][0];
                        e=a.aaSorting[h][2]+1;
                        a.aoColumns[d].asSorting[e]?(a.aaSorting[h][1]=a.aoColumns[d].asSorting[e],a.aaSorting[h][2]=e):a.aaSorting.splice(h,1);
                        break
                    }!1===f&&a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])
                    }else 1==a.aaSorting.length&&a.aaSorting[0][0]==c?(d=a.aaSorting[0][0],e=a.aaSorting[0][2]+1,a.aoColumns[d].asSorting[e]||(e=0),a.aaSorting[0][1]=a.aoColumns[d].asSorting[e],a.aaSorting[0][2]=e):(a.aaSorting.splice(0,a.aaSorting.length),a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0]));
                O(a)
                };
                
            a.oFeatures.bProcessing?(E(a,!0),setTimeout(function(){
                e();
                a.oFeatures.bServerSide||E(a,!1)
                },0)):e();
            "function"==typeof d&&d(a)
            }
        })
}
function P(a){
    var b,c,d,e,f,g=a.aoColumns.length,j=a.oClasses;
    for(b=0;b<g;b++)a.aoColumns[b].bSortable&&h(a.aoColumns[b].nTh).removeClass(j.sSortAsc+" "+j.sSortDesc+" "+a.aoColumns[b].sSortingClass);
    c=null!==a.aaSortingFixed?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();
    for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable){
        f=a.aoColumns[b].sSortingClass;
        e=-1;
        for(d=0;d<c.length;d++)if(c[d][0]==b){
            f="asc"==c[d][1]?j.sSortAsc:j.sSortDesc;
            e=d;
            break
        }
        h(a.aoColumns[b].nTh).addClass(f);
        a.bJUI&&(f=h("span."+j.sSortIcon,a.aoColumns[b].nTh),f.removeClass(j.sSortJUIAsc+" "+j.sSortJUIDesc+" "+j.sSortJUI+" "+j.sSortJUIAscAllowed+" "+j.sSortJUIDescAllowed),f.addClass(-1==e?a.aoColumns[b].sSortingClassJUI:"asc"==c[e][1]?j.sSortJUIAsc:j.sSortJUIDesc))
        }else h(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);f=j.sSortColumn;
    if(a.oFeatures.bSort&&a.oFeatures.bSortClasses){
        a=J(a);
        e=[];
        for(b=0;b<g;b++)e.push("");
        b=0;
        for(d=1;b<c.length;b++)j=parseInt(c[b][0],10),e[j]=f+d,3>d&&d++;
        f=RegExp(f+"[123]");
        var o;
        b=0;
        for(c=a.length;b<c;b++)j=b%g,d=a[b].className,o=e[j],j=d.replace(f,o),j!=d?a[b].className=h.trim(j):0<o.length&&-1==d.indexOf(o)&&(a[b].className=d+" "+o)
            }
        }
function ra(a){
    if(a.oFeatures.bStateSave&&!a.bDestroying){
        var b,c;
        b=a.oScroll.bInfinite;
        var d={
            iCreate:(new Date).getTime(),
            iStart:b?0:a._iDisplayStart,
            iEnd:b?a._iDisplayLength:a._iDisplayEnd,
            iLength:a._iDisplayLength,
            aaSorting:h.extend(!0,[],a.aaSorting),
            oSearch:h.extend(!0,{},a.oPreviousSearch),
            aoSearchCols:h.extend(!0,[],a.aoPreSearchCols),
            abVisCols:[]
        };
        
        b=0;
        for(c=a.aoColumns.length;b<c;b++)d.abVisCols.push(a.aoColumns[b].bVisible);
        A(a,"aoStateSaveParams","stateSaveParams",[a,d]);
        a.fnStateSave.call(a.oInstance,a,d)
        }
    }
function Sa(a,b){
    if(a.oFeatures.bStateSave){
        var c=a.fnStateLoad.call(a.oInstance,a);
        if(c){
            var d=A(a,"aoStateLoadParams","stateLoadParams",[a,c]);
            if(-1===h.inArray(!1,d)){
                a.oLoadedState=h.extend(!0,{},c);
                a._iDisplayStart=c.iStart;
                a.iInitDisplayStart=c.iStart;
                a._iDisplayEnd=c.iEnd;
                a._iDisplayLength=c.iLength;
                a.aaSorting=c.aaSorting.slice();
                a.saved_aaSorting=c.aaSorting.slice();
                h.extend(a.oPreviousSearch,c.oSearch);
                h.extend(!0,a.aoPreSearchCols,c.aoSearchCols);
                b.saved_aoColumns=[];
                for(d=0;d<c.abVisCols.length;d++)b.saved_aoColumns[d]={},b.saved_aoColumns[d].bVisible=c.abVisCols[d];
                A(a,"aoStateLoaded","stateLoaded",[a,c])
                }
            }
    }
}
function s(a){
    for(var b=0;b<j.settings.length;b++)if(j.settings[b].nTable===a)return j.settings[b];return null
    }
    function T(a){
    for(var b=[],a=a.aoData,c=0,d=a.length;c<d;c++)null!==a[c].nTr&&b.push(a[c].nTr);
    return b
    }
    function J(a,b){
    var c=[],d,e,f,g,h,j;
    e=0;
    var o=a.aoData.length;
    b!==n&&(e=b,o=b+1);
    for(f=e;f<o;f++)if(j=a.aoData[f],null!==j.nTr){
        e=[];
        for(d=j.nTr.firstChild;d;)g=d.nodeName.toLowerCase(),("td"==g||"th"==g)&&e.push(d),d=d.nextSibling;
        g=d=0;
        for(h=a.aoColumns.length;g<h;g++)a.aoColumns[g].bVisible?c.push(e[g-d]):(c.push(j._anHidden[g]),d++)
            }
            return c
    }
    function D(a,b,c){
    a=null===a?"DataTables warning: "+c:"DataTables warning (table id = '"+a.sTableId+"'): "+c;
    if(0===b)if("alert"==j.ext.sErrMode)alert(a);else throw Error(a);else X.console&&console.log&&console.log(a)
        }
        function p(a,b,c,d){
    d===n&&(d=c);
    b[c]!==n&&(a[d]=b[c])
    }
    function Ta(a,b){
    var c,d;
    for(d in b)b.hasOwnProperty(d)&&(c=b[d],"object"===typeof e[d]&&null!==c&&!1===h.isArray(c)?h.extend(!0,a[d],c):a[d]=c);return a
    }
    function Ra(a,b,c){
    h(a).bind("click.DT",b,function(b){
        a.blur();
        c(b)
        }).bind("keypress.DT",b,function(a){
        13===a.which&&c(a)
        }).bind("selectstart.DT",function(){
        return!1
        })
    }
function z(a,b,c,d){
    c&&a[b].push({
        fn:c,
        sName:d
    })
    }
    function A(a,b,c,d){
    for(var b=a[b],e=[],f=b.length-1;0<=f;f--)e.push(b[f].fn.apply(a.oInstance,d));
    null!==c&&h(a.oInstance).trigger(c,d);
    return e
    }
    function Ua(a){
    var b=h('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden"><div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;"><div id="DT_BrowserTest" style="width:100%; height:10px;"></div></div></div>')[0];
    l.body.appendChild(b);
    a.oBrowser.bScrollOversize=100===h("#DT_BrowserTest",b)[0].offsetWidth?!0:!1;
    l.body.removeChild(b)
    }
    function Va(a){
    return function(){
        var b=[s(this[j.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
        return j.ext.oApi[a].apply(this,b)
        }
    }
var U=/\[.*?\]$/,Wa=X.JSON?JSON.stringify:function(a){
    var b=typeof a;
    if("object"!==b||null===a)return"string"===b&&(a='"'+a+'"'),a+"";
    var c,d,e=[],f=h.isArray(a);
    for(c in a)d=a[c],b=typeof d,"string"===b?d='"'+d+'"':"object"===b&&null!==d&&(d=Wa(d)),e.push((f?"":'"'+c+'":')+d);return(f?"[":"{")+e+(f?"]":"}")
    };
    
this.$=function(a,b){
    var c,d,e=[],f;
    d=s(this[j.ext.iApiIndex]);
    var g=d.aoData,o=d.aiDisplay,k=d.aiDisplayMaster;
    b||(b={});
    b=h.extend({},{
        filter:"none",
        order:"current",
        page:"all"
    },b);
    if("current"==b.page){
        c=d._iDisplayStart;
        for(d=d.fnDisplayEnd();c<d;c++)(f=g[o[c]].nTr)&&e.push(f)
            }else if("current"==b.order&&"none"==b.filter){
        c=0;
        for(d=k.length;c<d;c++)(f=g[k[c]].nTr)&&e.push(f)
            }else if("current"==b.order&&"applied"==b.filter){
        c=0;
        for(d=o.length;c<d;c++)(f=g[o[c]].nTr)&&e.push(f)
            }else if("original"==b.order&&"none"==b.filter){
        c=0;
        for(d=g.length;c<d;c++)(f=g[c].nTr)&&e.push(f)
            }else if("original"==b.order&&"applied"==b.filter){
        c=0;
        for(d=g.length;c<d;c++)f=g[c].nTr,-1!==h.inArray(c,o)&&f&&e.push(f)
            }else D(d,1,"Unknown selection options");
    e=h(e);
    c=e.filter(a);
    e=e.find(a);
    return h([].concat(h.makeArray(c),h.makeArray(e)))
    };
    
this._=function(a,b){
    var c=[],d,e,f=this.$(a,b);
    d=0;
    for(e=f.length;d<e;d++)c.push(this.fnGetData(f[d]));
    return c
    };
    
this.fnAddData=function(a,b){
    if(0===a.length)return[];
    var c=[],d,e=s(this[j.ext.iApiIndex]);
    if("object"===typeof a[0]&&null!==a[0])for(var f=0;f<a.length;f++){
        d=H(e,a[f]);
        if(-1==d)return c;
        c.push(d)
        }else{
        d=H(e,a);
        if(-1==d)return c;
        c.push(d)
        }
        e.aiDisplay=e.aiDisplayMaster.slice();
    (b===n||b)&&aa(e);
    return c
    };
    
this.fnAdjustColumnSizing=function(a){
    var b=s(this[j.ext.iApiIndex]);
    k(b);
    a===n||a?this.fnDraw(!1):(""!==b.oScroll.sX||""!==b.oScroll.sY)&&this.oApi._fnScrollDraw(b)
    };
    
this.fnClearTable=function(a){
    var b=s(this[j.ext.iApiIndex]);
    ga(b);
    (a===n||a)&&x(b)
    };
    
this.fnClose=function(a){
    for(var b=s(this[j.ext.iApiIndex]),c=0;c<b.aoOpenRows.length;c++)if(b.aoOpenRows[c].nParent==a)return(a=b.aoOpenRows[c].nTr.parentNode)&&a.removeChild(b.aoOpenRows[c].nTr),b.aoOpenRows.splice(c,1),0;return 1
    };
    
this.fnDeleteRow=function(a,b,c){
    var d=s(this[j.ext.iApiIndex]),e,f,a="object"===typeof a?I(d,a):a,g=d.aoData.splice(a,1);
    e=0;
    for(f=d.aoData.length;e<f;e++)null!==d.aoData[e].nTr&&(d.aoData[e].nTr._DT_RowIndex=e);
    e=h.inArray(a,d.aiDisplay);
    d.asDataSearch.splice(e,1);
    ha(d.aiDisplayMaster,a);
    ha(d.aiDisplay,a);
    "function"===typeof b&&b.call(this,d,g);
    d._iDisplayStart>=d.fnRecordsDisplay()&&(d._iDisplayStart-=d._iDisplayLength,0>d._iDisplayStart&&(d._iDisplayStart=0));
    if(c===n||c)y(d),x(d);
    return g
    };
    
this.fnDestroy=function(a){
    var b=s(this[j.ext.iApiIndex]),c=b.nTableWrapper.parentNode,d=b.nTBody,i,f,a=a===n?!1:a;
    b.bDestroying=!0;
    A(b,"aoDestroyCallback","destroy",[b]);
    if(!a){
        i=0;
        for(f=b.aoColumns.length;i<f;i++)!1===b.aoColumns[i].bVisible&&this.fnSetColumnVis(i,!0)
            }
            h(b.nTableWrapper).find("*").andSelf().unbind(".DT");
    h("tbody>tr>td."+b.oClasses.sRowEmpty,b.nTable).parent().remove();
    b.nTable!=b.nTHead.parentNode&&(h(b.nTable).children("thead").remove(),b.nTable.appendChild(b.nTHead));
    b.nTFoot&&b.nTable!=b.nTFoot.parentNode&&(h(b.nTable).children("tfoot").remove(),b.nTable.appendChild(b.nTFoot));
    b.nTable.parentNode.removeChild(b.nTable);
    h(b.nTableWrapper).remove();
    b.aaSorting=[];
    b.aaSortingFixed=[];
    P(b);
    h(T(b)).removeClass(b.asStripeClasses.join(" "));
    h("th, td",b.nTHead).removeClass([b.oClasses.sSortable,b.oClasses.sSortableAsc,b.oClasses.sSortableDesc,b.oClasses.sSortableNone].join(" "));
    b.bJUI&&(h("th span."+b.oClasses.sSortIcon+", td span."+b.oClasses.sSortIcon,b.nTHead).remove(),h("th, td",b.nTHead).each(function(){
        var a=h("div."+b.oClasses.sSortJUIWrapper,this),c=a.contents();
        h(this).append(c);
        a.remove()
        }));
    !a&&b.nTableReinsertBefore?c.insertBefore(b.nTable,b.nTableReinsertBefore):a||c.appendChild(b.nTable);
    i=0;
    for(f=b.aoData.length;i<f;i++)null!==b.aoData[i].nTr&&d.appendChild(b.aoData[i].nTr);
    !0===b.oFeatures.bAutoWidth&&(b.nTable.style.width=q(b.sDestroyWidth));
    if(f=b.asDestroyStripes.length){
        a=h(d).children("tr");
        for(i=0;i<f;i++)a.filter(":nth-child("+f+"n + "+i+")").addClass(b.asDestroyStripes[i])
            }
            i=0;
    for(f=j.settings.length;i<f;i++)j.settings[i]==b&&j.settings.splice(i,1);
    e=b=null
    };
    
this.fnDraw=function(a){
    var b=s(this[j.ext.iApiIndex]);
    !1===a?(y(b),x(b)):aa(b)
    };
    
this.fnFilter=function(a,b,c,d,e,f){
    var g=s(this[j.ext.iApiIndex]);
    if(g.oFeatures.bFilter){
        if(c===n||null===c)c=!1;
        if(d===n||null===d)d=!0;
        if(e===n||null===e)e=!0;
        if(f===n||null===f)f=!0;
        if(b===n||null===b){
            if(K(g,{
                sSearch:a+"",
                bRegex:c,
                bSmart:d,
                bCaseInsensitive:f
            },1),e&&g.aanFeatures.f){
                b=g.aanFeatures.f;
                c=0;
                for(d=b.length;c<d;c++)try{
                    b[c]._DT_Input!=l.activeElement&&h(b[c]._DT_Input).val(a)
                    }catch(o){
                    h(b[c]._DT_Input).val(a)
                    }
                }
            }else h.extend(g.aoPreSearchCols[b],{
    sSearch:a+"",
    bRegex:c,
    bSmart:d,
    bCaseInsensitive:f
}),K(g,g.oPreviousSearch,1)
    }
};

this.fnGetData=function(a,b){
    var c=s(this[j.ext.iApiIndex]);
    if(a!==n){
        var d=a;
        if("object"===typeof a){
            var e=a.nodeName.toLowerCase();
            "tr"===e?d=I(c,a):"td"===e&&(d=I(c,a.parentNode),b=fa(c,d,a))
            }
            return b!==n?v(c,d,b,""):c.aoData[d]!==n?c.aoData[d]._aData:null
        }
        return Z(c)
    };
    
this.fnGetNodes=function(a){
    var b=s(this[j.ext.iApiIndex]);
    return a!==n?b.aoData[a]!==n?b.aoData[a].nTr:null:T(b)
    };
    
this.fnGetPosition=function(a){
    var b=s(this[j.ext.iApiIndex]),c=a.nodeName.toUpperCase();
    return"TR"==c?I(b,a):"TD"==c||"TH"==c?(c=I(b,a.parentNode),a=fa(b,c,a),[c,R(b,a),a]):null
    };
    
this.fnIsOpen=function(a){
    for(var b=s(this[j.ext.iApiIndex]),c=0;c<b.aoOpenRows.length;c++)if(b.aoOpenRows[c].nParent==a)return!0;return!1
    };
    
this.fnOpen=function(a,b,c){
    var d=s(this[j.ext.iApiIndex]),e=T(d);
    if(-1!==h.inArray(a,e)){
        this.fnClose(a);
        var e=l.createElement("tr"),f=l.createElement("td");
        e.appendChild(f);
        f.className=c;
        f.colSpan=t(d);
        "string"===typeof b?f.innerHTML=b:h(f).html(b);
        b=h("tr",d.nTBody);
        -1!=h.inArray(a,b)&&h(e).insertAfter(a);
        d.aoOpenRows.push({
            nTr:e,
            nParent:a
        });
        return e
        }
    };

this.fnPageChange=function(a,b){
    var c=s(this[j.ext.iApiIndex]);
    qa(c,a);
    y(c);
    (b===n||b)&&x(c)
    };
    
this.fnSetColumnVis=function(a,b,c){
    var d=s(this[j.ext.iApiIndex]),e,f,g=d.aoColumns,h=d.aoData,o,m;
    if(g[a].bVisible!=b){
        if(b){
            for(e=f=0;e<a;e++)g[e].bVisible&&f++;
            m=f>=t(d);
            if(!m)for(e=a;e<g.length;e++)if(g[e].bVisible){
                o=e;
                break
            }
            e=0;
            for(f=h.length;e<f;e++)null!==h[e].nTr&&(m?h[e].nTr.appendChild(h[e]._anHidden[a]):h[e].nTr.insertBefore(h[e]._anHidden[a],J(d,e)[o]))
                }else{
            e=0;
            for(f=h.length;e<f;e++)null!==h[e].nTr&&(o=J(d,e)[a],h[e]._anHidden[a]=o,o.parentNode.removeChild(o))
                }
                g[a].bVisible=b;
        W(d,d.aoHeader);
        d.nTFoot&&W(d,d.aoFooter);
        e=0;
        for(f=d.aoOpenRows.length;e<f;e++)d.aoOpenRows[e].nTr.colSpan=t(d);
        if(c===n||c)k(d),x(d);
        ra(d)
        }
    };

this.fnSettings=function(){
    return s(this[j.ext.iApiIndex])
    };
    
this.fnSort=function(a){
    var b=s(this[j.ext.iApiIndex]);
    b.aaSorting=a;
    O(b)
    };
    
this.fnSortListener=function(a,b,c){
    ia(s(this[j.ext.iApiIndex]),a,b,c)
    };
    
this.fnUpdate=function(a,b,c,d,e){
    var f=s(this[j.ext.iApiIndex]),b="object"===typeof b?I(f,b):b;
    if(h.isArray(a)&&c===n){
        f.aoData[b]._aData=a.slice();
        for(c=0;c<f.aoColumns.length;c++)this.fnUpdate(v(f,b,c),b,c,!1,!1)
            }else if(h.isPlainObject(a)&&c===n){
        f.aoData[b]._aData=h.extend(!0,{},a);
        for(c=0;c<f.aoColumns.length;c++)this.fnUpdate(v(f,b,c),b,c,!1,!1)
            }else{
        F(f,b,c,a);
        var a=v(f,b,c,"display"),g=f.aoColumns[c];
        null!==g.fnRender&&(a=S(f,b,c),g.bUseRendered&&F(f,b,c,a));
        null!==f.aoData[b].nTr&&(J(f,b)[c].innerHTML=a)
        }
        c=h.inArray(b,f.aiDisplay);
    f.asDataSearch[c]=na(f,Y(f,b,"filter",r(f,"bSearchable")));
    (e===n||e)&&k(f);
    (d===n||d)&&aa(f);
    return 0
    };
    
this.fnVersionCheck=j.ext.fnVersionCheck;
this.oApi={
    _fnExternApiFunc:Va,
    _fnInitialise:ba,
    _fnInitComplete:$,
    _fnLanguageCompat:pa,
    _fnAddColumn:o,
    _fnColumnOptions:m,
    _fnAddData:H,
    _fnCreateTr:ea,
    _fnGatherData:ua,
    _fnBuildHead:va,
    _fnDrawHead:W,
    _fnDraw:x,
    _fnReDraw:aa,
    _fnAjaxUpdate:wa,
    _fnAjaxParameters:Ea,
    _fnAjaxUpdateDraw:Fa,
    _fnServerParams:ka,
    _fnAddOptionsHtml:xa,
    _fnFeatureHtmlTable:Ba,
    _fnScrollDraw:La,
    _fnAdjustColumnSizing:k,
    _fnFeatureHtmlFilter:za,
    _fnFilterComplete:K,
    _fnFilterCustom:Ia,
    _fnFilterColumn:Ha,
    _fnFilter:Ga,
    _fnBuildSearchArray:la,
    _fnBuildSearchRow:na,
    _fnFilterCreateSearch:ma,
    _fnDataToSearch:Ja,
    _fnSort:O,
    _fnSortAttachListener:ia,
    _fnSortingClasses:P,
    _fnFeatureHtmlPaginate:Da,
    _fnPageChange:qa,
    _fnFeatureHtmlInfo:Ca,
    _fnUpdateInfo:Ka,
    _fnFeatureHtmlLength:ya,
    _fnFeatureHtmlProcessing:Aa,
    _fnProcessingDisplay:E,
    _fnVisibleToColumnIndex:G,
    _fnColumnIndexToVisible:R,
    _fnNodeToDataIndex:I,
    _fnVisbleColumns:t,
    _fnCalculateEnd:y,
    _fnConvertToWidth:Ma,
    _fnCalculateColumnWidths:da,
    _fnScrollingWidthAdjust:Oa,
    _fnGetWidestNode:Na,
    _fnGetMaxLenString:Pa,
    _fnStringToCss:q,
    _fnDetectType:B,
    _fnSettingsFromNode:s,
    _fnGetDataMaster:Z,
    _fnGetTrNodes:T,
    _fnGetTdNodes:J,
    _fnEscapeRegex:oa,
    _fnDeleteIndex:ha,
    _fnReOrderIndex:u,
    _fnColumnOrdering:M,
    _fnLog:D,
    _fnClearTable:ga,
    _fnSaveState:ra,
    _fnLoadState:Sa,
    _fnCreateCookie:function(a,b,c,d,e){
        var f=new Date;
        f.setTime(f.getTime()+1E3*c);
        var c=X.location.pathname.split("/"),a=a+"_"+c.pop().replace(/[\/:]/g,"").toLowerCase(),g;
        null!==e?(g="function"===typeof h.parseJSON?h.parseJSON(b):eval("("+b+")"),b=e(a,g,f.toGMTString(),c.join("/")+"/")):b=a+"="+encodeURIComponent(b)+"; expires="+f.toGMTString()+"; path="+c.join("/")+"/";
        a=l.cookie.split(";");
        e=b.split(";")[0].length;
        f=[];
        if(4096<e+l.cookie.length+10){
            for(var j=0,o=a.length;j<o;j++)if(-1!=a[j].indexOf(d)){
                var k=a[j].split("=");
                try{
                    (g=eval("("+decodeURIComponent(k[1])+")"))&&g.iCreate&&f.push({
                        name:k[0],
                        time:g.iCreate
                        })
                    }catch(m){}
            }
            for(f.sort(function(a,b){
            return b.time-a.time
            });4096<e+l.cookie.length+10;){
            if(0===f.length)return;
            d=f.pop();
            l.cookie=d.name+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+c.join("/")+"/"
            }
        }
        l.cookie=b
},
_fnReadCookie:function(a){
    for(var b=X.location.pathname.split("/"),a=a+"_"+b[b.length-1].replace(/[\/:]/g,"").toLowerCase()+"=",b=l.cookie.split(";"),c=0;c<b.length;c++){
        for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);
        if(0===d.indexOf(a))return decodeURIComponent(d.substring(a.length,d.length))
            }
            return null
    },
_fnDetectHeader:V,
_fnGetUniqueThs:N,
_fnScrollBarWidth:Qa,
_fnApplyToChildren:C,
_fnMap:p,
_fnGetRowData:Y,
_fnGetCellData:v,
_fnSetCellData:F,
_fnGetObjectDataFn:Q,
_fnSetObjectDataFn:L,
_fnApplyColumnDefs:ta,
_fnBindAction:Ra,
_fnExtend:Ta,
_fnCallbackReg:z,
_fnCallbackFire:A,
_fnJsonString:Wa,
_fnRender:S,
_fnNodeToColumnIndex:fa,
_fnInfoMacros:ja,
_fnBrowserDetect:Ua,
_fnGetColumns:r
};

h.extend(j.ext.oApi,this.oApi);
for(var sa in j.ext.oApi)sa&&(this[sa]=Va(sa));var ca=this;
this.each(function(){
    var a=0,b,c,d;
    c=this.getAttribute("id");
    var i=!1,f=!1;
    if("table"!=this.nodeName.toLowerCase())D(null,0,"Attempted to initialise DataTables on a node which is not a table: "+this.nodeName);
    else{
        a=0;
        for(b=j.settings.length;a<b;a++){
            if(j.settings[a].nTable==this){
                if(e===n||e.bRetrieve)return j.settings[a].oInstance;
                if(e.bDestroy){
                    j.settings[a].oInstance.fnDestroy();
                    break
                }else{
                    D(j.settings[a],0,"Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy");
                    return
                }
            }
            if(j.settings[a].sTableId==this.id){
            j.settings.splice(a,1);
            break
        }
        }
        if(null===c||""===c)this.id=c="DataTables_Table_"+j.ext._oExternConfig.iNextUnique++;
    var g=h.extend(!0,{},j.models.oSettings,{
    nTable:this,
    oApi:ca.oApi,
    oInit:e,
    sDestroyWidth:h(this).width(),
    sInstance:c,
    sTableId:c
});
j.settings.push(g);
    g.oInstance=1===ca.length?ca:h(this).dataTable();
    e||(e={});
    e.oLanguage&&pa(e.oLanguage);
    e=Ta(h.extend(!0,{},j.defaults),e);
    p(g.oFeatures,e,"bPaginate");
    p(g.oFeatures,e,"bLengthChange");
    p(g.oFeatures,e,"bFilter");
    p(g.oFeatures,e,"bSort");
    p(g.oFeatures,e,"bInfo");
    p(g.oFeatures,e,"bProcessing");
    p(g.oFeatures,e,"bAutoWidth");
    p(g.oFeatures,e,"bSortClasses");
    p(g.oFeatures,e,"bServerSide");
    p(g.oFeatures,e,"bDeferRender");
    p(g.oScroll,e,"sScrollX","sX");
    p(g.oScroll,e,"sScrollXInner","sXInner");
    p(g.oScroll,e,"sScrollY","sY");
    p(g.oScroll,e,"bScrollCollapse","bCollapse");
    p(g.oScroll,e,"bScrollInfinite","bInfinite");
    p(g.oScroll,e,"iScrollLoadGap","iLoadGap");
    p(g.oScroll,e,"bScrollAutoCss","bAutoCss");
    p(g,e,"asStripeClasses");
    p(g,e,"asStripClasses","asStripeClasses");
    p(g,e,"fnServerData");
    p(g,e,"fnFormatNumber");
    p(g,e,"sServerMethod");
    p(g,e,"aaSorting");
    p(g,e,"aaSortingFixed");
    p(g,e,"aLengthMenu");
    p(g,e,"sPaginationType");
    p(g,e,"sAjaxSource");
    p(g,e,"sAjaxDataProp");
    p(g,e,"iCookieDuration");
    p(g,e,"sCookiePrefix");
    p(g,e,"sDom");
    p(g,e,"bSortCellsTop");
    p(g,e,"iTabIndex");
    p(g,e,"oSearch","oPreviousSearch");
    p(g,e,"aoSearchCols","aoPreSearchCols");
    p(g,e,"iDisplayLength","_iDisplayLength");
    p(g,e,"bJQueryUI","bJUI");
    p(g,e,"fnCookieCallback");
    p(g,e,"fnStateLoad");
    p(g,e,"fnStateSave");
    p(g.oLanguage,e,"fnInfoCallback");
    z(g,"aoDrawCallback",e.fnDrawCallback,"user");
    z(g,"aoServerParams",e.fnServerParams,"user");
    z(g,"aoStateSaveParams",e.fnStateSaveParams,"user");
    z(g,"aoStateLoadParams",e.fnStateLoadParams,"user");
    z(g,"aoStateLoaded",e.fnStateLoaded,"user");
    z(g,"aoRowCallback",e.fnRowCallback,"user");
    z(g,"aoRowCreatedCallback",e.fnCreatedRow,"user");
    z(g,"aoHeaderCallback",e.fnHeaderCallback,"user");
    z(g,"aoFooterCallback",e.fnFooterCallback,"user");
    z(g,"aoInitComplete",e.fnInitComplete,"user");
    z(g,"aoPreDrawCallback",e.fnPreDrawCallback,"user");
    g.oFeatures.bServerSide&&g.oFeatures.bSort&&g.oFeatures.bSortClasses?z(g,"aoDrawCallback",P,"server_side_sort_classes"):g.oFeatures.bDeferRender&&z(g,"aoDrawCallback",P,"defer_sort_classes");
    e.bJQueryUI?(h.extend(g.oClasses,j.ext.oJUIClasses),e.sDom===j.defaults.sDom&&"lfrtip"===j.defaults.sDom&&(g.sDom='<"H"lfr>t<"F"ip>')):h.extend(g.oClasses,j.ext.oStdClasses);
    h(this).addClass(g.oClasses.sTable);
    if(""!==g.oScroll.sX||""!==g.oScroll.sY)g.oScroll.iBarWidth=Qa();
    g.iInitDisplayStart===n&&(g.iInitDisplayStart=e.iDisplayStart,g._iDisplayStart=e.iDisplayStart);
    e.bStateSave&&(g.oFeatures.bStateSave=!0,Sa(g,e),z(g,"aoDrawCallback",ra,"state_save"));
    null!==e.iDeferLoading&&(g.bDeferLoading=!0,a=h.isArray(e.iDeferLoading),g._iRecordsDisplay=a?e.iDeferLoading[0]:e.iDeferLoading,g._iRecordsTotal=a?e.iDeferLoading[1]:e.iDeferLoading);
    null!==e.aaData&&(f=!0);
    ""!==e.oLanguage.sUrl?(g.oLanguage.sUrl=e.oLanguage.sUrl,h.getJSON(g.oLanguage.sUrl,null,function(a){
    pa(a);
    h.extend(true,g.oLanguage,e.oLanguage,a);
    ba(g)
    }),i=!0):h.extend(!0,g.oLanguage,e.oLanguage);
    null===e.asStripeClasses&&(g.asStripeClasses=[g.oClasses.sStripeOdd,g.oClasses.sStripeEven]);
    b=g.asStripeClasses.length;
    g.asDestroyStripes=[];
    if(b){
    c=!1;
    d=h(this).children("tbody").children("tr:lt("+b+")");
    for(a=0;a<b;a++)d.hasClass(g.asStripeClasses[a])&&(c=!0,g.asDestroyStripes.push(g.asStripeClasses[a]));
    c&&d.removeClass(g.asStripeClasses.join(" "))
    }
    c=[];
a=this.getElementsByTagName("thead");
    0!==a.length&&(V(g.aoHeader,a[0]),c=N(g));
    if(null===e.aoColumns){
    d=[];
    a=0;
    for(b=c.length;a<b;a++)d.push(null)
        }else d=e.aoColumns;
    a=0;
    for(b=d.length;a<b;a++)e.saved_aoColumns!==n&&e.saved_aoColumns.length==b&&(null===d[a]&&(d[a]={}),d[a].bVisible=e.saved_aoColumns[a].bVisible),o(g,c?c[a]:null);
    ta(g,e.aoColumnDefs,d,function(a,b){
    m(g,a,b)
    });
a=0;
for(b=g.aaSorting.length;a<b;a++){
    g.aaSorting[a][0]>=g.aoColumns.length&&(g.aaSorting[a][0]=0);
    var k=g.aoColumns[g.aaSorting[a][0]];
    g.aaSorting[a][2]===n&&(g.aaSorting[a][2]=0);
    e.aaSorting===n&&g.saved_aaSorting===n&&(g.aaSorting[a][1]=k.asSorting[0]);
    c=0;
    for(d=k.asSorting.length;c<d;c++)if(g.aaSorting[a][1]==k.asSorting[c]){
        g.aaSorting[a][2]=c;
        break
    }
    }
    P(g);
Ua(g);
a=h(this).children("caption").each(function(){
    this._captionSide=h(this).css("caption-side")
    });
b=h(this).children("thead");
0===b.length&&(b=[l.createElement("thead")],this.appendChild(b[0]));
g.nTHead=b[0];
b=h(this).children("tbody");
0===b.length&&(b=[l.createElement("tbody")],this.appendChild(b[0]));
g.nTBody=b[0];
g.nTBody.setAttribute("role","alert");
g.nTBody.setAttribute("aria-live","polite");
g.nTBody.setAttribute("aria-relevant","all");
b=h(this).children("tfoot");
if(0===b.length&&0<a.length&&(""!==g.oScroll.sX||""!==g.oScroll.sY))b=[l.createElement("tfoot")],this.appendChild(b[0]);
0<b.length&&(g.nTFoot=b[0],V(g.aoFooter,g.nTFoot));
if(f)for(a=0;a<e.aaData.length;a++)H(g,e.aaData[a]);else ua(g);
g.aiDisplay=g.aiDisplayMaster.slice();
g.bInitialised=!0;
!1===i&&ba(g)
}
});
ca=null;
return this
};

j.fnVersionCheck=function(e){
    for(var h=function(e,h){
        for(;e.length<h;)e+="0";
        return e
        },m=j.ext.sVersion.split("."),e=e.split("."),k="",n="",l=0,t=e.length;l<t;l++)k+=h(m[l],3),n+=h(e[l],3);
    return parseInt(k,10)>=parseInt(n,10)
    };
    
j.fnIsDataTable=function(e){
    for(var h=j.settings,m=0;m<h.length;m++)if(h[m].nTable===e||h[m].nScrollHead===e||h[m].nScrollFoot===e)return!0;return!1
    };
    
j.fnTables=function(e){
    var o=[];
    jQuery.each(j.settings,function(j,k){
        (!e||!0===e&&h(k.nTable).is(":visible"))&&o.push(k.nTable)
        });
    return o
    };
    
j.version="1.9.4";
j.settings=[];
j.models={};

j.models.ext={
    afnFiltering:[],
    afnSortData:[],
    aoFeatures:[],
    aTypes:[],
    fnVersionCheck:j.fnVersionCheck,
    iApiIndex:0,
    ofnSearch:{},
    oApi:{},
    oStdClasses:{},
    oJUIClasses:{},
    oPagination:{},
    oSort:{},
    sVersion:j.version,
    sErrMode:"alert",
    _oExternConfig:{
        iNextUnique:0
    }
};

j.models.oSearch={
    bCaseInsensitive:!0,
    sSearch:"",
    bRegex:!1,
    bSmart:!0
    };
    
j.models.oRow={
    nTr:null,
    _aData:[],
    _aSortData:[],
    _anHidden:[],
    _sRowStripe:""
};

j.models.oColumn={
    aDataSort:null,
    asSorting:null,
    bSearchable:null,
    bSortable:null,
    bUseRendered:null,
    bVisible:null,
    _bAutoType:!0,
    fnCreatedCell:null,
    fnGetData:null,
    fnRender:null,
    fnSetData:null,
    mData:null,
    mRender:null,
    nTh:null,
    nTf:null,
    sClass:null,
    sContentPadding:null,
    sDefaultContent:null,
    sName:null,
    sSortDataType:"std",
    sSortingClass:null,
    sSortingClassJUI:null,
    sTitle:null,
    sType:null,
    sWidth:null,
    sWidthOrig:null
};

j.defaults={
    aaData:null,
    aaSorting:[[0,"asc"]],
    aaSortingFixed:null,
    aLengthMenu:[10,25,50,100],
    aoColumns:null,
    aoColumnDefs:null,
    aoSearchCols:[],
    asStripeClasses:null,
    bAutoWidth:!0,
    bDeferRender:!1,
    bDestroy:!1,
    bFilter:!0,
    bInfo:!0,
    bJQueryUI:!1,
    bLengthChange:!0,
    bPaginate:!0,
    bProcessing:!1,
    bRetrieve:!1,
    bScrollAutoCss:!0,
    bScrollCollapse:!1,
    bScrollInfinite:!1,
    bServerSide:!1,
    bSort:!0,
    bSortCellsTop:!1,
    bSortClasses:!0,
    bStateSave:!1,
    fnCookieCallback:null,
    fnCreatedRow:null,
    fnDrawCallback:null,
    fnFooterCallback:null,
    fnFormatNumber:function(e){
        if(1E3>e)return e;
        for(var h=e+"",e=h.split(""),j="",h=h.length,k=0;k<h;k++)0===k%3&&0!==k&&(j=this.oLanguage.sInfoThousands+j),j=e[h-k-1]+j;
        return j
        },
    fnHeaderCallback:null,
    fnInfoCallback:null,
    fnInitComplete:null,
    fnPreDrawCallback:null,
    fnRowCallback:null,
    fnServerData:function(e,j,m,k){
        k.jqXHR=h.ajax({
            url:e,
            data:j,
            success:function(e){
                e.sError&&k.oApi._fnLog(k,0,e.sError);
                h(k.oInstance).trigger("xhr",[k,e]);
                m(e)
                },
            dataType:"json",
            cache:!1,
            type:k.sServerMethod,
            error:function(e,h){
                "parsererror"==h&&k.oApi._fnLog(k,0,"DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")
                }
            })
    },
fnServerParams:null,
fnStateLoad:function(e){
    var e=this.oApi._fnReadCookie(e.sCookiePrefix+e.sInstance),j;
    try{
        j="function"===typeof h.parseJSON?h.parseJSON(e):eval("("+e+")")
        }catch(m){
        j=null
        }
        return j
    },
fnStateLoadParams:null,
fnStateLoaded:null,
fnStateSave:function(e,h){
    this.oApi._fnCreateCookie(e.sCookiePrefix+e.sInstance,this.oApi._fnJsonString(h),e.iCookieDuration,e.sCookiePrefix,e.fnCookieCallback)
    },
fnStateSaveParams:null,
iCookieDuration:7200,
iDeferLoading:null,
iDisplayLength:10,
iDisplayStart:0,
iScrollLoadGap:100,
iTabIndex:0,
oLanguage:{
    oAria:{
        sSortAscending:": activate to sort column ascending",
        sSortDescending:": activate to sort column descending"
    },
    oPaginate:{
        sFirst:"First",
        sLast:"Last",
        sNext:"Next",
        sPrevious:"Previous"
    },
    sEmptyTable:"No data available in table",
    sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",
    sInfoEmpty:"Showing 0 to 0 of 0 entries",
    sInfoFiltered:"(filtered from _MAX_ total entries)",
    sInfoPostFix:"",
    sInfoThousands:",",
    sLengthMenu:"Show _MENU_ entries",
    sLoadingRecords:"Loading...",
    sProcessing:"Processing...",
    sSearch:"Search:",
    sUrl:"",
    sZeroRecords:"No matching records found"
},
oSearch:h.extend({},j.models.oSearch),
sAjaxDataProp:"aaData",
sAjaxSource:null,
sCookiePrefix:"SpryMedia_DataTables_",
sDom:"lfrtip",
sPaginationType:"two_button",
sScrollX:"",
sScrollXInner:"",
sScrollY:"",
sServerMethod:"GET"
};

j.defaults.columns={
    aDataSort:null,
    asSorting:["asc","desc"],
    bSearchable:!0,
    bSortable:!0,
    bUseRendered:!0,
    bVisible:!0,
    fnCreatedCell:null,
    fnRender:null,
    iDataSort:-1,
    mData:null,
    mRender:null,
    sCellType:"td",
    sClass:"",
    sContentPadding:"",
    sDefaultContent:null,
    sName:"",
    sSortDataType:"std",
    sTitle:null,
    sType:null,
    sWidth:null
};

j.models.oSettings={
    oFeatures:{
        bAutoWidth:null,
        bDeferRender:null,
        bFilter:null,
        bInfo:null,
        bLengthChange:null,
        bPaginate:null,
        bProcessing:null,
        bServerSide:null,
        bSort:null,
        bSortClasses:null,
        bStateSave:null
    },
    oScroll:{
        bAutoCss:null,
        bCollapse:null,
        bInfinite:null,
        iBarWidth:0,
        iLoadGap:null,
        sX:null,
        sXInner:null,
        sY:null
    },
    oLanguage:{
        fnInfoCallback:null
    },
    oBrowser:{
        bScrollOversize:!1
        },
    aanFeatures:[],
    aoData:[],
    aiDisplay:[],
    aiDisplayMaster:[],
    aoColumns:[],
    aoHeader:[],
    aoFooter:[],
    asDataSearch:[],
    oPreviousSearch:{},
    aoPreSearchCols:[],
    aaSorting:null,
    aaSortingFixed:null,
    asStripeClasses:null,
    asDestroyStripes:[],
    sDestroyWidth:0,
    aoRowCallback:[],
    aoHeaderCallback:[],
    aoFooterCallback:[],
    aoDrawCallback:[],
    aoRowCreatedCallback:[],
    aoPreDrawCallback:[],
    aoInitComplete:[],
    aoStateSaveParams:[],
    aoStateLoadParams:[],
    aoStateLoaded:[],
    sTableId:"",
    nTable:null,
    nTHead:null,
    nTFoot:null,
    nTBody:null,
    nTableWrapper:null,
    bDeferLoading:!1,
    bInitialised:!1,
    aoOpenRows:[],
    sDom:null,
    sPaginationType:"two_button",
    iCookieDuration:0,
    sCookiePrefix:"",
    fnCookieCallback:null,
    aoStateSave:[],
    aoStateLoad:[],
    oLoadedState:null,
    sAjaxSource:null,
    sAjaxDataProp:null,
    bAjaxDataGet:!0,
    jqXHR:null,
    fnServerData:null,
    aoServerParams:[],
    sServerMethod:null,
    fnFormatNumber:null,
    aLengthMenu:null,
    iDraw:0,
    bDrawing:!1,
    iDrawError:-1,
    _iDisplayLength:10,
    _iDisplayStart:0,
    _iDisplayEnd:10,
    _iRecordsTotal:0,
    _iRecordsDisplay:0,
    bJUI:null,
    oClasses:{},
    bFiltered:!1,
    bSorted:!1,
    bSortCellsTop:null,
    oInit:null,
    aoDestroyCallback:[],
    fnRecordsTotal:function(){
        return this.oFeatures.bServerSide?parseInt(this._iRecordsTotal,10):this.aiDisplayMaster.length
        },
    fnRecordsDisplay:function(){
        return this.oFeatures.bServerSide?parseInt(this._iRecordsDisplay,10):this.aiDisplay.length
        },
    fnDisplayEnd:function(){
        return this.oFeatures.bServerSide?!1===this.oFeatures.bPaginate||-1==this._iDisplayLength?this._iDisplayStart+this.aiDisplay.length:Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay):this._iDisplayEnd
        },
    oInstance:null,
    sInstance:null,
    iTabIndex:0,
    nScrollHead:null,
    nScrollFoot:null
};

j.ext=h.extend(!0,{},j.models.ext);
h.extend(j.ext.oStdClasses,{
    sTable:"dataTable",
    sPagePrevEnabled:"paginate_enabled_previous",
    sPagePrevDisabled:"paginate_disabled_previous",
    sPageNextEnabled:"paginate_enabled_next",
    sPageNextDisabled:"paginate_disabled_next",
    sPageJUINext:"",
    sPageJUIPrev:"",
    sPageButton:"paginate_button",
    sPageButtonActive:"paginate_active",
    sPageButtonStaticDisabled:"paginate_button paginate_button_disabled",
    sPageFirst:"first",
    sPagePrevious:"previous",
    sPageNext:"next",
    sPageLast:"last",
    sStripeOdd:"odd",
    sStripeEven:"even",
    sRowEmpty:"dataTables_empty",
    sWrapper:"dataTables_wrapper",
    sFilter:"dataTables_filter",
    sInfo:"dataTables_info",
    sPaging:"dataTables_paginate paging_",
    sLength:"dataTables_length",
    sProcessing:"dataTables_processing",
    sSortAsc:"sorting_asc",
    sSortDesc:"sorting_desc",
    sSortable:"sorting",
    sSortableAsc:"sorting_asc_disabled",
    sSortableDesc:"sorting_desc_disabled",
    sSortableNone:"sorting_disabled",
    sSortColumn:"sorting_",
    sSortJUIAsc:"",
    sSortJUIDesc:"",
    sSortJUI:"",
    sSortJUIAscAllowed:"",
    sSortJUIDescAllowed:"",
    sSortJUIWrapper:"",
    sSortIcon:"",
    sScrollWrapper:"dataTables_scroll",
    sScrollHead:"dataTables_scrollHead",
    sScrollHeadInner:"dataTables_scrollHeadInner",
    sScrollBody:"dataTables_scrollBody",
    sScrollFoot:"dataTables_scrollFoot",
    sScrollFootInner:"dataTables_scrollFootInner",
    sFooterTH:"",
    sJUIHeader:"",
    sJUIFooter:""
});
h.extend(j.ext.oJUIClasses,j.ext.oStdClasses,{
    sPagePrevEnabled:"fg-button ui-button ui-state-default ui-corner-left",
    sPagePrevDisabled:"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
    sPageNextEnabled:"fg-button ui-button ui-state-default ui-corner-right",
    sPageNextDisabled:"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
    sPageJUINext:"ui-icon ui-icon-circle-arrow-e",
    sPageJUIPrev:"ui-icon ui-icon-circle-arrow-w",
    sPageButton:"fg-button ui-button ui-state-default",
    sPageButtonActive:"fg-button ui-button ui-state-default ui-state-disabled",
    sPageButtonStaticDisabled:"fg-button ui-button ui-state-default ui-state-disabled",
    sPageFirst:"first ui-corner-tl ui-corner-bl",
    sPageLast:"last ui-corner-tr ui-corner-br",
    sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
    sSortAsc:"ui-state-default",
    sSortDesc:"ui-state-default",
    sSortable:"ui-state-default",
    sSortableAsc:"ui-state-default",
    sSortableDesc:"ui-state-default",
    sSortableNone:"ui-state-default",
    sSortJUIAsc:"css_right ui-icon ui-icon-triangle-1-n",
    sSortJUIDesc:"css_right ui-icon ui-icon-triangle-1-s",
    sSortJUI:"css_right ui-icon ui-icon-carat-2-n-s",
    sSortJUIAscAllowed:"css_right ui-icon ui-icon-carat-1-n",
    sSortJUIDescAllowed:"css_right ui-icon ui-icon-carat-1-s",
    sSortJUIWrapper:"DataTables_sort_wrapper",
    sSortIcon:"DataTables_sort_icon",
    sScrollHead:"dataTables_scrollHead ui-state-default",
    sScrollFoot:"dataTables_scrollFoot ui-state-default",
    sFooterTH:"ui-state-default",
    sJUIHeader:"fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix",
    sJUIFooter:"fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"
});
h.extend(j.ext.oPagination,{
    two_button:{
        fnInit:function(e,j,m){
            var k=e.oLanguage.oPaginate,n=function(h){
                e.oApi._fnPageChange(e,h.data.action)&&m(e)
                },k=!e.bJUI?'<a class="'+e.oClasses.sPagePrevDisabled+'" tabindex="'+e.iTabIndex+'" role="button">'+k.sPrevious+'</a><a class="'+e.oClasses.sPageNextDisabled+'" tabindex="'+e.iTabIndex+'" role="button">'+k.sNext+"</a>":'<a class="'+e.oClasses.sPagePrevDisabled+'" tabindex="'+e.iTabIndex+'" role="button"><span class="'+e.oClasses.sPageJUIPrev+'"></span></a><a class="'+e.oClasses.sPageNextDisabled+'" tabindex="'+e.iTabIndex+'" role="button"><span class="'+e.oClasses.sPageJUINext+'"></span></a>';
            h(j).append(k);
            var l=h("a",j),k=l[0],l=l[1];
            e.oApi._fnBindAction(k,{
                action:"previous"
            },n);
            e.oApi._fnBindAction(l,{
                action:"next"
            },n);
            e.aanFeatures.p||(j.id=e.sTableId+"_paginate",k.id=e.sTableId+"_previous",l.id=e.sTableId+"_next",k.setAttribute("aria-controls",e.sTableId),l.setAttribute("aria-controls",e.sTableId))
            },
        fnUpdate:function(e){
            if(e.aanFeatures.p)for(var h=e.oClasses,j=e.aanFeatures.p,k,l=0,n=j.length;l<n;l++)if(k=j[l].firstChild)k.className=0===e._iDisplayStart?h.sPagePrevDisabled:h.sPagePrevEnabled,k=k.nextSibling,k.className=e.fnDisplayEnd()==e.fnRecordsDisplay()?h.sPageNextDisabled:h.sPageNextEnabled
                }
            },
iFullNumbersShowPages:5,
full_numbers:{
    fnInit:function(e,j,m){
        var k=e.oLanguage.oPaginate,l=e.oClasses,n=function(h){
            e.oApi._fnPageChange(e,h.data.action)&&m(e)
            };
            
        h(j).append('<a  tabindex="'+e.iTabIndex+'" class="'+l.sPageButton+" "+l.sPageFirst+'">'+k.sFirst+'</a><a  tabindex="'+e.iTabIndex+'" class="'+l.sPageButton+" "+l.sPagePrevious+'">'+k.sPrevious+'</a><span></span><a tabindex="'+e.iTabIndex+'" class="'+l.sPageButton+" "+l.sPageNext+'">'+k.sNext+'</a><a tabindex="'+e.iTabIndex+'" class="'+l.sPageButton+" "+l.sPageLast+'">'+k.sLast+"</a>");
        var t=h("a",j),k=t[0],l=t[1],r=t[2],t=t[3];
        e.oApi._fnBindAction(k,{
            action:"first"
        },n);
        e.oApi._fnBindAction(l,{
            action:"previous"
        },n);
        e.oApi._fnBindAction(r,{
            action:"next"
        },n);
        e.oApi._fnBindAction(t,{
            action:"last"
        },n);
        e.aanFeatures.p||(j.id=e.sTableId+"_paginate",k.id=e.sTableId+"_first",l.id=e.sTableId+"_previous",r.id=e.sTableId+"_next",t.id=e.sTableId+"_last")
        },
    fnUpdate:function(e,o){
        if(e.aanFeatures.p){
            var m=j.ext.oPagination.iFullNumbersShowPages,k=Math.floor(m/2),l=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength),n=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1,t="",r,B=e.oClasses,u,M=e.aanFeatures.p,L=function(h){
                e.oApi._fnBindAction(this,{
                    page:h+r-1
                    },function(h){
                    e.oApi._fnPageChange(e,h.data.page);
                    o(e);
                    h.preventDefault()
                    })
                };
            -1===e._iDisplayLength?n=k=r=1:l<m?(r=1,k=l):n<=k?(r=1,k=m):n>=l-k?(r=l-m+1,k=l):(r=n-Math.ceil(m/2)+1,k=r+m-1);
            for(m=r;m<=k;m++)t+=n!==m?'<a tabindex="'+e.iTabIndex+'" class="'+B.sPageButton+'">'+e.fnFormatNumber(m)+"</a>":'<a tabindex="'+e.iTabIndex+'" class="'+B.sPageButtonActive+'">'+e.fnFormatNumber(m)+"</a>";
            m=0;
            for(k=M.length;m<k;m++)u=M[m],u.hasChildNodes()&&(h("span:eq(0)",u).html(t).children("a").each(L),u=u.getElementsByTagName("a"),u=[u[0],u[1],u[u.length-2],u[u.length-1]],h(u).removeClass(B.sPageButton+" "+B.sPageButtonActive+" "+B.sPageButtonStaticDisabled),h([u[0],u[1]]).addClass(1==n?B.sPageButtonStaticDisabled:B.sPageButton),h([u[2],u[3]]).addClass(0===l||n===l||-1===e._iDisplayLength?B.sPageButtonStaticDisabled:B.sPageButton))
                }
            }
}
});
h.extend(j.ext.oSort,{
    "string-pre":function(e){
        "string"!=typeof e&&(e=null!==e&&e.toString?e.toString():"");
        return e.toLowerCase()
        },
    "string-asc":function(e,h){
        return e<h?-1:e>h?1:0
        },
    "string-desc":function(e,h){
        return e<h?1:e>h?-1:0
        },
    "html-pre":function(e){
        return e.replace(/<.*?>/g,"").toLowerCase()
        },
    "html-asc":function(e,h){
        return e<h?-1:e>h?1:0
        },
    "html-desc":function(e,h){
        return e<h?1:e>h?-1:0
        },
    "date-pre":function(e){
        e=Date.parse(e);
        if(isNaN(e)||""===e)e=Date.parse("01/01/1970 00:00:00");
        return e
        },
    "date-asc":function(e,h){
        return e-h
        },
    "date-desc":function(e,h){
        return h-e
        },
    "numeric-pre":function(e){
        return"-"==e||""===e?0:1*e
        },
    "numeric-asc":function(e,h){
        return e-h
        },
    "numeric-desc":function(e,h){
        return h-e
        }
    });
h.extend(j.ext.aTypes,[function(e){
    if("number"===typeof e)return"numeric";
    if("string"!==typeof e)return null;
    var h,j=!1;
    h=e.charAt(0);
    if(-1=="0123456789-".indexOf(h))return null;
    for(var k=1;k<e.length;k++){
        h=e.charAt(k);
        if(-1=="0123456789.".indexOf(h))return null;
        if("."==h){
            if(j)return null;
            j=!0
            }
        }
    return"numeric"
},function(e){
    var h=Date.parse(e);
    return null!==h&&!isNaN(h)||"string"===typeof e&&0===e.length?"date":null
    },function(e){
    return"string"===typeof e&&-1!=e.indexOf("<")&&-1!=e.indexOf(">")?"html":null
    }]);
h.fn.DataTable=j;
h.fn.dataTable=j;
h.fn.dataTableSettings=j.settings;
h.fn.dataTableExt=j.ext
};

"function"===typeof define&&define.amd?define(["jquery"],L):jQuery&&!jQuery.fn.dataTable&&L(jQuery)
})(window,document);
!function($){
    var Datepicker=function(element,options){
        this.element=$(element);
        this.format=DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
        this.picker=$(DPGlobal.template)
        .appendTo('body')
        .on({
            click:$.proxy(this.click,this)
            });
        this.isInput=this.element.is('input');
        this.component=this.element.is('.date')?this.element.find('.add-on'):false;
        if(this.isInput){
            this.element.on({
                focus:$.proxy(this.show,this),
                keyup:$.proxy(this.update,this)
                });
        }else{
            if(this.component){
                this.component.on('click',$.proxy(this.show,this));
            }else{
                this.element.on('click',$.proxy(this.show,this));
            }
        }
    this.minViewMode=options.minViewMode||this.element.data('date-minviewmode')||0;
    if(typeof this.minViewMode==='string'){
        switch(this.minViewMode){
            case'months':
                this.minViewMode=1;
                break;
            case'years':
                this.minViewMode=2;
                break;
            default:
                this.minViewMode=0;
                break;
        }
    }
this.viewMode=options.viewMode||this.element.data('date-viewmode')||0;
    if(typeof this.viewMode==='string'){
    switch(this.viewMode){
        case'months':
            this.viewMode=1;
            break;
        case'years':
            this.viewMode=2;
            break;
        default:
            this.viewMode=0;
            break;
    }
}
this.startViewMode=this.viewMode;
this.weekStart=options.weekStart||this.element.data('date-weekstart')||0;
this.weekEnd=this.weekStart===0?6:this.weekStart-1;
this.onRender=options.onRender;
this.fillDow();
this.fillMonths();
this.update();
this.showMode();
};

Datepicker.prototype={
    constructor:Datepicker,
    show:function(e){
        this.picker.show();
        this.height=this.component?this.component.outerHeight():this.element.outerHeight();
        this.place();
        $(window).on('resize',$.proxy(this.place,this));
        if(e){
            e.stopPropagation();
            e.preventDefault();
        }
        if(!this.isInput){}
        var that=this;
        $(document).on('mousedown',function(ev){
            if($(ev.target).closest('.datepicker').length==0){
                that.hide();
            }
        });
    this.element.trigger({
        type:'show',
        date:this.date
        });
},
hide:function(){
    this.picker.hide();
    $(window).off('resize',this.place);
    this.viewMode=this.startViewMode;
    this.showMode();
    if(!this.isInput){
        $(document).off('mousedown',this.hide);
    }
    this.element.trigger({
        type:'hide',
        date:this.date
        });
},
set:function(){
    var formated=DPGlobal.formatDate(this.date,this.format);
    if(!this.isInput){
        if(this.component){
            this.element.find('input').prop('value',formated);
        }
        this.element.data('date',formated);
    }else{
        this.element.prop('value',formated);
    }
},
setValue:function(newDate){
    if(typeof newDate==='string'){
        this.date=DPGlobal.parseDate(newDate,this.format);
    }else{
        this.date=new Date(newDate);
    }
    this.set();
    this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0);
    this.fill();
},
place:function(){
    var offset=this.component?this.component.offset():this.element.offset();
    this.picker.css({
        top:offset.top+this.height,
        left:offset.left
        });
},
update:function(newDate){
    this.date=DPGlobal.parseDate(typeof newDate==='string'?newDate:(this.isInput?this.element.prop('value'):this.element.data('date')),this.format);
    this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0);
    this.fill();
},
fillDow:function(){
    var dowCnt=this.weekStart;
    var html='<tr>';
    while(dowCnt<this.weekStart+7){
        html+='<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
    }
    html+='</tr>';
    this.picker.find('.datepicker-days thead').append(html);
},
fillMonths:function(){
    var html='';
    var i=0
    while(i<12){
        html+='<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
    }
    this.picker.find('.datepicker-months td').append(html);
},
fill:function(){
    var d=new Date(this.viewDate),year=d.getFullYear(),month=d.getMonth(),currentDate=this.date.valueOf();
    this.picker.find('.datepicker-days th:eq(1)')
    .text(DPGlobal.dates.months[month]+' '+year);
    var prevMonth=new Date(year,month-1,28,0,0,0,0),day=DPGlobal.getDaysInMonth(prevMonth.getFullYear(),prevMonth.getMonth());
    prevMonth.setDate(day);
    prevMonth.setDate(day-(prevMonth.getDay()-this.weekStart+7)%7);
    var nextMonth=new Date(prevMonth);
    nextMonth.setDate(nextMonth.getDate()+42);
    nextMonth=nextMonth.valueOf();
    var html=[];
    var clsName,prevY,prevM;
    while(prevMonth.valueOf()<nextMonth){
        if(prevMonth.getDay()===this.weekStart){
            html.push('<tr>');
        }
        clsName=this.onRender(prevMonth);
        prevY=prevMonth.getFullYear();
        prevM=prevMonth.getMonth();
        if((prevM<month&&prevY===year)||prevY<year){
            clsName+=' old';
        }else if((prevM>month&&prevY===year)||prevY>year){
            clsName+=' new';
        }
        if(prevMonth.valueOf()===currentDate){
            clsName+=' active';
        }
        html.push('<td class="day '+clsName+'">'+prevMonth.getDate()+'</td>');
        if(prevMonth.getDay()===this.weekEnd){
            html.push('</tr>');
        }
        prevMonth.setDate(prevMonth.getDate()+1);
    }
    this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
    var currentYear=this.date.getFullYear();
    var months=this.picker.find('.datepicker-months')
    .find('th:eq(1)')
    .text(year)
    .end()
    .find('span').removeClass('active');
    if(currentYear===year){
        months.eq(this.date.getMonth()).addClass('active');
    }
    html='';
    year=parseInt(year/10,10)*10;
    var yearCont=this.picker.find('.datepicker-years')
    .find('th:eq(1)')
    .text(year+'-'+(year+9))
    .end()
    .find('td');
    year-=1;
    for(var i=-1;i<11;i++){
        html+='<span class="year'+(i===-1||i===10?' old':'')+(currentYear===year?' active':'')+'">'+year+'</span>';
        year+=1;
    }
    yearCont.html(html);
},
click:function(e){
    e.stopPropagation();
    e.preventDefault();
    var target=$(e.target).closest('span, td, th');
    if(target.length===1){
        switch(target[0].nodeName.toLowerCase()){
            case'th':
                switch(target[0].className){
                case'switch':
                    this.showMode(1);
                    break;
                case'prev':case'next':
                    this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate)+DPGlobal.modes[this.viewMode].navStep*(target[0].className==='prev'?-1:1));
                    this.fill();
                    this.set();
                    break;
            }
            break;
            case'span':
                if(target.is('.month')){
                var month=target.parent().find('span').index(target);
                this.viewDate.setMonth(month);
            }else{
                var year=parseInt(target.text(),10)||0;
                this.viewDate.setFullYear(year);
            }
            if(this.viewMode!==0){
                this.date=new Date(this.viewDate);
                this.element.trigger({
                    type:'changeDate',
                    date:this.date,
                    viewMode:DPGlobal.modes[this.viewMode].clsName
                    });
            }
            this.showMode(-1);
                this.fill();
                this.set();
                break;
            case'td':
                if(target.is('.day')&&!target.is('.disabled')){
                var day=parseInt(target.text(),10)||1;
                var month=this.viewDate.getMonth();
                if(target.is('.old')){
                    month-=1;
                }else if(target.is('.new')){
                    month+=1;
                }
                var year=this.viewDate.getFullYear();
                this.date=new Date(year,month,day,0,0,0,0);
                this.viewDate=new Date(year,month,Math.min(28,day),0,0,0,0);
                this.fill();
                this.set();
                this.element.trigger({
                    type:'changeDate',
                    date:this.date,
                    viewMode:DPGlobal.modes[this.viewMode].clsName
                    });
            }
            break;
        }
    }
},
mousedown:function(e){
    e.stopPropagation();
    e.preventDefault();
},
showMode:function(dir){
    if(dir){
        this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+dir));
    }
    this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
}
};

$.fn.datepicker=function(option,val){
    return this.each(function(){
        var $this=$(this),data=$this.data('datepicker'),options=typeof option==='object'&&option;
        if(!data){
            $this.data('datepicker',(data=new Datepicker(this,$.extend({},$.fn.datepicker.defaults,options))));
        }
        if(typeof option==='string')data[option](val);
    });
};

$.fn.datepicker.defaults={
    onRender:function(date){
        return'';
    }
};

$.fn.datepicker.Constructor=Datepicker;
var DPGlobal={
    modes:[{
        clsName:'days',
        navFnc:'Month',
        navStep:1
    },{
        clsName:'months',
        navFnc:'FullYear',
        navStep:1
    },{
        clsName:'years',
        navFnc:'FullYear',
        navStep:10
    }],
    dates:{
        days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],
        months:["January","February","March","April","May","June","July","August","September","October","November","December"],
        monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        },
    isLeapYear:function(year){
        return(((year%4===0)&&(year%100!==0))||(year%400===0))
        },
    getDaysInMonth:function(year,month){
        return[31,(DPGlobal.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month]
        },
    parseFormat:function(format){
        var separator=format.match(/[.\/\-\s].*?/),parts=format.split(/\W+/);
        if(!separator||!parts||parts.length===0){
            throw new Error("Invalid date format.");
        }
        return{
            separator:separator,
            parts:parts
        };
    
},
parseDate:function(date,format){
    var parts=date.split(format.separator),date=new Date(),val;
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    if(parts.length===format.parts.length){
        var year=date.getFullYear(),day=date.getDate(),month=date.getMonth();
        for(var i=0,cnt=format.parts.length;i<cnt;i++){
            val=parseInt(parts[i],10)||1;
            switch(format.parts[i]){
                case'dd':case'd':
                    day=val;
                    date.setDate(val);
                    break;
                case'mm':case'm':
                    month=val-1;
                    date.setMonth(val-1);
                    break;
                case'yy':
                    year=2000+val;
                    date.setFullYear(2000+val);
                    break;
                case'yyyy':
                    year=val;
                    date.setFullYear(val);
                    break;
            }
        }
    date=new Date(year,month,day,0,0,0);
}
return date;
},
formatDate:function(date,format){
    var val={
        d:date.getDate(),
        m:date.getMonth()+1,
        yy:date.getFullYear().toString().substring(2),
        yyyy:date.getFullYear()
        };
        
    val.dd=(val.d<10?'0':'')+val.d;
    val.mm=(val.m<10?'0':'')+val.m;
    var date=[];
    for(var i=0,cnt=format.parts.length;i<cnt;i++){
        date.push(val[format.parts[i]]);
    }
    return date.join(format.separator);
},
headTemplate:'<thead>'+'<tr>'+'<th class="prev">&lsaquo;</th>'+'<th colspan="5" class="switch"></th>'+'<th class="next">&rsaquo;</th>'+'</tr>'+'</thead>',
contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'
};

DPGlobal.template='<div class="datepicker dropdown-menu">'+'<div class="datepicker-days">'+'<table class=" table-condensed">'+DPGlobal.headTemplate+'<tbody></tbody>'+'</table>'+'</div>'+'<div class="datepicker-months">'+'<table class="table-condensed">'+DPGlobal.headTemplate+DPGlobal.contTemplate+'</table>'+'</div>'+'<div class="datepicker-years">'+'<table class="table-condensed">'+DPGlobal.headTemplate+DPGlobal.contTemplate+'</table>'+'</div>'+'</div>';
}(window.jQuery);
$(function(){
    $('input[type=file].file-input').each(function(i,elem){
        if(typeof $(this).attr('data-bfi-disabled')!='undefined'){
            return;
        }
        var buttonWord='Browse';
        if(typeof $(this).attr('title')!='undefined'){
            buttonWord=$(this).attr('title');
        }
        var $elem=$(elem);
        var input=$('<div>').append($elem.eq(0).clone()).html();
        $elem.replaceWith('<a class="file-input-wrapper btn '+$elem.attr('class')+'">'+buttonWord+input+'</a>');
    })
    .promise().done(function(){
        $('.file-input-wrapper').mousemove(function(cursor){
            var input,wrapper,wrapperX,wrapperY,inputWidth,inputHeight,cursorX,cursorY;
            wrapper=$(this);
            input=wrapper.find("input");
            wrapperX=wrapper.offset().left;
            wrapperY=wrapper.offset().top;
            inputWidth=input.width();
            inputHeight=input.height();
            cursorX=cursor.pageX;
            cursorY=cursor.pageY;
            moveInputX=cursorX-wrapperX-inputWidth+20;
            moveInputY=cursorY-wrapperY-(inputHeight/2);
            input.css({
                left:moveInputX,
                top:moveInputY
            });
        });
        $('.file-input-wrapper input[type=file]').change(function(){
            $(this).parent().next('.file-input-name').remove();
            if($(this).prop('files').length>1){
                $(this).parent().after('<span class="file-input-name">'+$(this)[0].files.length+' files</span>');
            }
            else{
                $(this).parent().after('<span class="file-input-name">'+$(this).val().replace('C:\\fakepath\\','')+'</span>');
            }
        });
    });
var cssHtml='<style>'+'.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }'+'.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'+'.file-input-name { margin-left: 8px; }'+'</style>';
$('link[rel=stylesheet]').eq(0).before(cssHtml);
    });
+function($){
    "use strict";
    var Checkbox=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.checkbox.defaults,options);
        this.$label=this.$element.parent();
        this.$icon=this.$label.find('i');
        this.$chk=this.$label.find('input[type=checkbox]');
        this.setState(this.$chk);
        this.$chk.on('change',$.proxy(this.itemchecked,this));
    };
    
    Checkbox.prototype={
        constructor:Checkbox,
        setState:function($chk){
            var checked=$chk.is(':checked');
            var disabled=$chk.is(':disabled');
            this.$icon.removeClass('checked').removeClass('disabled');
            if(checked===true){
                this.$icon.addClass('checked');
            }
            if(disabled===true){
                this.$icon.addClass('disabled');
            }
        },
    enable:function(){
        this.$chk.attr('disabled',false);
        this.$icon.removeClass('disabled');
    },
    disable:function(){
        this.$chk.attr('disabled',true);
        this.$icon.addClass('disabled');
    },
    toggle:function(){
        this.$chk.click();
    },
    itemchecked:function(e){
        var chk=$(e.target);
        this.setState(chk);
    }
};

$.fn.checkbox=function(option,value){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('checkbox');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('checkbox',(data=new Checkbox(this,options)));
        if(typeof option==='string')methodReturn=data[option](value);
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.checkbox.defaults={};

$.fn.checkbox.Constructor=Checkbox;
$(function(){
    $(window).on('load',function(){
        $('.checkbox-custom > input[type=checkbox]').each(function(){
            var $this=$(this);
            if($this.data('checkbox'))return;
            $this.checkbox($this.data());
        });
    });
});
}(window.jQuery);
+function($){
    "use strict";
    function fuelTextExactCI(elem,text){
        return(elem.textContent||elem.innerText||$(elem).text()||'').toLowerCase()===(text||'').toLowerCase();
    }
    $.expr[':'].fuelTextExactCI=$.expr.createPseudo?$.expr.createPseudo(function(text){
        return function(elem){
            return fuelTextExactCI(elem,text);
        };
    
    }):function(elem,i,match){
    return fuelTextExactCI(elem,match[3]);
};

}(window.jQuery);
+function($){
    "use strict";
    var Combobox=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.combobox.defaults,options);
        this.$element.on('click','a',$.proxy(this.itemclicked,this));
        this.$element.on('change','input',$.proxy(this.inputchanged,this));
        this.$input=this.$element.find('input');
        this.$button=this.$element.find('.btn');
        this.setDefaultSelection();
    };
    
    Combobox.prototype={
        constructor:Combobox,
        selectedItem:function(){
            var item=this.$selectedItem;
            var data={};
            
            if(item){
                var txt=this.$selectedItem.text();
                data=$.extend({
                    text:txt
                },this.$selectedItem.data());
            }
            else{
                data={
                    text:this.$input.val()
                    };
                
        }
        return data;
    },
    selectByText:function(text){
        var selector='li:fuelTextExactCI('+text+')';
        this.selectBySelector(selector);
    },
    selectByValue:function(value){
        var selector='li[data-value="'+value+'"]';
        this.selectBySelector(selector);
    },
    selectByIndex:function(index){
        var selector='li:eq('+index+')';
        this.selectBySelector(selector);
    },
    selectBySelector:function(selector){
        var $item=this.$element.find(selector);
        if(typeof $item[0]!=='undefined'){
            this.$selectedItem=$item;
            this.$input.val(this.$selectedItem.text());
        }
        else{
            this.$selectedItem=null;
        }
    },
setDefaultSelection:function(){
    var selector='li[data-selected=true]:first';
    var item=this.$element.find(selector);
    if(item.length>0){
        this.selectBySelector(selector);
        item.removeData('selected');
        item.removeAttr('data-selected');
    }
},
enable:function(){
    this.$input.removeAttr('disabled');
    this.$button.removeClass('disabled');
},
disable:function(){
    this.$input.attr('disabled',true);
    this.$button.addClass('disabled');
},
itemclicked:function(e){
    this.$selectedItem=$(e.target).parent();
    this.$input.val(this.$selectedItem.text()).trigger('change',{
        synthetic:true
    });
    var data=this.selectedItem();
    this.$element.trigger('changed',data);
    e.preventDefault();
},
inputchanged:function(e,extra){
    if(extra&&extra.synthetic)return;
    var val=$(e.target).val();
    this.selectByText(val);
    var data=this.selectedItem();
    if(data.text.length===0){
        data={
            text:val
        };
    
}
this.$element.trigger('changed',data);
}
};

$.fn.combobox=function(option,value){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('combobox');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('combobox',(data=new Combobox(this,options)));
        if(typeof option==='string')methodReturn=data[option](value);
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.combobox.defaults={};

$.fn.combobox.Constructor=Combobox;
$(function(){
    $(window).on('load',function(){
        $('.combobox').each(function(){
            var $this=$(this);
            if($this.data('combobox'))return;
            $this.combobox($this.data());
        });
    });
    $('body').on('mousedown.combobox.data-api','.combobox',function(e){
        var $this=$(this);
        if($this.data('combobox'))return;
        $this.combobox($this.data());
    });
});
}(window.jQuery);
+function($){
    "use strict";
    var SORTED_HEADER_OFFSET=22;
    var Datagrid=function(element,options){
        this.$element=$(element);
        this.$thead=this.$element.find('thead');
        this.$tfoot=this.$element.find('tfoot');
        this.$footer=this.$element.find('tfoot th');
        this.$footerchildren=this.$footer.children().show().css('visibility','hidden');
        this.$topheader=this.$element.find('thead th');
        this.$searchcontrol=this.$element.find('.datagrid-search');
        this.$filtercontrol=this.$element.find('.filter');
        this.$pagesize=this.$element.find('.grid-pagesize');
        this.$pageinput=this.$element.find('.grid-pager input');
        this.$pagedropdown=this.$element.find('.grid-pager .dropdown-menu');
        this.$prevpagebtn=this.$element.find('.grid-prevpage');
        this.$nextpagebtn=this.$element.find('.grid-nextpage');
        this.$pageslabel=this.$element.find('.grid-pages');
        this.$countlabel=this.$element.find('.grid-count');
        this.$startlabel=this.$element.find('.grid-start');
        this.$endlabel=this.$element.find('.grid-end');
        this.$tbody=$('<tbody>').insertAfter(this.$thead);
        this.$colheader=$('<tr>').appendTo(this.$thead);
        this.options=$.extend(true,{},$.fn.datagrid.defaults,options);
        if(this.$pagesize.hasClass('select')){
            this.options.dataOptions.pageSize=parseInt(this.$pagesize.select('selectedItem').value,10);
        }else{
            this.options.dataOptions.pageSize=parseInt(this.$pagesize.val(),10);
        }
        if(this.$searchcontrol.length<=0){
            this.$searchcontrol=this.$element.find('.search');
        }
        this.columns=this.options.dataSource.columns();
        this.$nextpagebtn.on('click',$.proxy(this.next,this));
        this.$prevpagebtn.on('click',$.proxy(this.previous,this));
        this.$searchcontrol.on('searched cleared',$.proxy(this.searchChanged,this));
        this.$filtercontrol.on('changed',$.proxy(this.filterChanged,this));
        this.$colheader.on('click','th',$.proxy(this.headerClicked,this));
        if(this.$pagesize.hasClass('select')){
            this.$pagesize.on('changed',$.proxy(this.pagesizeChanged,this));
        }else{
            this.$pagesize.on('change',$.proxy(this.pagesizeChanged,this));
        }
        this.$pageinput.on('change',$.proxy(this.pageChanged,this));
        this.renderColumns();
        if(this.options.stretchHeight)this.initStretchHeight();
        this.renderData();
    };
    
    Datagrid.prototype={
        constructor:Datagrid,
        renderColumns:function(){
            var self=this;
            this.$footer.attr('colspan',this.columns.length);
            this.$topheader.attr('colspan',this.columns.length);
            var colHTML='';
            $.each(this.columns,function(index,column){
                colHTML+='<th data-property="'+column.property+'"';
                if(column.sortable)colHTML+=' class="sortable"';
                colHTML+='>'+column.label+'</th>';
            });
            self.$colheader.append(colHTML);
        },
        updateColumns:function($target,direction){
            this._updateColumns(this.$colheader,$target,direction);
            if(this.$sizingHeader){
                this._updateColumns(this.$sizingHeader,this.$sizingHeader.find('th').eq($target.index()),direction);
            }
        },
    _updateColumns:function($header,$target,direction){
        var className=(direction==='asc')?'icon-chevron-up':'icon-chevron-down';
        $header.find('i.datagrid-sort').remove();
        $header.find('th').removeClass('sorted');
        $('<i>').addClass(className+' datagrid-sort').appendTo($target);
        $target.addClass('sorted');
    },
    updatePageDropdown:function(data){
        var pageHTML='';
        for(var i=1;i<=data.pages;i++){
            pageHTML+='<li><a>'+i+'</a></li>';
        }
        this.$pagedropdown.html(pageHTML);
    },
    updatePageButtons:function(data){
        if(data.page===1){
            this.$prevpagebtn.attr('disabled','disabled');
        }else{
            this.$prevpagebtn.removeAttr('disabled');
        }
        if(data.page===data.pages){
            this.$nextpagebtn.attr('disabled','disabled');
        }else{
            this.$nextpagebtn.removeAttr('disabled');
        }
    },
renderData:function(){
    var self=this;
    this.$tbody.html(this.placeholderRowHTML(this.options.loadingHTML));
    this.options.dataSource.data(this.options.dataOptions,function(data){
        var itemdesc=(data.count===1)?self.options.itemText:self.options.itemsText;
        var rowHTML='';
        self.$footerchildren.css('visibility',function(){
            return(data.count>0)?'visible':'hidden';
        });
        self.$pageinput.val(data.page);
        self.$pageslabel.text(data.pages);
        self.$countlabel.text(data.count+' '+itemdesc);
        self.$startlabel.text(data.start);
        self.$endlabel.text(data.end);
        self.updatePageDropdown(data);
        self.updatePageButtons(data);
        $.each(data.data,function(index,row){
            rowHTML+='<tr>';
            $.each(self.columns,function(index,column){
                rowHTML+='<td>'+row[column.property]+'</td>';
            });
            rowHTML+='</tr>';
        });
        if(!rowHTML)rowHTML=self.placeholderRowHTML('0 '+self.options.itemsText);
        self.$tbody.html(rowHTML);
        self.stretchHeight();
        self.$element.trigger('loaded');
    });
},
placeholderRowHTML:function(content){
    return'<tr><td style="text-align:center;padding:20px;border-bottom:none;" colspan="'+this.columns.length+'">'+content+'</td></tr>';
},
headerClicked:function(e){
    var $target=$(e.target);
    if(!$target.hasClass('sortable'))return;
    var direction=this.options.dataOptions.sortDirection;
    var sort=this.options.dataOptions.sortProperty;
    var property=$target.data('property');
    if(sort===property){
        this.options.dataOptions.sortDirection=(direction==='asc')?'desc':'asc';
    }else{
        this.options.dataOptions.sortDirection='asc';
        this.options.dataOptions.sortProperty=property;
    }
    this.options.dataOptions.pageIndex=0;
    this.updateColumns($target,this.options.dataOptions.sortDirection);
    this.renderData();
},
pagesizeChanged:function(e,pageSize){
    if(pageSize){
        this.options.dataOptions.pageSize=parseInt(pageSize.value,10);
    }else{
        this.options.dataOptions.pageSize=parseInt($(e.target).val(),10);
    }
    this.options.dataOptions.pageIndex=0;
    this.renderData();
},
pageChanged:function(e){
    var pageRequested=parseInt($(e.target).val(),10);
    pageRequested=(isNaN(pageRequested))?1:pageRequested;
    var maxPages=this.$pageslabel.text();
    this.options.dataOptions.pageIndex=(pageRequested>maxPages)?maxPages-1:pageRequested-1;
    this.renderData();
},
searchChanged:function(e,search){
    this.options.dataOptions.search=search;
    this.options.dataOptions.pageIndex=0;
    this.renderData();
},
filterChanged:function(e,filter){
    this.options.dataOptions.filter=filter;
    this.options.dataOptions.pageIndex=0;
    this.renderData();
},
previous:function(){
    this.options.dataOptions.pageIndex--;
    this.renderData();
},
next:function(){
    this.options.dataOptions.pageIndex++;
    this.renderData();
},
reload:function(){
    this.options.dataOptions.pageIndex=0;
    this.renderData();
},
initStretchHeight:function(){
    this.$gridContainer=this.$element.parent();
    this.$element.wrap('<div class="datagrid-stretch-wrapper">');
    this.$stretchWrapper=this.$element.parent();
    this.$headerTable=$('<table>').attr('class',this.$element.attr('class'));
    this.$footerTable=this.$headerTable.clone();
    this.$headerTable.prependTo(this.$gridContainer).addClass('datagrid-stretch-header');
    this.$thead.detach().appendTo(this.$headerTable);
    this.$sizingHeader=this.$thead.clone();
    this.$sizingHeader.find('tr:first').remove();
    this.$footerTable.appendTo(this.$gridContainer).addClass('datagrid-stretch-footer');
    this.$tfoot.detach().appendTo(this.$footerTable);
},
stretchHeight:function(){
    if(!this.$gridContainer)return;
    this.setColumnWidths();
    var targetHeight=this.$gridContainer.height();
    var headerHeight=this.$headerTable.outerHeight();
    var footerHeight=this.$footerTable.outerHeight();
    var overhead=headerHeight+footerHeight;
    this.$stretchWrapper.height(targetHeight-overhead);
},
setColumnWidths:function(){
    if(!this.$sizingHeader)return;
    this.$element.prepend(this.$sizingHeader);
    var $sizingCells=this.$sizingHeader.find('th');
    var columnCount=$sizingCells.length;
    function matchSizingCellWidth(i,el){
        if(i===columnCount-1)return;
        var $el=$(el);
        var $sourceCell=$sizingCells.eq(i);
        var width=$sourceCell.width();
        if($sourceCell.hasClass('sorted')&&$el.prop('tagName')==='TD')width=width+SORTED_HEADER_OFFSET;
        $el.width(width);
    }
    this.$colheader.find('th').each(matchSizingCellWidth);
    this.$tbody.find('tr:first > td').each(matchSizingCellWidth);
    this.$sizingHeader.detach();
}
};

$.fn.datagrid=function(option){
    return this.each(function(){
        var $this=$(this);
        var data=$this.data('datagrid');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('datagrid',(data=new Datagrid(this,options)));
        if(typeof option==='string')data[option]();
    });
};

$.fn.datagrid.defaults={
    dataOptions:{
        pageIndex:0,
        pageSize:10
    },
    loadingHTML:'<div class="progress progress-striped active" style="width:50%;margin:auto;"><div class="bar" style="width:100%;"></div></div>',
    itemsText:'items',
    itemText:'item'
};

$.fn.datagrid.Constructor=Datagrid;
}(window.jQuery);
+function($){
    "use strict";
    var Pillbox=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.pillbox.defaults,options);
        this.$element.on('click','li',$.proxy(this.itemclicked,this));
    };
    
    Pillbox.prototype={
        constructor:Pillbox,
        items:function(){
            return this.$element.find('li').map(function(){
                var $this=$(this);
                return $.extend({
                    text:$this.text()
                    },$this.data());
            }).get();
        },
        itemclicked:function(e){
            $(e.currentTarget).remove();
            e.preventDefault();
        }
    };
    
$.fn.pillbox=function(option){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('pillbox');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('pillbox',(data=new Pillbox(this,options)));
        if(typeof option==='string')methodReturn=data[option]();
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.pillbox.defaults={};

$.fn.pillbox.Constructor=Pillbox;
$(function(){
    $('body').on('mousedown.pillbox.data-api','.pillbox',function(e){
        var $this=$(this);
        if($this.data('pillbox'))return;
        $this.pillbox($this.data());
    });
});
}(window.jQuery);
+function($){
    "use strict";
    var Radio=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.radio.defaults,options);
        this.$label=this.$element.parent();
        this.$icon=this.$label.find('i');
        this.$radio=this.$label.find('input[type=radio]');
        this.groupName=this.$radio.attr('name');
        this.setState(this.$radio);
        this.$radio.on('change',$.proxy(this.itemchecked,this));
    };
    
    Radio.prototype={
        constructor:Radio,
        setState:function($radio,resetGroupState){
            var checked=$radio.is(':checked');
            var disabled=$radio.is(':disabled');
            if(checked===true){
                this.$icon.addClass('checked');
            }
            if(disabled===true){
                this.$icon.addClass('disabled');
            }
        },
    resetGroup:function(){
        $('input[name='+this.groupName+']').next().removeClass('checked');
    },
    enable:function(){
        this.$radio.attr('disabled',false);
        this.$icon.removeClass('disabled');
    },
    disable:function(){
        this.$radio.attr('disabled',true);
        this.$icon.addClass('disabled');
    },
    itemchecked:function(e){
        var radio=$(e.target);
        this.resetGroup();
        this.setState(radio);
    }
};

$.fn.radio=function(option,value){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('radio');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('radio',(data=new Radio(this,options)));
        if(typeof option==='string')methodReturn=data[option](value);
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.radio.defaults={};

$.fn.radio.Constructor=Radio;
$(function(){
    $(window).on('load',function(){
        $('.radio-custom > input[type=radio]').each(function(){
            var $this=$(this);
            if($this.data('radio'))return;
            $this.radio($this.data());
        });
    });
});
}(window.jQuery);
+function($){
    "use strict";
    var Search=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.search.defaults,options);
        this.$button=this.$element.find('button')
        .on('click',$.proxy(this.buttonclicked,this));
        this.$input=this.$element.find('input')
        .on('keydown',$.proxy(this.keypress,this))
        .on('keyup',$.proxy(this.keypressed,this));
        this.$icon=this.$element.find('i');
        this.activeSearch='';
    };
    
    Search.prototype={
        constructor:Search,
        search:function(searchText){
            this.$icon.attr('class','icon-remove');
            this.activeSearch=searchText;
            this.$element.trigger('searched',searchText);
        },
        clear:function(){
            this.$icon.attr('class','icon-search');
            this.activeSearch='';
            this.$input.val('');
            this.$element.trigger('cleared');
        },
        action:function(){
            var val=this.$input.val();
            var inputEmptyOrUnchanged=val===''||val===this.activeSearch;
            if(this.activeSearch&&inputEmptyOrUnchanged){
                this.clear();
            }else if(val){
                this.search(val);
            }
        },
    buttonclicked:function(e){
        e.preventDefault();
        if($(e.currentTarget).is('.disabled, :disabled'))return;
        this.action();
    },
    keypress:function(e){
        if(e.which===13){
            e.preventDefault();
        }
    },
keypressed:function(e){
    var val,inputPresentAndUnchanged;
    if(e.which===13){
        e.preventDefault();
        this.action();
    }else{
        val=this.$input.val();
        inputPresentAndUnchanged=val&&(val===this.activeSearch);
        this.$icon.attr('class',inputPresentAndUnchanged?'icon-remove':'icon-search');
    }
},
disable:function(){
    this.$input.attr('disabled','disabled');
    this.$button.addClass('disabled');
},
enable:function(){
    this.$input.removeAttr('disabled');
    this.$button.removeClass('disabled');
}
};

$.fn.search=function(option){
    return this.each(function(){
        var $this=$(this);
        var data=$this.data('search');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('search',(data=new Search(this,options)));
        if(typeof option==='string')data[option]();
    });
};

$.fn.search.defaults={};

$.fn.search.Constructor=Search;
$(function(){
    $('body').on('mousedown.search.data-api','.search',function(){
        var $this=$(this);
        if($this.data('search'))return;
        $this.search($this.data());
    });
});
}(window.jQuery);
+function($){
    "use strict";
    var Spinner=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.spinner.defaults,options);
        this.$input=this.$element.find('.spinner-input');
        this.$element.on('keyup',this.$input,$.proxy(this.change,this));
        if(this.options.hold){
            this.$element.on('mousedown','.spinner-up',$.proxy(function(){
                this.startSpin(true);
            },this));
            this.$element.on('mouseup','.spinner-up, .spinner-down',$.proxy(this.stopSpin,this));
            this.$element.on('mouseout','.spinner-up, .spinner-down',$.proxy(this.stopSpin,this));
            this.$element.on('mousedown','.spinner-down',$.proxy(function(){
                this.startSpin(false);
            },this));
        }else{
            this.$element.on('click','.spinner-up',$.proxy(function(){
                this.step(true);
            },this));
            this.$element.on('click','.spinner-down',$.proxy(function(){
                this.step(false);
            },this));
        }
        this.switches={
            count:1,
            enabled:true
        };
        
        if(this.options.speed==='medium'){
            this.switches.speed=300;
        }else if(this.options.speed==='fast'){
            this.switches.speed=100;
        }else{
            this.switches.speed=500;
        }
        this.lastValue=null;
        this.render();
        if(this.options.disabled){
            this.disable();
        }
    };
    
Spinner.prototype={
    constructor:Spinner,
    render:function(){
        this.$input.val(this.options.value);
        this.$input.attr('maxlength',(this.options.max+'').split('').length);
    },
    change:function(){
        var newVal=this.$input.val();
        if(newVal/1){
            this.options.value=newVal/1;
        }else{
            newVal=newVal.replace(/[^0-9]/g,'');
            this.$input.val(newVal);
            this.options.value=newVal/1;
        }
        this.triggerChangedEvent();
    },
    stopSpin:function(){
        clearTimeout(this.switches.timeout);
        this.switches.count=1;
        this.triggerChangedEvent();
    },
    triggerChangedEvent:function(){
        var currentValue=this.value();
        if(currentValue===this.lastValue)return;
        this.lastValue=currentValue;
        this.$element.trigger('changed',currentValue);
        this.$element.trigger('change');
    },
    startSpin:function(type){
        if(!this.options.disabled){
            var divisor=this.switches.count;
            if(divisor===1){
                this.step(type);
                divisor=1;
            }else if(divisor<3){
                divisor=1.5;
            }else if(divisor<8){
                divisor=2.5;
            }else{
                divisor=4;
            }
            this.switches.timeout=setTimeout($.proxy(function(){
                this.iterator(type);
            },this),this.switches.speed/divisor);
            this.switches.count++;
        }
    },
iterator:function(type){
    this.step(type);
    this.startSpin(type);
},
step:function(dir){
    var curValue=this.options.value;
    var limValue=dir?this.options.max:this.options.min;
    if((dir?curValue<limValue:curValue>limValue)){
        var newVal=curValue+(dir?1:-1)*this.options.step;
        if(dir?newVal>limValue:newVal<limValue){
            this.value(limValue);
        }else{
            this.value(newVal);
        }
    }
},
value:function(value){
    if(!isNaN(parseFloat(value))&&isFinite(value)){
        value=parseFloat(value);
        this.options.value=value;
        this.$input.val(value);
        return this;
    }else{
        return this.options.value;
    }
},
disable:function(){
    this.options.disabled=true;
    this.$input.attr('disabled','');
    this.$element.find('button').addClass('disabled');
},
enable:function(){
    this.options.disabled=false;
    this.$input.removeAttr("disabled");
    this.$element.find('button').removeClass('disabled');
}
};

$.fn.spinner=function(option,value){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('spinner');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('spinner',(data=new Spinner(this,options)));
        if(typeof option==='string')methodReturn=data[option](value);
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.spinner.defaults={
    value:1,
    min:1,
    max:999,
    step:1,
    hold:true,
    speed:'medium',
    disabled:false
};

$.fn.spinner.Constructor=Spinner;
$(function(){
    $('body').on('mousedown.spinner.data-api','.spinner',function(e){
        var $this=$(this);
        if($this.data('spinner'))return;
        $this.spinner($this.data());
    });
});
}(window.jQuery);
+function($){
    "use strict";
    var Select=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.select.defaults,options);
        this.$element.on('click','a',$.proxy(this.itemclicked,this));
        this.$button=this.$element.find('.btn');
        this.$label=this.$element.find('.dropdown-label');
        this.setDefaultSelection();
        if(options.resize==='auto'){
            this.resize();
        }
    };
    
Select.prototype={
    constructor:Select,
    itemclicked:function(e){
        this.$selectedItem=$(e.target).parent();
        this.$label.text(this.$selectedItem.text());
        var data=this.selectedItem();
        this.$element.trigger('changed',data);
        e.preventDefault();
    },
    resize:function(){
        var el=$('#selectTextSize')[0];
        if(!el){
            $('<div/>').attr({
                id:'selectTextSize'
            }).appendTo('body');
        }
        var width=0;
        var newWidth=0;
        this.$element.find('a').each(function(){
            var $this=$(this);
            var txt=$this.text();
            var $txtSize=$('#selectTextSize');
            $txtSize.text(txt);
            newWidth=$txtSize.outerWidth();
            if(newWidth>width){
                width=newWidth;
            }
        });
    this.$label.width(width);
},
selectedItem:function(){
    var txt=this.$selectedItem.text();
    return $.extend({
        text:txt
    },this.$selectedItem.data());
},
selectByText:function(text){
    var selector='li a:fuelTextExactCI('+text+')';
    this.selectBySelector(selector);
},
selectByValue:function(value){
    var selector='li[data-value="'+value+'"]';
    this.selectBySelector(selector);
},
selectByIndex:function(index){
    var selector='li:eq('+index+')';
    this.selectBySelector(selector);
},
selectBySelector:function(selector){
    var item=this.$element.find(selector);
    this.$selectedItem=item;
    this.$label.text(this.$selectedItem.text());
},
setDefaultSelection:function(){
    var selector='li[data-selected=true]:first';
    var item=this.$element.find(selector);
    if(item.length===0){
        this.selectByIndex(0);
    }
    else{
        this.selectBySelector(selector);
        item.removeData('selected');
        item.removeAttr('data-selected');
    }
},
enable:function(){
    this.$button.removeClass('disabled');
},
disable:function(){
    this.$button.addClass('disabled');
}
};

$.fn.select=function(option,value){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('select');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('select',(data=new Select(this,options)));
        if(typeof option==='string')methodReturn=data[option](value);
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.select.defaults={};

$.fn.select.Constructor=Select;
$(function(){
    $(window).on('load',function(){
        $('.select').each(function(){
            var $this=$(this);
            if($this.data('select'))return;
            $this.select($this.data());
        });
    });
    $('body').on('mousedown.select.data-api','.select',function(e){
        var $this=$(this);
        if($this.data('select'))return;
        $this.select($this.data());
    });
});
}(window.jQuery);
+function($){
    "use strict";
    var Tree=function(element,options){
        this.$element=$(element);
        this.options=$.extend({},$.fn.tree.defaults,options);
        this.$element.on('click','.tree-item',$.proxy(function(ev){
            this.selectItem(ev.currentTarget);
        },this));
        this.$element.on('click','.tree-folder-header',$.proxy(function(ev){
            this.selectFolder(ev.currentTarget);
        },this));
        this.render();
    };
    
    Tree.prototype={
        constructor:Tree,
        render:function(){
            this.populate(this.$element);
        },
        populate:function($el){
            var self=this;
            var loader=$el.parent().find('.tree-loader:eq(0)');
            loader.show();
            this.options.dataSource.data($el.data(),function(items){
                loader.hide();
                $.each(items.data,function(index,value){
                    var $entity;
                    if(value.type==="folder"){
                        $entity=self.$element.find('.tree-folder:eq(0)').clone().show();
                        $entity.find('.tree-folder-name').html(value.name);
                        $entity.find('.tree-loader').html(self.options.loadingHTML);
                        $entity.find('.tree-folder-header').data(value);
                    }else if(value.type==="item"){
                        $entity=self.$element.find('.tree-item:eq(0)').clone().show();
                        $entity.find('.tree-item-name').html(value.name);
                        $entity.data(value);
                    }
                    if($el.hasClass('tree-folder-header')){
                        $el.parent().find('.tree-folder-content:eq(0)').append($entity);
                    }else{
                        $el.append($entity);
                    }
                });
            self.$element.trigger('loaded');
            });
    },
    selectItem:function(el){
        var $el=$(el);
        var $all=this.$element.find('.tree-selected');
        var data=[];
        if(this.options.multiSelect){
            $.each($all,function(index,value){
                var $val=$(value);
                if($val[0]!==$el[0]){
                    data.push($(value).data());
                }
            });
    }else if($all[0]!==$el[0]){
        $all.removeClass('tree-selected')
        .find('i').removeClass('icon-ok').addClass('tree-dot');
        data.push($el.data());
    }
    if($el.hasClass('tree-selected')){
        $el.removeClass('tree-selected');
        $el.find('i').removeClass('icon-ok').addClass('tree-dot');
    }else{
        $el.addClass('tree-selected');
        $el.find('i').removeClass('tree-dot').addClass('icon-ok');
        if(this.options.multiSelect){
            data.push($el.data());
        }
    }
if(data.length){
    this.$element.trigger('selected',{
        info:data
    });
}
},
selectFolder:function(el){
    var $el=$(el);
    var $par=$el.parent();
    if($el.find('.icon-folder-close').length){
        if($par.find('.tree-folder-content').children().length){
            $par.find('.tree-folder-content:eq(0)').show();
        }else{
            this.populate($el);
        }
        $par.find('.icon-folder-close:eq(0)')
        .removeClass('icon-folder-close')
        .addClass('icon-folder-open');
        this.$element.trigger('opened',$el.data());
    }else{
        if(this.options.cacheItems){
            $par.find('.tree-folder-content:eq(0)').hide();
        }else{
            $par.find('.tree-folder-content:eq(0)').empty();
        }
        $par.find('.icon-folder-open:eq(0)')
        .removeClass('icon-folder-open')
        .addClass('icon-folder-close');
        this.$element.trigger('closed',$el.data());
    }
},
selectedItems:function(){
    var $sel=this.$element.find('.tree-selected');
    var data=[];
    $.each($sel,function(index,value){
        data.push($(value).data());
    });
    return data;
}
};

$.fn.tree=function(option,value){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('tree');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('tree',(data=new Tree(this,options)));
        if(typeof option==='string')methodReturn=data[option](value);
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.tree.defaults={
    multiSelect:false,
    loadingHTML:'<div>Loading...</div>',
    cacheItems:true
};

$.fn.tree.Constructor=Tree;
}(window.jQuery);
+function($){
    "use strict";
    var Wizard=function(element,options){
        var kids;
        this.$element=$(element);
        this.options=$.extend({},$.fn.wizard.defaults,options);
        this.currentStep=1;
        this.numSteps=this.$element.find('li').length;
        this.$prevBtn=this.$element.find('button.btn-prev');
        this.$nextBtn=this.$element.find('button.btn-next');
        kids=this.$nextBtn.children().detach();
        this.nextText=$.trim(this.$nextBtn.text());
        this.$nextBtn.append(kids);
        this.$prevBtn.on('click',$.proxy(this.previous,this));
        this.$nextBtn.on('click',$.proxy(this.next,this));
        this.$element.on('click','li.complete',$.proxy(this.stepclicked,this));
    };
    
    Wizard.prototype={
        constructor:Wizard,
        setState:function(){
            var canMovePrev=(this.currentStep>1);
            var firstStep=(this.currentStep===1);
            var lastStep=(this.currentStep===this.numSteps);
            this.$prevBtn.attr('disabled',(firstStep===true||canMovePrev===false));
            var data=this.$nextBtn.data();
            if(data&&data.last){
                this.lastText=data.last;
                if(typeof this.lastText!=='undefined'){
                    var text=(lastStep!==true)?this.nextText:this.lastText;
                    var kids=this.$nextBtn.children().detach();
                    this.$nextBtn.text(text).append(kids);
                }
            }
        var $steps=this.$element.find('li');
        $steps.removeClass('active').removeClass('complete');
        $steps.find('span.badge').removeClass('badge-info').removeClass('badge-success');
        var prevSelector='li:lt('+(this.currentStep-1)+')';
        var $prevSteps=this.$element.find(prevSelector);
        $prevSteps.addClass('complete');
        $prevSteps.find('span.badge').addClass('badge-success');
        var currentSelector='li:eq('+(this.currentStep-1)+')';
        var $currentStep=this.$element.find(currentSelector);
        $currentStep.addClass('active');
        $currentStep.find('span.badge').addClass('badge-info');
        var target=$currentStep.data().target;
        $('.step-pane',$(target).parent()).removeClass('active');
        $(target).addClass('active');
        this.$element.trigger('changed');
    },
    stepclicked:function(e){
        var li=$(e.currentTarget);
        var index=li.parent().find('li').index(li);
        var evt=$.Event('stepclick');
        this.$element.trigger(evt,{
            step:index+1
            });
        if(evt.isDefaultPrevented())return;
        this.currentStep=(index+1);
        this.setState();
    },
    previous:function(){
        var canMovePrev=(this.currentStep>1);
        if(canMovePrev){
            var e=$.Event('change');
            this.$element.trigger(e,{
                step:this.currentStep,
                direction:'previous'
            });
            if(e.isDefaultPrevented())return;
            this.currentStep-=1;
            this.setState();
        }
    },
next:function(){
    var canMoveNext=(this.currentStep+1<=this.numSteps);
    var lastStep=(this.currentStep===this.numSteps);
    if(canMoveNext){
        var e=$.Event('change');
        this.$element.trigger(e,{
            step:this.currentStep,
            direction:'next'
        });
        if(e.isDefaultPrevented())return;
        this.currentStep+=1;
        this.setState();
    }
    else if(lastStep){
        this.$element.trigger('finished');
    }
},
selectedItem:function(val){
    return{
        step:this.currentStep
        };
    
}
};

$.fn.wizard=function(option,value){
    var methodReturn;
    var $set=this.each(function(){
        var $this=$(this);
        var data=$this.data('wizard');
        var options=typeof option==='object'&&option;
        if(!data)$this.data('wizard',(data=new Wizard(this,options)));
        if(typeof option==='string')methodReturn=data[option](value);
    });
    return(methodReturn===undefined)?$set:methodReturn;
};

$.fn.wizard.defaults={};

$.fn.wizard.Constructor=Wizard;
$(function(){
    $('body').on('mousedown.wizard.data-api','.wizard',function(){
        var $this=$(this);
        if($this.data('wizard'))return;
        $this.wizard($this.data());
    });
});
}(window.jQuery);
!function(d){
    var h=function(a){
        this.messages={
            defaultMessage:"This value seems to be invalid.",
            type:{
                email:"This value should be a valid email.",
                url:"This value should be a valid url.",
                urlstrict:"This value should be a valid url.",
                number:"This value should be a valid number.",
                digits:"This value should be digits.",
                dateIso:"This value should be a valid date (YYYY-MM-DD).",
                alphanum:"This value should be alphanumeric.",
                phone:"This value should be a valid phone number."
            },
            notnull:"This value should not be null.",
            notblank:"This value should not be blank.",
            required:"This value is required.",
            regexp:"This value seems to be invalid.",
            min:"This value should be greater than or equal to %s.",
            max:"This value should be lower than or equal to %s.",
            range:"This value should be between %s and %s.",
            minlength:"This value is too short. It should have %s characters or more.",
            maxlength:"This value is too long. It should have %s characters or less.",
            rangelength:"This value length is invalid. It should be between %s and %s characters long.",
            mincheck:"You must select at least %s choices.",
            maxcheck:"You must select %s choices or less.",
            rangecheck:"You must select between %s and %s choices.",
            equalto:"This value should be the same."
        };
        
        this.init(a)
        };
        
    h.prototype={
        constructor:h,
        validators:{
            notnull:function(a){
                return 0<a.length
                },
            notblank:function(a){
                return"string"===typeof a&&""!==a.replace(/^\s+/g,"").replace(/\s+$/g,"")
                },
            required:function(a){
                if("object"===typeof a){
                    for(var b in a)if(this.required(a[b]))return!0;return!1
                    }
                    return this.notnull(a)&&this.notblank(a)
                },
            type:function(a,b){
                var c;
                switch(b){
                    case"number":
                        c=/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
                        break;
                    case"digits":
                        c=/^\d+$/;
                        break;
                    case"alphanum":
                        c=/^\w+$/;
                        break;
                    case"email":
                        c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
                        break;
                    case"url":
                        a=/(https?|s?ftp|git)/i.test(a)?a:"http://"+a;
                    case"urlstrict":
                        c=/^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                        break;
                    case"dateIso":
                        c=/^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;
                        break;
                    case"phone":
                        c=/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                        break;
                    default:
                        return!1
                        }
                        return""!==a?c.test(a):!1
                },
            regexp:function(a,b,c){
                return RegExp(b,c.options.regexpFlag||"").test(a)
                },
            minlength:function(a,b){
                return a.length>=b
                },
            maxlength:function(a,b){
                return a.length<=b
                },
            rangelength:function(a,b){
                return this.minlength(a,b[0])&&this.maxlength(a,b[1])
                },
            min:function(a,b){
                return Number(a)>=b
                },
            max:function(a,b){
                return Number(a)<=b
                },
            range:function(a,b){
                return a>=b[0]&&a<=b[1]
                },
            equalto:function(a,b,c){
                c.options.validateIfUnchanged=!0;
                return a===d(b).val()
                },
            remote:function(a,b,c){
                var f={},g={};
                
                f[c.$element.attr("name")]=a;
                "undefined"!==typeof c.options.remoteDatatype&&(g={
                    dataType:c.options.remoteDatatype
                    });
                var m=function(a,b){
                    "undefined"!==typeof b&&("undefined"!==typeof c.Validator.messages.remote&&b!==c.Validator.messages.remote)&&d(c.ulError+" .remote").remove();
                    c.updtConstraint({
                        name:"remote",
                        valid:a
                    },b);
                    c.manageValidationResult()
                    },n=function(a){
                    if("object"===typeof a)return a;
                    try{
                        a=d.parseJSON(a)
                        }catch(b){}
                    return a
                    },e=function(a){
                    return"object"===typeof a&&null!==a?"undefined"!==typeof a.error?a.error:"undefined"!==typeof a.message?a.message:null:null
                    };
                    
                d.ajax(d.extend({},{
                    url:b,
                    data:f,
                    type:c.options.remoteMethod||"GET",
                    success:function(a){
                        a=n(a);
                        m(1===a||!0===a||"object"===typeof a&&null!==a&&"undefined"!==typeof a.success,e(a))
                        },
                    error:function(a){
                        a=n(a);
                        m(!1,e(a))
                        }
                    },g));
            return null
            },
        mincheck:function(a,b){
            return this.minlength(a,b)
            },
        maxcheck:function(a,b){
            return this.maxlength(a,b)
            },
        rangecheck:function(a,b){
            return this.rangelength(a,b)
            }
        },
init:function(a){
    var b=a.validators;
    a=a.messages;
    for(var c in b)this.addValidator(c,b[c]);for(c in a)this.addMessage(c,a[c])
        },
formatMesssage:function(a,b){
    if("object"===typeof b){
        for(var c in b)a=this.formatMesssage(a,b[c]);return a
        }
        return"string"===typeof a?a.replace(/%s/i,b):""
    },
addValidator:function(a,b){
    this.validators[a]=b
    },
addMessage:function(a,b,c){
    if("undefined"!==typeof c&&!0===c)this.messages.type[a]=b;
    else if("type"===a)for(var d in b)this.messages.type[d]=b[d];else this.messages[a]=b
        }
    };

var j=function(a,b,c){
    this.options=b;
    this.Validator=new h(b);
    if("ParsleyFieldMultiple"===c)return this;
    this.init(a,c||"ParsleyField")
    };
    
j.prototype={
    constructor:j,
    init:function(a,b){
        this.type=b;
        this.valid=!0;
        this.element=a;
        this.validatedOnce=!1;
        this.$element=d(a);
        this.val=this.$element.val();
        this.isRequired=!1;
        this.constraints={};
        
        "undefined"===typeof this.isRadioOrCheckbox&&(this.isRadioOrCheckbox=!1,this.hash=this.generateHash(),this.errorClassHandler=this.options.errors.classHandler(a,this.isRadioOrCheckbox)||this.$element);
        this.ulErrorManagement();
        this.bindHtml5Constraints();
        this.addConstraints();
        this.hasConstraints()&&this.bindValidationEvents()
        },
    setParent:function(a){
        this.$parent=d(a)
        },
    getParent:function(){
        return this.$parent
        },
    bindHtml5Constraints:function(){
        if(this.$element.hasClass("required")||this.$element.prop("required"))this.options.required=!0;
        "undefined"!==typeof this.$element.attr("type")&&RegExp(this.$element.attr("type"),"i").test("email url number range")&&(this.options.type=this.$element.attr("type"),RegExp(this.options.type,"i").test("number range")&&(this.options.type="number","undefined"!==typeof this.$element.attr("min")&&this.$element.attr("min").length&&(this.options.min=this.$element.attr("min")),"undefined"!==typeof this.$element.attr("max")&&this.$element.attr("max").length&&(this.options.max=this.$element.attr("max"))));
        "string"===typeof this.$element.attr("pattern")&&this.$element.attr("pattern").length&&(this.options.regexp=this.$element.attr("pattern"))
        },
    addConstraints:function(){
        for(var a in this.options){
            var b={};
            
            b[a]=this.options[a];
            this.addConstraint(b,!0)
            }
        },
addConstraint:function(a,b){
    for(var c in a)c=c.toLowerCase(),"function"===typeof this.Validator.validators[c]&&(this.constraints[c]={
        name:c,
        requirements:a[c],
        valid:null
    },"required"===c&&(this.isRequired=!0),this.addCustomConstraintMessage(c));"undefined"===typeof b&&this.bindValidationEvents()
    },
updateConstraint:function(a,b){
    for(var c in a)this.updtConstraint({
        name:c,
        requirements:a[c],
        valid:null
    },b)
    },
updtConstraint:function(a,b){
    this.constraints[a.name]=d.extend(!0,this.constraints[a.name],a);
    "string"===typeof b&&(this.Validator.messages[a.name]=b);
    this.bindValidationEvents()
    },
removeConstraint:function(a){
    a=a.toLowerCase();
    delete this.constraints[a];
    "required"===a&&(this.isRequired=!1);
    this.hasConstraints()?this.bindValidationEvents():"ParsleyForm"===typeof this.getParent()?this.getParent().removeItem(this.$element):this.destroy()
    },
addCustomConstraintMessage:function(a){
    var b=a+("type"===a&&"undefined"!==typeof this.options[a]?this.options[a].charAt(0).toUpperCase()+this.options[a].substr(1):"")+"Message";
    "undefined"!==typeof this.options[b]&&this.Validator.addMessage("type"===a?this.options[a]:a,this.options[b],"type"===a)
    },
bindValidationEvents:function(){
    this.valid=null;
    this.$element.addClass("parsley-validated");
    this.$element.off("."+this.type);
    this.options.remote&&!/change/i.test(this.options.trigger)&&(this.options.trigger=!this.options.trigger?"change":" change");
    var a=(!this.options.trigger?"":this.options.trigger)+(/key/i.test(this.options.trigger)?"":" keyup");
    this.$element.is("select")&&(a+=/change/i.test(a)?"":" change");
    a=a.replace(/^\s+/g,"").replace(/\s+$/g,"");
    this.$element.on((a+" ").split(" ").join("."+this.type+" "),!1,d.proxy(this.eventValidation,this))
    },
generateHash:function(){
    return"parsley-"+(Math.random()+"").substring(2)
    },
getHash:function(){
    return this.hash
    },
getVal:function(){
    return this.$element.data("value")||this.$element.val()
    },
eventValidation:function(a){
    var b=this.getVal();
    if("keyup"===a.type&&!/keyup/i.test(this.options.trigger)&&!this.validatedOnce||"change"===a.type&&!/change/i.test(this.options.trigger)&&!this.validatedOnce||!this.isRadioOrCheckbox&&b.length<this.options.validationMinlength&&!this.validatedOnce)return!0;
    this.validate()
    },
isValid:function(){
    return this.validate(!1)
    },
hasConstraints:function(){
    for(var a in this.constraints)return!0;return!1
    },
validate:function(a){
    var b=this.getVal(),c=null;
    if(!this.hasConstraints())return null;
    if(this.options.listeners.onFieldValidate(this.element,this)||""===b&&!this.isRequired)return this.reset(),null;
    if(!this.needsValidation(b))return this.valid;
    c=this.applyValidators();
    ("undefined"!==typeof a?a:this.options.showErrors)&&this.manageValidationResult();
    return c
    },
needsValidation:function(a){
    if(!this.options.validateIfUnchanged&&null!==this.valid&&this.val===a&&this.validatedOnce)return!1;
    this.val=a;
    return this.validatedOnce=!0
    },
applyValidators:function(){
    var a=null,b;
    for(b in this.constraints){
        var c=this.Validator.validators[this.constraints[b].name](this.val,this.constraints[b].requirements,this);
        !1===c?(a=!1,this.constraints[b].valid=a,this.options.listeners.onFieldError(this.element,this.constraints,this)):!0===c&&(this.constraints[b].valid=!0,a=!1!==a,this.options.listeners.onFieldSuccess(this.element,this.constraints,this))
        }
        return a
    },
manageValidationResult:function(){
    var a=null,b;
    for(b in this.constraints)!1===this.constraints[b].valid?(this.manageError(this.constraints[b]),a=!1):!0===this.constraints[b].valid&&(this.removeError(this.constraints[b].name),a=!1!==a);this.valid=a;
    return!0===this.valid?(this.removeErrors(),this.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass),!0):!1===this.valid?(this.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass),!1):a
    },
ulErrorManagement:function(){
    this.ulError="#"+this.hash;
    this.ulTemplate=d(this.options.errors.errorsWrapper).attr("id",this.hash).addClass("parsley-error-list")
    },
removeError:function(a){
    a=this.ulError+" ."+a;
    var b=this;
    this.options.animate?d(a).fadeOut(this.options.animateDuration,function(){
        d(this).remove();
        b.ulError&&0===d(b.ulError).children().length&&b.removeErrors()
        }):d(a).remove();
    this.ulError&&0===d(this.ulError).children().length&&this.removeErrors()
    },
addError:function(a){
    for(var b in a){
        var c=d(this.options.errors.errorElem).addClass(b);
        d(this.ulError).append(this.options.animate?d(c).html(a[b]).hide().fadeIn(this.options.animateDuration):d(c).html(a[b]))
        }
    },
removeErrors:function(){
    this.options.animate?d(this.ulError).fadeOut(this.options.animateDuration,function(){
        d(this).remove()
        }):d(this.ulError).remove()
    },
reset:function(){
    this.valid=null;
    this.removeErrors();
    this.validatedOnce=!1;
    this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
    for(var a in this.constraints)this.constraints[a].valid=null;return this
    },
manageError:function(a){
    d(this.ulError).length||this.manageErrorContainer();
    if(!("required"===a.name&&null!==this.getVal()&&0<this.getVal().length)&&(!this.isRequired||!("required"!==a.name&&(null===this.getVal()||0===this.getVal().length)))){
        var b=a.name,c=!1!==this.options.errorMessage?"custom-error-message":b,f={};
        
        a=!1!==this.options.errorMessage?this.options.errorMessage:"type"===a.name?this.Validator.messages[b][a.requirements]:"undefined"===typeof this.Validator.messages[b]?this.Validator.messages.defaultMessage:this.Validator.formatMesssage(this.Validator.messages[b],a.requirements);
        d(this.ulError+" ."+c).length||(f[c]=a,this.addError(f))
        }
    },
manageErrorContainer:function(){
    var a=this.options.errorContainer||this.options.errors.container(this.element,this.isRadioOrCheckbox),b=this.options.animate?this.ulTemplate.show():this.ulTemplate;
    "undefined"!==typeof a?d(a).append(b):!this.isRadioOrCheckbox?this.$element.after(b):this.$element.parent().after(b)
    },
addListener:function(a){
    for(var b in a)this.options.listeners[b]=a[b]
        },
destroy:function(){
    this.$element.removeClass("parsley-validated");
    this.reset().$element.off("."+this.type).removeData(this.type)
    }
};

var l=function(a,b,c){
    this.initMultiple(a,b);
    this.inherit(a,b);
    this.Validator=new h(b);
    this.init(a,c||"ParsleyFieldMultiple")
    };
    
l.prototype={
    constructor:l,
    initMultiple:function(a,b){
        this.element=a;
        this.$element=d(a);
        this.group=b.group||!1;
        this.hash=this.getName();
        this.siblings=this.group?'[data-group="'+this.group+'"]':'input[name="'+this.$element.attr("name")+'"]';
        this.isRadioOrCheckbox=!0;
        this.isRadio=this.$element.is("input[type=radio]");
        this.isCheckbox=this.$element.is("input[type=checkbox]");
        this.errorClassHandler=b.errors.classHandler(a,this.isRadioOrCheckbox)||this.$element.parent()
        },
    inherit:function(a,b){
        var c=new j(a,b,"ParsleyFieldMultiple"),d;
        for(d in c)"undefined"===typeof this[d]&&(this[d]=c[d])
            },
    getName:function(){
        if(this.group)return"parsley-"+this.group;
        if("undefined"===typeof this.$element.attr("name"))throw"A radio / checkbox input must have a data-group attribute or a name to be Parsley validated !";
        return"parsley-"+this.$element.attr("name").replace(/(:|\.|\[|\])/g,"")
        },
    getVal:function(){
        if(this.isRadio)return d(this.siblings+":checked").val()||"";
        if(this.isCheckbox){
            var a=[];
            d(this.siblings+":checked").each(function(){
                a.push(d(this).val())
                });
            return a
            }
        },
bindValidationEvents:function(){
    this.valid=null;
    this.$element.addClass("parsley-validated");
    this.$element.off("."+this.type);
    var a=this,b=(!this.options.trigger?"":this.options.trigger)+(/change/i.test(this.options.trigger)?"":" change"),b=b.replace(/^\s+/g,"").replace(/\s+$/g,"");
    d(this.siblings).each(function(){
        d(this).on(b.split(" ").join("."+a.type+" "),!1,d.proxy(a.eventValidation,a))
        })
    }
};

var k=function(a,b,c){
    this.init(a,b,c||"parsleyForm")
    };
    
k.prototype={
    constructor:k,
    init:function(a,b,c){
        this.type=c;
        this.items=[];
        this.$element=d(a);
        this.options=b;
        var f=this;
        this.$element.find(b.inputs).each(function(){
            f.addItem(this)
            });
        this.$element.on("submit."+this.type,!1,d.proxy(this.validate,this))
        },
    addListener:function(a){
        for(var b in a)if(/Field/.test(b))for(var c=0;c<this.items.length;c++)this.items[c].addListener(a);else this.options.listeners[b]=a[b]
            },
    addItem:function(a){
        if(d(a).is(this.options.excluded))return!1;
        a=d(a).parsley(this.options);
        a.setParent(this);
        this.items.push(a)
        },
    removeItem:function(a){
        a=d(a).parsley();
        for(var b=0;b<this.items.length;b++)if(this.items[b].hash===a.hash)return this.items[b].destroy(),this.items.splice(b,1),!0;return!1
        },
    validate:function(a){
        var b=!0;
        this.focusedField=!1;
        for(var c=0;c<this.items.length;c++)if("undefined"!==typeof this.items[c]&&!1===this.items[c].validate()&&(b=!1,!this.focusedField&&"first"===this.options.focus||"last"===this.options.focus))this.focusedField=this.items[c].$element;this.focusedField&&!b&&this.focusedField.focus();
        this.options.listeners.onFormSubmit(b,a,this);
        return b
        },
    isValid:function(){
        for(var a=0;a<this.items.length;a++)if(!1===this.items[a].isValid())return!1;return!0
        },
    removeErrors:function(){
        for(var a=0;a<this.items.length;a++)this.items[a].parsley("reset")
            },
    destroy:function(){
        for(var a=0;a<this.items.length;a++)this.items[a].destroy();
        this.$element.off("."+this.type).removeData(this.type)
        },
    reset:function(){
        for(var a=0;a<this.items.length;a++)this.items[a].reset()
            }
        };

d.fn.parsley=function(a,b){
    function c(c,g){
        var e=d(c).data(g);
        if(!e){
            switch(g){
                case"parsleyForm":
                    e=new k(c,f,"parsleyForm");
                    break;
                case"parsleyField":
                    e=new j(c,f,"parsleyField");
                    break;
                case"parsleyFieldMultiple":
                    e=new l(c,f,"parsleyFieldMultiple");
                    break;
                default:
                    return
                    }
                    d(c).data(g,e)
            }
            return"string"===typeof a&&"function"===typeof e[a]?(e=e[a](b),"undefined"!==typeof e?e:d(c)):e
        }
        var f=d.extend(!0,{},d.fn.parsley.defaults,"undefined"!==typeof window.ParsleyConfig?window.ParsleyConfig:{},a,this.data()),g=null;
    d(this).is("form")?g=c(d(this),"parsleyForm"):d(this).is(f.inputs)&&!d(this).is(f.excluded)&&(g=c(d(this),!d(this).is("input[type=radio], input[type=checkbox]")?"parsleyField":"parsleyFieldMultiple"));
    return"function"===typeof b?b():g
    };
    
d.fn.parsley.Constructor=k;
d.fn.parsley.defaults={
    inputs:"input, textarea, select",
    excluded:"input[type=hidden], :disabled",
    trigger:!1,
    animate:!0,
    animateDuration:300,
    focus:"first",
    validationMinlength:3,
    successClass:"parsley-success",
    errorClass:"parsley-error",
    errorMessage:!1,
    validators:{},
    showErrors:!0,
    messages:{},
    validateIfUnchanged:!1,
    errors:{
        classHandler:function(){},
        container:function(){},
        errorsWrapper:"<ul></ul>",
        errorElem:"<li></li>"
    },
    listeners:{
        onFieldValidate:function(){
            return!1
            },
        onFormSubmit:function(){},
        onFieldError:function(){},
        onFieldSuccess:function(){}
    }
};

d(window).on("load",function(){
    d('[data-validate="parsley"]').each(function(){
        d(this).parsley()
        })
    })
}(window.jQuery||window.Zepto);
!function(a){
    "undefined"==typeof a.fn.each2&&a.extend(a.fn,{
        each2:function(b){
            for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);
            return this
            }
        })
}(jQuery),function(a,b){
    "use strict";
    function n(a){
        var b,c,d,e;
        if(!a||a.length<1)return a;
        for(b="",c=0,d=a.length;d>c;c++)e=a.charAt(c),b+=m[e]||e;
        return b
        }
        function o(a,b){
        for(var c=0,d=b.length;d>c;c+=1)if(q(a,b[c]))return c;return-1
        }
        function p(){
        var b=a(l);
        b.appendTo("body");
        var c={
            width:b.width()-b[0].clientWidth,
            height:b.height()-b[0].clientHeight
            };
            
        return b.remove(),c
        }
        function q(a,c){
        return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1
        }
        function r(b,c){
        var d,e,f;
        if(null===b||b.length<1)return[];
        for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);
        return d
        }
        function s(a){
        return a.outerWidth(!1)-a.width()
        }
        function t(c){
        var d="keyup-change-value";
        c.on("keydown",function(){
            a.data(c,d)===b&&a.data(c,d,c.val())
            }),c.on("keyup",function(){
            var e=a.data(c,d);
            e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))
            })
        }
        function u(c){
        c.on("mousemove",function(c){
            var d=i;
            (d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)
            })
        }
        function v(a,c,d){
        d=d||b;
        var e;
        return function(){
            var b=arguments;
            window.clearTimeout(e),e=window.setTimeout(function(){
                c.apply(d,b)
                },a)
            }
        }
    function w(a){
    var c,b=!1;
    return function(){
        return b===!1&&(c=a(),b=!0),c
        }
    }
function x(a,b){
    var c=v(a,function(a){
        b.trigger("scroll-debounced",a)
        });
    b.on("scroll",function(a){
        o(a.target,b.get())>=0&&c(a)
        })
    }
    function y(a){
    a[0]!==document.activeElement&&window.setTimeout(function(){
        var d,b=a[0],c=a.val().length;
        a.focus(),a.is(":visible")&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))
        },0)
    }
    function z(b){
    b=a(b)[0];
    var c=0,d=0;
    if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;
    else if("selection"in document){
        b.focus();
        var e=document.selection.createRange();
        d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d
        }
        return{
        offset:c,
        length:d
    }
}
function A(a){
    a.preventDefault(),a.stopPropagation()
    }
    function B(a){
    a.preventDefault(),a.stopImmediatePropagation()
    }
    function C(b){
    if(!h){
        var c=b[0].currentStyle||window.getComputedStyle(b[0],null);
        h=a(document.createElement("div")).css({
            position:"absolute",
            left:"-10000px",
            top:"-10000px",
            display:"none",
            fontSize:c.fontSize,
            fontFamily:c.fontFamily,
            fontStyle:c.fontStyle,
            fontWeight:c.fontWeight,
            letterSpacing:c.letterSpacing,
            textTransform:c.textTransform,
            whiteSpace:"nowrap"
        }),h.attr("class","select2-sizer"),a("body").append(h)
        }
        return h.text(b.val()),h.width()
    }
    function D(b,c,d){
    var e,g,f=[];
    e=b.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){
        0===this.indexOf("select2-")&&f.push(this)
        })),e=c.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){
        0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(this))
        })),b.attr("class",f.join(" "))
    }
    function E(a,b,c,d){
    var e=n(a.toUpperCase()).indexOf(n(b.toUpperCase())),f=b.length;
    return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)
    }
    function F(a){
    var b={
        "\\":"&#92;",
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#39;",
        "/":"&#47;"
    };
    
    return String(a).replace(/[&<>"'\/\\]/g,function(a){
        return b[a]
        })
    }
    function G(c){
    var d,e=null,f=c.quietMillis||100,g=c.url,h=this;
    return function(i){
        window.clearTimeout(d),d=window.setTimeout(function(){
            var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={
                type:c.type||"GET",
                cache:c.cache||!1,
                jsonpCallback:c.jsonpCallback||b,
                dataType:c.dataType||"json"
                },l=a.extend({},a.fn.select2.ajaxDefaults.params,k);
            d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{
                url:f,
                dataType:c.dataType,
                data:d,
                success:function(a){
                    var b=c.results(a,i.page);
                    i.callback(b)
                    }
                }),e=j.call(h,l)
            },f)
    }
}
function H(b){
    var d,e,c=b,f=function(a){
        return""+a.text
        };
        
    a.isArray(c)&&(e=c,c={
        results:e
    }),a.isFunction(c)===!1&&(e=c,c=function(){
        return e
        });
    var g=c();
    return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){
        return a[d]
        })),function(b){
        var g,d=b.term,e={
            results:[]
        };
        
        return""===d?(b.callback(c()),void 0):(g=function(c,e){
            var h,i;
            if(c=c[0],c.children){
                h={};
                
                for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){
                    g(b,h.children)
                    }),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)
                }else b.matcher(d,f(c),c)&&e.push(c)
                },a(c().results).each2(function(a,b){
            g(b,e.results)
            }),b.callback(e),void 0)
        }
    }
function I(c){
    var d=a.isFunction(c);
    return function(e){
        var f=e.term,g={
            results:[]
        };
        
        a(d?c():c).each(function(){
            var a=this.text!==b,c=a?this.text:this;
            (""===f||e.matcher(f,c))&&g.results.push(a?this:{
                id:this,
                text:this
            })
            }),e.callback(g)
        }
    }
function J(b,c){
    if(a.isFunction(b))return!0;
    if(!b)return!1;
    throw new Error(c+" must be a function or a falsy value")
    }
    function K(b){
    return a.isFunction(b)?b():b
    }
    function L(b){
    var c=0;
    return a.each(b,function(a,b){
        b.children?c+=L(b.children):c++
    }),c
    }
    function M(a,c,d,e){
    var h,i,j,k,l,f=a,g=!1;
    if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;
    for(;;){
        for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);
        if(0>i)break;
        if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){
            for(g=!1,j=0,k=c.length;k>j;j++)if(q(e.id(h),e.id(c[j]))){
                g=!0;
                break
            }
            g||d(h)
            }
        }
    return f!==a?a:void 0
}
function N(b,c){
    var d=function(){};
    
    return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d
    }
    if(window.Select2===b){
    var c,d,e,f,g,h,j,k,i={
        x:0,
        y:0
    },c={
        TAB:9,
        ENTER:13,
        ESC:27,
        SPACE:32,
        LEFT:37,
        UP:38,
        RIGHT:39,
        DOWN:40,
        SHIFT:16,
        CTRL:17,
        ALT:18,
        PAGE_UP:33,
        PAGE_DOWN:34,
        HOME:36,
        END:35,
        BACKSPACE:8,
        DELETE:46,
        isArrow:function(a){
            switch(a=a.which?a.which:a){
                case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:
                    return!0
                    }
                    return!1
            },
        isControl:function(a){
            var b=a.which;
            switch(b){
                case c.SHIFT:case c.CTRL:case c.ALT:
                    return!0
                    }
                    return a.metaKey?!0:!1
            },
        isFunctionKey:function(a){
            return a=a.which?a.which:a,a>=112&&123>=a
            }
        },l="<div class='select2-measure-scrollbar'></div>",m={
    "\u24b6":"A",
    "\uff21":"A",
    "\xc0":"A",
    "\xc1":"A",
    "\xc2":"A",
    "\u1ea6":"A",
    "\u1ea4":"A",
    "\u1eaa":"A",
    "\u1ea8":"A",
    "\xc3":"A",
    "\u0100":"A",
    "\u0102":"A",
    "\u1eb0":"A",
    "\u1eae":"A",
    "\u1eb4":"A",
    "\u1eb2":"A",
    "\u0226":"A",
    "\u01e0":"A",
    "\xc4":"A",
    "\u01de":"A",
    "\u1ea2":"A",
    "\xc5":"A",
    "\u01fa":"A",
    "\u01cd":"A",
    "\u0200":"A",
    "\u0202":"A",
    "\u1ea0":"A",
    "\u1eac":"A",
    "\u1eb6":"A",
    "\u1e00":"A",
    "\u0104":"A",
    "\u023a":"A",
    "\u2c6f":"A",
    "\ua732":"AA",
    "\xc6":"AE",
    "\u01fc":"AE",
    "\u01e2":"AE",
    "\ua734":"AO",
    "\ua736":"AU",
    "\ua738":"AV",
    "\ua73a":"AV",
    "\ua73c":"AY",
    "\u24b7":"B",
    "\uff22":"B",
    "\u1e02":"B",
    "\u1e04":"B",
    "\u1e06":"B",
    "\u0243":"B",
    "\u0182":"B",
    "\u0181":"B",
    "\u24b8":"C",
    "\uff23":"C",
    "\u0106":"C",
    "\u0108":"C",
    "\u010a":"C",
    "\u010c":"C",
    "\xc7":"C",
    "\u1e08":"C",
    "\u0187":"C",
    "\u023b":"C",
    "\ua73e":"C",
    "\u24b9":"D",
    "\uff24":"D",
    "\u1e0a":"D",
    "\u010e":"D",
    "\u1e0c":"D",
    "\u1e10":"D",
    "\u1e12":"D",
    "\u1e0e":"D",
    "\u0110":"D",
    "\u018b":"D",
    "\u018a":"D",
    "\u0189":"D",
    "\ua779":"D",
    "\u01f1":"DZ",
    "\u01c4":"DZ",
    "\u01f2":"Dz",
    "\u01c5":"Dz",
    "\u24ba":"E",
    "\uff25":"E",
    "\xc8":"E",
    "\xc9":"E",
    "\xca":"E",
    "\u1ec0":"E",
    "\u1ebe":"E",
    "\u1ec4":"E",
    "\u1ec2":"E",
    "\u1ebc":"E",
    "\u0112":"E",
    "\u1e14":"E",
    "\u1e16":"E",
    "\u0114":"E",
    "\u0116":"E",
    "\xcb":"E",
    "\u1eba":"E",
    "\u011a":"E",
    "\u0204":"E",
    "\u0206":"E",
    "\u1eb8":"E",
    "\u1ec6":"E",
    "\u0228":"E",
    "\u1e1c":"E",
    "\u0118":"E",
    "\u1e18":"E",
    "\u1e1a":"E",
    "\u0190":"E",
    "\u018e":"E",
    "\u24bb":"F",
    "\uff26":"F",
    "\u1e1e":"F",
    "\u0191":"F",
    "\ua77b":"F",
    "\u24bc":"G",
    "\uff27":"G",
    "\u01f4":"G",
    "\u011c":"G",
    "\u1e20":"G",
    "\u011e":"G",
    "\u0120":"G",
    "\u01e6":"G",
    "\u0122":"G",
    "\u01e4":"G",
    "\u0193":"G",
    "\ua7a0":"G",
    "\ua77d":"G",
    "\ua77e":"G",
    "\u24bd":"H",
    "\uff28":"H",
    "\u0124":"H",
    "\u1e22":"H",
    "\u1e26":"H",
    "\u021e":"H",
    "\u1e24":"H",
    "\u1e28":"H",
    "\u1e2a":"H",
    "\u0126":"H",
    "\u2c67":"H",
    "\u2c75":"H",
    "\ua78d":"H",
    "\u24be":"I",
    "\uff29":"I",
    "\xcc":"I",
    "\xcd":"I",
    "\xce":"I",
    "\u0128":"I",
    "\u012a":"I",
    "\u012c":"I",
    "\u0130":"I",
    "\xcf":"I",
    "\u1e2e":"I",
    "\u1ec8":"I",
    "\u01cf":"I",
    "\u0208":"I",
    "\u020a":"I",
    "\u1eca":"I",
    "\u012e":"I",
    "\u1e2c":"I",
    "\u0197":"I",
    "\u24bf":"J",
    "\uff2a":"J",
    "\u0134":"J",
    "\u0248":"J",
    "\u24c0":"K",
    "\uff2b":"K",
    "\u1e30":"K",
    "\u01e8":"K",
    "\u1e32":"K",
    "\u0136":"K",
    "\u1e34":"K",
    "\u0198":"K",
    "\u2c69":"K",
    "\ua740":"K",
    "\ua742":"K",
    "\ua744":"K",
    "\ua7a2":"K",
    "\u24c1":"L",
    "\uff2c":"L",
    "\u013f":"L",
    "\u0139":"L",
    "\u013d":"L",
    "\u1e36":"L",
    "\u1e38":"L",
    "\u013b":"L",
    "\u1e3c":"L",
    "\u1e3a":"L",
    "\u0141":"L",
    "\u023d":"L",
    "\u2c62":"L",
    "\u2c60":"L",
    "\ua748":"L",
    "\ua746":"L",
    "\ua780":"L",
    "\u01c7":"LJ",
    "\u01c8":"Lj",
    "\u24c2":"M",
    "\uff2d":"M",
    "\u1e3e":"M",
    "\u1e40":"M",
    "\u1e42":"M",
    "\u2c6e":"M",
    "\u019c":"M",
    "\u24c3":"N",
    "\uff2e":"N",
    "\u01f8":"N",
    "\u0143":"N",
    "\xd1":"N",
    "\u1e44":"N",
    "\u0147":"N",
    "\u1e46":"N",
    "\u0145":"N",
    "\u1e4a":"N",
    "\u1e48":"N",
    "\u0220":"N",
    "\u019d":"N",
    "\ua790":"N",
    "\ua7a4":"N",
    "\u01ca":"NJ",
    "\u01cb":"Nj",
    "\u24c4":"O",
    "\uff2f":"O",
    "\xd2":"O",
    "\xd3":"O",
    "\xd4":"O",
    "\u1ed2":"O",
    "\u1ed0":"O",
    "\u1ed6":"O",
    "\u1ed4":"O",
    "\xd5":"O",
    "\u1e4c":"O",
    "\u022c":"O",
    "\u1e4e":"O",
    "\u014c":"O",
    "\u1e50":"O",
    "\u1e52":"O",
    "\u014e":"O",
    "\u022e":"O",
    "\u0230":"O",
    "\xd6":"O",
    "\u022a":"O",
    "\u1ece":"O",
    "\u0150":"O",
    "\u01d1":"O",
    "\u020c":"O",
    "\u020e":"O",
    "\u01a0":"O",
    "\u1edc":"O",
    "\u1eda":"O",
    "\u1ee0":"O",
    "\u1ede":"O",
    "\u1ee2":"O",
    "\u1ecc":"O",
    "\u1ed8":"O",
    "\u01ea":"O",
    "\u01ec":"O",
    "\xd8":"O",
    "\u01fe":"O",
    "\u0186":"O",
    "\u019f":"O",
    "\ua74a":"O",
    "\ua74c":"O",
    "\u01a2":"OI",
    "\ua74e":"OO",
    "\u0222":"OU",
    "\u24c5":"P",
    "\uff30":"P",
    "\u1e54":"P",
    "\u1e56":"P",
    "\u01a4":"P",
    "\u2c63":"P",
    "\ua750":"P",
    "\ua752":"P",
    "\ua754":"P",
    "\u24c6":"Q",
    "\uff31":"Q",
    "\ua756":"Q",
    "\ua758":"Q",
    "\u024a":"Q",
    "\u24c7":"R",
    "\uff32":"R",
    "\u0154":"R",
    "\u1e58":"R",
    "\u0158":"R",
    "\u0210":"R",
    "\u0212":"R",
    "\u1e5a":"R",
    "\u1e5c":"R",
    "\u0156":"R",
    "\u1e5e":"R",
    "\u024c":"R",
    "\u2c64":"R",
    "\ua75a":"R",
    "\ua7a6":"R",
    "\ua782":"R",
    "\u24c8":"S",
    "\uff33":"S",
    "\u1e9e":"S",
    "\u015a":"S",
    "\u1e64":"S",
    "\u015c":"S",
    "\u1e60":"S",
    "\u0160":"S",
    "\u1e66":"S",
    "\u1e62":"S",
    "\u1e68":"S",
    "\u0218":"S",
    "\u015e":"S",
    "\u2c7e":"S",
    "\ua7a8":"S",
    "\ua784":"S",
    "\u24c9":"T",
    "\uff34":"T",
    "\u1e6a":"T",
    "\u0164":"T",
    "\u1e6c":"T",
    "\u021a":"T",
    "\u0162":"T",
    "\u1e70":"T",
    "\u1e6e":"T",
    "\u0166":"T",
    "\u01ac":"T",
    "\u01ae":"T",
    "\u023e":"T",
    "\ua786":"T",
    "\ua728":"TZ",
    "\u24ca":"U",
    "\uff35":"U",
    "\xd9":"U",
    "\xda":"U",
    "\xdb":"U",
    "\u0168":"U",
    "\u1e78":"U",
    "\u016a":"U",
    "\u1e7a":"U",
    "\u016c":"U",
    "\xdc":"U",
    "\u01db":"U",
    "\u01d7":"U",
    "\u01d5":"U",
    "\u01d9":"U",
    "\u1ee6":"U",
    "\u016e":"U",
    "\u0170":"U",
    "\u01d3":"U",
    "\u0214":"U",
    "\u0216":"U",
    "\u01af":"U",
    "\u1eea":"U",
    "\u1ee8":"U",
    "\u1eee":"U",
    "\u1eec":"U",
    "\u1ef0":"U",
    "\u1ee4":"U",
    "\u1e72":"U",
    "\u0172":"U",
    "\u1e76":"U",
    "\u1e74":"U",
    "\u0244":"U",
    "\u24cb":"V",
    "\uff36":"V",
    "\u1e7c":"V",
    "\u1e7e":"V",
    "\u01b2":"V",
    "\ua75e":"V",
    "\u0245":"V",
    "\ua760":"VY",
    "\u24cc":"W",
    "\uff37":"W",
    "\u1e80":"W",
    "\u1e82":"W",
    "\u0174":"W",
    "\u1e86":"W",
    "\u1e84":"W",
    "\u1e88":"W",
    "\u2c72":"W",
    "\u24cd":"X",
    "\uff38":"X",
    "\u1e8a":"X",
    "\u1e8c":"X",
    "\u24ce":"Y",
    "\uff39":"Y",
    "\u1ef2":"Y",
    "\xdd":"Y",
    "\u0176":"Y",
    "\u1ef8":"Y",
    "\u0232":"Y",
    "\u1e8e":"Y",
    "\u0178":"Y",
    "\u1ef6":"Y",
    "\u1ef4":"Y",
    "\u01b3":"Y",
    "\u024e":"Y",
    "\u1efe":"Y",
    "\u24cf":"Z",
    "\uff3a":"Z",
    "\u0179":"Z",
    "\u1e90":"Z",
    "\u017b":"Z",
    "\u017d":"Z",
    "\u1e92":"Z",
    "\u1e94":"Z",
    "\u01b5":"Z",
    "\u0224":"Z",
    "\u2c7f":"Z",
    "\u2c6b":"Z",
    "\ua762":"Z",
    "\u24d0":"a",
    "\uff41":"a",
    "\u1e9a":"a",
    "\xe0":"a",
    "\xe1":"a",
    "\xe2":"a",
    "\u1ea7":"a",
    "\u1ea5":"a",
    "\u1eab":"a",
    "\u1ea9":"a",
    "\xe3":"a",
    "\u0101":"a",
    "\u0103":"a",
    "\u1eb1":"a",
    "\u1eaf":"a",
    "\u1eb5":"a",
    "\u1eb3":"a",
    "\u0227":"a",
    "\u01e1":"a",
    "\xe4":"a",
    "\u01df":"a",
    "\u1ea3":"a",
    "\xe5":"a",
    "\u01fb":"a",
    "\u01ce":"a",
    "\u0201":"a",
    "\u0203":"a",
    "\u1ea1":"a",
    "\u1ead":"a",
    "\u1eb7":"a",
    "\u1e01":"a",
    "\u0105":"a",
    "\u2c65":"a",
    "\u0250":"a",
    "\ua733":"aa",
    "\xe6":"ae",
    "\u01fd":"ae",
    "\u01e3":"ae",
    "\ua735":"ao",
    "\ua737":"au",
    "\ua739":"av",
    "\ua73b":"av",
    "\ua73d":"ay",
    "\u24d1":"b",
    "\uff42":"b",
    "\u1e03":"b",
    "\u1e05":"b",
    "\u1e07":"b",
    "\u0180":"b",
    "\u0183":"b",
    "\u0253":"b",
    "\u24d2":"c",
    "\uff43":"c",
    "\u0107":"c",
    "\u0109":"c",
    "\u010b":"c",
    "\u010d":"c",
    "\xe7":"c",
    "\u1e09":"c",
    "\u0188":"c",
    "\u023c":"c",
    "\ua73f":"c",
    "\u2184":"c",
    "\u24d3":"d",
    "\uff44":"d",
    "\u1e0b":"d",
    "\u010f":"d",
    "\u1e0d":"d",
    "\u1e11":"d",
    "\u1e13":"d",
    "\u1e0f":"d",
    "\u0111":"d",
    "\u018c":"d",
    "\u0256":"d",
    "\u0257":"d",
    "\ua77a":"d",
    "\u01f3":"dz",
    "\u01c6":"dz",
    "\u24d4":"e",
    "\uff45":"e",
    "\xe8":"e",
    "\xe9":"e",
    "\xea":"e",
    "\u1ec1":"e",
    "\u1ebf":"e",
    "\u1ec5":"e",
    "\u1ec3":"e",
    "\u1ebd":"e",
    "\u0113":"e",
    "\u1e15":"e",
    "\u1e17":"e",
    "\u0115":"e",
    "\u0117":"e",
    "\xeb":"e",
    "\u1ebb":"e",
    "\u011b":"e",
    "\u0205":"e",
    "\u0207":"e",
    "\u1eb9":"e",
    "\u1ec7":"e",
    "\u0229":"e",
    "\u1e1d":"e",
    "\u0119":"e",
    "\u1e19":"e",
    "\u1e1b":"e",
    "\u0247":"e",
    "\u025b":"e",
    "\u01dd":"e",
    "\u24d5":"f",
    "\uff46":"f",
    "\u1e1f":"f",
    "\u0192":"f",
    "\ua77c":"f",
    "\u24d6":"g",
    "\uff47":"g",
    "\u01f5":"g",
    "\u011d":"g",
    "\u1e21":"g",
    "\u011f":"g",
    "\u0121":"g",
    "\u01e7":"g",
    "\u0123":"g",
    "\u01e5":"g",
    "\u0260":"g",
    "\ua7a1":"g",
    "\u1d79":"g",
    "\ua77f":"g",
    "\u24d7":"h",
    "\uff48":"h",
    "\u0125":"h",
    "\u1e23":"h",
    "\u1e27":"h",
    "\u021f":"h",
    "\u1e25":"h",
    "\u1e29":"h",
    "\u1e2b":"h",
    "\u1e96":"h",
    "\u0127":"h",
    "\u2c68":"h",
    "\u2c76":"h",
    "\u0265":"h",
    "\u0195":"hv",
    "\u24d8":"i",
    "\uff49":"i",
    "\xec":"i",
    "\xed":"i",
    "\xee":"i",
    "\u0129":"i",
    "\u012b":"i",
    "\u012d":"i",
    "\xef":"i",
    "\u1e2f":"i",
    "\u1ec9":"i",
    "\u01d0":"i",
    "\u0209":"i",
    "\u020b":"i",
    "\u1ecb":"i",
    "\u012f":"i",
    "\u1e2d":"i",
    "\u0268":"i",
    "\u0131":"i",
    "\u24d9":"j",
    "\uff4a":"j",
    "\u0135":"j",
    "\u01f0":"j",
    "\u0249":"j",
    "\u24da":"k",
    "\uff4b":"k",
    "\u1e31":"k",
    "\u01e9":"k",
    "\u1e33":"k",
    "\u0137":"k",
    "\u1e35":"k",
    "\u0199":"k",
    "\u2c6a":"k",
    "\ua741":"k",
    "\ua743":"k",
    "\ua745":"k",
    "\ua7a3":"k",
    "\u24db":"l",
    "\uff4c":"l",
    "\u0140":"l",
    "\u013a":"l",
    "\u013e":"l",
    "\u1e37":"l",
    "\u1e39":"l",
    "\u013c":"l",
    "\u1e3d":"l",
    "\u1e3b":"l",
    "\u017f":"l",
    "\u0142":"l",
    "\u019a":"l",
    "\u026b":"l",
    "\u2c61":"l",
    "\ua749":"l",
    "\ua781":"l",
    "\ua747":"l",
    "\u01c9":"lj",
    "\u24dc":"m",
    "\uff4d":"m",
    "\u1e3f":"m",
    "\u1e41":"m",
    "\u1e43":"m",
    "\u0271":"m",
    "\u026f":"m",
    "\u24dd":"n",
    "\uff4e":"n",
    "\u01f9":"n",
    "\u0144":"n",
    "\xf1":"n",
    "\u1e45":"n",
    "\u0148":"n",
    "\u1e47":"n",
    "\u0146":"n",
    "\u1e4b":"n",
    "\u1e49":"n",
    "\u019e":"n",
    "\u0272":"n",
    "\u0149":"n",
    "\ua791":"n",
    "\ua7a5":"n",
    "\u01cc":"nj",
    "\u24de":"o",
    "\uff4f":"o",
    "\xf2":"o",
    "\xf3":"o",
    "\xf4":"o",
    "\u1ed3":"o",
    "\u1ed1":"o",
    "\u1ed7":"o",
    "\u1ed5":"o",
    "\xf5":"o",
    "\u1e4d":"o",
    "\u022d":"o",
    "\u1e4f":"o",
    "\u014d":"o",
    "\u1e51":"o",
    "\u1e53":"o",
    "\u014f":"o",
    "\u022f":"o",
    "\u0231":"o",
    "\xf6":"o",
    "\u022b":"o",
    "\u1ecf":"o",
    "\u0151":"o",
    "\u01d2":"o",
    "\u020d":"o",
    "\u020f":"o",
    "\u01a1":"o",
    "\u1edd":"o",
    "\u1edb":"o",
    "\u1ee1":"o",
    "\u1edf":"o",
    "\u1ee3":"o",
    "\u1ecd":"o",
    "\u1ed9":"o",
    "\u01eb":"o",
    "\u01ed":"o",
    "\xf8":"o",
    "\u01ff":"o",
    "\u0254":"o",
    "\ua74b":"o",
    "\ua74d":"o",
    "\u0275":"o",
    "\u01a3":"oi",
    "\u0223":"ou",
    "\ua74f":"oo",
    "\u24df":"p",
    "\uff50":"p",
    "\u1e55":"p",
    "\u1e57":"p",
    "\u01a5":"p",
    "\u1d7d":"p",
    "\ua751":"p",
    "\ua753":"p",
    "\ua755":"p",
    "\u24e0":"q",
    "\uff51":"q",
    "\u024b":"q",
    "\ua757":"q",
    "\ua759":"q",
    "\u24e1":"r",
    "\uff52":"r",
    "\u0155":"r",
    "\u1e59":"r",
    "\u0159":"r",
    "\u0211":"r",
    "\u0213":"r",
    "\u1e5b":"r",
    "\u1e5d":"r",
    "\u0157":"r",
    "\u1e5f":"r",
    "\u024d":"r",
    "\u027d":"r",
    "\ua75b":"r",
    "\ua7a7":"r",
    "\ua783":"r",
    "\u24e2":"s",
    "\uff53":"s",
    "\xdf":"s",
    "\u015b":"s",
    "\u1e65":"s",
    "\u015d":"s",
    "\u1e61":"s",
    "\u0161":"s",
    "\u1e67":"s",
    "\u1e63":"s",
    "\u1e69":"s",
    "\u0219":"s",
    "\u015f":"s",
    "\u023f":"s",
    "\ua7a9":"s",
    "\ua785":"s",
    "\u1e9b":"s",
    "\u24e3":"t",
    "\uff54":"t",
    "\u1e6b":"t",
    "\u1e97":"t",
    "\u0165":"t",
    "\u1e6d":"t",
    "\u021b":"t",
    "\u0163":"t",
    "\u1e71":"t",
    "\u1e6f":"t",
    "\u0167":"t",
    "\u01ad":"t",
    "\u0288":"t",
    "\u2c66":"t",
    "\ua787":"t",
    "\ua729":"tz",
    "\u24e4":"u",
    "\uff55":"u",
    "\xf9":"u",
    "\xfa":"u",
    "\xfb":"u",
    "\u0169":"u",
    "\u1e79":"u",
    "\u016b":"u",
    "\u1e7b":"u",
    "\u016d":"u",
    "\xfc":"u",
    "\u01dc":"u",
    "\u01d8":"u",
    "\u01d6":"u",
    "\u01da":"u",
    "\u1ee7":"u",
    "\u016f":"u",
    "\u0171":"u",
    "\u01d4":"u",
    "\u0215":"u",
    "\u0217":"u",
    "\u01b0":"u",
    "\u1eeb":"u",
    "\u1ee9":"u",
    "\u1eef":"u",
    "\u1eed":"u",
    "\u1ef1":"u",
    "\u1ee5":"u",
    "\u1e73":"u",
    "\u0173":"u",
    "\u1e77":"u",
    "\u1e75":"u",
    "\u0289":"u",
    "\u24e5":"v",
    "\uff56":"v",
    "\u1e7d":"v",
    "\u1e7f":"v",
    "\u028b":"v",
    "\ua75f":"v",
    "\u028c":"v",
    "\ua761":"vy",
    "\u24e6":"w",
    "\uff57":"w",
    "\u1e81":"w",
    "\u1e83":"w",
    "\u0175":"w",
    "\u1e87":"w",
    "\u1e85":"w",
    "\u1e98":"w",
    "\u1e89":"w",
    "\u2c73":"w",
    "\u24e7":"x",
    "\uff58":"x",
    "\u1e8b":"x",
    "\u1e8d":"x",
    "\u24e8":"y",
    "\uff59":"y",
    "\u1ef3":"y",
    "\xfd":"y",
    "\u0177":"y",
    "\u1ef9":"y",
    "\u0233":"y",
    "\u1e8f":"y",
    "\xff":"y",
    "\u1ef7":"y",
    "\u1e99":"y",
    "\u1ef5":"y",
    "\u01b4":"y",
    "\u024f":"y",
    "\u1eff":"y",
    "\u24e9":"z",
    "\uff5a":"z",
    "\u017a":"z",
    "\u1e91":"z",
    "\u017c":"z",
    "\u017e":"z",
    "\u1e93":"z",
    "\u1e95":"z",
    "\u01b6":"z",
    "\u0225":"z",
    "\u0240":"z",
    "\u2c6c":"z",
    "\ua763":"z"
};

j=a(document),g=function(){
    var a=1;
    return function(){
        return a++
        }
    }(),j.on("mousemove",function(a){
    i.x=a.pageX,i.y=a.pageY
    }),d=N(Object,{
    bind:function(a){
        var b=this;
        return function(){
            a.apply(b,arguments)
            }
        },
init:function(c){
    var d,e,h,i,f=".select2-results";
    this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+g()),this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.body=w(function(){
        return c.element.closest("body")
        }),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss)),this.container.addClass(K(c.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),this.dropdown.addClass(K(c.dropdownCssClass)),this.dropdown.data("select2",this),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.results=d=this.container.find(f),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),u(this.results),this.dropdown.on("mousemove-filtered touchstart touchmove touchend",f,this.bind(this.highlightUnderEvent)),x(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){
        a.stopPropagation()
        }),a(this.dropdown).on("change",".select2-input",function(a){
        a.stopPropagation()
        }),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){
        var f=d.scrollTop();
        e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))
        }),t(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){
        e.addClass("select2-focused")
        }),e.on("blur",function(){
        e.removeClass("select2-focused")
        }),this.dropdown.on("mouseup",f,this.bind(function(b){
        a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))
        })),this.dropdown.on("click mouseup mousedown",function(a){
        a.stopPropagation()
        }),a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);
    var h=c.element.prop("disabled");
    h===b&&(h=!1),this.enable(!h);
    var i=c.element.prop("readonly");
    i===b&&(i=!1),this.readonly(i),k=k||p(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.nextSearchTerm=b
    },
destroy:function(){
    var a=this.opts.element,c=a.data("select2");
    this.close(),this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),c!==b&&(c.container.remove(),c.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({
        tabindex:this.elementTabIndex
        }):a.removeAttr("tabindex"),a.show())
    },
optionToData:function(a){
    return a.is("option")?{
        id:a.prop("value"),
        text:a.text(),
        element:a.get(),
        css:a.attr("class"),
        disabled:a.prop("disabled"),
        locked:q(a.attr("locked"),"locked")||q(a.data("locked"),!0)
        }:a.is("optgroup")?{
        text:a.attr("label"),
        children:[],
        element:a.get(),
        css:a.attr("class")
        }:void 0
    },
prepareOpts:function(c){
    var d,e,f,g,h=this;
    if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){
        if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")
            }),c=a.extend({},{
        populateResults:function(d,e,f){
            var g,l=this.opts.id;
            g=function(d,e,i){
                var j,k,m,n,o,p,q,r,s,t;
                for(d=c.sortResults(d,e,f),j=0,k=d.length;k>j;j+=1)m=d[j],o=m.disabled===!0,n=!o&&l(m)!==b,p=m.children&&m.children.length>0,q=a("<li></li>"),q.addClass("select2-results-dept-"+i),q.addClass("select2-result"),q.addClass(n?"select2-result-selectable":"select2-result-unselectable"),o&&q.addClass("select2-disabled"),p&&q.addClass("select2-result-with-children"),q.addClass(h.opts.formatResultCssClass(m)),r=a(document.createElement("div")),r.addClass("select2-result-label"),t=c.formatResult(m,r,f,h.opts.escapeMarkup),t!==b&&r.html(t),q.append(r),p&&(s=a("<ul></ul>"),s.addClass("select2-result-sub"),g(m.children,s,i+1),q.append(s)),q.data("select2-data",m),e.append(q)
                    },g(e,d,0)
            }
        },a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){
        return a[f]
        }),a.isArray(c.element.data("select2Tags"))){
    if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");
    c.tags=c.element.data("select2Tags")
    }
    if(e?(c.query=this.bind(function(a){
    var f,g,i,c={
        results:[],
        more:!1
        },e=a.term;
    i=function(b,c){
        var d;
        b.is("option")?a.matcher(e,b.text(),b)&&c.push(h.optionToData(b)):b.is("optgroup")&&(d=h.optionToData(b),b.children().each2(function(a,b){
            i(b,d.children)
            }),d.children.length>0&&c.push(d))
        },f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){
        i(b,c.results)
        }),a.callback(c)
    }),c.id=function(a){
    return a.id
    },c.formatResultCssClass=function(a){
    return a.css
    }):"query"in c||("ajax"in c?(g=c.element.data("ajax-url"),g&&g.length>0&&(c.ajax.url=g),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){
    return{
        id:a.trim(b),
        text:a.trim(b)
        }
    }),c.initSelection===b&&(c.initSelection=function(b,d){
    var e=[];
    a(r(b.val(),c.separator)).each(function(){
        var b=this,d=this,f=c.tags;
        a.isFunction(f)&&(f=f()),a(f).each(function(){
            return q(this.id,b)?(d=this.text,!1):void 0
            }),e.push({
            id:b,
            text:d
        })
        }),d(e)
    }))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");
return c
},
monitorSource:function(){
    var c,a=this.opts.element;
    a.on("change.select2",this.bind(function(){
        this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()
        })),c=this.bind(function(){
        var d,f=a.prop("disabled");
        f===b&&(f=!1),this.enable(!f);
        var d=a.prop("readonly");
        d===b&&(d=!1),this.readonly(d),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass)),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass))
        }),a.on("propertychange.select2 DOMAttrModified.select2",c),this.mutationCallback===b&&(this.mutationCallback=function(a){
        a.forEach(c)
        }),"undefined"!=typeof WebKitMutationObserver&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new WebKitMutationObserver(this.mutationCallback),this.propertyObserver.observe(a.get(0),{
        attributes:!0,
        subtree:!1
        }))
    },
triggerSelect:function(b){
    var c=a.Event("select2-selecting",{
        val:this.id(b),
        object:b
    });
    return this.opts.element.trigger(c),!c.isDefaultPrevented()
    },
triggerChange:function(b){
    b=b||{},b=a.extend({},b,{
        type:"change",
        val:this.val()
        }),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()
    },
isInterfaceEnabled:function(){
    return this.enabledInterface===!0
    },
enableInterface:function(){
    var a=this._enabled&&!this._readonly,b=!a;
    return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)
    },
enable:function(a){
    a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())
    },
disable:function(){
    this.enable(!1)
    },
readonly:function(a){
    return a===b&&(a=!1),this._readonly===a?!1:(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface(),!0)
    },
opened:function(){
    return this.container.hasClass("select2-dropdown-open")
    },
positionDropdown:function(){
    var q,r,s,t,b=this.dropdown,c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),g=a(window).scrollLeft()+a(window).width(),h=a(window).scrollTop()+a(window).height(),i=c.top+d,j=c.left,l=h>=i+f,m=c.top-f>=this.body().scrollTop(),n=b.outerWidth(!1),o=g>=j+n,p=b.hasClass("select2-drop-above");
    this.opts.dropdownAutoWidth?(t=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),n=b.outerWidth(!1)+(t.scrollHeight===t.clientHeight?0:k.width),n>e?e=n:n=e,o=g>=j+n):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body().css("position")&&(q=this.body().offset(),i-=q.top,j-=q.left),p?(r=!0,!m&&l&&(r=!1)):(r=!1,!l&&m&&(r=!0)),o||(j=c.left+e-n),r?(i=c.top-f,this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),s=a.extend({
        top:i,
        left:j,
        width:e
    },K(this.opts.dropdownCss)),b.css(s)
    },
shouldOpen:function(){
    var b;
    return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())
    },
clearDropdownAlignmentPreference:function(){
    this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")
    },
open:function(){
    return this.shouldOpen()?(this.opening(),!0):!1
    },
opening:function(){
    var f,b=this.containerId,c="scroll."+b,d="resize."+b,e="orientationchange."+b;
    this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body()),f=a("#select2-drop-mask"),0==f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body()),f.on("mousedown touchstart click",function(b){
        var d,c=a("#select2-drop");
        c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({
            noFocus:!0
            }),d.close({
            focus:!1
            }),b.preventDefault(),b.stopPropagation())
        })),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");
    var h=this;
    this.container.parents().add(window).each(function(){
        a(this).on(d+" "+c+" "+e,function(){
            h.positionDropdown()
            })
        })
    },
close:function(){
    if(this.opened()){
        var b=this.containerId,c="scroll."+b,d="resize."+b,e="orientationchange."+b;
        this.container.parents().add(window).each(function(){
            a(this).off(c).off(d).off(e)
            }),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open"),this.results.empty(),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))
        }
    },
externalSearch:function(a){
    this.open(),this.search.val(a),this.updateResults(!1)
    },
clearSearch:function(){},
getMaximumSelectionSize:function(){
    return K(this.opts.maximumSelectionSize)
    },
ensureHighlightVisible:function(){
    var c,d,e,f,g,h,i,b=this.results;
    if(d=this.highlight(),!(0>d)){
        if(0==d)return b.scrollTop(0),void 0;
        c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),f=e.offset().top+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!0),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=e.offset().top-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)
        }
    },
findHighlightableChoices:function(){
    return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")
    },
moveHighlight:function(b){
    for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){
        d+=b;
        var e=a(c[d]);
        if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){
            this.highlight(d);
            break
        }
    }
    },
highlight:function(b){
    var d,e,c=this.findHighlightableChoices();
    return 0===arguments.length?o(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.ensureHighlightVisible(),e=d.data("select2-data"),e&&this.opts.element.trigger({
        type:"select2-highlight",
        val:this.id(e),
        choice:e
    }),void 0)
    },
removeHighlight:function(){
    this.results.find(".select2-highlighted").removeClass("select2-highlighted")
    },
countSelectableResults:function(){
    return this.findHighlightableChoices().length
    },
highlightUnderEvent:function(b){
    var c=a(b.target).closest(".select2-result-selectable");
    if(c.length>0&&!c.is(".select2-highlighted")){
        var d=this.findHighlightableChoices();
        this.highlight(d.index(c))
        }else 0==c.length&&this.removeHighlight()
        },
loadMoreIfNeeded:function(){
    var c,a=this.results,b=a.find("li.select2-more-results"),e=this.resultsPage+1,f=this,g=this.search.val(),h=this.context;
    0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({
        element:this.opts.element,
        term:g,
        page:e,
        context:h,
        matcher:this.opts.matcher,
        callback:this.bind(function(c){
            f.opened()&&(f.opts.populateResults.call(this,a,c.results,{
                term:g,
                page:e,
                context:h
            }),f.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).text(f.opts.formatLoadMore(e+1)),window.setTimeout(function(){
                f.loadMoreIfNeeded()
                },10)):b.remove(),f.positionDropdown(),f.resultsPage=e,f.context=c.context,this.opts.element.trigger({
                type:"select2-loaded",
                items:c
            }))
            })
        })))
    },
tokenize:function(){},
updateResults:function(c){
    function m(){
        d.removeClass("select2-active"),h.positionDropdown()
        }
        function n(a){
        e.html(a),m()
        }
        var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");
    if((c===!0||!k||!q(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){
        l=++this.queryCount;
        var o=this.getMaximumSelectionSize();
        if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+f.formatSelectionTooBig(o)+"</li>"),void 0;
        if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+f.formatInputTooShort(d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;
        if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+f.formatInputTooLong(d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;
        f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+f.formatSearching()+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({
            element:f.element,
            term:d.val(),
            page:this.resultsPage,
            context:null,
            matcher:f.matcher,
            callback:this.bind(function(g){
                var i;
                if(l==this.queryCount){
                    if(!this.opened())return this.search.removeClass("select2-active"),void 0;
                    if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){
                        return q(h.id(this),h.id(i))
                        }).length&&g.results.unshift(i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+f.formatNoMatches(d.val())+"</li>"),void 0;
                    e.empty(),h.opts.populateResults.call(this,e,g.results,{
                        term:d.val(),
                        page:this.resultsPage,
                        context:null
                    }),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+h.opts.escapeMarkup(f.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){
                        h.loadMoreIfNeeded()
                        },10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({
                        type:"select2-loaded",
                        items:g
                    })
                    }
                })
        })
    }
},
cancel:function(){
    this.close()
    },
blur:function(){
    this.opts.selectOnBlur&&this.selectHighlighted({
        noFocus:!0
        }),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
    },
focusSearch:function(){
    y(this.search)
    },
selectHighlighted:function(a){
    var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");
    d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()
    },
getPlaceholder:function(){
    var a;
    return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)
    },
getPlaceholderOption:function(){
    if(this.select){
        var a=this.select.children().first();
        if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&a||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);
        if(""===a.text()&&""===a.val())return a
            }
        },
initContainerWidth:function(){
    function c(){
        var c,d,e,f,g;
        if("off"===this.opts.width)return null;
        if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";
        if("copy"===this.opts.width||"resolve"===this.opts.width){
            if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(e=d[f].replace(/\s/g,"").match(/[^-]width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null
            }
            return a.isFunction(this.opts.width)?this.opts.width():this.opts.width
        }
        var d=c.call(this);
    null!==d&&this.container.css("width",d)
    }
}),e=N(d,{
    createContainer:function(){
        var b=a(document.createElement("div")).attr({
            "class":"select2-container"
        }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));
        return b
        },
    enableInterface:function(){
        this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())
        },
    opening:function(){
        var c,d,e;
        this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e)),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))
        },
    close:function(a){
        this.opened()&&(this.parent.close.apply(this,arguments),a=a||{
            focus:!0
            },this.focusser.removeAttr("disabled"),a.focus&&this.focusser.focus())
        },
    focus:function(){
        this.opened()?this.close():(this.focusser.removeAttr("disabled"),this.focusser.focus())
        },
    isFocused:function(){
        return this.container.hasClass("select2-container-active")
        },
    cancel:function(){
        this.parent.cancel.apply(this,arguments),this.focusser.removeAttr("disabled"),this.focusser.focus()
        },
    destroy:function(){
        a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)
        },
    initContainer:function(){
        var b,d=this.container,e=this.dropdown;
        this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=d.find(".select2-choice"),this.focusser=d.find(".select2-focusser"),this.focusser.attr("id","s2id_autogen"+g()),a("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id")),this.focusser.attr("tabindex",this.elementTabIndex),this.search.on("keydown",this.bind(function(a){
            if(this.isInterfaceEnabled()){
                if(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)return A(a),void 0;
                switch(a.which){
                    case c.UP:case c.DOWN:
                        return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;
                    case c.ENTER:
                        return this.selectHighlighted(),A(a),void 0;
                    case c.TAB:
                        return this.opts.selectOnBlur&&this.selectHighlighted({
                        noFocus:!0
                        }),void 0;
                    case c.ESC:
                        return this.cancel(a),A(a),void 0
                        }
                    }
        })),this.search.on("blur",this.bind(function(){
    document.activeElement===this.body().get(0)&&window.setTimeout(this.bind(function(){
        this.search.focus()
        }),0)
    })),this.focusser.on("keydown",this.bind(function(a){
    if(this.isInterfaceEnabled()&&a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.ESC){
        if(this.opts.openOnEnter===!1&&a.which===c.ENTER)return A(a),void 0;
        if(a.which==c.DOWN||a.which==c.UP||a.which==c.ENTER&&this.opts.openOnEnter){
            if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;
            return this.open(),A(a),void 0
            }
            return a.which==c.DELETE||a.which==c.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0
        }
    })),t(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){
    if(this.opts.minimumResultsForSearch>=0){
        if(a.stopPropagation(),this.opened())return;
        this.open()
        }
    })),b.on("mousedown","abbr",this.bind(function(a){
    this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection.focus())
    })),b.on("mousedown",this.bind(function(b){
    this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(b)
    })),e.on("mousedown",this.bind(function(){
    this.search.focus()
    })),b.on("focus",this.bind(function(a){
    A(a)
    })),this.focusser.on("focus",this.bind(function(){
    this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")
    })).on("blur",this.bind(function(){
    this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))
    })),this.search.on("focus",this.bind(function(){
    this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")
    })),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()
},
clear:function(a){
    var b=this.selection.data("select2-data");
    if(b){
        var c=this.getPlaceholderOption();
        this.opts.element.val(c?c.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),a!==!1&&(this.opts.element.trigger({
            type:"select2-removed",
            val:this.id(b),
            choice:b
        }),this.triggerChange({
            removed:b
        }))
        }
    },
initSelection:function(){
    if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();
    else{
        var c=this;
        this.opts.initSelection.call(null,this.opts.element,function(a){
            a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder())
            })
        }
    },
isPlaceholderOptionSelected:function(){
    var a;
    return this.opts.placeholder?(a=this.getPlaceholderOption())!==b&&a.is(":selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val():!1
    },
prepareOpts:function(){
    var b=this.parent.prepareOpts.apply(this,arguments),c=this;
    return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){
        var d=a.find(":selected");
        b(c.optionToData(d))
        }:"data"in b&&(b.initSelection=b.initSelection||function(c,d){
        var e=c.val(),f=null;
        b.query({
            matcher:function(a,c,d){
                var g=q(e,b.id(d));
                return g&&(f=d),g
                },
            callback:a.isFunction(d)?function(){
                d(f)
                }:a.noop
            })
        }),b
    },
getPlaceholder:function(){
    return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)
    },
setPlaceholder:function(){
    var a=this.getPlaceholder();
    if(this.isPlaceholderOptionSelected()&&a!==b){
        if(this.select&&this.getPlaceholderOption()===b)return;
        this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")
        }
    },
postprocessResults:function(a,b,c){
    var d=0,e=this;
    if(this.findHighlightableChoices().each2(function(a,b){
        return q(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0
        }),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){
        var g=this.opts.minimumResultsForSearch;
        g>=0&&this.showSearch(L(a.results)>=g)
        }
    },
showSearch:function(b){
    this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))
    },
onSelect:function(a,b){
    if(this.triggerSelect(a)){
        var c=this.opts.element.val(),d=this.data();
        this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({
            type:"select2-selected",
            val:this.id(a),
            choice:a
        }),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||this.selection.focus(),q(c,this.id(a))||this.triggerChange({
            added:a,
            removed:d
        })
        }
    },
updateSelection:function(a){
    var d,e,c=this.selection.find(".select2-chosen");
    this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")
    },
val:function(){
    var a,c=!1,d=null,e=this,f=this.data();
    if(0===arguments.length)return this.opts.element.val();
    if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find(":selected").each2(function(a,b){
        return d=e.optionToData(b),!1
        }),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({
        added:d,
        removed:f
    });
    else{
        if(!a&&0!==a)return this.clear(c),void 0;
        if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");
        this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){
            e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({
                added:a,
                removed:f
            })
            })
        }
    },
clearSearch:function(){
    this.search.val(""),this.focusser.val("")
    },
data:function(a){
    var c,d=!1;
    return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({
        added:a,
        removed:c
    })):this.clear(d),void 0)
    }
}),f=N(d,{
    createContainer:function(){
        var b=a(document.createElement("div")).attr({
            "class":"select2-container select2-container-multi"
        }).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));
        return b
        },
    prepareOpts:function(){
        var b=this.parent.prepareOpts.apply(this,arguments),c=this;
        return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){
            var d=[];
            a.find(":selected").each2(function(a,b){
                d.push(c.optionToData(b))
                }),b(d)
            }:"data"in b&&(b.initSelection=b.initSelection||function(c,d){
            var e=r(c.val(),b.separator),f=[];
            b.query({
                matcher:function(c,d,g){
                    var h=a.grep(e,function(a){
                        return q(a,b.id(g))
                        }).length;
                    return h&&f.push(g),h
                    },
                callback:a.isFunction(d)?function(){
                    for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){
                        var i=f[h];
                        if(q(g,b.id(i))){
                            a.push(i),f.splice(h,1);
                            break
                        }
                    }
                    d(a)
                }:a.noop
            })
        }),b
    },
selectChoice:function(a){
    var b=this.container.find(".select2-search-choice-focus");
    b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))
    },
destroy:function(){
    a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)
    },
initContainer:function(){
    var d,b=".select2-choices";
    this.searchContainer=this.container.find(".select2-search-field"),this.selection=d=this.container.find(b);
    var e=this;
    this.selection.on("click",".select2-search-choice",function(){
        e.search[0].focus(),e.selectChoice(a(this))
        }),this.search.attr("id","s2id_autogen"+g()),a("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){
        this.isInterfaceEnabled()&&(this.opened()||this.open())
        })),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){
        if(this.isInterfaceEnabled()){
            ++this.keydowns;
            var b=d.find(".select2-search-choice-focus"),e=b.prev(".select2-search-choice:not(.select2-locked)"),f=b.next(".select2-search-choice:not(.select2-locked)"),g=z(this.search);
            if(b.length&&(a.which==c.LEFT||a.which==c.RIGHT||a.which==c.BACKSPACE||a.which==c.DELETE||a.which==c.ENTER)){
                var h=b;
                return a.which==c.LEFT&&e.length?h=e:a.which==c.RIGHT?h=f.length?f:null:a.which===c.BACKSPACE?(this.unselect(b.first()),this.search.width(10),h=e.length?e:f):a.which==c.DELETE?(this.unselect(b.first()),this.search.width(10),h=f.length?f:null):a.which==c.ENTER&&(h=null),this.selectChoice(h),A(a),h&&h.length||this.open(),void 0
                }
                if((a.which===c.BACKSPACE&&1==this.keydowns||a.which==c.LEFT)&&0==g.offset&&!g.length)return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;
            if(this.selectChoice(null),this.opened())switch(a.which){
                case c.UP:case c.DOWN:
                    return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;
                case c.ENTER:
                    return this.selectHighlighted(),A(a),void 0;
                case c.TAB:
                    return this.opts.selectOnBlur&&this.selectHighlighted({
                    noFocus:!0
                    }),this.close(),void 0;
                case c.ESC:
                    return this.cancel(a),A(a),void 0
                    }
                    if(a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.BACKSPACE&&a.which!==c.ESC){
                if(a.which===c.ENTER){
                    if(this.opts.openOnEnter===!1)return;
                    if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return
                }
                this.open(),(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)&&A(a),a.which===c.ENTER&&A(a)
                }
            }
    })),this.search.on("keyup",this.bind(function(){
    this.keydowns=0,this.resizeSearch()
    })),this.search.on("blur",this.bind(function(b){
    this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))
    })),this.container.on("click",b,this.bind(function(b){
    this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))
    })),this.container.on("focus",b,this.bind(function(){
    this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())
    })),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()
},
enableInterface:function(){
    this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())
    },
initSelection:function(){
    if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){
        var c=this;
        this.opts.initSelection.call(null,this.opts.element,function(a){
            a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())
            })
        }
    },
clearSearch:function(){
    var a=this.getPlaceholder(),c=this.getMaxSearchWidth();
    a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)
    },
clearPlaceholder:function(){
    this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")
    },
opening:function(){
    this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.updateResults(!0),this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))
    },
close:function(){
    this.opened()&&this.parent.close.apply(this,arguments)
    },
focus:function(){
    this.close(),this.search.focus()
    },
isFocused:function(){
    return this.search.hasClass("select2-focused")
    },
updateSelection:function(b){
    var c=[],d=[],e=this;
    a(b).each(function(){
        o(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))
        }),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){
        e.addSelectedChoice(this)
        }),e.postprocessResults()
    },
tokenize:function(){
    var a=this.search.val();
    a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())
    },
onSelect:function(a,b){
    this.triggerSelect(a)&&(this.addSelectedChoice(a),this.opts.element.trigger({
        type:"selected",
        val:this.id(a),
        choice:a
    }),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()&&this.updateResults(!0),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({
        added:a
    }),b&&b.noFocus||this.focusSearch())
    },
cancel:function(){
    this.close(),this.focusSearch()
    },
addSelectedChoice:function(c){
    var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();
    j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith("<div>"+j+"</div>"),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){
        this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){
            this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),this.close(),this.focusSearch()
            })).dequeue(),A(b))
        })).on("focus",this.bind(function(){
        this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))
        })),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)
    },
unselect:function(a){
    var c,d,b=this.getVal();
    if(a=a.closest(".select2-search-choice"),0===a.length)throw"Invalid argument: "+a+". Must be .select2-search-choice";
    c=a.data("select2-data"),c&&(d=o(this.id(c),b),d>=0&&(b.splice(d,1),this.setVal(b),this.select&&this.postprocessResults()),a.remove(),this.opts.element.trigger({
        type:"removed",
        val:this.id(c),
        choice:c
    }),this.triggerChange({
        removed:c
    }))
    },
postprocessResults:function(a,b,c){
    var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;
    e.each2(function(a,b){
        var c=g.id(b.data("select2-data"));
        o(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))
        }),f.each2(function(a,b){
        b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")
        }),-1==this.highlight()&&c!==!1&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+g.opts.formatNoMatches(g.search.val())+"</li>")
    },
getMaxSearchWidth:function(){
    return this.selection.width()-s(this.search)
    },
resizeSearch:function(){
    var a,b,c,d,e,f=s(this.search);
    a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(e)
    },
getVal:function(){
    var a;
    return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),r(a,this.opts.separator))
    },
setVal:function(b){
    var c;
    this.select?this.select.val(b):(c=[],a(b).each(function(){
        o(this,c)<0&&c.push(this)
        }),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))
    },
buildChangeDetails:function(a,b){
    for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)q(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c--,a.splice(d,1),d--);
    return{
        added:b,
        removed:a
    }
},
val:function(c,d){
    var e,f=this;
    if(0===arguments.length)return this.getVal();
    if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({
        added:this.data(),
        removed:e
    }),void 0;
    if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));
    else{
        if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");
        this.opts.initSelection(this.opts.element,function(b){
            var c=a.map(b,f.id);
            f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,this.data()))
            })
        }
        this.clearSearch()
    },
onSortStart:function(){
    if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
    this.search.width(0),this.searchContainer.hide()
    },
onSortEnd:function(){
    var b=[],c=this;
    this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){
        b.push(c.opts.id(a(this).data("select2-data")))
        }),this.setVal(b),this.triggerChange()
    },
data:function(b,c){
    var e,f,d=this;
    return 0===arguments.length?this.selection.find(".select2-search-choice").map(function(){
        return a(this).data("select2-data")
        }).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){
        return d.opts.id(a)
        }),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)
    }
}),a.fn.select2=function(){
    var d,g,h,i,j,c=Array.prototype.slice.call(arguments,0),k=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],l=["opened","isFocused","container","dropdown"],m=["val","data"],n={
        search:"externalSearch"
    };
    
    return this.each(function(){
        if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?j=d.element.prop("multiple"):(j=d.multiple||!1,"tags"in d&&(d.multiple=j=!0)),g=j?new f:new e,g.init(d);
        else{
            if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;
            if(o(c[0],k)<0)throw"Unknown method: "+c[0];
            if(i=b,g=a(this).data("select2"),g===b)return;
            if(h=c[0],"container"===h?i=g.container:"dropdown"===h?i=g.dropdown:(n[h]&&(h=n[h]),i=g[h].apply(g,c.slice(1))),o(c[0],l)>=0||o(c[0],m)&&1==c.length)return!1
                }
            }),i===b?this:i
},a.fn.select2.defaults={
    width:"copy",
    loadMorePadding:0,
    closeOnSelect:!0,
    openOnEnter:!0,
    containerCss:{},
    dropdownCss:{},
    containerCssClass:"",
    dropdownCssClass:"",
    formatResult:function(a,b,c,d){
        var e=[];
        return E(a.text,c.term,e,d),e.join("")
        },
    formatSelection:function(a,c,d){
        return a?d(a.text):b
        },
    sortResults:function(a){
        return a
        },
    formatResultCssClass:function(){
        return b
        },
    formatSelectionCssClass:function(){
        return b
        },
    formatNoMatches:function(){
        return"No matches found"
        },
    formatInputTooShort:function(a,b){
        var c=b-a.length;
        return"Please enter "+c+" more character"+(1==c?"":"s")
        },
    formatInputTooLong:function(a,b){
        var c=a.length-b;
        return"Please delete "+c+" character"+(1==c?"":"s")
        },
    formatSelectionTooBig:function(a){
        return"You can only select "+a+" item"+(1==a?"":"s")
        },
    formatLoadMore:function(){
        return"Loading more results..."
        },
    formatSearching:function(){
        return"Searching..."
        },
    minimumResultsForSearch:0,
    minimumInputLength:0,
    maximumInputLength:null,
    maximumSelectionSize:0,
    id:function(a){
        return a.id
        },
    matcher:function(a,b){
        return n(""+b).toUpperCase().indexOf(n(""+a).toUpperCase())>=0
        },
    separator:",",
    tokenSeparators:[],
    tokenizer:M,
    escapeMarkup:F,
    blurOnChange:!1,
    selectOnBlur:!1,
    adaptContainerCssClass:function(a){
        return a
        },
    adaptDropdownCssClass:function(){
        return null
        },
    nextSearchTerm:function(){
        return b
        }
    },a.fn.select2.ajaxDefaults={
    transport:a.ajax,
    params:{
        type:"GET",
        cache:!1,
        dataType:"json"
    }
},window.Select2={
    query:{
        ajax:G,
        local:H,
        tags:I
    },
    util:{
        debounce:v,
        markMatch:E,
        escapeMarkup:F,
        stripDiacritics:n
    },
    "class":{
        "abstract":d,
        single:e,
        multi:f
    }
}
}
}(jQuery);
!function($){
    var Slider=function(element,options){
        this.element=$(element);
        this.picker=$('<div class="slider">'+'<div class="slider-track">'+'<div class="slider-selection"></div>'+'<div class="slider-handle"></div>'+'<div class="slider-handle"></div>'+'</div>'+'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'+'</div>')
        .insertBefore(this.element)
        .append(this.element);
        this.id=this.element.data('slider-id')||options.id;
        if(this.id){
            this.picker[0].id=this.id;
        }
        if(typeof Modernizr!=='undefined'&&Modernizr.touch){
            this.touchCapable=true;
        }
        var tooltip=this.element.data('slider-tooltip')||options.tooltip;
        this.tooltip=this.picker.find('.tooltip');
        this.tooltipInner=this.tooltip.find('div.tooltip-inner');
        this.orientation=this.element.data('slider-orientation')||options.orientation;
        switch(this.orientation){
            case'vertical':
                this.picker.addClass('slider-vertical');
                this.stylePos='top';
                this.mousePos='pageY';
                this.sizePos='offsetHeight';
                this.tooltip.addClass('right')[0].style.left='100%';
                break;
            default:
                this.picker
                .addClass('slider-horizontal')
                .css('width',this.element.outerWidth());
                this.orientation='horizontal';
                this.stylePos='left';
                this.mousePos='pageX';
                this.sizePos='offsetWidth';
                this.tooltip.addClass('top')[0].style.top=-this.tooltip.outerHeight()-14+'px';
                break;
        }
        this.min=this.element.data('slider-min')||options.min;
        this.max=this.element.data('slider-max')||options.max;
        this.step=this.element.data('slider-step')||options.step;
        this.value=this.element.data('slider-value')||options.value;
        if(this.value[1]){
            this.range=true;
        }
        this.selection=this.element.data('slider-selection')||options.selection;
        this.selectionEl=this.picker.find('.slider-selection');
        if(this.selection==='none'){
            this.selectionEl.addClass('hide');
        }
        this.selectionElStyle=this.selectionEl[0].style;
        this.handle1=this.picker.find('.slider-handle:first');
        this.handle1Stype=this.handle1[0].style;
        this.handle2=this.picker.find('.slider-handle:last');
        this.handle2Stype=this.handle2[0].style;
        var handle=this.element.data('slider-handle')||options.handle;
        switch(handle){
            case'round':
                this.handle1.addClass('round');
                this.handle2.addClass('round');
                break
            case'triangle':
                this.handle1.addClass('triangle');
                this.handle2.addClass('triangle');
                break
                }
        if(this.range){
            this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0]));
            this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]));
        }else{
            this.value=[Math.max(this.min,Math.min(this.max,this.value))];
            this.handle2.addClass('hide');
            if(this.selection=='after'){
                this.value[1]=this.max;
            }else{
                this.value[1]=this.min;
            }
        }
    this.diff=this.max-this.min;
    this.percentage=[(this.value[0]-this.min)*100/this.diff,(this.value[1]-this.min)*100/this.diff,this.step*100/this.diff];
    this.offset=this.picker.offset();
    this.size=this.picker[0][this.sizePos];
    this.formater=options.formater;
    this.layout();
    if(this.touchCapable){
        this.picker.on({
            touchstart:$.proxy(this.mousedown,this)
            });
    }else{
        this.picker.on({
            mousedown:$.proxy(this.mousedown,this)
            });
    }
    if(tooltip==='show'){
        this.picker.on({
            mouseenter:$.proxy(this.showTooltip,this),
            mouseleave:$.proxy(this.hideTooltip,this)
            });
    }else{
        this.tooltip.addClass('hide');
    }
};

Slider.prototype={
    constructor:Slider,
    over:false,
    inDrag:false,
    showTooltip:function(){
        this.tooltip.addClass('in');
        this.over=true;
    },
    hideTooltip:function(){
        if(this.inDrag===false){
            this.tooltip.removeClass('in');
        }
        this.over=false;
    },
    layout:function(){
        this.handle1Stype[this.stylePos]=this.percentage[0]+'%';
        this.handle2Stype[this.stylePos]=this.percentage[1]+'%';
        if(this.orientation=='vertical'){
            this.selectionElStyle.top=Math.min(this.percentage[0],this.percentage[1])+'%';
            this.selectionElStyle.height=Math.abs(this.percentage[0]-this.percentage[1])+'%';
        }else{
            this.selectionElStyle.left=Math.min(this.percentage[0],this.percentage[1])+'%';
            this.selectionElStyle.width=Math.abs(this.percentage[0]-this.percentage[1])+'%';
        }
        if(this.range){
            this.tooltipInner.text(this.formater(this.value[0])+' : '+this.formater(this.value[1]));
            this.tooltip[0].style[this.stylePos]=this.size*(this.percentage[0]+(this.percentage[1]-this.percentage[0])/2)/100-(this.orientation==='vertical'?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+'px';
        }else{
            this.tooltipInner.text(this.formater(this.value[0]));
            this.tooltip[0].style[this.stylePos]=this.size*this.percentage[0]/100-(this.orientation==='vertical'?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+'px';
        }
    },
mousedown:function(ev){
    if(this.touchCapable&&ev.type==='touchstart'){
        ev=ev.originalEvent;
    }
    this.offset=this.picker.offset();
    this.size=this.picker[0][this.sizePos];
    var percentage=this.getPercentage(ev);
    if(this.range){
        var diff1=Math.abs(this.percentage[0]-percentage);
        var diff2=Math.abs(this.percentage[1]-percentage);
        this.dragged=(diff1<diff2)?0:1;
    }else{
        this.dragged=0;
    }
    this.percentage[this.dragged]=percentage;
    this.layout();
    if(this.touchCapable){
        $(document).on({
            touchmove:$.proxy(this.mousemove,this),
            touchend:$.proxy(this.mouseup,this)
            });
    }else{
        $(document).on({
            mousemove:$.proxy(this.mousemove,this),
            mouseup:$.proxy(this.mouseup,this)
            });
    }
    this.inDrag=true;
    var val=this.calculateValue();
    this.element.trigger({
        type:'slideStart',
        value:val
    }).trigger({
        type:'slide',
        value:val
    });
    return false;
},
mousemove:function(ev){
    if(this.touchCapable&&ev.type==='touchmove'){
        ev=ev.originalEvent;
    }
    var percentage=this.getPercentage(ev);
    if(this.range){
        if(this.dragged===0&&this.percentage[1]<percentage){
            this.percentage[0]=this.percentage[1];
            this.dragged=1;
        }else if(this.dragged===1&&this.percentage[0]>percentage){
            this.percentage[1]=this.percentage[0];
            this.dragged=0;
        }
    }
this.percentage[this.dragged]=percentage;
this.layout();
var val=this.calculateValue();
this.element
.trigger({
    type:'slide',
    value:val
})
.data('value',val)
.prop('value',val);
return false;
},
mouseup:function(ev){
    if(this.touchCapable){
        $(document).off({
            touchmove:this.mousemove,
            touchend:this.mouseup
            });
    }else{
        $(document).off({
            mousemove:this.mousemove,
            mouseup:this.mouseup
            });
    }
    this.inDrag=false;
    if(this.over==false){
        this.hideTooltip();
    }
    this.element;
    var val=this.calculateValue();
    this.element
    .trigger({
        type:'slideStop',
        value:val
    })
    .data('value',val)
    .prop('value',val);
    return false;
},
calculateValue:function(){
    var val;
    if(this.range){
        val=[(this.min+Math.round((this.diff*this.percentage[0]/100)/this.step)*this.step),(this.min+Math.round((this.diff*this.percentage[1]/100)/this.step)*this.step)];
        this.value=val;
    }else{
        val=(this.min+Math.round((this.diff*this.percentage[0]/100)/this.step)*this.step);
        this.value=[val,this.value[1]];
    }
    return val;
},
getPercentage:function(ev){
    if(this.touchCapable){
        ev=ev.touches[0];
    }
    var percentage=(ev[this.mousePos]-this.offset[this.stylePos])*100/this.size;
    percentage=Math.round(percentage/this.percentage[2])*this.percentage[2];
    return Math.max(0,Math.min(100,percentage));
},
getValue:function(){
    if(this.range){
        return this.value;
    }
    return this.value[0];
},
setValue:function(val){
    this.value=val;
    if(this.range){
        this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0]));
        this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]));
    }else{
        this.value=[Math.max(this.min,Math.min(this.max,this.value))];
        this.handle2.addClass('hide');
        if(this.selection=='after'){
            this.value[1]=this.max;
        }else{
            this.value[1]=this.min;
        }
    }
this.diff=this.max-this.min;
this.percentage=[(this.value[0]-this.min)*100/this.diff,(this.value[1]-this.min)*100/this.diff,this.step*100/this.diff];
this.layout();
}
};

$.fn.slider=function(option,val){
    return this.each(function(){
        var $this=$(this),data=$this.data('slider'),options=typeof option==='object'&&option;
        if(!data){
            $this.data('slider',(data=new Slider(this,$.extend({},$.fn.slider.defaults,options))));
        }
        if(typeof option=='string'){
            data[option](val);
        }
    })
};

$.fn.slider.defaults={
    min:0,
    max:10,
    step:1,
    orientation:'horizontal',
    value:5,
    selection:'before',
    tooltip:'show',
    handle:'round',
    formater:function(value){
        return value;
    }
};

$.fn.slider.Constructor=Slider;
}(window.jQuery);
(function($){
    var dragging,placeholders=$();
    $.fn.sortable=function(options){
        var method=String(options);
        options=$.extend({
            connectWith:false
        },options);
        return this.each(function(){
            if(/^enable|disable|destroy$/.test(method)){
                var items=$(this).children($(this).data('items')).attr('draggable',method=='enable');
                if(method=='destroy'){
                    items.add(this).removeData('connectWith items')
                    .off('dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s');
                }
                return;
            }
            var isHandle,index,items=$(this).children(options.items);
            var placeholder=$('<'+(/^ul|ol$/i.test(this.tagName)?'li':'div')+' class="sortable-placeholder">');
            items.find(options.handle).mousedown(function(){
                isHandle=true;
            }).mouseup(function(){
                isHandle=false;
            });
            $(this).data('items',options.items)
            placeholders=placeholders.add(placeholder);
            if(options.connectWith){
                $(options.connectWith).add(this).data('connectWith',options.connectWith);
            }
            items.attr('draggable','true').on('dragstart.h5s',function(e){
                if(options.handle&&!isHandle){
                    return false;
                }
                isHandle=false;
                var dt=e.originalEvent.dataTransfer;
                dt.effectAllowed='move';
                dt.setData('Text','dummy');
                index=(dragging=$(this)).addClass('sortable-dragging').index();
            }).on('dragend.h5s',function(){
                if(!dragging){
                    return;
                }
                dragging.removeClass('sortable-dragging').show();
                placeholders.detach();
                if(index!=dragging.index()){
                    dragging.parent().trigger('sortupdate',{
                        item:dragging
                    });
                }
                dragging=null;
            }).not('a[href], img').on('selectstart.h5s',function(){
                this.dragDrop&&this.dragDrop();
                return false;
            }).end().add([this,placeholder]).on('dragover.h5s dragenter.h5s drop.h5s',function(e){
                if(!items.is(dragging)&&options.connectWith!==$(dragging).parent().data('connectWith')){
                    return true;
                }
                if(e.type=='drop'){
                    e.stopPropagation();
                    placeholders.filter(':visible').after(dragging);
                    dragging.trigger('dragend.h5s');
                    return false;
                }
                e.preventDefault();
                e.originalEvent.dataTransfer.dropEffect='move';
                if(items.is(this)){
                    if(options.forcePlaceholderSize){
                        placeholder.height(dragging.outerHeight());
                    }
                    dragging.hide();
                    $(this)[placeholder.index()<$(this).index()?'after':'before'](placeholder);
                    placeholders.not(placeholder).detach();
                }else if(!placeholders.is(this)&&!$(this).children(options.items).length){
                    placeholders.detach();
                    $(this).append(placeholder);
                }
                return false;
            });
        });
    };

})(jQuery);
!function(t){
    function e(t,e){
        return function(n){
            return u(t.call(this,n),e)
            }
        }
    function n(t,e){
    return function(n){
        return this.lang().ordinal(t.call(this,n),e)
        }
    }
function s(){}
function i(t){
    a(this,t)
    }
    function r(t){
    var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,i=t.days||t.day||t.d||0,r=t.hours||t.hour||t.h||0,a=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,u=t.milliseconds||t.millisecond||t.ms||0;
    this._input=t,this._milliseconds=u+1e3*o+6e4*a+36e5*r,this._days=i+7*s,this._months=n+12*e,this._data={},this._bubble()
    }
    function a(t,e){
    for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t
    }
    function o(t){
    return 0>t?Math.ceil(t):Math.floor(t)
    }
    function u(t,e){
    for(var n=t+"";n.length<e;)n="0"+n;
    return n
    }
    function h(t,e,n,s){
    var i,r,a=e._milliseconds,o=e._days,u=e._months;
    a&&t._d.setTime(+t._d+a*n),(o||u)&&(i=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),u&&t.month(t.month()+u*n),a&&!s&&H.updateOffset(t),(o||u)&&(t.minute(i),t.hour(r))
    }
    function d(t){
    return"[object Array]"===Object.prototype.toString.call(t)
    }
    function c(t,e){
    var n,s=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0;
    for(n=0;s>n;n++)~~t[n]!==~~e[n]&&r++;
    return r+i
    }
    function f(t){
    return t?ie[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t
    }
    function l(t,e){
    return e.abbr=t,x[t]||(x[t]=new s),x[t].set(e),x[t]
    }
    function _(t){
    if(!t)return H.fn._lang;
    if(!x[t]&&A)try{
        require("./lang/"+t)
        }catch(e){
        return H.fn._lang
        }
        return x[t]
    }
    function m(t){
    return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")
    }
    function y(t){
    var e,n,s=t.match(E);
    for(e=0,n=s.length;n>e;e++)s[e]=ue[s[e]]?ue[s[e]]:m(s[e]);
    return function(i){
        var r="";
        for(e=0;n>e;e++)r+=s[e]instanceof Function?s[e].call(i,t):s[e];
        return r
        }
    }
function M(t,e){
    function n(e){
        return t.lang().longDateFormat(e)||e
        }
        for(var s=5;s--&&N.test(e);)e=e.replace(N,n);
    return re[e]||(re[e]=y(e)),re[e](t)
    }
    function g(t,e){
    switch(t){
        case"DDDD":
            return V;
        case"YYYY":
            return X;
        case"YYYYY":
            return $;
        case"S":case"SS":case"SSS":case"DDD":
            return I;
        case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":
            return R;
        case"a":case"A":
            return _(e._l)._meridiemParse;
        case"X":
            return B;
        case"Z":case"ZZ":
            return j;
        case"T":
            return q;
        case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":
            return J;
        default:
            return new RegExp(t.replace("\\",""))
            }
        }
function p(t){
    var e=(j.exec(t)||[])[0],n=(e+"").match(ee)||["-",0,0],s=+(60*n[1])+~~n[2];
    return"+"===n[0]?-s:s
    }
    function D(t,e,n){
    var s,i=n._a;
    switch(t){
        case"M":case"MM":
            i[1]=null==e?0:~~e-1;
            break;
        case"MMM":case"MMMM":
            s=_(n._l).monthsParse(e),null!=s?i[1]=s:n._isValid=!1;
            break;
        case"D":case"DD":case"DDD":case"DDDD":
            null!=e&&(i[2]=~~e);
            break;
        case"YY":
            i[0]=~~e+(~~e>68?1900:2e3);
            break;
        case"YYYY":case"YYYYY":
            i[0]=~~e;
            break;
        case"a":case"A":
            n._isPm=_(n._l).isPM(e);
            break;
        case"H":case"HH":case"h":case"hh":
            i[3]=~~e;
            break;
        case"m":case"mm":
            i[4]=~~e;
            break;
        case"s":case"ss":
            i[5]=~~e;
            break;
        case"S":case"SS":case"SSS":
            i[6]=~~(1e3*("0."+e));
            break;
        case"X":
            n._d=new Date(1e3*parseFloat(e));
            break;
        case"Z":case"ZZ":
            n._useUTC=!0,n._tzm=p(e)
            }
            null==e&&(n._isValid=!1)
    }
    function Y(t){
    var e,n,s=[];
    if(!t._d){
        for(e=0;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];
        s[3]+=~~((t._tzm||0)/60),s[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(s[0],s[1],s[2]),n.setUTCHours(s[3],s[4],s[5],s[6])):(n.setFullYear(s[0],s[1],s[2]),n.setHours(s[3],s[4],s[5],s[6])),t._d=n
        }
    }
function w(t){
    var e,n,s=t._f.match(E),i=t._i;
    for(t._a=[],e=0;e<s.length;e++)n=(g(s[e],t).exec(i)||[])[0],n&&(i=i.slice(i.indexOf(n)+n.length)),ue[s[e]]&&D(s[e],n,t);
    i&&(t._il=i),t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),Y(t)
    }
    function k(t){
    var e,n,s,r,o,u=99;
    for(r=0;r<t._f.length;r++)e=a({},t),e._f=t._f[r],w(e),n=new i(e),o=c(e._a,n.toArray()),n._il&&(o+=n._il.length),u>o&&(u=o,s=n);
    a(t,s)
    }
    function v(t){
    var e,n=t._i,s=K.exec(n);
    if(s){
        for(t._f="YYYY-MM-DD"+(s[2]||" "),e=0;4>e;e++)if(te[e][1].exec(n)){
            t._f+=te[e][0];
            break
        }
        j.exec(n)&&(t._f+=" Z"),w(t)
        }else t._d=new Date(n)
        }
        function T(e){
    var n=e._i,s=G.exec(n);
    n===t?e._d=new Date:s?e._d=new Date(+s[1]):"string"==typeof n?v(e):d(n)?(e._a=n.slice(0),Y(e)):e._d=n instanceof Date?new Date(+n):new Date(n)
    }
    function b(t,e,n,s,i){
    return i.relativeTime(e||1,!!n,t,s)
    }
    function S(t,e,n){
    var s=W(Math.abs(t)/1e3),i=W(s/60),r=W(i/60),a=W(r/24),o=W(a/365),u=45>s&&["s",s]||1===i&&["m"]||45>i&&["mm",i]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",W(a/30)]||1===o&&["y"]||["yy",o];
    return u[2]=e,u[3]=t>0,u[4]=n,b.apply({},u)
    }
    function F(t,e,n){
    var s,i=n-e,r=n-t.day();
    return r>i&&(r-=7),i-7>r&&(r+=7),s=H(t).add("d",r),{
        week:Math.ceil(s.dayOfYear()/7),
        year:s.year()
        }
    }
function O(t){
    var e=t._i,n=t._f;
    return null===e||""===e?null:("string"==typeof e&&(t._i=e=_().preparse(e)),H.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?d(n)?k(t):w(t):T(t),new i(t))
    }
    function z(t,e){
    H.fn[t]=H.fn[t+"s"]=function(t){
        var n=this._isUTC?"UTC":"";
        return null!=t?(this._d["set"+n+e](t),H.updateOffset(this),this):this._d["get"+n+e]()
        }
    }
function C(t){
    H.duration.fn[t]=function(){
        return this._data[t]
        }
    }
function L(t,e){
    H.duration.fn["as"+t]=function(){
        return+this/e
        }
    }
for(var H,P,U="2.1.0",W=Math.round,x={},A="undefined"!=typeof module&&module.exports,G=/^\/?Date\((\-?\d+)/i,Z=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,N=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,J=/\d\d?/,I=/\d{1,3}/,V=/\d{3}/,X=/\d{1,4}/,$=/[+\-]?\d{1,6}/,R=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,j=/Z|[\+\-]\d\d:?\d\d/i,q=/T/i,B=/[\+\-]?\d+(\.\d{1,3})?/,K=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,Q="YYYY-MM-DDTHH:mm:ssZ",te=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ee=/([\+\-]|\d\d)/gi,ne="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),se={
    Milliseconds:1,
    Seconds:1e3,
    Minutes:6e4,
    Hours:36e5,
    Days:864e5,
    Months:2592e6,
    Years:31536e6
},ie={
    ms:"millisecond",
    s:"second",
    m:"minute",
    h:"hour",
    d:"day",
    w:"week",
    M:"month",
    y:"year"
},re={},ae="DDD w W M D d".split(" "),oe="M D H h m s w W".split(" "),ue={
    M:function(){
        return this.month()+1
        },
    MMM:function(t){
        return this.lang().monthsShort(this,t)
        },
    MMMM:function(t){
        return this.lang().months(this,t)
        },
    D:function(){
        return this.date()
        },
    DDD:function(){
        return this.dayOfYear()
        },
    d:function(){
        return this.day()
        },
    dd:function(t){
        return this.lang().weekdaysMin(this,t)
        },
    ddd:function(t){
        return this.lang().weekdaysShort(this,t)
        },
    dddd:function(t){
        return this.lang().weekdays(this,t)
        },
    w:function(){
        return this.week()
        },
    W:function(){
        return this.isoWeek()
        },
    YY:function(){
        return u(this.year()%100,2)
        },
    YYYY:function(){
        return u(this.year(),4)
        },
    YYYYY:function(){
        return u(this.year(),5)
        },
    gg:function(){
        return u(this.weekYear()%100,2)
        },
    gggg:function(){
        return this.weekYear()
        },
    ggggg:function(){
        return u(this.weekYear(),5)
        },
    GG:function(){
        return u(this.isoWeekYear()%100,2)
        },
    GGGG:function(){
        return this.isoWeekYear()
        },
    GGGGG:function(){
        return u(this.isoWeekYear(),5)
        },
    e:function(){
        return this.weekday()
        },
    E:function(){
        return this.isoWeekday()
        },
    a:function(){
        return this.lang().meridiem(this.hours(),this.minutes(),!0)
        },
    A:function(){
        return this.lang().meridiem(this.hours(),this.minutes(),!1)
        },
    H:function(){
        return this.hours()
        },
    h:function(){
        return this.hours()%12||12
        },
    m:function(){
        return this.minutes()
        },
    s:function(){
        return this.seconds()
        },
    S:function(){
        return~~(this.milliseconds()/100)
        },
    SS:function(){
        return u(~~(this.milliseconds()/10),2)
        },
    SSS:function(){
        return u(this.milliseconds(),3)
        },
    Z:function(){
        var t=-this.zone(),e="+";
        return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)
        },
    ZZ:function(){
        var t=-this.zone(),e="+";
        return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)
        },
    z:function(){
        return this.zoneAbbr()
        },
    zz:function(){
        return this.zoneName()
        },
    X:function(){
        return this.unix()
        }
    };
ae.length;)P=ae.pop(),ue[P+"o"]=n(ue[P],P);
for(;oe.length;)P=oe.pop(),ue[P+P]=e(ue[P],2);
for(ue.DDDD=e(ue.DDD,3),s.prototype={
    set:function(t){
        var e,n;
        for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e
            },
    _months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    months:function(t){
        return this._months[t.month()]
        },
    _monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    monthsShort:function(t){
        return this._monthsShort[t.month()]
        },
    monthsParse:function(t){
        var e,n,s;
        for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=H([2e3,e]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),this._monthsParse[e].test(t))return e
            },
    _weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdays:function(t){
        return this._weekdays[t.day()]
        },
    _weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysShort:function(t){
        return this._weekdaysShort[t.day()]
        },
    _weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    weekdaysMin:function(t){
        return this._weekdaysMin[t.day()]
        },
    weekdaysParse:function(t){
        var e,n,s;
        for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=H([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e
            },
    _longDateFormat:{
        LT:"h:mm A",
        L:"MM/DD/YYYY",
        LL:"MMMM D YYYY",
        LLL:"MMMM D YYYY LT",
        LLLL:"dddd, MMMM D YYYY LT"
    },
    longDateFormat:function(t){
        var e=this._longDateFormat[t];
        return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){
            return t.slice(1)
            }),this._longDateFormat[t]=e),e
        },
    isPM:function(t){
        return"p"===(t+"").toLowerCase()[0]
        },
    _meridiemParse:/[ap]\.?m?\.?/i,
    meridiem:function(t,e,n){
        return t>11?n?"pm":"PM":n?"am":"AM"
        },
    _calendar:{
        sameDay:"[Today at] LT",
        nextDay:"[Tomorrow at] LT",
        nextWeek:"dddd [at] LT",
        lastDay:"[Yesterday at] LT",
        lastWeek:"[Last] dddd [at] LT",
        sameElse:"L"
    },
    calendar:function(t,e){
        var n=this._calendar[t];
        return"function"==typeof n?n.apply(e):n
        },
    _relativeTime:{
        future:"in %s",
        past:"%s ago",
        s:"a few seconds",
        m:"a minute",
        mm:"%d minutes",
        h:"an hour",
        hh:"%d hours",
        d:"a day",
        dd:"%d days",
        M:"a month",
        MM:"%d months",
        y:"a year",
        yy:"%d years"
    },
    relativeTime:function(t,e,n,s){
        var i=this._relativeTime[n];
        return"function"==typeof i?i(t,e,n,s):i.replace(/%d/i,t)
        },
    pastFuture:function(t,e){
        var n=this._relativeTime[t>0?"future":"past"];
        return"function"==typeof n?n(e):n.replace(/%s/i,e)
        },
    ordinal:function(t){
        return this._ordinal.replace("%d",t)
        },
    _ordinal:"%d",
    preparse:function(t){
        return t
        },
    postformat:function(t){
        return t
        },
    week:function(t){
        return F(t,this._week.dow,this._week.doy).week
        },
    _week:{
        dow:0,
        doy:6
    }
},H=function(t,e,n){
    return O({
        _i:t,
        _f:e,
        _l:n,
        _isUTC:!1
        })
    },H.utc=function(t,e,n){
    return O({
        _useUTC:!0,
        _isUTC:!0,
        _l:n,
        _i:t,
        _f:e
    })
    },H.unix=function(t){
    return H(1e3*t)
    },H.duration=function(t,e){
    var n,s,i=H.isDuration(t),a="number"==typeof t,o=i?t._input:a?{}:t,u=Z.exec(t);
    return a?e?o[e]=t:o.milliseconds=t:u&&(n="-"===u[1]?-1:1,o={
        y:0,
        d:~~u[2]*n,
        h:~~u[3]*n,
        m:~~u[4]*n,
        s:~~u[5]*n,
        ms:~~u[6]*n
        }),s=new r(o),i&&t.hasOwnProperty("_lang")&&(s._lang=t._lang),s
    },H.version=U,H.defaultFormat=Q,H.updateOffset=function(){},H.lang=function(t,e){
    return t?(e?l(t,e):x[t]||_(t),H.duration.fn._lang=H.fn._lang=_(t),void 0):H.fn._lang._abbr
    },H.langData=function(t){
    return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),_(t)
    },H.isMoment=function(t){
    return t instanceof i
    },H.isDuration=function(t){
    return t instanceof r
    },H.fn=i.prototype={
    clone:function(){
        return H(this)
        },
    valueOf:function(){
        return+this._d+6e4*(this._offset||0)
        },
    unix:function(){
        return Math.floor(+this/1e3)
        },
    toString:function(){
        return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
    toDate:function(){
        return this._offset?new Date(+this):this._d
        },
    toISOString:function(){
        return M(H(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
    toArray:function(){
        var t=this;
        return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]
        },
    isValid:function(){
        return null==this._isValid&&(this._isValid=this._a?!c(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid
        },
    utc:function(){
        return this.zone(0)
        },
    local:function(){
        return this.zone(0),this._isUTC=!1,this
        },
    format:function(t){
        var e=M(this,t||H.defaultFormat);
        return this.lang().postformat(e)
        },
    add:function(t,e){
        var n;
        return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,1),this
        },
    subtract:function(t,e){
        var n;
        return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,-1),this
        },
    diff:function(t,e,n){
        var s,i,r=this._isUTC?H(t).zone(this._offset||0):H(t).local(),a=6e4*(this.zone()-r.zone());
        return e=f(e),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+r.daysInMonth()),i=12*(this.year()-r.year())+(this.month()-r.month()),i+=(this-H(this).startOf("month")-(r-H(r).startOf("month")))/s,i-=6e4*(this.zone()-H(this).startOf("month").zone()-(r.zone()-H(r).startOf("month").zone()))/s,"year"===e&&(i/=12)):(s=this-r,i="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-a)/864e5:"week"===e?(s-a)/6048e5:s),n?i:o(i)
        },
    from:function(t,e){
        return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
        },
    fromNow:function(t){
        return this.from(H(),t)
        },
    calendar:function(){
        var t=this.diff(H().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";
        return this.format(this.lang().calendar(e,this))
        },
    isLeapYear:function(){
        var t=this.year();
        return 0===t%4&&0!==t%100||0===t%400
        },
    isDST:function(){
        return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()
        },
    day:function(t){
        var e=this._isUTC?this._d.getUTCDay():this._d.getDay();
        return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({
            d:t-e
            }):e
        },
    month:function(t){
        var e,n=this._isUTC?"UTC":"";
        return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),H.updateOffset(this),this):this._d["get"+n+"Month"]()
        },
    startOf:function(t){
        switch(t=f(t)){
            case"year":
                this.month(0);
            case"month":
                this.date(1);
            case"week":case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
                }
                return"week"===t&&this.weekday(0),this
        },
    endOf:function(t){
        return this.startOf(t).add(t,1).subtract("ms",1)
        },
    isAfter:function(t,e){
        return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+H(t).startOf(e)
        },
    isBefore:function(t,e){
        return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+H(t).startOf(e)
        },
    isSame:function(t,e){
        return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+H(t).startOf(e)
        },
    min:function(t){
        return t=H.apply(null,arguments),this>t?this:t
        },
    max:function(t){
        return t=H.apply(null,arguments),t>this?this:t
        },
    zone:function(t){
        var e=this._offset||0;
        return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=p(t)),Math.abs(t)<16&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&h(this,H.duration(e-t,"m"),1,!0),this)
        },
    zoneAbbr:function(){
        return this._isUTC?"UTC":""
        },
    zoneName:function(){
        return this._isUTC?"Coordinated Universal Time":""
        },
    daysInMonth:function(){
        return H.utc([this.year(),this.month()+1,0]).date()
        },
    dayOfYear:function(t){
        var e=W((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;
        return null==t?e:this.add("d",t-e)
        },
    weekYear:function(t){
        var e=F(this,this.lang()._week.dow,this.lang()._week.doy).year;
        return null==t?e:this.add("y",t-e)
        },
    isoWeekYear:function(t){
        var e=F(this,1,4).year;
        return null==t?e:this.add("y",t-e)
        },
    week:function(t){
        var e=this.lang().week(this);
        return null==t?e:this.add("d",7*(t-e))
        },
    isoWeek:function(t){
        var e=F(this,1,4).week;
        return null==t?e:this.add("d",7*(t-e))
        },
    weekday:function(t){
        var e=(this._d.getDay()+7-this.lang()._week.dow)%7;
        return null==t?e:this.add("d",t-e)
        },
    isoWeekday:function(t){
        return null==t?this.day()||7:this.day(this.day()%7?t:t-7)
        },
    lang:function(e){
        return e===t?this._lang:(this._lang=_(e),this)
        }
    },P=0;P<ne.length;P++)z(ne[P].toLowerCase().replace(/s$/,""),ne[P]);
z("year","FullYear"),H.fn.days=H.fn.day,H.fn.months=H.fn.month,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.fn.toJSON=H.fn.toISOString,H.duration.fn=r.prototype={
    _bubble:function(){
        var t,e,n,s,i=this._milliseconds,r=this._days,a=this._months,u=this._data;
        u.milliseconds=i%1e3,t=o(i/1e3),u.seconds=t%60,e=o(t/60),u.minutes=e%60,n=o(e/60),u.hours=n%24,r+=o(n/24),u.days=r%30,a+=o(r/30),u.months=a%12,s=o(a/12),u.years=s
        },
    weeks:function(){
        return o(this.days()/7)
        },
    valueOf:function(){
        return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)
        },
    humanize:function(t){
        var e=+this,n=S(e,!t,this.lang());
        return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)
        },
    add:function(t,e){
        var n=H.duration(t,e);
        return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this
        },
    subtract:function(t,e){
        var n=H.duration(t,e);
        return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this
        },
    get:function(t){
        return t=f(t),this[t.toLowerCase()+"s"]()
        },
    as:function(t){
        return t=f(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()
        },
    lang:H.fn.lang
    };
    
for(P in se)se.hasOwnProperty(P)&&(L(P,se[P]),C(P.toLowerCase()));L("Weeks",6048e5),H.duration.fn.asMonths=function(){
    return(+this-31536e6*this.years())/2592e6+12*this.years()
    },H.lang("en",{
    ordinal:function(t){
        var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";
        return t+n
        }
    }),A&&(module.exports=H),"undefined"==typeof ender&&(this.moment=H),"function"==typeof define&&define.amd&&define("moment",[],function(){
    return H
    })
}.call(this);
!function(){
    var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){
        return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)
        };
        
    "undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";
    var A=j.each=j.forEach=function(n,t,e){
        if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);
            else if(n.length===+n.length){
            for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return
            }else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return
            };
            
    j.map=j.collect=function(n,t,r){
        var e=[];
        return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){
            e.push(t.call(r,n,u,i))
            }),e)
        };
        
    var E="Reduce of empty array with no initial value";
    j.reduce=j.foldl=j.inject=function(n,t,r,e){
        var u=arguments.length>2;
        if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);
        if(A(n,function(n,i,a){
            u?r=t.call(e,r,n,i,a):(r=n,u=!0)
            }),!u)throw new TypeError(E);
        return r
        },j.reduceRight=j.foldr=function(n,t,r,e){
        var u=arguments.length>2;
        if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);
        var i=n.length;
        if(i!==+i){
            var a=j.keys(n);
            i=a.length
            }
            if(A(n,function(o,c,l){
            c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)
            }),!u)throw new TypeError(E);
        return r
        },j.find=j.detect=function(n,t,r){
        var e;
        return O(n,function(n,u,i){
            return t.call(r,n,u,i)?(e=n,!0):void 0
            }),e
        },j.filter=j.select=function(n,t,r){
        var e=[];
        return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){
            t.call(r,n,u,i)&&e.push(n)
            }),e)
        },j.reject=function(n,t,r){
        return j.filter(n,function(n,e,u){
            return!t.call(r,n,e,u)
            },r)
        },j.every=j.all=function(n,t,e){
        t||(t=j.identity);
        var u=!0;
        return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){
            return(u=u&&t.call(e,n,i,a))?void 0:r
            }),!!u)
        };
        
    var O=j.some=j.any=function(n,t,e){
        t||(t=j.identity);
        var u=!1;
        return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){
            return u||(u=t.call(e,n,i,a))?r:void 0
            }),!!u)
        };
        
    j.contains=j.include=function(n,t){
        return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){
            return n===t
            })
        },j.invoke=function(n,t){
        var r=o.call(arguments,2),e=j.isFunction(t);
        return j.map(n,function(n){
            return(e?t:n[t]).apply(n,r)
            })
        },j.pluck=function(n,t){
        return j.map(n,function(n){
            return n[t]
            })
        },j.where=function(n,t,r){
        return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){
            for(var r in t)if(t[r]!==n[r])return!1;return!0
            })
        },j.findWhere=function(n,t){
        return j.where(n,t,!0)
        },j.max=function(n,t,r){
        if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);
        if(!t&&j.isEmpty(n))return-1/0;
        var e={
            computed:-1/0,
            value:-1/0
        };
        
        return A(n,function(n,u,i){
            var a=t?t.call(r,n,u,i):n;
            a>e.computed&&(e={
                value:n,
                computed:a
            })
            }),e.value
        },j.min=function(n,t,r){
        if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);
        if(!t&&j.isEmpty(n))return 1/0;
        var e={
            computed:1/0,
            value:1/0
        };
        
        return A(n,function(n,u,i){
            var a=t?t.call(r,n,u,i):n;
            a<e.computed&&(e={
                value:n,
                computed:a
            })
            }),e.value
        },j.shuffle=function(n){
        var t,r=0,e=[];
        return A(n,function(n){
            t=j.random(r++),e[r-1]=e[t],e[t]=n
            }),e
        };
        
    var F=function(n){
        return j.isFunction(n)?n:function(t){
            return t[n]
            }
        };
    
j.sortBy=function(n,t,r){
    var e=F(t);
    return j.pluck(j.map(n,function(n,t,u){
        return{
            value:n,
            index:t,
            criteria:e.call(r,n,t,u)
            }
        }).sort(function(n,t){
        var r=n.criteria,e=t.criteria;
        if(r!==e){
            if(r>e||r===void 0)return 1;
            if(e>r||e===void 0)return-1
                }
                return n.index<t.index?-1:1
        }),"value")
};

var k=function(n,t,r,e){
    var u={},i=F(null==t?j.identity:t);
    return A(n,function(t,a){
        var o=i.call(r,t,a,n);
        e(u,o,t)
        }),u
    };
    
j.groupBy=function(n,t,r){
    return k(n,t,r,function(n,t,r){
        (j.has(n,t)?n[t]:n[t]=[]).push(r)
        })
    },j.countBy=function(n,t,r){
    return k(n,t,r,function(n,t){
        j.has(n,t)||(n[t]=0),n[t]++
    })
    },j.sortedIndex=function(n,t,r,e){
    r=null==r?j.identity:F(r);
    for(var u=r.call(e,t),i=0,a=n.length;a>i;){
        var o=i+a>>>1;
        r.call(e,n[o])<u?i=o+1:a=o
        }
        return i
    },j.toArray=function(n){
    return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]
    },j.size=function(n){
    return null==n?0:n.length===+n.length?n.length:j.keys(n).length
    },j.first=j.head=j.take=function(n,t,r){
    return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)
    },j.initial=function(n,t,r){
    return o.call(n,0,n.length-(null==t||r?1:t))
    },j.last=function(n,t,r){
    return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))
    },j.rest=j.tail=j.drop=function(n,t,r){
    return o.call(n,null==t||r?1:t)
    },j.compact=function(n){
    return j.filter(n,j.identity)
    };
    
var R=function(n,t,r){
    return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){
        j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)
        }),r)
    };
    
j.flatten=function(n,t){
    return R(n,t,[])
    },j.without=function(n){
    return j.difference(n,o.call(arguments,1))
    },j.uniq=j.unique=function(n,t,r,e){
    j.isFunction(t)&&(e=r,r=t,t=!1);
    var u=r?j.map(n,r,e):n,i=[],a=[];
    return A(u,function(r,e){
        (t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))
        }),i
    },j.union=function(){
    return j.uniq(j.flatten(arguments,!0))
    },j.intersection=function(n){
    var t=o.call(arguments,1);
    return j.filter(j.uniq(n),function(n){
        return j.every(t,function(t){
            return j.indexOf(t,n)>=0
            })
        })
    },j.difference=function(n){
    var t=c.apply(e,o.call(arguments,1));
    return j.filter(n,function(n){
        return!j.contains(t,n)
        })
    },j.zip=function(){
    for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);
    return t
    },j.object=function(n,t){
    if(null==n)return{};
        
    for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];
    return r
    },j.indexOf=function(n,t,r){
    if(null==n)return-1;
    var e=0,u=n.length;
    if(r){
        if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;
        e=0>r?Math.max(0,u+r):r
        }
        if(y&&n.indexOf===y)return n.indexOf(t,r);
    for(;u>e;e++)if(n[e]===t)return e;return-1
    },j.lastIndexOf=function(n,t,r){
    if(null==n)return-1;
    var e=null!=r;
    if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);
    for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1
    },j.range=function(n,t,r){
    arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;
    for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;
    return i
    };
    
var M=function(){};

j.bind=function(n,t){
    var r,e;
    if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));
    if(!j.isFunction(n))throw new TypeError;
    return r=o.call(arguments,2),e=function(){
        if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));
        M.prototype=n.prototype;
        var u=new M;
        M.prototype=null;
        var i=n.apply(u,r.concat(o.call(arguments)));
        return Object(i)===i?i:u
        }
    },j.partial=function(n){
    var t=o.call(arguments,1);
    return function(){
        return n.apply(this,t.concat(o.call(arguments)))
        }
    },j.bindAll=function(n){
    var t=o.call(arguments,1);
    if(0===t.length)throw new Error("bindAll must be passed function names");
    return A(t,function(t){
        n[t]=j.bind(n[t],n)
        }),n
    },j.memoize=function(n,t){
    var r={};
    
    return t||(t=j.identity),function(){
        var e=t.apply(this,arguments);
        return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)
        }
    },j.delay=function(n,t){
    var r=o.call(arguments,2);
    return setTimeout(function(){
        return n.apply(null,r)
        },t)
    },j.defer=function(n){
    return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))
    },j.throttle=function(n,t,r){
    var e,u,i,a=null,o=0;
    r||(r={});
    var c=function(){
        o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)
        };
        
    return function(){
        var l=new Date;
        o||r.leading!==!1||(o=l);
        var f=t-(l-o);
        return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i
        }
    },j.debounce=function(n,t,r){
    var e,u=null;
    return function(){
        var i=this,a=arguments,o=function(){
            u=null,r||(e=n.apply(i,a))
            },c=r&&!u;
        return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e
        }
    },j.once=function(n){
    var t,r=!1;
    return function(){
        return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)
        }
    },j.wrap=function(n,t){
    return function(){
        var r=[n];
        return a.apply(r,arguments),t.apply(this,r)
        }
    },j.compose=function(){
    var n=arguments;
    return function(){
        for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];
        return t[0]
        }
    },j.after=function(n,t){
    return function(){
        return--n<1?t.apply(this,arguments):void 0
        }
    },j.keys=_||function(n){
    if(n!==Object(n))throw new TypeError("Invalid object");
    var t=[];
    for(var r in n)j.has(n,r)&&t.push(r);return t
    },j.values=function(n){
    var t=[];
    for(var r in n)j.has(n,r)&&t.push(n[r]);return t
    },j.pairs=function(n){
    var t=[];
    for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t
    },j.invert=function(n){
    var t={};
    
    for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t
    },j.functions=j.methods=function(n){
    var t=[];
    for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()
    },j.extend=function(n){
    return A(o.call(arguments,1),function(t){
        if(t)for(var r in t)n[r]=t[r]
            }),n
    },j.pick=function(n){
    var t={},r=c.apply(e,o.call(arguments,1));
    return A(r,function(r){
        r in n&&(t[r]=n[r])
        }),t
    },j.omit=function(n){
    var t={},r=c.apply(e,o.call(arguments,1));
    for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t
    },j.defaults=function(n){
    return A(o.call(arguments,1),function(t){
        if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])
            }),n
    },j.clone=function(n){
    return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n
    },j.tap=function(n,t){
    return t(n),n
    };
    
var S=function(n,t,r,e){
    if(n===t)return 0!==n||1/n==1/t;
    if(null==n||null==t)return n===t;
    n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);
    var u=l.call(n);
    if(u!=l.call(t))return!1;
    switch(u){
        case"[object String]":
            return n==String(t);
        case"[object Number]":
            return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;
        case"[object Date]":case"[object Boolean]":
            return+n==+t;
        case"[object RegExp]":
            return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase
            }
            if("object"!=typeof n||"object"!=typeof t)return!1;
    for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;
    if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;
    r.push(n),e.push(t);
    var c=0,f=!0;
    if("[object Array]"==u){
        if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););
    }else{
        for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){
            for(s in t)if(j.has(t,s)&&!c--)break;f=!c
            }
        }
    return r.pop(),e.pop(),f
};

j.isEqual=function(n,t){
    return S(n,t,[],[])
    },j.isEmpty=function(n){
    if(null==n)return!0;
    if(j.isArray(n)||j.isString(n))return 0===n.length;
    for(var t in n)if(j.has(n,t))return!1;return!0
    },j.isElement=function(n){
    return!(!n||1!==n.nodeType)
    },j.isArray=x||function(n){
    return"[object Array]"==l.call(n)
    },j.isObject=function(n){
    return n===Object(n)
    },A(["Arguments","Function","String","Number","Date","RegExp"],function(n){
    j["is"+n]=function(t){
        return l.call(t)=="[object "+n+"]"
        }
    }),j.isArguments(arguments)||(j.isArguments=function(n){
    return!(!n||!j.has(n,"callee"))
    }),"function"!=typeof/./&&(j.isFunction=function(n){
    return"function"==typeof n
    }),j.isFinite=function(n){
    return isFinite(n)&&!isNaN(parseFloat(n))
    },j.isNaN=function(n){
    return j.isNumber(n)&&n!=+n
    },j.isBoolean=function(n){
    return n===!0||n===!1||"[object Boolean]"==l.call(n)
    },j.isNull=function(n){
    return null===n
    },j.isUndefined=function(n){
    return n===void 0
    },j.has=function(n,t){
    return f.call(n,t)
    },j.noConflict=function(){
    return n._=t,this
    },j.identity=function(n){
    return n
    },j.times=function(n,t,r){
    for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);
    return e
    },j.random=function(n,t){
    return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))
    };
    
var I={
    escape:{
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#x27;",
        "/":"&#x2F;"
    }
};

I.unescape=j.invert(I.escape);
var T={
    escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),
    unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")
    };
    
j.each(["escape","unescape"],function(n){
    j[n]=function(t){
        return null==t?"":(""+t).replace(T[n],function(t){
            return I[n][t]
            })
        }
    }),j.result=function(n,t){
    if(null==n)return void 0;
    var r=n[t];
    return j.isFunction(r)?r.call(n):r
    },j.mixin=function(n){
    A(j.functions(n),function(t){
        var r=j[t]=n[t];
        j.prototype[t]=function(){
            var n=[this._wrapped];
            return a.apply(n,arguments),z.call(this,r.apply(j,n))
            }
        })
};

var N=0;
j.uniqueId=function(n){
    var t=++N+"";
    return n?n+t:t
    },j.templateSettings={
    evaluate:/<%([\s\S]+?)%>/g,
    interpolate:/<%=([\s\S]+?)%>/g,
    escape:/<%-([\s\S]+?)%>/g
};

var q=/(.)^/,B={
    "'":"'",
    "\\":"\\",
    "\r":"r",
    "\n":"n",
    "	":"t",
    "\u2028":"u2028",
    "\u2029":"u2029"
},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;
j.template=function(n,t,r){
    var e;
    r=j.defaults({},r,j.templateSettings);
    var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";
    n.replace(u,function(t,r,e,u,o){
        return a+=n.slice(i,o).replace(D,function(n){
            return"\\"+B[n]
            }),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t
        }),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";
    try{
        e=new Function(r.variable||"obj","_",a)
        }catch(o){
        throw o.source=a,o
        }
        if(t)return e(t,j);
    var c=function(n){
        return e.call(this,n,j)
        };
        
    return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c
    },j.chain=function(n){
    return j(n).chain()
    };
    
var z=function(n){
    return this._chain?j(n).chain():n
    };
    
j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){
    var t=e[n];
    j.prototype[n]=function(){
        var r=this._wrapped;
        return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)
        }
    }),A(["concat","join","slice"],function(n){
    var t=e[n];
    j.prototype[n]=function(){
        return z.call(this,t.apply(this._wrapped,arguments))
        }
    }),j.extend(j.prototype,{
    chain:function(){
        return this._chain=!0,this
        },
    value:function(){
        return this._wrapped
        }
    })
}.call(this);
(function(){
    var t=this;
    var e=t.Backbone;
    var i=[];
    var r=i.push;
    var s=i.slice;
    var n=i.splice;
    var a;
    if(typeof exports!=="undefined"){
        a=exports
        }else{
        a=t.Backbone={}
    }
    a.VERSION="1.0.0";
var h=t._;
if(!h&&typeof require!=="undefined")h=require("underscore");
    a.$=t.jQuery||t.Zepto||t.ender||t.$;
    a.noConflict=function(){
    t.Backbone=e;
    return this
    };
    
a.emulateHTTP=false;
a.emulateJSON=false;
var o=a.Events={
    on:function(t,e,i){
        if(!l(this,"on",t,[e,i])||!e)return this;
        this._events||(this._events={});
        var r=this._events[t]||(this._events[t]=[]);
        r.push({
            callback:e,
            context:i,
            ctx:i||this
            });
        return this
        },
    once:function(t,e,i){
        if(!l(this,"once",t,[e,i])||!e)return this;
        var r=this;
        var s=h.once(function(){
            r.off(t,s);
            e.apply(this,arguments)
            });
        s._callback=e;
        return this.on(t,s,i)
        },
    off:function(t,e,i){
        var r,s,n,a,o,u,c,f;
        if(!this._events||!l(this,"off",t,[e,i]))return this;
        if(!t&&!e&&!i){
            this._events={};
            
            return this
            }
            a=t?[t]:h.keys(this._events);
        for(o=0,u=a.length;o<u;o++){
            t=a[o];
            if(n=this._events[t]){
                this._events[t]=r=[];
                if(e||i){
                    for(c=0,f=n.length;c<f;c++){
                        s=n[c];
                        if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){
                            r.push(s)
                            }
                        }
                    }
                if(!r.length)delete this._events[t]
        }
    }
    return this
},
trigger:function(t){
    if(!this._events)return this;
    var e=s.call(arguments,1);
    if(!l(this,"trigger",t,e))return this;
    var i=this._events[t];
    var r=this._events.all;
    if(i)c(i,e);
    if(r)c(r,arguments);
    return this
    },
stopListening:function(t,e,i){
    var r=this._listeners;
    if(!r)return this;
    var s=!e&&!i;
    if(typeof e==="object")i=this;
    if(t)(r={})[t._listenerId]=t;
    for(var n in r){
        r[n].off(e,i,this);
        if(s)delete this._listeners[n]
    }
    return this
    }
};

var u=/\s+/;
var l=function(t,e,i,r){
    if(!i)return true;
    if(typeof i==="object"){
        for(var s in i){
            t[e].apply(t,[s,i[s]].concat(r))
            }
            return false
        }
        if(u.test(i)){
        var n=i.split(u);
        for(var a=0,h=n.length;a<h;a++){
            t[e].apply(t,[n[a]].concat(r))
            }
            return false
        }
        return true
    };
    
var c=function(t,e){
    var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];
    switch(e.length){
        case 0:
            while(++r<s)(i=t[r]).callback.call(i.ctx);
            return;
        case 1:
            while(++r<s)(i=t[r]).callback.call(i.ctx,n);
            return;
        case 2:
            while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);
            return;
        case 3:
            while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);
            return;
        default:
            while(++r<s)(i=t[r]).callback.apply(i.ctx,e)
            }
        };

var f={
    listenTo:"on",
    listenToOnce:"once"
};

h.each(f,function(t,e){
    o[e]=function(e,i,r){
        var s=this._listeners||(this._listeners={});
        var n=e._listenerId||(e._listenerId=h.uniqueId("l"));
        s[n]=e;
        if(typeof i==="object")r=this;
        e[t](i,r,this);
        return this
        }
    });
o.bind=o.on;
o.unbind=o.off;
h.extend(a,o);
var d=a.Model=function(t,e){
    var i;
    var r=t||{};
    
    e||(e={});
    this.cid=h.uniqueId("c");
    this.attributes={};
    
    h.extend(this,h.pick(e,p));
    if(e.parse)r=this.parse(r,e)||{};
        
    if(i=h.result(this,"defaults")){
        r=h.defaults({},r,i)
        }
        this.set(r,e);
    this.changed={};
    
    this.initialize.apply(this,arguments)
    };
    
var p=["url","urlRoot","collection"];
h.extend(d.prototype,o,{
    changed:null,
    validationError:null,
    idAttribute:"id",
    initialize:function(){},
    toJSON:function(t){
        return h.clone(this.attributes)
        },
    sync:function(){
        return a.sync.apply(this,arguments)
        },
    get:function(t){
        return this.attributes[t]
        },
    escape:function(t){
        return h.escape(this.get(t))
        },
    has:function(t){
        return this.get(t)!=null
        },
    set:function(t,e,i){
        var r,s,n,a,o,u,l,c;
        if(t==null)return this;
        if(typeof t==="object"){
            s=t;
            i=e
            }else{
            (s={})[t]=e
            }
            i||(i={});
        if(!this._validate(s,i))return false;
        n=i.unset;
        o=i.silent;
        a=[];
        u=this._changing;
        this._changing=true;
        if(!u){
            this._previousAttributes=h.clone(this.attributes);
            this.changed={}
        }
        c=this.attributes,l=this._previousAttributes;
    if(this.idAttribute in s)this.id=s[this.idAttribute];
    for(r in s){
        e=s[r];
        if(!h.isEqual(c[r],e))a.push(r);
        if(!h.isEqual(l[r],e)){
            this.changed[r]=e
            }else{
            delete this.changed[r]
        }
        n?delete c[r]:c[r]=e
        }
        if(!o){
        if(a.length)this._pending=true;
        for(var f=0,d=a.length;f<d;f++){
            this.trigger("change:"+a[f],this,c[a[f]],i)
            }
        }
        if(u)return this;
    if(!o){
    while(this._pending){
        this._pending=false;
        this.trigger("change",this,i)
        }
    }
this._pending=false;
this._changing=false;
return this
},
unset:function(t,e){
    return this.set(t,void 0,h.extend({},e,{
        unset:true
    }))
    },
clear:function(t){
    var e={};
    
    for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{
        unset:true
    }))
    },
hasChanged:function(t){
    if(t==null)return!h.isEmpty(this.changed);
    return h.has(this.changed,t)
    },
changedAttributes:function(t){
    if(!t)return this.hasChanged()?h.clone(this.changed):false;
    var e,i=false;
    var r=this._changing?this._previousAttributes:this.attributes;
    for(var s in t){
        if(h.isEqual(r[s],e=t[s]))continue;
        (i||(i={}))[s]=e
        }
        return i
    },
previous:function(t){
    if(t==null||!this._previousAttributes)return null;
    return this._previousAttributes[t]
    },
previousAttributes:function(){
    return h.clone(this._previousAttributes)
    },
fetch:function(t){
    t=t?h.clone(t):{};
    
    if(t.parse===void 0)t.parse=true;
    var e=this;
    var i=t.success;
    t.success=function(r){
        if(!e.set(e.parse(r,t),t))return false;
        if(i)i(e,r,t);
        e.trigger("sync",e,r,t)
        };
        
    R(this,t);
    return this.sync("read",this,t)
    },
save:function(t,e,i){
    var r,s,n,a=this.attributes;
    if(t==null||typeof t==="object"){
        r=t;
        i=e
        }else{
        (r={})[t]=e
        }
        if(r&&(!i||!i.wait)&&!this.set(r,i))return false;
    i=h.extend({
        validate:true
    },i);
    if(!this._validate(r,i))return false;
    if(r&&i.wait){
        this.attributes=h.extend({},a,r)
        }
        if(i.parse===void 0)i.parse=true;
    var o=this;
    var u=i.success;
    i.success=function(t){
        o.attributes=a;
        var e=o.parse(t,i);
        if(i.wait)e=h.extend(r||{},e);
        if(h.isObject(e)&&!o.set(e,i)){
            return false
            }
            if(u)u(o,t,i);
        o.trigger("sync",o,t,i)
        };
        
    R(this,i);
    s=this.isNew()?"create":i.patch?"patch":"update";
    if(s==="patch")i.attrs=r;
    n=this.sync(s,this,i);
    if(r&&i.wait)this.attributes=a;
    return n
    },
destroy:function(t){
    t=t?h.clone(t):{};
    
    var e=this;
    var i=t.success;
    var r=function(){
        e.trigger("destroy",e,e.collection,t)
        };
        
    t.success=function(s){
        if(t.wait||e.isNew())r();
        if(i)i(e,s,t);
        if(!e.isNew())e.trigger("sync",e,s,t)
            };
            
    if(this.isNew()){
        t.success();
        return false
        }
        R(this,t);
    var s=this.sync("delete",this,t);
    if(!t.wait)r();
    return s
    },
url:function(){
    var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();
    if(this.isNew())return t;
    return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)
    },
parse:function(t,e){
    return t
    },
clone:function(){
    return new this.constructor(this.attributes)
    },
isNew:function(){
    return this.id==null
    },
isValid:function(t){
    return this._validate({},h.extend(t||{},{
        validate:true
    }))
    },
_validate:function(t,e){
    if(!e.validate||!this.validate)return true;
    t=h.extend({},this.attributes,t);
    var i=this.validationError=this.validate(t,e)||null;
    if(!i)return true;
    this.trigger("invalid",this,i,h.extend(e||{},{
        validationError:i
    }));
    return false
    }
});
var v=["keys","values","pairs","invert","pick","omit"];
h.each(v,function(t){
    d.prototype[t]=function(){
        var e=s.call(arguments);
        e.unshift(this.attributes);
        return h[t].apply(h,e)
        }
    });
var g=a.Collection=function(t,e){
    e||(e={});
    if(e.url)this.url=e.url;
    if(e.model)this.model=e.model;
    if(e.comparator!==void 0)this.comparator=e.comparator;
    this._reset();
    this.initialize.apply(this,arguments);
    if(t)this.reset(t,h.extend({
        silent:true
    },e))
    };
    
var m={
    add:true,
    remove:true,
    merge:true
};

var y={
    add:true,
    merge:false,
    remove:false
};

h.extend(g.prototype,o,{
    model:d,
    initialize:function(){},
    toJSON:function(t){
        return this.map(function(e){
            return e.toJSON(t)
            })
        },
    sync:function(){
        return a.sync.apply(this,arguments)
        },
    add:function(t,e){
        return this.set(t,h.defaults(e||{},y))
        },
    remove:function(t,e){
        t=h.isArray(t)?t.slice():[t];
        e||(e={});
        var i,r,s,n;
        for(i=0,r=t.length;i<r;i++){
            n=this.get(t[i]);
            if(!n)continue;
            delete this._byId[n.id];
            delete this._byId[n.cid];
            s=this.indexOf(n);
            this.models.splice(s,1);
            this.length--;
            if(!e.silent){
                e.index=s;
                n.trigger("remove",n,this,e)
                }
                this._removeReference(n)
            }
            return this
        },
    set:function(t,e){
        e=h.defaults(e||{},m);
        if(e.parse)t=this.parse(t,e);
        if(!h.isArray(t))t=t?[t]:[];
        var i,s,a,o,u,l;
        var c=e.at;
        var f=this.comparator&&c==null&&e.sort!==false;
        var d=h.isString(this.comparator)?this.comparator:null;
        var p=[],v=[],g={};
        
        for(i=0,s=t.length;i<s;i++){
            if(!(a=this._prepareModel(t[i],e)))continue;
            if(u=this.get(a)){
                if(e.remove)g[u.cid]=true;
                if(e.merge){
                    u.set(a.attributes,e);
                    if(f&&!l&&u.hasChanged(d))l=true
                        }
                    }else if(e.add){
            p.push(a);
            a.on("all",this._onModelEvent,this);
            this._byId[a.cid]=a;
            if(a.id!=null)this._byId[a.id]=a
                }
            }
        if(e.remove){
    for(i=0,s=this.length;i<s;++i){
        if(!g[(a=this.models[i]).cid])v.push(a)
            }
            if(v.length)this.remove(v,e)
        }
        if(p.length){
    if(f)l=true;
    this.length+=p.length;
    if(c!=null){
        n.apply(this.models,[c,0].concat(p))
        }else{
        r.apply(this.models,p)
        }
    }
if(l)this.sort({
    silent:true
});
if(e.silent)return this;
for(i=0,s=p.length;i<s;i++){
    (a=p[i]).trigger("add",a,this,e)
    }
    if(l)this.trigger("sort",this,e);
return this
},
reset:function(t,e){
    e||(e={});
    for(var i=0,r=this.models.length;i<r;i++){
        this._removeReference(this.models[i])
        }
        e.previousModels=this.models;
    this._reset();
    this.add(t,h.extend({
        silent:true
    },e));
    if(!e.silent)this.trigger("reset",this,e);
    return this
    },
push:function(t,e){
    t=this._prepareModel(t,e);
    this.add(t,h.extend({
        at:this.length
        },e));
    return t
    },
pop:function(t){
    var e=this.at(this.length-1);
    this.remove(e,t);
    return e
    },
unshift:function(t,e){
    t=this._prepareModel(t,e);
    this.add(t,h.extend({
        at:0
    },e));
    return t
    },
shift:function(t){
    var e=this.at(0);
    this.remove(e,t);
    return e
    },
slice:function(t,e){
    return this.models.slice(t,e)
    },
get:function(t){
    if(t==null)return void 0;
    return this._byId[t.id!=null?t.id:t.cid||t]
    },
at:function(t){
    return this.models[t]
    },
where:function(t,e){
    if(h.isEmpty(t))return e?void 0:[];
    return this[e?"find":"filter"](function(e){
        for(var i in t){
            if(t[i]!==e.get(i))return false
                }
                return true
        })
    },
findWhere:function(t){
    return this.where(t,true)
    },
sort:function(t){
    if(!this.comparator)throw new Error("Cannot sort a set without a comparator");
    t||(t={});
    if(h.isString(this.comparator)||this.comparator.length===1){
        this.models=this.sortBy(this.comparator,this)
        }else{
        this.models.sort(h.bind(this.comparator,this))
        }
        if(!t.silent)this.trigger("sort",this,t);
    return this
    },
sortedIndex:function(t,e,i){
    e||(e=this.comparator);
    var r=h.isFunction(e)?e:function(t){
        return t.get(e)
        };
        
    return h.sortedIndex(this.models,t,r,i)
    },
pluck:function(t){
    return h.invoke(this.models,"get",t)
    },
fetch:function(t){
    t=t?h.clone(t):{};
    
    if(t.parse===void 0)t.parse=true;
    var e=t.success;
    var i=this;
    t.success=function(r){
        var s=t.reset?"reset":"set";
        i[s](r,t);
        if(e)e(i,r,t);
        i.trigger("sync",i,r,t)
        };
        
    R(this,t);
    return this.sync("read",this,t)
    },
create:function(t,e){
    e=e?h.clone(e):{};
    
    if(!(t=this._prepareModel(t,e)))return false;
    if(!e.wait)this.add(t,e);
    var i=this;
    var r=e.success;
    e.success=function(s){
        if(e.wait)i.add(t,e);
        if(r)r(t,s,e)
            };
            
    t.save(null,e);
    return t
    },
parse:function(t,e){
    return t
    },
clone:function(){
    return new this.constructor(this.models)
    },
_reset:function(){
    this.length=0;
    this.models=[];
    this._byId={}
},
_prepareModel:function(t,e){
    if(t instanceof d){
        if(!t.collection)t.collection=this;
        return t
        }
        e||(e={});
    e.collection=this;
    var i=new this.model(t,e);
    if(!i._validate(t,e)){
        this.trigger("invalid",this,t,e);
        return false
        }
        return i
    },
_removeReference:function(t){
    if(this===t.collection)delete t.collection;
    t.off("all",this._onModelEvent,this)
    },
_onModelEvent:function(t,e,i,r){
    if((t==="add"||t==="remove")&&i!==this)return;
    if(t==="destroy")this.remove(e,r);
    if(e&&t==="change:"+e.idAttribute){
        delete this._byId[e.previous(e.idAttribute)];
        if(e.id!=null)this._byId[e.id]=e
            }
            this.trigger.apply(this,arguments)
    }
});
var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];
h.each(_,function(t){
    g.prototype[t]=function(){
        var e=s.call(arguments);
        e.unshift(this.models);
        return h[t].apply(h,e)
        }
    });
var w=["groupBy","countBy","sortBy"];
h.each(w,function(t){
    g.prototype[t]=function(e,i){
        var r=h.isFunction(e)?e:function(t){
            return t.get(e)
            };
            
        return h[t](this.models,r,i)
        }
    });
var b=a.View=function(t){
    this.cid=h.uniqueId("view");
    this._configure(t||{});
    this._ensureElement();
    this.initialize.apply(this,arguments);
    this.delegateEvents()
    };
    
var x=/^(\S+)\s*(.*)$/;
var E=["model","collection","el","id","attributes","className","tagName","events"];
h.extend(b.prototype,o,{
    tagName:"div",
    $:function(t){
        return this.$el.find(t)
        },
    initialize:function(){},
    render:function(){
        return this
        },
    remove:function(){
        this.$el.remove();
        this.stopListening();
        return this
        },
    setElement:function(t,e){
        if(this.$el)this.undelegateEvents();
        this.$el=t instanceof a.$?t:a.$(t);
        this.el=this.$el[0];
        if(e!==false)this.delegateEvents();
        return this
        },
    delegateEvents:function(t){
        if(!(t||(t=h.result(this,"events"))))return this;
        this.undelegateEvents();
        for(var e in t){
            var i=t[e];
            if(!h.isFunction(i))i=this[t[e]];
            if(!i)continue;
            var r=e.match(x);
            var s=r[1],n=r[2];
            i=h.bind(i,this);
            s+=".delegateEvents"+this.cid;
            if(n===""){
                this.$el.on(s,i)
                }else{
                this.$el.on(s,n,i)
                }
            }
        return this
    },
undelegateEvents:function(){
    this.$el.off(".delegateEvents"+this.cid);
    return this
    },
_configure:function(t){
    if(this.options)t=h.extend({},h.result(this,"options"),t);
    h.extend(this,h.pick(t,E));
    this.options=t
    },
_ensureElement:function(){
    if(!this.el){
        var t=h.extend({},h.result(this,"attributes"));
        if(this.id)t.id=h.result(this,"id");
        if(this.className)t["class"]=h.result(this,"className");
        var e=a.$("<"+h.result(this,"tagName")+">").attr(t);
        this.setElement(e,false)
        }else{
        this.setElement(h.result(this,"el"),false)
        }
    }
});
a.sync=function(t,e,i){
    var r=k[t];
    h.defaults(i||(i={}),{
        emulateHTTP:a.emulateHTTP,
        emulateJSON:a.emulateJSON
        });
    var s={
        type:r,
        dataType:"json"
    };
    
    if(!i.url){
        s.url=h.result(e,"url")||U()
        }
        if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){
        s.contentType="application/json";
        s.data=JSON.stringify(i.attrs||e.toJSON(i))
        }
        if(i.emulateJSON){
        s.contentType="application/x-www-form-urlencoded";
        s.data=s.data?{
            model:s.data
            }:{}
    }
    if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){
    s.type="POST";
    if(i.emulateJSON)s.data._method=r;
    var n=i.beforeSend;
    i.beforeSend=function(t){
        t.setRequestHeader("X-HTTP-Method-Override",r);
        if(n)return n.apply(this,arguments)
            }
        }
if(s.type!=="GET"&&!i.emulateJSON){
    s.processData=false
    }
    if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){
    s.xhr=function(){
        return new ActiveXObject("Microsoft.XMLHTTP")
        }
    }
var o=i.xhr=a.ajax(h.extend(s,i));
e.trigger("request",e,o,i);
return o
};

var k={
    create:"POST",
    update:"PUT",
    patch:"PATCH",
    "delete":"DELETE",
    read:"GET"
};

a.ajax=function(){
    return a.$.ajax.apply(a.$,arguments)
    };
    
var S=a.Router=function(t){
    t||(t={});
    if(t.routes)this.routes=t.routes;
    this._bindRoutes();
    this.initialize.apply(this,arguments)
    };
    
var $=/\((.*?)\)/g;
var T=/(\(\?)?:\w+/g;
var H=/\*\w+/g;
var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;
h.extend(S.prototype,o,{
    initialize:function(){},
    route:function(t,e,i){
        if(!h.isRegExp(t))t=this._routeToRegExp(t);
        if(h.isFunction(e)){
            i=e;
            e=""
            }
            if(!i)i=this[e];
        var r=this;
        a.history.route(t,function(s){
            var n=r._extractParameters(t,s);
            i&&i.apply(r,n);
            r.trigger.apply(r,["route:"+e].concat(n));
            r.trigger("route",e,n);
            a.history.trigger("route",r,e,n)
            });
        return this
        },
    navigate:function(t,e){
        a.history.navigate(t,e);
        return this
        },
    _bindRoutes:function(){
        if(!this.routes)return;
        this.routes=h.result(this,"routes");
        var t,e=h.keys(this.routes);
        while((t=e.pop())!=null){
            this.route(t,this.routes[t])
            }
        },
_routeToRegExp:function(t){
    t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){
        return e?t:"([^/]+)"
        }).replace(H,"(.*?)");
    return new RegExp("^"+t+"$")
    },
_extractParameters:function(t,e){
    var i=t.exec(e).slice(1);
    return h.map(i,function(t){
        return t?decodeURIComponent(t):null
        })
    }
});
var I=a.History=function(){
    this.handlers=[];
    h.bindAll(this,"checkUrl");
    if(typeof window!=="undefined"){
        this.location=window.location;
        this.history=window.history
        }
    };

var N=/^[#\/]|\s+$/g;
var P=/^\/+|\/+$/g;
var O=/msie [\w.]+/;
var C=/\/$/;
I.started=false;
h.extend(I.prototype,o,{
    interval:50,
    getHash:function(t){
        var e=(t||this).location.href.match(/#(.*)$/);
        return e?e[1]:""
        },
    getFragment:function(t,e){
        if(t==null){
            if(this._hasPushState||!this._wantsHashChange||e){
                t=this.location.pathname;
                var i=this.root.replace(C,"");
                if(!t.indexOf(i))t=t.substr(i.length)
                    }else{
                t=this.getHash()
                }
            }
        return t.replace(N,"")
    },
start:function(t){
    if(I.started)throw new Error("Backbone.history has already been started");
    I.started=true;
    this.options=h.extend({},{
        root:"/"
    },this.options,t);
    this.root=this.options.root;
    this._wantsHashChange=this.options.hashChange!==false;
    this._wantsPushState=!!this.options.pushState;
    this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
    var e=this.getFragment();
    var i=document.documentMode;
    var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);
    this.root=("/"+this.root+"/").replace(P,"/");
    if(r&&this._wantsHashChange){
        this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
        this.navigate(e)
        }
        if(this._hasPushState){
        a.$(window).on("popstate",this.checkUrl)
        }else if(this._wantsHashChange&&"onhashchange"in window&&!r){
        a.$(window).on("hashchange",this.checkUrl)
        }else if(this._wantsHashChange){
        this._checkUrlInterval=setInterval(this.checkUrl,this.interval)
        }
        this.fragment=e;
    var s=this.location;
    var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;
    if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){
        this.fragment=this.getFragment(null,true);
        this.location.replace(this.root+this.location.search+"#"+this.fragment);
        return true
        }else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){
        this.fragment=this.getHash().replace(N,"");
        this.history.replaceState({},document.title,this.root+this.fragment+s.search)
        }
        if(!this.options.silent)return this.loadUrl()
        },
stop:function(){
    a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);
    clearInterval(this._checkUrlInterval);
    I.started=false
    },
route:function(t,e){
    this.handlers.unshift({
        route:t,
        callback:e
    })
    },
checkUrl:function(t){
    var e=this.getFragment();
    if(e===this.fragment&&this.iframe){
        e=this.getFragment(this.getHash(this.iframe))
        }
        if(e===this.fragment)return false;
    if(this.iframe)this.navigate(e);
    this.loadUrl()||this.loadUrl(this.getHash())
    },
loadUrl:function(t){
    var e=this.fragment=this.getFragment(t);
    var i=h.any(this.handlers,function(t){
        if(t.route.test(e)){
            t.callback(e);
            return true
            }
        });
return i
},
navigate:function(t,e){
    if(!I.started)return false;
    if(!e||e===true)e={
        trigger:e
    };
    
    t=this.getFragment(t||"");
    if(this.fragment===t)return;
    this.fragment=t;
    var i=this.root+t;
    if(this._hasPushState){
        this.history[e.replace?"replaceState":"pushState"]({},document.title,i)
        }else if(this._wantsHashChange){
        this._updateHash(this.location,t,e.replace);
        if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){
            if(!e.replace)this.iframe.document.open().close();
            this._updateHash(this.iframe.location,t,e.replace)
            }
        }else{
    return this.location.assign(i)
    }
    if(e.trigger)this.loadUrl(t)
    },
_updateHash:function(t,e,i){
    if(i){
        var r=t.href.replace(/(javascript:|#).*$/,"");
        t.replace(r+"#"+e)
        }else{
        t.hash="#"+e
        }
    }
});
a.history=new I;
var j=function(t,e){
    var i=this;
    var r;
    if(t&&h.has(t,"constructor")){
        r=t.constructor
        }else{
        r=function(){
            return i.apply(this,arguments)
            }
        }
    h.extend(r,i,e);
var s=function(){
    this.constructor=r
    };
    
s.prototype=i.prototype;
r.prototype=new s;
if(t)h.extend(r.prototype,t);
r.__super__=i.prototype;
return r
};

d.extend=g.extend=S.extend=b.extend=I.extend=j;
var U=function(){
    throw new Error('A "url" property or function must be specified')
    };
    
var R=function(t,e){
    var i=e.error;
    e.error=function(r){
        if(i)i(t,r,e);
        t.trigger("error",t,r,e)
        }
    }
}).call(this);
(function(a,b){
    typeof exports=="object"&&a.require?module.exports=b(require("underscore"),require("backbone")):typeof define=="function"&&define.amd?define(["underscore","backbone"],function(c,d){
        return b(c||a._,d||a.Backbone)
        }):b(_,Backbone)
    })(this,function(a,b){
    function c(){
        return((1+Math.random())*65536|0).toString(16).substring(1)
        }
        function d(){
        return c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()
        }
        return b.LocalStorage=window.Store=function(a){
        if(!this.localStorage)throw"Backbone.localStorage: Environment does not support localStorage.";
        this.name=a;
        var b=this.localStorage().getItem(this.name);
        this.records=b&&b.split(",")||[]
        },a.extend(b.LocalStorage.prototype,{
        save:function(){
            this.localStorage().setItem(this.name,this.records.join(","))
            },
        create:function(a){
            return a.id||(a.id=d(),a.set(a.idAttribute,a.id)),this.localStorage().setItem(this.name+"-"+a.id,JSON.stringify(a)),this.records.push(a.id.toString()),this.save(),this.find(a)
            },
        update:function(b){
            return this.localStorage().setItem(this.name+"-"+b.id,JSON.stringify(b)),a.include(this.records,b.id.toString())||this.records.push(b.id.toString()),this.save(),this.find(b)
            },
        find:function(a){
            return this.jsonData(this.localStorage().getItem(this.name+"-"+a.id))
            },
        findAll:function(){
            return(a.chain||a)(this.records).map(function(a){
                return this.jsonData(this.localStorage().getItem(this.name+"-"+a))
                },this).compact().value()
            },
        destroy:function(b){
            return b.isNew()?!1:(this.localStorage().removeItem(this.name+"-"+b.id),this.records=a.reject(this.records,function(a){
                return a===b.id.toString()
                }),this.save(),b)
            },
        localStorage:function(){
            return localStorage
            },
        jsonData:function(a){
            return a&&JSON.parse(a)
            },
        _clear:function(){
            var b=this.localStorage(),c=new RegExp("^"+this.name+"-");
            b.removeItem(this.name),(a.chain||a)(b).keys().filter(function(a){
                return c.test(a)
                }).each(function(a){
                b.removeItem(a)
                }),this.records.length=0
            },
        _storageSize:function(){
            return this.localStorage().length
            }
        }),b.LocalStorage.sync=window.Store.sync=b.localSync=function(a,c,d){
    var e=c.localStorage||c.collection.localStorage,f,g,h=b.$.Deferred&&b.$.Deferred();
    try{
        switch(a){
            case"read":
                f=c.id!=undefined?e.find(c):e.findAll();
                break;
            case"create":
                f=e.create(c);
                break;
            case"update":
                f=e.update(c);
                break;
            case"delete":
                f=e.destroy(c)
                }
            }catch(i){
    i.code===22&&e._storageSize()===0?g="Private browsing is unsupported":g=i.message
    }
    return f?(d&&d.success&&(b.VERSION==="0.9.10"?d.success(c,f,d):d.success(f)),h&&h.resolve(f)):(g=g?g:"Record Not Found",d&&d.error&&(b.VERSION==="0.9.10"?d.error(c,g,d):d.error(g)),h&&h.reject(g)),d&&d.complete&&d.complete(f),h&&h.promise()
    },b.ajaxSync=b.sync,b.getSyncMethod=function(a){
    return a.localStorage||a.collection&&a.collection.localStorage?b.localSync:b.ajaxSync
    },b.sync=function(a,c,d){
    return b.getSyncMethod(c).apply(this,[a,c,d])
    },b.LocalStorage
});
;
(function(h,j,e){
    var a="placeholder"in j.createElement("input");
    var f="placeholder"in j.createElement("textarea");
    var k=e.fn;
    var d=e.valHooks;
    var b=e.propHooks;
    var m;
    var l;
    if(a&&f){
        l=k.placeholder=function(){
            return this
            };
            
        l.input=l.textarea=true
        }else{
        l=k.placeholder=function(){
            var n=this;
            n.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({
                "focus.placeholder":c,
                "blur.placeholder":g
            }).data("placeholder-enabled",true).trigger("blur.placeholder");
            return n
            };
            
        l.input=a;
        l.textarea=f;
        m={
            get:function(o){
                var n=e(o);
                var p=n.data("placeholder-password");
                if(p){
                    return p[0].value
                    }
                    return n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":o.value
                },
            set:function(o,q){
                var n=e(o);
                var p=n.data("placeholder-password");
                if(p){
                    return p[0].value=q
                    }
                    if(!n.data("placeholder-enabled")){
                    return o.value=q
                    }
                    if(q==""){
                    o.value=q;
                    if(o!=j.activeElement){
                        g.call(o)
                        }
                    }else{
                if(n.hasClass("placeholder")){
                    c.call(o,true,q)||(o.value=q)
                    }else{
                    o.value=q
                    }
                }
            return n
        }
    };

if(!a){
    d.input=m;
    b.value=m
    }
    if(!f){
    d.textarea=m;
    b.value=m
    }
    e(function(){
    e(j).delegate("form","submit.placeholder",function(){
        var n=e(".placeholder",this).each(c);
        setTimeout(function(){
            n.each(g)
            },10)
        })
    });
e(h).bind("beforeunload.placeholder",function(){
    e(".placeholder").each(function(){
        this.value=""
        })
    })
}
function i(o){
    var n={};
    
    var p=/^jQuery\d+$/;
    e.each(o.attributes,function(r,q){
        if(q.specified&&!p.test(q.name)){
            n[q.name]=q.value
            }
        });
return n
}
function c(o,p){
    var n=this;
    var q=e(n);
    if(n.value==q.attr("placeholder")&&q.hasClass("placeholder")){
        if(q.data("placeholder-password")){
            q=q.hide().next().show().attr("id",q.removeAttr("id").data("placeholder-id"));
            if(o===true){
                return q[0].value=p
                }
                q.focus()
            }else{
            n.value="";
            q.removeClass("placeholder");
            n==j.activeElement&&n.select()
            }
        }
}
function g(){
    var r;
    var n=this;
    var q=e(n);
    var p=this.id;
    if(n.value==""){
        if(n.type=="password"){
            if(!q.data("placeholder-textinput")){
                try{
                    r=q.clone().attr({
                        type:"text"
                    })
                    }catch(o){
                    r=e("<input>").attr(e.extend(i(this),{
                        type:"text"
                    }))
                    }
                    r.removeAttr("name").data({
                    "placeholder-password":q,
                    "placeholder-id":p
                }).bind("focus.placeholder",c);
                q.data({
                    "placeholder-textinput":r,
                    "placeholder-id":p
                }).before(r)
                }
                q=q.removeAttr("id").hide().prev().attr("id",p).show()
            }
            q.addClass("placeholder");
        q[0].value=q.attr("placeholder")
        }else{
        q.removeClass("placeholder")
        }
    }
}(this,document,jQuery));
;
window.Modernizr=function(a,b,c){
    function w(a){
        j.cssText=a
        }
        function x(a,b){
        return w(m.join(a+";")+(b||""))
        }
        function y(a,b){
        return typeof a===b
        }
        function z(a,b){
        return!!~(""+a).indexOf(b)
        }
        function A(a,b,d){
        for(var e in a){
            var f=b[a[e]];
            if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f
                }
                return!1
        }
        var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){
        var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");
        if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);
        return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i
        },u={}.hasOwnProperty,v;
    !y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){
        return u.call(a,b)
        }:v=function(a,b){
        return b in a&&y(a.constructor.prototype[b],"undefined")
        },Function.prototype.bind||(Function.prototype.bind=function(b){
        var c=this;
        if(typeof c!="function")throw new TypeError;
        var d=r.call(arguments,1),e=function(){
            if(this instanceof e){
                var a=function(){};
                
                a.prototype=c.prototype;
                var f=new a,g=c.apply(f,d.concat(r.call(arguments)));
                return Object(g)===g?g:f
                }
                return c.apply(b,d.concat(r.call(arguments)))
            };
            
        return e
        }),n.touch=function(){
        var c;
        return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){
            c=a.offsetTop===9
            }),c
        };
        
    for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){
        if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{
            a=a.toLowerCase();
            if(e[a]!==c)return e;
            b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b
            }
            return e
        },w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e
    }(this,this.document);
Modernizr.addTest('android',function(){
    return!!navigator.userAgent.match(/Android/i)
    });
Modernizr.addTest('chrome',function(){
    return!!navigator.userAgent.match(/Chrome/i)
    });
Modernizr.addTest('firefox',function(){
    return!!navigator.userAgent.match(/Firefox/i)
    });
Modernizr.addTest('iemobile',function(){
    return!!navigator.userAgent.match(/IEMobile/i)
    });
Modernizr.addTest('ie',function(){
    return!!navigator.userAgent.match(/MSIE/i)
    });
Modernizr.addTest('ie10',function(){
    return!!navigator.userAgent.match(/MSIE 10/i)
    });
Modernizr.addTest('ios',function(){
    return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)
    });
(function(a,b){
    "use strict";
    var c="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,d=function(){
        for(var a,c,d=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"]],e=0,f=d.length,g={};
            f>e;e++)if(a=d[e],a&&a[1]in b){
            for(e=0,c=a.length;c>e;e++)g[d[0][e]]=a[e];
            return g
            }
            return!1
        }(),e={
        request:function(a){
            var e=d.requestFullscreen;
            a=a||b.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[e]():a[e](c&&Element.ALLOW_KEYBOARD_INPUT)
            },
        exit:function(){
            b[d.exitFullscreen]()
            },
        toggle:function(a){
            this.isFullscreen?this.exit():this.request(a)
            },
        onchange:function(){},
        onerror:function(){},
        raw:d
    };
    
    return d?(Object.defineProperties(e,{
        isFullscreen:{
            get:function(){
                return!!b[d.fullscreenElement]
                }
            },
    element:{
        enumerable:!0,
        get:function(){
            return b[d.fullscreenElement]
            }
        },
    enabled:{
        enumerable:!0,
        get:function(){
            return!!b[d.fullscreenEnabled]
            }
        }
    }),b.addEventListener(d.fullscreenchange,function(a){
    e.onchange.call(e,a)
    }),b.addEventListener(d.fullscreenerror,function(a){
    e.onerror.call(e,a)
    }),a.screenfull=e,void 0):a.screenfull=!1
})(window,document);
!function($){
    "use strict";
    var Shift=function(element){
        this.$element=$(element)
        this.$prev=this.$element.prev()
        !this.$prev.length&&(this.$parent=this.$element.parent())
        }
    Shift.prototype={
        constructor:Shift,
        init:function(){
            var $el=this.$element,method=$el.data()['toggle'].split(':')[1],$target=$el.data('target')
            $el.hasClass('in')||$el[method]($target).addClass('in')
            },
        reset:function(){
            this.$parent&&this.$parent['prepend'](this.$element)
            !this.$parent&&this.$element['insertAfter'](this.$prev)
            this.$element.removeClass('in')
            }
        }
$.fn.shift=function(option){
    return this.each(function(){
        var $this=$(this),data=$this.data('shift')
        if(!data)$this.data('shift',(data=new Shift(this)))
        if(typeof option=='string')data[option]()
            })
    }
$.fn.shift.Constructor=Shift
}(window.jQuery);
Date.now=Date.now||function(){
    return+new Date;
};
!function($){
    $(function(){
        $(document).on('click',"[data-toggle=fullscreen]",function(e){
            if(screenfull.enabled){
                screenfull.request();
            }
        });
    $('input[placeholder], textarea[placeholder]').placeholder();
        $("[data-toggle=popover]").popover();
        $(document).on('click','.popover-title .close',function(e){
        var $target=$(e.target),$popover=$target.closest('.popover').prev();
        $popover&&$popover.popover('hide');
    });
    $('[data-toggle="ajaxModal"]').on('click',function(e){
        $('#ajaxModal').remove();
        e.preventDefault();
        var $this=$(this),$remote=$this.data('remote')||$this.attr('href'),$modal=$('<div class="modal" id="ajaxModal"><div class="modal-body"></div></div>');
        $('body').append($modal);
        $modal.modal();
        $modal.load($remote);
    });
    $.fn.dropdown.Constructor.prototype.change=function(e){
        e.preventDefault();
        var $item=$(e.target),$select,$checked=false,$menu,$label;
        !$item.is('a')&&($item=$item.closest('a'));
        $menu=$item.closest('.dropdown-menu');
        $label=$menu.parent().find('.dropdown-label');
        $labelHolder=$label.text();
        $select=$item.find('input');
        $checked=$select.is(':checked');
        if($select.is(':disabled'))return;
        if($select.attr('type')=='radio'&&$checked)return;
        if($select.attr('type')=='radio')$menu.find('li').removeClass('active');
        $item.parent().removeClass('active');
        !$checked&&$item.parent().addClass('active');
        $select.prop("checked",!$select.prop("checked"));
        $items=$menu.find('li > a > input:checked');
        if($items.length){
            $text=[];
            $items.each(function(){
                var $str=$(this).parent().text();
                $str&&$text.push($.trim($str));
            });
            $text=$text.length<4?$text.join(', '):$text.length+' selected';
            $label.html($text);
        }else{
            $label.html($label.data('placeholder'));
        }
    }
    $(document).on('click.dropdown-menu','.dropdown-select > li > a',$.fn.dropdown.Constructor.prototype.change);
    $("[data-toggle=tooltip]").tooltip();
    $(document).on('click','[data-toggle^="class"]',function(e){
        e&&e.preventDefault();
        var $this=$(e.target),$class,$target,$tmp,$classes,$targets;
        !$this.data('toggle')&&($this=$this.closest('[data-toggle^="class"]'));
        $class=$this.data()['toggle'];
        $target=$this.data('target')||$this.attr('href');
        $class&&($tmp=$class.split(':')[1])&&($classes=$tmp.split(','));
        $target&&($targets=$target.split(','));
        $targets&&$targets.length&&$.each($targets,function(index,value){
            ($targets[index]!='#')&&$($targets[index]).toggleClass($classes[index]);
        });
        $this.toggleClass('active');
    });
    $(document).on('click','.panel-toggle',function(e){
        e&&e.preventDefault();
        var $this=$(e.target),$class='collapse',$target;
        if(!$this.is('a'))$this=$this.closest('a');
        $target=$this.closest('.panel');
        $target.find('.panel-body').toggleClass($class);
        $this.toggleClass('active');
    });
    $('.carousel.auto').carousel();
    $(document).on('click.button.data-api','[data-loading-text]',function(e){
        var $this=$(e.target);
        $this.is('i')&&($this=$this.parent());
        $this.button('loading');
    });
    var scrollToTop=function(){
        !location.hash&&setTimeout(function(){
            if(!pageYOffset)window.scrollTo(0,0);
        },1000);
    };
    
    var $window=$(window);
    var mobile=function(option){
        if(option=='reset'){
            $('[data-toggle^="shift"]').shift('reset');
            return;
        }
        scrollToTop();
        $('[data-toggle^="shift"]').shift('init');
        return true;
    };
    
    $window.width()<768&&mobile();
    var $resize;
    $window.resize(function(){
        clearTimeout($resize);
        $resize=setTimeout(function(){
            $window.width()<767&&mobile();
            $window.width()>=768&&mobile('reset');
        },500);
    });
    $('.vbox > footer').prev('section').addClass('w-f');
});
}(window.jQuery);
!function($){
    $(function(){
        var isRgbaSupport=function(){
            var value='rgba(1,1,1,0.5)',el=document.createElement('p'),result=false;
            try{
                el.style.color=value;
                result=/^rgba/.test(el.style.color);
            }catch(e){}
            el=null;
            return result;
        };
        
        var toRgba=function(str,alpha){
            var patt=/^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
            var matches=patt.exec(str);
            return"rgba("+parseInt(matches[1],16)+","+parseInt(matches[2],16)+","+parseInt(matches[3],16)+","+alpha+")";
        };
        
        var generateSparkline=function($re){
            $(".sparkline").each(function(){
                var $data=$(this).data();
                if($re&&!$data.resize)return;
                if($data.type=='bar'){
                    !$data.barColor&&($data.barColor="#3fcf7f");
                    !$data.barSpacing&&($data.barSpacing=2);
                    $(this).next('.axis').find('li').css('width',$data.barWidth+'px').css('margin-right',$data.barSpacing+'px');
                };
                ($data.type=='pie')&&$data.sliceColors&&($data.sliceColors=eval($data.sliceColors));
                ($data.type=='bar')&&$data.stackedBarColor&&($data.stackedBarColor=eval($data.stackedBarColor));
                $data.fillColor&&($data.fillColor.indexOf("#")!==-1)&&isRgbaSupport()&&($data.fillColor=toRgba($data.fillColor,0.5));
                $data.valueSpots={
                    '0:':$data.spotColor
                    };
                    
                $data.minSpotColor=false;
                $(this).sparkline($data.data||"html",$data);
                if($(this).data("compositeData")){
                    var $cdata={};
                    
                    $cdata=$(this).data("compositeConfig");
                    $cdata.composite=true;
                    $cdata.valueSpots={
                        '0:':$cdata.spotColor
                        };
                        
                    $cdata.fillColor&&($cdata.fillColor.indexOf("#")!==-1)&&isRgbaSupport()&&($cdata.fillColor=toRgba($cdata.fillColor,0.5));
                    $(this).sparkline($(this).data("compositeData"),$cdata);
                };
                
                if($data.type=='line'){
                    $(this).next('.axis').addClass('axis-full');
                };
            
            });
    };
    
    var sparkResize;
    $(window).resize(function(e){
        clearTimeout(sparkResize);
        sparkResize=setTimeout(function(){
            generateSparkline(true)
            },500);
    });
    generateSparkline(false);
        var updatePie=function($that){
        var $this=$that,$newValue=Math.round(100*Math.random());
        $this.data('easyPieChart').update($newValue);
    };
    
    $('.easypiechart').each(function(){
        var $barColor=$(this).data("barColor")||function($percent){
            $percent/=100;
            return"rgb("+Math.round(255*(1-$percent))+", "+Math.round(255*$percent)+", 125)";
        },$trackColor=$(this).data("trackColor")||"#c8d2db",$scaleColor=$(this).data("scaleColor"),$lineWidth=$(this).data("lineWidth")||12,$size=$(this).data("size")||130,$animate=$(this).data("animate")||1000;
        $(this).easyPieChart({
            barColor:$barColor,
            trackColor:$trackColor,
            scaleColor:$scaleColor,
            lineCap:'butt',
            lineWidth:$lineWidth,
            size:$size,
            animate:$animate,
            onStop:function(){
                var $this=this.$el;
                $this.data("loop")&&setTimeout(function(){
                    $this.data("loop")&&updatePie($this)
                    },2000);
            },
            onStep:function(value){
                this.$el.find('span').text(parseInt(value));
            }
        });
    });
    $(document).on('click','[data-toggle^="class:pie"]',function(e){
        e&&e.preventDefault();
        var $btn=$(e.target),$loop=$('[data-loop]').data('loop'),$target;
        !$btn.data('toggle')&&($btn=$btn.closest('[data-toggle^="class"]'));
        $target=$btn.data('target');
        !$target&&($target=$btn.closest('[data-loop]'));
        $target.data('loop',!$loop);
        !$loop&&updatePie($('[data-loop]'));
    });
    $(".combodate").each(function(){
        $(this).combodate();
        $(this).next('.combodate').find('select').addClass('form-control');
    });
    $(".datepicker-input").each(function(){
        $(this).datepicker();
    });
    $('.dropfile').each(function(){
        var $dropbox=$(this);
        if(typeof window.FileReader==='undefined'){
            $('small',this).html('File API & FileReader API not supported').addClass('text-danger');
            return;
        }
        this.ondragover=function(){
            $dropbox.addClass('hover');
            return false;
        };
        
        this.ondragend=function(){
            $dropbox.removeClass('hover');
            return false;
        };
        
        this.ondrop=function(e){
            e.preventDefault();
            $dropbox.removeClass('hover').html('');
            var file=e.dataTransfer.files[0],reader=new FileReader();
            reader.onload=function(event){
                $dropbox.append($('<img>').attr('src',event.target.result));
            };
            
            reader.readAsDataURL(file);
            return false;
        };
    
    });
var addPill=function($input){
    var $text=$input.val(),$pills=$input.closest('.pillbox'),$repeat=false,$repeatPill;
    if($text=="")return;
    $("li",$pills).text(function(i,v){
        if(v==$text){
            $repeatPill=$(this);
            $repeat=true;
        }
    });
if($repeat){
    $repeatPill.fadeOut().fadeIn();
    return;
};

$item=$('<li class="label bg-dark">'+$text+'</li> ');
    $item.insertBefore($input);
    $input.val('');
    $pills.trigger('change',$item);
};

$('.pillbox input').on('blur',function(){
    addPill($(this));
});
$('.pillbox input').on('keypress',function(e){
    if(e.which==13){
        e.preventDefault();
        addPill($(this));
    }
});
$('.slider').each(function(){
    $(this).slider();
});
var $nextText;
$(document).on('click','[data-wizard]',function(e){
    var $this=$(this),href;
    var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''));
    var option=$this.data('wizard');
    var item=$target.wizard('selectedItem');
    var $step=$target.next().find('.step-pane:eq('+(item.step-1)+')');
    !$nextText&&($nextText=$('[data-wizard="next"]').html());
    if($(this).hasClass('btn-next')&&$step.find('input, select, textarea').data('required')&&!$step.find('input, select, textarea').parsley('validate')){
        return false;
    }else{
        $target.wizard(option);
        var activeStep=(option=="next")?(item.step+1):(item.step-1);
        var prev=($(this).hasClass('btn-prev')&&$(this))||$(this).prev();
        var next=($(this).hasClass('btn-next')&&$(this))||$(this).next();
        prev.attr('disabled',(activeStep==1)?true:false);
        next.html((activeStep<$target.find('li').length)?$nextText:next.data('last'));
    }
});
if($.fn.sortable){
    $('.sortable').sortable();
}
$('.no-touch .slim-scroll').each(function(){
    var $self=$(this),$data=$self.data(),$slimResize;
    $self.slimScroll($data);
    $(window).resize(function(e){
        clearTimeout($slimResize);
        $slimResize=setTimeout(function(){
            $self.slimScroll($data);
        },500);
    });
});
if($.support.pjax){
    $(document).on('click','a[data-pjax]',function(event){
        event.preventDefault();
        var container=$($(this).data('target'));
        $.pjax.click(event,{
            container:container
        });
    })
    };
    
$('.portlet').each(function(){
    $(".portlet").sortable({
        connectWith:'.portlet',
        iframeFix:false,
        items:'.portlet-item',
        opacity:0.8,
        helper:'original',
        revert:true,
        forceHelperSize:true,
        placeholder:'sortable-box-placeholder round-all',
        forcePlaceholderSize:true,
        tolerance:'pointer'
    });
});
});
}(window.jQuery);
$(document).ready(function(){
    $('#docs pre code').each(function(){
        var $this=$(this);
        var t=$this.html();
        $this.html(t.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
    });
    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    };
    
    $(document).on('click','.the-icons a',function(e){
        e&&e.preventDefault();
    });
    $(document).on('change','table thead [type="checkbox"]',function(e){
        e&&e.preventDefault();
        var $table=$(e.target).closest('table'),$checked=$(e.target).is(':checked');
        $('tbody [type="checkbox"]',$table).prop('checked',$checked);
        console.log($checked);
    });
    $(document).on('click','[data-toggle^="progress"]',function(e){
        e&&e.preventDefault();
        $el=$(e.target);
        $target=$($el.data('target'));
        $('.progress',$target).each(function(){
            var $max=50,$data,$ps=$('.progress-bar',this).last();
            ($(this).hasClass('progress-xs')||$(this).hasClass('progress-sm'))&&($max=100);
            $data=Math.floor(Math.random()*$max)+'%';
            $ps.css('width',$data).attr('data-original-title',$data);
        });
    });
    function addNotification($notes){
        var $el=$('.nav-msg'),$n=$('.count-n:first',$el),$item=$('.list-group-item:first',$el).clone(),$v=parseInt($n.text());
        $('.count-n',$el).fadeOut().fadeIn().text($v+1);
        $item.attr('href',$notes.link);
        $item.find('.pull-left').html($notes.icon);
        $item.find('.media-body').html($notes.title);
        $item.hide().prependTo($el.find('.list-group')).slideDown().css('display','block');
    }
    var date=new Date();
    var d=date.getDate();
    var m=date.getMonth();
    var y=date.getFullYear();
    var addDragEvent=function($this){
        var eventObject={
            title:$.trim($this.text()),
            className:$this.attr('class').replace('label','')
            };
            
        $this.data('eventObject',eventObject);
        $this.draggable({
            zIndex:999,
            revert:true,
            revertDuration:0
        });
    };
    
    $('.calendar').each(function(){
        $(this).fullCalendar({
            header:{
                left:'prev,next',
                center:'title',
                right:'today,month,agendaWeek,agendaDay'
            },
            editable:true,
            droppable:true,
            drop:function(date,allDay){
                var originalEventObject=$(this).data('eventObject');
                var copiedEventObject=$.extend({},originalEventObject);
                copiedEventObject.start=date;
                copiedEventObject.allDay=allDay;
                $('#calendar').fullCalendar('renderEvent',copiedEventObject,true);
                if($('#drop-remove').is(':checked')){
                    $(this).remove();
                }
            },
        events:[{
            title:'All Day Event',
            start:new Date(y,m,1)
            },{
            title:'Long Event',
            start:new Date(y,m,d-5),
            end:new Date(y,m,d-2),
            className:'bg-primary'
        },{
            id:999,
            title:'Repeating Event',
            start:new Date(y,m,d-3,16,0),
            allDay:false
        },{
            id:999,
            title:'Repeating Event',
            start:new Date(y,m,d+4,16,0),
            allDay:false
        },{
            title:'Meeting',
            start:new Date(y,m,d,10,30),
            allDay:false
        },{
            title:'Lunch',
            start:new Date(y,m,d,12,0),
            end:new Date(y,m,d,14,0),
            allDay:false
        },{
            title:'Birthday Party',
            start:new Date(y,m,d+1,19,0),
            end:new Date(y,m,d+1,22,30),
            allDay:false
        },{
            title:'Click for Google',
            start:new Date(y,m,28),
            end:new Date(y,m,29),
            url:'http://google.com/'
        }]
        });
    });
$('#myEvents').on('change',function(e,item){
    addDragEvent($(item));
});
$('#myEvents li').each(function(){
    addDragEvent($(this));
});
var DataGridDataSource=function(options){
    this._formatter=options.formatter;
    this._columns=options.columns;
    this._delay=options.delay;
};

DataGridDataSource.prototype={
    columns:function(){
        return this._columns;
    },
    data:function(options,callback){
        var url='js/data/datagrid.json';
        var self=this;
        setTimeout(function(){
            var data=$.extend(true,[],self._data);
            $.ajax(url,{
                dataType:'json',
                async:false,
                type:'GET'
            }).done(function(response){
                data=response.geonames;
                if(options.search){
                    data=_.filter(data,function(item){
                        var match=false;
                        _.each(item,function(prop){
                            if(_.isString(prop)||_.isFinite(prop)){
                                if(prop.toString().toLowerCase().indexOf(options.search.toLowerCase())!==-1)match=true;
                            }
                        });
                    return match;
                    });
            }
            if(options.filter){
                data=_.filter(data,function(item){
                    switch(options.filter.value){
                        case'lt5m':
                            if(item.population<5000000)return true;
                            break;
                        case'gte5m':
                            if(item.population>=5000000)return true;
                            break;
                        default:
                            return true;
                            break;
                    }
                });
            }
            var count=data.length;
            if(options.sortProperty){
                data=_.sortBy(data,options.sortProperty);
                if(options.sortDirection==='desc')data.reverse();
            }
            var startIndex=options.pageIndex*options.pageSize;
            var endIndex=startIndex+options.pageSize;
            var end=(endIndex>count)?count:endIndex;
            var pages=Math.ceil(count/options.pageSize);
            var page=options.pageIndex+1;
            var start=startIndex+1;
            data=data.slice(startIndex,endIndex);
            if(self._formatter)self._formatter(data);
            callback({
                data:data,
                start:start,
                end:end,
                count:count,
                pages:pages,
                page:page
            });
        }).fail(function(e){});
    },self._delay);
}
};

$('#MyStretchGrid').each(function(){
    $(this).datagrid({
        dataSource:new DataGridDataSource({
            columns:[{
                property:'toponymName',
                label:'Name',
                sortable:true
            },{
                property:'countrycode',
                label:'Country',
                sortable:true
            },{
                property:'population',
                label:'Population',
                sortable:true
            },{
                property:'fcodeName',
                label:'Type',
                sortable:true
            },{
                property:'geonameId',
                label:'Edit',
                sortable:true
            }],
            formatter:function(items){
                $.each(items,function(index,item){
                    item.geonameId='<a href="#edit?geonameid='+item.geonameId+'"><i class="icon-pencil"></i></a>';
                });
            }
        })
    });
});
$('[data-ride="datatables"]').each(function(){
    var oTable=$(this).dataTable({
        "bProcessing":true,
        "sAjaxSource":"js/data/datatable.json",
        "sDom":"<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
        "sPaginationType":"full_numbers",
        "aoColumns":[{
            "mData":"engine"
        },{
            "mData":"browser"
        },{
            "mData":"platform"
        },{
            "mData":"version"
        },{
            "mData":"grade"
        }]
        });
});
if($.fn.select2){
    $("#select2-option").select2();
    $("#select2-tags").select2({
        tags:["red","green","blue"],
        tokenSeparators:[","," "]
        });
}
$('a[href="#morris"]').on('shown.bs.tab',function(){
    if($('.graph').children().length>0)return;
    buildMorris(false);
    var morrisResize;
    $(window).resize(function(e){
        clearTimeout(morrisResize);
        morrisResize=setTimeout(function(){
            buildMorris(true)
            },500);
    });
});
var buildMorris=function($re){
    if($re){
        $('.graph').html('');
    }
    var tax_data=[{
        "period":"2011 Q3",
        "licensed":3407,
        "sorned":660
    },{
        "period":"2011 Q2",
        "licensed":3351,
        "sorned":629
    },{
        "period":"2011 Q1",
        "licensed":3269,
        "sorned":618
    },{
        "period":"2010 Q4",
        "licensed":3246,
        "sorned":661
    },{
        "period":"2009 Q4",
        "licensed":3171,
        "sorned":676
    },{
        "period":"2008 Q4",
        "licensed":3155,
        "sorned":681
    },{
        "period":"2007 Q4",
        "licensed":3226,
        "sorned":620
    },{
        "period":"2006 Q4",
        "licensed":3245,
        "sorned":null
    },{
        "period":"2005 Q4",
        "licensed":3289,
        "sorned":null
    }];
    Morris.Line({
        element:'hero-graph',
        data:tax_data,
        xkey:'period',
        ykeys:['licensed','sorned'],
        labels:['Licensed','Off the road'],
        lineColors:['#59dbbf','#aeb6cb']
        });
    Morris.Donut({
        element:'hero-donut',
        data:[{
            label:'Jam',
            value:25
        },{
            label:'Frosted',
            value:40
        },{
            label:'Custard',
            value:25
        },{
            label:'Sugar',
            value:10
        }],
        colors:['#afcf6f'],
        formatter:function(y){
            return y+"%"
            }
        });
buildArea();
Morris.Bar({
    element:'hero-bar',
    data:[{
        device:'iPhone',
        geekbench:136
    },{
        device:'iPhone 3G',
        geekbench:137
    },{
        device:'iPhone 3GS',
        geekbench:275
    },{
        device:'iPhone 4',
        geekbench:380
    },{
        device:'iPhone 4S',
        geekbench:655
    },{
        device:'iPhone 5',
        geekbench:1571
    }],
    xkey:'device',
    ykeys:['geekbench'],
    labels:['Geekbench'],
    barRatio:0.4,
    xLabelAngle:35,
    hideHover:'auto',
    barColors:['#aeb6cb']
    });
};

var buildArea=function(){
    Morris.Area({
        element:'hero-area',
        data:[{
            period:'2010 Q1',
            iphone:2666,
            ipad:null,
            itouch:2647
        },{
            period:'2010 Q2',
            iphone:2778,
            ipad:2294,
            itouch:2441
        },{
            period:'2010 Q3',
            iphone:4912,
            ipad:1969,
            itouch:2501
        },{
            period:'2010 Q4',
            iphone:3767,
            ipad:3597,
            itouch:5689
        },{
            period:'2011 Q1',
            iphone:6810,
            ipad:1914,
            itouch:2293
        },{
            period:'2011 Q2',
            iphone:5670,
            ipad:4293,
            itouch:1881
        },{
            period:'2011 Q3',
            iphone:4820,
            ipad:3795,
            itouch:1588
        },{
            period:'2011 Q4',
            iphone:15073,
            ipad:5967,
            itouch:5175
        },{
            period:'2012 Q1',
            iphone:10687,
            ipad:4460,
            itouch:2028
        },{
            period:'2012 Q2',
            iphone:8432,
            ipad:5713,
            itouch:1791
        }],
        xkey:'period',
        ykeys:['iphone','ipad','itouch'],
        labels:['iPhone','iPad','iPod Touch'],
        hideHover:'auto',
        lineWidth:2,
        pointSize:4,
        lineColors:['#59dbbf','#aeb6cb','#5dcff3'],
        fillOpacity:0.5,
        smooth:true
    });
};

$('#tab1 #hero-area').each(function(){
    buildArea();
    var morrisResizes;
    $(window).resize(function(e){
        clearTimeout(morrisResizes);
        morrisResizes=setTimeout(function(){
            $('.graph').html('');
            buildArea();
        },500);
    });
});
});