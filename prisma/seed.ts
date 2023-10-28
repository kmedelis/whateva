import { prisma } from "@/lib/prisma";

async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'test@test.com' },
        update: {},
        create: {
            email: 'test@test.com',
            name: 'Test User',
            password: `$2y$12$GBfcgD6XwaMferSOdYGiduw3Awuo95QAPhxFE0oNJ.Ds8qj3pzEZy`,
        },
    });

    const seller = await prisma.seller.create({
        data: {
            phone: '1234567890',
            languages: ['English', 'Lithuanian'],
            availability: ['Morning', 'Afternoon']
        }
    });

    console.log({ user, seller });
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
