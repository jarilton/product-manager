export const normalizeCurrency = (value: string, styled = false): string => {
  if (!value) {
    return value;
  }

  const parsedValue = Number(value.replace(/\D/g, "")) / 100;

  if (styled) {
    return parsedValue.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
  return parsedValue.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
};
