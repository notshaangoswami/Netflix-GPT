export const validateFormData=(email,password)=>{
  const validEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const validPassword=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
  if(!validEmail)return "Email is not valid"
  if(!validPassword)return "Password Invalid"

  return null;

}