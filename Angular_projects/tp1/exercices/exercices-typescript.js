var nom = "Mayssa";
var age = 20;
var is_student = true;
function add(a, b) {
    return a + b;
}
var student = /** @class */ (function () {
    function student(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    student.prototype.affichage = function () {
        console.log("\u00C9tudiant #".concat(this.id, " : ").concat(this.prenom, " ").concat(this.nom, ", ").concat(this.age, " ans"));
    };
    return student;
}());
var etu1 = new student(1, "Ben Mrad", "Mayssa", 20);
etu1.affichage();
