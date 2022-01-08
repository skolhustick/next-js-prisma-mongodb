import prisma from './prisma'

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})
  return users
}

export const getUser = async id => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}

export const createUser = async (email, name, birthYear) => {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      birthYear
    }
  })
  return user
}

export const updateUser = async (id, updateData) => {
  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return user
}

export const deleteUser = async id => {
  const user = await prisma.user.delete({
    where: {
      id
    }
  })
  return user
}
