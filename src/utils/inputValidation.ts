export const text_validation = {
    required: {
        value: true,
        message: 'is required'
    }
}

export const email_validation = {
    required: {
        value: true,
        message: 'is required',
    },
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Need a valid email',
    },
}

export const password_validation = {
    required: {
        value: true,
        message: 'is required',
    },
    minLength: {
        value: 6,
        message: 'minimum character of 6'
    }

}


export const file_validation = {
    required: {
        value: true,
        message: 'is required',
    },
    lessThan10MB: (files: any) => files[0]?.size < 30000 || "Max 30kb",
    acceptedFormats: (files: any) =>
        ["image/jpeg", "image/png", "image/gif"].includes(
            files[0]?.type
        ) || "Only PNG, JPEG e GIF"
}