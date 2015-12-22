// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21938_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21938_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21943 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21944 = null;
var count__21945 = (0);
var i__21946 = (0);
while(true){
if((i__21946 < count__21945)){
var n = cljs.core._nth.call(null,chunk__21944,i__21946);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21947 = seq__21943;
var G__21948 = chunk__21944;
var G__21949 = count__21945;
var G__21950 = (i__21946 + (1));
seq__21943 = G__21947;
chunk__21944 = G__21948;
count__21945 = G__21949;
i__21946 = G__21950;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21943);
if(temp__4425__auto__){
var seq__21943__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21943__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__21943__$1);
var G__21951 = cljs.core.chunk_rest.call(null,seq__21943__$1);
var G__21952 = c__17629__auto__;
var G__21953 = cljs.core.count.call(null,c__17629__auto__);
var G__21954 = (0);
seq__21943 = G__21951;
chunk__21944 = G__21952;
count__21945 = G__21953;
i__21946 = G__21954;
continue;
} else {
var n = cljs.core.first.call(null,seq__21943__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21955 = cljs.core.next.call(null,seq__21943__$1);
var G__21956 = null;
var G__21957 = (0);
var G__21958 = (0);
seq__21943 = G__21955;
chunk__21944 = G__21956;
count__21945 = G__21957;
i__21946 = G__21958;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21997_22004 = cljs.core.seq.call(null,deps);
var chunk__21998_22005 = null;
var count__21999_22006 = (0);
var i__22000_22007 = (0);
while(true){
if((i__22000_22007 < count__21999_22006)){
var dep_22008 = cljs.core._nth.call(null,chunk__21998_22005,i__22000_22007);
topo_sort_helper_STAR_.call(null,dep_22008,(depth + (1)),state);

var G__22009 = seq__21997_22004;
var G__22010 = chunk__21998_22005;
var G__22011 = count__21999_22006;
var G__22012 = (i__22000_22007 + (1));
seq__21997_22004 = G__22009;
chunk__21998_22005 = G__22010;
count__21999_22006 = G__22011;
i__22000_22007 = G__22012;
continue;
} else {
var temp__4425__auto___22013 = cljs.core.seq.call(null,seq__21997_22004);
if(temp__4425__auto___22013){
var seq__21997_22014__$1 = temp__4425__auto___22013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21997_22014__$1)){
var c__17629__auto___22015 = cljs.core.chunk_first.call(null,seq__21997_22014__$1);
var G__22016 = cljs.core.chunk_rest.call(null,seq__21997_22014__$1);
var G__22017 = c__17629__auto___22015;
var G__22018 = cljs.core.count.call(null,c__17629__auto___22015);
var G__22019 = (0);
seq__21997_22004 = G__22016;
chunk__21998_22005 = G__22017;
count__21999_22006 = G__22018;
i__22000_22007 = G__22019;
continue;
} else {
var dep_22020 = cljs.core.first.call(null,seq__21997_22014__$1);
topo_sort_helper_STAR_.call(null,dep_22020,(depth + (1)),state);

var G__22021 = cljs.core.next.call(null,seq__21997_22014__$1);
var G__22022 = null;
var G__22023 = (0);
var G__22024 = (0);
seq__21997_22004 = G__22021;
chunk__21998_22005 = G__22022;
count__21999_22006 = G__22023;
i__22000_22007 = G__22024;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22001){
var vec__22003 = p__22001;
var x = cljs.core.nth.call(null,vec__22003,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22003,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22003,x,xs,get_deps__$1){
return (function (p1__21959_SHARP_){
return clojure.set.difference.call(null,p1__21959_SHARP_,x);
});})(vec__22003,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22037 = cljs.core.seq.call(null,provides);
var chunk__22038 = null;
var count__22039 = (0);
var i__22040 = (0);
while(true){
if((i__22040 < count__22039)){
var prov = cljs.core._nth.call(null,chunk__22038,i__22040);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22041_22049 = cljs.core.seq.call(null,requires);
var chunk__22042_22050 = null;
var count__22043_22051 = (0);
var i__22044_22052 = (0);
while(true){
if((i__22044_22052 < count__22043_22051)){
var req_22053 = cljs.core._nth.call(null,chunk__22042_22050,i__22044_22052);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22053,prov);

var G__22054 = seq__22041_22049;
var G__22055 = chunk__22042_22050;
var G__22056 = count__22043_22051;
var G__22057 = (i__22044_22052 + (1));
seq__22041_22049 = G__22054;
chunk__22042_22050 = G__22055;
count__22043_22051 = G__22056;
i__22044_22052 = G__22057;
continue;
} else {
var temp__4425__auto___22058 = cljs.core.seq.call(null,seq__22041_22049);
if(temp__4425__auto___22058){
var seq__22041_22059__$1 = temp__4425__auto___22058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22041_22059__$1)){
var c__17629__auto___22060 = cljs.core.chunk_first.call(null,seq__22041_22059__$1);
var G__22061 = cljs.core.chunk_rest.call(null,seq__22041_22059__$1);
var G__22062 = c__17629__auto___22060;
var G__22063 = cljs.core.count.call(null,c__17629__auto___22060);
var G__22064 = (0);
seq__22041_22049 = G__22061;
chunk__22042_22050 = G__22062;
count__22043_22051 = G__22063;
i__22044_22052 = G__22064;
continue;
} else {
var req_22065 = cljs.core.first.call(null,seq__22041_22059__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22065,prov);

var G__22066 = cljs.core.next.call(null,seq__22041_22059__$1);
var G__22067 = null;
var G__22068 = (0);
var G__22069 = (0);
seq__22041_22049 = G__22066;
chunk__22042_22050 = G__22067;
count__22043_22051 = G__22068;
i__22044_22052 = G__22069;
continue;
}
} else {
}
}
break;
}

var G__22070 = seq__22037;
var G__22071 = chunk__22038;
var G__22072 = count__22039;
var G__22073 = (i__22040 + (1));
seq__22037 = G__22070;
chunk__22038 = G__22071;
count__22039 = G__22072;
i__22040 = G__22073;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22037);
if(temp__4425__auto__){
var seq__22037__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22037__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22037__$1);
var G__22074 = cljs.core.chunk_rest.call(null,seq__22037__$1);
var G__22075 = c__17629__auto__;
var G__22076 = cljs.core.count.call(null,c__17629__auto__);
var G__22077 = (0);
seq__22037 = G__22074;
chunk__22038 = G__22075;
count__22039 = G__22076;
i__22040 = G__22077;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22037__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22045_22078 = cljs.core.seq.call(null,requires);
var chunk__22046_22079 = null;
var count__22047_22080 = (0);
var i__22048_22081 = (0);
while(true){
if((i__22048_22081 < count__22047_22080)){
var req_22082 = cljs.core._nth.call(null,chunk__22046_22079,i__22048_22081);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22082,prov);

var G__22083 = seq__22045_22078;
var G__22084 = chunk__22046_22079;
var G__22085 = count__22047_22080;
var G__22086 = (i__22048_22081 + (1));
seq__22045_22078 = G__22083;
chunk__22046_22079 = G__22084;
count__22047_22080 = G__22085;
i__22048_22081 = G__22086;
continue;
} else {
var temp__4425__auto___22087__$1 = cljs.core.seq.call(null,seq__22045_22078);
if(temp__4425__auto___22087__$1){
var seq__22045_22088__$1 = temp__4425__auto___22087__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22045_22088__$1)){
var c__17629__auto___22089 = cljs.core.chunk_first.call(null,seq__22045_22088__$1);
var G__22090 = cljs.core.chunk_rest.call(null,seq__22045_22088__$1);
var G__22091 = c__17629__auto___22089;
var G__22092 = cljs.core.count.call(null,c__17629__auto___22089);
var G__22093 = (0);
seq__22045_22078 = G__22090;
chunk__22046_22079 = G__22091;
count__22047_22080 = G__22092;
i__22048_22081 = G__22093;
continue;
} else {
var req_22094 = cljs.core.first.call(null,seq__22045_22088__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22094,prov);

var G__22095 = cljs.core.next.call(null,seq__22045_22088__$1);
var G__22096 = null;
var G__22097 = (0);
var G__22098 = (0);
seq__22045_22078 = G__22095;
chunk__22046_22079 = G__22096;
count__22047_22080 = G__22097;
i__22048_22081 = G__22098;
continue;
}
} else {
}
}
break;
}

