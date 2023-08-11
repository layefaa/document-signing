export const handleResponse = (code: number) => {
    switch (code) {
        case 200:
            return {
                message: 'Successful',
                userResponse: 'Successful'
            }
        case 400:
            return {
                message: 'Bad Request',
                userResponse: 'Something Seem wrong, Try Again',
            }
        case 401:
            return {
                message: 'Unauthenticated',
                userResponse: 'Something Seem wrong, Sign In Again',
            }
        case 403:
            return {
                message: 'Forbidden',
                userResponse: 'Not Authorized'
            }
            break;
        default:
            return {
                message: 'Server Error',
                userResponse: 'Something Seem wrong, Try Again'
            }
    }
}

export default handleResponse;