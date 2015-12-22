// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19040 = [];
var len__17884__auto___19046 = arguments.length;
var i__17885__auto___19047 = (0);
while(true){
if((i__17885__auto___19047 < len__17884__auto___19046)){
args19040.push((arguments[i__17885__auto___19047]));

var G__19048 = (i__17885__auto___19047 + (1));
i__17885__auto___19047 = G__19048;
continue;
} else {
}
break;
}

var G__19042 = args19040.length;
switch (G__19042) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19040.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19043 = (function (f,blockable,meta19044){
this.f = f;
this.blockable = blockable;
this.meta19044 = meta19044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19045,meta19044__$1){
var self__ = this;
var _19045__$1 = this;
return (new cljs.core.async.t_cljs$core$async19043(self__.f,self__.blockable,meta19044__$1));
});

cljs.core.async.t_cljs$core$async19043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19045){
var self__ = this;
var _19045__$1 = this;
return self__.meta19044;
});

cljs.core.async.t_cljs$core$async19043.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19044","meta19044",-2046982480,null)], null);
});

cljs.core.async.t_cljs$core$async19043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19043";

cljs.core.async.t_cljs$core$async19043.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19043");
});

cljs.core.async.__GT_t_cljs$core$async19043 = (function cljs$core$async$__GT_t_cljs$core$async19043(f__$1,blockable__$1,meta19044){
return (new cljs.core.async.t_cljs$core$async19043(f__$1,blockable__$1,meta19044));
});

}

return (new cljs.core.async.t_cljs$core$async19043(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19052 = [];
var len__17884__auto___19055 = arguments.length;
var i__17885__auto___19056 = (0);
while(true){
if((i__17885__auto___19056 < len__17884__auto___19055)){
args19052.push((arguments[i__17885__auto___19056]));

var G__19057 = (i__17885__auto___19056 + (1));
i__17885__auto___19056 = G__19057;
continue;
} else {
}
break;
}

var G__19054 = args19052.length;
switch (G__19054) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19052.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19059 = [];
var len__17884__auto___19062 = arguments.length;
var i__17885__auto___19063 = (0);
while(true){
if((i__17885__auto___19063 < len__17884__auto___19062)){
args19059.push((arguments[i__17885__auto___19063]));

var G__19064 = (i__17885__auto___19063 + (1));
i__17885__auto___19063 = G__19064;
continue;
} else {
}
break;
}

var G__19061 = args19059.length;
switch (G__19061) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19059.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19066 = [];
var len__17884__auto___19069 = arguments.length;
var i__17885__auto___19070 = (0);
while(true){
if((i__17885__auto___19070 < len__17884__auto___19069)){
args19066.push((arguments[i__17885__auto___19070]));

var G__19071 = (i__17885__auto___19070 + (1));
i__17885__auto___19070 = G__19071;
continue;
} else {
}
break;
}

var G__19068 = args19066.length;
switch (G__19068) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19066.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19073 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19073);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19073,ret){
return (function (){
return fn1.call(null,val_19073);
});})(val_19073,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19074 = [];
var len__17884__auto___19077 = arguments.length;
var i__17885__auto___19078 = (0);
while(true){
if((i__17885__auto___19078 < len__17884__auto___19077)){
args19074.push((arguments[i__17885__auto___19078]));

var G__19079 = (i__17885__auto___19078 + (1));
i__17885__auto___19078 = G__19079;
continue;
} else {
}
break;
}

var G__19076 = args19074.length;
switch (G__19076) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19074.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___19081 = n;
var x_19082 = (0);
while(true){
if((x_19082 < n__17729__auto___19081)){
(a[x_19082] = (0));

var G__19083 = (x_19082 + (1));
x_19082 = G__19083;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19084 = (i + (1));
i = G__19084;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19088 = (function (alt_flag,flag,meta19089){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19089 = meta19089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19090,meta19089__$1){
var self__ = this;
var _19090__$1 = this;
return (new cljs.core.async.t_cljs$core$async19088(self__.alt_flag,self__.flag,meta19089__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19090){
var self__ = this;
var _19090__$1 = this;
return self__.meta19089;
});})(flag))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19088.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19089","meta19089",-944314432,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19088";

cljs.core.async.t_cljs$core$async19088.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19088");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19088 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19088(alt_flag__$1,flag__$1,meta19089){
return (new cljs.core.async.t_cljs$core$async19088(alt_flag__$1,flag__$1,meta19089));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19088(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19094 = (function (alt_handler,flag,cb,meta19095){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19095 = meta19095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19096,meta19095__$1){
var self__ = this;
var _19096__$1 = this;
return (new cljs.core.async.t_cljs$core$async19094(self__.alt_handler,self__.flag,self__.cb,meta19095__$1));
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19096){
var self__ = this;
var _19096__$1 = this;
return self__.meta19095;
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19095","meta19095",937233805,null)], null);
});

cljs.core.async.t_cljs$core$async19094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19094";

cljs.core.async.t_cljs$core$async19094.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19094");
});

cljs.core.async.__GT_t_cljs$core$async19094 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19094(alt_handler__$1,flag__$1,cb__$1,meta19095){
return (new cljs.core.async.t_cljs$core$async19094(alt_handler__$1,flag__$1,cb__$1,meta19095));
});

}

