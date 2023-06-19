import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Item } from "../../types/interface";
import { fetchItems,fetchItemsWithReplies } from "../../helpers/fetch";
import { useRouter } from "next/router";
import NewsContainer from "@/components/news-container";

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    const {query} = context;
    if (query.id==null || query.id==undefined || query.id.length==0 || !Array.isArray(query.id)){
        throw "param id not found in the query param."
    }
    const id = query.id
    const item :Item= await fetchItemsWithReplies 

};
