export async function getCyberware() {
    try{
        const res = await fetch('http://172.31.10.253:3001/api/cyberware',{cache: 'no-store'})
        return res.json()
    }catch(error){
        throw new Error('Failed to fetch data')
    }
}