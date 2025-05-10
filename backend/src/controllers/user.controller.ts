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
    const { name, email, password } = c.req.valid("json");
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
      data: { name, email, password: passwordHash },
    });

    return c.json<SuccessResponse>(
      {
        success: true,
        message: "User created successfully",
      },
      201,
    );
  },
);

const loginController = factory.createHandlers(async (c) => {
  const { email, password } = await c.req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await argon2.verify(user.password, password))) {
    throw new HTTPException(401, { message: "Invalid credentials" });
  }

  await generateNewJWTAndSetCookie(c, user.id);

  return c.json({ message: "Logged in" });
});

const logoutController = factory.createHandlers(async (c) => {
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
});

const getUser = factory.createHandlers(async (c) => {
  const userId = c.get("userId");
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return c.json({ data: user });
});

const getUserById = factory.createHandlers(async (c) => {
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
});

const getUserAll = factory.createHandlers(async (c) => {
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
});

 const updateUserProfile = factory.createHandlers(
  async (c) => {
    const id = Number(c.req.param('id'));
    const { name, bio } = await c.req.json();

    const user = await prisma.user.update({
      where: { id },
      data: { name, bio },
    });

    return c.json({
      success: true,
      message: 'Profile updated',
      data: user,
    });
  }
);

 const getFollowerCount = factory.createHandlers(async (c) => {
  const id = Number(c.req.param('id'));
  const count = await prisma.user_Follow.count({
    where: { following_id: id },
  });
  return c.json({ success: true, followerCount: count });
});

 const getFollowingCount = factory.createHandlers(async (c) => {
  const id = Number(c.req.param('id'));
  const count = await prisma.user_Follow.count({
    where: { follower_id: id },
  });
  return c.json({ success: true, followingCount: count });
});




export {
  signUpController,
  loginController,
  logoutController,
  getUser,
  getUserById,
  getUserAll,
  updateUserProfile,
  getFollowerCount,
  getFollowingCount,
};
