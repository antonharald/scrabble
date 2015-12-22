// Compiled by ClojureScript 1.7.170 {}
goog.provide('scrabble.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof scrabble.core.app_state !== 'undefined'){
} else {
scrabble.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
scrabble.core.on_js_reload = (function scrabble$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1450798002348