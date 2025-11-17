// Group objects by a property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 25 }
];
/* Expected output:
{
  21: ["Alice", "Bob"],
  25: ["Charlie"]
}
*/

const ans = people.reduce( (a, b) => {
    const key = b.age;
    if(!a[key]){
        a[key] = [];
    }
    a[key].push(b.name);
    return a;
}, {});

console.log(ans);