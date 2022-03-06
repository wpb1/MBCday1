import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'add' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'clear_counter' : () => Promise<bigint>,
  'days_to_second' : (arg_0: bigint) => Promise<bigint>,
  'divide' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'increment_counter' : (arg_0: bigint) => Promise<bigint>,
  'is_even' : (arg_0: bigint) => Promise<boolean>,
  'max_in_array' : (arg_0: Array<bigint>) => Promise<bigint>,
  'max_in_array2' : (arg_0: Array<bigint>) => Promise<bigint>,
  'modulo' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'remove_from_array' : (arg_0: Array<bigint>, arg_1: bigint) => Promise<
      Array<bigint>
    >,
  'show_counter' : () => Promise<bigint>,
  'square' : (arg_0: bigint) => Promise<bigint>,
  'sum_of_array' : (arg_0: Array<bigint>) => Promise<bigint>,
  'test' : () => Promise<undefined>,
  'test_divide' : (arg_0: bigint, arg_1: bigint) => Promise<boolean>,
}
