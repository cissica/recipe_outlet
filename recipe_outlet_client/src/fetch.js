const apiBaseURL = 'http://localhost:3000/'

export const GET = url => {
    return fetch(`${apiBaseURL}${url}`,

    )
}


