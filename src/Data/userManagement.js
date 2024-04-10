export const userManagementData = [
  { id: 1, title: "Add User", icon: "fa-plus-circle", color: "primary" },
  { id: 2, title: "Edit User", icon: "fa-pencil-square", color: "success" },
  { id: 3, title: "Delete User", icon: "fa-trash", color: "info" },
];
export const addUserDetails = [
  { id: 1, title: "Fullname", type: "text", name: "fullname", isInput: true },
  { id: 2, title: "Email", type: "text", name: "fullname", isInput: true },
  {
    id: 3,
    title: "Password",
    type: "password",
    name: "fullname",
    isInput: true,
  },
  {
    id: 4,
    title: "Confirm Password",
    type: "password",
    name: "fullname",
    isInput: true,
  },
  {
    id: 5,
    title: "Role",
    type: "role",
    name: "role",
    isInput: false,
    subValue: [
      { id: 1, value: "Guest", label: "guest" },
      { id: 2, value: "SME(Subject Matter Expert)", label: "SME" },
      { id: 3, value: "Nodal Center Instructor", label: "NCI" },
      { id: 4, value: "Admin", label: "admin" },
    ],
  },
  {
    id: 6,
    title: "Age",
    type: "age",
    name: "age",
    isInput: true,
  },
  {
    id: 7,
    title: "Gender",
    type: "age",
    name: "gender",
    isInput: false,
    subValue: [
      { id: 1, value: "Male", label: "Male" },
      { id: 2, value: "Female", label: "Female" },
      { id: 3, value: "Others", label: "Others" },
    ],
  },
  {
    id: 8,
    title: "Phone Number",
    type: "number",
    name: "phonenumber",
    isInput: true,
  },
  {
    id: 9,
    title: "State",
    type: "text",
    name: "state",
    isInput: true,
  },
  {
    id: 10,
    title: "Country",
    type: "text",
    name: "country",
    isInput: true,
  },
  {
    id: 11,
    title: "Profession",
    type: "text",
    name: "profession",
    isInput: true,
  },
  {
    id: 12,
    title: "College",
    type: "text",
    name: "college",
    isInput: true,
  },
  {
    id: 13,
    title: "Subject",
    type: "text",
    name: "subject",
    isInput: true,
  },
  {
    id: 14,
    title: "University",
    type: "text",
    name: "university",
    isInput: true,
  },
];
