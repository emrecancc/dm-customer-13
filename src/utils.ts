export function processUser(user) {
  const { street } = user ?? {};
  // other logic can remain unchanged
  return street;
}
