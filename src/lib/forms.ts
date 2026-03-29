const polishPhonePattern = /^(?:\+?48)?\d{9}$/;

export const normalizePhone = (value: string) => value.replace(/[^\d+]/g, "");

export const isValidPolishPhone = (value: string) => {
  const normalized = normalizePhone(value);
  const digits = normalized.startsWith("+") ? normalized.slice(1) : normalized;

  return polishPhonePattern.test(digits);
};

export const simulateLeadSubmit = (delayMs = 1000) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, delayMs);
  });
