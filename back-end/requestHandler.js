import contactsSchema from "./models/contacts.model.js"
// import pkg from 'jsonwebtoken'
// const {sign} = pkg

export async function addContact(req,res){
    try{
        // console.log(req.body);
       
        const { contact:{Fname,Lname,email,dob,number,altnumber },photo} = req.body;
       console.log(Fname,Lname,email,dob,number,altnumber,photo);
        await contactsSchema 
        .create({Fname,Lname,email,photo,dob,number,altnumber,})
        .then(()=>{
            res.status(201).send({msg:"successully created"});
        })
        .catch((error)=>{
            res.status(404).send({error:error});
        });
        }catch(error){
            res.status(500).send(error)
        }
}












export async function getContact(req,res){
    try {
        const data=await contactsSchema.find();
        res.status(200).send(data)
        console.log(data);
    } catch (error) {
        res.status(500).send(error)
    }
}



export async function getforedit(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
        const data = await contactsSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}







export async function getdataforedit(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
        const data = await contactsSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}












export async function deleteContact(req, res) {
    try {
        const { id } = req.params;
        console.log(id);    

      await contactsSchema.deleteOne({_id:id});
       res.status(200).send({msg:"successfully deleted"})
    } catch (error) {
        console.error(error);
        res.status(400).send({ error});
    }
    
}




export async function updateContact(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
    const {...contact}=req.body
    await contactsSchema.updateOne({_id:id},{$set:{...contact}})
        res.status(201).send({msg:"updated"})
    } catch (error) {
        res.status(400).send(error)
    }
}