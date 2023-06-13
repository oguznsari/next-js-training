import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req) => {
    try {
        await connect();
        const posts = await Post.find();

        return new NextResponse(
            JSON.stringify(posts),
            { status: StatusCodes.OK }
        );
    } catch (error) {
        return new NextResponse(
            "Database Error",
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}