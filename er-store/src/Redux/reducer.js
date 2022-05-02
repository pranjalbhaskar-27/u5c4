

 


 const initialData = {
     admin:""
 }


 const todoReducers = (state=initialData,action) => {
     
     switch(action.type) 
     {
         case "admin":

        
       

     
          
         return{
             ...state,    //pehle ka jobhi data h usko get karna this is initial data
             admin:
                action.payload
                 }
             
               
          
         
         


        //  case "DELETE_TODO":

        //     // const {id,data}  = action.payload;
        //     const newList=state.list.filter((e) => e.id!=action.id)   ///jisko click kiya us waali id ko chor dega
        //     return{
        //         ...state,    //pehle ka jobhi data h usko get karna
        //         list :newList,    //baaki jo bachhega wo saari details dusri item ko de dega
                
                
        //     }







         default:return state;
     
 }
}


 export default todoReducers
