import { createFactory } from "hono/factory";
import { zValidator } from "@hono/zod-validator";
import * as argon2 from "argon2";
import { HTTPException } from "hono/http-exception";
import { deleteCookie } from "hono/cookie";

import { prisma } from "../index.ts";
import { registerSchema, type SuccessResponse } from "../types/index.ts";
import { generateNewJWTAndSetCookie } from "../utils/jwt.util.ts";

const factory = createFactory<{
  Variables: {
    userId: number;
  };
}>();

const signUpController = factory.createHandlers(
  zValidator("json", registerSchema),
  async (c) => {
    try {
      const { name, email, password } = c.req.valid("json");
      const { profile_url } = await c.req.json<{ profile_url: string }>();
      const passwordHash = await argon2.hash(password);

      const duplicate = await prisma.user.findFirst({
        where: { name, email },
        select: { name: true, email: true },
      });

      if (duplicate) {
        const nameExists = duplicate.name === name;
        const emailExists = duplicate.email === email;

        const error =
          nameExists && emailExists
            ? "name & email"
            : nameExists
            ? "name"
            : "email";

        throw new HTTPException(409, {
          message: `${error} already exists`,
          cause: { form: true },
        });
      }

      await prisma.user.create({
        data: { name, email, password: passwordHash, profile_url },
      });

      return c.json<SuccessResponse>(
        {
          success: true,
          message: "User created successfully",
        },
        201,
      );
    } catch (error) {
      console.error("Sign-up error:", error);
      throw new HTTPException(500, { message: "Internal Server Error" });
    }
  },
);

const loginController = factory.createHandlers(async (c) => {
  try {
    const { email, password } = await c.req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await argon2.verify(user.password, password))) {
      throw new HTTPException(401, { message: "Invalid credentials" });
    }

    await generateNewJWTAndSetCookie(c, user.id);

    return c.json({ message: "Logged in" });
  } catch (error) {
    console.error("Login error:", error);
    throw new HTTPException(500, { message: "Internal Server Error" });
  }
});

const logoutController = factory.createHandlers(async (c) => {
  try {
    deleteCookie(c, "accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    deleteCookie(c, "refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });

    return c.json({ message: "Logged out" });
  } catch (error) {
    console.error("Logout error:", error);
    throw new HTTPException(500, { message: "Internal Server Error" });
  }
});

const getUser = factory.createHandlers(async (c) => {
  try {
    const userId = c.get("userId");
    const user = await prisma.user.findUnique({ where: { id: userId } });

    return c.json({ data: user });
  } catch (error) {
    console.error("Get user error:", error);
    throw new HTTPException(500, { message: "Internal Server Error" });
  }
});

const getUserById = factory.createHandlers(async (c) => {
  try {
    const id = c.req.param("id");

    if (!id) {
      throw new HTTPException(400, {
        message: 'Missing "id" parameter in the URL. Example: /users/123',
        cause: { form: true },
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        id: parseInt(id),
      },
      include: {
        creates: true,
      },
    });

    if (!user) {
      throw new HTTPException(404, {
        message: "User not found in the database",
        cause: { form: true },
      });
    }

    return c.json<SuccessResponse<{ name: string; bio: string | null }>>(
      {
        success: true,
        message: "Fetched user by ID successfully",
        data: user,
      },
      200,
    );
  } catch (error) {
    console.error("Get user by ID error:", error);
    throw new HTTPException(500, { message: "Internal Server Error" });
  }
});

const getUserAll = factory.createHandlers(async (c) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        bio: true,
        create_at: true,
        update_at: true,
      },
    });

    return c.json({
      success: true,
      message: "Fetched all users",
      data: users,
    });
  } catch (error) {
    console.error("Get all users error:", error);
    throw new HTTPException(500, { message: "Internal Server Error" });
  }
});

const updateUserProfile = factory.createHandlers(
  async (c) => {
    try {
      const id = Number(c.req.param('id'));
      const { name, bio, email } = await c.req.json();

      const user = await prisma.user.update({
        where: { id },
        data: { name, bio, email },
      });

      return c.json({
        success: true,
        message: 'Profile updated',
        data: user,
      });
    } catch (error) {
      console.error("Update user profile error:", error);
      throw new HTTPException(500, { message: "Internal Server Error" });
    }
  }
);

const getFollowCount = factory.createHandlers(async (c) => {
  try {
    const id = c.req.param("id");

    if (!id) {
      throw new HTTPException(400, {
        message: 'Missing "id" parameter in the URL. Example: /users/123',
        cause: { form: true },
      });
    }

    const newId = parseInt(id)
    const countFollower = await prisma.user_Follow.count({
      where: { follower_id: newId },
    });
    const countFollowing = await prisma.user_Follow.count({
      where: { following_id: newId },
    });

    const isFollow = await prisma.user_Follow.findFirst({
      where: {
        follower_id: newId,
      },
      select: {
        is_follow: true
      }
    })

    return c.json(
      { success: true, 
        followerCount: countFollowing,
        followingCount: countFollower,
        isFollow: isFollow
      }
    );
  } catch (error) {
    console.error("Get follower count error:", error);
    throw new HTTPException(500, { message: "Internal Server Error" });
  }
});


export {
  signUpController,
  loginController,
  logoutController,
  getUser,
  getUserById,
  getUserAll,
  updateUserProfile,
  getFollowCount
};