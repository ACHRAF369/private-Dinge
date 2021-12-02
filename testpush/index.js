// new keyword

// user =  Object();

// user.firstnam = "achraf";
// user.lastnam = "lahmam";
// user["age"] = 22;
// user.func = function(){
//   return `full information is : ${user.firstnam} ${user.lastnam} ${user["age"]}`
// }

// console.log(user.func())

//******************************************************************//
//Defining Object whit object.create

//*************************************/

let mainObj = {
  hasDiscount:false,
  showMsg: function(){
    return `You${this.hasDiscount ? "" :" don't"} Have Discount`;
  }
}

//*************************************/
outerobj = Object.create(mainObj);

outerobj.hasDiscount = true;

console.log(outerobj.hasDiscount);
console.log(outerobj.showMsg())

  lastobj = Object.create(mainObj)

  console.log(lastobj.showMsg())
  
  //******************************************************************//
//Defining Object whit object.assign

const src1 = {
  prop1: "value1",
  prop2: "value2",
  method1 : function(){
    return `Methode1`;
  },
};

const src2 = {
  prop3: "value3",
  prop4: "value4",
  method1 : function(){
    return `Methode 2`;
  },
};
const target = {
  prop5:"value5",
}
Object.assign(target, src1);
console.log(target.method1());


