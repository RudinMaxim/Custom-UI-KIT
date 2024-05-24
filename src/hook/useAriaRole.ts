/**
 * Determines the appropriate ARIA role for a given React element type.
 *
 * If a role is provided as a prop, it will be used. Otherwise, the function will
 * determine the most appropriate role based on the element type.
 *
 * Native HTML elements like `button`, `input`, `select`, `textarea`, and `a` will
 * not have a role assigned. Elements like `section`, `nav`, `aside`, and `main`
 * will be assigned the `region` role. All other elements will have a role
 * assigned based on the element type.
 *
 * @param elementType - The React element type to determine the role for.
 * @param role - The optional role prop provided for the element.
 * @returns The appropriate ARIA role for the element, or `undefined` if no role
 * should be assigned.
 */
export const useAriaRole = (
  elementType: React.ElementType,
  role?: string
): string | undefined => {
  if (role) {
    return role;
  }

  const nativeRolesElements = ['button', 'input', 'select', 'textarea', 'a'];

  const regionRolesElements = ['section', 'nav', 'aside', 'main'];

  if (nativeRolesElements.includes(elementType as string)) {
    return undefined;
  }

  if (regionRolesElements.includes(elementType as string)) {
    return 'region';
  }

  return elementType as string;
};
