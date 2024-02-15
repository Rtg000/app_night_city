export async function getCyberware() {
    try{
        const res = await fetch('http://192.168.8.71:3001/api/cyberware',{cache: 'no-store'})
        return res.json()
    }catch(error){
        throw new Error('Failed to fetch data')
    }
}