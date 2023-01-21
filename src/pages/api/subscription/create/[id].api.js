export default function handler(req, res) {
    if (req.method === 'POST') {
        // Create subscription payment session
        res.status(200).json({
            message: "SUCCESS",
            url: "https://www.example.com/payment"
        })
    }
}