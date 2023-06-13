import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req, { params }) => {
    const { id } = params;

    try {
        await connect();
        const post = await Post.findById(id);

        return new NextResponse(
            JSON.stringify(post),
            { status: StatusCodes.OK }
        );
    } catch (error) {
        return new NextResponse(
            "Database Error",
            { status: StatusCodes.INTERNAL_SERVER_ERROR }
        );
    }
}