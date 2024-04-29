import {Pinecone} from '@pinecone-database/pinecone';

const apiKey = process.env.PINECONE_API_KEY;


//checking if pinecone is set
if (!apiKey) {
    throw Error("PINECONE_API_KEY is not set");
}

const pinecone = new Pinecone({
    apiKey
})

export const cbeinfoIndex = pinecone.Index('cbeai');