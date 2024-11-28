import axios from 'axios';
import { TFormData } from "@/components/main-sections/contact-section";

export const sendEmail = async (data: TFormData) => {
    const apiEndpoint = '/api/email';

    try {
        const response = await axios.post(apiEndpoint, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert(response.data.message);
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            alert(error.response.data.message || 'An error occurred');
        } else {
            alert('An unexpected error occurred');
        }
    }
};
