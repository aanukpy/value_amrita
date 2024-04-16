export const NodalManagmentData = [
    { id: 1, title: "Add Nodal Center", icon: "fa-plus-circle", color: "primary" },
    { id: 2, title: "Edit Nodal Center", icon: "fa-pencil-square", color: "success" },
    { id: 3, title: "Delete Nodal Center", icon: "fa-trash", color: "info" },
  ];
  export const NodalDetails = [
    {  id: 1, title: "School Name", type: "text",name: "schoolName",isInput: true },
    { id: 2, title: "School Address", type: "text", name: "SchoolAddress", isInput: true },
    {
      id: 3,
      title: "state",
      type: "text",
      name: "state",
      isInput: false,
      subValue: [
        { id: 1, value: "Andhra Pradesh", label: "Andhra Pradesh" },
        { id: 2, value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
        { id: 3, value: "Assam", label: "Assam" },
        { id: 4, value: "Bihar", label: "Bihar" },
        { id: 4, value: "Chhattisgarh", label: "Chhattisgarh" },
        { id: 4, value: "", label: "" },
        { id: 4, value: "", label: "" },
        { id: 4, value: "", label: "" },
        { id: 4, value: "", label: "" },
        { id: 4, value: "", label: "" },
        { id: 4, value: "", label: "" },

      ],
    },
    {
      id: 4,
      title: "District",
      type: "text",
      name: "District",
      isInput: false,
      subValue: [
        { id: 1, value: "under_18", label: "Under 18" },
        { id: 2, value: "18_24", label: "18-24" },
        { id: 3, value: "25_34", label: "25-34" },
        { id: 4, value: "35_44", label: "35-44" },
        { id: 5, value: "45_54", label: "45-54" },
        { id: 6, value: "55_64", label: "55-64" },
        { id: 7, value: "65_over", label: "65 and over" },
      ],
    },
    {
      id: 5,
      title: "Pincode",
      type: "pincode",
      name: "pincode",
      isInput: true,
    },
  ];
  