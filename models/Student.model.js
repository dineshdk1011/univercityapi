const mongoose = require("mongoose");
const Sechma = mongoose.Schema;

const studentSechma = new Sechma({
  formsession: {
    type: String,
    default: null,
  },
  campus: {
    type: String,
    default: null,
  },
  institute: {
    type: String,
    default: null,
  },
  formname: {
    type: String,
    default: null,
  },
  formno: {
    type: String,
    default: null,
  },
  enquiryno: {
    type: String,
    default: null,
  },
  telephoneno: {
    type: String,
    default: null,
  },
  scholarno: {
    type: String,
    default: null,
  },
  lastscholarno: {
    type: String,
    default: null,
  },
  enrollno: {
    type: String,
    default: null,
  },
  onlineadmissionno: {
    type: String,
    default: null,
  },
  firstname: {
    type: String,
    default: null,
  },
  middlename: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  bloodgroup: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  fathername: {
    type: String,
    default: null,
  },
  annualincome: {
    type: String,
    default: null,
  },
  mothername: {
    type: String,
    default: null,
  },
  previousinstitute: {
    type: String,
    default: null,
  },
  shitingreason: {
    type: String,
    default: null,
  },
  counselor: {
    type: String,
    default: null,
  },
  consultant: {
    type: String,
    default: null,
  },
  house: {
    type: String,
    default: null,
  },
  university: {
    type: String,
    default: null,
  },
  department: {
    type: String,
    default: null,
  },
  specialization: {
    type: String,
    default: null,
  },
  course: {
    type: String,
    default: null,
  },
  division: {
    type: String,
    default: null,
  },
  specializationminor: {
    type: String,
    default: null,
  },
  registerclass: {
    type: String,
    default: null,
  },
  specializationreason: {
    type: String,
    default: null,
  },
  courseopted: {
    type: String,
    default: null,
  },
  eligibility: {
    type: String,
    default: null,
  },
  totalseat: {
    type: String,
    default: null,
  },
  remainingseat: {
    type: String,
    default: null,
  },
  seatforcategory: {
    type: String,
    default: null,
  },
  remainingseatforcategory: {
    type: String,
    default: null,
  },
  feesession: {
    type: String,
    default: null,
  },
  feecategory: {
    type: String,
    default: null,
  },
  feesplan: {
    type: String,
    default: null,
  },
  paidfees: {
    type: String,
    default: null,
  },
  totalfees: {
    type: String,
    default: null,
  },
  advancereceived: {
    type: String,
    default: null,
  },
  caste: {
    type: String,
    default: null,
  },
  religion: {
    type: String,
    default: null,
  },
  additionalcategory: {
    type: String,
    default: null,
  },
  cocurricular: {
    type: String,
    default: null,
  },
  examcenterchoice: {
    type: String,
    default: null,
  },
  examcentersecondchoice: {
    type: String,
    default: null,
  },
  region: {
    type: String,
    default: null,
  },
  birthdate: {
    type: String,
    default: null,
  },
  admissioncategory: {
    type: String,
    default: null,
  },
  admissiondate: {
    type: String,
    default: null,
  },
  enrolldate: {
    type: String,
    default: null,
  },
  phoneno: {
    type: String,
    default: null,
  },
  mobileno: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  panno: {
    type: String,
    default: null,
  },
  parentemail: {
    type: String,
    default: null,
  },
  parentmobile: {
    type: String,
    default: null,
  },
  aadharno: {
    type: String,
    default: null,
  },
  placeofbirth: {
    type: String,
    default: null,
  },
  nationality: {
    type: String,
    default: null,
  },
  multiplemobileno: {
    type: String,
    default: null,
  },
  registerfileno: {
    type: String,
    default: null,
  },
  shift: {
    type: String,
    default: null,
  },
  whatappno: {
    type: String,
    default: null,
  },
  studentnamealias: {
    type: String,
    default: null,
  },
  country: {
    type: String,
    default: null,
  },
  state: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  pincode: {
    type: String,
    default: null,
  },
  studentstatus: {
    type: String,
    default: null,
  },
  entranceexam: {
    type: String,
    default: null,
  },
  rank: {
    type: String,
    default: null,
  },
  allotmentlist: {
    type: String,
    default: null,
  },
  allotmentcategory: {
    type: String,
    default: null,
  },
  rollno: {
    type: String,
    default: null,
  },
  counsellingdate: {
    type: String,
    default: null,
  },
  counsellingplace: {
    type: String,
    default: null,
  },
  categoryrank: {
    type: String,
    default: null,
  },
  mark: {
    type: String,
    default: null,
  },
  percentile: {
    type: String,
    default: null,
  },
  appid: {
    type: String,
    default: null,
  },
  remark: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  profile: {
    type: String,
    default: null,
  },
  signature: {
    type: String,
    default: null,
  },
  attendance: {
    type: String,
    default: null,
  },
  date: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
});

const student = mongoose.model("student", studentSechma);
module.exports = student;
