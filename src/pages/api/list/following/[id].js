export default function handler(req, res) {
    res.status(200).json({
        "allIds": ["meo meo"],
        "byId": {
            "meo meo": { "userName": "CDPROJEKTRED", "pictureProfileUrl": "https://pbs.twimg.com/profile_images/1542871208944861185/OM7VRRl5_normal.jpg", "updateTime": 1667446551807, "profileUrl": "https://twitter.com/elonmusk" }
        }
    })
}