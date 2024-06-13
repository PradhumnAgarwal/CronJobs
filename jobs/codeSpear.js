import fetch from 'node-fetch';
const backendURL = 'https://codespear-1qu9.onrender.com/';

async function codeSpear(){
    async function callApi() {
        try {
            const response = await fetch(backendURL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = response;
            console.log('CodeSpear Backend Response:', data.status);
        } catch (error) {
            console.error('Error calling API:', error); 
        }
    }

    setInterval(callApi, 13 * 60 * 1000);

    callApi();
}

export default codeSpear;