export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'clear_counter' : IDL.Func([], [IDL.Nat], []),
    'days_to_second' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'divide' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], ['query']),
    'increment_counter' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'modulo' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], ['query']),
    'show_counter' : IDL.Func([], [IDL.Nat], ['query']),
    'square' : IDL.Func([IDL.Nat], [IDL.Nat], []),
    'test_divide' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
