export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'clear_counter' : IDL.Func([], [IDL.Nat], []),
    'days_to_second' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'divide' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], ['query']),
    'increment_counter' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'is_even' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'max_in_array' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
    'max_in_array2' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
    'modulo' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], ['query']),
    'remove_from_array' : IDL.Func(
        [IDL.Vec(IDL.Nat), IDL.Nat],
        [IDL.Vec(IDL.Nat)],
        [],
      ),
    'show_counter' : IDL.Func([], [IDL.Nat], ['query']),
    'square' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'sum_of_array' : IDL.Func([IDL.Vec(IDL.Nat)], [IDL.Nat], []),
    'test' : IDL.Func([], [], []),
    'test_divide' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
