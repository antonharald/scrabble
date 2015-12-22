// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23381 = cljs.core._EQ_;
var expr__23382 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23381.call(null,"true",expr__23382))){
return true;
} else {
if(cljs.core.truth_(pred__23381.call(null,"false",expr__23382))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23382)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23384__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23385__i = 0, G__23385__a = new Array(arguments.length -  0);
while (G__23385__i < G__23385__a.length) {G__23385__a[G__23385__i] = arguments[G__23385__i + 0]; ++G__23385__i;}
  args = new cljs.core.IndexedSeq(G__23385__a,0);
} 
return G__23384__delegate.call(this,args);};
G__23384.cljs$lang$maxFixedArity = 0;
G__23384.cljs$lang$applyTo = (function (arglist__23386){
var args = cljs.core.seq(arglist__23386);
return G__23384__delegate(args);
});
G__23384.cljs$core$IFn$_invoke$arity$variadic = G__23384__delegate;
return G__23384;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23387){
var map__23390 = p__23387;
var map__23390__$1 = ((((!((map__23390 == null)))?((((map__23390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23390):map__23390);
var message = cljs.core.get.call(null,map__23390__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23390__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18995__auto___23552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___23552,ch){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___23552,ch){
return (function (state_23521){
var state_val_23522 = (state_23521[(1)]);
if((state_val_23522 === (7))){
var inst_23517 = (state_23521[(2)]);
var state_23521__$1 = state_23521;
var statearr_23523_23553 = state_23521__$1;
(statearr_23523_23553[(2)] = inst_23517);

(statearr_23523_23553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (1))){
var state_23521__$1 = state_23521;
var statearr_23524_23554 = state_23521__$1;
(statearr_23524_23554[(2)] = null);

(statearr_23524_23554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (4))){
var inst_23474 = (state_23521[(7)]);
var inst_23474__$1 = (state_23521[(2)]);
var state_23521__$1 = (function (){var statearr_23525 = state_23521;
(statearr_23525[(7)] = inst_23474__$1);

return statearr_23525;
})();
if(cljs.core.truth_(inst_23474__$1)){
var statearr_23526_23555 = state_23521__$1;
(statearr_23526_23555[(1)] = (5));

} else {
var statearr_23527_23556 = state_23521__$1;
(statearr_23527_23556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (15))){
var inst_23481 = (state_23521[(8)]);
var inst_23496 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23481);
var inst_23497 = cljs.core.first.call(null,inst_23496);
var inst_23498 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23497);
var inst_23499 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23498)].join('');
var inst_23500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23499);
var state_23521__$1 = state_23521;
var statearr_23528_23557 = state_23521__$1;
(statearr_23528_23557[(2)] = inst_23500);

(statearr_23528_23557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (13))){
var inst_23505 = (state_23521[(2)]);
var state_23521__$1 = state_23521;
var statearr_23529_23558 = state_23521__$1;
(statearr_23529_23558[(2)] = inst_23505);

(statearr_23529_23558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (6))){
var state_23521__$1 = state_23521;
var statearr_23530_23559 = state_23521__$1;
(statearr_23530_23559[(2)] = null);

(statearr_23530_23559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (17))){
var inst_23503 = (state_23521[(2)]);
var state_23521__$1 = state_23521;
var statearr_23531_23560 = state_23521__$1;
(statearr_23531_23560[(2)] = inst_23503);

(statearr_23531_23560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (3))){
var inst_23519 = (state_23521[(2)]);
var state_23521__$1 = state_23521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23521__$1,inst_23519);
} else {
if((state_val_23522 === (12))){
var inst_23480 = (state_23521[(9)]);
var inst_23494 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23480,opts);
var state_23521__$1 = state_23521;
if(cljs.core.truth_(inst_23494)){
var statearr_23532_23561 = state_23521__$1;
(statearr_23532_23561[(1)] = (15));

} else {
var statearr_23533_23562 = state_23521__$1;
(statearr_23533_23562[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (2))){
var state_23521__$1 = state_23521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23521__$1,(4),ch);
} else {
if((state_val_23522 === (11))){
var inst_23481 = (state_23521[(8)]);
var inst_23486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23487 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23481);
var inst_23488 = cljs.core.async.timeout.call(null,(1000));
var inst_23489 = [inst_23487,inst_23488];
var inst_23490 = (new cljs.core.PersistentVector(null,2,(5),inst_23486,inst_23489,null));
var state_23521__$1 = state_23521;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23521__$1,(14),inst_23490);
} else {
if((state_val_23522 === (9))){
var inst_23481 = (state_23521[(8)]);
var inst_23507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23508 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23481);
var inst_23509 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23508);
var inst_23510 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23509)].join('');
var inst_23511 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23510);
var state_23521__$1 = (function (){var statearr_23534 = state_23521;
(statearr_23534[(10)] = inst_23507);

return statearr_23534;
})();
var statearr_23535_23563 = state_23521__$1;
(statearr_23535_23563[(2)] = inst_23511);

(statearr_23535_23563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (5))){
var inst_23474 = (state_23521[(7)]);
var inst_23476 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23477 = (new cljs.core.PersistentArrayMap(null,2,inst_23476,null));
var inst_23478 = (new cljs.core.PersistentHashSet(null,inst_23477,null));
var inst_23479 = figwheel.client.focus_msgs.call(null,inst_23478,inst_23474);
var inst_23480 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23479);
var inst_23481 = cljs.core.first.call(null,inst_23479);
var inst_23482 = figwheel.client.autoload_QMARK_.call(null);
var state_23521__$1 = (function (){var statearr_23536 = state_23521;
(statearr_23536[(9)] = inst_23480);

(statearr_23536[(8)] = inst_23481);

return statearr_23536;
})();
if(cljs.core.truth_(inst_23482)){
var statearr_23537_23564 = state_23521__$1;
(statearr_23537_23564[(1)] = (8));

} else {
var statearr_23538_23565 = state_23521__$1;
(statearr_23538_23565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (14))){
var inst_23492 = (state_23521[(2)]);
var state_23521__$1 = state_23521;
var statearr_23539_23566 = state_23521__$1;
(statearr_23539_23566[(2)] = inst_23492);

(statearr_23539_23566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (16))){
var state_23521__$1 = state_23521;
var statearr_23540_23567 = state_23521__$1;
(statearr_23540_23567[(2)] = null);

(statearr_23540_23567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (10))){
var inst_23513 = (state_23521[(2)]);
var state_23521__$1 = (function (){var statearr_23541 = state_23521;
(statearr_23541[(11)] = inst_23513);

return statearr_23541;
})();
var statearr_23542_23568 = state_23521__$1;
(statearr_23542_23568[(2)] = null);

(statearr_23542_23568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23522 === (8))){
var inst_23480 = (state_23521[(9)]);
var inst_23484 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23480,opts);
var state_23521__$1 = state_23521;
if(cljs.core.truth_(inst_23484)){
var statearr_23543_23569 = state_23521__$1;
(statearr_23543_23569[(1)] = (11));

} else {
var statearr_23544_23570 = state_23521__$1;
(statearr_23544_23570[(1)] = (12));

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
});})(c__18995__auto___23552,ch))
;
return ((function (switch__18883__auto__,c__18995__auto___23552,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18884__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18884__auto____0 = (function (){
var statearr_23548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23548[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18884__auto__);

(statearr_23548[(1)] = (1));

return statearr_23548;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18884__auto____1 = (function (state_23521){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_23521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e23549){if((e23549 instanceof Object)){
var ex__18887__auto__ = e23549;
var statearr_23550_23571 = state_23521;
(statearr_23550_23571[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23572 = state_23521;
state_23521 = G__23572;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18884__auto__ = function(state_23521){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18884__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18884__auto____1.call(this,state_23521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18884__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18884__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___23552,ch))
})();
var state__18997__auto__ = (function (){var statearr_23551 = f__18996__auto__.call(null);
(statearr_23551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___23552);

return statearr_23551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___23552,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23573_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23573_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23580 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23580){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23578 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23579 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_23578,_STAR_print_newline_STAR_23579,base_path_23580){
return (function() { 
var G__23581__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23582__i = 0, G__23582__a = new Array(arguments.length -  0);
while (G__23582__i < G__23582__a.length) {G__23582__a[G__23582__i] = arguments[G__23582__i + 0]; ++G__23582__i;}
  args = new cljs.core.IndexedSeq(G__23582__a,0);
} 
return G__23581__delegate.call(this,args);};
G__23581.cljs$lang$maxFixedArity = 0;
G__23581.cljs$lang$applyTo = (function (arglist__23583){
var args = cljs.core.seq(arglist__23583);
return G__23581__delegate(args);
});
G__23581.cljs$core$IFn$_invoke$arity$variadic = G__23581__delegate;
return G__23581;
})()
;})(_STAR_print_fn_STAR_23578,_STAR_print_newline_STAR_23579,base_path_23580))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23579;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23578;
}}catch (e23577){if((e23577 instanceof Error)){
var e = e23577;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23580], null));
} else {
var e = e23577;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23580))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23584){
var map__23591 = p__23584;
var map__23591__$1 = ((((!((map__23591 == null)))?((((map__23591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23591):map__23591);
var opts = map__23591__$1;
var build_id = cljs.core.get.call(null,map__23591__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23591,map__23591__$1,opts,build_id){
return (function (p__23593){
var vec__23594 = p__23593;
var map__23595 = cljs.core.nth.call(null,vec__23594,(0),null);
var map__23595__$1 = ((((!((map__23595 == null)))?((((map__23595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23595):map__23595);
var msg = map__23595__$1;
var msg_name = cljs.core.get.call(null,map__23595__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23594,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23594,map__23595,map__23595__$1,msg,msg_name,_,map__23591,map__23591__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23594,map__23595,map__23595__$1,msg,msg_name,_,map__23591,map__23591__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23591,map__23591__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23601){
var vec__23602 = p__23601;
var map__23603 = cljs.core.nth.call(null,vec__23602,(0),null);
var map__23603__$1 = ((((!((map__23603 == null)))?((((map__23603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23603):map__23603);
var msg = map__23603__$1;
var msg_name = cljs.core.get.call(null,map__23603__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23602,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23605){
var map__23615 = p__23605;
var map__23615__$1 = ((((!((map__23615 == null)))?((((map__23615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23615):map__23615);
var on_compile_warning = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23615,map__23615__$1,on_compile_warning,on_compile_fail){
return (function (p__23617){
var vec__23618 = p__23617;
var map__23619 = cljs.core.nth.call(null,vec__23618,(0),null);
var map__23619__$1 = ((((!((map__23619 == null)))?((((map__23619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23619):map__23619);
var msg = map__23619__$1;
var msg_name = cljs.core.get.call(null,map__23619__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23618,(1));
var pred__23621 = cljs.core._EQ_;
var expr__23622 = msg_name;
if(cljs.core.truth_(pred__23621.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23622))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23621.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23622))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23615,map__23615__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__,msg_hist,msg_names,msg){
return (function (state_23838){
var state_val_23839 = (state_23838[(1)]);
if((state_val_23839 === (7))){
var inst_23762 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23762)){
var statearr_23840_23886 = state_23838__$1;
(statearr_23840_23886[(1)] = (8));

} else {
var statearr_23841_23887 = state_23838__$1;
(statearr_23841_23887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (20))){
var inst_23832 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23842_23888 = state_23838__$1;
(statearr_23842_23888[(2)] = inst_23832);

(statearr_23842_23888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (27))){
var inst_23828 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23843_23889 = state_23838__$1;
(statearr_23843_23889[(2)] = inst_23828);

(statearr_23843_23889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (1))){
var inst_23755 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23755)){
var statearr_23844_23890 = state_23838__$1;
(statearr_23844_23890[(1)] = (2));

} else {
var statearr_23845_23891 = state_23838__$1;
(statearr_23845_23891[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (24))){
var inst_23830 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23846_23892 = state_23838__$1;
(statearr_23846_23892[(2)] = inst_23830);

(statearr_23846_23892[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (4))){
var inst_23836 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23838__$1,inst_23836);
} else {
if((state_val_23839 === (15))){
var inst_23834 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23847_23893 = state_23838__$1;
(statearr_23847_23893[(2)] = inst_23834);

(statearr_23847_23893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (21))){
var inst_23793 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23848_23894 = state_23838__$1;
(statearr_23848_23894[(2)] = inst_23793);

(statearr_23848_23894[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (31))){
var inst_23817 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23817)){
var statearr_23849_23895 = state_23838__$1;
(statearr_23849_23895[(1)] = (34));

} else {
var statearr_23850_23896 = state_23838__$1;
(statearr_23850_23896[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (32))){
var inst_23826 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23851_23897 = state_23838__$1;
(statearr_23851_23897[(2)] = inst_23826);

(statearr_23851_23897[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (33))){
var inst_23815 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23852_23898 = state_23838__$1;
(statearr_23852_23898[(2)] = inst_23815);

(statearr_23852_23898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (13))){
var inst_23776 = figwheel.client.heads_up.clear.call(null);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(16),inst_23776);
} else {
if((state_val_23839 === (22))){
var inst_23797 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23798 = figwheel.client.heads_up.append_message.call(null,inst_23797);
var state_23838__$1 = state_23838;
var statearr_23853_23899 = state_23838__$1;
(statearr_23853_23899[(2)] = inst_23798);

(statearr_23853_23899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (36))){
var inst_23824 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23854_23900 = state_23838__$1;
(statearr_23854_23900[(2)] = inst_23824);

(statearr_23854_23900[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (29))){
var inst_23808 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23855_23901 = state_23838__$1;
(statearr_23855_23901[(2)] = inst_23808);

(statearr_23855_23901[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (6))){
var inst_23757 = (state_23838[(7)]);
var state_23838__$1 = state_23838;
var statearr_23856_23902 = state_23838__$1;
(statearr_23856_23902[(2)] = inst_23757);

(statearr_23856_23902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (28))){
var inst_23804 = (state_23838[(2)]);
var inst_23805 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23806 = figwheel.client.heads_up.display_warning.call(null,inst_23805);
var state_23838__$1 = (function (){var statearr_23857 = state_23838;
(statearr_23857[(8)] = inst_23804);

return statearr_23857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(29),inst_23806);
} else {
if((state_val_23839 === (25))){
var inst_23802 = figwheel.client.heads_up.clear.call(null);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(28),inst_23802);
} else {
if((state_val_23839 === (34))){
var inst_23819 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(37),inst_23819);
} else {
if((state_val_23839 === (17))){
var inst_23784 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23858_23903 = state_23838__$1;
(statearr_23858_23903[(2)] = inst_23784);

(statearr_23858_23903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (3))){
var inst_23774 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23774)){
var statearr_23859_23904 = state_23838__$1;
(statearr_23859_23904[(1)] = (13));

} else {
var statearr_23860_23905 = state_23838__$1;
(statearr_23860_23905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (12))){
var inst_23770 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23861_23906 = state_23838__$1;
(statearr_23861_23906[(2)] = inst_23770);

(statearr_23861_23906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (2))){
var inst_23757 = (state_23838[(7)]);
var inst_23757__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23838__$1 = (function (){var statearr_23862 = state_23838;
(statearr_23862[(7)] = inst_23757__$1);

return statearr_23862;
})();
if(cljs.core.truth_(inst_23757__$1)){
var statearr_23863_23907 = state_23838__$1;
(statearr_23863_23907[(1)] = (5));

} else {
var statearr_23864_23908 = state_23838__$1;
(statearr_23864_23908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (23))){
var inst_23800 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23800)){
var statearr_23865_23909 = state_23838__$1;
(statearr_23865_23909[(1)] = (25));

} else {
var statearr_23866_23910 = state_23838__$1;
(statearr_23866_23910[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (35))){
var state_23838__$1 = state_23838;
var statearr_23867_23911 = state_23838__$1;
(statearr_23867_23911[(2)] = null);

(statearr_23867_23911[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (19))){
var inst_23795 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23795)){
var statearr_23868_23912 = state_23838__$1;
(statearr_23868_23912[(1)] = (22));

} else {
var statearr_23869_23913 = state_23838__$1;
(statearr_23869_23913[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (11))){
var inst_23766 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23870_23914 = state_23838__$1;
(statearr_23870_23914[(2)] = inst_23766);

(statearr_23870_23914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (9))){
var inst_23768 = figwheel.client.heads_up.clear.call(null);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(12),inst_23768);
} else {
if((state_val_23839 === (5))){
var inst_23759 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23838__$1 = state_23838;
var statearr_23871_23915 = state_23838__$1;
(statearr_23871_23915[(2)] = inst_23759);

(statearr_23871_23915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (14))){
var inst_23786 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23786)){
var statearr_23872_23916 = state_23838__$1;
(statearr_23872_23916[(1)] = (18));

} else {
var statearr_23873_23917 = state_23838__$1;
(statearr_23873_23917[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (26))){
var inst_23810 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23810)){
var statearr_23874_23918 = state_23838__$1;
(statearr_23874_23918[(1)] = (30));

} else {
var statearr_23875_23919 = state_23838__$1;
(statearr_23875_23919[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (16))){
var inst_23778 = (state_23838[(2)]);
var inst_23779 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23780 = figwheel.client.format_messages.call(null,inst_23779);
var inst_23781 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23782 = figwheel.client.heads_up.display_error.call(null,inst_23780,inst_23781);
var state_23838__$1 = (function (){var statearr_23876 = state_23838;
(statearr_23876[(9)] = inst_23778);

return statearr_23876;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(17),inst_23782);
} else {
if((state_val_23839 === (30))){
var inst_23812 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23813 = figwheel.client.heads_up.display_warning.call(null,inst_23812);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(33),inst_23813);
} else {
if((state_val_23839 === (10))){
var inst_23772 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23877_23920 = state_23838__$1;
(statearr_23877_23920[(2)] = inst_23772);

(statearr_23877_23920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (18))){
var inst_23788 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23789 = figwheel.client.format_messages.call(null,inst_23788);
var inst_23790 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23791 = figwheel.client.heads_up.display_error.call(null,inst_23789,inst_23790);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(21),inst_23791);
} else {
if((state_val_23839 === (37))){
var inst_23821 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23878_23921 = state_23838__$1;
(statearr_23878_23921[(2)] = inst_23821);

(statearr_23878_23921[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (8))){
var inst_23764 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(11),inst_23764);
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
});})(c__18995__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18883__auto__,c__18995__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto____0 = (function (){
var statearr_23882 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23882[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto__);

(statearr_23882[(1)] = (1));

return statearr_23882;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto____1 = (function (state_23838){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_23838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e23883){if((e23883 instanceof Object)){
var ex__18887__auto__ = e23883;
var statearr_23884_23922 = state_23838;
(statearr_23884_23922[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23923 = state_23838;
state_23838 = G__23923;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto__ = function(state_23838){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto____1.call(this,state_23838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__,msg_hist,msg_names,msg))
})();
var state__18997__auto__ = (function (){var statearr_23885 = f__18996__auto__.call(null);
(statearr_23885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_23885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__,msg_hist,msg_names,msg))
);

return c__18995__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18995__auto___23986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___23986,ch){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___23986,ch){
return (function (state_23969){
var state_val_23970 = (state_23969[(1)]);
if((state_val_23970 === (1))){
var state_23969__$1 = state_23969;
var statearr_23971_23987 = state_23969__$1;
(statearr_23971_23987[(2)] = null);

(statearr_23971_23987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (2))){
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23969__$1,(4),ch);
} else {
if((state_val_23970 === (3))){
var inst_23967 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23969__$1,inst_23967);
} else {
if((state_val_23970 === (4))){
var inst_23957 = (state_23969[(7)]);
var inst_23957__$1 = (state_23969[(2)]);
var state_23969__$1 = (function (){var statearr_23972 = state_23969;
(statearr_23972[(7)] = inst_23957__$1);

return statearr_23972;
})();
if(cljs.core.truth_(inst_23957__$1)){
var statearr_23973_23988 = state_23969__$1;
(statearr_23973_23988[(1)] = (5));

} else {
var statearr_23974_23989 = state_23969__$1;
(statearr_23974_23989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (5))){
var inst_23957 = (state_23969[(7)]);
var inst_23959 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23957);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23969__$1,(8),inst_23959);
} else {
if((state_val_23970 === (6))){
var state_23969__$1 = state_23969;
var statearr_23975_23990 = state_23969__$1;
(statearr_23975_23990[(2)] = null);

(statearr_23975_23990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (7))){
var inst_23965 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23976_23991 = state_23969__$1;
(statearr_23976_23991[(2)] = inst_23965);

(statearr_23976_23991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (8))){
var inst_23961 = (state_23969[(2)]);
var state_23969__$1 = (function (){var statearr_23977 = state_23969;
(statearr_23977[(8)] = inst_23961);

return statearr_23977;
})();
var statearr_23978_23992 = state_23969__$1;
(statearr_23978_23992[(2)] = null);

(statearr_23978_23992[(1)] = (2));


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
});})(c__18995__auto___23986,ch))
;
return ((function (switch__18883__auto__,c__18995__auto___23986,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18884__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18884__auto____0 = (function (){
var statearr_23982 = [null,null,null,null,null,null,null,null,null];
(statearr_23982[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18884__auto__);

(statearr_23982[(1)] = (1));

return statearr_23982;
});
var figwheel$client$heads_up_plugin_$_state_machine__18884__auto____1 = (function (state_23969){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_23969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e23983){if((e23983 instanceof Object)){
var ex__18887__auto__ = e23983;
var statearr_23984_23993 = state_23969;
(statearr_23984_23993[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23994 = state_23969;
state_23969 = G__23994;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18884__auto__ = function(state_23969){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18884__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18884__auto____1.call(this,state_23969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18884__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18884__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___23986,ch))
})();
var state__18997__auto__ = (function (){var statearr_23985 = f__18996__auto__.call(null);
(statearr_23985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___23986);

return statearr_23985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___23986,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__){
return (function (state_24015){
var state_val_24016 = (state_24015[(1)]);
if((state_val_24016 === (1))){
var inst_24010 = cljs.core.async.timeout.call(null,(3000));
var state_24015__$1 = state_24015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24015__$1,(2),inst_24010);
} else {
if((state_val_24016 === (2))){
var inst_24012 = (state_24015[(2)]);
var inst_24013 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24015__$1 = (function (){var statearr_24017 = state_24015;
(statearr_24017[(7)] = inst_24012);

return statearr_24017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24015__$1,inst_24013);
} else {
return null;
}
}
});})(c__18995__auto__))
;
return ((function (switch__18883__auto__,c__18995__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18884__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18884__auto____0 = (function (){
var statearr_24021 = [null,null,null,null,null,null,null,null];
(statearr_24021[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18884__auto__);

(statearr_24021[(1)] = (1));

return statearr_24021;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18884__auto____1 = (function (state_24015){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_24015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e24022){if((e24022 instanceof Object)){
var ex__18887__auto__ = e24022;
var statearr_24023_24025 = state_24015;
(statearr_24023_24025[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24026 = state_24015;
state_24015 = G__24026;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18884__auto__ = function(state_24015){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18884__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18884__auto____1.call(this,state_24015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18884__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18884__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__))
})();
var state__18997__auto__ = (function (){var statearr_24024 = f__18996__auto__.call(null);
(statearr_24024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_24024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__))
);

return c__18995__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24027){
var map__24034 = p__24027;
var map__24034__$1 = ((((!((map__24034 == null)))?((((map__24034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24034):map__24034);
var ed = map__24034__$1;
var formatted_exception = cljs.core.get.call(null,map__24034__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24034__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24034__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24036_24040 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24037_24041 = null;
var count__24038_24042 = (0);
var i__24039_24043 = (0);
while(true){
if((i__24039_24043 < count__24038_24042)){
var msg_24044 = cljs.core._nth.call(null,chunk__24037_24041,i__24039_24043);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24044);

var G__24045 = seq__24036_24040;
var G__24046 = chunk__24037_24041;
var G__24047 = count__24038_24042;
var G__24048 = (i__24039_24043 + (1));
seq__24036_24040 = G__24045;
chunk__24037_24041 = G__24046;
count__24038_24042 = G__24047;
i__24039_24043 = G__24048;
continue;
} else {
var temp__4425__auto___24049 = cljs.core.seq.call(null,seq__24036_24040);
if(temp__4425__auto___24049){
var seq__24036_24050__$1 = temp__4425__auto___24049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24036_24050__$1)){
var c__17629__auto___24051 = cljs.core.chunk_first.call(null,seq__24036_24050__$1);
var G__24052 = cljs.core.chunk_rest.call(null,seq__24036_24050__$1);
var G__24053 = c__17629__auto___24051;
var G__24054 = cljs.core.count.call(null,c__17629__auto___24051);
var G__24055 = (0);
seq__24036_24040 = G__24052;
chunk__24037_24041 = G__24053;
count__24038_24042 = G__24054;
i__24039_24043 = G__24055;
continue;
} else {
var msg_24056 = cljs.core.first.call(null,seq__24036_24050__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24056);

var G__24057 = cljs.core.next.call(null,seq__24036_24050__$1);
var G__24058 = null;
var G__24059 = (0);
var G__24060 = (0);
seq__24036_24040 = G__24057;
chunk__24037_24041 = G__24058;
count__24038_24042 = G__24059;
i__24039_24043 = G__24060;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24061){
var map__24064 = p__24061;
var map__24064__$1 = ((((!((map__24064 == null)))?((((map__24064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24064):map__24064);
var w = map__24064__$1;
var message = cljs.core.get.call(null,map__24064__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24072 = cljs.core.seq.call(null,plugins);
var chunk__24073 = null;
var count__24074 = (0);
var i__24075 = (0);
while(true){
if((i__24075 < count__24074)){
var vec__24076 = cljs.core._nth.call(null,chunk__24073,i__24075);
var k = cljs.core.nth.call(null,vec__24076,(0),null);
var plugin = cljs.core.nth.call(null,vec__24076,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24078 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24072,chunk__24073,count__24074,i__24075,pl_24078,vec__24076,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24078.call(null,msg_hist);
});})(seq__24072,chunk__24073,count__24074,i__24075,pl_24078,vec__24076,k,plugin))
);
} else {
}

var G__24079 = seq__24072;
var G__24080 = chunk__24073;
var G__24081 = count__24074;
var G__24082 = (i__24075 + (1));
seq__24072 = G__24079;
chunk__24073 = G__24080;
count__24074 = G__24081;
i__24075 = G__24082;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24072);
if(temp__4425__auto__){
var seq__24072__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24072__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24072__$1);
var G__24083 = cljs.core.chunk_rest.call(null,seq__24072__$1);
var G__24084 = c__17629__auto__;
var G__24085 = cljs.core.count.call(null,c__17629__auto__);
var G__24086 = (0);
seq__24072 = G__24083;
chunk__24073 = G__24084;
count__24074 = G__24085;
i__24075 = G__24086;
continue;
} else {
var vec__24077 = cljs.core.first.call(null,seq__24072__$1);
var k = cljs.core.nth.call(null,vec__24077,(0),null);
var plugin = cljs.core.nth.call(null,vec__24077,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24087 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24072,chunk__24073,count__24074,i__24075,pl_24087,vec__24077,k,plugin,seq__24072__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24087.call(null,msg_hist);
});})(seq__24072,chunk__24073,count__24074,i__24075,pl_24087,vec__24077,k,plugin,seq__24072__$1,temp__4425__auto__))
);
} else {
}

var G__24088 = cljs.core.next.call(null,seq__24072__$1);
var G__24089 = null;
var G__24090 = (0);
var G__24091 = (0);
seq__24072 = G__24088;
chunk__24073 = G__24089;
count__24074 = G__24090;
i__24075 = G__24091;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24092 = [];
var len__17884__auto___24095 = arguments.length;
var i__17885__auto___24096 = (0);
while(true){
if((i__17885__auto___24096 < len__17884__auto___24095)){
args24092.push((arguments[i__17885__auto___24096]));

var G__24097 = (i__17885__auto___24096 + (1));
i__17885__auto___24096 = G__24097;
continue;
} else {
}
break;
}

var G__24094 = args24092.length;
switch (G__24094) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24092.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___24103 = arguments.length;
var i__17885__auto___24104 = (0);
while(true){
if((i__17885__auto___24104 < len__17884__auto___24103)){
args__17891__auto__.push((arguments[i__17885__auto___24104]));

var G__24105 = (i__17885__auto___24104 + (1));
i__17885__auto___24104 = G__24105;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24100){
var map__24101 = p__24100;
var map__24101__$1 = ((((!((map__24101 == null)))?((((map__24101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24101):map__24101);
var opts = map__24101__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24099){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24099));
});

//# sourceMappingURL=client.js.map?rel=1450798007672