//le Spread Operator ...
const tab1=[1,2,3];
const tab2=[4,5,6];
const tabFusion=[...tab1, ...tab2];
console.log(tabFusion);

const user = { name: "Noor", age: 10, city: "Tunis" };
user.name="Mayssa";
console.log("avant la copie: ", user);

const userCopie={...user};
console.log("la copie avant la modif: ", userCopie);
userCopie.age=20;
console.log("la copie après la modif: ", userCopie);