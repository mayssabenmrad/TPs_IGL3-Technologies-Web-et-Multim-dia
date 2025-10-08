"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
console.log(identity(1));
console.log(identity("Hello"));
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([10, 20, 30]));
console.log(getFirst(["a", "b", "c"]));
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove(index) {
        this.items.splice(index, 1);
    }
    getAll() {
        return this.items;
    }
}
const exemple_Repo = new Repository();
exemple_Repo.add(1);
exemple_Repo.add(2);
console.log(exemple_Repo.getAll());
const example = { data: "exemple" };
//# sourceMappingURL=ex7.js.map