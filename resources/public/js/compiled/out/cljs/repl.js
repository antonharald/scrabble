// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22962_22976 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22963_22977 = null;
var count__22964_22978 = (0);
var i__22965_22979 = (0);
while(true){
if((i__22965_22979 < count__22964_22978)){
var f_22980 = cljs.core._nth.call(null,chunk__22963_22977,i__22965_22979);
cljs.core.println.call(null,"  ",f_22980);

var G__22981 = seq__22962_22976;
var G__22982 = chunk__22963_22977;
var G__22983 = count__22964_22978;
var G__22984 = (i__22965_22979 + (1));
seq__22962_22976 = G__22981;
chunk__22963_22977 = G__22982;
count__22964_22978 = G__22983;
i__22965_22979 = G__22984;
continue;
} else {
var temp__4425__auto___22985 = cljs.core.seq.call(null,seq__22962_22976);
if(temp__4425__auto___22985){
var seq__22962_22986__$1 = temp__4425__auto___22985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22962_22986__$1)){
var c__17629__auto___22987 = cljs.core.chunk_first.call(null,seq__22962_22986__$1);
var G__22988 = cljs.core.chunk_rest.call(null,seq__22962_22986__$1);
var G__22989 = c__17629__auto___22987;
var G__22990 = cljs.core.count.call(null,c__17629__auto___22987);
var G__22991 = (0);
seq__22962_22976 = G__22988;
chunk__22963_22977 = G__22989;
count__22964_22978 = G__22990;
i__22965_22979 = G__22991;
continue;
} else {
var f_22992 = cljs.core.first.call(null,seq__22962_22986__$1);
cljs.core.println.call(null,"  ",f_22992);

var G__22993 = cljs.core.next.call(null,seq__22962_22986__$1);
var G__22994 = null;
var G__22995 = (0);
var G__22996 = (0);
seq__22962_22976 = G__22993;
chunk__22963_22977 = G__22994;
count__22964_22978 = G__22995;
i__22965_22979 = G__22996;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22997 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22997);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22997)))?cljs.core.second.call(null,arglists_22997):arglists_22997));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22966 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22967 = null;
var count__22968 = (0);
var i__22969 = (0);
while(true){
if((i__22969 < count__22968)){
var vec__22970 = cljs.core._nth.call(null,chunk__22967,i__22969);
var name = cljs.core.nth.call(null,vec__22970,(0),null);
var map__22971 = cljs.core.nth.call(null,vec__22970,(1),null);
var map__22971__$1 = ((((!((map__22971 == null)))?((((map__22971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22971):map__22971);
var doc = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22998 = seq__22966;
var G__22999 = chunk__22967;
var G__23000 = count__22968;
var G__23001 = (i__22969 + (1));
seq__22966 = G__22998;
chunk__22967 = G__22999;
count__22968 = G__23000;
i__22969 = G__23001;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22966);
if(temp__4425__auto__){
var seq__22966__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22966__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22966__$1);
var G__23002 = cljs.core.chunk_rest.call(null,seq__22966__$1);
var G__23003 = c__17629__auto__;
var G__23004 = cljs.core.count.call(null,c__17629__auto__);
var G__23005 = (0);
seq__22966 = G__23002;
chunk__22967 = G__23003;
count__22968 = G__23004;
i__22969 = G__23005;
continue;
} else {
var vec__22973 = cljs.core.first.call(null,seq__22966__$1);
var name = cljs.core.nth.call(null,vec__22973,(0),null);
var map__22974 = cljs.core.nth.call(null,vec__22973,(1),null);
var map__22974__$1 = ((((!((map__22974 == null)))?((((map__22974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22974):map__22974);
var doc = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22974__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23006 = cljs.core.next.call(null,seq__22966__$1);
var G__23007 = null;
var G__23008 = (0);
var G__23009 = (0);
seq__22966 = G__23006;
chunk__22967 = G__23007;
count__22968 = G__23008;
i__22969 = G__23009;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1450798006230