export default axios.create({
    baseURL: 'https://api/paulmbatia.com/api/auth/local',
    headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`
    }
})