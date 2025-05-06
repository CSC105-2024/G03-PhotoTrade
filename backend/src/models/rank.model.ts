import { prisma } from '../index.ts'

export const getrank = async () => {
    const topUsers = await prisma.user.findMany({
        orderBy: {
            trade: {
                _count: 'desc',
            },
        },
        take: 10,
        include: {
            _count: {
                select: { trade: true },
            },
        },
    });

    return topUsers
}
