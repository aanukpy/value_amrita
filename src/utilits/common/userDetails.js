import { getValue } from "../../helpers/localStorage";

const userRoleDetails = () => {
  const userRole = getValue("userRole");
  let role = "";

  if (userRole === "1") {
    role = "ADMIN";
  } else if (userRole === "2") {
    role = "SME";
  } else if (userRole === "3") {
    role = "NCI";
  } else if (userRole === "4") {
    role = "GUEST";
  }
  return role;
};

export { userRoleDetails };
