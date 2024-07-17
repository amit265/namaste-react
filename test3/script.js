"use strict"


console.log(this);

function x(params) {
    console.log(this);
}

x();

window.x();


const obj = {
    a : 1,
    x : function () {
        console.log(this.a)
    }
}

obj.x();


const student = {
    name: "Amit",
    printName: function(){
        console.log(this.name);
    }
}

student.printName();

const student2 = {
    name: "Deepika"
}

student.printName.call(student2)





const student3 = {
    name: "Deepika",
    name2: "Kareena",
    x: () => {
        console.log(this);
    },
    y: function(){
        const z = () => {
            console.log(this.name2);
        };
        z();
    }
}


student3.x();

student3.y();

