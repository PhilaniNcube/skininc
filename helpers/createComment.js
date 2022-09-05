import supabase from "../utils/supabase";

export default async function createComment(comment, id) {

   const { data, error } = await supabase
    .from("comments")
    .insert([{ text: comment, product_id: id }]);

    if (error) {
      throw new Error(error.message)
    }

    return data
}
