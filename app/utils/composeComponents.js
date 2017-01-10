export default function composeComponents(component, wrappers = []) {
  return wrappers.reduce((c, wrapper) => wrapper(c), component);
}
