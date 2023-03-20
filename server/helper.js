export const validateIp  = (IP) => {
  // Regex expression for validating IPv4
  const ipv4 = /(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/;
  // Regex expression for validating IPv6
  const ipv6 = /((([0-9a-fA-F]){1,4})\:){7}([0-9a-fA-F]){1,4}/;
  return IP.match(ipv4) || IP.match(ipv6);
}

export const validateUrl = (urlString) => {
  const regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"); 
  const without_regex = new RegExp("^([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
  return regex.test(urlString) || without_regex.test(urlString);
}
