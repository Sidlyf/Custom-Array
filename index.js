
function myArray() {
    this.length = arguments.length;
  
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
  
  let arr3 = new myArray(1, 2, 3, 4, 5);
  
  // console.log(Object.values(arr3));
  
  arr = [1,2,3,4];
  length = 4;
  // push(6) ---> index 4
  
  myArray.prototype.push = function (value) {
    this[this.length] = value;
    this.length++;
  };
  
  myArray.prototype.pop = function () {
    delete this[this.length - 1];
    this.length--;
  };
  
  myArray.prototype.print = function () {
    console.log(Object.values(this));
  };
  
  arr3.pop();
  arr3.push(7);
  arr3.push(8);
  arr3.print();
  