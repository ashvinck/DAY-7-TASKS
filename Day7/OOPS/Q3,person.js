class person { ///declaring a class named 'person'.
    ////creating a constructor for the class 'person'.
  constructor (firstname, lastname, age, gender ,fatherName, address, phoneNumber, email) {
  this._firstname = firstname;
  this._lastname = lastname;
  this._age = age;
  this._gender = gender;
  this._fatherName = fatherName;
  this._address = address;
  this._phoneNumber = phoneNumber;
  this._email = email;
  }
  
  ///creating methods.
  firstname(){
    return this._firstname;
  }
  lastname(){
    return this._lastname;
  }
  age(){
    return this._age;
  }
  gender(){
    return this._gender; 
  }
  fatherName(){
    return this._fatherName;
  }
  address(){  
    return this._address;
  }
  phoneNumber(){ 
    return this._phoneNumber;
  }
  email(){ 
  return this._email;
  }
  }

///creating objects
  let obj1 = new person('John','Doe',36,'Male','Steve','2563B NewlandParkcity JA.','+0141345678','johndoe@outlook.com');
  let obj2 = new person('Kevin','Shepherd',44,'Male','Jeremy','44 Jersey City Street 34, Sydney,AU','+0141349088','kevinshepherd@gmail.com')


//calling and printing the method with obj ref
  console.log(obj1.firstname()); /// outputs "John"
  console.log(obj1.lastname()); /// outputs "Doe"
  console.log(obj2.firstname());/// outputs "Kevin".
  