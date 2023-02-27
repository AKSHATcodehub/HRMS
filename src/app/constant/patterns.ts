export const PATTERN = {
    email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^[^\s]+$/,
  name: /^[^-`@~\s][a-zA-Z\s-]+$/,
  phone: "^[0-9]+$",
  price: /(^[0][1-9]+)|([1-9]\d*)+$/,
  passRegex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#~^"])[A-Za-z\d@$!%*?&#~^"]{8,}$/,
  string: /(.|\s)*\S(.|\s)*/,
  alphaNumeric: /[^a-z\d]/,
  phoneNumber: /^[1-9][0-9]*$/,
}