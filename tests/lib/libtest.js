var x:string = NaN
var y:string = Number.MAX_VALUE;
var z:number = new TypeError().name;
var w:string = parseInt("...");

var a = new Map<string, string>();
a.delete('foobar');

var b = undefined;
if (undefined) {
}

queueMicrotask(() => {}); // ok
