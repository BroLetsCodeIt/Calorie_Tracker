import BreakfastModel from "../models/Student.js";
class StudentController {
   
    static createDoc = async (req ,res) =>{
        // console.log(req.body);
        try {
            const {name , calorie} = req.body;
            const datee = new Date();
            const valdate = datee.getDate() + datee.getMonth() + datee.getFullYear();
            const doc = new BreakfastModel({
                breakfastname : name,
                calorie : calorie,
                date : valdate
            })

            // saving the document

            const result = await doc.save();
            res.redirect('/student');
        } catch (error) {
            console.log(error);
        }
    }

    static getAllDoc = async (req ,res) =>{
        try {
            const result = await BreakfastModel.find();
            // result.map((val , key) => {console.log(val)})
            res.render('index.ejs', {data : result});

        } catch (error) {
            console.log(error);
        }
        // res.render('index.ejs');
        
    }

    static editDoc = async (req ,res) =>{
        // console.log(req.params.id);
        // console.log(req.body);
        try {
         const result = await BreakfastModel.findById(req.params.id);
         
         res.render('edit.ejs',{data : result});
        } catch (error) {
            console.log(error);
        }
        
    }

    static updateDocById = async (req ,res) =>{
        // console.log(req.params.id);
        // console.log(req.body);
        try {
            const result = await BreakfastModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/student');
        } catch (error) {
            console.log(error);
        }
    
    }

    static deleteDocById = async (req ,res) =>{
        try {
            const result = await BreakfastModel.findByIdAndDelete(req.params.id) 
            res.redirect('/student');
        } catch (error) {
            console.log(error);
        }
       
    }
}
export default StudentController;