return (new cljs.core.async.t_cljs$core$async19094(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19097_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19097_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19098_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19098_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19099 = (i + (1));
i = G__19099;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19105 = arguments.length;
var i__17885__auto___19106 = (0);
while(true){
if((i__17885__auto___19106 < len__17884__auto___19105)){
args__17891__auto__.push((arguments[i__17885__auto___19106]));

var G__19107 = (i__17885__auto___19106 + (1));
i__17885__auto___19106 = G__19107;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19102){
var map__19103 = p__19102;
var map__19103__$1 = ((((!((map__19103 == null)))?((((map__19103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19103):map__19103);
var opts = map__19103__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19100){
var G__19101 = cljs.core.first.call(null,seq19100);
var seq19100__$1 = cljs.core.next.call(null,seq19100);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19101,seq19100__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19108 = [];
var len__17884__auto___19158 = arguments.length;
var i__17885__auto___19159 = (0);
while(true){
if((i__17885__auto___19159 < len__17884__auto___19158)){
args19108.push((arguments[i__17885__auto___19159]));

var G__19160 = (i__17885__auto___19159 + (1));
i__17885__auto___19159 = G__19160;
continue;
} else {
}
break;
}

var G__19110 = args19108.length;
switch (G__19110) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19108.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18995__auto___19162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___19162){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___19162){
return (function (state_19134){
var state_val_19135 = (state_19134[(1)]);
if((state_val_19135 === (7))){
var inst_19130 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
var statearr_19136_19163 = state_19134__$1;
(statearr_19136_19163[(2)] = inst_19130);

(statearr_19136_19163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (1))){
var state_19134__$1 = state_19134;
var statearr_19137_19164 = state_19134__$1;
(statearr_19137_19164[(2)] = null);

(statearr_19137_19164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (4))){
var inst_19113 = (state_19134[(7)]);
var inst_19113__$1 = (state_19134[(2)]);
var inst_19114 = (inst_19113__$1 == null);
var state_19134__$1 = (function (){var statearr_19138 = state_19134;
(statearr_19138[(7)] = inst_19113__$1);

return statearr_19138;
})();
if(cljs.core.truth_(inst_19114)){
var statearr_19139_19165 = state_19134__$1;
(statearr_19139_19165[(1)] = (5));

} else {
var statearr_19140_19166 = state_19134__$1;
(statearr_19140_19166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (13))){
var state_19134__$1 = state_19134;
var statearr_19141_19167 = state_19134__$1;
(statearr_19141_19167[(2)] = null);

(statearr_19141_19167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (6))){
var inst_19113 = (state_19134[(7)]);
var state_19134__$1 = state_19134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19134__$1,(11),to,inst_19113);
} else {
if((state_val_19135 === (3))){
var inst_19132 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19134__$1,inst_19132);
} else {
if((state_val_19135 === (12))){
var state_19134__$1 = state_19134;
var statearr_19142_19168 = state_19134__$1;
(statearr_19142_19168[(2)] = null);

(statearr_19142_19168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (2))){
var state_19134__$1 = state_19134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19134__$1,(4),from);
} else {
if((state_val_19135 === (11))){
var inst_19123 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
if(cljs.core.truth_(inst_19123)){
var statearr_19143_19169 = state_19134__$1;
(statearr_19143_19169[(1)] = (12));

} else {
var statearr_19144_19170 = state_19134__$1;
(statearr_19144_19170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (9))){
var state_19134__$1 = state_19134;
var statearr_19145_19171 = state_19134__$1;
(statearr_19145_19171[(2)] = null);

(statearr_19145_19171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (5))){
var state_19134__$1 = state_19134;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19146_19172 = state_19134__$1;
(statearr_19146_19172[(1)] = (8));

} else {
var statearr_19147_19173 = state_19134__$1;
(statearr_19147_19173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (14))){
var inst_19128 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
var statearr_19148_19174 = state_19134__$1;
(statearr_19148_19174[(2)] = inst_19128);

(statearr_19148_19174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (10))){
var inst_19120 = (state_19134[(2)]);
var state_19134__$1 = state_19134;
var statearr_19149_19175 = state_19134__$1;
(statearr_19149_19175[(2)] = inst_19120);

(statearr_19149_19175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19135 === (8))){
var inst_19117 = cljs.core.async.close_BANG_.call(null,to);
var state_19134__$1 = state_19134;
var statearr_19150_19176 = state_19134__$1;
(statearr_19150_19176[(2)] = inst_19117);

(statearr_19150_19176[(1)] = (10));


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
});})(c__18995__auto___19162))
;
return ((function (switch__18883__auto__,c__18995__auto___19162){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_19154 = [null,null,null,null,null,null,null,null];
(statearr_19154[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_19154[(1)] = (1));

return statearr_19154;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_19134){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19155){if((e19155 instanceof Object)){
var ex__18887__auto__ = e19155;
var statearr_19156_19177 = state_19134;
(statearr_19156_19177[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19178 = state_19134;
state_19134 = G__19178;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_19134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_19134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___19162))
})();
var state__18997__auto__ = (function (){var statearr_19157 = f__18996__auto__.call(null);
(statearr_19157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___19162);

return statearr_19157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___19162))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19362){
var vec__19363 = p__19362;
var v = cljs.core.nth.call(null,vec__19363,(0),null);
var p = cljs.core.nth.call(null,vec__19363,(1),null);
var job = vec__19363;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18995__auto___19545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___19545,res,vec__19363,v,p,job,jobs,results){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___19545,res,vec__19363,v,p,job,jobs,results){
return (function (state_19368){
var state_val_19369 = (state_19368[(1)]);
if((state_val_19369 === (1))){
var state_19368__$1 = state_19368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19368__$1,(2),res,v);
} else {
if((state_val_19369 === (2))){
var inst_19365 = (state_19368[(2)]);
var inst_19366 = cljs.core.async.close_BANG_.call(null,res);
var state_19368__$1 = (function (){var statearr_19370 = state_19368;
(statearr_19370[(7)] = inst_19365);

return statearr_19370;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19368__$1,inst_19366);
} else {
return null;
}
}
});})(c__18995__auto___19545,res,vec__19363,v,p,job,jobs,results))
;
return ((function (switch__18883__auto__,c__18995__auto___19545,res,vec__19363,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0 = (function (){
var statearr_19374 = [null,null,null,null,null,null,null,null];
(statearr_19374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__);

(statearr_19374[(1)] = (1));

return statearr_19374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1 = (function (state_19368){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19375){if((e19375 instanceof Object)){
var ex__18887__auto__ = e19375;
var statearr_19376_19546 = state_19368;
(statearr_19376_19546[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19547 = state_19368;
state_19368 = G__19547;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = function(state_19368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1.call(this,state_19368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___19545,res,vec__19363,v,p,job,jobs,results))
})();
var state__18997__auto__ = (function (){var statearr_19377 = f__18996__auto__.call(null);
(statearr_19377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___19545);

return statearr_19377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___19545,res,vec__19363,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19378){
var vec__19379 = p__19378;
var v = cljs.core.nth.call(null,vec__19379,(0),null);
var p = cljs.core.nth.call(null,vec__19379,(1),null);
var job = vec__19379;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___19548 = n;
var __19549 = (0);
while(true){
if((__19549 < n__17729__auto___19548)){
var G__19380_19550 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19380_19550) {
case "compute":
var c__18995__auto___19552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19549,c__18995__auto___19552,G__19380_19550,n__17729__auto___19548,jobs,results,process,async){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (__19549,c__18995__auto___19552,G__19380_19550,n__17729__auto___19548,jobs,results,process,async){
return (function (state_19393){
var state_val_19394 = (state_19393[(1)]);
if((state_val_19394 === (1))){
var state_19393__$1 = state_19393;
var statearr_19395_19553 = state_19393__$1;
(statearr_19395_19553[(2)] = null);

(statearr_19395_19553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19394 === (2))){
var state_19393__$1 = state_19393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19393__$1,(4),jobs);
} else {
if((state_val_19394 === (3))){
var inst_19391 = (state_19393[(2)]);
var state_19393__$1 = state_19393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19393__$1,inst_19391);
} else {
if((state_val_19394 === (4))){
var inst_19383 = (state_19393[(2)]);
var inst_19384 = process.call(null,inst_19383);
var state_19393__$1 = state_19393;
if(cljs.core.truth_(inst_19384)){
var statearr_19396_19554 = state_19393__$1;
(statearr_19396_19554[(1)] = (5));

} else {
var statearr_19397_19555 = state_19393__$1;
(statearr_19397_19555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19394 === (5))){
var state_19393__$1 = state_19393;
var statearr_19398_19556 = state_19393__$1;
(statearr_19398_19556[(2)] = null);

(statearr_19398_19556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19394 === (6))){
var state_19393__$1 = state_19393;
var statearr_19399_19557 = state_19393__$1;
(statearr_19399_19557[(2)] = null);

(statearr_19399_19557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19394 === (7))){
var inst_19389 = (state_19393[(2)]);
var state_19393__$1 = state_19393;
var statearr_19400_19558 = state_19393__$1;
(statearr_19400_19558[(2)] = inst_19389);

(statearr_19400_19558[(1)] = (3));


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
});})(__19549,c__18995__auto___19552,G__19380_19550,n__17729__auto___19548,jobs,results,process,async))
;
return ((function (__19549,switch__18883__auto__,c__18995__auto___19552,G__19380_19550,n__17729__auto___19548,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0 = (function (){
var statearr_19404 = [null,null,null,null,null,null,null];
(statearr_19404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__);

(statearr_19404[(1)] = (1));

return statearr_19404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1 = (function (state_19393){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19405){if((e19405 instanceof Object)){
var ex__18887__auto__ = e19405;
var statearr_19406_19559 = state_19393;
(statearr_19406_19559[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19560 = state_19393;
state_19393 = G__19560;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = function(state_19393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1.call(this,state_19393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__;
})()
;})(__19549,switch__18883__auto__,c__18995__auto___19552,G__19380_19550,n__17729__auto___19548,jobs,results,process,async))
})();
var state__18997__auto__ = (function (){var statearr_19407 = f__18996__auto__.call(null);
(statearr_19407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___19552);

return statearr_19407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(__19549,c__18995__auto___19552,G__19380_19550,n__17729__auto___19548,jobs,results,process,async))
);


break;
case "async":
var c__18995__auto___19561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19549,c__18995__auto___19561,G__19380_19550,n__17729__auto___19548,jobs,results,process,async){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (__19549,c__18995__auto___19561,G__19380_19550,n__17729__auto___19548,jobs,results,process,async){
return (function (state_19420){
var state_val_19421 = (state_19420[(1)]);
if((state_val_19421 === (1))){
var state_19420__$1 = state_19420;
var statearr_19422_19562 = state_19420__$1;
(statearr_19422_19562[(2)] = null);

(statearr_19422_19562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19421 === (2))){
var state_19420__$1 = state_19420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19420__$1,(4),jobs);
} else {
if((state_val_19421 === (3))){
var inst_19418 = (state_19420[(2)]);
var state_19420__$1 = state_19420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19420__$1,inst_19418);
} else {
if((state_val_19421 === (4))){
var inst_19410 = (state_19420[(2)]);
var inst_19411 = async.call(null,inst_19410);
var state_19420__$1 = state_19420;
if(cljs.core.truth_(inst_19411)){
var statearr_19423_19563 = state_19420__$1;
(statearr_19423_19563[(1)] = (5));

} else {
var statearr_19424_19564 = state_19420__$1;
(statearr_19424_19564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19421 === (5))){
var state_19420__$1 = state_19420;
var statearr_19425_19565 = state_19420__$1;
(statearr_19425_19565[(2)] = null);

(statearr_19425_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19421 === (6))){
var state_19420__$1 = state_19420;
var statearr_19426_19566 = state_19420__$1;
(statearr_19426_19566[(2)] = null);

(statearr_19426_19566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19421 === (7))){
var inst_19416 = (state_19420[(2)]);
var state_19420__$1 = state_19420;
var statearr_19427_19567 = state_19420__$1;
(statearr_19427_19567[(2)] = inst_19416);

(statearr_19427_19567[(1)] = (3));


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
});})(__19549,c__18995__auto___19561,G__19380_19550,n__17729__auto___19548,jobs,results,process,async))
;
return ((function (__19549,switch__18883__auto__,c__18995__auto___19561,G__19380_19550,n__17729__auto___19548,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0 = (function (){
var statearr_19431 = [null,null,null,null,null,null,null];
(statearr_19431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__);

(statearr_19431[(1)] = (1));

return statearr_19431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1 = (function (state_19420){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19432){if((e19432 instanceof Object)){
var ex__18887__auto__ = e19432;
var statearr_19433_19568 = state_19420;
(statearr_19433_19568[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19569 = state_19420;
state_19420 = G__19569;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = function(state_19420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1.call(this,state_19420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__;
})()
;})(__19549,switch__18883__auto__,c__18995__auto___19561,G__19380_19550,n__17729__auto___19548,jobs,results,process,async))
})();
var state__18997__auto__ = (function (){var statearr_19434 = f__18996__auto__.call(null);
(statearr_19434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___19561);

return statearr_19434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(__19549,c__18995__auto___19561,G__19380_19550,n__17729__auto___19548,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19570 = (__19549 + (1));
__19549 = G__19570;
continue;
} else {
}
break;
}

var c__18995__auto___19571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___19571,jobs,results,process,async){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___19571,jobs,results,process,async){
return (function (state_19456){
var state_val_19457 = (state_19456[(1)]);
if((state_val_19457 === (1))){
var state_19456__$1 = state_19456;
var statearr_19458_19572 = state_19456__$1;
(statearr_19458_19572[(2)] = null);

(statearr_19458_19572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (2))){
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19456__$1,(4),from);
} else {
if((state_val_19457 === (3))){
var inst_19454 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19456__$1,inst_19454);
} else {
if((state_val_19457 === (4))){
var inst_19437 = (state_19456[(7)]);
var inst_19437__$1 = (state_19456[(2)]);
var inst_19438 = (inst_19437__$1 == null);
var state_19456__$1 = (function (){var statearr_19459 = state_19456;
(statearr_19459[(7)] = inst_19437__$1);

return statearr_19459;
})();
if(cljs.core.truth_(inst_19438)){
var statearr_19460_19573 = state_19456__$1;
(statearr_19460_19573[(1)] = (5));

} else {
var statearr_19461_19574 = state_19456__$1;
(statearr_19461_19574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (5))){
var inst_19440 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19456__$1 = state_19456;
var statearr_19462_19575 = state_19456__$1;
(statearr_19462_19575[(2)] = inst_19440);

(statearr_19462_19575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (6))){
var inst_19442 = (state_19456[(8)]);
var inst_19437 = (state_19456[(7)]);
var inst_19442__$1 = cljs.core.async.chan.call(null,(1));
var inst_19443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19444 = [inst_19437,inst_19442__$1];
var inst_19445 = (new cljs.core.PersistentVector(null,2,(5),inst_19443,inst_19444,null));
var state_19456__$1 = (function (){var statearr_19463 = state_19456;
(statearr_19463[(8)] = inst_19442__$1);

return statearr_19463;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19456__$1,(8),jobs,inst_19445);
} else {
if((state_val_19457 === (7))){
var inst_19452 = (state_19456[(2)]);
var state_19456__$1 = state_19456;
var statearr_19464_19576 = state_19456__$1;
(statearr_19464_19576[(2)] = inst_19452);

(statearr_19464_19576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19457 === (8))){
var inst_19442 = (state_19456[(8)]);
var inst_19447 = (state_19456[(2)]);
var state_19456__$1 = (function (){var statearr_19465 = state_19456;
(statearr_19465[(9)] = inst_19447);

return statearr_19465;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19456__$1,(9),results,inst_19442);
} else {
if((state_val_19457 === (9))){
var inst_19449 = (state_19456[(2)]);
var state_19456__$1 = (function (){var statearr_19466 = state_19456;
(statearr_19466[(10)] = inst_19449);

return statearr_19466;
})();
var statearr_19467_19577 = state_19456__$1;
(statearr_19467_19577[(2)] = null);

(statearr_19467_19577[(1)] = (2));


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
});})(c__18995__auto___19571,jobs,results,process,async))
;
return ((function (switch__18883__auto__,c__18995__auto___19571,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0 = (function (){
var statearr_19471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__);

(statearr_19471[(1)] = (1));

return statearr_19471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1 = (function (state_19456){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19472){if((e19472 instanceof Object)){
var ex__18887__auto__ = e19472;
var statearr_19473_19578 = state_19456;
(statearr_19473_19578[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19579 = state_19456;
state_19456 = G__19579;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = function(state_19456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1.call(this,state_19456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___19571,jobs,results,process,async))
})();
var state__18997__auto__ = (function (){var statearr_19474 = f__18996__auto__.call(null);
(statearr_19474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___19571);

return statearr_19474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___19571,jobs,results,process,async))
);


var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__,jobs,results,process,async){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__,jobs,results,process,async){
return (function (state_19512){
var state_val_19513 = (state_19512[(1)]);
if((state_val_19513 === (7))){
var inst_19508 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19514_19580 = state_19512__$1;
(statearr_19514_19580[(2)] = inst_19508);

(statearr_19514_19580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (20))){
var state_19512__$1 = state_19512;
var statearr_19515_19581 = state_19512__$1;
(statearr_19515_19581[(2)] = null);

(statearr_19515_19581[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (1))){
var state_19512__$1 = state_19512;
var statearr_19516_19582 = state_19512__$1;
(statearr_19516_19582[(2)] = null);

(statearr_19516_19582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (4))){
var inst_19477 = (state_19512[(7)]);
var inst_19477__$1 = (state_19512[(2)]);
var inst_19478 = (inst_19477__$1 == null);
var state_19512__$1 = (function (){var statearr_19517 = state_19512;
(statearr_19517[(7)] = inst_19477__$1);

return statearr_19517;
})();
if(cljs.core.truth_(inst_19478)){
var statearr_19518_19583 = state_19512__$1;
(statearr_19518_19583[(1)] = (5));

} else {
var statearr_19519_19584 = state_19512__$1;
(statearr_19519_19584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (15))){
var inst_19490 = (state_19512[(8)]);
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19512__$1,(18),to,inst_19490);
} else {
if((state_val_19513 === (21))){
var inst_19503 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19520_19585 = state_19512__$1;
(statearr_19520_19585[(2)] = inst_19503);

(statearr_19520_19585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (13))){
var inst_19505 = (state_19512[(2)]);
var state_19512__$1 = (function (){var statearr_19521 = state_19512;
(statearr_19521[(9)] = inst_19505);

return statearr_19521;
})();
var statearr_19522_19586 = state_19512__$1;
(statearr_19522_19586[(2)] = null);

(statearr_19522_19586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (6))){
var inst_19477 = (state_19512[(7)]);
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19512__$1,(11),inst_19477);
} else {
if((state_val_19513 === (17))){
var inst_19498 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
if(cljs.core.truth_(inst_19498)){
var statearr_19523_19587 = state_19512__$1;
(statearr_19523_19587[(1)] = (19));

} else {
var statearr_19524_19588 = state_19512__$1;
(statearr_19524_19588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (3))){
var inst_19510 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19512__$1,inst_19510);
} else {
if((state_val_19513 === (12))){
var inst_19487 = (state_19512[(10)]);
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19512__$1,(14),inst_19487);
} else {
if((state_val_19513 === (2))){
var state_19512__$1 = state_19512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19512__$1,(4),results);
} else {
if((state_val_19513 === (19))){
var state_19512__$1 = state_19512;
var statearr_19525_19589 = state_19512__$1;
(statearr_19525_19589[(2)] = null);

(statearr_19525_19589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (11))){
var inst_19487 = (state_19512[(2)]);
var state_19512__$1 = (function (){var statearr_19526 = state_19512;
(statearr_19526[(10)] = inst_19487);

return statearr_19526;
})();
var statearr_19527_19590 = state_19512__$1;
(statearr_19527_19590[(2)] = null);

(statearr_19527_19590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (9))){
var state_19512__$1 = state_19512;
var statearr_19528_19591 = state_19512__$1;
(statearr_19528_19591[(2)] = null);

(statearr_19528_19591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (5))){
var state_19512__$1 = state_19512;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19529_19592 = state_19512__$1;
(statearr_19529_19592[(1)] = (8));

} else {
var statearr_19530_19593 = state_19512__$1;
(statearr_19530_19593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (14))){
var inst_19492 = (state_19512[(11)]);
var inst_19490 = (state_19512[(8)]);
var inst_19490__$1 = (state_19512[(2)]);
var inst_19491 = (inst_19490__$1 == null);
var inst_19492__$1 = cljs.core.not.call(null,inst_19491);
var state_19512__$1 = (function (){var statearr_19531 = state_19512;
(statearr_19531[(11)] = inst_19492__$1);

(statearr_19531[(8)] = inst_19490__$1);

return statearr_19531;
})();
if(inst_19492__$1){
var statearr_19532_19594 = state_19512__$1;
(statearr_19532_19594[(1)] = (15));

} else {
var statearr_19533_19595 = state_19512__$1;
(statearr_19533_19595[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (16))){
var inst_19492 = (state_19512[(11)]);
var state_19512__$1 = state_19512;
var statearr_19534_19596 = state_19512__$1;
(statearr_19534_19596[(2)] = inst_19492);

(statearr_19534_19596[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (10))){
var inst_19484 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19535_19597 = state_19512__$1;
(statearr_19535_19597[(2)] = inst_19484);

(statearr_19535_19597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (18))){
var inst_19495 = (state_19512[(2)]);
var state_19512__$1 = state_19512;
var statearr_19536_19598 = state_19512__$1;
(statearr_19536_19598[(2)] = inst_19495);

(statearr_19536_19598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19513 === (8))){
var inst_19481 = cljs.core.async.close_BANG_.call(null,to);
var state_19512__$1 = state_19512;
var statearr_19537_19599 = state_19512__$1;
(statearr_19537_19599[(2)] = inst_19481);

(statearr_19537_19599[(1)] = (10));


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
});})(c__18995__auto__,jobs,results,process,async))
;
return ((function (switch__18883__auto__,c__18995__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0 = (function (){
var statearr_19541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19541[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__);

(statearr_19541[(1)] = (1));

return statearr_19541;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1 = (function (state_19512){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19542){if((e19542 instanceof Object)){
var ex__18887__auto__ = e19542;
var statearr_19543_19600 = state_19512;
(statearr_19543_19600[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19601 = state_19512;
state_19512 = G__19601;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__ = function(state_19512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1.call(this,state_19512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18884__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__,jobs,results,process,async))
})();
var state__18997__auto__ = (function (){var statearr_19544 = f__18996__auto__.call(null);
(statearr_19544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_19544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__,jobs,results,process,async))
);

return c__18995__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19602 = [];
var len__17884__auto___19605 = arguments.length;
var i__17885__auto___19606 = (0);
while(true){
if((i__17885__auto___19606 < len__17884__auto___19605)){
args19602.push((arguments[i__17885__auto___19606]));

var G__19607 = (i__17885__auto___19606 + (1));
i__17885__auto___19606 = G__19607;
continue;
} else {
}
break;
}

var G__19604 = args19602.length;
switch (G__19604) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19602.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19609 = [];
var len__17884__auto___19612 = arguments.length;
var i__17885__auto___19613 = (0);
while(true){
if((i__17885__auto___19613 < len__17884__auto___19612)){
args19609.push((arguments[i__17885__auto___19613]));

var G__19614 = (i__17885__auto___19613 + (1));
i__17885__auto___19613 = G__19614;
continue;
} else {
}
break;
}

var G__19611 = args19609.length;
switch (G__19611) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19609.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19616 = [];
var len__17884__auto___19669 = arguments.length;
var i__17885__auto___19670 = (0);
while(true){
if((i__17885__auto___19670 < len__17884__auto___19669)){
args19616.push((arguments[i__17885__auto___19670]));

var G__19671 = (i__17885__auto___19670 + (1));
i__17885__auto___19670 = G__19671;
continue;
} else {
}
break;
}

var G__19618 = args19616.length;
switch (G__19618) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19616.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18995__auto___19673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___19673,tc,fc){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___19673,tc,fc){
return (function (state_19644){
var state_val_19645 = (state_19644[(1)]);
if((state_val_19645 === (7))){
var inst_19640 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19646_19674 = state_19644__$1;
(statearr_19646_19674[(2)] = inst_19640);

(statearr_19646_19674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (1))){
var state_19644__$1 = state_19644;
var statearr_19647_19675 = state_19644__$1;
(statearr_19647_19675[(2)] = null);

(statearr_19647_19675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (4))){
var inst_19621 = (state_19644[(7)]);
var inst_19621__$1 = (state_19644[(2)]);
var inst_19622 = (inst_19621__$1 == null);
var state_19644__$1 = (function (){var statearr_19648 = state_19644;
(statearr_19648[(7)] = inst_19621__$1);

return statearr_19648;
})();
if(cljs.core.truth_(inst_19622)){
var statearr_19649_19676 = state_19644__$1;
(statearr_19649_19676[(1)] = (5));

} else {
var statearr_19650_19677 = state_19644__$1;
(statearr_19650_19677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (13))){
var state_19644__$1 = state_19644;
var statearr_19651_19678 = state_19644__$1;
(statearr_19651_19678[(2)] = null);

(statearr_19651_19678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (6))){
var inst_19621 = (state_19644[(7)]);
var inst_19627 = p.call(null,inst_19621);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19627)){
var statearr_19652_19679 = state_19644__$1;
(statearr_19652_19679[(1)] = (9));

} else {
var statearr_19653_19680 = state_19644__$1;
(statearr_19653_19680[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (3))){
var inst_19642 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19644__$1,inst_19642);
} else {
if((state_val_19645 === (12))){
var state_19644__$1 = state_19644;
var statearr_19654_19681 = state_19644__$1;
(statearr_19654_19681[(2)] = null);

(statearr_19654_19681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (2))){
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19644__$1,(4),ch);
} else {
if((state_val_19645 === (11))){
var inst_19621 = (state_19644[(7)]);
var inst_19631 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19644__$1,(8),inst_19631,inst_19621);
} else {
if((state_val_19645 === (9))){
var state_19644__$1 = state_19644;
var statearr_19655_19682 = state_19644__$1;
(statearr_19655_19682[(2)] = tc);

(statearr_19655_19682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (5))){
var inst_19624 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19625 = cljs.core.async.close_BANG_.call(null,fc);
var state_19644__$1 = (function (){var statearr_19656 = state_19644;
(statearr_19656[(8)] = inst_19624);

return statearr_19656;
})();
var statearr_19657_19683 = state_19644__$1;
(statearr_19657_19683[(2)] = inst_19625);

(statearr_19657_19683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (14))){
var inst_19638 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19658_19684 = state_19644__$1;
(statearr_19658_19684[(2)] = inst_19638);

(statearr_19658_19684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (10))){
var state_19644__$1 = state_19644;
var statearr_19659_19685 = state_19644__$1;
(statearr_19659_19685[(2)] = fc);

(statearr_19659_19685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (8))){
var inst_19633 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19633)){
var statearr_19660_19686 = state_19644__$1;
(statearr_19660_19686[(1)] = (12));

} else {
var statearr_19661_19687 = state_19644__$1;
(statearr_19661_19687[(1)] = (13));

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
});})(c__18995__auto___19673,tc,fc))
;
return ((function (switch__18883__auto__,c__18995__auto___19673,tc,fc){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_19665 = [null,null,null,null,null,null,null,null,null];
(statearr_19665[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_19665[(1)] = (1));

return statearr_19665;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_19644){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19666){if((e19666 instanceof Object)){
var ex__18887__auto__ = e19666;
var statearr_19667_19688 = state_19644;
(statearr_19667_19688[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19689 = state_19644;
state_19644 = G__19689;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_19644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_19644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___19673,tc,fc))
})();
var state__18997__auto__ = (function (){var statearr_19668 = f__18996__auto__.call(null);
(statearr_19668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___19673);

return statearr_19668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___19673,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__){
return (function (state_19753){
var state_val_19754 = (state_19753[(1)]);
if((state_val_19754 === (7))){
var inst_19749 = (state_19753[(2)]);
var state_19753__$1 = state_19753;
var statearr_19755_19776 = state_19753__$1;
(statearr_19755_19776[(2)] = inst_19749);

(statearr_19755_19776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19754 === (1))){
var inst_19733 = init;
var state_19753__$1 = (function (){var statearr_19756 = state_19753;
(statearr_19756[(7)] = inst_19733);

return statearr_19756;
})();
var statearr_19757_19777 = state_19753__$1;
(statearr_19757_19777[(2)] = null);

(statearr_19757_19777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19754 === (4))){
var inst_19736 = (state_19753[(8)]);
var inst_19736__$1 = (state_19753[(2)]);
var inst_19737 = (inst_19736__$1 == null);
var state_19753__$1 = (function (){var statearr_19758 = state_19753;
(statearr_19758[(8)] = inst_19736__$1);

return statearr_19758;
})();
if(cljs.core.truth_(inst_19737)){
var statearr_19759_19778 = state_19753__$1;
(statearr_19759_19778[(1)] = (5));

} else {
var statearr_19760_19779 = state_19753__$1;
(statearr_19760_19779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19754 === (6))){
var inst_19740 = (state_19753[(9)]);
var inst_19733 = (state_19753[(7)]);
var inst_19736 = (state_19753[(8)]);
var inst_19740__$1 = f.call(null,inst_19733,inst_19736);
var inst_19741 = cljs.core.reduced_QMARK_.call(null,inst_19740__$1);
var state_19753__$1 = (function (){var statearr_19761 = state_19753;
(statearr_19761[(9)] = inst_19740__$1);

return statearr_19761;
})();
if(inst_19741){
var statearr_19762_19780 = state_19753__$1;
(statearr_19762_19780[(1)] = (8));

} else {
var statearr_19763_19781 = state_19753__$1;
(statearr_19763_19781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19754 === (3))){
var inst_19751 = (state_19753[(2)]);
var state_19753__$1 = state_19753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19753__$1,inst_19751);
} else {
if((state_val_19754 === (2))){
var state_19753__$1 = state_19753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19753__$1,(4),ch);
} else {
if((state_val_19754 === (9))){
var inst_19740 = (state_19753[(9)]);
var inst_19733 = inst_19740;
var state_19753__$1 = (function (){var statearr_19764 = state_19753;
(statearr_19764[(7)] = inst_19733);

return statearr_19764;
})();
var statearr_19765_19782 = state_19753__$1;
(statearr_19765_19782[(2)] = null);

(statearr_19765_19782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19754 === (5))){
var inst_19733 = (state_19753[(7)]);
var state_19753__$1 = state_19753;
var statearr_19766_19783 = state_19753__$1;
(statearr_19766_19783[(2)] = inst_19733);

(statearr_19766_19783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19754 === (10))){
var inst_19747 = (state_19753[(2)]);
var state_19753__$1 = state_19753;
var statearr_19767_19784 = state_19753__$1;
(statearr_19767_19784[(2)] = inst_19747);

(statearr_19767_19784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19754 === (8))){
var inst_19740 = (state_19753[(9)]);
var inst_19743 = cljs.core.deref.call(null,inst_19740);
var state_19753__$1 = state_19753;
var statearr_19768_19785 = state_19753__$1;
(statearr_19768_19785[(2)] = inst_19743);

(statearr_19768_19785[(1)] = (10));


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
});})(c__18995__auto__))
;
return ((function (switch__18883__auto__,c__18995__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18884__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18884__auto____0 = (function (){
var statearr_19772 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19772[(0)] = cljs$core$async$reduce_$_state_machine__18884__auto__);

(statearr_19772[(1)] = (1));

return statearr_19772;
});
var cljs$core$async$reduce_$_state_machine__18884__auto____1 = (function (state_19753){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19773){if((e19773 instanceof Object)){
var ex__18887__auto__ = e19773;
var statearr_19774_19786 = state_19753;
(statearr_19774_19786[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19787 = state_19753;
state_19753 = G__19787;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18884__auto__ = function(state_19753){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18884__auto____1.call(this,state_19753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18884__auto____0;
cljs$core$async$reduce_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18884__auto____1;
return cljs$core$async$reduce_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__))
})();
var state__18997__auto__ = (function (){var statearr_19775 = f__18996__auto__.call(null);
(statearr_19775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_19775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__))
);

return c__18995__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19788 = [];
var len__17884__auto___19840 = arguments.length;
var i__17885__auto___19841 = (0);
while(true){
if((i__17885__auto___19841 < len__17884__auto___19840)){
args19788.push((arguments[i__17885__auto___19841]));

var G__19842 = (i__17885__auto___19841 + (1));
i__17885__auto___19841 = G__19842;
continue;
} else {
}
break;
}

var G__19790 = args19788.length;
switch (G__19790) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19788.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__){
return (function (state_19815){
var state_val_19816 = (state_19815[(1)]);
if((state_val_19816 === (7))){
var inst_19797 = (state_19815[(2)]);
var state_19815__$1 = state_19815;
var statearr_19817_19844 = state_19815__$1;
(statearr_19817_19844[(2)] = inst_19797);

(statearr_19817_19844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (1))){
var inst_19791 = cljs.core.seq.call(null,coll);
var inst_19792 = inst_19791;
var state_19815__$1 = (function (){var statearr_19818 = state_19815;
(statearr_19818[(7)] = inst_19792);

return statearr_19818;
})();
var statearr_19819_19845 = state_19815__$1;
(statearr_19819_19845[(2)] = null);

(statearr_19819_19845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (4))){
var inst_19792 = (state_19815[(7)]);
var inst_19795 = cljs.core.first.call(null,inst_19792);
var state_19815__$1 = state_19815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19815__$1,(7),ch,inst_19795);
} else {
if((state_val_19816 === (13))){
var inst_19809 = (state_19815[(2)]);
var state_19815__$1 = state_19815;
var statearr_19820_19846 = state_19815__$1;
(statearr_19820_19846[(2)] = inst_19809);

(statearr_19820_19846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (6))){
var inst_19800 = (state_19815[(2)]);
var state_19815__$1 = state_19815;
if(cljs.core.truth_(inst_19800)){
var statearr_19821_19847 = state_19815__$1;
(statearr_19821_19847[(1)] = (8));

} else {
var statearr_19822_19848 = state_19815__$1;
(statearr_19822_19848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (3))){
var inst_19813 = (state_19815[(2)]);
var state_19815__$1 = state_19815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19815__$1,inst_19813);
} else {
if((state_val_19816 === (12))){
var state_19815__$1 = state_19815;
var statearr_19823_19849 = state_19815__$1;
(statearr_19823_19849[(2)] = null);

(statearr_19823_19849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (2))){
var inst_19792 = (state_19815[(7)]);
var state_19815__$1 = state_19815;
if(cljs.core.truth_(inst_19792)){
var statearr_19824_19850 = state_19815__$1;
(statearr_19824_19850[(1)] = (4));

} else {
var statearr_19825_19851 = state_19815__$1;
(statearr_19825_19851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (11))){
var inst_19806 = cljs.core.async.close_BANG_.call(null,ch);
var state_19815__$1 = state_19815;
var statearr_19826_19852 = state_19815__$1;
(statearr_19826_19852[(2)] = inst_19806);

(statearr_19826_19852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (9))){
var state_19815__$1 = state_19815;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19827_19853 = state_19815__$1;
(statearr_19827_19853[(1)] = (11));

} else {
var statearr_19828_19854 = state_19815__$1;
(statearr_19828_19854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (5))){
var inst_19792 = (state_19815[(7)]);
var state_19815__$1 = state_19815;
var statearr_19829_19855 = state_19815__$1;
(statearr_19829_19855[(2)] = inst_19792);

(statearr_19829_19855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (10))){
var inst_19811 = (state_19815[(2)]);
var state_19815__$1 = state_19815;
var statearr_19830_19856 = state_19815__$1;
(statearr_19830_19856[(2)] = inst_19811);

(statearr_19830_19856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19816 === (8))){
var inst_19792 = (state_19815[(7)]);
var inst_19802 = cljs.core.next.call(null,inst_19792);
var inst_19792__$1 = inst_19802;
var state_19815__$1 = (function (){var statearr_19831 = state_19815;
(statearr_19831[(7)] = inst_19792__$1);

return statearr_19831;
})();
var statearr_19832_19857 = state_19815__$1;
(statearr_19832_19857[(2)] = null);

(statearr_19832_19857[(1)] = (2));


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
});})(c__18995__auto__))
;
return ((function (switch__18883__auto__,c__18995__auto__){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_19836 = [null,null,null,null,null,null,null,null];
(statearr_19836[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_19836[(1)] = (1));

return statearr_19836;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_19815){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_19815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e19837){if((e19837 instanceof Object)){
var ex__18887__auto__ = e19837;
var statearr_19838_19858 = state_19815;
(statearr_19838_19858[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19859 = state_19815;
state_19815 = G__19859;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_19815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_19815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__))
})();
var state__18997__auto__ = (function (){var statearr_19839 = f__18996__auto__.call(null);
(statearr_19839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_19839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__))
);

return c__18995__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20081 = (function (mult,ch,cs,meta20082){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20082 = meta20082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20083,meta20082__$1){
var self__ = this;
var _20083__$1 = this;
return (new cljs.core.async.t_cljs$core$async20081(self__.mult,self__.ch,self__.cs,meta20082__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20083){
var self__ = this;
var _20083__$1 = this;
return self__.meta20082;
});})(cs))
;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20081.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20081.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20082","meta20082",290181422,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20081";

cljs.core.async.t_cljs$core$async20081.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20081");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20081 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20081(mult__$1,ch__$1,cs__$1,meta20082){
return (new cljs.core.async.t_cljs$core$async20081(mult__$1,ch__$1,cs__$1,meta20082));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20081(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18995__auto___20302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___20302,cs,m,dchan,dctr,done){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___20302,cs,m,dchan,dctr,done){
return (function (state_20214){
var state_val_20215 = (state_20214[(1)]);
if((state_val_20215 === (7))){
var inst_20210 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20216_20303 = state_20214__$1;
(statearr_20216_20303[(2)] = inst_20210);

(statearr_20216_20303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (20))){
var inst_20115 = (state_20214[(7)]);
var inst_20125 = cljs.core.first.call(null,inst_20115);
var inst_20126 = cljs.core.nth.call(null,inst_20125,(0),null);
var inst_20127 = cljs.core.nth.call(null,inst_20125,(1),null);
var state_20214__$1 = (function (){var statearr_20217 = state_20214;
(statearr_20217[(8)] = inst_20126);

return statearr_20217;
})();
if(cljs.core.truth_(inst_20127)){
var statearr_20218_20304 = state_20214__$1;
(statearr_20218_20304[(1)] = (22));

} else {
var statearr_20219_20305 = state_20214__$1;
(statearr_20219_20305[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (27))){
var inst_20162 = (state_20214[(9)]);
var inst_20157 = (state_20214[(10)]);
var inst_20086 = (state_20214[(11)]);
var inst_20155 = (state_20214[(12)]);
var inst_20162__$1 = cljs.core._nth.call(null,inst_20155,inst_20157);
var inst_20163 = cljs.core.async.put_BANG_.call(null,inst_20162__$1,inst_20086,done);
var state_20214__$1 = (function (){var statearr_20220 = state_20214;
(statearr_20220[(9)] = inst_20162__$1);

return statearr_20220;
})();
if(cljs.core.truth_(inst_20163)){
var statearr_20221_20306 = state_20214__$1;
(statearr_20221_20306[(1)] = (30));

} else {
var statearr_20222_20307 = state_20214__$1;
(statearr_20222_20307[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (1))){
var state_20214__$1 = state_20214;
var statearr_20223_20308 = state_20214__$1;
(statearr_20223_20308[(2)] = null);

(statearr_20223_20308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (24))){
var inst_20115 = (state_20214[(7)]);
var inst_20132 = (state_20214[(2)]);
var inst_20133 = cljs.core.next.call(null,inst_20115);
var inst_20095 = inst_20133;
var inst_20096 = null;
var inst_20097 = (0);
var inst_20098 = (0);
var state_20214__$1 = (function (){var statearr_20224 = state_20214;
(statearr_20224[(13)] = inst_20097);

(statearr_20224[(14)] = inst_20132);

(statearr_20224[(15)] = inst_20096);

(statearr_20224[(16)] = inst_20098);

(statearr_20224[(17)] = inst_20095);

return statearr_20224;
})();
var statearr_20225_20309 = state_20214__$1;
(statearr_20225_20309[(2)] = null);

(statearr_20225_20309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (39))){
var state_20214__$1 = state_20214;
var statearr_20229_20310 = state_20214__$1;
(statearr_20229_20310[(2)] = null);

(statearr_20229_20310[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (4))){
var inst_20086 = (state_20214[(11)]);
var inst_20086__$1 = (state_20214[(2)]);
var inst_20087 = (inst_20086__$1 == null);
var state_20214__$1 = (function (){var statearr_20230 = state_20214;
(statearr_20230[(11)] = inst_20086__$1);

return statearr_20230;
})();
if(cljs.core.truth_(inst_20087)){
var statearr_20231_20311 = state_20214__$1;
(statearr_20231_20311[(1)] = (5));

} else {
var statearr_20232_20312 = state_20214__$1;
(statearr_20232_20312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (15))){
var inst_20097 = (state_20214[(13)]);
var inst_20096 = (state_20214[(15)]);
var inst_20098 = (state_20214[(16)]);
var inst_20095 = (state_20214[(17)]);
var inst_20111 = (state_20214[(2)]);
var inst_20112 = (inst_20098 + (1));
var tmp20226 = inst_20097;
var tmp20227 = inst_20096;
var tmp20228 = inst_20095;
var inst_20095__$1 = tmp20228;
var inst_20096__$1 = tmp20227;
var inst_20097__$1 = tmp20226;
var inst_20098__$1 = inst_20112;
var state_20214__$1 = (function (){var statearr_20233 = state_20214;
(statearr_20233[(18)] = inst_20111);

(statearr_20233[(13)] = inst_20097__$1);

(statearr_20233[(15)] = inst_20096__$1);

(statearr_20233[(16)] = inst_20098__$1);

(statearr_20233[(17)] = inst_20095__$1);

return statearr_20233;
})();
var statearr_20234_20313 = state_20214__$1;
(statearr_20234_20313[(2)] = null);

(statearr_20234_20313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (21))){
var inst_20136 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20238_20314 = state_20214__$1;
(statearr_20238_20314[(2)] = inst_20136);

(statearr_20238_20314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (31))){
var inst_20162 = (state_20214[(9)]);
var inst_20166 = done.call(null,null);
var inst_20167 = cljs.core.async.untap_STAR_.call(null,m,inst_20162);
var state_20214__$1 = (function (){var statearr_20239 = state_20214;
(statearr_20239[(19)] = inst_20166);

return statearr_20239;
})();
var statearr_20240_20315 = state_20214__$1;
(statearr_20240_20315[(2)] = inst_20167);

(statearr_20240_20315[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (32))){
var inst_20156 = (state_20214[(20)]);
var inst_20157 = (state_20214[(10)]);
var inst_20155 = (state_20214[(12)]);
var inst_20154 = (state_20214[(21)]);
var inst_20169 = (state_20214[(2)]);
var inst_20170 = (inst_20157 + (1));
var tmp20235 = inst_20156;
var tmp20236 = inst_20155;
var tmp20237 = inst_20154;
var inst_20154__$1 = tmp20237;
var inst_20155__$1 = tmp20236;
var inst_20156__$1 = tmp20235;
var inst_20157__$1 = inst_20170;
var state_20214__$1 = (function (){var statearr_20241 = state_20214;
(statearr_20241[(20)] = inst_20156__$1);

(statearr_20241[(10)] = inst_20157__$1);

(statearr_20241[(22)] = inst_20169);

(statearr_20241[(12)] = inst_20155__$1);

(statearr_20241[(21)] = inst_20154__$1);

return statearr_20241;
})();
var statearr_20242_20316 = state_20214__$1;
(statearr_20242_20316[(2)] = null);

(statearr_20242_20316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (40))){
var inst_20182 = (state_20214[(23)]);
var inst_20186 = done.call(null,null);
var inst_20187 = cljs.core.async.untap_STAR_.call(null,m,inst_20182);
var state_20214__$1 = (function (){var statearr_20243 = state_20214;
(statearr_20243[(24)] = inst_20186);

return statearr_20243;
})();
var statearr_20244_20317 = state_20214__$1;
(statearr_20244_20317[(2)] = inst_20187);

(statearr_20244_20317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (33))){
var inst_20173 = (state_20214[(25)]);
var inst_20175 = cljs.core.chunked_seq_QMARK_.call(null,inst_20173);
var state_20214__$1 = state_20214;
if(inst_20175){
var statearr_20245_20318 = state_20214__$1;
(statearr_20245_20318[(1)] = (36));

} else {
var statearr_20246_20319 = state_20214__$1;
(statearr_20246_20319[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (13))){
var inst_20105 = (state_20214[(26)]);
var inst_20108 = cljs.core.async.close_BANG_.call(null,inst_20105);
var state_20214__$1 = state_20214;
var statearr_20247_20320 = state_20214__$1;
(statearr_20247_20320[(2)] = inst_20108);

(statearr_20247_20320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (22))){
var inst_20126 = (state_20214[(8)]);
var inst_20129 = cljs.core.async.close_BANG_.call(null,inst_20126);
var state_20214__$1 = state_20214;
var statearr_20248_20321 = state_20214__$1;
(statearr_20248_20321[(2)] = inst_20129);

(statearr_20248_20321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (36))){
var inst_20173 = (state_20214[(25)]);
var inst_20177 = cljs.core.chunk_first.call(null,inst_20173);
var inst_20178 = cljs.core.chunk_rest.call(null,inst_20173);
var inst_20179 = cljs.core.count.call(null,inst_20177);
var inst_20154 = inst_20178;
var inst_20155 = inst_20177;
var inst_20156 = inst_20179;
var inst_20157 = (0);
var state_20214__$1 = (function (){var statearr_20249 = state_20214;
(statearr_20249[(20)] = inst_20156);

(statearr_20249[(10)] = inst_20157);

(statearr_20249[(12)] = inst_20155);

(statearr_20249[(21)] = inst_20154);

return statearr_20249;
})();
var statearr_20250_20322 = state_20214__$1;
(statearr_20250_20322[(2)] = null);

(statearr_20250_20322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (41))){
var inst_20173 = (state_20214[(25)]);
var inst_20189 = (state_20214[(2)]);
var inst_20190 = cljs.core.next.call(null,inst_20173);
var inst_20154 = inst_20190;
var inst_20155 = null;
var inst_20156 = (0);
var inst_20157 = (0);
var state_20214__$1 = (function (){var statearr_20251 = state_20214;
(statearr_20251[(20)] = inst_20156);

(statearr_20251[(10)] = inst_20157);

(statearr_20251[(12)] = inst_20155);

(statearr_20251[(21)] = inst_20154);

(statearr_20251[(27)] = inst_20189);

return statearr_20251;
})();
var statearr_20252_20323 = state_20214__$1;
(statearr_20252_20323[(2)] = null);

(statearr_20252_20323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (43))){
var state_20214__$1 = state_20214;
var statearr_20253_20324 = state_20214__$1;
(statearr_20253_20324[(2)] = null);

(statearr_20253_20324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (29))){
var inst_20198 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20254_20325 = state_20214__$1;
(statearr_20254_20325[(2)] = inst_20198);

(statearr_20254_20325[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (44))){
var inst_20207 = (state_20214[(2)]);
var state_20214__$1 = (function (){var statearr_20255 = state_20214;
(statearr_20255[(28)] = inst_20207);

return statearr_20255;
})();
var statearr_20256_20326 = state_20214__$1;
(statearr_20256_20326[(2)] = null);

(statearr_20256_20326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (6))){
var inst_20146 = (state_20214[(29)]);
var inst_20145 = cljs.core.deref.call(null,cs);
var inst_20146__$1 = cljs.core.keys.call(null,inst_20145);
var inst_20147 = cljs.core.count.call(null,inst_20146__$1);
var inst_20148 = cljs.core.reset_BANG_.call(null,dctr,inst_20147);
var inst_20153 = cljs.core.seq.call(null,inst_20146__$1);
var inst_20154 = inst_20153;
var inst_20155 = null;
var inst_20156 = (0);
var inst_20157 = (0);
var state_20214__$1 = (function (){var statearr_20257 = state_20214;
(statearr_20257[(20)] = inst_20156);

(statearr_20257[(29)] = inst_20146__$1);

(statearr_20257[(30)] = inst_20148);

(statearr_20257[(10)] = inst_20157);

(statearr_20257[(12)] = inst_20155);

(statearr_20257[(21)] = inst_20154);

return statearr_20257;
})();
var statearr_20258_20327 = state_20214__$1;
(statearr_20258_20327[(2)] = null);

(statearr_20258_20327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (28))){
var inst_20173 = (state_20214[(25)]);
var inst_20154 = (state_20214[(21)]);
var inst_20173__$1 = cljs.core.seq.call(null,inst_20154);
var state_20214__$1 = (function (){var statearr_20259 = state_20214;
(statearr_20259[(25)] = inst_20173__$1);

return statearr_20259;
})();
if(inst_20173__$1){
var statearr_20260_20328 = state_20214__$1;
(statearr_20260_20328[(1)] = (33));

} else {
var statearr_20261_20329 = state_20214__$1;
(statearr_20261_20329[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (25))){
var inst_20156 = (state_20214[(20)]);
var inst_20157 = (state_20214[(10)]);
var inst_20159 = (inst_20157 < inst_20156);
var inst_20160 = inst_20159;
var state_20214__$1 = state_20214;
if(cljs.core.truth_(inst_20160)){
var statearr_20262_20330 = state_20214__$1;
(statearr_20262_20330[(1)] = (27));

} else {
var statearr_20263_20331 = state_20214__$1;
(statearr_20263_20331[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (34))){
var state_20214__$1 = state_20214;
var statearr_20264_20332 = state_20214__$1;
(statearr_20264_20332[(2)] = null);

(statearr_20264_20332[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (17))){
var state_20214__$1 = state_20214;
var statearr_20265_20333 = state_20214__$1;
(statearr_20265_20333[(2)] = null);

(statearr_20265_20333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (3))){
var inst_20212 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20214__$1,inst_20212);
} else {
if((state_val_20215 === (12))){
var inst_20141 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20266_20334 = state_20214__$1;
(statearr_20266_20334[(2)] = inst_20141);

(statearr_20266_20334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (2))){
var state_20214__$1 = state_20214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20214__$1,(4),ch);
} else {
if((state_val_20215 === (23))){
var state_20214__$1 = state_20214;
var statearr_20267_20335 = state_20214__$1;
(statearr_20267_20335[(2)] = null);

(statearr_20267_20335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (35))){
var inst_20196 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20268_20336 = state_20214__$1;
(statearr_20268_20336[(2)] = inst_20196);

(statearr_20268_20336[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (19))){
var inst_20115 = (state_20214[(7)]);
var inst_20119 = cljs.core.chunk_first.call(null,inst_20115);
var inst_20120 = cljs.core.chunk_rest.call(null,inst_20115);
var inst_20121 = cljs.core.count.call(null,inst_20119);
var inst_20095 = inst_20120;
var inst_20096 = inst_20119;
var inst_20097 = inst_20121;
var inst_20098 = (0);
var state_20214__$1 = (function (){var statearr_20269 = state_20214;
(statearr_20269[(13)] = inst_20097);

(statearr_20269[(15)] = inst_20096);

(statearr_20269[(16)] = inst_20098);

(statearr_20269[(17)] = inst_20095);

return statearr_20269;
})();
var statearr_20270_20337 = state_20214__$1;
(statearr_20270_20337[(2)] = null);

(statearr_20270_20337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (11))){
var inst_20115 = (state_20214[(7)]);
var inst_20095 = (state_20214[(17)]);
var inst_20115__$1 = cljs.core.seq.call(null,inst_20095);
var state_20214__$1 = (function (){var statearr_20271 = state_20214;
(statearr_20271[(7)] = inst_20115__$1);

return statearr_20271;
})();
if(inst_20115__$1){
var statearr_20272_20338 = state_20214__$1;
(statearr_20272_20338[(1)] = (16));

} else {
var statearr_20273_20339 = state_20214__$1;
(statearr_20273_20339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (9))){
var inst_20143 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20274_20340 = state_20214__$1;
(statearr_20274_20340[(2)] = inst_20143);

(statearr_20274_20340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (5))){
var inst_20093 = cljs.core.deref.call(null,cs);
var inst_20094 = cljs.core.seq.call(null,inst_20093);
var inst_20095 = inst_20094;
var inst_20096 = null;
var inst_20097 = (0);
var inst_20098 = (0);
var state_20214__$1 = (function (){var statearr_20275 = state_20214;
(statearr_20275[(13)] = inst_20097);

(statearr_20275[(15)] = inst_20096);

(statearr_20275[(16)] = inst_20098);

(statearr_20275[(17)] = inst_20095);

return statearr_20275;
})();
var statearr_20276_20341 = state_20214__$1;
(statearr_20276_20341[(2)] = null);

(statearr_20276_20341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (14))){
var state_20214__$1 = state_20214;
var statearr_20277_20342 = state_20214__$1;
(statearr_20277_20342[(2)] = null);

(statearr_20277_20342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (45))){
var inst_20204 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20278_20343 = state_20214__$1;
(statearr_20278_20343[(2)] = inst_20204);

(statearr_20278_20343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (26))){
var inst_20146 = (state_20214[(29)]);
var inst_20200 = (state_20214[(2)]);
var inst_20201 = cljs.core.seq.call(null,inst_20146);
var state_20214__$1 = (function (){var statearr_20279 = state_20214;
(statearr_20279[(31)] = inst_20200);

return statearr_20279;
})();
if(inst_20201){
var statearr_20280_20344 = state_20214__$1;
(statearr_20280_20344[(1)] = (42));

} else {
var statearr_20281_20345 = state_20214__$1;
(statearr_20281_20345[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (16))){
var inst_20115 = (state_20214[(7)]);
var inst_20117 = cljs.core.chunked_seq_QMARK_.call(null,inst_20115);
var state_20214__$1 = state_20214;
if(inst_20117){
var statearr_20282_20346 = state_20214__$1;
(statearr_20282_20346[(1)] = (19));

} else {
var statearr_20283_20347 = state_20214__$1;
(statearr_20283_20347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (38))){
var inst_20193 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20284_20348 = state_20214__$1;
(statearr_20284_20348[(2)] = inst_20193);

(statearr_20284_20348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (30))){
var state_20214__$1 = state_20214;
var statearr_20285_20349 = state_20214__$1;
(statearr_20285_20349[(2)] = null);

(statearr_20285_20349[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (10))){
var inst_20096 = (state_20214[(15)]);
var inst_20098 = (state_20214[(16)]);
var inst_20104 = cljs.core._nth.call(null,inst_20096,inst_20098);
var inst_20105 = cljs.core.nth.call(null,inst_20104,(0),null);
var inst_20106 = cljs.core.nth.call(null,inst_20104,(1),null);
var state_20214__$1 = (function (){var statearr_20286 = state_20214;
(statearr_20286[(26)] = inst_20105);

return statearr_20286;
})();
if(cljs.core.truth_(inst_20106)){
var statearr_20287_20350 = state_20214__$1;
(statearr_20287_20350[(1)] = (13));

} else {
var statearr_20288_20351 = state_20214__$1;
(statearr_20288_20351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (18))){
var inst_20139 = (state_20214[(2)]);
var state_20214__$1 = state_20214;
var statearr_20289_20352 = state_20214__$1;
(statearr_20289_20352[(2)] = inst_20139);

(statearr_20289_20352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (42))){
var state_20214__$1 = state_20214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20214__$1,(45),dchan);
} else {
if((state_val_20215 === (37))){
var inst_20182 = (state_20214[(23)]);
var inst_20173 = (state_20214[(25)]);
var inst_20086 = (state_20214[(11)]);
var inst_20182__$1 = cljs.core.first.call(null,inst_20173);
var inst_20183 = cljs.core.async.put_BANG_.call(null,inst_20182__$1,inst_20086,done);
var state_20214__$1 = (function (){var statearr_20290 = state_20214;
(statearr_20290[(23)] = inst_20182__$1);

return statearr_20290;
})();
if(cljs.core.truth_(inst_20183)){
var statearr_20291_20353 = state_20214__$1;
(statearr_20291_20353[(1)] = (39));

} else {
var statearr_20292_20354 = state_20214__$1;
(statearr_20292_20354[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20215 === (8))){
var inst_20097 = (state_20214[(13)]);
var inst_20098 = (state_20214[(16)]);
var inst_20100 = (inst_20098 < inst_20097);
var inst_20101 = inst_20100;
var state_20214__$1 = state_20214;
if(cljs.core.truth_(inst_20101)){
var statearr_20293_20355 = state_20214__$1;
(statearr_20293_20355[(1)] = (10));

} else {
var statearr_20294_20356 = state_20214__$1;
(statearr_20294_20356[(1)] = (11));

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
});})(c__18995__auto___20302,cs,m,dchan,dctr,done))
;
return ((function (switch__18883__auto__,c__18995__auto___20302,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18884__auto__ = null;
var cljs$core$async$mult_$_state_machine__18884__auto____0 = (function (){
var statearr_20298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20298[(0)] = cljs$core$async$mult_$_state_machine__18884__auto__);

(statearr_20298[(1)] = (1));

return statearr_20298;
});
var cljs$core$async$mult_$_state_machine__18884__auto____1 = (function (state_20214){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_20214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e20299){if((e20299 instanceof Object)){
var ex__18887__auto__ = e20299;
var statearr_20300_20357 = state_20214;
(statearr_20300_20357[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20358 = state_20214;
state_20214 = G__20358;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18884__auto__ = function(state_20214){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18884__auto____1.call(this,state_20214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18884__auto____0;
cljs$core$async$mult_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18884__auto____1;
return cljs$core$async$mult_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___20302,cs,m,dchan,dctr,done))
})();
var state__18997__auto__ = (function (){var statearr_20301 = f__18996__auto__.call(null);
(statearr_20301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___20302);

return statearr_20301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___20302,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20359 = [];
var len__17884__auto___20362 = arguments.length;
var i__17885__auto___20363 = (0);
while(true){
if((i__17885__auto___20363 < len__17884__auto___20362)){
args20359.push((arguments[i__17885__auto___20363]));

var G__20364 = (i__17885__auto___20363 + (1));
i__17885__auto___20363 = G__20364;
continue;
} else {
}
break;
}

var G__20361 = args20359.length;
switch (G__20361) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20359.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___20376 = arguments.length;
var i__17885__auto___20377 = (0);
while(true){
if((i__17885__auto___20377 < len__17884__auto___20376)){
args__17891__auto__.push((arguments[i__17885__auto___20377]));

var G__20378 = (i__17885__auto___20377 + (1));
i__17885__auto___20377 = G__20378;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20370){
var map__20371 = p__20370;
var map__20371__$1 = ((((!((map__20371 == null)))?((((map__20371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20371):map__20371);
var opts = map__20371__$1;
var statearr_20373_20379 = state;
(statearr_20373_20379[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20371,map__20371__$1,opts){
return (function (val){
var statearr_20374_20380 = state;
(statearr_20374_20380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20371,map__20371__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20375_20381 = state;
(statearr_20375_20381[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20366){
var G__20367 = cljs.core.first.call(null,seq20366);
var seq20366__$1 = cljs.core.next.call(null,seq20366);
var G__20368 = cljs.core.first.call(null,seq20366__$1);
var seq20366__$2 = cljs.core.next.call(null,seq20366__$1);
var G__20369 = cljs.core.first.call(null,seq20366__$2);
var seq20366__$3 = cljs.core.next.call(null,seq20366__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20367,G__20368,G__20369,seq20366__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20545 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20546){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20546 = meta20546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20547,meta20546__$1){
var self__ = this;
var _20547__$1 = this;
return (new cljs.core.async.t_cljs$core$async20545(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20546__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20547){
var self__ = this;
var _20547__$1 = this;
return self__.meta20546;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20546","meta20546",-504457579,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20545";

cljs.core.async.t_cljs$core$async20545.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20545");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20545 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20545(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20546){
return (new cljs.core.async.t_cljs$core$async20545(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20546));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20545(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18995__auto___20708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20645){
var state_val_20646 = (state_20645[(1)]);
if((state_val_20646 === (7))){
var inst_20563 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20647_20709 = state_20645__$1;
(statearr_20647_20709[(2)] = inst_20563);

(statearr_20647_20709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (20))){
var inst_20575 = (state_20645[(7)]);
var state_20645__$1 = state_20645;
var statearr_20648_20710 = state_20645__$1;
(statearr_20648_20710[(2)] = inst_20575);

(statearr_20648_20710[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (27))){
var state_20645__$1 = state_20645;
var statearr_20649_20711 = state_20645__$1;
(statearr_20649_20711[(2)] = null);

(statearr_20649_20711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (1))){
var inst_20551 = (state_20645[(8)]);
var inst_20551__$1 = calc_state.call(null);
var inst_20553 = (inst_20551__$1 == null);
var inst_20554 = cljs.core.not.call(null,inst_20553);
var state_20645__$1 = (function (){var statearr_20650 = state_20645;
(statearr_20650[(8)] = inst_20551__$1);

return statearr_20650;
})();
if(inst_20554){
var statearr_20651_20712 = state_20645__$1;
(statearr_20651_20712[(1)] = (2));

} else {
var statearr_20652_20713 = state_20645__$1;
(statearr_20652_20713[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (24))){
var inst_20605 = (state_20645[(9)]);
var inst_20619 = (state_20645[(10)]);
var inst_20598 = (state_20645[(11)]);
var inst_20619__$1 = inst_20598.call(null,inst_20605);
var state_20645__$1 = (function (){var statearr_20653 = state_20645;
(statearr_20653[(10)] = inst_20619__$1);

return statearr_20653;
})();
if(cljs.core.truth_(inst_20619__$1)){
var statearr_20654_20714 = state_20645__$1;
(statearr_20654_20714[(1)] = (29));

} else {
var statearr_20655_20715 = state_20645__$1;
(statearr_20655_20715[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (4))){
var inst_20566 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20566)){
var statearr_20656_20716 = state_20645__$1;
(statearr_20656_20716[(1)] = (8));

} else {
var statearr_20657_20717 = state_20645__$1;
(statearr_20657_20717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (15))){
var inst_20592 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20592)){
var statearr_20658_20718 = state_20645__$1;
(statearr_20658_20718[(1)] = (19));

} else {
var statearr_20659_20719 = state_20645__$1;
(statearr_20659_20719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (21))){
var inst_20597 = (state_20645[(12)]);
var inst_20597__$1 = (state_20645[(2)]);
var inst_20598 = cljs.core.get.call(null,inst_20597__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20599 = cljs.core.get.call(null,inst_20597__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20600 = cljs.core.get.call(null,inst_20597__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20645__$1 = (function (){var statearr_20660 = state_20645;
(statearr_20660[(13)] = inst_20599);

(statearr_20660[(12)] = inst_20597__$1);

(statearr_20660[(11)] = inst_20598);

return statearr_20660;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20645__$1,(22),inst_20600);
} else {
if((state_val_20646 === (31))){
var inst_20627 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20627)){
var statearr_20661_20720 = state_20645__$1;
(statearr_20661_20720[(1)] = (32));

} else {
var statearr_20662_20721 = state_20645__$1;
(statearr_20662_20721[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (32))){
var inst_20604 = (state_20645[(14)]);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20645__$1,(35),out,inst_20604);
} else {
if((state_val_20646 === (33))){
var inst_20597 = (state_20645[(12)]);
var inst_20575 = inst_20597;
var state_20645__$1 = (function (){var statearr_20663 = state_20645;
(statearr_20663[(7)] = inst_20575);

return statearr_20663;
})();
var statearr_20664_20722 = state_20645__$1;
(statearr_20664_20722[(2)] = null);

(statearr_20664_20722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (13))){
var inst_20575 = (state_20645[(7)]);
var inst_20582 = inst_20575.cljs$lang$protocol_mask$partition0$;
var inst_20583 = (inst_20582 & (64));
var inst_20584 = inst_20575.cljs$core$ISeq$;
var inst_20585 = (inst_20583) || (inst_20584);
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20585)){
var statearr_20665_20723 = state_20645__$1;
(statearr_20665_20723[(1)] = (16));

} else {
var statearr_20666_20724 = state_20645__$1;
(statearr_20666_20724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (22))){
var inst_20605 = (state_20645[(9)]);
var inst_20604 = (state_20645[(14)]);
var inst_20603 = (state_20645[(2)]);
var inst_20604__$1 = cljs.core.nth.call(null,inst_20603,(0),null);
var inst_20605__$1 = cljs.core.nth.call(null,inst_20603,(1),null);
var inst_20606 = (inst_20604__$1 == null);
var inst_20607 = cljs.core._EQ_.call(null,inst_20605__$1,change);
var inst_20608 = (inst_20606) || (inst_20607);
var state_20645__$1 = (function (){var statearr_20667 = state_20645;
(statearr_20667[(9)] = inst_20605__$1);

(statearr_20667[(14)] = inst_20604__$1);

return statearr_20667;
})();
if(cljs.core.truth_(inst_20608)){
var statearr_20668_20725 = state_20645__$1;
(statearr_20668_20725[(1)] = (23));

} else {
var statearr_20669_20726 = state_20645__$1;
(statearr_20669_20726[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (36))){
var inst_20597 = (state_20645[(12)]);
var inst_20575 = inst_20597;
var state_20645__$1 = (function (){var statearr_20670 = state_20645;
(statearr_20670[(7)] = inst_20575);

return statearr_20670;
})();
var statearr_20671_20727 = state_20645__$1;
(statearr_20671_20727[(2)] = null);

(statearr_20671_20727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (29))){
var inst_20619 = (state_20645[(10)]);
var state_20645__$1 = state_20645;
var statearr_20672_20728 = state_20645__$1;
(statearr_20672_20728[(2)] = inst_20619);

(statearr_20672_20728[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (6))){
var state_20645__$1 = state_20645;
var statearr_20673_20729 = state_20645__$1;
(statearr_20673_20729[(2)] = false);

(statearr_20673_20729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (28))){
var inst_20615 = (state_20645[(2)]);
var inst_20616 = calc_state.call(null);
var inst_20575 = inst_20616;
var state_20645__$1 = (function (){var statearr_20674 = state_20645;
(statearr_20674[(7)] = inst_20575);

(statearr_20674[(15)] = inst_20615);

return statearr_20674;
})();
var statearr_20675_20730 = state_20645__$1;
(statearr_20675_20730[(2)] = null);

(statearr_20675_20730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (25))){
var inst_20641 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20676_20731 = state_20645__$1;
(statearr_20676_20731[(2)] = inst_20641);

(statearr_20676_20731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (34))){
var inst_20639 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20677_20732 = state_20645__$1;
(statearr_20677_20732[(2)] = inst_20639);

(statearr_20677_20732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (17))){
var state_20645__$1 = state_20645;
var statearr_20678_20733 = state_20645__$1;
(statearr_20678_20733[(2)] = false);

(statearr_20678_20733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (3))){
var state_20645__$1 = state_20645;
var statearr_20679_20734 = state_20645__$1;
(statearr_20679_20734[(2)] = false);

(statearr_20679_20734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (12))){
var inst_20643 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20645__$1,inst_20643);
} else {
if((state_val_20646 === (2))){
var inst_20551 = (state_20645[(8)]);
var inst_20556 = inst_20551.cljs$lang$protocol_mask$partition0$;
var inst_20557 = (inst_20556 & (64));
var inst_20558 = inst_20551.cljs$core$ISeq$;
var inst_20559 = (inst_20557) || (inst_20558);
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20559)){
var statearr_20680_20735 = state_20645__$1;
(statearr_20680_20735[(1)] = (5));

} else {
var statearr_20681_20736 = state_20645__$1;
(statearr_20681_20736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (23))){
var inst_20604 = (state_20645[(14)]);
var inst_20610 = (inst_20604 == null);
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20610)){
var statearr_20682_20737 = state_20645__$1;
(statearr_20682_20737[(1)] = (26));

} else {
var statearr_20683_20738 = state_20645__$1;
(statearr_20683_20738[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (35))){
var inst_20630 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
if(cljs.core.truth_(inst_20630)){
var statearr_20684_20739 = state_20645__$1;
(statearr_20684_20739[(1)] = (36));

} else {
var statearr_20685_20740 = state_20645__$1;
(statearr_20685_20740[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (19))){
var inst_20575 = (state_20645[(7)]);
var inst_20594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20575);
var state_20645__$1 = state_20645;
var statearr_20686_20741 = state_20645__$1;
(statearr_20686_20741[(2)] = inst_20594);

(statearr_20686_20741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (11))){
var inst_20575 = (state_20645[(7)]);
var inst_20579 = (inst_20575 == null);
var inst_20580 = cljs.core.not.call(null,inst_20579);
var state_20645__$1 = state_20645;
if(inst_20580){
var statearr_20687_20742 = state_20645__$1;
(statearr_20687_20742[(1)] = (13));

} else {
var statearr_20688_20743 = state_20645__$1;
(statearr_20688_20743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (9))){
var inst_20551 = (state_20645[(8)]);
var state_20645__$1 = state_20645;
var statearr_20689_20744 = state_20645__$1;
(statearr_20689_20744[(2)] = inst_20551);

(statearr_20689_20744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (5))){
var state_20645__$1 = state_20645;
var statearr_20690_20745 = state_20645__$1;
(statearr_20690_20745[(2)] = true);

(statearr_20690_20745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (14))){
var state_20645__$1 = state_20645;
var statearr_20691_20746 = state_20645__$1;
(statearr_20691_20746[(2)] = false);

(statearr_20691_20746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (26))){
var inst_20605 = (state_20645[(9)]);
var inst_20612 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20605);
var state_20645__$1 = state_20645;
var statearr_20692_20747 = state_20645__$1;
(statearr_20692_20747[(2)] = inst_20612);

(statearr_20692_20747[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (16))){
var state_20645__$1 = state_20645;
var statearr_20693_20748 = state_20645__$1;
(statearr_20693_20748[(2)] = true);

(statearr_20693_20748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (38))){
var inst_20635 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20694_20749 = state_20645__$1;
(statearr_20694_20749[(2)] = inst_20635);

(statearr_20694_20749[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (30))){
var inst_20599 = (state_20645[(13)]);
var inst_20605 = (state_20645[(9)]);
var inst_20598 = (state_20645[(11)]);
var inst_20622 = cljs.core.empty_QMARK_.call(null,inst_20598);
var inst_20623 = inst_20599.call(null,inst_20605);
var inst_20624 = cljs.core.not.call(null,inst_20623);
var inst_20625 = (inst_20622) && (inst_20624);
var state_20645__$1 = state_20645;
var statearr_20695_20750 = state_20645__$1;
(statearr_20695_20750[(2)] = inst_20625);

(statearr_20695_20750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (10))){
var inst_20551 = (state_20645[(8)]);
var inst_20571 = (state_20645[(2)]);
var inst_20572 = cljs.core.get.call(null,inst_20571,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20573 = cljs.core.get.call(null,inst_20571,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20574 = cljs.core.get.call(null,inst_20571,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20575 = inst_20551;
var state_20645__$1 = (function (){var statearr_20696 = state_20645;
(statearr_20696[(16)] = inst_20574);

(statearr_20696[(17)] = inst_20573);

(statearr_20696[(18)] = inst_20572);

(statearr_20696[(7)] = inst_20575);

return statearr_20696;
})();
var statearr_20697_20751 = state_20645__$1;
(statearr_20697_20751[(2)] = null);

(statearr_20697_20751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (18))){
var inst_20589 = (state_20645[(2)]);
var state_20645__$1 = state_20645;
var statearr_20698_20752 = state_20645__$1;
(statearr_20698_20752[(2)] = inst_20589);

(statearr_20698_20752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (37))){
var state_20645__$1 = state_20645;
var statearr_20699_20753 = state_20645__$1;
(statearr_20699_20753[(2)] = null);

(statearr_20699_20753[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20646 === (8))){
var inst_20551 = (state_20645[(8)]);
var inst_20568 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20551);
var state_20645__$1 = state_20645;
var statearr_20700_20754 = state_20645__$1;
(statearr_20700_20754[(2)] = inst_20568);

(statearr_20700_20754[(1)] = (10));


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
});})(c__18995__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18883__auto__,c__18995__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18884__auto__ = null;
var cljs$core$async$mix_$_state_machine__18884__auto____0 = (function (){
var statearr_20704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20704[(0)] = cljs$core$async$mix_$_state_machine__18884__auto__);

(statearr_20704[(1)] = (1));

return statearr_20704;
});
var cljs$core$async$mix_$_state_machine__18884__auto____1 = (function (state_20645){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_20645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e20705){if((e20705 instanceof Object)){
var ex__18887__auto__ = e20705;
var statearr_20706_20755 = state_20645;
(statearr_20706_20755[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20756 = state_20645;
state_20645 = G__20756;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18884__auto__ = function(state_20645){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18884__auto____1.call(this,state_20645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18884__auto____0;
cljs$core$async$mix_$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18884__auto____1;
return cljs$core$async$mix_$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18997__auto__ = (function (){var statearr_20707 = f__18996__auto__.call(null);
(statearr_20707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___20708);

return statearr_20707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___20708,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20757 = [];
var len__17884__auto___20760 = arguments.length;
var i__17885__auto___20761 = (0);
while(true){
if((i__17885__auto___20761 < len__17884__auto___20760)){
args20757.push((arguments[i__17885__auto___20761]));

var G__20762 = (i__17885__auto___20761 + (1));
i__17885__auto___20761 = G__20762;
continue;
} else {
}
break;
}

var G__20759 = args20757.length;
switch (G__20759) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20757.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20765 = [];
var len__17884__auto___20890 = arguments.length;
var i__17885__auto___20891 = (0);
while(true){
if((i__17885__auto___20891 < len__17884__auto___20890)){
args20765.push((arguments[i__17885__auto___20891]));

var G__20892 = (i__17885__auto___20891 + (1));
i__17885__auto___20891 = G__20892;
continue;
} else {
}
break;
}

var G__20767 = args20765.length;
switch (G__20767) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20765.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__20764_SHARP_){
if(cljs.core.truth_(p1__20764_SHARP_.call(null,topic))){
return p1__20764_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20764_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20768 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20769){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20769 = meta20769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20770,meta20769__$1){
var self__ = this;
var _20770__$1 = this;
return (new cljs.core.async.t_cljs$core$async20768(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20769__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20770){
var self__ = this;
var _20770__$1 = this;
return self__.meta20769;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20769","meta20769",339979617,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20768";

cljs.core.async.t_cljs$core$async20768.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20768");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20768 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20769){
return (new cljs.core.async.t_cljs$core$async20768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20769));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20768(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18995__auto___20894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___20894,mults,ensure_mult,p){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___20894,mults,ensure_mult,p){
return (function (state_20842){
var state_val_20843 = (state_20842[(1)]);
if((state_val_20843 === (7))){
var inst_20838 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
var statearr_20844_20895 = state_20842__$1;
(statearr_20844_20895[(2)] = inst_20838);

(statearr_20844_20895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (20))){
var state_20842__$1 = state_20842;
var statearr_20845_20896 = state_20842__$1;
(statearr_20845_20896[(2)] = null);

(statearr_20845_20896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (1))){
var state_20842__$1 = state_20842;
var statearr_20846_20897 = state_20842__$1;
(statearr_20846_20897[(2)] = null);

(statearr_20846_20897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (24))){
var inst_20821 = (state_20842[(7)]);
var inst_20830 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20821);
var state_20842__$1 = state_20842;
var statearr_20847_20898 = state_20842__$1;
(statearr_20847_20898[(2)] = inst_20830);

(statearr_20847_20898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (4))){
var inst_20773 = (state_20842[(8)]);
var inst_20773__$1 = (state_20842[(2)]);
var inst_20774 = (inst_20773__$1 == null);
var state_20842__$1 = (function (){var statearr_20848 = state_20842;
(statearr_20848[(8)] = inst_20773__$1);

return statearr_20848;
})();
if(cljs.core.truth_(inst_20774)){
var statearr_20849_20899 = state_20842__$1;
(statearr_20849_20899[(1)] = (5));

} else {
var statearr_20850_20900 = state_20842__$1;
(statearr_20850_20900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (15))){
var inst_20815 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
var statearr_20851_20901 = state_20842__$1;
(statearr_20851_20901[(2)] = inst_20815);

(statearr_20851_20901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (21))){
var inst_20835 = (state_20842[(2)]);
var state_20842__$1 = (function (){var statearr_20852 = state_20842;
(statearr_20852[(9)] = inst_20835);

return statearr_20852;
})();
var statearr_20853_20902 = state_20842__$1;
(statearr_20853_20902[(2)] = null);

(statearr_20853_20902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (13))){
var inst_20797 = (state_20842[(10)]);
var inst_20799 = cljs.core.chunked_seq_QMARK_.call(null,inst_20797);
var state_20842__$1 = state_20842;
if(inst_20799){
var statearr_20854_20903 = state_20842__$1;
(statearr_20854_20903[(1)] = (16));

} else {
var statearr_20855_20904 = state_20842__$1;
(statearr_20855_20904[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (22))){
var inst_20827 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
if(cljs.core.truth_(inst_20827)){
var statearr_20856_20905 = state_20842__$1;
(statearr_20856_20905[(1)] = (23));

} else {
var statearr_20857_20906 = state_20842__$1;
(statearr_20857_20906[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (6))){
var inst_20773 = (state_20842[(8)]);
var inst_20823 = (state_20842[(11)]);
var inst_20821 = (state_20842[(7)]);
var inst_20821__$1 = topic_fn.call(null,inst_20773);
var inst_20822 = cljs.core.deref.call(null,mults);
var inst_20823__$1 = cljs.core.get.call(null,inst_20822,inst_20821__$1);
var state_20842__$1 = (function (){var statearr_20858 = state_20842;
(statearr_20858[(11)] = inst_20823__$1);

(statearr_20858[(7)] = inst_20821__$1);

return statearr_20858;
})();
if(cljs.core.truth_(inst_20823__$1)){
var statearr_20859_20907 = state_20842__$1;
(statearr_20859_20907[(1)] = (19));

} else {
var statearr_20860_20908 = state_20842__$1;
(statearr_20860_20908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (25))){
var inst_20832 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
var statearr_20861_20909 = state_20842__$1;
(statearr_20861_20909[(2)] = inst_20832);

(statearr_20861_20909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (17))){
var inst_20797 = (state_20842[(10)]);
var inst_20806 = cljs.core.first.call(null,inst_20797);
var inst_20807 = cljs.core.async.muxch_STAR_.call(null,inst_20806);
var inst_20808 = cljs.core.async.close_BANG_.call(null,inst_20807);
var inst_20809 = cljs.core.next.call(null,inst_20797);
var inst_20783 = inst_20809;
var inst_20784 = null;
var inst_20785 = (0);
var inst_20786 = (0);
var state_20842__$1 = (function (){var statearr_20862 = state_20842;
(statearr_20862[(12)] = inst_20783);

(statearr_20862[(13)] = inst_20785);

(statearr_20862[(14)] = inst_20784);

(statearr_20862[(15)] = inst_20808);

(statearr_20862[(16)] = inst_20786);

return statearr_20862;
})();
var statearr_20863_20910 = state_20842__$1;
(statearr_20863_20910[(2)] = null);

(statearr_20863_20910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (3))){
var inst_20840 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20842__$1,inst_20840);
} else {
if((state_val_20843 === (12))){
var inst_20817 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
var statearr_20864_20911 = state_20842__$1;
(statearr_20864_20911[(2)] = inst_20817);

(statearr_20864_20911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (2))){
var state_20842__$1 = state_20842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20842__$1,(4),ch);
} else {
if((state_val_20843 === (23))){
var state_20842__$1 = state_20842;
var statearr_20865_20912 = state_20842__$1;
(statearr_20865_20912[(2)] = null);

(statearr_20865_20912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (19))){
var inst_20773 = (state_20842[(8)]);
var inst_20823 = (state_20842[(11)]);
var inst_20825 = cljs.core.async.muxch_STAR_.call(null,inst_20823);
var state_20842__$1 = state_20842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20842__$1,(22),inst_20825,inst_20773);
} else {
if((state_val_20843 === (11))){
var inst_20783 = (state_20842[(12)]);
var inst_20797 = (state_20842[(10)]);
var inst_20797__$1 = cljs.core.seq.call(null,inst_20783);
var state_20842__$1 = (function (){var statearr_20866 = state_20842;
(statearr_20866[(10)] = inst_20797__$1);

return statearr_20866;
})();
if(inst_20797__$1){
var statearr_20867_20913 = state_20842__$1;
(statearr_20867_20913[(1)] = (13));

} else {
var statearr_20868_20914 = state_20842__$1;
(statearr_20868_20914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (9))){
var inst_20819 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
var statearr_20869_20915 = state_20842__$1;
(statearr_20869_20915[(2)] = inst_20819);

(statearr_20869_20915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (5))){
var inst_20780 = cljs.core.deref.call(null,mults);
var inst_20781 = cljs.core.vals.call(null,inst_20780);
var inst_20782 = cljs.core.seq.call(null,inst_20781);
var inst_20783 = inst_20782;
var inst_20784 = null;
var inst_20785 = (0);
var inst_20786 = (0);
var state_20842__$1 = (function (){var statearr_20870 = state_20842;
(statearr_20870[(12)] = inst_20783);

(statearr_20870[(13)] = inst_20785);

(statearr_20870[(14)] = inst_20784);

(statearr_20870[(16)] = inst_20786);

return statearr_20870;
})();
var statearr_20871_20916 = state_20842__$1;
(statearr_20871_20916[(2)] = null);

(statearr_20871_20916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (14))){
var state_20842__$1 = state_20842;
var statearr_20875_20917 = state_20842__$1;
(statearr_20875_20917[(2)] = null);

(statearr_20875_20917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (16))){
var inst_20797 = (state_20842[(10)]);
var inst_20801 = cljs.core.chunk_first.call(null,inst_20797);
var inst_20802 = cljs.core.chunk_rest.call(null,inst_20797);
var inst_20803 = cljs.core.count.call(null,inst_20801);
var inst_20783 = inst_20802;
var inst_20784 = inst_20801;
var inst_20785 = inst_20803;
var inst_20786 = (0);
var state_20842__$1 = (function (){var statearr_20876 = state_20842;
(statearr_20876[(12)] = inst_20783);

(statearr_20876[(13)] = inst_20785);

(statearr_20876[(14)] = inst_20784);

(statearr_20876[(16)] = inst_20786);

return statearr_20876;
})();
var statearr_20877_20918 = state_20842__$1;
(statearr_20877_20918[(2)] = null);

(statearr_20877_20918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (10))){
var inst_20783 = (state_20842[(12)]);
var inst_20785 = (state_20842[(13)]);
var inst_20784 = (state_20842[(14)]);
var inst_20786 = (state_20842[(16)]);
var inst_20791 = cljs.core._nth.call(null,inst_20784,inst_20786);
var inst_20792 = cljs.core.async.muxch_STAR_.call(null,inst_20791);
var inst_20793 = cljs.core.async.close_BANG_.call(null,inst_20792);
var inst_20794 = (inst_20786 + (1));
var tmp20872 = inst_20783;
var tmp20873 = inst_20785;
var tmp20874 = inst_20784;
var inst_20783__$1 = tmp20872;
var inst_20784__$1 = tmp20874;
var inst_20785__$1 = tmp20873;
var inst_20786__$1 = inst_20794;
var state_20842__$1 = (function (){var statearr_20878 = state_20842;
(statearr_20878[(12)] = inst_20783__$1);

(statearr_20878[(13)] = inst_20785__$1);

(statearr_20878[(14)] = inst_20784__$1);

(statearr_20878[(16)] = inst_20786__$1);

(statearr_20878[(17)] = inst_20793);

return statearr_20878;
})();
var statearr_20879_20919 = state_20842__$1;
(statearr_20879_20919[(2)] = null);

(statearr_20879_20919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (18))){
var inst_20812 = (state_20842[(2)]);
var state_20842__$1 = state_20842;
var statearr_20880_20920 = state_20842__$1;
(statearr_20880_20920[(2)] = inst_20812);

(statearr_20880_20920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20843 === (8))){
var inst_20785 = (state_20842[(13)]);
var inst_20786 = (state_20842[(16)]);
var inst_20788 = (inst_20786 < inst_20785);
var inst_20789 = inst_20788;
var state_20842__$1 = state_20842;
if(cljs.core.truth_(inst_20789)){
var statearr_20881_20921 = state_20842__$1;
(statearr_20881_20921[(1)] = (10));

} else {
var statearr_20882_20922 = state_20842__$1;
(statearr_20882_20922[(1)] = (11));

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
});})(c__18995__auto___20894,mults,ensure_mult,p))
;
return ((function (switch__18883__auto__,c__18995__auto___20894,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_20886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20886[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_20886[(1)] = (1));

return statearr_20886;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_20842){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_20842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e20887){if((e20887 instanceof Object)){
var ex__18887__auto__ = e20887;
var statearr_20888_20923 = state_20842;
(statearr_20888_20923[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20924 = state_20842;
state_20842 = G__20924;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_20842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_20842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___20894,mults,ensure_mult,p))
})();
var state__18997__auto__ = (function (){var statearr_20889 = f__18996__auto__.call(null);
(statearr_20889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___20894);

return statearr_20889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___20894,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20925 = [];
var len__17884__auto___20928 = arguments.length;
var i__17885__auto___20929 = (0);
while(true){
if((i__17885__auto___20929 < len__17884__auto___20928)){
args20925.push((arguments[i__17885__auto___20929]));

var G__20930 = (i__17885__auto___20929 + (1));
i__17885__auto___20929 = G__20930;
continue;
} else {
}
break;
}

var G__20927 = args20925.length;
switch (G__20927) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20925.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20932 = [];
var len__17884__auto___20935 = arguments.length;
var i__17885__auto___20936 = (0);
while(true){
if((i__17885__auto___20936 < len__17884__auto___20935)){
args20932.push((arguments[i__17885__auto___20936]));

var G__20937 = (i__17885__auto___20936 + (1));
i__17885__auto___20936 = G__20937;
continue;
} else {
}
break;
}

var G__20934 = args20932.length;
switch (G__20934) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20932.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20939 = [];
var len__17884__auto___21010 = arguments.length;
var i__17885__auto___21011 = (0);
while(true){
if((i__17885__auto___21011 < len__17884__auto___21010)){
args20939.push((arguments[i__17885__auto___21011]));

var G__21012 = (i__17885__auto___21011 + (1));
i__17885__auto___21011 = G__21012;
continue;
} else {
}
break;
}

var G__20941 = args20939.length;
switch (G__20941) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20939.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18995__auto___21014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___21014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___21014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20980){
var state_val_20981 = (state_20980[(1)]);
if((state_val_20981 === (7))){
var state_20980__$1 = state_20980;
var statearr_20982_21015 = state_20980__$1;
(statearr_20982_21015[(2)] = null);

(statearr_20982_21015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (1))){
var state_20980__$1 = state_20980;
var statearr_20983_21016 = state_20980__$1;
(statearr_20983_21016[(2)] = null);

(statearr_20983_21016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (4))){
var inst_20944 = (state_20980[(7)]);
var inst_20946 = (inst_20944 < cnt);
var state_20980__$1 = state_20980;
if(cljs.core.truth_(inst_20946)){
var statearr_20984_21017 = state_20980__$1;
(statearr_20984_21017[(1)] = (6));

} else {
var statearr_20985_21018 = state_20980__$1;
(statearr_20985_21018[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (15))){
var inst_20976 = (state_20980[(2)]);
var state_20980__$1 = state_20980;
var statearr_20986_21019 = state_20980__$1;
(statearr_20986_21019[(2)] = inst_20976);

(statearr_20986_21019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (13))){
var inst_20969 = cljs.core.async.close_BANG_.call(null,out);
var state_20980__$1 = state_20980;
var statearr_20987_21020 = state_20980__$1;
(statearr_20987_21020[(2)] = inst_20969);

(statearr_20987_21020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (6))){
var state_20980__$1 = state_20980;
var statearr_20988_21021 = state_20980__$1;
(statearr_20988_21021[(2)] = null);

(statearr_20988_21021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (3))){
var inst_20978 = (state_20980[(2)]);
var state_20980__$1 = state_20980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20980__$1,inst_20978);
} else {
if((state_val_20981 === (12))){
var inst_20966 = (state_20980[(8)]);
var inst_20966__$1 = (state_20980[(2)]);
var inst_20967 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20966__$1);
var state_20980__$1 = (function (){var statearr_20989 = state_20980;
(statearr_20989[(8)] = inst_20966__$1);

return statearr_20989;
})();
if(cljs.core.truth_(inst_20967)){
var statearr_20990_21022 = state_20980__$1;
(statearr_20990_21022[(1)] = (13));

} else {
var statearr_20991_21023 = state_20980__$1;
(statearr_20991_21023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (2))){
var inst_20943 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20944 = (0);
var state_20980__$1 = (function (){var statearr_20992 = state_20980;
(statearr_20992[(7)] = inst_20944);

(statearr_20992[(9)] = inst_20943);

return statearr_20992;
})();
var statearr_20993_21024 = state_20980__$1;
(statearr_20993_21024[(2)] = null);

(statearr_20993_21024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (11))){
var inst_20944 = (state_20980[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20980,(10),Object,null,(9));
var inst_20953 = chs__$1.call(null,inst_20944);
var inst_20954 = done.call(null,inst_20944);
var inst_20955 = cljs.core.async.take_BANG_.call(null,inst_20953,inst_20954);
var state_20980__$1 = state_20980;
var statearr_20994_21025 = state_20980__$1;
(statearr_20994_21025[(2)] = inst_20955);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20980__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (9))){
var inst_20944 = (state_20980[(7)]);
var inst_20957 = (state_20980[(2)]);
var inst_20958 = (inst_20944 + (1));
var inst_20944__$1 = inst_20958;
var state_20980__$1 = (function (){var statearr_20995 = state_20980;
(statearr_20995[(10)] = inst_20957);

(statearr_20995[(7)] = inst_20944__$1);

return statearr_20995;
})();
var statearr_20996_21026 = state_20980__$1;
(statearr_20996_21026[(2)] = null);

(statearr_20996_21026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (5))){
var inst_20964 = (state_20980[(2)]);
var state_20980__$1 = (function (){var statearr_20997 = state_20980;
(statearr_20997[(11)] = inst_20964);

return statearr_20997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20980__$1,(12),dchan);
} else {
if((state_val_20981 === (14))){
var inst_20966 = (state_20980[(8)]);
var inst_20971 = cljs.core.apply.call(null,f,inst_20966);
var state_20980__$1 = state_20980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20980__$1,(16),out,inst_20971);
} else {
if((state_val_20981 === (16))){
var inst_20973 = (state_20980[(2)]);
var state_20980__$1 = (function (){var statearr_20998 = state_20980;
(statearr_20998[(12)] = inst_20973);

return statearr_20998;
})();
var statearr_20999_21027 = state_20980__$1;
(statearr_20999_21027[(2)] = null);

(statearr_20999_21027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (10))){
var inst_20948 = (state_20980[(2)]);
var inst_20949 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20980__$1 = (function (){var statearr_21000 = state_20980;
(statearr_21000[(13)] = inst_20948);

return statearr_21000;
})();
var statearr_21001_21028 = state_20980__$1;
(statearr_21001_21028[(2)] = inst_20949);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20980__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (8))){
var inst_20962 = (state_20980[(2)]);
var state_20980__$1 = state_20980;
var statearr_21002_21029 = state_20980__$1;
(statearr_21002_21029[(2)] = inst_20962);

(statearr_21002_21029[(1)] = (5));


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
});})(c__18995__auto___21014,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18883__auto__,c__18995__auto___21014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_21006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21006[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_21006[(1)] = (1));

return statearr_21006;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_20980){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_20980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21007){if((e21007 instanceof Object)){
var ex__18887__auto__ = e21007;
var statearr_21008_21030 = state_20980;
(statearr_21008_21030[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21031 = state_20980;
state_20980 = G__21031;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_20980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_20980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___21014,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18997__auto__ = (function (){var statearr_21009 = f__18996__auto__.call(null);
(statearr_21009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___21014);

return statearr_21009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___21014,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21033 = [];
var len__17884__auto___21089 = arguments.length;
var i__17885__auto___21090 = (0);
while(true){
if((i__17885__auto___21090 < len__17884__auto___21089)){
args21033.push((arguments[i__17885__auto___21090]));

var G__21091 = (i__17885__auto___21090 + (1));
i__17885__auto___21090 = G__21091;
continue;
} else {
}
break;
}

var G__21035 = args21033.length;
switch (G__21035) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21033.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18995__auto___21093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___21093,out){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___21093,out){
return (function (state_21065){
var state_val_21066 = (state_21065[(1)]);
if((state_val_21066 === (7))){
var inst_21044 = (state_21065[(7)]);
var inst_21045 = (state_21065[(8)]);
var inst_21044__$1 = (state_21065[(2)]);
var inst_21045__$1 = cljs.core.nth.call(null,inst_21044__$1,(0),null);
var inst_21046 = cljs.core.nth.call(null,inst_21044__$1,(1),null);
var inst_21047 = (inst_21045__$1 == null);
var state_21065__$1 = (function (){var statearr_21067 = state_21065;
(statearr_21067[(9)] = inst_21046);

(statearr_21067[(7)] = inst_21044__$1);

(statearr_21067[(8)] = inst_21045__$1);

return statearr_21067;
})();
if(cljs.core.truth_(inst_21047)){
var statearr_21068_21094 = state_21065__$1;
(statearr_21068_21094[(1)] = (8));

} else {
var statearr_21069_21095 = state_21065__$1;
(statearr_21069_21095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (1))){
var inst_21036 = cljs.core.vec.call(null,chs);
var inst_21037 = inst_21036;
var state_21065__$1 = (function (){var statearr_21070 = state_21065;
(statearr_21070[(10)] = inst_21037);

return statearr_21070;
})();
var statearr_21071_21096 = state_21065__$1;
(statearr_21071_21096[(2)] = null);

(statearr_21071_21096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (4))){
var inst_21037 = (state_21065[(10)]);
var state_21065__$1 = state_21065;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21065__$1,(7),inst_21037);
} else {
if((state_val_21066 === (6))){
var inst_21061 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21072_21097 = state_21065__$1;
(statearr_21072_21097[(2)] = inst_21061);

(statearr_21072_21097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (3))){
var inst_21063 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21065__$1,inst_21063);
} else {
if((state_val_21066 === (2))){
var inst_21037 = (state_21065[(10)]);
var inst_21039 = cljs.core.count.call(null,inst_21037);
var inst_21040 = (inst_21039 > (0));
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21040)){
var statearr_21074_21098 = state_21065__$1;
(statearr_21074_21098[(1)] = (4));

} else {
var statearr_21075_21099 = state_21065__$1;
(statearr_21075_21099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (11))){
var inst_21037 = (state_21065[(10)]);
var inst_21054 = (state_21065[(2)]);
var tmp21073 = inst_21037;
var inst_21037__$1 = tmp21073;
var state_21065__$1 = (function (){var statearr_21076 = state_21065;
(statearr_21076[(11)] = inst_21054);

(statearr_21076[(10)] = inst_21037__$1);

return statearr_21076;
})();
var statearr_21077_21100 = state_21065__$1;
(statearr_21077_21100[(2)] = null);

(statearr_21077_21100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (9))){
var inst_21045 = (state_21065[(8)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21065__$1,(11),out,inst_21045);
} else {
if((state_val_21066 === (5))){
var inst_21059 = cljs.core.async.close_BANG_.call(null,out);
var state_21065__$1 = state_21065;
var statearr_21078_21101 = state_21065__$1;
(statearr_21078_21101[(2)] = inst_21059);

(statearr_21078_21101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (10))){
var inst_21057 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21079_21102 = state_21065__$1;
(statearr_21079_21102[(2)] = inst_21057);

(statearr_21079_21102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (8))){
var inst_21046 = (state_21065[(9)]);
var inst_21044 = (state_21065[(7)]);
var inst_21045 = (state_21065[(8)]);
var inst_21037 = (state_21065[(10)]);
var inst_21049 = (function (){var cs = inst_21037;
var vec__21042 = inst_21044;
var v = inst_21045;
var c = inst_21046;
return ((function (cs,vec__21042,v,c,inst_21046,inst_21044,inst_21045,inst_21037,state_val_21066,c__18995__auto___21093,out){
return (function (p1__21032_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21032_SHARP_);
});
;})(cs,vec__21042,v,c,inst_21046,inst_21044,inst_21045,inst_21037,state_val_21066,c__18995__auto___21093,out))
})();
var inst_21050 = cljs.core.filterv.call(null,inst_21049,inst_21037);
var inst_21037__$1 = inst_21050;
var state_21065__$1 = (function (){var statearr_21080 = state_21065;
(statearr_21080[(10)] = inst_21037__$1);

return statearr_21080;
})();
var statearr_21081_21103 = state_21065__$1;
(statearr_21081_21103[(2)] = null);

(statearr_21081_21103[(1)] = (2));


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
});})(c__18995__auto___21093,out))
;
return ((function (switch__18883__auto__,c__18995__auto___21093,out){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_21085 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21085[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_21085[(1)] = (1));

return statearr_21085;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_21065){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_21065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21086){if((e21086 instanceof Object)){
var ex__18887__auto__ = e21086;
var statearr_21087_21104 = state_21065;
(statearr_21087_21104[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21105 = state_21065;
state_21065 = G__21105;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_21065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_21065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___21093,out))
})();
var state__18997__auto__ = (function (){var statearr_21088 = f__18996__auto__.call(null);
(statearr_21088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___21093);

return statearr_21088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___21093,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21106 = [];
var len__17884__auto___21155 = arguments.length;
var i__17885__auto___21156 = (0);
while(true){
if((i__17885__auto___21156 < len__17884__auto___21155)){
args21106.push((arguments[i__17885__auto___21156]));

var G__21157 = (i__17885__auto___21156 + (1));
i__17885__auto___21156 = G__21157;
continue;
} else {
}
break;
}

var G__21108 = args21106.length;
switch (G__21108) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21106.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18995__auto___21159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___21159,out){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___21159,out){
return (function (state_21132){
var state_val_21133 = (state_21132[(1)]);
if((state_val_21133 === (7))){
var inst_21114 = (state_21132[(7)]);
var inst_21114__$1 = (state_21132[(2)]);
var inst_21115 = (inst_21114__$1 == null);
var inst_21116 = cljs.core.not.call(null,inst_21115);
var state_21132__$1 = (function (){var statearr_21134 = state_21132;
(statearr_21134[(7)] = inst_21114__$1);

return statearr_21134;
})();
if(inst_21116){
var statearr_21135_21160 = state_21132__$1;
(statearr_21135_21160[(1)] = (8));

} else {
var statearr_21136_21161 = state_21132__$1;
(statearr_21136_21161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (1))){
var inst_21109 = (0);
var state_21132__$1 = (function (){var statearr_21137 = state_21132;
(statearr_21137[(8)] = inst_21109);

return statearr_21137;
})();
var statearr_21138_21162 = state_21132__$1;
(statearr_21138_21162[(2)] = null);

(statearr_21138_21162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (4))){
var state_21132__$1 = state_21132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21132__$1,(7),ch);
} else {
if((state_val_21133 === (6))){
var inst_21127 = (state_21132[(2)]);
var state_21132__$1 = state_21132;
var statearr_21139_21163 = state_21132__$1;
(statearr_21139_21163[(2)] = inst_21127);

(statearr_21139_21163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (3))){
var inst_21129 = (state_21132[(2)]);
var inst_21130 = cljs.core.async.close_BANG_.call(null,out);
var state_21132__$1 = (function (){var statearr_21140 = state_21132;
(statearr_21140[(9)] = inst_21129);

return statearr_21140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21132__$1,inst_21130);
} else {
if((state_val_21133 === (2))){
var inst_21109 = (state_21132[(8)]);
var inst_21111 = (inst_21109 < n);
var state_21132__$1 = state_21132;
if(cljs.core.truth_(inst_21111)){
var statearr_21141_21164 = state_21132__$1;
(statearr_21141_21164[(1)] = (4));

} else {
var statearr_21142_21165 = state_21132__$1;
(statearr_21142_21165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (11))){
var inst_21109 = (state_21132[(8)]);
var inst_21119 = (state_21132[(2)]);
var inst_21120 = (inst_21109 + (1));
var inst_21109__$1 = inst_21120;
var state_21132__$1 = (function (){var statearr_21143 = state_21132;
(statearr_21143[(8)] = inst_21109__$1);

(statearr_21143[(10)] = inst_21119);

return statearr_21143;
})();
var statearr_21144_21166 = state_21132__$1;
(statearr_21144_21166[(2)] = null);

(statearr_21144_21166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (9))){
var state_21132__$1 = state_21132;
var statearr_21145_21167 = state_21132__$1;
(statearr_21145_21167[(2)] = null);

(statearr_21145_21167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (5))){
var state_21132__$1 = state_21132;
var statearr_21146_21168 = state_21132__$1;
(statearr_21146_21168[(2)] = null);

(statearr_21146_21168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (10))){
var inst_21124 = (state_21132[(2)]);
var state_21132__$1 = state_21132;
var statearr_21147_21169 = state_21132__$1;
(statearr_21147_21169[(2)] = inst_21124);

(statearr_21147_21169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21133 === (8))){
var inst_21114 = (state_21132[(7)]);
var state_21132__$1 = state_21132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21132__$1,(11),out,inst_21114);
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
});})(c__18995__auto___21159,out))
;
return ((function (switch__18883__auto__,c__18995__auto___21159,out){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_21151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21151[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_21151[(1)] = (1));

return statearr_21151;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_21132){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_21132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21152){if((e21152 instanceof Object)){
var ex__18887__auto__ = e21152;
var statearr_21153_21170 = state_21132;
(statearr_21153_21170[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21171 = state_21132;
state_21132 = G__21171;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_21132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_21132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___21159,out))
})();
var state__18997__auto__ = (function (){var statearr_21154 = f__18996__auto__.call(null);
(statearr_21154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___21159);

return statearr_21154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___21159,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21179 = (function (map_LT_,f,ch,meta21180){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21180 = meta21180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21181,meta21180__$1){
var self__ = this;
var _21181__$1 = this;
return (new cljs.core.async.t_cljs$core$async21179(self__.map_LT_,self__.f,self__.ch,meta21180__$1));
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21181){
var self__ = this;
var _21181__$1 = this;
return self__.meta21180;
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21182 = (function (map_LT_,f,ch,meta21180,_,fn1,meta21183){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21180 = meta21180;
this._ = _;
this.fn1 = fn1;
this.meta21183 = meta21183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21184,meta21183__$1){
var self__ = this;
var _21184__$1 = this;
return (new cljs.core.async.t_cljs$core$async21182(self__.map_LT_,self__.f,self__.ch,self__.meta21180,self__._,self__.fn1,meta21183__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21184){
var self__ = this;
var _21184__$1 = this;
return self__.meta21183;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21182.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21172_SHARP_){
return f1.call(null,(((p1__21172_SHARP_ == null))?null:self__.f.call(null,p1__21172_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21182.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21180","meta21180",1849090054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21179","cljs.core.async/t_cljs$core$async21179",932984947,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21183","meta21183",1502591973,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21182";

cljs.core.async.t_cljs$core$async21182.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21182");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21182 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21182(map_LT___$1,f__$1,ch__$1,meta21180__$1,___$2,fn1__$1,meta21183){
return (new cljs.core.async.t_cljs$core$async21182(map_LT___$1,f__$1,ch__$1,meta21180__$1,___$2,fn1__$1,meta21183));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21182(self__.map_LT_,self__.f,self__.ch,self__.meta21180,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21180","meta21180",1849090054,null)], null);
});

cljs.core.async.t_cljs$core$async21179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21179";

cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21179");
});

cljs.core.async.__GT_t_cljs$core$async21179 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21179(map_LT___$1,f__$1,ch__$1,meta21180){
return (new cljs.core.async.t_cljs$core$async21179(map_LT___$1,f__$1,ch__$1,meta21180));
});

}

return (new cljs.core.async.t_cljs$core$async21179(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21188 = (function (map_GT_,f,ch,meta21189){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21189 = meta21189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21190,meta21189__$1){
var self__ = this;
var _21190__$1 = this;
return (new cljs.core.async.t_cljs$core$async21188(self__.map_GT_,self__.f,self__.ch,meta21189__$1));
});

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21190){
var self__ = this;
var _21190__$1 = this;
return self__.meta21189;
});

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21189","meta21189",-2044618485,null)], null);
});

cljs.core.async.t_cljs$core$async21188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21188";

cljs.core.async.t_cljs$core$async21188.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21188");
});

cljs.core.async.__GT_t_cljs$core$async21188 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21188(map_GT___$1,f__$1,ch__$1,meta21189){
return (new cljs.core.async.t_cljs$core$async21188(map_GT___$1,f__$1,ch__$1,meta21189));
});

}

return (new cljs.core.async.t_cljs$core$async21188(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21194 = (function (filter_GT_,p,ch,meta21195){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21195 = meta21195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21196,meta21195__$1){
var self__ = this;
var _21196__$1 = this;
return (new cljs.core.async.t_cljs$core$async21194(self__.filter_GT_,self__.p,self__.ch,meta21195__$1));
});

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21196){
var self__ = this;
var _21196__$1 = this;
return self__.meta21195;
});

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21195","meta21195",-1007580366,null)], null);
});

cljs.core.async.t_cljs$core$async21194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21194";

cljs.core.async.t_cljs$core$async21194.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21194");
});

cljs.core.async.__GT_t_cljs$core$async21194 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21194(filter_GT___$1,p__$1,ch__$1,meta21195){
return (new cljs.core.async.t_cljs$core$async21194(filter_GT___$1,p__$1,ch__$1,meta21195));
});

}

return (new cljs.core.async.t_cljs$core$async21194(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21197 = [];
var len__17884__auto___21241 = arguments.length;
var i__17885__auto___21242 = (0);
while(true){
if((i__17885__auto___21242 < len__17884__auto___21241)){
args21197.push((arguments[i__17885__auto___21242]));

var G__21243 = (i__17885__auto___21242 + (1));
i__17885__auto___21242 = G__21243;
continue;
} else {
}
break;
}

var G__21199 = args21197.length;
switch (G__21199) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21197.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18995__auto___21245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___21245,out){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___21245,out){
return (function (state_21220){
var state_val_21221 = (state_21220[(1)]);
if((state_val_21221 === (7))){
var inst_21216 = (state_21220[(2)]);
var state_21220__$1 = state_21220;
var statearr_21222_21246 = state_21220__$1;
(statearr_21222_21246[(2)] = inst_21216);

(statearr_21222_21246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (1))){
var state_21220__$1 = state_21220;
var statearr_21223_21247 = state_21220__$1;
(statearr_21223_21247[(2)] = null);

(statearr_21223_21247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (4))){
var inst_21202 = (state_21220[(7)]);
var inst_21202__$1 = (state_21220[(2)]);
var inst_21203 = (inst_21202__$1 == null);
var state_21220__$1 = (function (){var statearr_21224 = state_21220;
(statearr_21224[(7)] = inst_21202__$1);

return statearr_21224;
})();
if(cljs.core.truth_(inst_21203)){
var statearr_21225_21248 = state_21220__$1;
(statearr_21225_21248[(1)] = (5));

} else {
var statearr_21226_21249 = state_21220__$1;
(statearr_21226_21249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (6))){
var inst_21202 = (state_21220[(7)]);
var inst_21207 = p.call(null,inst_21202);
var state_21220__$1 = state_21220;
if(cljs.core.truth_(inst_21207)){
var statearr_21227_21250 = state_21220__$1;
(statearr_21227_21250[(1)] = (8));

} else {
var statearr_21228_21251 = state_21220__$1;
(statearr_21228_21251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (3))){
var inst_21218 = (state_21220[(2)]);
var state_21220__$1 = state_21220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21220__$1,inst_21218);
} else {
if((state_val_21221 === (2))){
var state_21220__$1 = state_21220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21220__$1,(4),ch);
} else {
if((state_val_21221 === (11))){
var inst_21210 = (state_21220[(2)]);
var state_21220__$1 = state_21220;
var statearr_21229_21252 = state_21220__$1;
(statearr_21229_21252[(2)] = inst_21210);

(statearr_21229_21252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (9))){
var state_21220__$1 = state_21220;
var statearr_21230_21253 = state_21220__$1;
(statearr_21230_21253[(2)] = null);

(statearr_21230_21253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (5))){
var inst_21205 = cljs.core.async.close_BANG_.call(null,out);
var state_21220__$1 = state_21220;
var statearr_21231_21254 = state_21220__$1;
(statearr_21231_21254[(2)] = inst_21205);

(statearr_21231_21254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (10))){
var inst_21213 = (state_21220[(2)]);
var state_21220__$1 = (function (){var statearr_21232 = state_21220;
(statearr_21232[(8)] = inst_21213);

return statearr_21232;
})();
var statearr_21233_21255 = state_21220__$1;
(statearr_21233_21255[(2)] = null);

(statearr_21233_21255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21221 === (8))){
var inst_21202 = (state_21220[(7)]);
var state_21220__$1 = state_21220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21220__$1,(11),out,inst_21202);
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
});})(c__18995__auto___21245,out))
;
return ((function (switch__18883__auto__,c__18995__auto___21245,out){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_21237 = [null,null,null,null,null,null,null,null,null];
(statearr_21237[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_21237[(1)] = (1));

return statearr_21237;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_21220){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_21220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21238){if((e21238 instanceof Object)){
var ex__18887__auto__ = e21238;
var statearr_21239_21256 = state_21220;
(statearr_21239_21256[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21257 = state_21220;
state_21220 = G__21257;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_21220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_21220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___21245,out))
})();
var state__18997__auto__ = (function (){var statearr_21240 = f__18996__auto__.call(null);
(statearr_21240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___21245);

return statearr_21240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___21245,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21258 = [];
var len__17884__auto___21261 = arguments.length;
var i__17885__auto___21262 = (0);
while(true){
if((i__17885__auto___21262 < len__17884__auto___21261)){
args21258.push((arguments[i__17885__auto___21262]));

var G__21263 = (i__17885__auto___21262 + (1));
i__17885__auto___21262 = G__21263;
continue;
} else {
}
break;
}

var G__21260 = args21258.length;
switch (G__21260) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21258.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18995__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto__){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto__){
return (function (state_21430){
var state_val_21431 = (state_21430[(1)]);
if((state_val_21431 === (7))){
var inst_21426 = (state_21430[(2)]);
var state_21430__$1 = state_21430;
var statearr_21432_21473 = state_21430__$1;
(statearr_21432_21473[(2)] = inst_21426);

(statearr_21432_21473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (20))){
var inst_21396 = (state_21430[(7)]);
var inst_21407 = (state_21430[(2)]);
var inst_21408 = cljs.core.next.call(null,inst_21396);
var inst_21382 = inst_21408;
var inst_21383 = null;
var inst_21384 = (0);
var inst_21385 = (0);
var state_21430__$1 = (function (){var statearr_21433 = state_21430;
(statearr_21433[(8)] = inst_21382);

(statearr_21433[(9)] = inst_21407);

(statearr_21433[(10)] = inst_21385);

(statearr_21433[(11)] = inst_21383);

(statearr_21433[(12)] = inst_21384);

return statearr_21433;
})();
var statearr_21434_21474 = state_21430__$1;
(statearr_21434_21474[(2)] = null);

(statearr_21434_21474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (1))){
var state_21430__$1 = state_21430;
var statearr_21435_21475 = state_21430__$1;
(statearr_21435_21475[(2)] = null);

(statearr_21435_21475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (4))){
var inst_21371 = (state_21430[(13)]);
var inst_21371__$1 = (state_21430[(2)]);
var inst_21372 = (inst_21371__$1 == null);
var state_21430__$1 = (function (){var statearr_21436 = state_21430;
(statearr_21436[(13)] = inst_21371__$1);

return statearr_21436;
})();
if(cljs.core.truth_(inst_21372)){
var statearr_21437_21476 = state_21430__$1;
(statearr_21437_21476[(1)] = (5));

} else {
var statearr_21438_21477 = state_21430__$1;
(statearr_21438_21477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (15))){
var state_21430__$1 = state_21430;
var statearr_21442_21478 = state_21430__$1;
(statearr_21442_21478[(2)] = null);

(statearr_21442_21478[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (21))){
var state_21430__$1 = state_21430;
var statearr_21443_21479 = state_21430__$1;
(statearr_21443_21479[(2)] = null);

(statearr_21443_21479[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (13))){
var inst_21382 = (state_21430[(8)]);
var inst_21385 = (state_21430[(10)]);
var inst_21383 = (state_21430[(11)]);
var inst_21384 = (state_21430[(12)]);
var inst_21392 = (state_21430[(2)]);
var inst_21393 = (inst_21385 + (1));
var tmp21439 = inst_21382;
var tmp21440 = inst_21383;
var tmp21441 = inst_21384;
var inst_21382__$1 = tmp21439;
var inst_21383__$1 = tmp21440;
var inst_21384__$1 = tmp21441;
var inst_21385__$1 = inst_21393;
var state_21430__$1 = (function (){var statearr_21444 = state_21430;
(statearr_21444[(8)] = inst_21382__$1);

(statearr_21444[(14)] = inst_21392);

(statearr_21444[(10)] = inst_21385__$1);

(statearr_21444[(11)] = inst_21383__$1);

(statearr_21444[(12)] = inst_21384__$1);

return statearr_21444;
})();
var statearr_21445_21480 = state_21430__$1;
(statearr_21445_21480[(2)] = null);

(statearr_21445_21480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (22))){
var state_21430__$1 = state_21430;
var statearr_21446_21481 = state_21430__$1;
(statearr_21446_21481[(2)] = null);

(statearr_21446_21481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (6))){
var inst_21371 = (state_21430[(13)]);
var inst_21380 = f.call(null,inst_21371);
var inst_21381 = cljs.core.seq.call(null,inst_21380);
var inst_21382 = inst_21381;
var inst_21383 = null;
var inst_21384 = (0);
var inst_21385 = (0);
var state_21430__$1 = (function (){var statearr_21447 = state_21430;
(statearr_21447[(8)] = inst_21382);

(statearr_21447[(10)] = inst_21385);

(statearr_21447[(11)] = inst_21383);

(statearr_21447[(12)] = inst_21384);

return statearr_21447;
})();
var statearr_21448_21482 = state_21430__$1;
(statearr_21448_21482[(2)] = null);

(statearr_21448_21482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (17))){
var inst_21396 = (state_21430[(7)]);
var inst_21400 = cljs.core.chunk_first.call(null,inst_21396);
var inst_21401 = cljs.core.chunk_rest.call(null,inst_21396);
var inst_21402 = cljs.core.count.call(null,inst_21400);
var inst_21382 = inst_21401;
var inst_21383 = inst_21400;
var inst_21384 = inst_21402;
var inst_21385 = (0);
var state_21430__$1 = (function (){var statearr_21449 = state_21430;
(statearr_21449[(8)] = inst_21382);

(statearr_21449[(10)] = inst_21385);

(statearr_21449[(11)] = inst_21383);

(statearr_21449[(12)] = inst_21384);

return statearr_21449;
})();
var statearr_21450_21483 = state_21430__$1;
(statearr_21450_21483[(2)] = null);

(statearr_21450_21483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (3))){
var inst_21428 = (state_21430[(2)]);
var state_21430__$1 = state_21430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21430__$1,inst_21428);
} else {
if((state_val_21431 === (12))){
var inst_21416 = (state_21430[(2)]);
var state_21430__$1 = state_21430;
var statearr_21451_21484 = state_21430__$1;
(statearr_21451_21484[(2)] = inst_21416);

(statearr_21451_21484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (2))){
var state_21430__$1 = state_21430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21430__$1,(4),in$);
} else {
if((state_val_21431 === (23))){
var inst_21424 = (state_21430[(2)]);
var state_21430__$1 = state_21430;
var statearr_21452_21485 = state_21430__$1;
(statearr_21452_21485[(2)] = inst_21424);

(statearr_21452_21485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (19))){
var inst_21411 = (state_21430[(2)]);
var state_21430__$1 = state_21430;
var statearr_21453_21486 = state_21430__$1;
(statearr_21453_21486[(2)] = inst_21411);

(statearr_21453_21486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (11))){
var inst_21382 = (state_21430[(8)]);
var inst_21396 = (state_21430[(7)]);
var inst_21396__$1 = cljs.core.seq.call(null,inst_21382);
var state_21430__$1 = (function (){var statearr_21454 = state_21430;
(statearr_21454[(7)] = inst_21396__$1);

return statearr_21454;
})();
if(inst_21396__$1){
var statearr_21455_21487 = state_21430__$1;
(statearr_21455_21487[(1)] = (14));

} else {
var statearr_21456_21488 = state_21430__$1;
(statearr_21456_21488[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (9))){
var inst_21418 = (state_21430[(2)]);
var inst_21419 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21430__$1 = (function (){var statearr_21457 = state_21430;
(statearr_21457[(15)] = inst_21418);

return statearr_21457;
})();
if(cljs.core.truth_(inst_21419)){
var statearr_21458_21489 = state_21430__$1;
(statearr_21458_21489[(1)] = (21));

} else {
var statearr_21459_21490 = state_21430__$1;
(statearr_21459_21490[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (5))){
var inst_21374 = cljs.core.async.close_BANG_.call(null,out);
var state_21430__$1 = state_21430;
var statearr_21460_21491 = state_21430__$1;
(statearr_21460_21491[(2)] = inst_21374);

(statearr_21460_21491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (14))){
var inst_21396 = (state_21430[(7)]);
var inst_21398 = cljs.core.chunked_seq_QMARK_.call(null,inst_21396);
var state_21430__$1 = state_21430;
if(inst_21398){
var statearr_21461_21492 = state_21430__$1;
(statearr_21461_21492[(1)] = (17));

} else {
var statearr_21462_21493 = state_21430__$1;
(statearr_21462_21493[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (16))){
var inst_21414 = (state_21430[(2)]);
var state_21430__$1 = state_21430;
var statearr_21463_21494 = state_21430__$1;
(statearr_21463_21494[(2)] = inst_21414);

(statearr_21463_21494[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21431 === (10))){
var inst_21385 = (state_21430[(10)]);
var inst_21383 = (state_21430[(11)]);
var inst_21390 = cljs.core._nth.call(null,inst_21383,inst_21385);
var state_21430__$1 = state_21430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21430__$1,(13),out,inst_21390);
} else {
if((state_val_21431 === (18))){
var inst_21396 = (state_21430[(7)]);
var inst_21405 = cljs.core.first.call(null,inst_21396);
var state_21430__$1 = state_21430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21430__$1,(20),out,inst_21405);
} else {
if((state_val_21431 === (8))){
var inst_21385 = (state_21430[(10)]);
var inst_21384 = (state_21430[(12)]);
var inst_21387 = (inst_21385 < inst_21384);
var inst_21388 = inst_21387;
var state_21430__$1 = state_21430;
if(cljs.core.truth_(inst_21388)){
var statearr_21464_21495 = state_21430__$1;
(statearr_21464_21495[(1)] = (10));

} else {
var statearr_21465_21496 = state_21430__$1;
(statearr_21465_21496[(1)] = (11));

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
});})(c__18995__auto__))
;
return ((function (switch__18883__auto__,c__18995__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18884__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18884__auto____0 = (function (){
var statearr_21469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21469[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18884__auto__);

(statearr_21469[(1)] = (1));

return statearr_21469;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18884__auto____1 = (function (state_21430){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_21430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21470){if((e21470 instanceof Object)){
var ex__18887__auto__ = e21470;
var statearr_21471_21497 = state_21430;
(statearr_21471_21497[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21498 = state_21430;
state_21430 = G__21498;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18884__auto__ = function(state_21430){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18884__auto____1.call(this,state_21430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18884__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18884__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto__))
})();
var state__18997__auto__ = (function (){var statearr_21472 = f__18996__auto__.call(null);
(statearr_21472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto__);

return statearr_21472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto__))
);

return c__18995__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21499 = [];
var len__17884__auto___21502 = arguments.length;
var i__17885__auto___21503 = (0);
while(true){
if((i__17885__auto___21503 < len__17884__auto___21502)){
args21499.push((arguments[i__17885__auto___21503]));

var G__21504 = (i__17885__auto___21503 + (1));
i__17885__auto___21503 = G__21504;
continue;
} else {
}
break;
}

var G__21501 = args21499.length;
switch (G__21501) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21499.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21506 = [];
var len__17884__auto___21509 = arguments.length;
var i__17885__auto___21510 = (0);
while(true){
if((i__17885__auto___21510 < len__17884__auto___21509)){
args21506.push((arguments[i__17885__auto___21510]));

var G__21511 = (i__17885__auto___21510 + (1));
i__17885__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var G__21508 = args21506.length;
switch (G__21508) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21506.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21513 = [];
var len__17884__auto___21564 = arguments.length;
var i__17885__auto___21565 = (0);
while(true){
if((i__17885__auto___21565 < len__17884__auto___21564)){
args21513.push((arguments[i__17885__auto___21565]));

var G__21566 = (i__17885__auto___21565 + (1));
i__17885__auto___21565 = G__21566;
continue;
} else {
}
break;
}

var G__21515 = args21513.length;
switch (G__21515) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21513.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18995__auto___21568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___21568,out){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___21568,out){
return (function (state_21539){
var state_val_21540 = (state_21539[(1)]);
if((state_val_21540 === (7))){
var inst_21534 = (state_21539[(2)]);
var state_21539__$1 = state_21539;
var statearr_21541_21569 = state_21539__$1;
(statearr_21541_21569[(2)] = inst_21534);

(statearr_21541_21569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (1))){
var inst_21516 = null;
var state_21539__$1 = (function (){var statearr_21542 = state_21539;
(statearr_21542[(7)] = inst_21516);

return statearr_21542;
})();
var statearr_21543_21570 = state_21539__$1;
(statearr_21543_21570[(2)] = null);

(statearr_21543_21570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (4))){
var inst_21519 = (state_21539[(8)]);
var inst_21519__$1 = (state_21539[(2)]);
var inst_21520 = (inst_21519__$1 == null);
var inst_21521 = cljs.core.not.call(null,inst_21520);
var state_21539__$1 = (function (){var statearr_21544 = state_21539;
(statearr_21544[(8)] = inst_21519__$1);

return statearr_21544;
})();
if(inst_21521){
var statearr_21545_21571 = state_21539__$1;
(statearr_21545_21571[(1)] = (5));

} else {
var statearr_21546_21572 = state_21539__$1;
(statearr_21546_21572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (6))){
var state_21539__$1 = state_21539;
var statearr_21547_21573 = state_21539__$1;
(statearr_21547_21573[(2)] = null);

(statearr_21547_21573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (3))){
var inst_21536 = (state_21539[(2)]);
var inst_21537 = cljs.core.async.close_BANG_.call(null,out);
var state_21539__$1 = (function (){var statearr_21548 = state_21539;
(statearr_21548[(9)] = inst_21536);

return statearr_21548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21539__$1,inst_21537);
} else {
if((state_val_21540 === (2))){
var state_21539__$1 = state_21539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21539__$1,(4),ch);
} else {
if((state_val_21540 === (11))){
var inst_21519 = (state_21539[(8)]);
var inst_21528 = (state_21539[(2)]);
var inst_21516 = inst_21519;
var state_21539__$1 = (function (){var statearr_21549 = state_21539;
(statearr_21549[(7)] = inst_21516);

(statearr_21549[(10)] = inst_21528);

return statearr_21549;
})();
var statearr_21550_21574 = state_21539__$1;
(statearr_21550_21574[(2)] = null);

(statearr_21550_21574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (9))){
var inst_21519 = (state_21539[(8)]);
var state_21539__$1 = state_21539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21539__$1,(11),out,inst_21519);
} else {
if((state_val_21540 === (5))){
var inst_21516 = (state_21539[(7)]);
var inst_21519 = (state_21539[(8)]);
var inst_21523 = cljs.core._EQ_.call(null,inst_21519,inst_21516);
var state_21539__$1 = state_21539;
if(inst_21523){
var statearr_21552_21575 = state_21539__$1;
(statearr_21552_21575[(1)] = (8));

} else {
var statearr_21553_21576 = state_21539__$1;
(statearr_21553_21576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (10))){
var inst_21531 = (state_21539[(2)]);
var state_21539__$1 = state_21539;
var statearr_21554_21577 = state_21539__$1;
(statearr_21554_21577[(2)] = inst_21531);

(statearr_21554_21577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21540 === (8))){
var inst_21516 = (state_21539[(7)]);
var tmp21551 = inst_21516;
var inst_21516__$1 = tmp21551;
var state_21539__$1 = (function (){var statearr_21555 = state_21539;
(statearr_21555[(7)] = inst_21516__$1);

return statearr_21555;
})();
var statearr_21556_21578 = state_21539__$1;
(statearr_21556_21578[(2)] = null);

(statearr_21556_21578[(1)] = (2));


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
});})(c__18995__auto___21568,out))
;
return ((function (switch__18883__auto__,c__18995__auto___21568,out){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_21560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21560[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_21560[(1)] = (1));

return statearr_21560;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_21539){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_21539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21561){if((e21561 instanceof Object)){
var ex__18887__auto__ = e21561;
var statearr_21562_21579 = state_21539;
(statearr_21562_21579[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21580 = state_21539;
state_21539 = G__21580;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_21539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_21539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___21568,out))
})();
var state__18997__auto__ = (function (){var statearr_21563 = f__18996__auto__.call(null);
(statearr_21563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___21568);

return statearr_21563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___21568,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21581 = [];
var len__17884__auto___21651 = arguments.length;
var i__17885__auto___21652 = (0);
while(true){
if((i__17885__auto___21652 < len__17884__auto___21651)){
args21581.push((arguments[i__17885__auto___21652]));

var G__21653 = (i__17885__auto___21652 + (1));
i__17885__auto___21652 = G__21653;
continue;
} else {
}
break;
}

var G__21583 = args21581.length;
switch (G__21583) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21581.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18995__auto___21655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___21655,out){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___21655,out){
return (function (state_21621){
var state_val_21622 = (state_21621[(1)]);
if((state_val_21622 === (7))){
var inst_21617 = (state_21621[(2)]);
var state_21621__$1 = state_21621;
var statearr_21623_21656 = state_21621__$1;
(statearr_21623_21656[(2)] = inst_21617);

(statearr_21623_21656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (1))){
var inst_21584 = (new Array(n));
var inst_21585 = inst_21584;
var inst_21586 = (0);
var state_21621__$1 = (function (){var statearr_21624 = state_21621;
(statearr_21624[(7)] = inst_21585);

(statearr_21624[(8)] = inst_21586);

return statearr_21624;
})();
var statearr_21625_21657 = state_21621__$1;
(statearr_21625_21657[(2)] = null);

(statearr_21625_21657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (4))){
var inst_21589 = (state_21621[(9)]);
var inst_21589__$1 = (state_21621[(2)]);
var inst_21590 = (inst_21589__$1 == null);
var inst_21591 = cljs.core.not.call(null,inst_21590);
var state_21621__$1 = (function (){var statearr_21626 = state_21621;
(statearr_21626[(9)] = inst_21589__$1);

return statearr_21626;
})();
if(inst_21591){
var statearr_21627_21658 = state_21621__$1;
(statearr_21627_21658[(1)] = (5));

} else {
var statearr_21628_21659 = state_21621__$1;
(statearr_21628_21659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (15))){
var inst_21611 = (state_21621[(2)]);
var state_21621__$1 = state_21621;
var statearr_21629_21660 = state_21621__$1;
(statearr_21629_21660[(2)] = inst_21611);

(statearr_21629_21660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (13))){
var state_21621__$1 = state_21621;
var statearr_21630_21661 = state_21621__$1;
(statearr_21630_21661[(2)] = null);

(statearr_21630_21661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (6))){
var inst_21586 = (state_21621[(8)]);
var inst_21607 = (inst_21586 > (0));
var state_21621__$1 = state_21621;
if(cljs.core.truth_(inst_21607)){
var statearr_21631_21662 = state_21621__$1;
(statearr_21631_21662[(1)] = (12));

} else {
var statearr_21632_21663 = state_21621__$1;
(statearr_21632_21663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (3))){
var inst_21619 = (state_21621[(2)]);
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21621__$1,inst_21619);
} else {
if((state_val_21622 === (12))){
var inst_21585 = (state_21621[(7)]);
var inst_21609 = cljs.core.vec.call(null,inst_21585);
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21621__$1,(15),out,inst_21609);
} else {
if((state_val_21622 === (2))){
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21621__$1,(4),ch);
} else {
if((state_val_21622 === (11))){
var inst_21601 = (state_21621[(2)]);
var inst_21602 = (new Array(n));
var inst_21585 = inst_21602;
var inst_21586 = (0);
var state_21621__$1 = (function (){var statearr_21633 = state_21621;
(statearr_21633[(7)] = inst_21585);

(statearr_21633[(10)] = inst_21601);

(statearr_21633[(8)] = inst_21586);

return statearr_21633;
})();
var statearr_21634_21664 = state_21621__$1;
(statearr_21634_21664[(2)] = null);

(statearr_21634_21664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (9))){
var inst_21585 = (state_21621[(7)]);
var inst_21599 = cljs.core.vec.call(null,inst_21585);
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21621__$1,(11),out,inst_21599);
} else {
if((state_val_21622 === (5))){
var inst_21589 = (state_21621[(9)]);
var inst_21585 = (state_21621[(7)]);
var inst_21594 = (state_21621[(11)]);
var inst_21586 = (state_21621[(8)]);
var inst_21593 = (inst_21585[inst_21586] = inst_21589);
var inst_21594__$1 = (inst_21586 + (1));
var inst_21595 = (inst_21594__$1 < n);
var state_21621__$1 = (function (){var statearr_21635 = state_21621;
(statearr_21635[(12)] = inst_21593);

(statearr_21635[(11)] = inst_21594__$1);

return statearr_21635;
})();
if(cljs.core.truth_(inst_21595)){
var statearr_21636_21665 = state_21621__$1;
(statearr_21636_21665[(1)] = (8));

} else {
var statearr_21637_21666 = state_21621__$1;
(statearr_21637_21666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (14))){
var inst_21614 = (state_21621[(2)]);
var inst_21615 = cljs.core.async.close_BANG_.call(null,out);
var state_21621__$1 = (function (){var statearr_21639 = state_21621;
(statearr_21639[(13)] = inst_21614);

return statearr_21639;
})();
var statearr_21640_21667 = state_21621__$1;
(statearr_21640_21667[(2)] = inst_21615);

(statearr_21640_21667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (10))){
var inst_21605 = (state_21621[(2)]);
var state_21621__$1 = state_21621;
var statearr_21641_21668 = state_21621__$1;
(statearr_21641_21668[(2)] = inst_21605);

(statearr_21641_21668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21622 === (8))){
var inst_21585 = (state_21621[(7)]);
var inst_21594 = (state_21621[(11)]);
var tmp21638 = inst_21585;
var inst_21585__$1 = tmp21638;
var inst_21586 = inst_21594;
var state_21621__$1 = (function (){var statearr_21642 = state_21621;
(statearr_21642[(7)] = inst_21585__$1);

(statearr_21642[(8)] = inst_21586);

return statearr_21642;
})();
var statearr_21643_21669 = state_21621__$1;
(statearr_21643_21669[(2)] = null);

(statearr_21643_21669[(1)] = (2));


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
});})(c__18995__auto___21655,out))
;
return ((function (switch__18883__auto__,c__18995__auto___21655,out){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_21647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21647[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_21647[(1)] = (1));

return statearr_21647;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_21621){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_21621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21648){if((e21648 instanceof Object)){
var ex__18887__auto__ = e21648;
var statearr_21649_21670 = state_21621;
(statearr_21649_21670[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21671 = state_21621;
state_21621 = G__21671;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_21621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_21621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___21655,out))
})();
var state__18997__auto__ = (function (){var statearr_21650 = f__18996__auto__.call(null);
(statearr_21650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___21655);

return statearr_21650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___21655,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21672 = [];
var len__17884__auto___21746 = arguments.length;
var i__17885__auto___21747 = (0);
while(true){
if((i__17885__auto___21747 < len__17884__auto___21746)){
args21672.push((arguments[i__17885__auto___21747]));

var G__21748 = (i__17885__auto___21747 + (1));
i__17885__auto___21747 = G__21748;
continue;
} else {
}
break;
}

var G__21674 = args21672.length;
switch (G__21674) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21672.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18995__auto___21750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18995__auto___21750,out){
return (function (){
var f__18996__auto__ = (function (){var switch__18883__auto__ = ((function (c__18995__auto___21750,out){
return (function (state_21716){
var state_val_21717 = (state_21716[(1)]);
if((state_val_21717 === (7))){
var inst_21712 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21718_21751 = state_21716__$1;
(statearr_21718_21751[(2)] = inst_21712);

(statearr_21718_21751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (1))){
var inst_21675 = [];
var inst_21676 = inst_21675;
var inst_21677 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21716__$1 = (function (){var statearr_21719 = state_21716;
(statearr_21719[(7)] = inst_21676);

(statearr_21719[(8)] = inst_21677);

return statearr_21719;
})();
var statearr_21720_21752 = state_21716__$1;
(statearr_21720_21752[(2)] = null);

(statearr_21720_21752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (4))){
var inst_21680 = (state_21716[(9)]);
var inst_21680__$1 = (state_21716[(2)]);
var inst_21681 = (inst_21680__$1 == null);
var inst_21682 = cljs.core.not.call(null,inst_21681);
var state_21716__$1 = (function (){var statearr_21721 = state_21716;
(statearr_21721[(9)] = inst_21680__$1);

return statearr_21721;
})();
if(inst_21682){
var statearr_21722_21753 = state_21716__$1;
(statearr_21722_21753[(1)] = (5));

} else {
var statearr_21723_21754 = state_21716__$1;
(statearr_21723_21754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (15))){
var inst_21706 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21724_21755 = state_21716__$1;
(statearr_21724_21755[(2)] = inst_21706);

(statearr_21724_21755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (13))){
var state_21716__$1 = state_21716;
var statearr_21725_21756 = state_21716__$1;
(statearr_21725_21756[(2)] = null);

(statearr_21725_21756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (6))){
var inst_21676 = (state_21716[(7)]);
var inst_21701 = inst_21676.length;
var inst_21702 = (inst_21701 > (0));
var state_21716__$1 = state_21716;
if(cljs.core.truth_(inst_21702)){
var statearr_21726_21757 = state_21716__$1;
(statearr_21726_21757[(1)] = (12));

} else {
var statearr_21727_21758 = state_21716__$1;
(statearr_21727_21758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (3))){
var inst_21714 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21716__$1,inst_21714);
} else {
if((state_val_21717 === (12))){
var inst_21676 = (state_21716[(7)]);
var inst_21704 = cljs.core.vec.call(null,inst_21676);
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21716__$1,(15),out,inst_21704);
} else {
if((state_val_21717 === (2))){
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21716__$1,(4),ch);
} else {
if((state_val_21717 === (11))){
var inst_21684 = (state_21716[(10)]);
var inst_21680 = (state_21716[(9)]);
var inst_21694 = (state_21716[(2)]);
var inst_21695 = [];
var inst_21696 = inst_21695.push(inst_21680);
var inst_21676 = inst_21695;
var inst_21677 = inst_21684;
var state_21716__$1 = (function (){var statearr_21728 = state_21716;
(statearr_21728[(11)] = inst_21694);

(statearr_21728[(7)] = inst_21676);

(statearr_21728[(12)] = inst_21696);

(statearr_21728[(8)] = inst_21677);

return statearr_21728;
})();
var statearr_21729_21759 = state_21716__$1;
(statearr_21729_21759[(2)] = null);

(statearr_21729_21759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (9))){
var inst_21676 = (state_21716[(7)]);
var inst_21692 = cljs.core.vec.call(null,inst_21676);
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21716__$1,(11),out,inst_21692);
} else {
if((state_val_21717 === (5))){
var inst_21684 = (state_21716[(10)]);
var inst_21680 = (state_21716[(9)]);
var inst_21677 = (state_21716[(8)]);
var inst_21684__$1 = f.call(null,inst_21680);
var inst_21685 = cljs.core._EQ_.call(null,inst_21684__$1,inst_21677);
var inst_21686 = cljs.core.keyword_identical_QMARK_.call(null,inst_21677,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21687 = (inst_21685) || (inst_21686);
var state_21716__$1 = (function (){var statearr_21730 = state_21716;
(statearr_21730[(10)] = inst_21684__$1);

return statearr_21730;
})();
if(cljs.core.truth_(inst_21687)){
var statearr_21731_21760 = state_21716__$1;
(statearr_21731_21760[(1)] = (8));

} else {
var statearr_21732_21761 = state_21716__$1;
(statearr_21732_21761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (14))){
var inst_21709 = (state_21716[(2)]);
var inst_21710 = cljs.core.async.close_BANG_.call(null,out);
var state_21716__$1 = (function (){var statearr_21734 = state_21716;
(statearr_21734[(13)] = inst_21709);

return statearr_21734;
})();
var statearr_21735_21762 = state_21716__$1;
(statearr_21735_21762[(2)] = inst_21710);

(statearr_21735_21762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (10))){
var inst_21699 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21736_21763 = state_21716__$1;
(statearr_21736_21763[(2)] = inst_21699);

(statearr_21736_21763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (8))){
var inst_21676 = (state_21716[(7)]);
var inst_21684 = (state_21716[(10)]);
var inst_21680 = (state_21716[(9)]);
var inst_21689 = inst_21676.push(inst_21680);
var tmp21733 = inst_21676;
var inst_21676__$1 = tmp21733;
var inst_21677 = inst_21684;
var state_21716__$1 = (function (){var statearr_21737 = state_21716;
(statearr_21737[(7)] = inst_21676__$1);

(statearr_21737[(14)] = inst_21689);

(statearr_21737[(8)] = inst_21677);

return statearr_21737;
})();
var statearr_21738_21764 = state_21716__$1;
(statearr_21738_21764[(2)] = null);

(statearr_21738_21764[(1)] = (2));


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
});})(c__18995__auto___21750,out))
;
return ((function (switch__18883__auto__,c__18995__auto___21750,out){
return (function() {
var cljs$core$async$state_machine__18884__auto__ = null;
var cljs$core$async$state_machine__18884__auto____0 = (function (){
var statearr_21742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21742[(0)] = cljs$core$async$state_machine__18884__auto__);

(statearr_21742[(1)] = (1));

return statearr_21742;
});
var cljs$core$async$state_machine__18884__auto____1 = (function (state_21716){
while(true){
var ret_value__18885__auto__ = (function (){try{while(true){
var result__18886__auto__ = switch__18883__auto__.call(null,state_21716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18886__auto__;
}
break;
}
}catch (e21743){if((e21743 instanceof Object)){
var ex__18887__auto__ = e21743;
var statearr_21744_21765 = state_21716;
(statearr_21744_21765[(5)] = ex__18887__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21766 = state_21716;
state_21716 = G__21766;
continue;
} else {
return ret_value__18885__auto__;
}
break;
}
});
cljs$core$async$state_machine__18884__auto__ = function(state_21716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18884__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18884__auto____1.call(this,state_21716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18884__auto____0;
cljs$core$async$state_machine__18884__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18884__auto____1;
return cljs$core$async$state_machine__18884__auto__;
})()
;})(switch__18883__auto__,c__18995__auto___21750,out))
})();
var state__18997__auto__ = (function (){var statearr_21745 = f__18996__auto__.call(null);
(statearr_21745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18995__auto___21750);

return statearr_21745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18997__auto__);
});})(c__18995__auto___21750,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1450798004759