actor {

  //Challenge 1: Write a function add that takes two natural numbers n and m and 
  //returns the sum.
  public func add ( m : Nat, n : Nat ) : async Nat {
    return ( m + n );
  };

  //Challenge 2: Write a function square that takes a natural number n and 
  //returns the area of a square of length n.
  public func square ( n : Nat ) : async Nat {
    return ( n * n );
  };

  //Challenge 3: Write a function days_to_second that takes a number of days n and 
  //returns the number of seconds.
  public func days_to_second ( n : Nat) : async Nat {
    return ( n * 24 * 60 * 60 );
  };

  //Challenge 4: Write two functions increment_counter & clear_counter.
  //  - increment_counter returns the incremented value of counter by n.
  //  - clear_counter sets the value of counter to 0.
  var counter : Nat = 0;
  public func increment_counter ( n : Nat) : async Nat {
    counter := counter + n;
    return (counter);
  };
  public func clear_counter() : async Nat {
    counter := 0;
    return (counter);
  };
  public query func show_counter() : async Nat {
    return (counter);
  };

  //Challenge 5: Write a function divide that takes two natural numbers n and m and 
  //returns a boolean indicating if n divides m.
  public query func modulo ( n : Nat, m : Nat ) : async Nat {
    return ( n % m );
  };
  public query func divide ( n : Nat, m : Nat ) : async Nat {
    return ( n / m );
  };
  public func test_divide ( n : Nat, m : Nat) : async Bool {
    if ( n % m == 0) {
      return (true)
      } else {
        return (false);
    }
  };

  //Challenge 6 : Write a function is_even that takes a natural number n and 
  //returns a boolean indicating if n is even.
  public func is_even ( n : Nat) : async Bool {
    if ( n % 2 == 0 ) {
      return (true)
    } else {
      return (false);
    }
  };

  //Challenge 7 : Write a function sum_of_array that takes an array of natural numbers and 
  //returns the sum. This function will returns 0 if the array is empty.
  //var array : [Nat] = [5, 6, 7, 8];
  //var n : Nat = 0;
  //public func sum_of_array ( n : Nat) : async Nat{
  //  for (value in array.vals()){
  //    n := n + value
  //  };
  //};

  //Challenge 8 : Write a function maximum that takes an array of natural numbers and 
  //returns the maximum value in the array. This function will returns 0 if the array is empty.

  //Challenge 9 : Write a function remove_from_array that takes 2 parameters : an array of 
  //natural numbers and a natural number n and returns a new array where all occurences of 
  //n have been removed (order should remain unchanged).

  //Challenge 10 :
  //  - Watch this video on selection sort. (https://www.youtube.com/watch?v=g-PGLbMth_g)
  //  - Implement a function selection_sort that takes an array of natural numbers and 
  //    returns the sorted array .
};
