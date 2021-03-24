import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();
 


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes); 
const CONNECTION_URL ='mongodb+srv://alex2018:alex2018@cluster0.ukfqm.mongodb.net/tunev2?retryWrites=true&w=majority';  

const PORT = process.env.PORT || 5000 ;

 mongoose.connect(CONNECTION_URL, {useNewUrlParser:true,useUnifiedTopology:true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);

/*const connectDB =async ()=> {*/

 /* (async function (){
  try {
    const con= await mongoose.connect( CONNECTION_URL, { 
      useNewUrlParser:true , 
      useUnifiedTopology:true,
      useCreateIndex:true
  });
  console.log(`Database connected:${con.connection.host}`);
}
   catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
    
  }
})*/

/*export default connectDB;
*/
/*

  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/