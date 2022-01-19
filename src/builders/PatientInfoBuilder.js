export function buildPatientInfo(response) {
  let today = new Date();
  let dob = response.data.birthDate;
  let birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  let fullName = response.data.name.find((element) => element.use === "official").text;
  let gender = response.data.gender;
  if (gender === "male" || gender === "Male") {
    gender = "M";
  } else if (gender === "female" || gender === "Female") {
    gender = "F";
  }
  let phoneNumber = response.data.telecom.find((element) => element.system === "phone").value;
  let maritalStatus = response.data.maritalStatus.text;
  const address = response.data.address.find((element) => element.use === "home");
  let addressLine1 = address.line[0];
  let addressLine2 = address.line.length > 1 ? address.line[1] : "";
  let city = address.city;
  let state = address.state;
  let postalCode = address.postalCode;
  let country = address.country;
  return {
    fullName,
    age,
    dob,
    gender,
    phoneNumber,
    maritalStatus,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    country,
  };
}
