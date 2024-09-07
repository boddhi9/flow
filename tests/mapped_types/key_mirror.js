declare function keyMirror<O>(o: O): {[K in keyof O]: K};

var o = keyMirror({
  FOO: null,
  BAR: null,
});

(o.FOO : 'FOO'); // ok
(o.FOO : 'BAR'); // error, 'FOO' incompatible with 'BAR'
