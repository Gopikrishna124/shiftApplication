const mongoose = require("mongoose");
const { Schema } = mongoose;

const incidencemodel = new Schema(
  {
    location: { type: String },
    date: { type: String },
    time: { type: String },
    typeOfIncidence: { type: String },
    addressOfLocation: { type: String },
    afterIncident: { type: String },
    actualIncidence: { type: String },
    dateOfReport: { type: String },
    person1: { type: String },
    phone1: { type: String },
    person2: { type: String },
    phone2: { type: String },
    person3: { type: String },
    phone3: { type: String },
    personAffected: { type: String },
    personCompletingForm: { type: String },
    personInjured: { type: String },
    reportBy: { type: String },
    roleOfPerson: { type: String },
    whatHappened: { type: String },
  },
  { timestamps: true }
);

const Incidence = mongoose.model("Incidence", incidencemodel);

exports.module = Incidence;
