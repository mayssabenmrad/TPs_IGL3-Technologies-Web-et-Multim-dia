interface user{
    id:number;
    name:string;
    email?:string;
    readonly isAdmin:boolean;
}

const user1={
    id:1,
    name:"Mayssa",
    isAdmin:true
};

interface Admin extends user{
    permissions:string[];
}

const admin: Admin={
    id:2,
    name:"ben mrad",
    isAdmin:true,
    permissions:["read"]
};
console.log(user1);
console.log(admin);