import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'add' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'clear_counter' : () => Promise<bigint>,
  'days_to_second' : (arg_0: bigint) => Promise<bigint>,
  'divide' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'increment_counter' : (arg_0: bigint) => Promise<bigint>,
  'modulo' : (arg_0: bigint, arg_1: bigint) => Promise<bigint>,
  'show_counter' : () => Promise<bigint>,
  'square' : (arg_0: bigint) => Promise<bigint>,
  'test_divide' : (arg_0: bigint, arg_1: bigint) => Promise<boolean>,
}
