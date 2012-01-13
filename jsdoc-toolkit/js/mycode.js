var MyClass = Class.create( 
/** @lends MyClass# */ 
{ 
    /**
     * Description of constructor.
     * @class Description of class.
     * @constructs
     */ 
    initialize : function(arg0, arg1) { 
        //... 
    }, 
    /** A method. */ 
    myFunc : function() { 
    }, 
    /** An instance field. */ 
    myVar : 123 
}); 
 
// ... and if you want to add class fields ... 
 
Object.extend(MyClass, 
/** @lends MyClass */ 
{ 
    /** A class method. */ 
    classFunc : function() { 
    } 
});

