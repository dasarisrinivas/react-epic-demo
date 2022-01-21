import moment from "moment";
import { buildPatientInfo } from "../builders/PatientInfoBuilder";
/***** Actions *****/
export const FHIR_GET_DATA = "FHIR/GET_DATA";
const FHIR_GET_DATA_FAILED = "FHIR/GET_DATA_FAILED";
const FHIR_GET_DATA_SUCCEEDED = "FHIR/GET_DATA_SUCCEEDED";
export const FHIR_LOAD_SAMPLE_DATA = "FHIR/LOAD_SAMPLE_DATA";

const TOGGLE_EXAMPLE_VISIBILITY = "TOGGLE_EXAMPLE_VISIBILITY";

const ADD_EXAMPLE_DATA = "ADD_EXAMPLE_DATA";

const ADD_PATIENT_INFO = "ADD_PATIENT_INFO";

const ADD_WELLNESS_OPTIONS = "ADD_WELLNESS_OPTIONS";

const UPDATE_WELLNESS_OPTIONS = "UPDATE_WELLNESS_OPTIONS";

/***** Reducers *****/
const defaultFhirDataState = {
  byResource: {
    patient: { title: "Patient", status: "", error: null, icon: "male" },
  },

  sampleDataLoaded: false,

  allResourcesLoaded: false,

  // This will contain data as
  //    {phi: "", deidentified: "", title: "MRN", need: "Medical Record Number", hidden: true}
  examples: {
    // mrn: {phi: "s123", deidentified: "123123", title: "MRN", hidden: true},
    // dob: {phi: "asdasdsa", deidentified: "123123", title: "Date of Birth", hidden: true}
  },
};

export function fhirDataReducer(state = defaultFhirDataState, action) {
  switch (action.type) {
    case FHIR_LOAD_SAMPLE_DATA:
      return {
        ...state,
        sampleDataLoaded: true,
        allResourcesLoaded: true,
        byResource: {
          patient: {
            ...state.byResource.patient,
            status: "loaded",
            error: null,
          },
          conditions: {
            ...state.byResource.conditions,
            status: "loaded",
            error: null,
          },
          familyMemberHistories: {
            ...state.byResource.familyMemberHistories,
            status: "loaded",
            error: null,
          },
        },
        examples: {
          gender: {
            need: "Gender",
            title: "Gender",
            phi: "male",
            deidentified: "male",
            hidden: true,
          },
          dob: {
            need: "Age",
            title: "Date of Birth",
            phi: moment().subtract(48, "years").format("YYYY-MM-DD"),
            deidentified: "48 year old",
            hidden: true,
          },
          mrn: {
            need: "Unique key",
            title: "Medical Record Number",
            phi: "E83833",
            deidentified: 'May be possible with "Expert Determination" method',
            hidden: true,
          },
          hdl: {
            need: "HDL within the last six months",
            title: "HDL Observation",
            phi:
              "38 mg/dL measured on " +
              moment().subtract(2, "months").format("YYYY-MM-DD"),
            deidentified: "38 mg/dL",
            hidden: true,
          },
          radiation: {
            need: "Past chest radiation?",
            title: "Radiation",
            phi:
              "Chest radiation on " +
              moment().subtract(9, "years").format("YYYY-MM-DD"),
            deidentified: "No",
            hidden: true,
          },
          diabetes: {
            need: "Is diabetic?",
            title: "Diabetes Condition",
            phi: "Type 1 diabetes mellitus (CMS/HCC) with onset date 2010-08-17",
            deidentified: "Has diabetes, ignore the onset date",
            hidden: true,
          },
        },
      };

    case FHIR_GET_DATA:
      return {
        ...state,
        allResourcesLoaded: false,
        byResource: {
          ...state.byResource,
          [action.resourceType]: {
            ...state.byResource[action.resourceType],
            error: null,
            status: "loading",
          },
        },
      };

    case FHIR_GET_DATA_FAILED:
      return {
        ...state,
        byResource: {
          ...state.byResource,
          [action.resourceType]: {
            ...state.byResource[action.resourceType],
            error: action.error,
            status: "failed",
          },
        },
      };

    case FHIR_GET_DATA_SUCCEEDED:
      let allResourcesLoaded = !Object.keys(state.byResource).some(
        (resourceType) => {
          return resourceType === action.resourceType
            ? false
            : state.byResource[resourceType].status !== "loaded";
        }
      );
      return {
        ...state,
        allResourcesLoaded: allResourcesLoaded,
        byResource: {
          ...state.byResource,
          [action.resourceType]: {
            ...state.byResource[action.resourceType],
            error: null,
            status: "loaded",
          },
        },
      };

    case ADD_EXAMPLE_DATA:
      let info = {
        need: action.need,
        title: action.title,
        phi: action.phi,
        deidentified: action.deidentified,
        hidden: true,
      };
      return {
        ...state,
        examples: { ...state.examples, [action.key]: info },
      };

    case ADD_PATIENT_INFO:
      let patientInfo = {
        id: action.patientId,
        fullName: action.fullName,
        age: action.age,
        dob: action.dob,
        gender: action.gender,
        phoneNumber: action.phoneNumber,
        maritalStatus: action.maritalStatus,
        addressLine1: action.addressLine1,
        addressLine2: action.addressLine2,
        city: action.city,
        state: action.state,
        postalCode: action.postalCode,
        country: action.country,
        complaints: action.complaints,
        pastHealthIssues: action.pastHealthIssues,
        medication: action.medication,
        physicalExam: action.physicalExam,
        pastPhysicalTestsOrdered: action.pastPhysicalTestsOrdered,
        illnessDescription: action.illnessDescription,
        abnormalPhysicalTests: action.abnormalPhysicalTests,
        assessmentPlan: action.assessmentPlan,
      };
      return {
        ...state,
        patientInfo,
      };

    case ADD_WELLNESS_OPTIONS:
      let wellnessOptions = {
        signsOfDVT: action.signsOfDVT,
        isPEDiagnosis: action.isPEDiagnosis,
        isHeartRateAbove100: action.isHeartRateAbove100,
        isSurgeryin4Weeks: action.isSurgeryin4Weeks,
        isPEOrDVTDiagnosed: action.isPEOrDVTDiagnosed,
        hemotypsis: action.hemotypsis,
        maligancyOrpalliative: action.maligancyOrpalliative,
      };
      return {
        ...state,
        wellnessOptions,
      };
    
    case UPDATE_WELLNESS_OPTIONS: 
      return {
        ...state,
        wellnessOptions: {
          ...state.wellnessOptions,
          [action.key] : action.value
        },
    };

    case TOGGLE_EXAMPLE_VISIBILITY:
      return {
        ...state,
        examples: {
          ...state.examples,
          [action.exampleKey]: {
            ...state.examples[action.exampleKey],
            hidden: !state.examples[action.exampleKey].hidden,
          },
        },
      };

    default:
      return state;
  }
}

