export default function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'PUT') {
        res.status(200).json({ message: 'SUCCESS' })
    } else if (req.method === 'DELETE') {
        res.status(200).json({ message: 'SUCCESS' })
    } else {
        res.status(404)
    }
}