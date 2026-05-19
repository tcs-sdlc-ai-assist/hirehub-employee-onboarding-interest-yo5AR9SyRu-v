export function isValidEmail(email) {
  if (typeof email !== 'string' || email.trim() === '') {
    return false;
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function isValidString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function isValidPassword(password) {
  if (typeof password !== 'string' || password.length < 8) {
    return false;
  }
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*]/.test(password);
  return hasLetter && hasNumber && hasSymbol;
}

export function isValidName(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    return false;
  }
  const re = /^[A-Za-z\s-]+$/;
  return re.test(name.trim());
}

export function isValidPhone(phone) {
  if (typeof phone !== 'string' || phone.trim() === '') {
    return false;
  }
  const re = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return re.test(phone.trim());
}

export function isFutureDate(dateStr) {
  if (typeof dateStr !== 'string') {
    return false;
  }
  const date = new Date(dateStr);
  const now = new Date();
  return !isNaN(date) && date > now;
}

export function isNonEmptyObject(obj) {
  return obj && typeof obj === 'object' && Object.keys(obj).length > 0;
}