import crypto from 'crypto'

const generateCode = ()=>{

    let shortCode = crypto.randomBytes(6).toString('base64url').slice(0,6)

    return shortCode
}
export default generateCode