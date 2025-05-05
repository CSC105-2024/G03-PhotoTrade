import { prisma } from '../index.ts'

export const getrank = async () => {
    const result = await prisma.trade.groupBy({
        by: ['user_id'], _count: { user_id: true },
        orderBy:
            { _count: { user_id: 'desc' } },
        take: 10
    })

    const users = await prisma.user.findMany({
        where: { id: { in: result.map(r => r.user_id) } },
        select: { id: true, name: true }
    })

    return result.map((info, rank) => ({
        rank: rank + 1,
        user_id: info.user_id,
        user_name: users.find(u => u.id === info.user_id)?. name || '',
        total_sales: info._count.user_id
    }))
}
