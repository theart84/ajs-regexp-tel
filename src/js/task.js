export default function validatePhone(phone) {
  const normalizePhone = phone.replace(/^\+|[-()\s]*/g, '');
  if (normalizePhone.length === 11) {
    return `+${normalizePhone.replace(/^\d/, '7')}`;
  }
  if (normalizePhone.length > 11) {
    return `+${normalizePhone}`;
  }
  normalizePhone.replace(/^\d/, '7');
  return null;
}
