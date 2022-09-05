import supabase from "../utils/supabase";


const getComments = async() => {
   let { data: comments, error } = await supabase.from("comments").select("*");
}

export default getComments