var G__22099 = cljs.core.next.call(null,seq__22037__$1);
var G__22100 = null;
var G__22101 = (0);
var G__22102 = (0);
seq__22037 = G__22099;
chunk__22038 = G__22100;
count__22039 = G__22101;
i__22040 = G__22102;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22107_22111 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22108_22112 = null;
var count__22109_22113 = (0);
var i__22110_22114 = (0);
while(true){
if((i__22110_22114 < count__22109_22113)){
var ns_22115 = cljs.core._nth.call(null,chunk__22108_22112,i__22110_22114);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22115);

var G__22116 = seq__22107_22111;
var G__22117 = chunk__22108_22112;
var G__22118 = count__22109_22113;
var G__22119 = (i__22110_22114 + (1));
seq__22107_22111 = G__22116;
chunk__22108_22112 = G__22117;
count__22109_22113 = G__22118;
i__22110_22114 = G__22119;
continue;
} else {
var temp__4425__auto___22120 = cljs.core.seq.call(null,seq__22107_22111);
if(temp__4425__auto___22120){
var seq__22107_22121__$1 = temp__4425__auto___22120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22107_22121__$1)){
var c__17629__auto___22122 = cljs.core.chunk_first.call(null,seq__22107_22121__$1);
var G__22123 = cljs.core.chunk_rest.call(null,seq__22107_22121__$1);
var G__22124 = c__17629__auto___22122;
var G__22125 = cljs.core.count.call(null,c__17629__auto___22122);
var G__22126 = (0);
seq__22107_22111 = G__22123;
chunk__22108_22112 = G__22124;
count__22109_22113 = G__22125;
i__22110_22114 = G__22126;
continue;
} else {
var ns_22127 = cljs.core.first.call(null,seq__22107_22121__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22127);

var G__22128 = cljs.core.next.call(null,seq__22107_22121__$1);
var G__22129 = null;
var G__22130 = (0);
var G__22131 = (0);
seq__22107_22111 = G__22128;
chunk__22108_22112 = G__22129;
count__22109_22113 = G__22130;
i__22110_22114 = G__22131;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22132__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22133__i = 0, G__22133__a = new Array(arguments.length -  0);
while (G__22133__i < G__22133__a.length) {G__22133__a[G__22133__i] = arguments[G__22133__i + 0]; ++G__22133__i;}
  args = new cljs.core.IndexedSeq(G__22133__a,0);
} 
return G__22132__delegate.call(this,args);};
G__22132.cljs$lang$maxFixedArity = 0;
G__22132.cljs$lang$applyTo = (function (arglist__22134){
var args = cljs.core.seq(arglist__22134);
return G__22132__delegate(args);
});
G__22132.cljs$core$IFn$_invoke$arity$variadic = G__22132__delegate;
return G__22132;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22136 = cljs.core._EQ_;
var expr__22137 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22136.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22137))){
var path_parts = ((function (pred__22136,expr__22137){
return (function (p1__22135_SHARP_){
return clojure.string.split.call(null,p1__22135_SHARP_,/[\/\\]/);
});})(pred__22136,expr__22137))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22136,expr__22137){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22139){if((e22139 instanceof Error)){
var e = e22139;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22139;

}
}})());
});
;})(path_parts,sep,root,pred__22136,expr__22137))
} else {
if(cljs.core.truth_(pred__22136.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22137))){
return ((function (pred__22136,expr__22137){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22136,expr__22137){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22136,expr__22137))
);

return deferred.addErrback(((function (deferred,pred__22136,expr__22137){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22136,expr__22137))
);
});
;})(pred__22136,expr__22137))
} else {
return ((function (pred__22136,expr__22137){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22136,expr__22137))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22140,callback){
var map__22143 = p__22140;
var map__22143__$1 = ((((!((map__22143 == null)))?((((map__22143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22143):map__22143);
var file_msg = map__22143__$1;
var request_url = cljs.core.get.call(null,map__22143__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22143,map__22143__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22143,map__22143__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__){
return (function (state_22167){
var state_val_22168 = (state_22167[(1)]);
if((state_val_22168 === (7))){
var inst_22163 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22169_22189 = state_22167__$1;
(statearr_22169_22189[(2)] = inst_22163);

(statearr_22169_22189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (1))){
var state_22167__$1 = state_22167;
var statearr_22170_22190 = state_22167__$1;
(statearr_22170_22190[(2)] = null);

(statearr_22170_22190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (4))){
var inst_22147 = (state_22167[(7)]);
var inst_22147__$1 = (state_22167[(2)]);
var state_22167__$1 = (function (){var statearr_22171 = state_22167;
(statearr_22171[(7)] = inst_22147__$1);

return statearr_22171;
})();
if(cljs.core.truth_(inst_22147__$1)){
var statearr_22172_22191 = state_22167__$1;
(statearr_22172_22191[(1)] = (5));

} else {
var statearr_22173_22192 = state_22167__$1;
(statearr_22173_22192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (6))){
var state_22167__$1 = state_22167;
var statearr_22174_22193 = state_22167__$1;
(statearr_22174_22193[(2)] = null);

(statearr_22174_22193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (3))){
var inst_22165 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22167__$1,inst_22165);
} else {
if((state_val_22168 === (2))){
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22167__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22168 === (11))){
var inst_22159 = (state_22167[(2)]);
var state_22167__$1 = (function (){var statearr_22175 = state_22167;
(statearr_22175[(8)] = inst_22159);

return statearr_22175;
})();
var statearr_22176_22194 = state_22167__$1;
(statearr_22176_22194[(2)] = null);

(statearr_22176_22194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (9))){
var inst_22151 = (state_22167[(9)]);
var inst_22153 = (state_22167[(10)]);
var inst_22155 = inst_22153.call(null,inst_22151);
var state_22167__$1 = state_22167;
var statearr_22177_22195 = state_22167__$1;
(statearr_22177_22195[(2)] = inst_22155);

(statearr_22177_22195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (5))){
var inst_22147 = (state_22167[(7)]);
var inst_22149 = figwheel.client.file_reloading.blocking_load.call(null,inst_22147);
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22167__$1,(8),inst_22149);
} else {
if((state_val_22168 === (10))){
var inst_22151 = (state_22167[(9)]);
var inst_22157 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22151);
var state_22167__$1 = state_22167;
var statearr_22178_22196 = state_22167__$1;
(statearr_22178_22196[(2)] = inst_22157);

(statearr_22178_22196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22168 === (8))){
var inst_22147 = (state_22167[(7)]);
var inst_22153 = (state_22167[(10)]);
var inst_22151 = (state_22167[(2)]);
var inst_22152 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22153__$1 = cljs.core.get.call(null,inst_22152,inst_22147);
var state_22167__$1 = (function (){var statearr_22179 = state_22167;
(statearr_22179[(9)] = inst_22151);

(statearr_22179[(10)] = inst_22153__$1);

return statearr_22179;
})();
if(cljs.core.truth_(inst_22153__$1)){
var statearr_22180_22197 = state_22167__$1;
(statearr_22180_22197[(1)] = (9));

} else {
var statearr_22181_22198 = state_22167__$1;
(statearr_22181_22198[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18995__auto__))
;
return ((function (switch__18883__auto__,c__18995__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18884__auto__ = null;
var figwheel$client$file_reloading$state_machine__18884__auto____0 = (function (){
var statearr_22185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22185[(0)] = figwheel$client$file_reloading$state_machine__18884__auto__);

(statearr_22185[(1)] = (1));

return statearr_22185;
});
var figwheel$client$file_reloading$state_machine__18884__auto____1 = (function (state_22167){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_22167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e22186){if((e22186 instanceof Object)){
var ex__18887__auto__ = e22186;
var statearr_22187_22199 = state_22167;
(statearr_22187_22199[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22200 = state_22167;
state_22167 = G__22200;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18884__auto__ = function(state_22167){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18884__auto____1.call(this,state_22167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18884__auto____0;
figwheel$client$file_reloading$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18884__auto____1;
return figwheel$client$file_reloading$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__))
})();
var state__18997__auto__ = (function (){var statearr_22188 = f__18996__auto__.call(null);
(statearr_22188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_22188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__))
);

return c__18995__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22201,callback){
var map__22204 = p__22201;
var map__22204__$1 = ((((!((map__22204 == null)))?((((map__22204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22204):map__22204);
var file_msg = map__22204__$1;
var namespace = cljs.core.get.call(null,map__22204__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22204,map__22204__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22204,map__22204__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22206){
var map__22209 = p__22206;
var map__22209__$1 = ((((!((map__22209 == null)))?((((map__22209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22209):map__22209);
var file_msg = map__22209__$1;
var namespace = cljs.core.get.call(null,map__22209__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22211,callback){
var map__22214 = p__22211;
var map__22214__$1 = ((((!((map__22214 == null)))?((((map__22214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22214):map__22214);
var file_msg = map__22214__$1;
var request_url = cljs.core.get.call(null,map__22214__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18995__auto___22302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___22302,out){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___22302,out){
return (function (state_22284){
var state_val_22285 = (state_22284[(1)]);
if((state_val_22285 === (1))){
var inst_22262 = cljs.core.nth.call(null,files,(0),null);
var inst_22263 = cljs.core.nthnext.call(null,files,(1));
var inst_22264 = files;
var state_22284__$1 = (function (){var statearr_22286 = state_22284;
(statearr_22286[(7)] = inst_22264);

(statearr_22286[(8)] = inst_22263);

(statearr_22286[(9)] = inst_22262);

return statearr_22286;
})();
var statearr_22287_22303 = state_22284__$1;
(statearr_22287_22303[(2)] = null);

(statearr_22287_22303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (2))){
var inst_22267 = (state_22284[(10)]);
var inst_22264 = (state_22284[(7)]);
var inst_22267__$1 = cljs.core.nth.call(null,inst_22264,(0),null);
var inst_22268 = cljs.core.nthnext.call(null,inst_22264,(1));
var inst_22269 = (inst_22267__$1 == null);
var inst_22270 = cljs.core.not.call(null,inst_22269);
var state_22284__$1 = (function (){var statearr_22288 = state_22284;
(statearr_22288[(10)] = inst_22267__$1);

(statearr_22288[(11)] = inst_22268);

return statearr_22288;
})();
if(inst_22270){
var statearr_22289_22304 = state_22284__$1;
(statearr_22289_22304[(1)] = (4));

} else {
var statearr_22290_22305 = state_22284__$1;
(statearr_22290_22305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (3))){
var inst_22282 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22284__$1,inst_22282);
} else {
if((state_val_22285 === (4))){
var inst_22267 = (state_22284[(10)]);
var inst_22272 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22267);
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22284__$1,(7),inst_22272);
} else {
if((state_val_22285 === (5))){
var inst_22278 = cljs.core.async.close_BANG_.call(null,out);
var state_22284__$1 = state_22284;
var statearr_22291_22306 = state_22284__$1;
(statearr_22291_22306[(2)] = inst_22278);

(statearr_22291_22306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (6))){
var inst_22280 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22292_22307 = state_22284__$1;
(statearr_22292_22307[(2)] = inst_22280);

(statearr_22292_22307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (7))){
var inst_22268 = (state_22284[(11)]);
var inst_22274 = (state_22284[(2)]);
var inst_22275 = cljs.core.async.put_BANG_.call(null,out,inst_22274);
var inst_22264 = inst_22268;
var state_22284__$1 = (function (){var statearr_22293 = state_22284;
(statearr_22293[(12)] = inst_22275);

(statearr_22293[(7)] = inst_22264);

return statearr_22293;
})();
var statearr_22294_22308 = state_22284__$1;
(statearr_22294_22308[(2)] = null);

(statearr_22294_22308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18995__auto___22302,out))
;
return ((function (switch__18883__auto__,c__18995__auto___22302,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto____0 = (function (){
var statearr_22298 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22298[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto__);

(statearr_22298[(1)] = (1));

return statearr_22298;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto____1 = (function (state_22284){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_22284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e22299){if((e22299 instanceof Object)){
var ex__18887__auto__ = e22299;
var statearr_22300_22309 = state_22284;
(statearr_22300_22309[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22310 = state_22284;
state_22284 = G__22310;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto__ = function(state_22284){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto____1.call(this,state_22284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___22302,out))
})();
var state__18997__auto__ = (function (){var statearr_22301 = f__18996__auto__.call(null);
(statearr_22301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___22302);

return statearr_22301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___22302,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22311,opts){
var map__22315 = p__22311;
var map__22315__$1 = ((((!((map__22315 == null)))?((((map__22315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22315):map__22315);
var eval_body__$1 = cljs.core.get.call(null,map__22315__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22317){var e = e22317;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22318_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22318_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22323){
var vec__22324 = p__22323;
var k = cljs.core.nth.call(null,vec__22324,(0),null);
var v = cljs.core.nth.call(null,vec__22324,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22325){
var vec__22326 = p__22325;
var k = cljs.core.nth.call(null,vec__22326,(0),null);
var v = cljs.core.nth.call(null,vec__22326,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22330,p__22331){
var map__22578 = p__22330;
var map__22578__$1 = ((((!((map__22578 == null)))?((((map__22578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22578):map__22578);
var opts = map__22578__$1;
var before_jsload = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22578__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22579 = p__22331;
var map__22579__$1 = ((((!((map__22579 == null)))?((((map__22579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22579):map__22579);
var msg = map__22579__$1;
var files = cljs.core.get.call(null,map__22579__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22579__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22579__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22732){
var state_val_22733 = (state_22732[(1)]);
if((state_val_22733 === (7))){
var inst_22593 = (state_22732[(7)]);
var inst_22595 = (state_22732[(8)]);
var inst_22594 = (state_22732[(9)]);
var inst_22596 = (state_22732[(10)]);
var inst_22601 = cljs.core._nth.call(null,inst_22594,inst_22596);
var inst_22602 = figwheel.client.file_reloading.eval_body.call(null,inst_22601,opts);
var inst_22603 = (inst_22596 + (1));
var tmp22734 = inst_22593;
var tmp22735 = inst_22595;
var tmp22736 = inst_22594;
var inst_22593__$1 = tmp22734;
var inst_22594__$1 = tmp22736;
var inst_22595__$1 = tmp22735;
var inst_22596__$1 = inst_22603;
var state_22732__$1 = (function (){var statearr_22737 = state_22732;
(statearr_22737[(11)] = inst_22602);

(statearr_22737[(7)] = inst_22593__$1);

(statearr_22737[(8)] = inst_22595__$1);

(statearr_22737[(9)] = inst_22594__$1);

(statearr_22737[(10)] = inst_22596__$1);

return statearr_22737;
})();
var statearr_22738_22824 = state_22732__$1;
(statearr_22738_22824[(2)] = null);

(statearr_22738_22824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (20))){
var inst_22636 = (state_22732[(12)]);
var inst_22644 = figwheel.client.file_reloading.sort_files.call(null,inst_22636);
var state_22732__$1 = state_22732;
var statearr_22739_22825 = state_22732__$1;
(statearr_22739_22825[(2)] = inst_22644);

(statearr_22739_22825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (27))){
var state_22732__$1 = state_22732;
var statearr_22740_22826 = state_22732__$1;
(statearr_22740_22826[(2)] = null);

(statearr_22740_22826[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (1))){
var inst_22585 = (state_22732[(13)]);
var inst_22582 = before_jsload.call(null,files);
var inst_22583 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22584 = (function (){return ((function (inst_22585,inst_22582,inst_22583,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22327_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22327_SHARP_);
});
;})(inst_22585,inst_22582,inst_22583,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22585__$1 = cljs.core.filter.call(null,inst_22584,files);
var inst_22586 = cljs.core.not_empty.call(null,inst_22585__$1);
var state_22732__$1 = (function (){var statearr_22741 = state_22732;
(statearr_22741[(14)] = inst_22582);

(statearr_22741[(15)] = inst_22583);

(statearr_22741[(13)] = inst_22585__$1);

return statearr_22741;
})();
if(cljs.core.truth_(inst_22586)){
var statearr_22742_22827 = state_22732__$1;
(statearr_22742_22827[(1)] = (2));

} else {
var statearr_22743_22828 = state_22732__$1;
(statearr_22743_22828[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (24))){
var state_22732__$1 = state_22732;
var statearr_22744_22829 = state_22732__$1;
(statearr_22744_22829[(2)] = null);

(statearr_22744_22829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (39))){
var inst_22686 = (state_22732[(16)]);
var state_22732__$1 = state_22732;
var statearr_22745_22830 = state_22732__$1;
(statearr_22745_22830[(2)] = inst_22686);

(statearr_22745_22830[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (46))){
var inst_22727 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22746_22831 = state_22732__$1;
(statearr_22746_22831[(2)] = inst_22727);

(statearr_22746_22831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (4))){
var inst_22630 = (state_22732[(2)]);
var inst_22631 = cljs.core.List.EMPTY;
var inst_22632 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22631);
var inst_22633 = (function (){return ((function (inst_22630,inst_22631,inst_22632,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22328_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22328_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22328_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_22630,inst_22631,inst_22632,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22634 = cljs.core.filter.call(null,inst_22633,files);
var inst_22635 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22636 = cljs.core.concat.call(null,inst_22634,inst_22635);
var state_22732__$1 = (function (){var statearr_22747 = state_22732;
(statearr_22747[(17)] = inst_22632);

(statearr_22747[(12)] = inst_22636);

(statearr_22747[(18)] = inst_22630);

return statearr_22747;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22748_22832 = state_22732__$1;
(statearr_22748_22832[(1)] = (16));

} else {
var statearr_22749_22833 = state_22732__$1;
(statearr_22749_22833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (15))){
var inst_22620 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22750_22834 = state_22732__$1;
(statearr_22750_22834[(2)] = inst_22620);

(statearr_22750_22834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (21))){
var inst_22646 = (state_22732[(19)]);
var inst_22646__$1 = (state_22732[(2)]);
var inst_22647 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22646__$1);
var state_22732__$1 = (function (){var statearr_22751 = state_22732;
(statearr_22751[(19)] = inst_22646__$1);

return statearr_22751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22732__$1,(22),inst_22647);
} else {
if((state_val_22733 === (31))){
var inst_22730 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22732__$1,inst_22730);
} else {
if((state_val_22733 === (32))){
var inst_22686 = (state_22732[(16)]);
var inst_22691 = inst_22686.cljs$lang$protocol_mask$partition0$;
var inst_22692 = (inst_22691 & (64));
var inst_22693 = inst_22686.cljs$core$ISeq$;
var inst_22694 = (inst_22692) || (inst_22693);
var state_22732__$1 = state_22732;
if(cljs.core.truth_(inst_22694)){
var statearr_22752_22835 = state_22732__$1;
(statearr_22752_22835[(1)] = (35));

} else {
var statearr_22753_22836 = state_22732__$1;
(statearr_22753_22836[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (40))){
var inst_22707 = (state_22732[(20)]);
var inst_22706 = (state_22732[(2)]);
var inst_22707__$1 = cljs.core.get.call(null,inst_22706,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22708 = cljs.core.get.call(null,inst_22706,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22709 = cljs.core.not_empty.call(null,inst_22707__$1);
var state_22732__$1 = (function (){var statearr_22754 = state_22732;
(statearr_22754[(20)] = inst_22707__$1);

(statearr_22754[(21)] = inst_22708);

return statearr_22754;
})();
if(cljs.core.truth_(inst_22709)){
var statearr_22755_22837 = state_22732__$1;
(statearr_22755_22837[(1)] = (41));

} else {
var statearr_22756_22838 = state_22732__$1;
(statearr_22756_22838[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (33))){
var state_22732__$1 = state_22732;
var statearr_22757_22839 = state_22732__$1;
(statearr_22757_22839[(2)] = false);

(statearr_22757_22839[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (13))){
var inst_22606 = (state_22732[(22)]);
var inst_22610 = cljs.core.chunk_first.call(null,inst_22606);
var inst_22611 = cljs.core.chunk_rest.call(null,inst_22606);
var inst_22612 = cljs.core.count.call(null,inst_22610);
var inst_22593 = inst_22611;
var inst_22594 = inst_22610;
var inst_22595 = inst_22612;
var inst_22596 = (0);
var state_22732__$1 = (function (){var statearr_22758 = state_22732;
(statearr_22758[(7)] = inst_22593);

(statearr_22758[(8)] = inst_22595);

(statearr_22758[(9)] = inst_22594);

(statearr_22758[(10)] = inst_22596);

return statearr_22758;
})();
var statearr_22759_22840 = state_22732__$1;
(statearr_22759_22840[(2)] = null);

(statearr_22759_22840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (22))){
var inst_22646 = (state_22732[(19)]);
var inst_22650 = (state_22732[(23)]);
var inst_22649 = (state_22732[(24)]);
var inst_22654 = (state_22732[(25)]);
var inst_22649__$1 = (state_22732[(2)]);
var inst_22650__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22649__$1);
var inst_22651 = (function (){var all_files = inst_22646;
var res_SINGLEQUOTE_ = inst_22649__$1;
var res = inst_22650__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22646,inst_22650,inst_22649,inst_22654,inst_22649__$1,inst_22650__$1,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22329_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22329_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22646,inst_22650,inst_22649,inst_22654,inst_22649__$1,inst_22650__$1,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22652 = cljs.core.filter.call(null,inst_22651,inst_22649__$1);
var inst_22653 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22654__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22653);
var inst_22655 = cljs.core.not_empty.call(null,inst_22654__$1);
var state_22732__$1 = (function (){var statearr_22760 = state_22732;
(statearr_22760[(23)] = inst_22650__$1);

(statearr_22760[(24)] = inst_22649__$1);

(statearr_22760[(26)] = inst_22652);

(statearr_22760[(25)] = inst_22654__$1);

return statearr_22760;
})();
if(cljs.core.truth_(inst_22655)){
var statearr_22761_22841 = state_22732__$1;
(statearr_22761_22841[(1)] = (23));

} else {
var statearr_22762_22842 = state_22732__$1;
(statearr_22762_22842[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (36))){
var state_22732__$1 = state_22732;
var statearr_22763_22843 = state_22732__$1;
(statearr_22763_22843[(2)] = false);

(statearr_22763_22843[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (41))){
var inst_22707 = (state_22732[(20)]);
var inst_22711 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22712 = cljs.core.map.call(null,inst_22711,inst_22707);
var inst_22713 = cljs.core.pr_str.call(null,inst_22712);
var inst_22714 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22713)].join('');
var inst_22715 = figwheel.client.utils.log.call(null,inst_22714);
var state_22732__$1 = state_22732;
var statearr_22764_22844 = state_22732__$1;
(statearr_22764_22844[(2)] = inst_22715);

(statearr_22764_22844[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (43))){
var inst_22708 = (state_22732[(21)]);
var inst_22718 = (state_22732[(2)]);
var inst_22719 = cljs.core.not_empty.call(null,inst_22708);
var state_22732__$1 = (function (){var statearr_22765 = state_22732;
(statearr_22765[(27)] = inst_22718);

return statearr_22765;
})();
if(cljs.core.truth_(inst_22719)){
var statearr_22766_22845 = state_22732__$1;
(statearr_22766_22845[(1)] = (44));

} else {
var statearr_22767_22846 = state_22732__$1;
(statearr_22767_22846[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (29))){
var inst_22646 = (state_22732[(19)]);
var inst_22650 = (state_22732[(23)]);
var inst_22649 = (state_22732[(24)]);
var inst_22686 = (state_22732[(16)]);
var inst_22652 = (state_22732[(26)]);
var inst_22654 = (state_22732[(25)]);
var inst_22682 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22685 = (function (){var all_files = inst_22646;
var res_SINGLEQUOTE_ = inst_22649;
var res = inst_22650;
var files_not_loaded = inst_22652;
var dependencies_that_loaded = inst_22654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22686,inst_22652,inst_22654,inst_22682,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22684){
var map__22768 = p__22684;
var map__22768__$1 = ((((!((map__22768 == null)))?((((map__22768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22768):map__22768);
var namespace = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22686,inst_22652,inst_22654,inst_22682,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22686__$1 = cljs.core.group_by.call(null,inst_22685,inst_22652);
var inst_22688 = (inst_22686__$1 == null);
var inst_22689 = cljs.core.not.call(null,inst_22688);
var state_22732__$1 = (function (){var statearr_22770 = state_22732;
(statearr_22770[(28)] = inst_22682);

(statearr_22770[(16)] = inst_22686__$1);

return statearr_22770;
})();
if(inst_22689){
var statearr_22771_22847 = state_22732__$1;
(statearr_22771_22847[(1)] = (32));

} else {
var statearr_22772_22848 = state_22732__$1;
(statearr_22772_22848[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (44))){
var inst_22708 = (state_22732[(21)]);
var inst_22721 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22708);
var inst_22722 = cljs.core.pr_str.call(null,inst_22721);
var inst_22723 = [cljs.core.str("not required: "),cljs.core.str(inst_22722)].join('');
var inst_22724 = figwheel.client.utils.log.call(null,inst_22723);
var state_22732__$1 = state_22732;
var statearr_22773_22849 = state_22732__$1;
(statearr_22773_22849[(2)] = inst_22724);

(statearr_22773_22849[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (6))){
var inst_22627 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22774_22850 = state_22732__$1;
(statearr_22774_22850[(2)] = inst_22627);

(statearr_22774_22850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (28))){
var inst_22652 = (state_22732[(26)]);
var inst_22679 = (state_22732[(2)]);
var inst_22680 = cljs.core.not_empty.call(null,inst_22652);
var state_22732__$1 = (function (){var statearr_22775 = state_22732;
(statearr_22775[(29)] = inst_22679);

return statearr_22775;
})();
if(cljs.core.truth_(inst_22680)){
var statearr_22776_22851 = state_22732__$1;
(statearr_22776_22851[(1)] = (29));

} else {
var statearr_22777_22852 = state_22732__$1;
(statearr_22777_22852[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (25))){
var inst_22650 = (state_22732[(23)]);
var inst_22666 = (state_22732[(2)]);
var inst_22667 = cljs.core.not_empty.call(null,inst_22650);
var state_22732__$1 = (function (){var statearr_22778 = state_22732;
(statearr_22778[(30)] = inst_22666);

return statearr_22778;
})();
if(cljs.core.truth_(inst_22667)){
var statearr_22779_22853 = state_22732__$1;
(statearr_22779_22853[(1)] = (26));

} else {
var statearr_22780_22854 = state_22732__$1;
(statearr_22780_22854[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (34))){
var inst_22701 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
if(cljs.core.truth_(inst_22701)){
var statearr_22781_22855 = state_22732__$1;
(statearr_22781_22855[(1)] = (38));

} else {
var statearr_22782_22856 = state_22732__$1;
(statearr_22782_22856[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (17))){
var state_22732__$1 = state_22732;
var statearr_22783_22857 = state_22732__$1;
(statearr_22783_22857[(2)] = recompile_dependents);

(statearr_22783_22857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (3))){
var state_22732__$1 = state_22732;
var statearr_22784_22858 = state_22732__$1;
(statearr_22784_22858[(2)] = null);

(statearr_22784_22858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (12))){
var inst_22623 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22785_22859 = state_22732__$1;
(statearr_22785_22859[(2)] = inst_22623);

(statearr_22785_22859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (2))){
var inst_22585 = (state_22732[(13)]);
var inst_22592 = cljs.core.seq.call(null,inst_22585);
var inst_22593 = inst_22592;
var inst_22594 = null;
var inst_22595 = (0);
var inst_22596 = (0);
var state_22732__$1 = (function (){var statearr_22786 = state_22732;
(statearr_22786[(7)] = inst_22593);

(statearr_22786[(8)] = inst_22595);

(statearr_22786[(9)] = inst_22594);

(statearr_22786[(10)] = inst_22596);

return statearr_22786;
})();
var statearr_22787_22860 = state_22732__$1;
(statearr_22787_22860[(2)] = null);

(statearr_22787_22860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (23))){
var inst_22646 = (state_22732[(19)]);
var inst_22650 = (state_22732[(23)]);
var inst_22649 = (state_22732[(24)]);
var inst_22652 = (state_22732[(26)]);
var inst_22654 = (state_22732[(25)]);
var inst_22657 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22659 = (function (){var all_files = inst_22646;
var res_SINGLEQUOTE_ = inst_22649;
var res = inst_22650;
var files_not_loaded = inst_22652;
var dependencies_that_loaded = inst_22654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22652,inst_22654,inst_22657,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22658){
var map__22788 = p__22658;
var map__22788__$1 = ((((!((map__22788 == null)))?((((map__22788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22788):map__22788);
var request_url = cljs.core.get.call(null,map__22788__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22652,inst_22654,inst_22657,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22660 = cljs.core.reverse.call(null,inst_22654);
var inst_22661 = cljs.core.map.call(null,inst_22659,inst_22660);
var inst_22662 = cljs.core.pr_str.call(null,inst_22661);
var inst_22663 = figwheel.client.utils.log.call(null,inst_22662);
var state_22732__$1 = (function (){var statearr_22790 = state_22732;
(statearr_22790[(31)] = inst_22657);

return statearr_22790;
})();
var statearr_22791_22861 = state_22732__$1;
(statearr_22791_22861[(2)] = inst_22663);

(statearr_22791_22861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (35))){
var state_22732__$1 = state_22732;
var statearr_22792_22862 = state_22732__$1;
(statearr_22792_22862[(2)] = true);

(statearr_22792_22862[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (19))){
var inst_22636 = (state_22732[(12)]);
var inst_22642 = figwheel.client.file_reloading.expand_files.call(null,inst_22636);
var state_22732__$1 = state_22732;
var statearr_22793_22863 = state_22732__$1;
(statearr_22793_22863[(2)] = inst_22642);

(statearr_22793_22863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (11))){
var state_22732__$1 = state_22732;
var statearr_22794_22864 = state_22732__$1;
(statearr_22794_22864[(2)] = null);

(statearr_22794_22864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (9))){
var inst_22625 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22795_22865 = state_22732__$1;
(statearr_22795_22865[(2)] = inst_22625);

(statearr_22795_22865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (5))){
var inst_22595 = (state_22732[(8)]);
var inst_22596 = (state_22732[(10)]);
var inst_22598 = (inst_22596 < inst_22595);
var inst_22599 = inst_22598;
var state_22732__$1 = state_22732;
if(cljs.core.truth_(inst_22599)){
var statearr_22796_22866 = state_22732__$1;
(statearr_22796_22866[(1)] = (7));

} else {
var statearr_22797_22867 = state_22732__$1;
(statearr_22797_22867[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (14))){
var inst_22606 = (state_22732[(22)]);
var inst_22615 = cljs.core.first.call(null,inst_22606);
var inst_22616 = figwheel.client.file_reloading.eval_body.call(null,inst_22615,opts);
var inst_22617 = cljs.core.next.call(null,inst_22606);
var inst_22593 = inst_22617;
var inst_22594 = null;
var inst_22595 = (0);
var inst_22596 = (0);
var state_22732__$1 = (function (){var statearr_22798 = state_22732;
(statearr_22798[(32)] = inst_22616);

(statearr_22798[(7)] = inst_22593);

(statearr_22798[(8)] = inst_22595);

(statearr_22798[(9)] = inst_22594);

(statearr_22798[(10)] = inst_22596);

return statearr_22798;
})();
var statearr_22799_22868 = state_22732__$1;
(statearr_22799_22868[(2)] = null);

(statearr_22799_22868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (45))){
var state_22732__$1 = state_22732;
var statearr_22800_22869 = state_22732__$1;
(statearr_22800_22869[(2)] = null);

(statearr_22800_22869[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (26))){
var inst_22646 = (state_22732[(19)]);
var inst_22650 = (state_22732[(23)]);
var inst_22649 = (state_22732[(24)]);
var inst_22652 = (state_22732[(26)]);
var inst_22654 = (state_22732[(25)]);
var inst_22669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22671 = (function (){var all_files = inst_22646;
var res_SINGLEQUOTE_ = inst_22649;
var res = inst_22650;
var files_not_loaded = inst_22652;
var dependencies_that_loaded = inst_22654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22652,inst_22654,inst_22669,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22670){
var map__22801 = p__22670;
var map__22801__$1 = ((((!((map__22801 == null)))?((((map__22801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22801):map__22801);
var namespace = cljs.core.get.call(null,map__22801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22801__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22652,inst_22654,inst_22669,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22672 = cljs.core.map.call(null,inst_22671,inst_22650);
var inst_22673 = cljs.core.pr_str.call(null,inst_22672);
var inst_22674 = figwheel.client.utils.log.call(null,inst_22673);
var inst_22675 = (function (){var all_files = inst_22646;
var res_SINGLEQUOTE_ = inst_22649;
var res = inst_22650;
var files_not_loaded = inst_22652;
var dependencies_that_loaded = inst_22654;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22652,inst_22654,inst_22669,inst_22671,inst_22672,inst_22673,inst_22674,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22646,inst_22650,inst_22649,inst_22652,inst_22654,inst_22669,inst_22671,inst_22672,inst_22673,inst_22674,state_val_22733,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22676 = setTimeout(inst_22675,(10));
var state_22732__$1 = (function (){var statearr_22803 = state_22732;
(statearr_22803[(33)] = inst_22674);

(statearr_22803[(34)] = inst_22669);

return statearr_22803;
})();
var statearr_22804_22870 = state_22732__$1;
(statearr_22804_22870[(2)] = inst_22676);

(statearr_22804_22870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (16))){
var state_22732__$1 = state_22732;
var statearr_22805_22871 = state_22732__$1;
(statearr_22805_22871[(2)] = reload_dependents);

(statearr_22805_22871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (38))){
var inst_22686 = (state_22732[(16)]);
var inst_22703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22686);
var state_22732__$1 = state_22732;
var statearr_22806_22872 = state_22732__$1;
(statearr_22806_22872[(2)] = inst_22703);

(statearr_22806_22872[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (30))){
var state_22732__$1 = state_22732;
var statearr_22807_22873 = state_22732__$1;
(statearr_22807_22873[(2)] = null);

(statearr_22807_22873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (10))){
var inst_22606 = (state_22732[(22)]);
var inst_22608 = cljs.core.chunked_seq_QMARK_.call(null,inst_22606);
var state_22732__$1 = state_22732;
if(inst_22608){
var statearr_22808_22874 = state_22732__$1;
(statearr_22808_22874[(1)] = (13));

} else {
var statearr_22809_22875 = state_22732__$1;
(statearr_22809_22875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (18))){
var inst_22640 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
if(cljs.core.truth_(inst_22640)){
var statearr_22810_22876 = state_22732__$1;
(statearr_22810_22876[(1)] = (19));

} else {
var statearr_22811_22877 = state_22732__$1;
(statearr_22811_22877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (42))){
var state_22732__$1 = state_22732;
var statearr_22812_22878 = state_22732__$1;
(statearr_22812_22878[(2)] = null);

(statearr_22812_22878[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (37))){
var inst_22698 = (state_22732[(2)]);
var state_22732__$1 = state_22732;
var statearr_22813_22879 = state_22732__$1;
(statearr_22813_22879[(2)] = inst_22698);

(statearr_22813_22879[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22733 === (8))){
var inst_22593 = (state_22732[(7)]);
var inst_22606 = (state_22732[(22)]);
var inst_22606__$1 = cljs.core.seq.call(null,inst_22593);
var state_22732__$1 = (function (){var statearr_22814 = state_22732;
(statearr_22814[(22)] = inst_22606__$1);

return statearr_22814;
})();
if(inst_22606__$1){
var statearr_22815_22880 = state_22732__$1;
(statearr_22815_22880[(1)] = (10));

} else {
var statearr_22816_22881 = state_22732__$1;
(statearr_22816_22881[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18883__auto__,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto____0 = (function (){
var statearr_22820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22820[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto__);

(statearr_22820[(1)] = (1));

return statearr_22820;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto____1 = (function (state_22732){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_22732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e22821){if((e22821 instanceof Object)){
var ex__18887__auto__ = e22821;
var statearr_22822_22882 = state_22732;
(statearr_22822_22882[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22883 = state_22732;
state_22732 = G__22883;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto__ = function(state_22732){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto____1.call(this,state_22732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18997__auto__ = (function (){var statearr_22823 = f__18996__auto__.call(null);
(statearr_22823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_22823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__,map__22578,map__22578__$1,opts,before_jsload,on_jsload,reload_dependents,map__22579,map__22579__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18995__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22886,link){
var map__22889 = p__22886;
var map__22889__$1 = ((((!((map__22889 == null)))?((((map__22889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22889):map__22889);
var file = cljs.core.get.call(null,map__22889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22889,map__22889__$1,file){
return (function (p1__22884_SHARP_,p2__22885_SHARP_){
if(cljs.core._EQ_.call(null,p1__22884_SHARP_,p2__22885_SHARP_)){
return p1__22884_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22889,map__22889__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22895){
var map__22896 = p__22895;
var map__22896__$1 = ((((!((map__22896 == null)))?((((map__22896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22896):map__22896);
var match_length = cljs.core.get.call(null,map__22896__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22896__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22891_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22891_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22898 = [];
var len__17884__auto___22901 = arguments.length;
var i__17885__auto___22902 = (0);
while(true){
if((i__17885__auto___22902 < len__17884__auto___22901)){
args22898.push((arguments[i__17885__auto___22902]));

var G__22903 = (i__17885__auto___22902 + (1));
i__17885__auto___22902 = G__22903;
continue;
} else {
}
break;
}

var G__22900 = args22898.length;
switch (G__22900) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22898.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22905_SHARP_,p2__22906_SHARP_){
return cljs.core.assoc.call(null,p1__22905_SHARP_,cljs.core.get.call(null,p2__22906_SHARP_,key),p2__22906_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22907){
var map__22910 = p__22907;
var map__22910__$1 = ((((!((map__22910 == null)))?((((map__22910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22910):map__22910);
var f_data = map__22910__$1;
var file = cljs.core.get.call(null,map__22910__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22912,files_msg){
var map__22919 = p__22912;
var map__22919__$1 = ((((!((map__22919 == null)))?((((map__22919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22919):map__22919);
var opts = map__22919__$1;
var on_cssload = cljs.core.get.call(null,map__22919__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22921_22925 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22922_22926 = null;
var count__22923_22927 = (0);
var i__22924_22928 = (0);
while(true){
if((i__22924_22928 < count__22923_22927)){
var f_22929 = cljs.core._nth.call(null,chunk__22922_22926,i__22924_22928);
figwheel.client.file_reloading.reload_css_file.call(null,f_22929);

var G__22930 = seq__22921_22925;
var G__22931 = chunk__22922_22926;
var G__22932 = count__22923_22927;
var G__22933 = (i__22924_22928 + (1));
seq__22921_22925 = G__22930;
chunk__22922_22926 = G__22931;
count__22923_22927 = G__22932;
i__22924_22928 = G__22933;
continue;
} else {
var temp__4425__auto___22934 = cljs.core.seq.call(null,seq__22921_22925);
if(temp__4425__auto___22934){
var seq__22921_22935__$1 = temp__4425__auto___22934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22921_22935__$1)){
var c__17629__auto___22936 = cljs.core.chunk_first.call(null,seq__22921_22935__$1);
var G__22937 = cljs.core.chunk_rest.call(null,seq__22921_22935__$1);
var G__22938 = c__17629__auto___22936;
var G__22939 = cljs.core.count.call(null,c__17629__auto___22936);
var G__22940 = (0);
seq__22921_22925 = G__22937;
chunk__22922_22926 = G__22938;
count__22923_22927 = G__22939;
i__22924_22928 = G__22940;
continue;
} else {
var f_22941 = cljs.core.first.call(null,seq__22921_22935__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22941);

var G__22942 = cljs.core.next.call(null,seq__22921_22935__$1);
var G__22943 = null;
var G__22944 = (0);
var G__22945 = (0);
seq__22921_22925 = G__22942;
chunk__22922_22926 = G__22943;
count__22923_22927 = G__22944;
i__22924_22928 = G__22945;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22919,map__22919__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22919,map__22919__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1450798006094