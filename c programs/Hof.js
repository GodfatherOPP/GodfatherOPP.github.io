users = [
    { name: 'Yazeed', age: 25},
    {name: 'Sam', age: 30},
    {name: 'Bill', age: 20}
  ];
//   without map method
  getName = (user) => user.name;

  usernames = [];
for (let i = 0; i < users.length; i++) {
  const name = getName(users[i]);

  usernames.push(name);
}

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]
// with map method
usernames = users.map(getName);
console.log(usernames);
// ["Yazeed", "Sam", "Bill"]