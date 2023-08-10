export const text_validation = {
  required: {
    value: true,
    message: 'Is required'
  }
}

export const email_validation = {
    required: {
      value: true,
      message: 'Is required',
    },
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Need a valid email',
    },
}