/***** Action Creators *****/
const getFHIRDataFailed = (resourceType) => ({
  type: FHIR_GET_DATA_FAILED,
  resourceType,
});
const getFHIRDataSucceeded = (resourceType, response) => ({
  type: FHIR_GET_DATA_SUCCEEDED,
  resourceType,
  response,
});

export const loadSampleData = () => (dispatch) => {
  dispatch({ type: FHIR_LOAD_SAMPLE_DATA });
};

export const toggleExampleVisibility = (exampleKey) => ({
  type: TOGGLE_EXAMPLE_VISIBILITY,
  exampleKey,
});



export const addExampleData = (key, need, title, phi, deidentified) => ({
  type: ADD_EXAMPLE_DATA,
  key,
  need,
  phi,
  deidentified,
  title,
});

export const addPatientInfo = (
  id,
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
  complaints,
  pastHealthIssues,
  medication,
  physicalExam,
  pastPhysicalTestsOrdered,
  illnessDescription,
  abnormalPhysicalTests,
  assessmentPlan
) => ({
  type: ADD_PATIENT_INFO,
  id,
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
  complaints,
  pastHealthIssues,
  medication,
  physicalExam,
  pastPhysicalTestsOrdered,
  illnessDescription,
  abnormalPhysicalTests,
  assessmentPlan,
});

export const addWellnessOptions = (
  signsOfDVT,
  isPEDiagnosis,
  isHeartRateAbove100,
  isSurgeryin4Weeks,
  isPEOrDVTDiagnosed,
  hemotypsis,
  maligancyOrpalliative
) => ({
  type: ADD_WELLNESS_OPTIONS,
  signsOfDVT,
  isPEDiagnosis,
  isHeartRateAbove100,
  isSurgeryin4Weeks,
  isPEOrDVTDiagnosed,
  hemotypsis,
  maligancyOrpalliative,
});

export const updateWellnessOptions = (key, value) => ({
  type: UPDATE_WELLNESS_OPTIONS,
  key: key,
  value: value

});

export const getFHIRData = (resourceType) => (dispatch, getState) => {
  dispatch({ type: FHIR_GET_DATA, resourceType });

  let state = getState();
  let patientId = state.fhirAuth.patientId;
  let client = state.fhirAuth.client;

  if (resourceType === "patient") {
    client
      .read({ type: "Patient", id: patientId })
      .then((response) => {
        const {
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
        } = buildPatientInfo(response);

        let complaints = [];
        let pastHealthIssues = [];
        let medication = [];
        let physicalExam = [];
        let pastPhysicalTestsOrdered = [];
        let illnessDescription = "";
        let abnormalPhysicalTests = [];
        let assessmentPlan = [];

        let wellnessOptions = {
          signsOfDVT: true,
          isPEDiagnosis: undefined,
          isHeartRateAbove100: true,
          isSurgeryin4Weeks: false,
          isPEOrDVTDiagnosed: true,
          hemotypsis: false,
          maligancyOrpalliative: false,
        };
        dispatch(
          addWellnessOptions(
            wellnessOptions.signsOfDVT,
            wellnessOptions.isPEDiagnosis,
            wellnessOptions.isHeartRateAbove100,
            wellnessOptions.isSurgeryin4Weeks,
            wellnessOptions.isPEOrDVTDiagnosed,
            wellnessOptions.hemotypsis,
            wellnessOptions.maligancyOrpalliative
          )
        );
        dispatch(
          addPatientInfo(
            patientId,
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
            complaints,
            pastHealthIssues,
            medication,
            physicalExam,
            pastPhysicalTestsOrdered,
            illnessDescription,
            abnormalPhysicalTests,
            assessmentPlan
          )
        );
        dispatch(getFHIRDataSucceeded(resourceType, response));
      })
      .catch((err) => {
        console.log("Error!");
        console.log(err);
        dispatch(getFHIRDataFailed(resourceType));
      });
  } else {
    alert("Unexpected resource type requested '" + resourceType + "'.");
    return dispatch(getFHIRDataFailed(resourceType));
  }
};
