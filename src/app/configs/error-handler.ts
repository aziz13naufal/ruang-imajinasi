export default function errorHandler(error: any) {
    if (error) {
        if (error.response) {
            // showMessage(error.response.data.message, 'error');
            return Promise.reject(error);
        }
    }
}
