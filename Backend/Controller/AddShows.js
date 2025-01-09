const AddShows = require("../Models/AddShows")

exports.AddShows = async (req, res, next) => {
    try {
        const { Showimage, Showtype, ShowName, Duration, Cast, ReleaseDate, ShowTiming,  Movietype, Agetype,languages } = req.body

        await AddShows.create({
            Showimage, Showtype, ShowName, Duration, Cast, ReleaseDate, ShowTiming,  Movietype,  Agetype,languages 
        })

            .then(async (getUser) => {
                res.status(201).json({
                    message: "Show Added Successfully",

                });
            })
            .catch((err) => res.status(400).json({
                message: "error while creation",
                error: err.message
            })
            )

    }
    catch (error) {
        res.status(400).json({
            message: "error occured",
            error: error.message
        })
    }
}
exports.getShows = async (req, res, next)=>{
     try {
            const shows = await AddShows.find()
            console.log(shows)
            if (shows.length == 0) {
                res.status(400).json({
                    message: "Shows not found",
                    error: "no shows"
    
                })
    
            } else {
                res.status(200).json({
                    data: shows,
                    status: true
    
                })
    
            }
        } catch (error) {
            res.status(400).json({
                message: "An error occured",
                error: error.message
            })
        }
}








