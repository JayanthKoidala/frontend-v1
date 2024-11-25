export const apiConfig = {
  panAuth: {
    documentationProps: {
      apiName: "PAN Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/pan-auth",
      description: "API to authenticate Permanent Account Number (PAN) issued by Income Tax Department",
      providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
        { name: "DigiLocker", url: "https://digilocker.gov.in", img: "digilocker_logo.png" },
        { name: "Experian", url: "https://www.experian.com", img: "experian_logo.png" },
        { name: "Paytm", url: "https://paytm.com", img: "paytm_logo.png" },
        { name: "Zeta", url: "https://www.zeta.tech", img: "zeta_logo.png" },
        { name: "CRED", url: "https://cred.club", img: "cred_logo.png" },
        { name: "ClearTax", url: "https://cleartax.in", img: "cleartax_logo.png" },
        { name: "KYC Hub", url: "https://kychub.com", img: "kychub_logo.png" },
        { name: "Aadhaar", url: "https://uidai.gov.in", img: "aadhaar_logo.png" },
        { name: "BankBazaar", url: "https://www.bankbazaar.com", img: "bankbazaar_logo.png" },
        { name: "PolicyBazaar", url: "https://www.policybazaar.com", img: "policybazaar_logo.png" },
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "PAN number is valid.",
        data: {
          panHolderName: "John Doe",
          panStatus: "Active",
        },
      },
      errorResponse: {
        status: "error",
        message: "Invalid PAN number.",
      },
    },
    tryoutProps: {
      apiName: "PAN Authentication",
      placeholder: "Enter PAN number (e.g. ABCDE1234F)",
      defaultInput: "ABCDE1234F",
      validateInput: (input) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "PAN number is valid.",
        data: {
          panHolderName: "John Doe",
          panStatus: "Active",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Invalid PAN number.",
      },
    },
  },

  panAdvanced: {
    documentationProps: {
      apiName: "PAN Advanced API",
      apiUrl: "https://testapi.tenancio.in/v2/pan-advanced",
      description: "Advanced API to retrieve additional information about the PAN cardholder",
      providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "PAN details retrieved successfully.",
        data: {
          panHolderName: "John Doe",
          panStatus: "Active",
          dateOfBirth: "1990-01-01",
          fatherName: "Richard Doe",
        },
      },
      errorResponse: {
        status: "error",
        message: "Unable to retrieve PAN details.",
      },
    },
    tryoutProps: {
      apiName: "PAN Advanced",
      placeholder: "Enter PAN number (e.g. ABCDE1234F)",
      defaultInput: "ABCDE1234F",
      validateInput: (input) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "PAN details retrieved successfully.",
        data: {
          panHolderName: "John Doe",
          panStatus: "Active",
          dateOfBirth: "1990-01-01",
          fatherName: "Richard Doe",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Unable to retrieve PAN details.",
      },
    },
  },

  aadhaarAuth: {
    documentationProps: {
      apiName: "Aadhaar Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/aadhaar-auth",
      description: "API to authenticate Aadhaar number issued by UIDAI",
      providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
        {name: "DigiLocker", url: "digilocker.gov.in", img: "digilocker_logo.png"}
      ],      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "Aadhaar number is valid.",
        data: {
          aadhaarHolderName: "Jane Doe",
          aadhaarStatus: "Active",
        },
      },
      errorResponse: {
        status: "error",
        message: "Invalid Aadhaar number.",
      },
    },
    tryoutProps: {
      apiName: "Aadhaar Authentication",
      placeholder: "Enter Aadhaar number (e.g. 1234-5678-9012)",
      defaultInput: "123456789012",
      validateInput: (input) => /^[0-9]{12}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "Aadhaar number is valid.",
        data: {
          aadhaarHolderName: "Jane Doe",
          aadhaarStatus: "Active",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Invalid Aadhaar number.",
      },
    },
  },

  assetVehicleAuth: {
    documentationProps: {
      apiName: "Asset Vehicle Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/vehicle-auth",
      description: "API to authenticate and verify vehicle ownership and registration details",
      providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "Vehicle details retrieved successfully.",
        data: {
          ownerName: "John Doe",
          vehicleType: "SUV",
          registrationDate: "2015-06-15",
          registrationNumber: "KA01AB1234",
        },
      },
      errorResponse: {
        status: "error",
        message: "Vehicle details not found.",
      },
    },
    tryoutProps: {
      apiName: "Asset Vehicle Authentication",
      placeholder: "Enter vehicle registration number (e.g. KA01AB1234)",
      defaultInput: "KA01AB1234",
      validateInput: (input) => /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "Vehicle details retrieved successfully.",
        data: {
          ownerName: "John Doe",
          vehicleType: "SUV",
          registrationDate: "2015-06-15",
          registrationNumber: "KA01AB1234",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Vehicle details not found.",
      },
    },
  },

  electricityBillAuth: {
    documentationProps: {
      apiName: "Electricity Bill Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/electricity-bill-auth",
      description: "API to verify electricity bill payment and ownership details",
providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
      ],      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "Electricity bill details verified successfully.",
        data: {
          billHolderName: "John Doe",
          billAmount: 1200,
          dueDate: "2024-10-25",
        },
      },
      errorResponse: {
        status: "error",
        message: "Electricity bill details not found.",
      },
    },
    tryoutProps: {
      apiName: "Electricity Bill Authentication",
      placeholder: "Enter consumer number (e.g. 1234567890)",
      defaultInput: "1234567890",
      validateInput: (input) => /^[0-9]{10}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "Electricity bill details verified successfully.",
        data: {
          billHolderName: "John Doe",
          billAmount: 1200,
          dueDate: "2024-10-25",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Electricity bill details not found.",
      },
    },
  },

  employmentAuth: {
    documentationProps: {
      apiName: "Employment Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/employment-auth",
      description: "API to verify employment details",
      providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "Employment details verified successfully.",
        data: {
          employeeName: "John Doe",
          companyName: "ABC Corp",
          employmentStatus: "Active",
        },
      },
      errorResponse: {
        status: "error",
        message: "Employment details not found.",
      },
    },
    tryoutProps: {
      apiName: "Employment Authentication",
      placeholder: "Enter employee ID (e.g. EMP12345)",
      defaultInput: "EMP12345",
      validateInput: (input) => /^[A-Z]{3}[0-9]{5}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "Employment details verified successfully.",
        data: {
          employeeName: "John Doe",
          companyName: "ABC Corp",
          employmentStatus: "Active",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Employment details not found.",
      },
    },
  },

  gasBillAuth: {
    documentationProps: {
      apiName: "Gas Bill Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/gas-bill-auth",
      description: "API to verify gas bill payment and ownership details",
providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
      ],      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "Gas bill details verified successfully.",
        data: {
          billHolderName: "Jane Doe",
          billAmount: 850,
          dueDate: "2024-10-20",
        },
      },
      errorResponse: {
        status: "error",
        message: "Gas bill details not found.",
      },
    },
    tryoutProps: {
      apiName: "Gas Bill Authentication",
      placeholder: "Enter consumer number (e.g. 0987654321)",
      defaultInput: "0987654321",
      validateInput: (input) => /^[0-9]{10}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "Gas bill details verified successfully.",
        data: {
          billHolderName: "Jane Doe",
          billAmount: 850,
          dueDate: "2024-10-20",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Gas bill details not found.",
      },
    },
  },

  vehicleRegistrationAuth: {
    documentationProps: {
      apiName: "Vehicle Registration Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/vehicle-registration-auth",
      description: "API to verify vehicle registration details",
      providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "Vehicle registration details verified successfully.",
        data: {
          ownerName: "John Doe",
          vehicleType: "Sedan",
          registrationDate: "2018-05-10",
        },
      },
      errorResponse: {
        status: "error",
        message: "Vehicle registration details not found.",
      },
    },
    tryoutProps: {
      apiName: "Vehicle Registration Authentication",
      placeholder: "Enter vehicle registration number (e.g. KA02CD5678)",
      defaultInput: "KA02CD5678",
      validateInput: (input) => /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "Vehicle registration details verified successfully.",
        data: {
          ownerName: "John Doe",
          vehicleType: "Sedan",
          registrationDate: "2018-05-10",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Vehicle registration details not found.",
      },
    },
  },

  waterBillAuth: {
    documentationProps: {
      apiName: "Water Bill Authentication API",
      apiUrl: "https://testapi.tenancio.in/v2/water-bill-auth",
      description: "API to verify water bill payment and ownership details",
      providers: [
        { name: "Karza", url: "https://karza.in", img: "karza_logo.png" },
        { name: "Signzy", url: "https://signzy.com", img: "signzy_logo.png" },
      ],
      headers: [
        { name: "Authorization", value: "Bearer <token>" },
        { name: "Content-Type", value: "application/json" },
      ],
      successResponse: {
        status: "success",
        message: "Water bill details verified successfully.",
        data: {
          billHolderName: "John Doe",
          billAmount: 450,
          dueDate: "2024-10-15",
        },
      },
      errorResponse: {
        status: "error",
        message: "Water bill details not found.",
      },
    },
    tryoutProps: {
      apiName: "Water Bill Authentication",
      placeholder: "Enter consumer number (e.g. 1122334455)",
      defaultInput: "1122334455",
      validateInput: (input) => /^[0-9]{10}$/.test(input),
      mockSuccessResponse: {
        status: "success",
        message: "Water bill details verified successfully.",
        data: {
          billHolderName: "John Doe",
          billAmount: 450,
          dueDate: "2024-10-15",
        },
      },
      mockErrorResponse: {
        status: "error",
        message: "Water bill details not found.",
      },
    },
  },
};
