const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'PemhzwzHYWKw2QgWQai4';

export const getScores = async () => {

    try {
        const res = await fetch(`${baseUrl}games/${gameId}/scores`)
        const result = await res.json();
        return result;
    } catch (error) {
        console.log('Error :', error)
    }
}


export const addScore = async (body) => {
console.log(body)
    try {
        const res = await fetch(`${baseUrl}games/${gameId}/scores`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(body)
        })
        const result = await res.json();
        return result;
    } catch (error) {
        console.log('Error :', error)
    }
}