export default function handler(req, res) {
    if (req.method === 'GET') {
        // 
        res.status(200).json({
            
        })
    } else if (req.method === 'POST') {
        // change or add user meta data
        res.status(200).json({
            appUsername: "test",
        })
    } else if (req.method === 'DELETE') {
        // DELETE USER 
        res.status(200).json({
            message: "SUCCESS"
        })
    }
}