import credentials from '../../../config/credentials.json'
export const makeLoginRequest = () => {
    return { password: credentials.password , username: credentials.username }
}