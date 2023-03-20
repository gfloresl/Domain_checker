export const isValidDate = (date) =>
  new Date(date) !== "Invalid Date" && !isNaN(new Date(date));

export const getPropertyName = (str) => {
  console.log(str);
  if (str === "ips") return "IPs";
  if (str === "registrarIANAID: ") return "Registrar IANAID: ";
  return str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
};
