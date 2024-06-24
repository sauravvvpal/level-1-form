export const validate = (values) => {
    let errors = {};
  
    if (!values.name) {
      errors.name = 'Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age <= 0) {
      errors.age = 'Age must be greater than 0';
    }
  
    if (values.attendingWithGuest && !values.guestName) {
      errors.guestName = 'Guest Name is required';
    }
  
    return errors;
  };
  