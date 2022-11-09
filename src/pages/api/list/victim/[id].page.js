export default function handler(req, res) {
    res.status(200).json({
        "allIds": ["meo_meo", "gaugau"],
        "byId": {
            "meo_meo": { "userName": "CDPROJEKTRED", "totalFollowing": 10, "pictureProfileUrl": "https://pbs.twimg.com/profile_images/1542871208944861185/OM7VRRl5_normal.jpg", "createTime": 1667446551807, "updateTime": 1667446551807, "profileUrl": "https://twitter.com/elonmusk", "id": "meo_meo" },
            "gaugau": { "userName": "CDPROJEKTRED", "totalFollowing": 10, "pictureProfileUrl": "https://pbs.twimg.com/profile_images/1542871208944861185/OM7VRRl5_normal.jpg", "createTime": 1667446551807, "updateTime": 1667446551807, "profileUrl": "https://twitter.com/elonmusk", "id": "gaugau" }
        }
    })
}