
import { PATTERN } from "./patterns";

export const PATTERN_ERRORS = (pattern:any, key:any):any => {
  if (pattern === PATTERN.email.toString()) {
    return `Please enter a valid ${key.toLowerCase()}`;
  }
  if (pattern === PATTERN.password.toString()) {
    return `${(key)} can not contain blank spaces`;
  }
  if (pattern === PATTERN.name.toString()) {
    return `Please enter a valid ${key.toLowerCase()}`;
  }
  if (pattern === PATTERN.passRegex.toString()) {
    return `Please enter a strong password`;
  }
  if (pattern === PATTERN.phone.toString()) {
    return `${(key)} must contain only digits`;
  }
  if (pattern === PATTERN.price.toString()) {
    return `${(key)} must be numeric`;
  }
};
