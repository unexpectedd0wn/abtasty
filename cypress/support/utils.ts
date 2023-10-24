export function emailGenerator() {
    // Declare variables for email format and possible values
    const emailFormat = "<emailPrefix>@<emailDomain>";
    const emailPrefixes = ["test", "user", "random", "example"];
    const emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
    
    // Generate random values for email prefix and domain
    const randomEmailPrefix = emailPrefixes[Math.floor(Math.random() * emailPrefixes.length)];
    const randomEmailDomain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
    
    // Replace placeholders in email format with randomly selected values
    const generatedEmail = emailFormat
        .replace("<emailPrefix>", randomEmailPrefix)
        .replace("<emailDomain>", randomEmailDomain);
        
    // Return generated email address
    return generatedEmail;
  }
  
  
  export function passwordGenerator() {
    var length = 8,
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
  }