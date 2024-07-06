require("dotenv").config();

const dev={
    app:{
        port:process.env.PORT||5000
    },
    db:{
        url:`mongodb+srv://${process.env.DbUserName}:${process.env.DbPassword}@cluster0.3onslcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`||"mongodb://localhost:27017/",
    }
};

module.exports =dev;

    