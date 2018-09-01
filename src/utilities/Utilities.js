export const updateObject = (oldObject, updatedProperteis) => {
  return {
    ...oldObject,
    ...updatedProperteis
  };
};

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numericPattern = /^\d+$/;

/**
 *
 * @param {string} input
 * @param {Object} rules
 * @param {Object} depends
 */
export const validateInput = (input, rules, depends) => {
  let isValid = true;

  // Validate rules if it is not empty
  if (rules) {
    Object.entries(rules).map(([rKey, rValue]) => {
      switch (rKey) {
        case "required":
          isValid = isValid && input.trim() !== "";
          break;
        case "minLength":
          isValid = isValid && input.trim().length >= rValue;
          break;
        case "maxLength":
          isValid = isValid && input.trim().length <= rValue;
          break;
        case "isEmail":
          // eslint-disable-next-line
          isValid = isValid && emailPattern.test(input);
          break;
        case "isNumeric":
          isValid = isValid && numericPattern.test(input);
          break;
        default:
          isValid = isValid;
      }
    });
  }

  // Validate dependencies if it is not empty
  if (depends) {
    Object.entries(depends).map(([dKey, dValue]) => {
      switch (dKey) {
        case "equalTo":
          isValid = isValid && input.trim() === dValue;
          break;
        default:
          isValid = isValid;
      }
    });
  }
  
  return isValid;
};
