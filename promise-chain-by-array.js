const initialData = [];

[
 (x, ok, no) => {
   setTimeout(y => {
    x.push(1);
    console.log("1", x, ok(x));
   }, 4000);
 },
 (x, ok, no) => {
   setTimeout(y => {
    x.push(2);
    console.log("2", x, ok(x));
   }, 3000);
 },
 (x, ok, no) => {
   setTimeout(y => {
    x.push(3);
    console.log("3", x, ok(x));
   }, 2000);
 },
 (x, ok, no) => {
   setTimeout(y => {
    x.push(4);
    console.log("4", x, ok(x));
   }, 1000);
 },
]

////////////////////////////
.reduce((c, p) => {
 return c.then(x => new Promise(p.bind(this, x)));
}, Promise.resolve(initialData))
////////////////////////////

.then(function(data) {
 console.log("5", data, initialData === data);
});
