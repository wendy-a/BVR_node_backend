const BvsRecord = require("../model/bvsRecord");

module.exports = {
    // get record detail
    getRecordDetail: (req, res) => {
        console.log(req.params);
        BvsRecord.findById(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },

    // get all record of a user
    getUserHistory: (req, res) => {
        BvsRecord.find({email: req.params.email})
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },

    // create record
    createRecord: (req, res) => {
        console.log(req.body)
        BvsRecord.create(req.body)
            .then(record => res.json(record))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    },

    // update record
    updateRecord: (req, res) => {
        BvsRecord.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(updatedRecord => res.json(updatedRecord))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    }
}